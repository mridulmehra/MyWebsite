import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="border-t w-full px-6 lg:px-20 py-4 text-zinc-500">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between w-full">
        <div className="flex flex-row items-center justify-between space-x-4">
          <Button size={"sm"} variant={"link"} asChild>
            <Link href={"https://github.com/mridulmehra"} target="_blank">
              GitHub
            </Link>
          </Button>
          <Button size={"sm"} variant={"link"} asChild>
            <Link href={"https://leetcode.com/u/Mridulmehra/"} target="_blank">
              Leetcode
            </Link>
          </Button>
        </div>

        <div className="text-sm">
          © 2025 Mridul Mehra. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
