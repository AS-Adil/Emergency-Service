// fuction to re-use
function getById(id) {
  const element = document.getElementById(id);
  return element;
}

// updating hear count
document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("love")) {
      let currentHeart = Number(getById("heartCount").innerText);
      let updatedHeart = currentHeart + 1;
      getById("heartCount").innerText = updatedHeart;
    }
  });

// functionality for Call buttons 2

document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    let callButton = e.target.closest(".call-btn");

    // console.log(callButton);
    // console.log(e.target);

    //   validations
    if (!callButton) {
      console.log("not true");
      return;
    }

    const currentCoins = Number(getById("coinCount").innerText);

    if (currentCoins < 20) {
      alert(`You Don't Have Enough Coins To Make The Call`);
      return;
    }

    // cutting 20 coins for each call
    const updatedCoins = currentCoins - 20;
    getById("coinCount").innerText = updatedCoins;

    const Card = callButton.closest(".card");
   

    const serviceName = Card.querySelector(".title").innerText;
    

    const phoneNumber = Card.querySelector(".number").innerText;
    

    alert(`📞 Calling ${serviceName} ${phoneNumber}`);

    const time = new Date().toLocaleTimeString(); 

    const CallListContainer = getById("call-list-container");
   

    const newCall = document.createElement("div");
    newCall.classList.add(
      "shadow-lg",
      "flex",
      "justify-between",
      "items-center",
      "bg-[#FAFAFA]",
      "py-4",
      "rounded-xl",
      "px-3",
      "gap-2"
    );

    newCall.innerHTML = `
    
                <div>
              <h1 class="text-lg font-semibold">${serviceName}</h1>
              <p class="text-[#5C5C5C]">${phoneNumber}</p>
            </div>

            <div>
              <p class="font-medium whitespace-nowrap">${time}</p>
            </div>
  
  
  `;

   CallListContainer.appendChild(newCall)





  });


//  functionalities for clear button 
 getById('clear-btn').addEventListener('click', function(){

   getById('call-list-container').innerHTML ="";


 });
