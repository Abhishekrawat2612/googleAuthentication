import {Routes, Route} from "react-router-dom"
import HomePage from "../src/omponent/HomePage"
import UserPage from "../src/omponent/UserPage"

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={< HomePage/>} />
            <Route path='/user' element={< UserPage/>} />
        </Routes>
    </div>
  )
}

export default AllRouter