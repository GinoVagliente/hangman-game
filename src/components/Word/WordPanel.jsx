import { useEffect } from "react";
import { useWordStore } from "../store/wordStore";
import words from "../data/words.json";

const WordPanel = () => {
    const word = useWordStore((state) => state.lettersGuessed);
    const setWord = useWordStore((state) => state.setWord);

    useEffect(() => {
        if (!Array.isArray(words) || words.length === 0) return;
        const randomNumber = Math.floor(Math.random() * words.length);
        const randomWord = words[randomNumber];
        setWord(randomWord);
        console.log("Word setted:", randomWord);
    }, [setWord]);

    return (
        <div>
            <p className="text-black text-2xl" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            {word}
        </p>
        </div>
    );
};

export default WordPanel;
