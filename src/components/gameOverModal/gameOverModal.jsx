import { useWordStore } from "../store/wordStore";
import { Canvas } from "@react-three/fiber";
import Head from "../Models/Stickman/Head/Head";

const GameOverModal = () => {
  const { wrongGuesses, word, lettersGuessed } = useWordStore();

  const hasLost = wrongGuesses === 6;
  const hasWon = lettersGuessed.join("") === word;

  const title = hasLost ? "Game Over" : "You Won";
  const buttonText = hasLost ? "Try Again" : "Play Again";

  const headModel = hasLost ? 0 : 1;

  if (!hasLost && !hasWon) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50 flex-col">

      <div className="w-32 h-32 md:w-40 md:h-40">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Head
            visible={true}
            position={[-0.2, -0.96, 1.75]}
            model={headModel}
          />
        </Canvas>
      </div>

      <div
        className={`p-10 md:p-30 rounded-lgs text-center flex flex-col items-center bg-cover 
          bg-center ${hasLost ? "bg-[url('/gameOverLose.png')]" : "bg-[url('/gameOverWin.png')]"
          }`}>

        <h2 className="text-2xl font-bold text-white">{title}</h2>

        {hasLost && (
          <p
            className="text-white mt-2 pb-5"
            style={{ fontFamily: "'Press Start 2P'" }}
          >
            Word Was {word}
          </p>
        )}

        <a
          href="/play"
          className="px-4 py-2 md:px-6 md:py-4 text-white rounded-lg hover:bg-white/40 transition-all bg-white/30"
          style={{ fontFamily: "'Press Start 2P'" }}>
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default GameOverModal;
