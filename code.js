const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    data.drinks.forEach(createCard);
        
    function createCard(item,index){
        let cocktail = item.strDrink;

        // create parent container for the card
        let divForCard = document.createElement("div")
        divForCard.setAttribute("class","card")

        // create image node for the cocktail images
        let forImage = document.createElement("img")
        forImage.setAttribute("class","cocktail-image")
        let lower = cocktail.toLowerCase();
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
        lower = lower.replace(regex,'');
        forImage.setAttribute("src","./image/"+lower+".jpg")

        // create h5 node for the cocktail names
        let forTitle = document.createElement("h5")
        let idForh5 = lower+"-"+index
        forTitle.setAttribute("id",idForh5)
        forTitle.textContent = cocktail;


        //appending the children 
        divForCard.appendChild(forImage)
        divForCard.appendChild(forTitle)
        document.querySelector(".cocktails").appendChild(divForCard)
        }

        // displaying the recipes
        let lengthData = data.drinks.length;
        console.log(lengthData);
        for( let i=0;i<lengthData;i++)
        {
            document.querySelectorAll(".cocktail-image")[i].addEventListener('click',function(){
                if(document.querySelector(".recipie").hasChildNodes())
                {
                    document.querySelector(".recipie").innerHTML = ''
                    let recipie = data.drinks[i].strInstructions;
                    let recipieToShow = document.createElement("p");
                    recipieToShow.textContent = recipie
                    document.querySelector(".recipie").appendChild(recipieToShow);
                }
                    
                else{
                let recipie = data.drinks[i].strInstructions;
                let recipieToShow = document.createElement("p");
                recipieToShow.textContent = recipie
                document.querySelector(".recipie").appendChild(recipieToShow);
                }
        })
        }

    });