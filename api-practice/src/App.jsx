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
/*
Lessons :
useEffect

first import it from react
>> import { useEffect } from 'react'

under the App function in the define it

>> const useEffect(()=>(),[])

now we need to use axios to get the data from the API

You'll need to install the axios on from the terminal so you can import it first

on the terminal : npm install axios

then in the App.jsx (The folder we are codding in) import axios

>> import axios from 'axios'

use the axios.get() inside the useEffect to load all the data we get from the API 

>> const useEffect(() => (
  
    axios.get('https:www.somethingAPI.com/get/V1')
    .then((response) => {
      do what ever here 
    }
    .catch((error) => {
      do something when an error is returned
    }
    )
  )
),[])

now to save the data we can use a defined 'useState' as an array (because the data we are getting from the API will be objects
  so we will save them as Array of objects)

  using the useState method save the data we get from the API to store it in it at the .then part.


  to render the date we get we can use the map function to iterate through the array and access the needed data from there

  NOTE!! : the map functions need to have a 'return' if we use {}
*/