import { useLoaderData, Form } from "react-router-dom"
import Header from "../components/Header"
import Item from "../components/Item"
import Nav from "../components/Nav"
const Index = (props) => {
    const wares = useLoaderData()
    console.log("Wares", wares)
    return <>
    <div className="container">
        {Header()}
        {Nav()}
        <div className="card-container">
            {wares.map(item => <Item key={item.id} item={item}/>)}
        </div>
    </div>
    </>
}
export default Index
