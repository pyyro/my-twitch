import Navbar from "./Navbar";

const Layout = ({children, user, setUser}) => {
    return ( 
        <>
            <Navbar user={user} setUser={setUser}/>

            {children}
        </>
     );
}
 
export default Layout;