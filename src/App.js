import React from "react";
import Todo from "./components/Todo/Todo"
import Classes from "../src/App.module.css"


function App() {
  return (
    <div className={Classes.App}>
          <Todo></Todo>
    </div>
  );
}

export default App;

