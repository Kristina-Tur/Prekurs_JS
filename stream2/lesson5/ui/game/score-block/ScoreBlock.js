import { data } from "../../../data.js";

export function ScoreBlock() {
  const container = document.createElement('div');

  container.append(`Score: ${data.scorePoints} Miss: ${data.missPoints}`)
  return container
}