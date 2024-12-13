import Lenis from "./components/Lenis";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function Home() {

  return (
    <Lenis>
      <main className="app">
        <Hero />

        <Projects />

        <About />

        <Banner />
        
      </main>
    </Lenis>
  );
}
