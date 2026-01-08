import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  published_at: string;
}

export const revalidate = 60;

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error || !data) {
      return null;
    }

    return data;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title}`,
    description: post.title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-2xl py-10">
      <article className="prose prose-gray max-w-none flex flex-col gap-2">
        {/* back arrow and title */}
        <div className="flex flex-row gap-4 items-center">
          <Link href="/collections/blog">
            <img
              className="w-5 h-5 opacity-67 cursor-pointer"
              src="/icons/leftarrow.png"
            />
          </Link>
          <span className="text-2xl font-bold pen-regular mt-1">
            {post.title}
          </span>
        </div>

        {/* body text */}
        <div className="text-left text-sm leading-relaxed prose prose-gray prose-headings:font-bold prose-a:text-blue-600 prose-a:hover:opacity-70 prose-img:rounded-lg prose-img:shadow-md max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
