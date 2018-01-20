var productId = location.search.substr(1);

window.addEventListener("load", function() {
    console.log("load");

    var app = new Vue({
        el: "#app",
        data: {
            id: productId,
            product: undefined,
            pounds: 1,
            deactivate: false
        },

        watch: {
            pounds: function(val) {
                app.deactivate = val && !(val >= 0 && val <= 20);
            }
        },

        methods: {
            addToCart: function() {
                window.addToCart(app.product.variants[0].id, parseInt(app.pounds), app.product.images[0].src, productId);
                return false;
            }
        }
    });

    client.product.fetch(productId).then(function(product) {
        console.log(product);
        app.product = product;
    })
});