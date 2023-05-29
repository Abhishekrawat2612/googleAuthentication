import Board from "./Board"
import LoginSignupPage from "./LoginSignupPage"
const HomePage = () => {
  return (
    <div style={{display: "flex", height: "600px", width: "100%", padding:'30px', background:'#DDDDDD'}}>
        <Board/>
        <LoginSignupPage/>
    </div>
  )
}

export default HomePage