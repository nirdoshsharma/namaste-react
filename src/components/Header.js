import { useState } from "react"
import { LOGO_URL } from "../utils/contants"
import { Link } from "react-router-dom"

 
 const Header = () => {
    // let btnName = "LOG IN"
    const [btnName , setBtnName] = useState("LOG IN")
    return(
        <><div className="header">
            <div className="logo-container">
            <img className="logo" src = {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li>
                        <Link to ="/about">About Us</Link>
                    </li>
                   <li><Link to ="/contact">Contact Us</Link></li> 
                    <li>cart</li>
                    <button className="login" onClick ={() => {
                        btnName ==="LOG IN" ? setBtnName("LogOut") : setBtnName("LOG IN")}
                        }
                    > 
                          {btnName}</button>
                     
                </ul>
        </div>
    
            </div></>
    ) 
        

    
 }

 export default Header