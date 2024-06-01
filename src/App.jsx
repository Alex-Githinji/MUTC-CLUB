import Header from "./components/Header"
import Home from "./pages/home/Home"
import Courses from "./pages/courses/Courses"
import Leaders from "./pages/leaders/Leaders"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Events from "./pages/events/Events"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
     
      <body />
     
     
      </BrowserRouter>
    </>
  )
}

export default App
