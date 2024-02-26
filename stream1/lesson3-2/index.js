import { setChangeDataCallback } from "./data/data.js";
import { renderCounter } from "./components/renderCounter.js";

renderCounter();
setChangeDataCallback(renderCounter)

