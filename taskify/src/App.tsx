import React from 'react';
import './App.css';
import Inputfield from './components/Inputfield';

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
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <Inputfield/>
    </div>
  );
}

export default App;
