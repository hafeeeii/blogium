export const revalidate = 60; // 1 minute

import { mockPosts } from "@/app/(app)/page";
import { BlogPostList } from "@/components/BlogPostList";
import { FilterBar } from "@/components/FilterBar";
import { FullWidthHeader } from "@/components/FullWidthHeader";
import { PostPagination } from "@/components/PostPagination";
import { config } from "@/config";


export default async function Page(props: {
  searchParams?: Promise<{ query: string; page: string }>;
  params: Promise<{ tag: string }>;
}) {
  const params = await props.params;

  const { tag } = params;

  const searchParams = await props.searchParams;
  const category = config.categories.find((c) => c.tag === tag);
  const { label, description } = category || {
    label: `#${tag}`,
    description: `Blog posts tagged with #${tag}`,
  };

  return (
    <>
      <FullWidthHeader
        title={label}
        description={description}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Category", href: `/category/` },
          { label, href: `/category/${tag}` },
        ]}
      />
      <div className="container mx-auto max-w-6xl">
        <FilterBar active={tag} className="my-8" />
        <BlogPostList posts={mockPosts} />
        <PostPagination
          pagination={{
            page: 1,
            limit: "all",
            nextPage: 1,
            prevPage: 1,
            totalPages: 10,
          }}
          className="my-16"
          query={searchParams?.query}
          basePath={`/category/${tag}`}
        />
      </div>
    </>
  );
}
