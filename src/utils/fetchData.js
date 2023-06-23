//the good stuff!

//the options for making a GET request to the exercise DB along with auth for it
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  }
};

//same thing for youtube api, gotta love rapidAPI for just one key!
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

//takes the URL and options to perform fetch, returns in json data... as usual
export const fetchData = async (url, options) => {
  const response = await fetch(url,options)
  const data = await response.json()

  return data
}