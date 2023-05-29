import LeftSide from "./LeftSide"
import ChartComp from "./rightside/ChartComp"
import DashBoardComp from "./rightside/DashBoardComp"
import MyComptwo from "./rightside/MyComptwo"
import TwoCharts from "./rightside/TwoCharts"
import "../index.css"


function LastComp(){
  return(
    <div>
      <h3>Today’s schedule</h3>
        <div className="text-with-side-line">
        <div className="side-line"></div>
        <div className="text-content">
            <p>Meeting with suppliers from Kuta Bali</p>
            <p>14.00-15.00</p>
            <p>at Sunset Road, Kuta, Bali </p>
            </div>
         </div>
    </div>
  )
}

const UserPage = () => {
  return (
    <div style={{width:'100%', height:'650px', display: 'flex', margin:'auto', padding:'20px', background:'#DDDDDD'}}>
       {/* leftDiv */}
        <div style={{height:'100%', background:'black', color:'white', width:'25%', borderRadius: '20px'}}>
            <LeftSide/>
        </div>

      {/* right div  */}
        <div style={{width:'68%', marginLeft:'50px', background:'#DDDDDD;'}}>
        <DashBoardComp/>
        <MyComptwo/>
        <ChartComp/>
          <div style={{display:'flex',width:'100%',backgroundColor:'white', justifyContent:'space-around'}}>
            <TwoCharts/>  
            <div style={{border: '1px solid #ccc;'}}>
              <LastComp/>
            </div> 
          </div>
        
        
        </div>
    </div>
  )
}

export default UserPage