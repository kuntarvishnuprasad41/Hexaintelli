import { Footer } from "src/components/Footer/page";
import Hero from "../components/Hero/Page";
import { Services } from "../components/Services/Page";
import { Work } from "src/components/Work/page";

export default function Home() {
  const videoSrc = '/videos/background.mp4';

  return (
    <div >
      <Hero videoSrc={videoSrc} />
      <Services/>
      <Work/>
      <Footer/>
    </div>
  );
}