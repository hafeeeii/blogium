"use client";
import { mockPost, mockRelatedPosts } from "@/app/post/[slug]/page";
import { formatFullDate } from "@/lib/date";
import Image from "next/image";
import Link from "next/link";
import { FullWidthHeader } from "./FullWidthHeader";
import { RelatedPosts } from "./RelatedPosts";

export const BlogContent = ({
  post = mockPost,
  relatedPosts = mockRelatedPosts,
}: {
  post?: typeof mockPost;
  relatedPosts?: typeof mockRelatedPosts;
}) => {
  return (
    <>
      <FullWidthHeader
        title={post.title}
        description={post.description || ""}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: post.title, href: "" },
        ]}
      />
      <div className="container mx-auto mt-8 px-4 max-w-6xl">
        <div className="flex items-center gap-2">
          <Image
            src={post.author.image || ""}
            alt={post.author.name || ""}
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="font-medium">{post.author.name}</div> |
          <div>
            Published on{" "}
            {post.publishedAt ? formatFullDate(post.publishedAt) : "N/A"}
          </div>
        </div>

        <div className="flex">
          <div className=" prose prose-lg max-w-none w-full break-words blog-content">
            <div>
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                nesciunt sint quidem molestiae dolore, adipisci alias
                voluptatibus, harum aperiam, temporibus enim tenetur dolores
                corrupti in vero iure repudiandae. Quia unde est veritatis qui
                architecto praesentium exercitationem quo accusamus. Eos omnis
                quis id repellat itaque, consequatur distinctio reprehenderit
                animi sed quidem? Ex sunt laudantium pariatur aliquid distinctio
                quibusdam officiis quidem numquam odit. Quam, rerum officia
                itaque est ratione iure aperiam minima nesciunt, recusandae
                magnam sit corrupti nulla ad illo architecto tempore vero
                voluptate dolores. Iste eius at officiis molestiae recusandae
                sequi, repellendus sapiente nihil. Perferendis fugit minus unde
                repellendus provident, minima beatae in veritatis tempore non
                nam assumenda fuga similique libero distinctio. Impedit qui
                dolorem earum quod ea saepe atque quas sapiente odio consectetur
                quaerat recusandae aliquid, sit quos quidem omnis maxime esse,
                corrupti veniam! Beatae ut recusandae suscipit quia molestias
                voluptatibus temporibus unde vel dolor consequatur enim
                voluptatem libero officia quisquam, culpa aliquid aut voluptas
                nihil. Minus, eos repudiandae iusto iure molestias ea tenetur
                ipsam? Obcaecati, exercitationem? Ut error magnam ducimus
                possimus aspernatur laboriosam optio dolorum enim placeat
                aperiam repudiandae quod quo, esse tempora asperiores, animi
                doloribus excepturi corrupti rem incidunt voluptas. Quas dolor,
                pariatur sit, at commodi itaque provident cum voluptate eligendi
                cumque ducimus necessitatibus sunt facilis? Tempora magni est
                voluptatem esse alias natus recusandae hic inventore, ratione,
                at perspiciatis dolorem minima ea, illo eum architecto excepturi
                quae debitis nisi doloribus vel consequuntur! Nostrum nemo ullam
                tempora tenetur inventore error! Quod illo vel debitis
                voluptate, sit fuga atque! Voluptatum voluptatibus maxime beatae
                eveniet maiores porro magni aspernatur odio ullam unde, possimus
                dolor non odit iure et vel. Similique voluptate eaque non
                deserunt nam nesciunt illo eius. Laborum maiores consequuntur
                incidunt quis alias itaque blanditiis a saepe, delectus mollitia
                voluptatum optio illum earum accusantium sapiente porro at quos
                nulla atque.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8 space-x-2">
          {post.tags.map((tag) => (
            <Link href={`/category/${tag.name}`} key={tag.id}>
              #{tag.name}
            </Link>
          ))}
        </div>

        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  );
};
