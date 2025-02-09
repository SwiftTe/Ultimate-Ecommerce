// script.js - Handles interactivity, form validation, and dynamic content loading

document.addEventListener("DOMContentLoaded", function () {
    // Form validation
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });
    
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        validateLogin();
    });
    
    // Load more products dynamically
    document.getElementById("loadMoreBtn").addEventListener("click", function () {
        loadMoreProducts();
    });
});

// Function to validate registration form
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let errorMessage = "";

    if (name.trim() === "") errorMessage += "Name is required.\n";
    if (!email.includes("@")) errorMessage += "Enter a valid email.\n";
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}/.test(password)) {
        errorMessage += "Password must be at least 6 characters and include letters, numbers, and symbols.\n";
    }
    if (parseInt(age) < 18) errorMessage += "You must be 18 or older to register.\n";

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert("Registration successful!");
    }
}

// Function to validate login form
function validateLogin() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    
    if (username.trim() === "") {
        alert("Username cannot be empty.");
    } else if (password.trim() === "") {
        alert("Password cannot be empty.");
    } else {
        alert("Login successful!");
    }
}

// Function to dynamically load more products
function loadMoreProducts() {
    let productGrid = document.getElementById("productGrid");
    
    for (let i = 0; i < 3; i++) {
        let product = document.createElement("div");
        product.className = "product";
        product.innerHTML = `
            <img src="placeholder.jpg" alt="New Product">
            <h3>New Product</h3>
            <p>Price: $XX.XX</p>
            <button class="addToCart">Add to Cart</button>
        `;
        productGrid.appendChild(product);
    }
}
