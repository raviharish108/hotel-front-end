import { Header } from "./components/header/header"
import { Navbar } from "./components/navbar/navbar"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { Search } from "./components/searchItem/search";
import "./List.css"
export function List({list}){
   const location=useLocation();
   const[Destination,setDestination]=useState(location.state.destination)
   const[date,setDate]=useState(location.state.date)
   const[options,setOptions]=useState(location.state.options)
   const [openDate, setOpenDate] = useState(false);
       return (
       <div>
             <Navbar/>
             <Header type="list"/>
             <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">search</h1>
                        <div className="lsItem">
                          <label>Destinaition</label>
                          <input type="text" placeholder={Destination}/>
                        </div>
{/*___________________________________________________________________________________________ */}
                        <div className="lsItem">
                          <label>check-in date</label>
                          <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                          {openDate && (
                                <DateRange
                                 onChange={(item) => setDate([item.selection])}
                                  minDate={new Date()}
                                  ranges={date}/>)}</div>
                       
{/*___________________________________________________________________________________________ */}                        

                     <div className="lsItem">
                    <label>Options</label>
                    <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                 </div>
              </div>
            </div>
            <button>Search</button>
            </div>
            <div className="listResult">
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
          </div>
            </div>
            </div>
            </div>
    )
}