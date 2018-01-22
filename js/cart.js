window.addEventListener("load", function() {

    window.setMenuCurrentItem("cart");

    var app = new Vue({
        el: "#app",

        data: {
            checkout: window.checkout,
            checkoutData: window.checkoutData
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
        },

        created: function() {
            window.ee.on("checkout-updated", function() {
                app.checkout = window.checkout;
                app.checkoutData = window.checkoutData;
            });

            document.getElementById("cart").className = "";
        }
    });
});