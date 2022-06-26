const navbar = document.querySelector(".navbar");
const navlinks = document.querySelector(".nav_links");
const icon = document.querySelector(".icon");
const searchbar = document.querySelector(".searchbar");
const shoppingbtn = document.querySelector(".shopping-icon");
const shoppinglist = document.querySelector(".shopping-list");
const listitems = document.querySelector(".listitems");
const addItems = document.getElementsByClassName("additem");
const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");
const deletebtn = document.getElementsByClassName("deletebtn");
const buybtn = document.querySelector(".buynow");
const inputvalue = document.getElementsByClassName("count");

for (var i = 0; i < addItems.length; i++) {
  var additem = addItems[i];
  additem.addEventListener("click", addItemToCart);
}

navbar.addEventListener("click", () => {
  navlinks.classList.toggle("show");
});

icon.addEventListener("click", () => {
  searchbar.classList.toggle("getlong");
});

shoppingbtn.addEventListener("click", () => {
  shoppinglist.classList.toggle("shopping-list-show");
});

buybtn.addEventListener("click", (event) => {
  event.preventDefault();
});

function addItemToCart(event) {
  var clicktocart = event.target;
  var card = clicktocart.parentElement.parentNode.parentElement.parentElement;
  var cardTitles = card.getElementsByClassName("card-title")[0].innerHTML;
  var cardPrices = card.getElementsByClassName("card-price")[0].innerHTML;
  var cardImgs = card.getElementsByClassName("card-img")[0].src;
  var price = parseInt(cardPrices.replace("NT$", ""));
  var item = document.createElement("div");


//   var productprice = card.children[2].children[0].innerHTML.replace("NT", "");
//   document.getElementsByClassName("total")[0].innerHTML = productprice;

  var cardRowContents = `
        <div class="product">
            <img src="${cardImgs}" class="productImg" alt="">
            <div class="product-content">
                <h3 class="title">${cardTitles}</h3>
                <div class="counter">
                    <p class="price">${cardPrices}</p>     
                    <div class="countbtn">
                        <button type="button" class="minus"><i class="fa-solid fa-minus"></i></button>
                        <input class="count" type="number" min="0" max="100" value="1">
                        <button type="button" class="plus"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
            <div class="deleteoptions">
                <button type="button" class="deletebtn"><i class="fa-solid fa-xmark"></i></button>
            </div>                    
        </div>
    `;

  shoppinglist.style.padding = "20px";
  shoppinglist.style.overflow = "scroll";

  listitems.style.overflow = "hidden";
  listitems.style.display = "flex";
  listitems.style.flexDirection = "column";
  listitems.style.alignItems = "center";

  item.innerHTML = cardRowContents;
  item.style.listStyle = "none";
  item.style.display = "flex";
  item.style.marginBottom = "10px";

  listitems.append(item);

  for (var i = 0; i < deletebtn.length; i++) {
    var deletebtns = deletebtn[i];
    deletebtns.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.parentElement.parentElement.remove();
    });
  }

  for (var i = 0; i < plus.length; i++) {
    var plusbtn = plus[i];
    plusbtn.addEventListener("click", () => {
      var inputNum = plusbtn.parentElement.parentElement.getElementsByClassName("count")[0];
      var inputIncrease = parseInt(inputNum.value) + 1;
      inputNum.value = inputIncrease;

    //   var productprice = price * inputIncrease;
    //   document.getElementsByClassName("total")[0].innerText = "$" + productprice;
    });
  }

  for (var i = 0; i < minus.length; i++) {
    var minusbtn = minus[i];
    minusbtn.addEventListener("click", () => {

      var inputNum = plusbtn.parentElement.parentElement.getElementsByClassName("count")[0];
      var inputDecrease = parseInt(inputNum.value) - 1;
      inputNum.value = inputDecrease;

    //   var productprice = price * inputDecrease;
    //   document.getElementsByClassName("total")[0].innerText =
    //     "$" + productprice;

      if (isNaN(inputNum.value) || inputNum.value <= 0) {
        inputNum.value = 1;
      }
    });
  }

  for (var i = 0; i < inputvalue.length; i++) {
    var input = inputvalue[i];
    input.addEventListener("change", (event) => {
      var num = event.target;
      if (isNaN(num.value) || num.value <= 0) {
        num.value = 1;
      }
    });
  }

  //   updatePrice();
}

// function updatePrice() {
//   var cards = document.getElementsByClassName("pageone")[0];
//   var card = cards.getElementsByClassName("card");
//   var total = 0;

//   for (var i = 0; i < card.length; i++) {
//     var cards = card[i];
//     var price = parseInt(
//       cards.getElementsByClassName("card-price")[0].innerHTML.replace("NT$", "")
//     );
//   }
//   console.log(cards);
// }
