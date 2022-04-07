import TodoList from './component/TodoList.js';
import TodoInput from './component/TodoInput.js';
import TodoCount from './component/TodoCount.js';

import { setItem } from './util/storage.js';

export default function App({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;

  this.setState = (nextData) => {
    this.state = nextData;
    setItem('todo', this.state);
    this.render();
  };

  const onRemoveTodoItem = (index) => {
    const newState = this.state.filter((el, i) => i !== index);
    this.setState(newState);
  };

  const onUpdateTodoStatus = (index) => {
    const newState = [...this.state];
    newState[index].isCompleted = !newState[index].isCompleted;
    this.setState(newState);
  };

  const onAddTodoList = (value) => {
    const newState = [...this.state, { text: value, isCompleted: false }];
    this.setState(newState);
  };

  const onRemoveAllTodo = () => {
    this.setState([]);
  };
  const setTodoList = new TodoList({
    $target: this.$target,
    $state: this.state,
    onRemoveTodoItem,
    onUpdateTodoStatus,
  });
  const setTodoInput = new TodoInput({
    $target: this.$target,
    onAddTodoList,
  });
  const setTodoCount = new TodoCount(this.$target, this.state);

  window.addEventListener('removeAll', onRemoveAllTodo);
  this.render = () => {
    setTodoList.setState(this.state);
    setTodoCount.setState(this.state);
  };
}
