import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";

const Leg = ({ position, visible = true }) => {
  const { scene } = useGLTF("/armModel.glb");
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  
  return (
    <primitive
      object={clonedScene}
      position={position}
      visible={visible}
      scale={[0.9, 1, 0.8]}
    />
  );
};

export default Leg;
