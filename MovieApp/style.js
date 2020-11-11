const apikey='1f6091b9694f5fd0faad141515ed0f90';
const url='https://api.themoviedb.org/3/search/movie?api_key=1f6091b9694f5fd0faad141515ed0f90';
const img_url='https://image.tmdb.org/t/p/w500';

const inputElement=document.getElementById("headsearch");
const buttonElement=document.getElementById("submit");
const movieSearchable=document.querySelector('.movie-searchable');
const imgElement=document.querySelector('#searchimage')

function generateUrl(path){
    const url= `https://api.themoviedb.org/3${path}?api_key=f51b7a4f8cd4f93d8866c287714989a8` ;
    return url;
}

// function submit(){
buttonElement.onclick=function(event){
    event.preventDefault();
    const value=inputElement.value;
    const path='/search/movie';
    const newUrl=generateUrl(path) + '&query=' +value;
    // const newUrl= url + '&query=' + value;
    fetch(newUrl)
        .then((res) => res.json())
        
        .then(rendersearch)
        .catch((error)=>{
            console.log('Error :',error);
        })
        inputElement.value='';
    console.log(value);
}
// buttonElement.onclick=submit();
function rendersearch(data){
    movieSearchable.innerHTML='';
    var movies=data.results;
    
    
    const movieBlock=createMovieContainer(movies);       
    movieSearchable.appendChild(movieBlock);  
    console.log('Data:', data);
}
function createMovieContainer(movies){
    const movieElement=document.createElement('div');
    movieElement.setAttribute('class','movie');
    const movieTemplate=
    `
    <section class="section">
        ${movieSection(movies)}
        
    </section>
    <div class="content">
        <p id="content-close">X</p>
    </div>
    `;
    movieElement.innerHTML=movieTemplate;
    return movieElement;
}

function movieSection(movies){
    return movies.map((movie) => {
        if(movie.poster_path && movie.vote_average>=6.0){
            return `
            <img id="searchimage" src=${img_url + movie.poster_path} data-movie-id={movie.id}/>
             `;
        }
    })
}


document.onclick=function(event){
    const target=event.target;
    
    if(target.id === 'searchimage' ){
        console.log("image-description");
        
        const movieId=target.dataset.movieId;
        console.log("MovieID : ",movieId);
        console.log("Event : ", event);
        const section=event.target.parentElement;
        const content=section.nextElementSibling;
        content.classList.add('content-display');      
  
        
    }
    if(target.id === 'content-close'){
        const content=target.parentElement;
        content.classList.remove('content-display');
    }

}
