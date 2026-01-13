const omdbClient = require('../services/api-client')
const key = process.env.OMDB_API_KEY

async function searchMovies(req, res){
    try{
        const title = req.query.title //search term

        if(!title ){ //Validate if title has been included in endpoint.
            console.error('Error: API request failed due to missing title in parameters: ', error.message)
            res.send(404).json({error: 'Title query parameter is required.'})
        }//continue if title is included. V

        const response = await omdbClient.get(`/?apikey=${key}&s=${title}`) //search by title
        res.json(response.data)

    }catch(error){
        if(error.response){
            console.error('API Error: ', error.response.status, error.response.data)
            res.status(error.response.status).json({message: 'An API error occured while searching for movies.'})
        }else{
            console.error*('Network Error: ', error.message)
            res.status(502).json({message: 'A Network error has occured.'})
        }
    }
}

async function getMovieDetails(req, res){
    try{
        const id = req.params.id //ID provided
        const response = await omdbClient.get(`/?apikey=${key}&i=${id}`)

        res.json(response.data)

    }catch(error){
        if(error.response){
            console.error('API Error: ', error.response.status, error.response.data)
            res.status(error.response.status).json({message: 'An API error occured while acquiring movie details. We apologize.'})
        }else{
            console.error*('Network Error: ', error.message)
            res.status(502).json({message: 'A Network error has occured.'})
        }
    }
}

module.exports = {
    searchMovies,
    getMovieDetails
}