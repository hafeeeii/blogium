export const dynamic = "force-dynamic";
export const revalidate = 60;

import Link from "next/link";
import { mockPost } from "../post/[slug]/page";
import { FullWidthHeader } from "@/components/FullWidthHeader";

export default async function Page() {
  const result = mockPost;

  return (
    <>
      <FullWidthHeader
        title="Categories"
        description="Browse blog posts by category"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Category", href: `/category/` },
        ]}
      />
      <div className="container mx-auto text-xl px-4 mb-10 max-w-6xl">
        {result.tags.map((tag) => (
          <Link key={tag.id} href={`/category/${tag.name}`}>
            <div className="inline-block mr-4 mt-2">#{tag.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
