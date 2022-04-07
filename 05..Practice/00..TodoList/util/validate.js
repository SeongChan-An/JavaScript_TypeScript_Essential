export default function validate(selector, data) {
  if (typeof data === 'undefined') {
    throw new Error('Undefined Error, 데이터에 값이 할당되지 않았습니다.');
  }

  if (!data.length) {
    throw new Error('NULL Error, 빈 배열 입니다.');
  }

  if (!Array.isArray(data)) {
    throw new Error('데이터 타입이 Array가 아닙니다.');
  }

  for (let value of data) {
    if (value.text === '') {
      throw new Error('text 값이 비어있습니다.');
    }
    if (typeof value.text !== 'string') {
      throw new Error('text의 타입이 올바르지 않습니다.');
    }
  }

  const querySelector = selector;
  if (!querySelector) {
    throw new Error('잘못된 선택자입니다.');
  }
}
