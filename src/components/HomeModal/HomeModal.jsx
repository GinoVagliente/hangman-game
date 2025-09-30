const HomeModal = () => {
  return (
    <div className="flex justify-center items-center h-full px-4 flex-col">
      <div className="relative rounded-lg shadow-2xl p-15 flex flex-col items-center gap-4 w-full max-w-xs md:max-w-md backdrop-blur-md">
        <div
          className="absolute inset-0 rounded-lg bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none bg-[url('/homeModalTexture.png')]"
        />

        <p
          className="text-lg font-bold text-gray-800 text-center relative z-10"
          style={{ fontFamily: "'Press Start 2P'" }}
        >
          HANGMAN GAME
        </p>
        <a
          href="/play"
          className="px-4 py-2 md:px-6 md:py-4 text-white rounded-lg hover:bg-gray-100/10 transition-all backdrop-blur-sm text-center relative z-10"
          style={{ fontFamily: "'Press Start 2P'" }}
        >
          Start
        </a>
      </div>
    </div>
  );
};

export default HomeModal;
