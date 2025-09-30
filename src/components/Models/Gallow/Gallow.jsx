import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Gallow = ({ modelUrl = "/gallowModel.glb", textureUrl = "/gallowTexture.png" }) => {
  const gltf = useGLTF(modelUrl);

  useEffect(() => {
    if (textureUrl) {
      const texture = new THREE.TextureLoader().load(textureUrl);
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ map: texture });
          child.material.needsUpdate = true;
        }
      });
    } else {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
          child.material.needsUpdate = true;
        }
      });
    }

    gltf.scene.rotation.y = Math.PI / 6;
    gltf.scene.rotation.x = 0;
  }, [gltf, textureUrl]);

  return <primitive object={gltf.scene} />;
};

export default Gallow;
