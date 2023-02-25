import Post from "../components/Post"
import { useLoaderData, Form } from "react-router-dom"
const Index = (props) => {
    const wares = useLoaderData()
    return <>
    <div>
        <h2>Add Wares</h2>
        <Form action="/create" method="post">
            <label>Name of Item</label>
            <input type="text" name="name" placeholder="Name"/>
            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="5" cols="50"></textarea>
            <input type="text" name="category" placeholder=""/>
            <input type="text" name="price"/>
            <input type="text" name="img" placeholder="https://"/>
            <button>Add Ware</button>
        </Form>
    </div>
        {wares.map(post=> <Post key={post.id} post={post}/>)}
    </>
}
export default Index
