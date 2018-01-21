//var checkoutId = localStorage.getItem("checkout-id");

window.addEventListener( "load", function() {
    var searchbar = document.getElementById("searchbar");
    var shop = document.getElementById("shop");
    var timeout = -1;

    var app = new Vue({
        el: "#app",
        data: {
            search: "",
            products: [],
            showProducts: false
        },

        methods: {
            newSearch: function() {
                console.log("input!");
                clearTimeout(timeout);
                
                app.showProducts = false;

                timeout = setTimeout(function() {
                    console.log("getting new stuff");
                    client.product.fetchQuery({
                        query: app.search,
                        sortKey: "TITLE"
                    }).then(function(products) {
                        app.products = products;
                        app.showProducts = true;
                    })
                }, 300);
            }
        },

        created: function() {
            shop.className = "shop";
        }
    });

    client.product.fetchAll().then(function(products) {
        app.products = products;
        app.showProducts = true;
    });
});