import React, { useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd'

// let name : string;
// let age: number;

// let age: number | string; // its like a union we can use age either number or string

// age = 2;
// age = "twenty";

// let isStudent: boolean;
// let hobbies : string[];
// let role: [number, string] //tuple variable

// Object..............

// let person: Person = {
//   name:"Khushi Jukanti",
//   age: 22
// }

// type Person = {
//   name: string;
//   age?: number; // it's optional
// };


// let lotsOfPeople:Person[];

// functions................................

//  1 way...

// function printName(name: string){ 
//   console.log(name)
// }
// printName("KhushiJukanti")

//  2 way...

// let printName :(name: string) => void/never;   //here void returns undefined, but never doesn't return anything

// let personName: unknown;

// interface aslo we can use here.......................................................

// interface Person {
//   name: string;
//   age?: number;
// };

// interface Guy extends Person{
//   proffesion:string;
// }

// types working flow............

// type X = {
//   a: string;
//   b: number;
// };

// interface Person extends X{
//   name: string;
//   age?: number;
// };

// type Y = X & {
//   c: string;
//   d: number;
// }
//  to contain all of these properties and all of this property as well. So if go on and let Y equals

// let y: Y = {
//   c: 'efdas', 
//   d: 22,
// }

// role = [5, "5"];

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('')
    }
  };

  // console.log(todos)

  return (
    <DragDropContext onDragEnd={()=>{}}>
      <div className="App">
        <span className='heading'>Taskify</span>
        <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>

  );
}

export default App;
