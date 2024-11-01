import React from 'react';
import Card from './Card';
import Data from './Data';
import Hamburger from './Hamburger';

function Blog() {

    const allCards = Data.map(item => {
        return (
            <Card  
            key={item.id}
            {...item}
            />
        )
    })

    return (
        <>
            <div className="main">
                <Hamburger/>
                {allCards}
            </div>
        </>
    )
};

export default Blog