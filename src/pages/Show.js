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

            </div>
        </div>
            <div className="update-cont">
                <h2 id="update-header">Update Item</h2>
                <Form id="update-form" action={`/update/${item.id}`} method="put">
                <label>Name of Item</label><br/>
                <input type="text" name="name" defaultValue={item.name}/><br/>
                <label for="description">Description:</label><br/>
                <textarea id="update-description" name="description" rows="5" cols="50" defaultValue={item.description}></textarea><br/>
                <label for="category">Choose a Category:</label><br/>
                <select id="category" name="category">
                <option value="clothing">Clothing</option>
                <option value="shoes">Shoes</option>
                <option value="jewlry">Jewelry</option>
                <option value="toys">Toys</option>
                <option value="kitchen">Kitchen</option>
                <option value="games & electronics">Games & Electronics</option>
                <option value="hardware">Hardware</option>
                <option value="accessories">Accessories</option>
                <option value="pet supplies">Pet Supplies</option>
                <option value="food & grocery">Food & Grocery</option>
                <option value="beauty & health">Beauty & Health</option>
                <option value="automotive & industrial">Automotive & Industrial</option>
                </select><br/>
                <label>Price</label><br/>
                <input type="text" name="price" defaultValue={item.price}/><br/>
                <label>Image Url</label><br/>
                <input type="text" name="img" defaultValue={item.img}/><br/>
                <button id="update-btn">Update</button>
                </Form>
                <Form action={`/delete/${item.id}`} method="post">
                <button id="delete-btn">Delete</button>
                </Form>
            </div>
        </div>
    </>
}
export default Show