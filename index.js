let data = [];
let cardId;

// show Add card popup
function showAddCardPop() {
  const popup1 = document.getElementById("popup1");
  popup1.style.display = "block";
}
// close Add card popup
function closeAddCardPopup() {
  const popup1 = document.getElementById("popup1");
  popup1.style.display = "none";
}

function handleAddCard() {
  const cardText = document.getElementById("card-input-text").value;
  const card = {
    id: new Date().getTime().toString(),
    cardTitle: cardText,
  };
  if (cardText) {
    data.push(card);
    renderCards();
  } else {
    alert("Please add card Name");
  }
  document.getElementById("card-input-text").value = "";
  closeAddCardPopup();
}

function renderCards() {
  const cardcontainer = document.getElementById("card-container");
  let child = "";
  for (let i = 0; i < data.length; i++) {
    console.log("data[i]:", data[i]);
    child += `<div id="card_${data[i].id}" class="card">
        <p class="p2">${data[i].cardTitle}</p>
        <hr>
        <ul id="content_list_${data[i].id}">

        </ul>
        <div class="container2">
        <Button onclick="deleteCard(${data[i].id})"  class="delete">D</Button>
        <Button onclick="showAddContentToCardPopup(${data[i].id})" class="add1">+</Button>
        </div>
        </div>`;
  }
  cardcontainer.innerHTML = child;
}

function deleteCard(id) {
  const cardcontainer = document.getElementById("card-container");
  const cardId = `card_${id}`;
  const card = document.getElementById(cardId);
  //remove child from parent node
  card.parentNode.removeChild(card);
  data = data.filter((item) => item.id !== cardId);
}


function showAddContentToCardPopup(id) {
  const popup2 = document.getElementById("popup2");
  popup2.style.display = "block";
  cardId = id;
}

function removeAddContentToCardPopup() {
  const popup2 = document.getElementById("popup2");
  popup2.style.display = "none";
}

function addContentToCard() {
  const contentListId = `content_list_${cardId}`;
  const Ul = document.getElementById(contentListId);
  const contentText = document.getElementById("card-content-input").value;
  if (contentText) {
    document.getElementById("card-content-input").value = "";
    const liNode = document.createElement("li");
    liNode.innerHTML = contentText;
    Ul.appendChild(liNode);
    removeAddContentToCardPopup();
  } else {
    alert("Please add task name");
  }
}

