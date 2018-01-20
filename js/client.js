// Client.js
require("./promise.min.js");
var ShopifyBuy = require("shopify-buy");

window.client = ShopifyBuy.buildClient({
    storefrontAccessToken: '8be33c540856020904a790f4106047b6',
    domain: 'farm-to-door.myshopify.com'
});

window.checkout = null;
window.checkoutId = sessionStorage.getItem("checkout-id");
window.checkoutUpdated = new Event("checkout-updated");

function updateCheckout(checkout) {
    window.checkout = checkout;
    window.dispatchEvent(checkoutUpdated);
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

window.clearCart = function() {
    var arr = [];

    for (var i = 0; i < window.checkout.lineItems.length; i ++) {
        arr.push(window.checkout.lineItems[i].id)
    }

    if (arr.length > 0) {
        client.checkout.removeLineItems(checkoutId, arr).then(updateCheckout)
    }
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