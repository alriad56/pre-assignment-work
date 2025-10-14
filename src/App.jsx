import  { Suspense } from 'react'  

import Toggles_btns from './component/Toggle_btns'           
import './App.css'
import IssuesManagement from './component/IssuesManagement'
import Countbox from './component/Countbox'
import Container from './component/Container'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Cards from './components/Cards'

const fetchIssues = async () => {
  const result = await fetch ('/public/data.json')
  return result.json();
}
function App() {

  const fetchPromise = fetchIssues();

  return (
  

    <>
      <h1>Testing</h1>
    {/* <Navbar></Navbar>
    <Footer></Footer>
    <Cards></Cards> */}
  
    {/* <Container>
      <div className="text-right">
      <button
  className={`rounded-l-md toggle-btn ${
    toggleStatus === "All" ? "!bg-purple-500  !text-white" : ""
  }`}
  onClick={() => setToggleStatus("All")}
>
  All
</button>

        <button className={`toggle-btn ${
    toggleStatus === "Pending" ? "!bg-purple-500  !text-white" : ""
  }`} onClick={() => setToggleStatus("Pending")}>Pending</button>
        <button className={`toggle-btn ${
    toggleStatus === "Submitted" ? "!bg-purple-500  !text-white" : ""
  }`} onClick={() => setToggleStatus("Submitted")}>Submitted</button>
        <button className={` rounded-r-md  toggle-btn ${
    toggleStatus === "Reviewed" ? "!bg-purple-500  !text-white" : ""
  }`} onClick={() => setToggleStatus("Reviewed")}>Reviewed</button>
      </div>
    </Container> */}

<Suspense>
  <IssuesManagement fetchPromise={fetchPromise} 
  />
</Suspense>

    </>
  )
}

export default App
