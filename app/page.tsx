import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";

const HomePage = () => (
  <main id="main" tabIndex={-1} className="overflow-x-clip outline-none">
    <Hero />
    <TechStack />
    <SelectedWork />
    <Services />
    <About />
    <Process />
    <Contact />
  </main>
);

export default HomePage;
