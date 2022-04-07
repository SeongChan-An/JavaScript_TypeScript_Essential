export default function TodoInput({ $target, onAddTodoList }) {
  this.$element = document.createElement('form');
  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
      <input type="text" class="todo-inp" placeholder="할 일을 입력하세요." />
      <button type="submit" class="todo-btn">Enter</button>
      <button type="button" class="todo-delete-btn">removeAll</button>
    `;
  };
  this.render();

  this.$element.addEventListener('submit', (event) => {
    event.preventDefault();
    const $input = this.$element.querySelector('.todo-inp');
    const inputTxt = $input.value;

    if (inputTxt.length > 0) {
      onAddTodoList(inputTxt);
      $input.value = '';
      $input.focus();
    }
  });

  this.$element
    .querySelector('.todo-delete-btn')
    .addEventListener('click', () => {
      const $input = this.$element.querySelector('.todo-inp');
      $input.value = '';
      $input.focus;
      // custom 이벤트 발생시키기
      const customEvent = new CustomEvent('removeAll');
      window.dispatchEvent(customEvent);
    });
}
