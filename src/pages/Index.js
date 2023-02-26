import { useLoaderData, Form } from "react-router-dom"
import Header from "../components/Header"
import Post from "../components/Post"
const Index = (props) => {
    const wares = useLoaderData()
    console.log("Wares", wares)
    return <>
    <div className="container">
        Header
        <div className="add-wares">
            <h2>Add Wares</h2>
            <Form action="/create" method="post">
                <label>Name of Item</label>
                <input type="text" name="name" placeholder="Name"/>
                <label for="description">Description:</label>
                <textarea id="description" name="description" rows="5" cols="50"></textarea>
                <label>Category</label>
                <input type="text" name="category" placeholder="Category"/>
                <label>Price</label>
                <input type="text" name="price"/>
                <label>Image Url</label>
                <input type="text" name="img" placeholder="https://"/>
                <button>Add Ware</button>
            </Form>
        </div>
        <div className="card-container">
            {wares.map(post => <Post key={post.id} post={post}/>)}
        </div>
    </div>
    </>
}
export default Index
