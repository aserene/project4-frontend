import { Link, useLoaderData, Form} from "react-router-dom";
const Show = (props) => {
    const post = useLoaderData()
    return <div className="display-card">
        <h1>{post.name}</h1>
        <h2>{post.description}</h2>
        <h2>{post.category}</h2>
        <h2>{post.price}</h2>
        <h2>{post.img}</h2>
        <div className="update">
            <h2>Update Ware</h2>
            <Form action={`/update/${post.id}`} method="put">
            <label>Name of Item</label>
            <input type="text" name="name" defaultValue={post.name}/>
            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="5" cols="50" defaultValue={post.description}></textarea>
            <label>Category</label>
            <input type="text" name="category" defaultValue={post.category}/>
            <label>Price</label>
            <input type="text" name="price" defaultValue={post.price}/>
            <label>Image Url</label>
            <input type="text" name="img" defaultValue={post.img}/>
            <button>Update</button>
            </Form>
            <Form action={`/delete/${post.id}`} method="post">
            <button>Delete</button>
            </Form>
        </div>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
}
export default Show