import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    // console.log(post);
    const {id, title} = post;
    const navigate = useNavigate();

    const handleSeeDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={{
            border:"2px solid red",
            borderRadius:'1.5rem',
            padding:'1rem'
        }}>
            <h3>ID: {id}</h3>
            <h2>Title: {title}</h2>
            <h2><Link to={`/post/${id}`}>See Details</Link></h2>
            <button onClick={handleSeeDetails}>Click for Details</button>
        </div>
    );
};

export default Post;