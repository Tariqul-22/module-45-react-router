import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'


const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);

    return (
        <div>
            <h3>Total Posts : {posts.length}</h3>
            <div className="postCard">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;