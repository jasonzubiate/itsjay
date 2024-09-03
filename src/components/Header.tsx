import Link from "next/link";
import StackSlider from "./layout/StackSlider";
import Navbar from "./layout/Navbar";

export default function Header() {
  return (
    <header className="relative">
      <Link
        href={"/"}
        className="absolute top-0 left-0 flex px-4 py-2 rounded-md bg-black bg-opacity-80 text-xs text-neutral-50 transition-colors duration-300"
      >
        <span className="tiempos italic">©</span>
        itsjay.us
      </Link>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-1 w-full max-w-[500px] mx-auto">
        <Navbar />
        <StackSlider />
      </div>

      <button className="absolute top-0 right-0 flex px-4 py-2 rounded-md bg-neutral-200 bg-opacity-80 hover:bg-opacity-60 text-xs transition-all duration-300">
        Press <span className="offbit-101-bold mx-1">/</span>for ?
      </button>
    </header>
  );
}
