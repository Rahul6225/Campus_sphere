import LoginPage from './Common/Login.js'
import SignupPage from './Common/Signup.js'
import ProtectedRoute from './Common/ProtectedRoute.js'
import Navigation from './Common/Navigation.js'
import Home from './Student/Home.js'
import StudentInfo from './Student/StudentInfo.js'
import Register from './Student/Register.js'
import Medical from './Student/Medical.js'
import Attendance from './Student/Attendance.js'
import Performance from './Student/Performance.js'
import Contact from './Student/Performance.js'

import AdminAttendance from './Admin/Attendance.js';
import AdminStudentInfo from './Admin/StudentInfo.js';
import './App.css'

import QuizApp from './Student/QuizApp.js'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Router just renders the component according to the navigation links set through NavLinks
import { useEffect } from 'react'
import ReactGA from "react-ga4";

ReactGA.initialize("G-PMB6L869LE");
useEffect(()=>{
  ReactGA.send({
    hitType:"pageview",
    page:window.location.pathname,
  });
  ReactGA.send({ hitType: "pageview", page: "/contact", title: "Contact page viewed" });
},[])


function App() {
  return (
    <Router>

      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>

        <Route path="/register" element={<Register />} />
        <Route path="/quiz" element={<ProtectedRoute><QuizApp /></ProtectedRoute>} />
        <Route path='/apply-medical' element={<Medical />}/>

        {/*Student Routes */}

        <Route element={<Navigation/>}>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<ProtectedRoute><StudentInfo /></ProtectedRoute>} />
          <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/attendance" element={<ProtectedRoute><AdminAttendance /></ProtectedRoute>} />
          <Route path="/admin/student" element={<ProtectedRoute><AdminStudentInfo /></ProtectedRoute>} />
          <Route path="/admin/performance" element={<Performance />} />
          <Route path="/admin/contact" element={<Contact />} />
        </Route>

      </Routes>

    </Router>


  );
}

export default App;
