export const revalidate = 60; // 1 minute'

import { BlogContent } from "@/components/BlogContent";

export const mockAuthor = {
  id: "a1",
  name: "John Doe",
  image: "https://i.pravatar.cc/150?img=3",
};

export const mockTags = [
  { id: "t1", name: "Next.js" },
  { id: "t2", name: "React" },
  { id: "t3", name: "Web Development" },
];

export const mockPost = {
  id: "p1",
  createdAt: new Date("2025-08-01T09:00:00Z"),
  teamId: "team1",
  description: "A beginner’s guide to building fast and scalable web apps.",
  title: "Getting Started with Next.js",
  content: `
    <h1>Introduction</h1>
    <p>This is a mock blog post about Next.js.</p>
    <h2>Why Next.js?</h2>
    <p>It makes building modern web apps easier with SSR, SSG, and ISR.</p>
    <faq question="What is Next.js?" answer="It is a React framework for building web applications." />
  `,
  slug: "getting-started-with-nextjs",
  image: "https://picsum.photos/id/1018/800/450",
  authorId: "a1",
  updatedAt: new Date("2025-08-02T10:00:00Z"),
  publishedAt: new Date("2025-08-01T12:00:00Z"),
  tags: mockTags,
  author: mockAuthor,
};

export const mockRelatedPosts = [
  {
    id: "p2",
    createdAt: new Date("2025-08-05T09:00:00Z"),
    teamId: "team1",
    description:
      "Learn how to organize and write clean utility CSS with Tailwind.",
    title: "TailwindCSS Best Practices",
    content: "<p>Utility-first styling tips for scalable projects.</p>",
    slug: "tailwindcss-best-practices",
    image: "https://picsum.photos/id/1025/800/450",
    authorId: "a2",
    updatedAt: new Date("2025-08-05T11:00:00Z"),
    publishedAt: new Date("2025-08-05T10:00:00Z"),
    tags: [
      { id: "t4", name: "CSS" },
      { id: "t2", name: "React" },
    ],
    author: {
      id: "a2",
      name: "Jane Smith",
      image: "https://i.pravatar.cc/150?img=5",
    },
  },
  {
    id: "p3",
    createdAt: new Date("2025-08-10T08:00:00Z"),
    teamId: "team1",
    description:
      "Server Components let you render parts of your app on the server.",
    title: "Understanding Server Components in Next.js",
    content: "<p>Server Components explained simply.</p>",
    slug: "understanding-server-components",
    image: "https://picsum.photos/id/1035/800/450",
    authorId: "a3",
    updatedAt: new Date("2025-08-10T15:00:00Z"),
    publishedAt: new Date("2025-08-10T14:00:00Z"),
    tags: [{ id: "t1", name: "Next.js" }],
    author: {
      id: "a3",
      name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?img=8",
    },
  },
];

interface Params {
  slug: string;
}

export default async function BlogPost(props: { params: Promise<Params> }) {
  const params = await props.params;

  const { slug } = params;

  console.log("slug", slug);

  return (
    <>
      <BlogContent post={mockPost} relatedPosts={mockRelatedPosts} />
    </>
  );
}
