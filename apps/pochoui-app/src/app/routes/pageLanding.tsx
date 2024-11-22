import { Link } from "react-router"

export const PageLanding = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://th.bing.com/th/id/R.e4caafac418d7195cf27dc3f8c996c24?rik=6%2frFvwD8FDK1bw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f7%2f70%2fMilan_Cathedral_from_Piazza_del_Duomo.jpg&ehk=ouhrAzWCxeDXpgGe0Jq2CmeQ61u3VkcwDwg27PTau10%3d&risl=1&pid=ImgRaw&r=0)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to <p className="text-secondary">pochoUI</p></h1>
          <p className="mb-5">
            “Just as the Cathedral of Milan stands as a masterpiece in progress, our React components library is a journey toward perfection. Explore our evolving documentation and join us in crafting something extraordinary!”
          </p>
          <Link className="btn btn-primary" to="/getting-started">Get Started</Link>
        </div>
      </div>
    </div>
  )
}

