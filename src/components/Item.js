import {Link} from "react-router-dom"
const Item = (props) => {
    const item = props.item
    return (
        <div className="display-card">
            <img src={item.img} alt={`Picture of ${item.name}`}/>
            <Link to={`/item/${item.id}`}>
                <h5>{item.name}</h5>
            </Link>
        </div>
    )
}
export default Item