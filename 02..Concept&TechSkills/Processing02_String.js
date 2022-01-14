const simpleCamel = (text, splitter = " ") =>
  text
    .split(splitter)
    .map((word, wordIndex) =>
      word
        .split("")
        .map((char, charIndex) =>
          wordIndex > 0 && charIndex === 0
            ? char.toUpperCase()
            : char.toLowerCase()
        )
        .join("")
    )
    .join("");

function convertCamelName(name) {
  let camelName = "";

  for (let i = 0, newSpace = false; i < name.length; i++) {
    if (name[i] == " ") {
      newSpace = true;
      continue;
    }

    if (newSpace) {
      camelName = camelName + name[i].toUpperCase();
      newSpace = false;
    } else {
      camelName = camelName + name[i].toLowerCase();
    }
  }

  return camelName;
}

const camelName1 = convertCamelName(" an seong chan");
const camelName2 = simpleCamel("AN SEONG CHAN");

console.log(camelName1);
console.log(camelName2);
