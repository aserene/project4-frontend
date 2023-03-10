import url from "./url";
import { redirect } from "react-router-dom";

export async function CreateAction({request}){
    //get form data
    const formData= await request.formData()
    // construct new ware
    const newWare= {
        name: formData.get("name"),
        description: formData.get("description"),
        category: formData.get("category"),
        price: formData.get("price"),
        img: formData.get("img")
    }
    // make request to update route in api
    await fetch(url,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newWare),
        
    })
    //redirect back to index page
    return redirect("/")
}

export async function UpdateAction({request, params}){
    //get form data
    const formData= await request.formData()
    // construct new todo
    const updatedWare= {
        name: formData.get("name"),
        description: formData.get("description"),
        category: formData.get("category"),
        price: formData.get("price"),
        img: formData.get("img")
    }
    // make request to update route in api
    await fetch(url + params.id +"/",{
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(updatedWare),
        
    })
    //redirect back to index page
    return redirect("/")
}

export async function DeleteAction({params}){
    // get id
    const id = params.id
    // send request to delete
    await fetch(url+id+"/",{
        method: "delete"
    })
    //redirect
    return redirect("/")
}