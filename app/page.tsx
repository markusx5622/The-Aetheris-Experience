import Hero from "@/components/Hero";
import Bento from "@/components/Bento";
import Chronicle from "@/components/Chronicle";
import Archive from "@/components/Archive";
import Portal from "@/components/Portal";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background min-h-screen relative">
      <Hero />
      <Bento />
      <Chronicle />
      <Archive />
      <Portal />
    </main>
  );
}
