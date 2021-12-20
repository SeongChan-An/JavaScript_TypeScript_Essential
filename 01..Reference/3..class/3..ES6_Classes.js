// ES6 Classes

// before
const user1 = {
    name: 'Seongchan',
    normal: function () {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}

user1.normal();
user1.arrow();

// ES6 
const user2 = {
    name: 'Seongchan',
    normal() {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}

user2.normal();
user2.arrow();

// ES6 Classes

// Before
// function UserCreate(first, last) {
//     this.firstName = first
//     this.lastName = last    
// }

// UserCreate.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// const user1 = new UserCreate('Seongchan', 'An');
// const user2 = new UserCreate('Alison', 'Park');

// console.log(user1.getFullName());
// console.log(user2.getFullName());

// ES6
class UserCreate{
    constructor(first, last) {
     this.firstName = first
     this.lastName = last    
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const user1 = new UserCreate('Seongchan', 'An');
const user2 = new UserCreate('Alison', 'Park');

console.log(user1.getFullName());
console.log(user2.getFullName());

