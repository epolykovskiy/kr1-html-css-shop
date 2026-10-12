const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validation(orderForm) === true) {
    successMessage.hidden = false;
  
    orderForm.reset();
  }
});
