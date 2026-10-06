import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GradientWaves from "@/components/GradientWaves";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <div className="page-waves" aria-hidden="true">
        <GradientWaves
          horizonColor="#1C3A33"
          waveColor="#4E846D"
          crestColor="#AAD8B6"
          speed={0.3}
          amplitude={2.5}
          waveScale={0.6}
          swell={35}
          turbulence={20}
          detail="medium"
          fogDepth={38}
          brightness={1.1}
          opacity={1}
          mouseInteraction={true}
          parallaxStrength={0.25}
          grain={false}
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Footer />
      </main>
    </div>
  );
}