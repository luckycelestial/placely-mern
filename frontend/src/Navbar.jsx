import {Link} from 'react-router'
export default function Navbar(){
    return(
        <>
        <div className="flex flex-col">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/">Signout</Link>
        </div>
        </>
    );
}