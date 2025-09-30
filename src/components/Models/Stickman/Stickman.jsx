import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWordStore } from "../../store/wordStore";
import Arm from "./Arm/Arm";
import Torso from "./Torso/Torso";
import Leg from "./Leg/Leg";
import Head from "./Head/Head";

const Stickman = ({ isHome }) => {
  const wrongGuesses = useWordStore((state) => state.wrongGuesses);
  const groupRef = useRef();

  const leftArmGroup = useRef();
  const rightArmGroup = useRef();
  const leftLegGroup = useRef();
  const rightLegGroup = useRef();
  const headRef = useRef();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    groupRef.current.rotation.x = Math.sin(t * 1.5) * 0.01;
    groupRef.current.rotation.z = Math.sin(t * 2) * 0.01;

    if (leftArmGroup.current) {
      leftArmGroup.current.rotation.z = THREE.MathUtils.lerp(
        leftArmGroup.current.rotation.z,
        -Math.sin(t * 2 + Math.PI / 2) * 0.1,
        0.01
      );
    }
    if (rightArmGroup.current) {
      rightArmGroup.current.rotation.z = THREE.MathUtils.lerp(
        rightArmGroup.current.rotation.z,
        Math.sin(t * 2) * 0.1,
        0.01
      );
    }

    if (leftLegGroup.current) {
      leftLegGroup.current.rotation.x = THREE.MathUtils.lerp(
        leftLegGroup.current.rotation.x,
        Math.sin(t * 1.5 + Math.PI / 3) * 0.10,
        0.1
      );
    }
    if (rightLegGroup.current) {
      rightLegGroup.current.rotation.x = THREE.MathUtils.lerp(
        rightLegGroup.current.rotation.x,
        Math.sin(t * 1.5) * 0.10,
        0.1
      );
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-0.3, 0.45, -0.37]}
      rotation={[0, Math.PI / 6, 0]}
    >
      <group ref={leftLegGroup} position={[0.0, 0.14, 0.9]}>
        <Leg visible={isHome || wrongGuesses > 0} />
      </group>
      <group ref={rightLegGroup} position={[0.2, 0.14, 0.9]}>
        <Leg visible={isHome || wrongGuesses > 1} />
      </group>

      <group
        ref={rightArmGroup} position={[0.34, 0.28, 0.9]}
      >
        <Arm visible={isHome || wrongGuesses > 2} />
      </group>
      <group ref={leftArmGroup} position={[-0.14, 0.28, 1.1]} 
        rotation={[0, Math.PI, 0]}>
        <Arm visible={isHome || wrongGuesses > 3} />
      </group>

      <Torso position={[-0.09, 0.30, 0.9]} visible={isHome || wrongGuesses > 4} />

      <group
        ref={headRef}
        position={[-0.10, 0.30, 0.9]}
        rotation={[0, 0, 0]}
      >
        <Head visible={isHome || wrongGuesses > 5} model={0}/>
      </group>
    </group>
  );
};

export default Stickman;
