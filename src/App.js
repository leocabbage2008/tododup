import React from "react";
import "./App.css";
import constants from "./constants";
import Card from "./components/Card";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

function App() {
  let date = new Date();
  setInterval(() => {
    date = new Date();
  }, 1000);

  const [todos, setTodos] = React.useState(constants.todos);
  const [subText, setSubText] = React.useState("");

  const clickHandler = (index) => {
    const dupTodos = [...todos];
    dupTodos[index].done = !dupTodos[index].done;
    setTodos(dupTodos);
  };

  const onChangeHandler = (e) => {
    const v = e.target.value;
    setSubText(v);
  };

  const subHandler = (e) => {
    e.preventDefault();
    if (!!subText.replaceAll(" ")) {
      const dupTodos = [...todos];
      dupTodos.push({ text: subText, done: false });
      setTodos(dupTodos);
      e.target.reset();
    } else {
      alert("Invalid input.");
    }
  };

  return (
    <div className="App">
      <Card>
        <Header date={date} />
        {todos.map((v, i) => {
          return (
            <Todo
              text={v.text}
              done={v.done}
              clickHandler={() => clickHandler(i)}
              key={Math.random()}
              title={v.done ? "Mark as undone" : "Mark as done"}
            />
          );
        })}

        <Footer onChange={onChangeHandler} subHandler={subHandler} />
      </Card>
    </div>
  );
}

export default App;
