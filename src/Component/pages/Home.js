import React from 'react';

const  Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas');
    }

    const handleClickAgain= (name) => {
        console.log('Hello ' + name);
    }

    return (  
        <div className="home">
            <h2> Homepage</h2>
            <button onClick={handleClick}> Click Me </button>
            
            {/* arrow function to prevent from invoke  */}
            <button onClick={() => {
                handleClickAgain('mario')
            }}> Click Me Again </button>
        </div>
    );
}
 
export default Home;