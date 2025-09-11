export const revalidate = 60; // 1 minute

import { BlogPostList } from "@/components/BlogPostList";
import { PostPagination } from "@/components/PostPagination";
import { FilterBar } from "../../components/FilterBar";
import { FullWidthHeader } from "../../components/FullWidthHeader";
import { config } from "../../config";

const { title, description } = config;

export const mockPosts = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    description:
      "A beginner’s guide to building fast and scalable web applications with Next.js.",
    image: "https://picsum.photos/id/1018/800/450", // mock image
    publishedAt: new Date("2025-08-01T10:00:00Z"),
    createdAt: new Date("2025-07-25T08:00:00Z"),
    updatedAt: new Date("2025-08-01T11:00:00Z"),
    author: {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=3",
    },
  },
  {
    id: "2",
    slug: "tailwindcss-best-practices",
    title: "TailwindCSS Best Practices",
    description:
      "Learn how to organize and write clean, reusable utility-first CSS with Tailwind.",
    image: "https://picsum.photos/id/1025/800/450",
    publishedAt: new Date("2025-08-10T09:30:00Z"),
    createdAt: new Date("2025-08-05T07:45:00Z"),
    updatedAt: new Date("2025-08-10T10:00:00Z"),
    author: {
      name: "Jane Smith",
      image: "https://i.pravatar.cc/150?img=5",
    },
  },
  {
    id: "3",
    slug: "understanding-server-components",
    title: "Understanding Server Components in Next.js",
    description:
      "Server Components allow you to render parts of your app on the server. Here’s everything you need to know.",
    image: "https://picsum.photos/id/1035/800/450",
    publishedAt: new Date("2025-08-15T14:20:00Z"),
    createdAt: new Date("2025-08-10T12:00:00Z"),
    updatedAt: new Date("2025-08-15T15:00:00Z"),
    author: {
      name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?img=8",
    },
  },
];


export default async function Page(props: {
  searchParams?: Promise<{ query: string; page: string }>;
}) {
  console.log(props)
  const searchParams = await props.searchParams;


  return (
    <>
      <FullWidthHeader
        title={title}
        description={description}
      />
      <div className="container mx-auto max-w-6xl">
        <FilterBar active="latest" className="my-8" />
        <BlogPostList posts={mockPosts} />
        <PostPagination
          pagination={
            {
              page: 1,
              limit:'all',
              nextPage:1,
              prevPage:1,
              totalPages: 10,
            }
          }
          className="my-16"
          query={searchParams?.query}
        />
      </div>
    </>
  );
}
