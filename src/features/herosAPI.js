import axios from "axios"

const myHerosToken = '102141048846123'

export async function fetchHeros (name) {   
  try {      
    const response = await axios.get(
      `https://superheroapi.com/api/${myHerosToken}/search/${name}/`
    )
    return response.data.results 
  } catch (error){
    console.error(error)
  }
}