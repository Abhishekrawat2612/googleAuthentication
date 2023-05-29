

const SignInUserDetails = () => {

    const logout = ()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
        <h1>Logged</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default SignInUserDetails