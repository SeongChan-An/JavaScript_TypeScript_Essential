const sourceObject = {
  traits: {
    first_name: {
      value: "Bob",
      source_id: 1,
      updated_at: 1623238587468,
    },
    emails_opened_last_30_days: {
      value: 33,
      source_id: 2,
      updated_at: 1623238601089,
    },
  },
  cursor: {
    url: "/v1/spaces/lgJ4AAjFN4",
    has_more: false,
    next: "",
  },
};

// 깊은 복사 (Deep Copy)
// 객체를 복사 할 때, 해당 객체와 인스턴스 변수까지 복사하는 방식.
// 전부를 복사하여 새 주소에 담기 때문에 참조를 공유하지 않는다.
// 전달 받은 값을 변경하여도 원본은 변경되지 않는다.
// call by value
const newObject1 = JSON.parse(JSON.stringify(sourceObject));

// 얕은 복사 (Shallow Copy)
// 객체를 복사할 때, 해당 객체만 복사하여 새 객체를 생성한다.
// 복사된 객체의 인스턴스 변수는 원본 객체의 인스턴스 변수와 같은 메모리 주소를 참조한다.
// 따라서, 해당 메모리 주소의 값이 변경되면 원본 객체 및 복사 객체의 인스턴스 변수 값은 같이 변경된다.
// 즉, 전달 받은 값을 변경할 경우 원본도 같이 변경이 된다.
const newObject2 = Object.assign({}, sourceObject);
const newObject3 = { ...sourceObject };

console.log("원본");
console.log(sourceObject.traits.first_name.source_id);

console.log("깊은복사 call by value");
newObject1.traits.first_name.source_id = 100;
console.log(sourceObject.traits.first_name.source_id);

console.log("얕은복사 call by reference");
newObject2.traits.first_name.source_id = 100;
console.log(sourceObject.traits.first_name.source_id);

console.log("얕은복사 call by reference");
newObject3.traits.first_name.source_id = 500;
console.log(sourceObject.traits.first_name.source_id);

// 유틸리티 함수
function deepCopyObject(obj) {
  const clone = {};
  for (const key in obj) {
    if (typeof obj[key] == "object" && obj[key] != null) {
      clone[key] = deepCopyObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

console.log("생성한 유티리티 함수로 깊은 복사해보기 ");
const newObject4 = deepCopyObject(sourceObject);
console.log(sourceObject.traits.first_name.source_id);

console.log("변경되지 않음");
newObject4.traits.first_name.source_id = 1000;
console.log(sourceObject.traits.first_name.source_id);

// 활용
console.log("활용하기");
const store = {
  user: null,
  cart: [],
  config: {
    multiDevice: false,
    lastLoginDate: "Wed Jun 09 2021 20:46:55 GMT+0900",
  },
};

const newObject5 = {
  ...deepCopyObject(store),
  config: {
    ...store.config,
    lastLoginDate: new Date(),
  },
};

console.log("새로 생성한 객체");
console.log(newObject5);

// 활용2
console.log("Default 관련 활용");
const DefaultStyle = {
  color: "#fff",
  contColor: "#999",
  fontSize: 14,
  fontWeight: 200,
};

function createParagraph(config) {
  config = { ...DefaultStyle, ...config };

  // console.log(config);
  return config;
}

console.log(createParagraph({ fontSize: 12 }));
