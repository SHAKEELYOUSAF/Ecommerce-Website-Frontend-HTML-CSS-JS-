// ========== CART FUNCTIONS ==========
function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartSidebar();
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

function addToCart(product, selectedSize = 40, quantity = 1) {
    let cart = getCart();
    const existingItem = cart.find(item => item.id === product.id && item.selectedSize === selectedSize);
    
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            hasDiscount: product.hasDiscount,
            discountText: product.discountText,
            image: product.images ? product.images[0] : product.image,
            selectedSize: selectedSize,
            quantity: quantity
        });
    }
    
    saveCart(cart);
    showNotification(`${product.name} added to cart!`, false);
    openCart();
}

function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

function updateQuantity(index, delta) {
    let cart = getCart();
    if (cart[index]) {
        cart[index].quantity = Math.max(1, (cart[index].quantity || 1) + delta);
        saveCart(cart);
    }
}

function updateCartSidebar() {
    const cart = getCart();
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalSpan = document.getElementById('cartTotal');
    
    if (!cartItemsDiv) return;
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align:center; padding:2rem;">Your cart is empty 🛒</p>';
        if (cartTotalSpan) cartTotalSpan.textContent = '0';
        return;
    }
    
    let total = 0;
    cartItemsDiv.innerHTML = '';
    
    cart.forEach((item, index) => {
        let finalPrice = item.price;
        if (item.hasDiscount && item.discountText) {
            const disc = parseInt(item.discountText);
            if (!isNaN(disc)) finalPrice = item.price - (item.price * disc / 100);
        }
        const itemTotal = Math.floor(finalPrice) * (item.quantity || 1);
        total += itemTotal;
        
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">PKR ${Math.floor(finalPrice)}/-</div>
                    <div class="cart-item-qty">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity || 1}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                        <span class="cart-item-size">Size: ${item.selectedSize}</span>
                    </div>
                </div>
                <div class="cart-item-remove" onclick="removeFromCart(${index})">
                    <i class="fa fa-trash"></i>
                </div>
            </div>
        `;
    });
    
    if (cartTotalSpan) cartTotalSpan.textContent = total;
}

function openCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('active');
    updateCartSidebar();
}

function closeCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
}

function goToCheckout() {
    window.location.href = 'checkout.html';
}

function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed; bottom: 20px; right: 20px; background: ${isError ? '#f44336' : '#4caf50'};
        color: white; padding: 12px 24px; border-radius: 8px; z-index: 3000;
        animation: slideIn 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    notification.innerHTML = `<i class="fa ${isError ? 'fa-exclamation-triangle' : 'fa-check-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2500);
}




// ========== SEARCH FUNCTION ==========
function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('globalSearch');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            if (query) {
                window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
            }
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.toLowerCase();
                if (query) {
                    window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}

// ========== HAMBURGER MENU ==========
function setupHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    setupHamburger();
    setupSearch();
    updateCartCount();
    
    // Home page products
    if (document.getElementById('homeProductsGrid')) {
        const discountedProducts = products.filter(p => p.hasDiscount === true);
        renderProductGrid('homeProductsGrid', discountedProducts, true);
    }
    
    // Shop page
    if (document.getElementById('productContainer')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const search = urlParams.get('search');
        
        let filtered = [...products];
        if (category && category !== 'all') {
            filtered = filtered.filter(p => p.category === category);
            document.getElementById('mainCaption').textContent = category.toUpperCase() + ' Footwear';
        }
        if (search) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
            document.getElementById('mainCaption').textContent = 'Search Results';
        }
        
        renderProductGrid('productContainer', filtered);
        
        // Setup filter buttons
        document.querySelectorAll('.filterbtn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.getAttribute('data-category');
                if (cat === 'all') {
                    renderProductGrid('productContainer', products);
                    document.getElementById('mainCaption').textContent = 'ALL Footwear';
                } else {
                    const filtered = products.filter(p => p.category === cat);
                    renderProductGrid('productContainer', filtered);
                    document.getElementById('mainCaption').textContent = cat.toUpperCase() + ' Footwear';
                }
            });
        });
    }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    .add-to-cart-btn {
        width: calc(100% - 2rem);
        margin: 0 1rem 1rem;
        padding: 10px;
        background: #4b5c4b;
        color: white;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: 0.3s;
    }
    .add-to-cart-btn:hover {
        background: #95af8b;
    }
    .cart-item-qty button {
        background: #eee;
        border: none;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        cursor: pointer;
        margin: 0 4px;
    }
    .cart-item-size {
        margin-left: 10px;
        font-size: 12px;
        color: #666;
    }
    .cart-item-remove {
        color: #ff4444;
        cursor: pointer;
        font-size: 18px;
    }
    .close-cart {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);