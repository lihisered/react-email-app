import imgUrl from "../assets/imgs/react.png"
import { Link, NavLink, useNavigate } from "react-router-dom"

export function Home() {
  return (
    <section className="home">
      <h1>HOME PAGE</h1>
      <NavLink to="/email">Emails</NavLink>
      {/* IMAGE IMPORT  */}
      {/* <img src={imgUrl} alt="" /> */}
    </section>
  )
}
