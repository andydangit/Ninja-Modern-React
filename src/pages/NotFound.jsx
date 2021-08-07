import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="div not-found">
            <h2> Sorry </h2> 
            <p> That page does not exist</p>
            <Link to='/'> Back go the homepage...</Link>
        </div>
     );
}
 
export default NotFound;