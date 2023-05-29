import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{display:'flex', textAlign: 'center', justifyContent:"center", fontSize:"30px", gap:"200px", background:'#c47171', width:'auto'}}>
        <NavLink style={({isActive})=>{
            return isActive ? {textDecoration: 'none', color: 'green', fontWeight: '600'} : {textDecoration: 'none',color:"black", fontWeight: '600', padding: '10px'}
        }} to='/'>Login SignUp Page</NavLink>

        <NavLink style={({isActive})=>{
            return isActive ? {textDecoration: 'none', color: 'green', fontWeight: '600'} : {textDecoration: 'none',color:"black", fontWeight: '600', padding: '10px'}

        }}
        to='/user'>Next Page</NavLink>
    </div>
  )
}

export default Navbar