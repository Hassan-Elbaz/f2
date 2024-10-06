let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.querySelector('h2').textContent;
        const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        const quantity = parseInt(product.querySelector('input').value);
        
        const item = cart.find(p => p.name === name);
        
        if (item) {
            item.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }

        
        updateCart();
    });
});

document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        input.value = parseInt(input.value) + 1;
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
});

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total span');
    
    
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
 
        total += item.price * item.quantity;

        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>${item.quantity} x $${item.price.toFixed(2)}</p>
            <p>$${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    
    totalElement.textContent = `$${total.toFixed(2)}`;
}

