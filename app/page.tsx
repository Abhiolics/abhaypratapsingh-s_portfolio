import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery"
import Explore from "@/components/Explore"
import Landing from "@/components/Landing"
import Menu from "@/components/Menu"
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center 
  flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems}/>
    {/* <Menu/> */}
   <Hero/>
   <Grid/>
   <RecentProjects/>
   <Landing/>
   <Clients/>
   <Experience/>
  <Approach/>
  {/* <Gallery/> */}
  {/* <Explore/> */}
  <Footer/>
    </div>
  </main>
  );
}
