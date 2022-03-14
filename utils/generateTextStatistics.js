/* 
To do:
- Encontrar parágrafos: linhas por parágrafo, períodos
- 

*/

export function generateTextStatistics(text) {
  const words = text.split(" ").filter((e) => e !== "");
  console.log(words);

  let paragraphs = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  words.map((word) => {
    if (word.includes(".")) {
      // fim do período
    }

    if (word.includes("\n")) {
      // fim do período
    }
  });

  console.log(`Palavras: ${words.length}`);
}
