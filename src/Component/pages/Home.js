import React, {useState, useEffect} from 'react';
import BlogList from '../BlogList';


const  Home = () => {

const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Snake Eye', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Snake Eye', id: 3}
]); 

const [name, setName] = useState("mario");

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}


useEffect(() => {
    console.log("use effect ran");
    console.log(name);
}, [name]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete = {handleDelete}  /> 
            <button onClick={() => setName('Luigi')} > Change Name </button>
            <p> { name }</p>
            {/* This bottom create a filter for the blog  */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Snake Eye' )} title="Snake Eyes Blogs" />  */}
        </div>
    );
}
 
export default Home;