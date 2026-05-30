import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="mt-4">
      <h2>Welcome to OctoFit Tracker</h2>
      <p>Track workouts, teams, and leaderboards in a modern React + Vite app.</p>
    </div>
  )
}

function Activities() {
  return (
    <div className="mt-4">
      <h2>Activities</h2>
      <p>Use the backend API to log activity data and display progress.</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <header className="mb-4">
          <h1>OctoFit Tracker</h1>
          <nav className="nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/activities">
              Activities
            </Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
