import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  tags: string[];
}

export const revalidate = 60;

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, published_at, tags")
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
              href={`/blog/${post.slug}`}
              className="block hover:opacity-70 transition-opacity"
            >
              <article className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                {post.excerpt && (
                  <p className="text-gray-600 mb-3">{post.excerpt}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <time dateTime={post.published_at}>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-amber-100 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
