import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  constonChange = (event) => setToDo(event.target.value);
  constonSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    //toDos.push() 못씀. State 직접적으로 수정 못함. 안함! 수정하는 함수를 쓸 것.
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };


  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />

        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

  )
}
export default App;

