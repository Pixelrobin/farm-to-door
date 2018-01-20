window.addEventListener("load", function() {
    var app = new Vue({
        el: "#app",

        data: {
            checkout: window.checkout
        },

        methods: {
            clearCart: function() {
                console.log("Clearing Cart")
                window.clearCart();
            }
        }
    });

    window.addEventListener("checkout-updated", function(e) {
        console.log("checkout update!", window.checkout)
        app.checkout = window.checkout;
    })
});