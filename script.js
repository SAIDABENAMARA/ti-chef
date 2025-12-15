fetch("data.json")
    .then(rep => rep.json())
    .then(data => {
        // ma donnée dans data

        console.log(data)
        afficherrecette(data)
    });
//role: fonction affiche dans la page web les cartes 
//para: 
//return rien
function afficherrecette(tableaurecette) {


    //affiche tous les titers des produits 
    //prendre des produites un par un ->foreeach
    //

    tableaurecette.forEach(recette => {
        recette.ingredients.forEach(ingredient => {
            console.log()

        })
        //ma liste d'ingredient
        let liIngerdients = ""
        recette.ingredients.forEach(ing => {
            liIngerdients += `<li>${ing.quantite}${ing.unite}${ing.aliment}</li>`

        })
        console.log(liIngerdients)

        // ma liste d'etape

        let lietape = ""
        recette.etapes.forEach(etape => {
            lietape += `<li>${etape.numeroEtape}${etape.descEtape}</li>`

        })
        console.log(lietape)




        console.log(recette.nom)
        console.log(recette.img)
        console.log(recette.desc)
        console.log(recette.difficulte)
        console.log(recette.tempPreparation)
        console.log(recette.tempCuisson)
        console.log(recette.portions)
        console.log(recette.ingredients)



        document.getElementById("section1").innerHTML +=

            `   <section class="carte ">
            <!-- div tittre icone -->
            <div class="flex">
                <h2>${recette.nom}</h2>
                <i class="ph ph-heart"></i>

            </div>
            <!-- grousse div -->
            <div class=" flex space-between">

                <!-- div collone 1 -->
                <div class=" w22">
                    <!-- div image et tittre-->
                    <div class="w100">
                        <img src="${recette.img[0]}" class="w22">
                       
                        <h3>${recette.nom}</h3>
                    </div>
                    <!-- div images  -->
                    <div class="w100 flex space-between">
                        <img src="${recette.img[1]}" class="w22">
                        <img src="${recette.img[2]}" class="w22">
                        <img src="${recette.img[3]}" class="w22">
                    </div>
                </div>
                <!--  div details collone2  -->
                <div class="w22">
                    <!-- div icone p -->
                    <div class="flex">
                        <i class="ph ph-fork-knife"></i>
                        <p>${recette.tempPreparation}</p>
                        <i></i>
                        <p>${recette.tempCuisson}</p>
                        <i class="ph ph-alarm"></i>
                        <p>${recette.portions}</p>
                    </div>
                    <h3>Details</h3>
                    <p>${recette.desc}</p>
                    <h3>Ingredients</h3>
                    <!-- 2 collone -->
                    <ul>
                        ${liIngerdients}
                    </ul>
                </div>
                <!-- div etape collone 3 -->
                <div class="w33">
                    <h3>Etape</h3>
                    <!-- dernien collone -->
                    <ul>
                       ${lietape}
                    </ul>
                </div>


            </div>
        </section>
     `

    }


    )
}











