const apikey='1f6091b9694f5fd0faad141515ed0f90';
const url='https://api.themoviedb.org/3/search/movie?api_key=1f6091b9694f5fd0faad141515ed0f90&query=master';

const inputElement=document.getElementById("headsearch");
const buttonElement=document.getElementById("submit");

function submit(){
    const value=inputElement.value;
    fetch(url)
        .then((res) => res.json())
        .then((data)=>{
            console.log('Data:', data);
        })
        .catch((error)=>{
            console.log('Error :',error);
        })
    console.log(value);
}
buttonElement.onclick=submit;