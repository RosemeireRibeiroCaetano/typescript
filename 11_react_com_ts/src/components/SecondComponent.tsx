import * as React from 'react'

export interface props {
    name: string
}

function SecondComponent (props: props) {
    return (
        <div>
           <p>Meu segundo componente</p> 
           <p>O nome dele é {props.name}</p>
        </div>
    );
}

export default SecondComponent