// Cart functionality
let cart = [];

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>RS ${item.price.toFixed(2)}</td>
            <td>RS ${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-from-cart" data-id="${item.id}">Remove</button></td>
        `;
        cartItems.appendChild(row);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').innerText = total.toFixed(2);

    // Attach event listeners to the remove buttons
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

function addToCart(event) {
    const productId = event.target.getAttribute('data-product-id');
    const productName = event.target.getAttribute('data-product-name');
    const productPrice = parseFloat(event.target.getAttribute('data-product-price'));

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    updateCart();
}

function removeFromCart(event) {
    const productId = event.target.getAttribute('data-id');
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Attach event listeners to Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Checkout functionality
document.getElementById('checkout').addEventListener('click', function() {
    alert('Checkout complete!');
    cart = [];
    updateCart();
});

