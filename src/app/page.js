import Hero from "../components/Hero/Page";
import { Services } from "../components/Services/Page";

export default function Home() {
  const videoSrc = '/hero.mp4';

  return (
    <div >
      <Hero videoSrc={videoSrc} />
      <Services/>
    </div>
  );
}