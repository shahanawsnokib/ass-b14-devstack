// import { useState } from 'react'

import { Suspense } from 'react'
import './App.css'
import Hero from './Component/Hero'
import Nav from './Component/Nav'
import Technologies from './Component/Technologies'
import Footer from './Component/Footer'
import type { TtachData } from './Component/TtachData'
import { ToastContainer } from 'react-toastify'
// import {TtachData} from './Component/TtachData'



const techPromise = async ():Promise<TtachData[]>=>{
        const res = await fetch("/data.json")
        const data = await res.json()
        return data;
}
 
function App() {
  // const [count, setCount] = useState(0)
  
const promise =techPromise()
  return (

   



   <div className="App">
       <Nav></Nav>
       <Hero></Hero>
        <Suspense fallback={    <span className="loading loading-bars loading-xl">Loading</span>}>
   <Technologies promise={promise}></Technologies>
           </Suspense>
        

        <Footer></Footer>


        <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
