// fuction to re-use 
function getById (id){
    const element = document.getElementById(id);
    return element;
}




// updating hear count 
document.getElementById('card-container').addEventListener('click', function (e){
 
    if(e.target.className.includes('love')){
       let currentHeart = Number(getById('heartCount').innerText);
       let updatedHeart = currentHeart +1;
       getById('heartCount').innerText= updatedHeart;
        
    }


})





// functionality for Call buttons 2 

document.getElementById('card-container').addEventListener('click', function (e){

    let callButton = e.target.closest('.call-btn');

    // console.log(callButton);
    // console.log(e.target);

   //   validations
    if(!callButton){
        console.log('not true');
        return;
    }

      const currentCoins = Number(getById('coinCount').innerText);

        if(currentCoins < 20){
            alert(`You Don't Have Enough Coins To Make The Call`)
            return;
        }

        // cutting 20 coins for each call 
        const updatedCoins = currentCoins - 20;
        getById('coinCount').innerText = updatedCoins;
 
        const Card = callButton.closest('.card');
        // console.log(Card);

        const serviceName = Card.querySelector('.title').innerText;
        console.log(serviceName);

        const nUmber = Card.querySelector('.number').innerText;
        console.log(nUmber);

        alert(`📞 Calling ${serviceName} ${nUmber}`)


})  
 
// document.querySelector














// // functionality for copy buttons
// document.getElementById('card-container').addEventListener('click', function (e){
 
//     console.log(e.target.className.includes('copy-btn'));
//     if(e.target.className.includes('copy-btn')){
//         console.log('copy btn');

        
//     }


// })