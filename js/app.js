// clave = "5b197352180c9d801b6d9d654b40a762";

const API_URL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5b197352180c9d801b6d9d654b40a762&?page=1";
const IMAGE_PATH="https://image.tmdb.org/t/p/w500/";
const SEARCH_URL="https://api.themoviedb.org/3/search/movie?api_key=5b197352180c9d801b6d9d654b40a762&include_adult=false&query='";

//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5b197352180c9d801b6d9d654b40a762



let card = document.getElementById('card-template');



async function getMovies(url){
    const res= await fetch(url);
    const data = await res.json()
    displayMovies(data.results);
    console.log(data.results);

    
    }

function displayMovies(movies){
    movies.forEach((movie)=>{
        const {title, poster_path, overview}=movie;
        
        card.innerHTML+=
        `
        <div class="col" >
          <div class="card h-100">
          <img src="${IMAGE_PATH +poster_path}" alt="${title}" />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${overview}</p>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">Ver Mas</button>
            </div>
          </div>
        </div>
        `;
    })
}

getMovies(API_URL)    