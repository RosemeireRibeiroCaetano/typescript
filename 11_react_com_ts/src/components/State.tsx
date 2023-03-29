import { useState, ChangeEvent } from 'react'

function State () {

    const [text, setText] = useState<string | null>("Testando o hook");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <p>o texto é: {text}</p>
            <input type="text" onChange={handleChange}/>
        </div>
    );
}

export default State