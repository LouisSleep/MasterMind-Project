// Aléatoire :
// Math.random() donne un nomre à virgule entre 0 et 1 exclus


// import swal from 'sweetalert';



const couleurs =["red","green","pink","purple","blue"];

function construireSequenceOrdinateur(){

    const sequence = [] ;

    for(let i=0; i<4; i++){
        const aleatoire0a1 = Math.random();

        const aleatoire0a1fois5 = aleatoire0a1 * 5;

        console.log(aleatoire0a1fois5);

        const aleatoire0a4entier = Math.floor(aleatoire0a1fois5);
        console.log(aleatoire0a4entier)

        const position = Math.floor(Math.random() * 5);

        const couleur = couleurs[position];
        console.log(couleur);
        sequence.push(couleur);
    }

    return sequence;
}


const sequenceOrdinateur = construireSequenceOrdinateur();

console.log(sequenceOrdinateur);

function recupererSeqUser(){
   
//    selectionner les elements nécessaire pour la liste
    const InputchoixUser = document.querySelector(".select1");
    const InputchoixUser2 = document.querySelector(".select2");
    const InputchoixUser3 = document.querySelector(".select3");
    const InputchoixUser4 = document.querySelector(".select4");
    
//  recuperer la valeur de chaque éléments précédement selectionnés
    const sequenceUser = InputchoixUser.value;
    const sequenceUser2 = InputchoixUser2.value;
    const sequenceUser3 = InputchoixUser3.value;
    const sequenceUser4 = InputchoixUser4.value;
   
//  stocker ces éléments dans un tableau
    const ChoiceUser =[];
    ChoiceUser.push(sequenceUser,sequenceUser2,sequenceUser3,sequenceUser4); 

    return ChoiceUser;
    
}
document.querySelector("#Go").addEventListener("click",recupererSeqUser());


function compareList(){
    

    
//  créer une boucle qui "fouillera" dans les listes pour les comparer
    for(i=0;i<4;i++){
        
        
        // comparer les deux listes pour savoir s'il y a une égalité au niveau du positionnement d'un ou plusieurs éléments de la liste User
        if(recupererSeqUser()[i] == sequenceOrdinateur[i]) {
            
            console.log("ok");
            document.body
            document.querySelector("#Commentaire0").textContent += i +"\n"+recupererSeqUser()[i] +"\n" ;
            

            // créer des blocs de couleurs, mais malheureusement les blocs de couleurs se répètent
            const ColorBlock = document.createElement('span')
            var text = document.createTextNode(i)
            ColorBlock.appendChild(text)
            // ColorBlock.style.color = 'transparent'
            ColorBlock.style.background = recupererSeqUser()[i]

            document.querySelector('.pcolors').appendChild(ColorBlock)
            

            // permet de savoir si les divs ont bien été créé 
            var ok = document.body.contains(ColorBlock)
            console.log(ok)

            
        // comparer les deux listes pour savoir si des éléments de la liste User font parties de la liste Ordinateur 
        }else if(sequenceOrdinateur.includes(recupererSeqUser()[i])){
            const Ok = console.log("ok mais pas au bon endroit");
            
            
            document.querySelector("#Commentaire1").textContent += i +"\n"+recupererSeqUser()[i] +"\n" ;
            
        }
        // renvoyer un non si aucune correspondance pour une des couleurs selectionné
        else if((recupererSeqUser()[i] != sequenceOrdinateur[i])){
            
            console.log("non");
            document.querySelector("#Commentaire2").textContent+=i +"\n"+recupererSeqUser()[i] +"\n" ;
        }

    }
   

    if(JSON.stringify(recupererSeqUser())==JSON.stringify(sequenceOrdinateur)){
        alert("tu as gagné")
        window.location.reload()

    }
        console.log(recupererSeqUser())
        
        console.log(sequenceOrdinateur)
}
document.querySelector("#Go").addEventListener("click",compareList);

var Click = 10;
function compteur(){

    Click = Click-1;
    
    const numberClick =  document.querySelector("#count").innerHTML = Click;
    
    console.log(numberClick);
    document.querySelector("#Commentaire0").innerHTML=""
    document.querySelector("#Commentaire1").innerHTML=""
    document.querySelector("#Commentaire2").innerHTML=""
    document.querySelector(".pcolors").innerHTML=""
   

    if(numberClick==0){
        
        alert("tu as perdu ! Attention la page va se rafraichir, tu lui as donné trop chaud");
        window.location.reload() 
    }

    return numberClick
  
}

function ReLoad(){

    

    if (compteur()>=1){
    alert("Vous avez décidé de relancer le jeu.");
    window.location.reload()  
    }
    
}
var buttonClick = false;


function DAYNIGHT(buttonDay){

    let body = document.querySelector('body');
    let nav  = document.querySelector('nav');
    let p = document.querySelector('p');
    let paragraphegame = document.querySelector("#Commentaire0")

    let paragraphegame1 = document.querySelector(" #Commentaire1")
    let paragraphegame2 = document.querySelector("#Commentaire2")

    let GoodColor = document.querySelector("#Commentaire p")

    let GoodColor1 = document.querySelector("#Commentaire11 p")
    let GoodColor2 = document.querySelector("#Commentaire22 p")
    let TitleColor = document.querySelector(".h21")
    let TitleColor1 = document.querySelector(".h22")
    let TitleColor2 = document.querySelector(".h23")
    let TitleColor3 = document.querySelector(".h24")
    let SelectStyle = document.querySelector(".select1")
    let SelectStyle2 = document.querySelector(".select2")
    let SelectStyle3 = document.querySelector(".select3")
    let SelectStyle4 = document.querySelector(".select4")
    

    let OptiontStyle = document.querySelector(".choixutilisateur")
    let OptiontStyle1 = document.querySelector(".choixutilisateur1")
    let OptiontStyle2 = document.querySelector(".choixutilisateur2")
    let OptiontStyle3 = document.querySelector(".choixutilisateur3")
    let OptiontStyle4 = document.querySelector(".choixutilisateur4")
    let OptiontStyle5 = document.querySelector(".choixutilisateur5")
    
    
    document.querySelector('#day').addEventListener('click',function(){
        buttonDay=true;
        console.log(buttonDay );
        if(buttonDay  == true){
            body.style.background = "white";
            nav.style.color ="rgba(126, 0, 94, 0.666)";
            p.style.color = "#00f28c";
            paragraphegame.style.color = "black"
        paragraphegame1.style.color = "black"
        paragraphegame2.style.color = "black"
        GoodColor.style.color="#00f28c"
        GoodColor1.style.color="#00f28c"
        GoodColor2.style.color="#00f28c"
        TitleColor.style.color="#00f28c"
        TitleColor1.style.color="#00f28c"
        TitleColor2.style.color="#00f28c"
        TitleColor3.style.color="#00f28c"
        SelectStyle.style.color="#00f28c"
        SelectStyle2.style.color="#00f28c"
        SelectStyle3.style.color="#00f28c"
        SelectStyle4.style.color="#00f28c"
        
        }
    
    });

}

function Night(buttonNight){
    let nav  = document.querySelector('nav');
    let body = document.querySelector('body')
    let div = document.querySelector('p');

    let paragraphegame = document.querySelector("#Commentaire0")

    let paragraphegame1 = document.querySelector(" #Commentaire1")
    let paragraphegame2 = document.querySelector("#Commentaire2")

    let GoodColor = document.querySelector("#Commentaire p")

    let GoodColor1 = document.querySelector("#Commentaire11 p")
    let GoodColor2 = document.querySelector("#Commentaire22 p")
    let TitleColor = document.querySelector(".h21")
    let TitleColor1 = document.querySelector(".h22")
    let TitleColor2 = document.querySelector(".h23")
    let TitleColor3 = document.querySelector(".h24")

    let ButtonGo = document.querySelector(" #Go")
    let ButtonReload = document.querySelector(" #ReLoad")
    let SelectStyle = document.querySelector(".select1")
    let SelectStyle2 = document.querySelector(".select2")
    let SelectStyle3 = document.querySelector(".select3")
    let SelectStyle4 = document.querySelector(".select4")

    let OptiontStyle = document.querySelector(".choixutilisateur")
    // let OptiontStyle1 = document.querySelector(".choixutilisateur1")
    // let OptiontStyle2 = document.querySelector(".choixutilisateur2")
    // let OptiontStyle3 = document.querySelector(".choixutilisateur3")
    // let OptiontStyle4 = document.querySelector(".choixutilisateur4")
    // let OptiontStyle5 = document.querySelector(".choixutilisateur5")



    
    
    
    document.querySelector('#night').addEventListener('click',function(){
        buttonNight =false;
    console.log(buttonNight );
    if(buttonNight  == false){
        body.style.background = "rgb(19, 19, 19)";
        nav.style.color ="#ffff";
        div.style.color = "white";
        paragraphegame.style.color = "white"
        paragraphegame1.style.color = "white"
        paragraphegame2.style.color = "white"
        GoodColor.style.color="white"
        GoodColor1.style.color="white"
        GoodColor2.style.color="white"
        TitleColor.style.color="white"
        TitleColor1.style.color="white"
        TitleColor2.style.color="white"
        TitleColor3.style.color="white"
        ButtonGo.style.color="white"
        ButtonReload.style.color="white"
        SelectStyle.style.color="white"
        SelectStyle2.style.color="white"
        SelectStyle3.style.color="white"
        SelectStyle4.style.color="white"

        for (var i = 0, max = OptiontStyle.length; i < max; i++) {
            OptiontStyle[i].style.background = "rgb(19, 19, 19)";
        }
        // OptiontStyle.style.background = "rgb(19, 19, 19)"
        // OptiontStyle1.style.background = "rgb(19, 19, 19)"
        // OptiontStyle2.style.background = "rgb(19, 19, 19)"
        // OptiontStyle3.style.background = "rgb(19, 19, 19)"
        // OptiontStyle4.style.background = "rgb(19, 19, 19)"
        // OptiontStyle5.style.background = "rgb(19, 19, 19)"
    }

});

}


const JOURNUIT = document.querySelector('.JOURNUIT')

JOURNUIT.addEventListener('click', function(){
      JOURNUIT.classList.toggle('active')
})



