// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
const userName = " An seongchan";
const bolder = (text) => `<b>${text}</b>`;

console.log(`
  Hi ~ ${userName}
`);

console.log(`
  Hi ~ ${bolder(userName)}
`);

function div(strings, ...fns) {
  const flat = (s) => s.split("\n").join("");

  return function (props) {
    return `<div style="${
      flat(strings[0]) + fns[0](props) + flat(strings[1])
    }"></div>`;
  };
}

// Tagged Template
const Div = div`
  font-size: 20px;
  color: ${(props) => (props.active ? "white" : "gray")};
  border: none;
`;

console.log(Div({ active: true }));
console.log(Div({ active: false }));
