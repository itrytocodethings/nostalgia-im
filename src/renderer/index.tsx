import * as ReactDOM from "react-dom";
import App from "./views/App";
import "xp.css/dist/xp.css";
import './index.css';
function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();
