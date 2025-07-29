import { MetaBalls } from "./cursor-animation/Metaballs";
import Hero from "./Hero";


const Home = () => {
  return (
    <div className="relative w-screen ">
      <div className="absolute z-0 h-full w-full">
        <MetaBalls
          color="#a8a29e"
          cursorBallColor="#a8a29e"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
      </div>
      <div className="z-10">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
