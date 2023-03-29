import React from 'react';


// 4 - Impotação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';

// 6 - UseState
import State from './components/State';

function App() {

  // 1 - variaveis 
 const name: string = "Rosemeire";
 const age: number = 34;
 const isWorking: boolean = true;

 // 2 - Funçoẽs
 const userGreeting = (name: string): string => {
  return `Olá, ${name}`
 }

  return (
    <div className="App">
     <h1>TypeScript com React</h1>
     <h2>Nome: {name}</h2>
     <p>Idade: {age}</p>
     {isWorking && (
      <div>
        <p>Está trabalhando!</p>
      </div>
      )}
       <h3>{userGreeting(name)}</h3>
       <FirstComponent/>
       <SecondComponent name="Segundo"/>
      <Destructuring 
      title='Primeiro post'
      content="Algum contéudo"
      commentsQty={10}
      tags={['Ts, Js']}
      />
      <Destructuring 
      title='Segundo post'
      content="Mais outro contéudo"
      commentsQty={5}
      tags={['phython']}
      />
      <State/>
     </div>
  );
}

export default App;
 