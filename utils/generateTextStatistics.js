/* 
To do:
- Encontrar parágrafos: linhas por parágrafo, períodos
- 

*/

export function generateTextStatistics(text) {
  const words = text.split(" ").filter((e) => e !== "");
  console.log(words);

  const paragraphs = text.split("\n");
  let repetitions = [];

  words.map((word) => {
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
  });

  console.log(`Palavras: ${words.length}`);
  console.log(`Parágrafos: ${paragraphs.length}`);
  console.log(repetitions);
}
