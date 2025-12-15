fetch("url du fichier")
    .then(rep => rep.json())
    .then(data => {
        // ma donnée dans data

        console.log(data)

    });
//role: fonction affiche dans la page web les cartes 
//para: 
//return rien
function afficherrecette(tableaurecette) {

    //affiche tous les titers des produits 
    //prendre des produites un par un ->foreeach
    //

    tableaurecette.forEach(recette => {

        let nom = nom.recette
        let img  = img.recette
        let desc = desc.recette
        let difficulte = difficulte.recette
        let tempPreparation = tempPreparation.recette
        let tempCuisson = tempPreparation.recette
        let portions = portions.recette
        let ingredients = ingredients.recette

        console.log(nom.recette)
        console.log(img.recette)
        console.log(desc.recette)
        console.log(difficulte.recette)
        console.log(tempPreparation.recette)
        console.log(tempCuisson.recette)
        console.log(portions.recette)
        console.log(ingredients.recette)
        


        document.getElementById("section1").innerHTML +=
         
       ` <div class="carte">
       
        <h2> ${nom}</h2>
        <img src="${img}" class="image ">
        <p> ${desc}
        <p> ${difficulte} </p>
        <p>  Le temps de preparation ${tempPreparation}</p>
        <p>  Le temps de cuisiner ${tempCuisson}</p>
        <p>  ${portions}</p>
        <ul> la liste d'ingredient ${ingredients}</ul>

     </div>
     `

    }


)}











