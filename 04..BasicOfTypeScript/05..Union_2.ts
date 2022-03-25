// function: login -> success, fail ⏱
type SuccessState = {
  response: {
    body: string;
  };
};
type FailState = {
  reason: string;
};
type LoginState = SuccessState | FailState;

function login(): LoginState {
  return {
    response: {
      body: "logged in!",
    },
  };
}

// printLoginState(state: LoginState)
// success -> 🎉 body
// fail -> 😭 reason
function printLoginState(state: LoginState) {
  if ("response" in state) {
    console.log(`🎉 ${state.response.body}`);
  } else {
    console.log(`😭 ${state.reason}`);
  }
}
