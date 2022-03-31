/* 
To do:
- Encontrar parágrafos: linhas por parágrafo, períodos
- 

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

  console.log(
    `Palavras: ${words.length}\nParágrafos: ${
      paragraphs.length
    } \nContagem de repetições: \n ${JSON.stringify(countRepeatedWords(text))}`
  );
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

  wordMap = Object.entries(wordMap).filter(([key, value]) => {
    if (value > 1) {
      return [key, value];
    } else {
      return undefined;
    }
  });

  return wordMap;
}
