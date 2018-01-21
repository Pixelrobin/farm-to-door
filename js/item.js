window.addEventListener("load", function() {
    console.log("load");

    var app = new Vue({
        el: "#app",
        data: {
            id: location.search.substr(1),
            product: undefined,
            pounds: 1,
            deactivate: false,
            inCart: false,
            showCartOptions: false
        },

        watch: {
            pounds: function(val) {
                app.deactivate = val && !(val >= 0 && val <= 20);
            }
        },

        methods: {
            removeItem: function(productId, title) {
                window.openPopup("Remove this item?", title)
                    .then(
                        function() {window.removeFromCart(window.getProductIdFromItemId(app.id));},
                        function() {console.log("Remove item cancelled")}
                    )
            },

            addToCart: function() {
                window.addToCart(app.product.variants[0].id, parseInt(app.pounds), app.product.images[0].src, this.id);
                return false;
            }
        },

        created: function() {
            window.ee.on("checkout-updated", function() {
                app.inCart = window.isInCart(app.id);
                app.showCartOptions = true;
            });

            client.product.fetch(this.id).then(function(product) {
                console.log(product);
                app.product = product;
            });
        }
    });
});