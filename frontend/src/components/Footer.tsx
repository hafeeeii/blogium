import { config } from "@/config";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="container mx-auto my-4 px-4 max-w-6xl">
      <div className="flex justify-between items-center">
        <div className="text-sm mt-4">
          © {config.organization} {new Date().getFullYear()}
        </div>
        <div className="text-xs text-muted-foreground hidden lg:block">
          <Link
            href={`/`}
          >
            Blog powered by Nextjs
          </Link>
        </div>
      </div>
    </div>
  );
};
