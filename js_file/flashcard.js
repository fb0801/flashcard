document.getElementById('btnSave').addEventListener('click',saveCard); //event listner for a click action from the mainpage
let cards = new Array();//empty array to store the values

function saveCard(){
    //get input from the user
    let frontContent = document.getElementById('frontCard').value;
    let backContent = document.getElementById('backCard').value;
    let card ={ front: frontContent, back:backContent}; //array of the values to be stored once collected as a card

    cards.push(card);
    console.log(cards);
    clearUI();
    numCardsOut()

}

numCardsOut = () =>{
    document.getElementById('numCards').innerHTML = cards.length;
}

clearUI =() =>{
    //clear the cards
    document.getElementById('frontCard').value ="";
    document.getElementById('backCard').value ="";
}