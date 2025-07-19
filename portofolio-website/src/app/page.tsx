import { Content } from "../components/layout/Content";
import { Hero } from "../components/layout/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex p-[48px]">
      <Hero />
      <Content />
    </div>
  );
}
