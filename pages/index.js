import Link from "next/link"

const index = ({ notes }) => {
    console.log(notes)
    return (
        <div className="container">
            <h2 className="text-center m-4 text-dark">Note</h2>  
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        notes.map(note => {
                            return (
                                <div className="col">
                                    <div className="card" >
                                    {/* <div className="card-header">Create your note</div> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{note.title}</h5>
                                        <p className="card-text">{note.description}</p>
                                        <div className="card-footer">
                                            <Link href={`/${note._id}`}><a className="btn btn-primary m-2">View</a></Link>
                                            <Link href={`/${note._id}/edit`}><a className="btn btn-primary">Edit</a></Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
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
