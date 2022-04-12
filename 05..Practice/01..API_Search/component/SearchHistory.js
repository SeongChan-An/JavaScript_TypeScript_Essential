export function SearchHistory({ $target, initialState, onClick }) {
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
    const htmlString = this.state.historyData
      .map(
        (historyText) => `
        <button data-keyword="${historyText}">
          ${historyText}
        </button>
      `
      )
      .join('');
    this.$target.innerHTML = htmlString;
  };

  this.render();
  this.$target.addEventListener('click', (e) => {
    const $button = e.target.closest('button');
    if ($button) {
      const { keyword } = $button.dataset;
      onClick(keyword);
    }
  });
}
