export function SearchInput({ $target, onSubmit, onInput }) {
  if (!new.target) {
    throw new Error('new keyword is missing');
  }

  $target.addEventListener('submit', onSubmit);
  $target.addEventListener('input', onInput);
}
