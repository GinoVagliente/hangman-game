import { useState, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLetterLogic } from "../../hooks/useLetterlogic";

const createCubeMaterials = (texture) =>
  Array(6).fill().map(() => new THREE.MeshStandardMaterial({ map: texture }));

const LetterCube = ({ letter, position, direction = 1 }) => {
  const [hovered, setHovered] = useState(false);
  const [disappearing, setDisappearing] = useState(false);
  const [disappeared, setDisappeared] = useState(false);
  const meshRef = useRef();

  const scaleFactor = 1.3;

  const { handleClick } = useLetterLogic(letter);

  const letterTexture = useMemo(() => {
    const canvasSize = 256;
    const canvas = document.createElement("canvas");
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#3b82f6";
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    ctx.fillStyle = "white";
    ctx.font = "bold 150px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(letter, canvasSize / 2, canvasSize / 2);

    return new THREE.CanvasTexture(canvas);
  }, [letter]);

  const materials = useMemo(() => createCubeMaterials(letterTexture), [letterTexture]);
  const initialRotationY = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(() => {
    if (!meshRef.current) return;

    if (hovered) meshRef.current.rotation.y += 0.04 * direction;

    if (disappearing) {
      meshRef.current.rotation.x += 0.5;
      meshRef.current.rotation.y += 0.5;
      meshRef.current.rotation.z += 0.5;

      meshRef.current.scale.x *= 0.9;
      meshRef.current.scale.y *= 0.9;
      meshRef.current.scale.z *= 0.9;

      if (meshRef.current.scale.x < 0.05) {
        setDisappeared(true);
      }
    }
  });

  if (disappeared) return null;

  return (
    <group position={position} rotation={[0, initialRotationY, 0]}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => {
          handleClick();
          setDisappearing(true);
        }}
        material={materials}
        scale={[scaleFactor, scaleFactor, scaleFactor]}
      >
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </group>
  );
};

export default LetterCube;
