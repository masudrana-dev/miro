import './App.css'
import Banner from './Components/Banner/Banner'
import Brand from './Components/Brands/Brand'
import Services from './Components/Services/Services'
import Header from './Components/Headers/Header'
import WorkTogether from './Components/WorkTogether/WorkTogether'
import Connect from './Components/Connect/Connect'
import WorkWay from './Components/WorkWay/WorkWay'

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Banner></Banner>
        <Brand></Brand>
        <Services></Services>
        <WorkTogether></WorkTogether>
        <Connect></Connect>
        <WorkWay></WorkWay>
      </div>
    </>
  )
}

export default App
