import React, {useState, useEffect} from 'react';
import BlogList from '../BlogList';


const  Home = () => {

const [blogs, setBlogs] = useState(null); 
const [isPending, setIsPending] = useState(true);
const [error, setError ] =useState(null);



useEffect(() => {
    fetch('http://localhost:8000/blogss')
    .then(res => {
        // if connect to server but cannot get data will throw error
        if(!res.ok) {
            throw Error('could not fetch the data for that resource')
        }
        return res.json();
    })
    .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
    })
    .catch(err => {
        setIsPending(false);
        setError(err.message);
    })
    }, []);

    return (  
        <div className="home">
            { error && <div> { error } </div>}
            {isPending && <div> Loading... </div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!"  /> }
        </div>
    );
}
 
export default Home;