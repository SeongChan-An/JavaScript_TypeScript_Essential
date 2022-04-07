export default function TodoCount($target, state) {
  this.$target = $target;
  this.state = state;

  this.$element = document.createElement('p');
  this.$target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `Total Count : ${
      this.state.length
    } Completed Count : ${
      this.state.filter((element) => element.isCompleted === true).length
    }`;
  };

  this.setState = (nextData) => {
    this.state = nextData;
    this.render();
  };
  this.render();
}
