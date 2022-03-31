/* 
To do:
- Encontrar parágrafos: linhas por parágrafo, períodos
- 

{
  totalWords,
  totalParagraphs,
  repeatedWords,
  paragraphs,
}

{
  paragraph: ["", "", ""],
  paragraph: ["", "", ""],
  paragraph: ["", "", ""],
  paragraph: ["", "", ""],
}

*/

export function generateTextStatistics(text) {
  const words = text.split(" ").filter((e) => e !== "");

  const paragraphs = text.split("\n");
  let repetitions = [];

  /* words.map((word) => {
    if (word.includes(".")) {
      // fim do período
    }

    if (word.includes("\n")) {
      // fim do período
    }

    // conta repetições
    if (words.includes(word)) {
      repetitions.push({ word, times: 1 });
    }
  }); */

  const repeatedWords = countRepeatedWords(text);

  return {
    totalWords: words.length,
    totalParagraphs: paragraphs.length,
    repeatedWords,
  };
}

function countRepeatedWords(sentence) {
  let words = sentence
    .replaceAll(",", "")
    .replaceAll(`"`, "")
    .replaceAll(`.`, "")
    .toLowerCase()
    .split(" ")
    .filter((e) => e !== "" && e !== "\n");
  let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }

  let wordList = Object.entries(wordMap).filter(([key, value]) =>
    value > 1 ? [key, value] : undefined
  );

  wordList.sort((a, b) => b[1] - a[1]);

  return wordList;
}
