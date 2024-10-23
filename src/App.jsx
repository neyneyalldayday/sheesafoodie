import { getRecipies } from "./utils/api"
import { useState } from 'react'

function App() {
  const [recipies, setRecipies] =useState('');


  const letsGetFood = async () => {
    try {
      const response = await getRecipies();
      if(!response.ok){
        console.log(response)
      }
      
    } catch (err) {
      console.log(err)      
    }
  }



  const handleGetFood= async(e) => {
    e.preventDefault()
    console.log("got some food")
    try {
      const data = letsGetFood()
      console.log(data)
    } catch (err) {
      console.log(err)
      
    }

  }
 

  return (
    <>
      <section>
        <h1>get a recipie</h1>
        <button onClick={handleGetFood}>i hungry</button>
      </section>
    </>
  )
}

export default App
