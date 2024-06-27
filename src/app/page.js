import Hero from "@/Components/Hero/Page";
import { Services } from "@/Components/Services/Page";

export default function Home() {
  const videoSrc = '/hero.mp4';

  return (
    <div >
      <Hero videoSrc={videoSrc} />
      <Services/>
    </div>
  );
}