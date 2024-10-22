// JavaScript to handle order and summary
const burgerItems = document.querySelectorAll('.burger-item');
const orderList = document.querySelector('.order-list');
const totalPayableElem = document.getElementById('total-payable');
const subTotalElem = document.getElementById('sub-total');
const cgstElem = document.getElementById('cgst');
const sgstElem = document.getElementById('sgst');
let subTotal = 0;

// Function to update order summary
function updateSummary() {
  const cgst = subTotal * 0.05; // 5% CGST
  const sgst = subTotal * 0.05; // 5% SGST
  const totalPayable = subTotal + cgst + sgst;

  subTotalElem.textContent = subTotal.toFixed(2);
  cgstElem.textContent = cgst.toFixed(2);
  sgstElem.textContent = sgst.toFixed(2);
  totalPayableElem.textContent = totalPayable.toFixed(2);
}

// Function to add item to the order list
function addItemToOrder(burgerName, burgerPrice) {
  const li = document.createElement('li');
  li.classList.add('order-item');

  li.innerHTML = `
    <div class="item-description">
      <span class="item-name">${burgerName}</span>
      <span class="item-price">₹${burgerPrice}</span>
      <div class="item-options">
        <button class="decrease">-</button>
        <span class="quantity">1</span>
        <button class="increase">+</button>
      </div>
    </div>
  `;
  
  orderList.appendChild(li);

  subTotal += burgerPrice;
  updateSummary();

  // Increase and decrease quantity logic
  const decreaseBtn = li.querySelector('.decrease');
  const increaseBtn = li.querySelector('.increase');
  const quantityElem = li.querySelector('.quantity');
  let quantity = 1;

  increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityElem.innerText = quantity;
    subTotal += burgerPrice;
    updateSummary();
  });

  decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityElem.innerText = quantity;
      subTotal -= burgerPrice;
      updateSummary();
    }
  });
}

// Event listeners for burger items
burgerItems.forEach(item => {
  item.querySelector('.buy-now').addEventListener('click', () => {
    const burgerName = item.getAttribute('data-name');
    const burgerPrice = parseInt(item.getAttribute('data-price'), 10);
    addItemToOrder(burgerName, burgerPrice);
  });
});

// JavaScript for toggle functionality
document.getElementById("delivery-toggle").addEventListener("change", function() {
  if (this.checked) {
    alert("You have selected Delivery.");
  } else {
    alert("You have selected Dine-In/Takeaway.");
  }
});

// Function to redirect to payment page
function redirectToPayment() {
  alert("Redirecting to payment page...");
  // Actual redirection logic goes here
}

// Add event listener for the payment button
document.querySelector('.buy-now').addEventListener('click', redirectToPayment);
