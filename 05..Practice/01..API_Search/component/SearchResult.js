import { dummyData } from '../assets/testdata.js';

export function SearchResult({ initialState, $target }) {
  if (!new.target) {
    throw new Error('new keyword is missing');
  }

  this.$target = $target;
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const htmlString = `<ul class="result-items">
      ${this.state.resultData
        .map((el) => `<li><img src="${el.imageUrl}"></li>`)
        .join('')}</ul>`;
    this.$target.innerHTML = htmlString;
  };
}
