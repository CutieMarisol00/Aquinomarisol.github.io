// app.js

// Prices for the items
const prices = {
    qty1: 1500.00,
    qty2: 580.00,
    qty3: 900.00,
    qty4: 700.00,
    qty5: 570.00,
    qty6: 3000.00
};

// Update order details
function updateOrder() {
    let orderDetails = "";
    let total = 0;

    for (let i = 1; i <= 6; i++) {
        let qty = document.getElementById(`qty${i}`).value;
        if (qty > 0) {
            let itemPrice = prices[`qty${i}`];
            let itemTotal = qty * itemPrice;
            orderDetails += `Item ${i}: ${qty} x ₱${itemPrice.toFixed(2)} = ₱${itemTotal.toFixed(2)}\n`;
            total += itemTotal;
        }
    }

    document.getElementById("carts").value = orderDetails;
    document.getElementById("total").value = `Total: ₱${total.toFixed(2)}`;
}

// Calculate change
function calculateChange() {
    let total = parseFloat(document.getElementById("total").value.replace("Total: ₱", ""));
    let cash = parseFloat(document.getElementById("cash").value);

    if (!isNaN(total) && !isNaN(cash)) {
        let change = cash - total;
        document.getElementById("change").value = `Change: ₱${change.toFixed(2)}`;
    } else {
        document.getElementById("change").value = "Change: ₱0.00";
    }
}
