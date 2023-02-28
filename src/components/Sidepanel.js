import { Form } from "react-router-dom"
const Sidepanel = () => {
    return <>
    <div id="Sidepanel"className="sidepanel">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <h1>This is gonna be the sidepanel</h1>
    </div>
    <button class="openbtn" onclick="openNav()">&#9776; Add Wares</button>
    </>
}
export default Sidepanel