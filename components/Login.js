import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/Note.jpg'

const Login = () => {
    return (
        <div className ="position-relative" style={{mixBlendMode:"multiply"}}>
            <Image src={profilePic} layout="responsive"/>
            <div  className="position-absolute top-0 start-50 translate-middle-x pt-5 mt-5 border border-warning p-4">
               <h1 className="text-white bold display-2 fw-bolder lh-1 " style={{opacity:"89%"}}>CREATE YOUR NOTE</h1>
               <h1 className="text-white bold display-2 fw-bolder lh-1 " style={{opacity:"89%"}}>WITH US</h1>
               <p className="text-white lh-2 h6">Start your day with us we are welcoming you.....</p>
               <Link href="/api/auth/login"><a className="btn btn-outline-danger btn-lg d-grid mt-4 fw-bolder mb-2">Sign Up</a></Link>
            </div>
        </div>
    )
}

export default Login;