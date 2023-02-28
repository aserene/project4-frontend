import { useLoaderData, Form } from "react-router-dom"
import Header from "../components/Header"
import Item from "../components/Item"
import Sidepanel from "../components/Sidepanel"
const Index = (props) => {
    const wares = useLoaderData()
    console.log("Wares", wares)
    return <>
    <div className="container">
        {Header()}
        {Sidepanel()}
        {/* <div className="add-wares">
            <h2 id="add">Add Wares</h2>
            <Form action="/create" method="post">
                <label>Name of Item</label><br/>
                <input type="text" name="name" placeholder="Name"/><br/>
                <label for="description">Description:</label><br/>
                <textarea id="description" name="description" rows="5" cols="20"></textarea><br/>
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
                </select>
                <label>Price</label>
                <input type="text" name="price"/><br/>
                <label>Image Url</label><br/>
                <input type="text" name="img" placeholder="https://"/>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </Form>
        </div> */}
        <div className="card-container">
            {wares.map(item => <Item key={item.id} item={item}/>)}
        </div>
    </div>
    </>
}
export default Index
