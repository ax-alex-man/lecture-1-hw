import ReactDOM from "react-dom/client";
import { App } from "./app";
import { restaurants } from "./constants/mock";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App restaurants={restaurants} />);
