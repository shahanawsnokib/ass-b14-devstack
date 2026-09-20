// import { useState } from 'react'

import { Suspense } from 'react'
import './App.css'
import Hero from './Component/Hero'
import Nav from './Component/Nav'
import Technologies from './Component/Technologies'
import Footer from './Component/Footer'
// import {TtachData} from './Component/TtachData'

interface Ttechnology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}


const techFetch = async (): Promise<Ttechnology>=>{
        const res = await fetch("/data.json")
        const data = await res.json()
        return data
}
 
function App() {
  // const [count, setCount] = useState(0)
  const techPromise = techFetch()

  console.log(techPromise);

  return (
   <div className="App">
       <Nav></Nav>
       <Hero></Hero>
        <Suspense fallback={          <span className="loading loading-bars loading-xl">Loading</span>}>

           <Technologies></Technologies>
        </Suspense>

        <Footer></Footer>
    </div>
  )
}

export default App
