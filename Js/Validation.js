document.addEventListener("DOMContentLoaded", function () {
	var unitPrice = 1000;
	var days = 30;
	var quantityInput = document.getElementById("quantity");
	var totalPriceInput = document.getElementById("totalPrice");
	var errorMessage = document.getElementById("quantity-error");
	var couponShown = false;

	function updateTotalPrice() {
		var quantityValue = Number(quantityInput.value);

		if (quantityInput.value === "" || isNaN(quantityValue)) {
			quantityValue = 0;
		}

		if (quantityValue < 0) {
			quantityValue = 0;
			quantityInput.value = "0";
			errorMessage.textContent = "Quantity cannot be less than 0.";
		} else {
			errorMessage.textContent = "";
		}

		var totalPrice = unitPrice * quantityValue * days;
		totalPriceInput.value = totalPrice;

		if (totalPrice > 1000 && !couponShown) {
			alert("You are eligible for a gift coupon.");
			couponShown = true;
		}

		if (totalPrice <= 1000) {
			couponShown = false;
		}
	}

	quantityInput.addEventListener("input", updateTotalPrice);
	updateTotalPrice();
});
