import { useState, useEffect } from "react"
import {useRouter} from "next/router"

const New = () => {
    const [form, setform] = useState({ title: "", description: "" })
    const route = useRouter()

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/note",{
            method : "POST",
            headers:{
               "Accept" : "application/json",
               "Content-type" : "application/json"
            },
            body: JSON.stringify(form)
        })
        route.push("/")
        setform({
            title:"",
            description:""
        })
        
    }
    return (
        <div className="container mt-3">
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" name="title" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="description" onChange={handleChange}></textarea>
                </div>
                <button onClick={formSubmit} className="btn btn-primary btn-lg">Create</button>
            </form>
        </div>
    )
}

export default New
