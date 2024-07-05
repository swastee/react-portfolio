import React from "react"
import Header from "./components/Header"
import DisplaySec from "./pages/home/DisplaySec"
import Tech from "./pages/home/Tech"

import Footer from "./components/Footer"
import Intro from "./pages/home/Intro"



const App = () => {
  return (
    <div>
    <Header />
    <DisplaySec />
    <Tech />
    <Intro/>
    <Footer />


    </div>
  )
}
export default App