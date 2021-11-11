import { useState, useEffect } from "react"
import {useRouter} from "next/router"

const New = ({note}) => {
    const [form, setform] = useState({ title: note.title, description: note.description })
    const route = useRouter()

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const formSubmit = (e) => {
        const id = route.query.id
        e.preventDefault();
        fetch(`http://localhost:3000/api/note/${id}`,{
            method : "PUT",
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
                    <input type="email" class="form-control" id="exampleFormControlInput1" name="title" onChange={handleChange} value={form.title} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="description" onChange={handleChange} value={form.description}></textarea>
                </div>
                <button onClick={formSubmit} className="btn btn-primary btn-lg">Edit</button>
            </form>
        </div>
    )
}

export async function getStaticPaths(){
    const res = await fetch("http://localhost:3000/api/note");
    const {data} = await res.json();

    const paths = data.map(note=>({
        params:{
            id : note._id.toString()
        }
    }))

    return{
        paths,
        fallback : false
    }
}

export async function getStaticProps({params : {id}}){
    const res = await fetch(`http://localhost:3000/api/note/${id}`);
    const {data} = await res.json();
    
    return{
        props:{
            note:data
        }
    }
}

export default New
