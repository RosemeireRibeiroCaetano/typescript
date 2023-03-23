import React from 'react';


function App() {

  // 1 - variaveis 
 const name: string = "Rosemeire";
 const age: number = 34;
 const isWorking: boolean = true;

  return (
    <div className="App">
     <h1>TypeScript com React</h1>
     <h2>Nome: {name}</h2>
     <p>Idade: {age}</p>
     {isWorking && <p>Está trabalahndo</p>}
    </div>
  );
}

export default App;
