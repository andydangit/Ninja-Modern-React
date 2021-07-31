import React from 'react';

const  Home = () => {

    const handleClick = (e) => {
        console.log('hello, ninjas', e);
    }

    const handleClickAgain= (name, e) => {
        console.log('Hello ' + name, e.target);
    }

    return (  
        <div className="home">
            <h2> Homepage</h2>
            <button onClick={handleClick}> Click Me </button>

            {/* arrow function to prevent from invoke  */}
            <button onClick={(e) => {
                handleClickAgain('mario', e)
            }}> Click Me Again </button>
        </div>
    );
}
 
export default Home;