import  logo  from '../assets/placely.png'
import { useLocation } from 'react-router';
export default function Placely({ ref, ...props }) {
    const location=useLocation();
    let role='';
    if(location.pathname.startsWith('/admin')){
        role='Admin';
    }
    else if(location.pathname.startsWith('/student')){
        role='Student';
    }
    
    return (
        <div className="grid grid-cols-5 grid-rows-2 w-60 gap-2 mx-5 my-5" >
        <img src={logo} className="col-span-2 row-span-2" />
        <center className="font-bold col-span-3 row-span-1 my-2 mx-0"><h1 className="text-2xl">Placely</h1></center>
        <center className="col-span-3 row-span-1"><h2 className="text-xl font-bold">{role} Hub</h2></center>
        </div>
    );
}
