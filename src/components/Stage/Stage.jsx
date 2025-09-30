import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";
import Gallow from "../Models/Gallow/Gallow";
import Cactus from "../Models/Cactus/Cactus";
import Floor from "../Models/Floor/Floor";
import Stickman from "../Models/Stickman/Stickman";


const Scene = () => {
  // Generamos las posiciones solo 1 vez
  const cactusPositions = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        x: (Math.random() - 0.5) * 20,
        z: (Math.random() - 0.5) * 20,
      })),
    []
  );

  const cactusModels = [
    "/cactusModel1.glb",
    "/cactusModel2.glb",
    "/cactusModel3.glb",
  ];

  const cactusRandomModels = useMemo(
    () =>
      Array.from({ length: cactusPositions.length }, () =>
        cactusModels[Math.floor(Math.random() * cactusModels.length)]
      ),
    [cactusPositions]
  );


  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      camera={{ position: [0, 6, 3], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Gallow />

      {cactusPositions.map((pos, index) => (
        <Cactus
          key={index}
          modelUrl={cactusRandomModels[index]}
          textureUrl="/cactusTexture.png"
          position={[pos.x, 0, pos.z]}
          scale={[0.8, 0.8, 0.8]}
          rotation={[0, Math.random() * Math.PI * 2, 0]}
        />
      ))}
      <Stickman isHome={false} />
      <Floor />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 2.9}
        maxPolarAngle={Math.PI / 2.9}
        enablePan={false}
      />
    </Canvas>

  );
};

export default Scene;
