// Breakpoint prefix	Minimum width	CSS
// sm	40rem (640px)	@media (width >= 40rem) { ... }
// md	48rem (768px)	@media (width >= 48rem) { ... }
// lg	64rem (1024px)	@media (width >= 64rem) { ... }
// xl	80rem (1280px)	@media (width >= 80rem) { ... }
// 2xl	96rem (1536px)	@media (width >= 96rem) { ... } 



// functionality for Call buttons 
// document.getElementById('card-container').addEventListener('click', function (e){
 
//     if(e.target.className.includes('call-btn')){
       
//         const currentCoins = Number(getById('coinCount').innerText);

//         if(currentCoins < 20){
//             alert(`You Don't Have Enough Coins To Make The Call`)
//             return;
//         }

//         // things to be done aftre validation  ----------

//         // cutting 20 coins for each call 
//         const updatedCoins = currentCoins - 20;
//         getById('coinCount').innerText = updatedCoins;

//         const serviceName = e.target.parentNode.parentNode.children[1].children[0].innerText;
//         // console.log(serviceName);

//         const number = e.target.parentNode.parentNode.children[2].children[0].innerText;
//         console.log(number);

//         alert(`${serviceName} ${number}`)
        
//     }


// })




