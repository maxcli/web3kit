
import 'dotenv/config'

export const load= async()=>{

    //console.log('api key:',process.env.TMDB_API_KEY)
    const fetchMovies=async() =>{
    const res=await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`)//regular node fetch
    const data=await res.json()

    //console.log('movie js data:',data)

    return data.results
    }

    return {
        movies:fetchMovies()
    }
}