import {Link} from "react-router-dom"
const Post = (props) => {
    const post = props.post
    return (
        <div className="display-card">
            <img src={post.img} alt={`Pictore of ${post.name}`}/>
            <Link to={`/post/${post.id}`}>
                <h2>{post.name}</h2>
            </Link>
            <h2>{`$${post.price}`}</h2>
        </div>
    )
}
export default Post