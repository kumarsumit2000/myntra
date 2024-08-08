let showTime = document.querySelector("#time");
function timetoshow() {
    let myTime = new Date().getFullYear();
    showTime.innerHTML = myTime;
}
//  slide show
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//  slide show

// saleOfferProduct slides

let currentTranslateX = 0;
function Productslidernext() {
    let Productslider = document.querySelectorAll(".Productslider");
    currentTranslateX -= 220; // Adjust this value if the card width + gap is different
    
    Productslider.forEach((items) => {
        items.style.transform = `translateX(${currentTranslateX}px)`;
    });
}
setInterval(Productslidernext,3000);
function Productsliderprev() {
    let Productslider = document.querySelectorAll(".Productslider");
    currentTranslateX += 220; // Adjust this value if the card width + gap is different
    
    Productslider.forEach((items) => {
        items.style.transform = `translateX(${currentTranslateX}px)`;
    });
}



// floatingoffer
let floatingOfferbtn = document.getElementById("floatingOfferbtn");
let floatingOffer = document.getElementById("floatingOffer");
let floatingOffer_closeicon = document.getElementById("floatingOffer_closeicon");
function floatingoffershow(){
    if(floatingOffer.style.display == "flex"){
        floatingOffer.style.display = "none";
        floatingOfferbtn.style.right = "-140px";
        floatingOfferbtn.style.border = "2px #333333 solid";
        floatingOffer_closeicon.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
    } else {
        floatingOffer.style.display = "flex";
        floatingOfferbtn.style.right = "470px";
        floatingOfferbtn.style.border = "2px white solid";
        floatingOffer_closeicon.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
      
    }
}


setInterval(autoslide,2000);
function autoslide(){
    let saleOffer = document.getElementById("saleOffer");
    saleOffer.scroll = 200;
}

const productsAPI = "https://fakestoreapi.com/products";
let fetchproducts = async () =>{
    let responce = await fetch(productsAPI);
    let products = await responce.json();  
    return products;  
} 
//for product slider
fetchproducts().then(products =>{
    let saleOffer = document.querySelector("#saleOffer");
    products.forEach((product) => {
        // creating main card for each product
    let Productslider = document.createElement("div");
    Productslider.setAttribute("class" , "Productslider");
    saleOffer.appendChild(Productslider);


    // inserting image to each card
    let ProductsliderImg = document.createElement("div");
    ProductsliderImg.setAttribute("class" , "ProductsliderImg");
    let productImg = document.createElement("img");
    productImg.src = `${product.image}`;
    ProductsliderImg.appendChild(productImg);
    Productslider.appendChild(ProductsliderImg);

    //   inserting price to each card
     let price = document.createElement("div");
     price.setAttribute("class" , "price");
     price.textContent = `${product.price}`;
     Productslider.appendChild(price);

    //  offer
     let offer = document.createElement("h4");
     offer.textContent = `35% Off`;
     Productslider.appendChild(offer);

});
})
// for products grid
fetchproducts().then(products =>{
    let alloffers = document.querySelector("#alloffers");
    products.forEach((product) => {
        // creating main card for each product
    let alloffersProduct = document.createElement("div");
    alloffersProduct.setAttribute("class" , "alloffersProduct");
    alloffers.appendChild(alloffersProduct);


    // inserting image to each card
    let alloffersProductImg = document.createElement("div");
    alloffersProductImg.setAttribute("class" , "alloffersProductImg");
    let productImg = document.createElement("img");
    productImg.src = `${product.image}`;
    alloffersProductImg.appendChild(productImg);
    alloffersProduct.appendChild(alloffersProductImg);

   // inserting title to each card
   let alloffersProductTitle = document.createElement("div");
   alloffersProductTitle.setAttribute("class" , "alloffersProductTitle");
   alloffersProductTitle.textContent = `${product.title}`;
   alloffersProduct.appendChild(alloffersProductTitle);

    //   inserting price to each card
     let price = document.createElement("div");
     price.setAttribute("class" , "price");
     price.textContent = `${product.price}`;
     alloffersProduct.appendChild(price);

    //  offer
     let offer = document.createElement("h4");
     offer.textContent = `35% Off`;
     alloffersProduct.appendChild(offer);

       //  button
       let shopnowbtn = document.createElement("div");
       shopnowbtn.setAttribute("class" , "shopnowbtn");
       shopnowbtn.textContent = `Shop Now`;
       alloffersProduct.appendChild(shopnowbtn);
});
})


fetchproducts();






