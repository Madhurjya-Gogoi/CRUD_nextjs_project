import { useRouter } from 'next/router';

const Note = ({ note }) => {
    const router = useRouter();
    const handleDelete = async () => {
        const noteId = router.query.id;    
            const deleted = await fetch(`http://localhost:3000/api/note/${noteId}`, {
                method: "Delete"
            });
            router.push("/");      
    }
    return (
        <div className="container d-flex justify-content-center">
            <div className="card m-5 text-center border-primary " style={{ width: "18rem" }}>
                <div className="card-body">
                    <div className="card-title h3">{note.title}</div>
                    <div className="card-title">{note.description}</div>
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Delete
                    </button>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Do you want to delete ?</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/note");
    const { data } = await res.json();

    const paths = data.map(note => ({
        params: {
            id: note._id.toString()
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const res = await fetch(`http://localhost:3000/api/note/${id}`);
    const { data } = await res.json()

    return {
        props: {
            note: data
        }
    }
}
export default Note
