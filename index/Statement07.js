// 메소드는 3가지 방법이 있다.
// 아래의 선언된 메소드를 참고
const obj = {
    name: "Seong Chan",
    age : 30,
    getFamilyName: function() {
        return "An";
    },
    // arrow function
    getLastName: () => "An", 
    getBloodType() {
        return "B";
    },
    get fullName() {
        return `${obj.name} ${obj.getLastName()}`;
    },
    set setAge(value){
        if(value >=0 && value < 120) {
            this.age = value;
        } else {
            this.age = 0;
        }
  },
};

// Getter와 Setter
/*
문제가 있는 값을 세팅하는 것을 막고싶을 때
객체의 내부적으로는 실제 함수인데 객체 외부에서는 속성처럼 보이게 하는 방법
*/
obj.setAge = 131;                    // setAge: [Setter]
console.log(obj.fullName);          // fullName: [Getter]

console.log(obj);                  
console.log(obj.getFamilyName);     // [Function: getFamilyName]
console.log(obj.getFamilyName());
