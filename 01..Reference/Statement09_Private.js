//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
class CoffeeMachine {
    #waterLimit = 200;
  
    #checkWater(value) {
      if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
      if (value > this.#waterLimit) throw new Error("물이 용량을 초과합니다.");
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // 클래스 외부에서 private에 접근할 수 없음 
  coffeeMachine.#checkWater(); // Error 
  coffeeMachine.#waterLimit = 1000; // Error 
  
  
  