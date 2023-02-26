import {Link} from "react-router-dom"
const Post = (props) => {
    const post = props.post
    return (
        <div className="display-post">
            <img src={post.img} alt={`Pictore of ${post.name}`}/>
            <Link to={`/post/${post.id}`}>
                <h1>{post.name}</h1>
            </Link>
            <h2>{`$${post.price}`}</h2>
        </div>
    )
}
export default Post