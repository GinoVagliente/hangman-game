import LetterCube from "./LetterCube";
import { Canvas } from "@react-three/fiber";

const Cubes = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const cubes = [];

  const columns = 5;
  const rows = Math.ceil(alphabet.length / columns);

  const spacingX = 2.5;
  const spacingY = 2;

  const offsetX = (columns * spacingX) / 2 - spacingX / 2;
  const offsetY = ((rows * spacingY) / 2 - spacingY / 2) * 1.2;

  let x = 0, y = 0;

  alphabet.forEach((letter, i) => {
    const direction = i % 2 === 0 ? 1 : -1;
    cubes.push(
      <LetterCube
        key={letter}
        letter={letter}
        position={[x * spacingX - offsetX, -y * spacingY + offsetY, 0]}
        direction={direction}
      />
    );

    x++;
    if (x === columns) {
      x = 0;
      y++;
    }
  });

  return <>{cubes}</>;
};

const Keyboard = () => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 20], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Cubes />
    </Canvas>
  );
};

export default Keyboard;
