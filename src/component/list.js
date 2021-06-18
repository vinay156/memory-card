import React from 'react';

const List = ({onclick, name, letter}) => {
    return (
        <div className="card" onClick={onclick}>
            <div className="card-letter">{letter}</div>
            <div className="card-name">{name}</div>
        </div>

    )
}

export default List