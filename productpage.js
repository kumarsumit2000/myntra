
// floatingoffer
let floatingOfferbtn = document.getElementById("floatingOfferbtn");
let floatingOffer = document.getElementById("floatingOffer");
let floatingOffer_closeicon = document.getElementById("floatingOffer_closeicon");
function floatingoffershow() {
    if (floatingOffer.style.display == "flex") {
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

// product galary
let productsScndryimages = document.querySelectorAll(".productsScndryimages");
productsScndryimages.forEach(image => {
    image.onclick = () => {
        let productThumbnil = document.querySelector(".productThumbnil");
        productThumbnil.innerHTML = image.innerHTML;
    };
});


// popup pricing
let price = document.getElementById("price").innerText;
let actualPrice = document.getElementById("actualPrice").innerText;
let discountPercentage = document.getElementById("discountPercentage");
let tottaldiscount = 100 - Math.floor(parseInt(price) / parseInt(actualPrice) * 100) + "% OFF";
discountPercentage.innerHTML = tottaldiscount;

// popup pricing details
let onhoverTotalproce = document.getElementById("onhoverTotalproce").innerText = actualPrice;
let onhoverDiscount = document.getElementById("onhoverDiscount").innerText = tottaldiscount;
let onhoverActualprice = document.getElementById("onhoverActualprice").innerText = price;

// popup pricing details box show/hide
let pricingElement = document.querySelector('.pricing');
let pricingDetailsonhover = document.querySelector('.pricingDetailsonhover');

pricingElement.addEventListener('mouseover', function() {
    pricingDetailsonhover.style.height = '150px';
    pricingDetailsonhover.style.opacity = '1';
    pricingDetailsonhover.style.transition = '0.2s linear';
});
pricingDetailsonhover.addEventListener('mouseover', function() {
    pricingDetailsonhover.style.height = '150px';
    pricingDetailsonhover.style.opacity = '1';
});
pricingDetailsonhover.addEventListener('mouseout', function() {
    pricingDetailsonhover.style.height = '0px';
    pricingDetailsonhover.style.opacity = '0';
});
pricingElement.addEventListener('mouseout', function() {
    pricingDetailsonhover.style.height = '0px';
    pricingDetailsonhover.style.opacity = '0';
});



choice[15]
swatches[15]