import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}