import {Routes,Route} from 'react-router'
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';
import Profile from './Profile.jsx';
export default function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>  
    </>
  );
}