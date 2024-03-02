import './App.css'
import Banner from './Components/Banner/Banner'
import Brand from './Components/Brands/Brand'
import Services from './Components/Services/Services'
import Header from './Components/Headers/Header'
import WorkTogether from './Components/WorkTogether/WorkTogether'

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Banner></Banner>
        <Brand></Brand>
        <Services></Services>
        <WorkTogether></WorkTogether>
      </div>
    </>
  )
}

export default App
