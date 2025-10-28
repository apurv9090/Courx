import { Outlet } from 'react-router-dom'
import AuroraBackground from '../components/visuals/AuroraBackground'
import NavigationBar from '../components/navigation/NavigationBar'
import Footer from '../components/sections/Footer'
import ScrollToTop from '../components/ScrollToTop'

const RootLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-white">
      <AuroraBackground />
      <ScrollToTop />
      <NavigationBar />
      <main className="relative z-10 flex min-h-screen flex-col pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
