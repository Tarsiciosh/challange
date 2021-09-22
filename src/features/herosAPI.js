import axios from "axios"

const myHerosToken = '102141048846123'

export async function fetchHeros (herosId) {
  try {
    var fetchedHeros = []
    for (var i = 0; i< herosId.length; i++){
      var response = await axios.get(
        `https://superheroapi.com/api/${myHerosToken}/${herosId[i]}/`
      )
      fetchedHeros = [...fetchedHeros, response.data]
    }
    
    return fetchedHeros
 
  } catch (error){
    console.error(error) 
  }
}

/*
async function getHeros (name) {   
  try {      
    const response = await axios.get(
      `https://superheroapi.com/api/${herosToken}/search/${name}/`
    )
    setSearchedHeros(response.data.results) 
  } catch (error){
    console.error(error)
  }
}
*/