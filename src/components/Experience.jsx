import { OrbitControls, Text } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const Experience = () => {
   return (
      <>
         <OrbitControls />
         <EffectComposer>
            <Bloom intensity={0.8} luminanceThreshold={1} mipmapBlur />
         </EffectComposer>
         {/* it's my own template  */}
         <Text>
            Mr_Vji
            <meshNormalMaterial side={2} />
         </Text>
      </>
   );
};
