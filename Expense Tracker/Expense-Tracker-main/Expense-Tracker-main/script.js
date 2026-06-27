const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

let total = 0;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expense-name").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;
    const date = document.getElementById("expense-date").value;

    total += amount;
    totalAmount.textContent = total;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>$${amount}</td>
        <td>${category}</td>
        <td>${date}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    row.querySelector(".delete-btn").addEventListener("click", function() {
        total -= amount;
        totalAmount.textContent = total;
        row.remove();
    });

    expenseList.appendChild(row);

    form.reset();
});