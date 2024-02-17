

async function fetchdata(){

    try{

        const response=await fetch("https://dummyjson.com/quotes/random");

        if(!response.ok){
            throw new Error("error")
        }

        const data=await response.json();
        ans1=data.quote;
        ans2=data.author;

        document.getElementById("quote").innerText=ans1;
        document.getElementById("author").innerText="- "+ ans2;

    }
    catch(error){
        console.error(error);
    }

}
fetchdata();