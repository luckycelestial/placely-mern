import { Link, Outlet } from "react-router";
import Placey from '../Placely.jsx';

export default function Student({ ref, ...props }) {
    

    return (
        <>
        <div className="flex">
            <nav className="border-1 border-gray-200 shadow-md shadow-black-230 h-screen w-70">
                <Placey />
                <Link to={"/student/dashboard"}>Dashboard</Link>
            </nav>
            <div className="flex-1">
                <div className="border-1 border-gray-200 shadow-sm shadow-black-100 h-20">
                    Inside div
                </div>
                <Outlet />
            </div>
        </div>
        </>
    );
}
