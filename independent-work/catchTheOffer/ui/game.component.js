import { ScoreBlock } from "./score-block/scoreBlock.js";
import { SettingsPanel } from "./settings-panel/SettingsPanel.js";
import { GameField } from "./game-field/gameField.component.js";
export function Game() {
  const container = document.createElement('div');

  const settingsPanel = SettingsPanel();
  const scoreBlock = ScoreBlock();
  const gameField = GameField();

  container.append(settingsPanel);
  container.append(scoreBlock);
  container.append(gameField);

  return container;
}
