document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    const cartBadge = document.getElementById("cart-badge");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const toastContainer = document.getElementById("toast-container");
    const htmlLang = document.documentElement.lang;

    const toastMessages = {
        "tr": "Ürün sepete eklendi!",
        "nl": "Product toegevoegd aan winkelwagen!",
        "en": "Product added to cart!",
        "fr": "Produit ajouté au panier!",
        "ar": "تمت إضافة المنتج إلى السلة!"
    };

    const showToast = () => {
        if (!toastContainer) return;
        const message = toastMessages[htmlLang] || toastMessages["en"];
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    };

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            if (cartBadge) {
                cartBadge.textContent = cartCount;
            }
            
            button.style.backgroundColor = "var(--primary-blue)";
            button.style.color = "var(--white)";
            setTimeout(() => {
                button.style.backgroundColor = "";
                button.style.color = "";
            }, 200);

            showToast();
        });
    });
});
