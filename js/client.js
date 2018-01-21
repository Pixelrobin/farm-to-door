// Client.js
//window.Promise = require("./promise.min.js");
//require("whatwg-fetch");
//require("./object-assign.js");
var ShopifyBuy = require("shopify-buy");
var EventEmitter = require("eventemitter-light");

window.client = ShopifyBuy.buildClient({
    storefrontAccessToken: '8be33c540856020904a790f4106047b6',
    domain: 'farm-to-door.myshopify.com'
});

window.checkout = null;
window.checkoutId = sessionStorage.getItem("checkout-id");
//window.checkoutUpdated = document.createEvent("checkout-updated");//new Event("checkout-updated");

//checkoutUpdated.initCustomEvent();
window.ee = Object.create(EventEmitter).constructor();

function updateCheckout(checkout) {
    window.checkout = checkout;
    ee.emit("checkout-updated");
}

function newCheckoutId() {
    client.checkout.create().then(function(checkout) {
        updateCheckout(checkout);
        checkoutId = checkout.id;
        sessionStorage.setItem("checkout-id", checkoutId);
        console.log("New checkout ID:", checkoutId)
    });
}

if (!window.checkoutId) newCheckoutId();
else {
    console.log("Checkout ID: ", checkoutId);
    client.checkout.fetch(checkoutId).then(updateCheckout);
}

window.addToCart = function(id, pounds, image, url) {
    if (window.isInCart(id)) return;

    client.checkout.addLineItems(checkoutId, [{
        variantId: id,
        quantity: pounds,
        customAttributes: [{
            key: "image",
            value: image
        }, {
            key: "url",
            value: url
        }]
    }]).then(updateCheckout);
}

window.removeFromCart = function(id) {
    client.checkout.removeLineItems(checkoutId, [id]).then(updateCheckout);
}

window.clearCart = function() {
    var arr = [];

    for (var i = 0; i < window.checkout.lineItems.length; i ++) {
        arr.push(window.checkout.lineItems[i].id)
    }

    if (arr.length > 0) {
        client.checkout.removeLineItems(checkoutId, arr).then(updateCheckout)
    }
}

window.isInCart = function(productId) {
    if (window.checkout) {
        for (var i = 0; i < checkout.lineItems.length; i ++) {
            var item = checkout.lineItems[i];
            if (item.customAttributes[1].value == productId) {
                return true;
            }
        }
    }

    return false;
}

window.getProductIdFromItemId = function(id) {
    if (window.checkout) {
        for (var i = 0; i < checkout.lineItems.length; i ++) {
            var item = checkout.lineItems[i];
            if (item.customAttributes[1].value == productId) {
                return item.id;
            }
        }
    }

    return null;
}

var popupOpen = false;

window.openPopup = function(heading, text) {
    if (popupOpen) return;

    var popup = document.getElementById("popup-bg");
    var popupHeading = document.getElementById("popup-heading");
    var popupText = document.getElementById("popup-text");
    var popupCancel = document.getElementById("popup-cancel");
    var popupYes = document.getElementById("popup-yes");
    
    var clicked = function(f) {
        popupOpen = false;
        popup.className = "hidden";
        f();
    }

    popupOpen = true;
    popup.className = "";
    popupHeading.innerText = heading;
    popupText.innerText = text;

    return new Promise(function(resolve, reject) {
        popupCancel.onclick = function() {clicked(reject)};
        popupYes.onclick = function() {clicked(resolve)};
    });
}

window.addEventListener( "load", function() {
    console.log("window loaded");

    // SCROLL HANDLING
    var lastScrollPos = 0;
    var ticking = false;
    
    var mobileState = {
        "solid": false,
        "open": false
    }

    function applyMobileNavState() {
        var className = "";
        var keys = Object.keys(mobileState);

        for (var k = 0; k < keys.length; k ++) {
            if (mobileState[keys[k]]) className += keys[k] + " ";
        }

        document.getElementById("mobile-nav").className = className;
    }

    function checkScrollPos(pos) {
        mobileState.solid = (pos > 0);
        applyMobileNavState();
    }

    window.toggleMobileMenu = function() {
        mobileState.open = !mobileState.open;
        applyMobileNavState();
    }

    window.addEventListener('scroll', function(e) {
        lastScrollPos = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkScrollPos(lastScrollPos);
                ticking = false;
            });
            ticking = true;
        }
    });
})