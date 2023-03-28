import * as React from 'react'

export interface props {
    title: string;
    content: string;
    commentsQty: number;
    tags: string[];
}

function Destructuring ({title, content, commentsQty, tags}: props) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default Destructuring