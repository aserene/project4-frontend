import { useParams } from "react-router-dom";
import url from "./url";

export async function IndexLoader(){
    const response = await fetch(url)
    const data = await response.json()
    console.log("Index loader data:", data)
    return data
}

export async function ShowLoader(){
    const response = await fetch(url + params.id + "/")
    const data = await response.json()
    console.log("Show loader data:", data)
    return data
}