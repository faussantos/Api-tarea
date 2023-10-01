const btn = document.getElementById("btn");
const img = document.querySelector("img")

btn.addEventListener("click", async ()=>{
    const randomNum = Math.floor(Math.random() * 5000) + 1

    let randomCall = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
           return data[randomNum].url
        })
        .catch(error => {
            console.error(error);
 });
        img.src = randomCall
})