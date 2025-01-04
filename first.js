document.addEventListener("DOMContentLoaded",()=>{
let setupElement = document.querySelector(".setup");
let deliveryElement = document.querySelector(".delivery");
   const btn = document.querySelector(".generate");

   async function generateJoke(){
       try{
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jokeData = await response.json();

        setupElement.textContent = "";
        deliveryElement.textContent = "";
       
        if(jokeData.type === "single"){
            setupElement.textContent = jokeData.joke;
        }
       else if(jokeData.type === "twopart"){
        setupElement.textContent = jokeData.setup;
        deliveryElement.textContent = jokeData.delivery;
       }
       else {
        setupElement.textContent = "Unknown joke format received.";
       }
       }
       catch(error){
        setupElement.textContent = "Failed to fetch a joke.";
        console.error("Error:", error);
      }
   }
   btn.addEventListener("click",generateJoke);
   generateJoke();
});