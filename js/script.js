document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navUl) {
        mobileMenuBtn.addEventListener('click', function() {
            navUl.classList.toggle('show');
        });
    }
    
    // Shop page product generation
    if (document.querySelector('.shop-content')) {
        generateProducts();
        setupFilterButtons();
    }
    
    // Portfolio filter buttons
    if (document.querySelector('.portfolio-content')) {
        setupPortfolioFilterButtons();
    }
    
    // Form submission
    if (document.getElementById('order-form')) {
        setupFormSubmission();
    }
});

function generateProducts() {
    const products = [
        { name: "Pastel Hoodie", price: "$29.99", category: "clothing", color: "#FFD6E0" },
        { name: "Aesthetic T-Shirt", price: "$19.99", category: "clothing", color: "#FFE5B9" },
        { name: "Sticker Pack", price: "$4.99", category: "digital", color: "#C1EFFF" },
        { name: "Wallpaper Set", price: "$2.99", category: "digital", color: "#D9C4EC" },
        { name: "Journal Set", price: "$12.99", category: "stationery", color: "#E2F6CA" },
        { name: "Washi Tape", price: "$3.99", category: "stationery", color: "#FFC8C8" },
        { name: "Phone Case", price: "$14.99", category: "accessories", color: "#FFB7C5" },
        { name: "Tote Bag", price: "$9.99", category: "accessories", color: "#A5D8FF" }
    ];
    
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;
        
        productCard.innerHTML = `
            <div class="product-image" style="background-color: ${product.color}"></div>
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
        `;
        
        productGrid.appendChild(productCard);
    });
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.textContent.toLowerCase();
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function setupPortfolioFilterButtons() {
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real implementation, you would filter portfolio items here
            // For now, we'll just show all items
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            portfolioItems.forEach(item => item.style.display = 'block');
        });
    });
}

function setupFormSubmission() {
    const form = document.getElementById('order-form');
    const successMessage = document.getElementById('form-success');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real implementation, you would send the form data to your Google Sheet here
        // For now, we'll just show the success message
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset form after 5 seconds
        setTimeout(() => {
            form.style.display = 'block';
            successMessage.style.display = 'none';
            form.reset();
        }, 5000);
    });
}