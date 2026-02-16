import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

/**
 * Main page — Server Component composing all sections.
 *
 * Single-page layout: Navbar fixed at top, sections scroll
 * vertically with smooth scrolling. Each section is a
 * Client Component (needs useTranslation hook).
 *
 * The page itself is a Server Component — it doesn't need
 * client-side JS, it just composes the sections.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
