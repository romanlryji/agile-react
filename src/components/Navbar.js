import { useState } from "react"

function Navbar() {
  const [navItems, setNavItems] = useState(["qwe", "rty"])
  return (
    <ul>
      {navItems.map(item => { return <li>{item}</li> })}
    </ul>
  )
}

export default Navbar