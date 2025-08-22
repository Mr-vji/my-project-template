import { Loader, Preload, Scroll, ScrollControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";

function App() {
   return (
      <>
         <Leva collapsed />
         <Loader />
         <Stats />
         <Canvas shadows camera={{ position: [0, 3, 10], fov: 30 }}>
            <Preload all />
            <color attach="background" args={["#131017"]} />
            <Experience />
         </Canvas>
      </>
   );
}

export default App;
