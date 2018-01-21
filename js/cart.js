window.addEventListener("load", function() {
    var app = new Vue({
        el: "#app",

        data: {
            checkout: window.checkout
        },

        methods: {
            removeItem: function(id, title) {
                
                window.openPopup("Remove this item?", title)
                    .then(
                        function() {window.removeFromCart(id);},
                        function() {console.log("Remove item cancelled")}
                    )
            },

            clearCart: function() {
                window.openPopup("Clear cart?", "This can't be undone.")
                    .then(
                        function() {window.clearCart();},
                        function() {console.log("Clear cart cancelled");}
                    )
            }
        }
    });

    window.ee.on("checkout-updated", function() {
        console.log("checkout update!", window.checkout)
        app.checkout = window.checkout;
    });
});