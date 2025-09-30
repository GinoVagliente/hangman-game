import { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Cactus = ({
  modelUrl = "/cactusModel.glb",
  textureUrl = "/cactusTexture.png",
  position = [0, 0, 0],
  rotation = [0, Math.PI / 6, 0],
  scale = [1, 1, 1],
}) => {
  const gltf = useGLTF(modelUrl);

  const clonedScene = useMemo(() => gltf.scene.clone(true), [gltf]);

  useEffect(() => {
    if (textureUrl) {
      const texture = new THREE.TextureLoader().load(textureUrl);
      clonedScene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ map: texture });
          child.material.needsUpdate = true;
        }
      });
    } else {
      clonedScene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
          child.material.needsUpdate = true;
        }
      });
    }
  }, [clonedScene, textureUrl]);

  return (
    <primitive
      object={clonedScene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

export default Cactus;
