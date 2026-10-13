const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');
const productSelect = document.getElementById('order-selected-product');

const selectedProduct = new URLSearchParams(window.location.search).get('product');

if (selectedProduct) {
  productSelect.value = selectedProduct;
}

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validation(orderForm) === true) {
    successMessage.hidden = false;
  
    orderForm.reset();
  }
});
