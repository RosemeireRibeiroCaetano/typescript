import React, {createContext} from 'react';


// 4 - Impotação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - UseState
import State from './components/State';


// 8 - Type
type textOrNull = string |  null

type fixed = "Isso" | "Ou" | "Aquilo";
 
// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variaveis 
 const name: string = "Rosemeire";
 const age: number = 34;
 const isWorking: boolean = true;

 // 2 - Funçoẽs
 const userGreeting = (name: string): string => {
  return `Olá, ${name}`
 };

 // 8 - Type
 const mytext:textOrNull = "Tem algum texto aqui";
 let mySecondText:textOrNull = null; 

 //mySecondText = "opa";

 const testandofixed:fixed = "Isso";

// 9 - Context
 const contextValue: IAppContext = {
  language: "JavaScript",
  framework: "Express",
  projects: 5,
 };

  return (
    <AppContext.Provider value={contextValue}>
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
      category={Category.TS}
      />
      <Destructuring 
      title='Segundo post'
      content="Mais outro contéudo"
      commentsQty={5}
      tags={['phython']}
      category={Category.P}
      />
      <State/>
      {mytext && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
    
     </div>
     </AppContext.Provider>
  );
}

export default App;
 