import './App.css'
import Banner from './Components/Banner/Banner'
import Brand from './Components/Brands/Brand'
import Services from './Components/Services/Services'
import Header from './Components/Headers/Header'
// import Navbar from './Components/Navbar/Navbar'
import WorkTogether from './Components/WorkTogether/WorkTogether'
import Connect from './Components/Connect/Connect'
import WorkWay from './Components/WorkWay/WorkWay'
import BuiltWork from './Components/BuiltWork/BuiltWork'
import BulitTeam from './Components/BuiltTeam/BuiltTeam'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div>
        {/* <Navbar></Navbar> */}
        <Header></Header>
        <Banner></Banner>
        <Brand></Brand>
        <Services></Services>
        <WorkTogether></WorkTogether>
        <Connect></Connect>
        <WorkWay></WorkWay>
        <BuiltWork></BuiltWork>
        <BulitTeam></BulitTeam>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
