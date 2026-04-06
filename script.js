const translations = {
    tr: {
        home: "Ana Sayfa",
        products: "Ürünler",
        offers: "Fırsatlar",
        contact: "İletişim",
        hero_title: "Taze, Kaliteli ve Hesaplı Alışveriş",
        hero_subtitle: "Zele'nin kalbinde, Vatan Mega güvencesiyle.",
        featured_products: "Öne Çıkan Ürünler",
        add_to_cart: "Sepete Ekle"
    },
    nl: {
        home: "Startpagina",
        products: "Producten",
        offers: "Aanbiedingen",
        contact: "Contact",
        hero_title: "Vers, Kwalitatief en Betaalbaar Winkelen",
        hero_subtitle: "In het hart van Zele, met Vatan Mega garantie.",
        featured_products: "Uitgelichte Producten",
        add_to_cart: "In Winkelwagen"
    },
    en: {
        home: "Home",
        products: "Products",
        offers: "Offers",
        contact: "Contact",
        hero_title: "Fresh, Quality and Affordable Shopping",
        hero_subtitle: "In the heart of Zele, with Vatan Mega assurance.",
        featured_products: "Featured Products",
        add_to_cart: "Add to Cart"
    },
    fr: {
        home: "Accueil",
        products: "Produits",
        offers: "Offres",
        contact: "Contact",
        hero_title: "Des Achats Frais, de Qualité et Abordables",
        hero_subtitle: "Au cœur de Zele, avec l'assurance Vatan Mega.",
        featured_products: "Produits en Vedette",
        add_to_cart: "Ajouter au Panier"
    },
    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        offers: "عروض",
        contact: "اتصال",
        hero_title: "تسوق طازج وعالي الجودة وبأسعار معقولة",
        hero_subtitle: "في قلب زيلي، مع ضمان فاتان ميجا.",
        featured_products: "منتجات مميزة",
        add_to_cart: "أضف إلى السلة"
    }
};

const products = [
    { id: 1, name: "Vatan Taze Dana Kıyma", price: "€12.50", img: "https://via.placeholder.com/250x200/1D4B94/FFFFFF?text=Dana+Kiyma" },
    { id: 2, name: "Sütaş Beyaz Peynir 500g", price: "€8.99", img: "https://via.placeholder.com/250x200/1D4B94/FFFFFF?text=Beyaz+Peynir" },
    { id: 3, name: "Ekol Zeytinyağı 1L", price: "€9.45", img: "https://via.placeholder.com/250x200/1D4B94/FFFFFF?text=Zeytinyagi" },
    { id: 4, name: "Taze Çengelköy Salatalık", price: "€2.20", img: "https://via.placeholder.com/250x200/1D4B94/FFFFFF?text=Salatalik" },
    { id: 5, name: "Sera Karışık Turşu", price: "€3.50", img: "https://via.placeholder.com/250x200/1D4B94/FFFFFF?text=Tursu" },
    { id: 6, name: "Taze Ekmek", price: "€1.10", img: "https://via.placeholder.com/250x200/1D4B94/FFFFFF?text=Ekmek" }
];

let currentLang = "tr";
let cartCount = 0;

const langSwitch = document.getElementById("lang-switch");
const productList = document.getElementById("product-list");
const cartCountEl = document.getElementById("cart-count");

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    if (lang === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    renderProducts();
}

function renderProducts() {
    productList.innerHTML = "";
    const btnText = translations[currentLang].add_to_cart;

    products.forEach(product => {
        const article = document.createElement("article");
        article.className = "product-card";
        
        article.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <button class="add-to-cart">${btnText}</button>
        `;
        
        const btn = article.querySelector(".add-to-cart");
        btn.addEventListener("click", () => {
            cartCount++;
            cartCountEl.textContent = cartCount;
        });

        productList.appendChild(article);
    });
}

langSwitch.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
});

updateLanguage(currentLang);
