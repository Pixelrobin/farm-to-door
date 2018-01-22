window.addEventListener("load", function() {
    console.log("load");

    var app = new Vue({
        el: "#app",
        data: {
            id: location.search.substr(1),
            product: undefined,
            pounds: "1",
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
                var sub   = app.product.productType == "Subscription",
                    size  = parseInt(app.pounds),
                    type  = "",
                    types = ["vegetables", "fruits", "fruits and veggies"],
                    sizes = ["1-2", "3-4", "5-6"]

                if (sub) {
                    for (var r = 0; r < 3; r ++) {
                        if (document.getElementById(sizes[r]).checked) {
                            size = r;
                        }

                        if (document.getElementById(types[r]).checked) {
                            type = r;
                        }
                    }
                }

                window.addToCart(
                    app.product.variants[0].id,
                    app.product.title,
                    size + 1,
                    app.product.images[0].src,
                    this.id,
                    app.product.productType == "Subscription",
                    sizes[size] + " people, " + types[type]
                );

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
            
            document.getElementById("product-details").className = "row product-details";
        }
    });
});