import Link from "next/link"
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image'

const Navbar = () => {
  const { user, error, isLoading } = useUser();
 
  return (
    <nav className="navbar navbar-expand-lg bg-dark">

      <div className="container">
        <Link href="/">
          <a className="navbar-brand text-white h4">Home</a>
        </Link>
        {
          user && <div>
            <Link href="/New">
              <a className="navbar-brand text-white h4">Create Note</a>
            </Link>
            <Link href="/api/auth/logout">
              <a className="navbar-brand text-white h4">LogOut</a>
            </Link>
           <img src={user?.picture} alt="user_profile" width="50px" className="rounded-circle"/>
          </div>
        }
        {!user && <Link href="/api/auth/login">
          <a className="navbar-brand text-white h3">Sign Up</a>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar


