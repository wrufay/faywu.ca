import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published_at: string;
}

export const revalidate = 60;

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, published_at")
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (error) {
      return [];
    }

    return data || [];
  } catch (error) {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-2xl flex flex-grow justify-center items-center fade-in">
      {posts.length === 0 ? (
        <p className="text-gray-500">nothing here yet.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/collections/notebook/${post.slug}`}
              className="block hover:opacity-70 transition-opacity"
            >
              <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                <h2 className="text-base font-semibold mb-2">{post.title}</h2>

                <div className="flex items-center gap-4  justify-center text-xs text-gray-400">
                  <time dateTime={post.published_at} className="coding-regular">
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    •{" "}
                    {new Date(post.published_at).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                      timeZone: "America/New_York",
                      timeZoneName: "short",
                    })}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
