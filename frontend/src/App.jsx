import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Checkout from './pages/Checkout'
import StudentDashboard from './pages/dashboard/StudentDashboard'
import InstructorDashboard from './pages/dashboard/InstructorDashboard'
import AdminDashboard from './pages/dashboard/AdminDashboard'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import NotFound from './pages/NotFound'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.09,
      syncTouch: true,
      smoothWheel: true,
    })

    let animationFrame
    const raf = (time) => {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(raf)
    }
    animationFrame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:slug" element={<CourseDetail />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard">
          <Route path="student" element={<StudentDashboard />} />
          <Route path="instructor" element={<InstructorDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<ForgotPassword />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
