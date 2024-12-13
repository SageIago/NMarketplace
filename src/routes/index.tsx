import Footer from "@/components/layouts/footer";
import Hero from "@/components/layouts/hero";
import Navbar from "@/components/layouts/navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <div className="px-0 lg:px-12 py-0 lg:py-10">
        <main className="padding-container mx-container flex flex-col justify-between gap-2">
          <Hero />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Index;
