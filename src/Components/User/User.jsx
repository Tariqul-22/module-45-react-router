import { Link } from "react-router-dom";

const User = ({user}) => {
    // console.log(user);
    const {id, name, email, website} =user
    const userStyle ={
        border: "2px solid skyblue",
        padding: '10px',
        margin:'10px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h4>ID: {id}</h4>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Web : {website}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Here</button>
            </Link>
        </div>
    );
};

export default User;