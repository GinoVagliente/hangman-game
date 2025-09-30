import WordPanel from "../components/Word/WordPanel"
import Stage from "../components/Stage/Stage"
import Keyboard from "../components/Models/Keyboard/Keyboard"
import GameOverModal from "../components/gameOverModal/gameOverModal";



function Game() {


  return (
    <div className="h-screen w-full flex flex-col bg-blue-400 relative overflow-hidden">

      <div className="flex justify-center p-5 md:p-10 bg-black/30 bg-[url('/cloudsBackground.png')] bg-center bg-[length:10%]">
        <WordPanel />
        <GameOverModal />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center relative flex-1">
        <Stage />
      </div>

      <div className="absolute bottom-0 left-1/2 w-full h-4/12 md:w-1/2 lg:w-1/2 -translate-x-1/2">
      
        <div className="absolute inset-0 rounded-xl opacity-60 pointer-events-none bg-[url('/keyboardBackground.png')] bg-contain bg-no-repeat bg-center"/>

        <Keyboard />
      </div>
    </div >
  );
}



export default Game
