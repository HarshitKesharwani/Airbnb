import React from "react"
import Navbar from "./Navbar"
import Movies from "./Movies"

import data1 from "./data1"
import Navcon from "./Navcon"

export default function App() {
            // <Hero />
    const movie=data1.map(mv=>{
        return(
            <Movies
            img={mv.img}
            mv={mv}
                />
        )
    }
        )
    return (
        <div>
            <Navbar />
            <Navcon />
            
            <section className="sec">
            
                {movie}
            </section>
            <footer>
                CREATED BY HARSHIT KESHARWANI
            </footer>
        </div>
    )
}