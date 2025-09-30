import { useWordStore } from "../store/wordStore";

export const useLetterLogic = (letter) => {
  const lettersGuessed = useWordStore((state) => state.lettersGuessed);
  const addLetterGuessed = useWordStore((state) => state.addLetterGuessed);

  const isGuessed = lettersGuessed.includes(letter);

  const handleClick = () => {
    addLetterGuessed(letter);
  };

  return { isGuessed, handleClick };
};
