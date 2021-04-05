const Jumbotron = () => {
  return (
    <header
      className="p-3 text-center bg-light"
      style={{
        height: '100vh',
        backgroundSize: 'cover'
      }}
    >
      <div className="row justify-content-between">
        <h3 className="navbar-brand mb-0" style={{ fontSize: '1.5rem' }}>
          Logo
        </h3>

        <nav>
          <ul className="nav" style={{ fontSize: '1.5rem' }}>
            <li className="nav-item">
              <a className="nav-link text-body" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main
        className="container p-3"
        style={{
          marginTop: '260px',
          backgroundColor: 'rgba(248, 249, 250, .5)'
        }}
      >
        <h1>Welcome to our site!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ducimus vitae maiores aperiam quos sequi rem nulla nobis distinctio
          accusamus, cumque, eius quasi doloribus delectus natus voluptates
          aspernatur non dolores.
        </p>
        <p>
          <button href="#" className="btn btn-lg btn-secondary">
            Get Started
          </button>
        </p>
      </main>
    </header>
  )
}

export default Jumbotron
