import { Footer } from "src/components/Footer/page";
import Hero from "../components/Hero/Page";
import { Services } from "../components/Services/Page";

export default function Home() {
  const videoSrc = '/background.mp4';

  return (
    <div >
      <Hero videoSrc={videoSrc} />
      <Services/>
      <Footer/>
    </div>
  );
}