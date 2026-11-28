import { Routes, Route } from 'react-router';
import Dashboard from './pages/student/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Student from './pages/student/Student.jsx'




export default function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
         
        <Route path="/student" element={<Student />}> 
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

      </Routes>  
    </>
  );
}