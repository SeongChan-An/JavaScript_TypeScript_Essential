"use strict";
import PopUp from "./popup.js";
import { GameBuilder, Reason } from "./game.js";

const game = new GameBuilder()
  .withGameDuration(60)
  .withCarrotCount(20)
  .withBugCount(10)
  .build();
const gameFinishBanner = new PopUp();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.win:
      message = "YOU WON 💯";
      break;
    case Reason.lose:
      message = "YOU LOST 😂";
      break;
    case Reason.cancel:
      message = "Replay ❓";
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
