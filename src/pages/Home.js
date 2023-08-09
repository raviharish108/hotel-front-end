import { Navbar } from "./components/navbar/navbar"
import { Header } from "./components/header/header"
import { Featured } from "./components/featured/featured"
import { Plist } from "./components/propertylist/Plist"
import { FeaturedProperties } from "./components/featuredpropertylist/FP"
import { Mail } from "./components/Mail_List/Mail"
import "./Home.css"
import { Footer } from "./components/Footer/Footer"
export function Home(){
    return(
        <div >
          <Navbar/>
          <Header/>
          <div className="home_container">
              <Featured/>
              <h1 className="homeTitle">Browse by property type</h1>
              <Plist/>
              <h1 className="homeTitle">Homes guests love</h1>
              <FeaturedProperties/>
              <Mail/>
              <Footer/>
          </div>
        </div>
    )
}