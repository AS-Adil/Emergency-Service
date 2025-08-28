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




// functionality for Call buttons 
document.getElementById('card-container').addEventListener('click', function (e){
 
    if(e.target.className.includes('call-btn')){
       
        const currentCoins = Number(getById('coinCount').innerText);

        if(currentCoins < 20){
            alert(`You Don't Have Enough Coins To Make The Call`)
            return;
        }

        // things to be done aftre validation 

        // cutting 20 coins for each call 
        const updatedCoins = currentCoins - 20;
        getById('coinCount').innerText = updatedCoins;

        const serviceName = e.target.parentNode.parentNode.children[1].children[0].innerText;
        // console.log(serviceName);

        const number = e.target.parentNode.parentNode.children[2].children[0].innerText;
        console.log(number);

        alert(`${serviceName} ${number}`)
        
    }


})

  













// // functionality for copy buttons
// document.getElementById('card-container').addEventListener('click', function (e){
 
//     console.log(e.target.className.includes('copy-btn'));
//     if(e.target.className.includes('copy-btn')){
//         console.log('copy btn');

        
//     }


// })