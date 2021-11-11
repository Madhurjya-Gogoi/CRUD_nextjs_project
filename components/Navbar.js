import Link from "next/link"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container">
        <Link href="/">
          <a className="navbar-brand text-white h4">Home</a>
        </Link>
        <Link href="/New">
          <a className="navbar-brand text-white h4">Create note</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar


