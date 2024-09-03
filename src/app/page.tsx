import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 xl:gap-12">
        <h1 className="flex flex-col uppercase leading-[80%] text-[clamp(72px,7vw,500px)] font-semibold">
          <span>
            <span className="tiempos italic">©</span>
            <span>Jason</span>
          </span>
          <span>Zubiate.</span>
        </h1>

        <p className="text-center">Currently in development, come back soon.</p>
      </div>
    </main>
  );
}
