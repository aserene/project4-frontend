import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { IndexLoader, ShowLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { CreateAction, UpdateAction, DeleteAction } from "./actions"
import Create from "./pages/Create"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={IndexLoader}/>
            <Route path="item/:id" element={<Show/>} loader={ShowLoader}/>
            <Route path="create" element={<Create/>} action={CreateAction}/>
            <Route path="update/:id" action={UpdateAction}/>
            <Route path="delete/:id" action={DeleteAction}/>
        </Route>
    </>
))

export default router