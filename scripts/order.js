const orderButtons = document.querySelectorAll(".order-btn");

function placeOrder(event) {
  const button = event.currentTarget;
  const container = button.parentElement;
  const productName = container.querySelector("h2").innerText;
  const message = `Olá, gostaria de fazer o pedido: ${productName}`;

  window.open(
    `https://wa.me/5585996997959?text=${encodeURIComponent(message)}`
  );
}

orderButtons.forEach((orderButton) => {
  orderButton.addEventListener("click", placeOrder);
});
