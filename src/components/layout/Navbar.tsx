import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-1">
      <Link
        href={"/about"}
        className="flex items-center justify-center w-full py-2 rounded-md bg-neutral-200 bg-opacity-80 hover:bg-opacity-60 text-xs font-medium hover:text-neutral-600 transition-all duration-300"
      >
        About
      </Link>
      <Link
        href={"/work"}
        className="flex items-center justify-center w-full py-2 rounded-md bg-neutral-200 bg-opacity-80 hover:bg-opacity-60 text-xs font-medium hover:text-neutral-600 transition-all duration-300"
      >
        Work
      </Link>
      <Link
        href={"/contact"}
        className="flex items-center justify-center w-full py-2 rounded-md bg-neutral-200 bg-opacity-80 hover:bg-opacity-60 text-xs font-medium hover:text-neutral-600 transition-all duration-300"
      >
        Contact
      </Link>
    </nav>
  );
}
