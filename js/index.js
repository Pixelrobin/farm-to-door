window.addEventListener("load", function() {
	var zipcodes = [
		"98225",
		"98226",
		"98229",
		"98248"
	];

	document.getElementById("header-logo").className = "";
	window.setMenuCurrentItem("home");
	objectFitVideos(document.getElementById("heading-bg"));
	
	var app = new Vue({
		el: "#app",

		data: {
			result: "Enter a Zip Code below",
			zipcode: "",
			faClass: ""
		},

		watch: {
			zipcode: function(value) {
				if (value.length == 0) {
					app.result = "Enter a Zip Code below"
					app.faClass = "";
				} else if (isNaN(value) || value.length != 5) {
					app.result = "Please enter a valid 5-digit Zip Code";
					app.faClass = ""
				} else {
					var check = zipcodes.indexOf(value) !== -1;

					if (check) {
						app.result = "Yes! We can deliver to you!";
						app.faClass = "fa fa-check";
					} else {
						app.result = "Sorry, we don't deliver there."
						app.faClass = "fa fa-close";
					}
				}
			}
		},

		created: function() {
			document.getElementById("zip-search-result").className = "h3";
		}
	});
});