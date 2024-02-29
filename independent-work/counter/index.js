import { data, subscribe } from "./data/data.js";
import { renderCounter } from "./components/renderCounter.js";

renderCounter(data)
subscribe(renderCounter)