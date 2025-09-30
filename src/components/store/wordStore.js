import { create } from "zustand";

export const useWordStore = create((set) => ({
  word: "DEFAULT",
  lettersGuessed: [],
  wrongGuesses: 0,

  setWord: (newWord) => set({
    word: newWord,
    lettersGuessed: Array(newWord.length).fill("_"),
    wrongGuesses: 0,
  }),

  addLetterGuessed: (letter) => set((state) => {
    const updated = [...state.lettersGuessed];
    let correct = false;

    for (let i = 0; i < state.word.length; i++) {
      if (state.word[i].toLowerCase() === letter.toLowerCase()) {
        updated[i] = state.word[i];
        correct = true;
      }
    }

    return {
      lettersGuessed: updated,
      wrongGuesses: correct ? state.wrongGuesses : state.wrongGuesses + 1
    };
  })
}));
