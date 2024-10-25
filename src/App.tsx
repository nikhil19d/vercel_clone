import './fonts/geist-font.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Content from './components/Content.tsx'
import './index.css'
export default function App() {
  return (
  <div className='flex justify-center flex-col items-center w-full'>
      <Navbar />
      <Content />
      <Footer />
  </div>
  )
}

