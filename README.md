# Movie Finder API | Backend
🎥📺 🍿∠( ᐛ 」∠)_ 🥤🍫	

A project study into building the core of a backend for an intermediary API, that fetches movie information from a public, external movie database.

## Module 12: SBA | 

## Overview
The core focus of this project is:

- Project Setup & Structure
- Server & Routing
- Perfoming Fetches for Information via Endpoints:
    - Search Endpoint (/api/search)
    - Movie Details Endpoint (/api/movies/:id)
- General Error Handling

### GitHub Link
https://github.com/ANIO-Official/movie-finder-api

## How to Use
1.  Clone the repository or Download the ZIP file and extract the files.
2.  Open the file in Visual Studio Code.
3.  Open the Terminal using Ctrl + ~
4.  `cd` into the directory 'movie-finder-api' in the terminal. Like so: 
    `cd movie-finder-api`

    **Ensure NPM is is installed for the project to run:** 

      inside the terminal window run `npm i` to install npm
5.  Create a `.env` file in the root directory/folder ( movie-finder-api ). And add in your personal key to the [OMDB API]( http://www.omdbapi.com/apikey.aspx) in the following format `OMDB_API_KEY=yourKeyhere`
6.  (Once NPM is indeed installed in the project file directory, you'll see a node modules folder) Run the project using `node server.js` in the terminal. (You may also use `npm run dev` if you like. Nodemon is installed.)
6.  You should see a message appear. Follow the link: "http://localhost:3000/"

## My process

 1. Initialized repo and npm. Installed all necessary & personally preferenced dev packages. Added server.js & .gitignore.
 2. Set up a basic express server & tested using `node server`
 3. Create the API Client file to instantiate an axios instance for fetching.
 4. Created Movie Routes to hold all routes for all movie related `/api/...` related paths. Exported for use in the main server file.
 5. Created Movie Controller with function logic for all route endpoints. 
 6. Testing, Bug fixing, consultation, corrections. 
 7. Final testing with Thunderclient and the browser. Touch ups.

### Built with

- Node.js
- Express
- Axios
- Nodemon
- Javascript
- dotenv

### Useful resources

**PerScholas** | Node and Express | Lessons 1-7

**PerScholas** | Bryan Santos - Helped me debug the link for my axios fetch. I was attempting using a partial link due to both get request needing my apikey, however it causes an error when attepting the fetch due to a '/' being added in the axios method.


## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)