import { Link, useLoaderData, Form} from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
const Show = (props) => {
    const item = useLoaderData()
    return <>
    <div className="show-container">
        {Header()}
        {Nav()}
        <div className="show-display-card">
            <div id="show-img">
                <img src={item.img} alt={item.name}/>
            </div>
            <div id="item-details">
                <h1>{item.name}</h1>
                <h4>{item.description}</h4>
                <h4>{`Category: ${item.category}`}</h4>
                <h4>{`$${item.price}`}</h4>
                <button id="add-btn">Add to Cart</button><br/>
                <button id="save-btn">Save for later</button><br/>
                <button id="update-btn" a href="/update">Update Item</button>

            </div>
        </div>
            {/* <div className="update">
                <h2>Update Item</h2>
                <Form action={`/update/${item.id}`} method="put">
                <label>Name of Item</label>
                <input type="text" name="name" defaultValue={item.name}/>
                <label for="description">Description:</label>
                <textarea id="description" name="description" rows="5" cols="50" defaultValue={item.description}></textarea>
                <label>Category</label>
                <input type="text" name="category" defaultValue={item.category}/>
                <label>Price</label>
                <input type="text" name="price" defaultValue={item.price}/>
                <label>Image Url</label>
                <input type="text" name="img" defaultValue={item.img}/>
                <button>Update</button>
                </Form>
                <Form action={`/delete/${item.id}`} method="post">
                <button>Delete</button>
                </Form>
            </div> */}
        </div>
    </>
}
export default Show