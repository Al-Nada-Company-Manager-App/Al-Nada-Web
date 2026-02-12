import { Hero } from "@/components/features/home/Hero";
import { About } from "@/components/features/home/About";
import { Features } from "@/components/features/home/Features";
import { Services } from "@/components/features/home/Services";
import { Partners } from "@/components/features/home/Partners";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Features />
      <Services />
      <Partners />
    </div>
  );
}
