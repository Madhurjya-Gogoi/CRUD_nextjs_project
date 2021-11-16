import Link from "next/link"
import { useUser } from '@auth0/nextjs-auth0';
import Login from "../components/Login";

const index = ({notes}) => {
    const { user} = useUser();
    return (
        <div className="container-fluid bg-light ">
            {
                user ? <div className="container">
                    <h2 className="text-center fs-4 text-danger">Your Note</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            notes.map(note => {
                                return (
                                    <div className="col" key={note._id}>
                                        <div className="card border border-danger" >
                                            <div className="card-body">
                                                <h5 className="card-title">{note.title}</h5>
                                                <p className="card-text">{note.description}</p>
                                                <div>
                                                    <Link href={`/${note._id}`}><a className="btn btn-outline-danger m-2 ">View</a></Link>
                                                    <Link href={`/${note._id}/edit`}><a className="btn btn-outline-danger ">Edit</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> : <Login />
            }
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/note");
    const { data } = await res.json();

    return {
        props: {
            notes: data
        }
    }
}
export default index
