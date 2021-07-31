import React, {useState} from 'react';


const  Home = () => {
    // let name = "mario";
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);


    const handleClick = () => {
       setName('Snake Eye');
       setAge( 88);
    }


    return (  
        <div className="home">
            <h2> Homepage</h2>
            <p> { name } is { age } year old </p>
            <button onClick={handleClick}> Click Me </button>


        </div>
    );
}
 
export default Home;