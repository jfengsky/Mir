import { inject, observer } from "mobx-react";
import Style from "./assets/css/app.less"

function App() {
  return (
    <div className={Style.app}>
      <h1>app</h1>
    </div>
  );
}

export default inject("store")(observer(App));
