import "./navbar.css";
export function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar_container">
                <span className="logo">Hotel Booking</span>
                <div className="navItems">
                <button className="navButton">login</button>
                <button className="navButton">register</button>
                </div>
            </div>
         </div>
    )
}