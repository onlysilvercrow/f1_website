import { useLocation } from "react-router-dom"


const Header = () => {

    const PageName= {
      "/newpage": "New Page",
      "/": "Home",
      "/championship": "Championship",
      "/register": "Register",
      "/login": "Login",
      "/homepage": "Home",
      "/logout" :"Logout",
      "/userprofile" :`User Profile`
    }
    const location = useLocation()
    return (
    
    <header className="Header">{PageName[location.pathname].toUpperCase()}</header>
  )
}

export default Header