import {Link} from "react-router-dom"
const Post = (props) => {
    const post = props.post
    return (
        <div>
            <Link to={`/post/${post.id}`}>
                <h1>{post.name}</h1>
            </Link>
            <h2>{post.description}</h2>
            <h2>{post.price}</h2>
            <h2>{post.img}</h2>
        </div>
    )
}
export default Post