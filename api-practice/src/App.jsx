import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

function App() {
  // Created a useState and define it as an array to save the data I will get from the API
  const [datap, setDatap] = useState([]);
  // I am using the useEffect to consume the data from the API and it will return two possible respons to us
  useEffect(() => {
    // Using 'axios' I will get the data from the given http API
    axios.get('https://pokeapi.co/api/v2/pokemon')
    // if it returned data do the following
      .then(res => {
        // log the data in the console (it will be as an object)
        console.log(res.data)
        // Save the given data(results) in the datap useState using its method setDatap
        setDatap(res.data.results)
      })
      // if we have an error log it on the console
      .catch(res => console.log(err))
  }, []);

  return (
    <>
      {
        // using the map function iterate through the array in the datap
        datap.map((char,i) => {
          return(
            <p key={i}>Name: {char.name}</p>
          )
        })
      }
    </>
  )
}



export default App
