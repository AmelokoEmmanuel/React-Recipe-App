import { useState } from 'react'
import Search from "./Component/Search"
import FoodList from './FoodList'
import Nav from './Nav'
import './app.css'
import Container from './Component/Container'
import InnerContainer from './Component/InnerContainer'
import FoodDetails from './Component/FoodDetails'

function App() {
  const [foodData, setfoodData] = useState([])
  const [foodId, setfoodId] = useState("654523")

  return (
    <div className="App">
      <div>
        <Nav/>
        <Search foodData={foodData} setfoodData={setfoodData}/>


        <Container>
          <InnerContainer>
          <FoodList foodData={foodData} setfoodId={setfoodId}/>
          </InnerContainer> 

          <InnerContainer>
            <FoodDetails foodId={foodId} setfoodId={setfoodId}/>
            </InnerContainer>     
        </Container>
        
      </div>
      </div>
  )
}

export default App
