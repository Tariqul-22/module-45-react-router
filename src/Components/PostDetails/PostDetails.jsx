import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const {userId} = useParams();
    const details = useLoaderData();
    const {id, title, body} = details
    const navigate = useNavigate();
    
    console.log(userId);
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Post details ID: {id}</h3>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;