import { Link, Route, HashRouter as Router, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { EmailIndex } from "./pages/EmailIndex"

import { AppHeader } from "./cmps/AppHeader"
// import { SideNav } from "./cmps/SideNav"
// import { EmailList } from "./cmps/EmailList"

export function App() {
  return (
    <Router>
      <section className="main-app">
        <AppHeader />

        <main className="main-layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/email" element={<EmailIndex />} />
            {/* <Route path="/email" element={<EmailIndex />} >
              <Route path="/email/inbox" element={<EmailList />} />
            </Route> */}
          </Routes>
        </main>

        {/* <footer className="app-footer">
          <section>Footer 2023 &copy;</section>
        </footer> */}
      </section>
    </Router>
  )
}
