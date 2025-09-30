import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";

const Head = ({ position, visible = true, model }) => {
  const modelPath = model === 0 ? "/headModel.glb" : "/headWonModel.glb";
  const { scene } = useGLTF(modelPath);

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

export default Head;
