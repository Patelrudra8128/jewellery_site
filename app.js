// Product Catalog Data
const products = [
  {
    id: "prod-watch-1",
    name: "Valerius Chrono Classic",
    category: "watches",
    priceInr: 245000,
    rating: 4.8,
    reviewsCount: 24,
    mainImage: "assets/watches_watch1.png",
    images: ["assets/watches_watch1.png", "assets/watches_watch1.png", "assets/watches_watch2.png"],
    description: "The Valerius Chrono Classic represents the absolute height of premium horology. Featuring a robust automatic calibre, elegant gold-plated sub-dials, tactile tachymeter bezel, and a hand-stitched grain leather strap, it is engineered for the discerning collector who demands absolute performance and aesthetics.",
    metalOptions: ["Leather Strap", "Gold Bracelet", "Steel Band"],
    sizeOptions: ["40mm", "42mm"],
    specs: {
      "Calibre": "Valerius V-01 Automatic",
      "Power Reserve": "48 Hours",
      "Case Material": "18k Yellow Gold & Stainless Steel",
      "Strap": "Alligator Leather with gold folding clasp",
      "Water Resistance": "100 meters (10 ATM)"
    },
    reviews: [
      { author: "Arthur Pendelton", rating: 5, date: "2026-07-10", comment: "Stunning craftsmanship. The weight is perfect and it has run accurately within seconds per week. An absolute joy to wear." },
      { author: "Michael C.", rating: 4, date: "2026-06-28", comment: "Beautiful design. The black dial contrasts magnificently with the gold. Shipping took 3 days, but packaging was immaculate." }
    ]
  },
  {
    id: "prod-watch-2",
    name: "Aurelia Mesh Gold",
    category: "watches",
    priceInr: 185000,
    rating: 4.9,
    reviewsCount: 19,
    mainImage: "assets/watches_watch2.png",
    images: ["assets/watches_watch2.png", "assets/watches_watch2.png", "assets/watches_watch1.png"],
    description: "Exquisite minimalism meets luxury metalcraft. The Aurelia Mesh Gold is designed with an ultra-thin 18k solid yellow gold casing, a dark obsidian dial face, and an intricately woven gold mesh bracelet that wraps fluidly around the wrist. Perfect for formal evenings or minimal statements.",
    metalOptions: ["18k Yellow Gold", "Rose Gold", "Platinum"],
    sizeOptions: ["36mm", "38mm"],
    specs: {
      "Calibre": "Swiss Quartz Premium",
      "Case Thickness": "6.2 mm",
      "Case Material": "Solid 18k Yellow Gold",
      "Glass": "Scratch-resistant Sapphire Crystal",
      "Dial": "Obsidian Black with Gold indicators"
    },
    reviews: [
      { author: "Eleanor G.", rating: 5, date: "2026-07-15", comment: "An elegant, understated luxury. It is incredibly thin and feels like silk on the wrist." }
    ]
  },
  {
    id: "prod-ring-1",
    name: "Solitaire Elegance Ring",
    category: "jewellery",
    priceInr: 320000,
    rating: 5.0,
    reviewsCount: 32,
    mainImage: "assets/jewellery_ring1.png",
    images: ["assets/jewellery_ring1.png", "assets/jewellery_ring1.png", "assets/jewellery_earrings1.png"],
    description: "Declare forever with the Solitaire Elegance Ring. Boasting a flawless 1.5-carat round brilliant-cut diamond of VVS1 clarity and D color, set in a signature six-prong crown of polished 18k gold. The band features micro-pavé diamonds along the shoulders for a continuous shimmer.",
    metalOptions: ["Yellow Gold", "White Gold", "Platinum"],
    sizeOptions: ["Size 6", "Size 7", "Size 8", "Size 9"],
    specs: {
      "Diamond Weight": "1.5 Carat Solitaire (Total 1.9ct)",
      "Clarity": "VVS1 Flawless",
      "Color Grade": "D (Colorless)",
      "Cut Grade": "Excellent Triple Cut",
      "Certification": "GIA Certified"
    },
    reviews: [
      { author: "Rohan S.", rating: 5, date: "2026-07-18", comment: "Proposed with this ring last week, and she was absolutely speechless. The diamond catch light beautifully. Truly exceptional." },
      { author: "Sofia Martinez", rating: 5, date: "2026-07-02", comment: "The GIA report was included, and the stone sparkles unlike anything I have seen. Elegant packaging." }
    ]
  },
  {
    id: "prod-necklace-1",
    name: "Vespera Diamond Pendant",
    category: "jewellery",
    priceInr: 450000,
    rating: 4.7,
    reviewsCount: 15,
    mainImage: "assets/jewellery_necklace1.png",
    images: ["assets/jewellery_necklace1.png", "assets/jewellery_necklace1.png", "assets/jewellery_earrings1.png"],
    description: "An heirloom-worthy piece designed to turn heads. The Vespera Diamond Pendant showcases a cascading drop design, handcrafted with alternating pear and round brilliant diamonds set in liquid 18k white gold. Suspended from an adjustable cable chain with a secure lobster clasp.",
    metalOptions: ["18k White Gold", "Platinum", "Yellow Gold"],
    sizeOptions: ["16 inch", "18 inch"],
    specs: {
      "Total Carat Weight": "3.2 Carats",
      "Metal": "18k White Gold",
      "Diamond Quality": "VVS2 Clarity, F Color",
      "Setting": "Hand-set prong setting",
      "Chain Type": "1.2mm cable chain with adjustable loops"
    },
    reviews: [
      { author: "Victoria P.", rating: 5, date: "2026-06-12", comment: "Wore this to a charity gala, and received endless compliments. It has a beautiful weight to it and sits perfectly." }
    ]
  },
  {
    id: "prod-earring-1",
    name: "Aura Diamond Drop Earrings",
    category: "jewellery",
    priceInr: 165000,
    rating: 4.8,
    reviewsCount: 11,
    mainImage: "assets/jewellery_earrings1.png",
    images: ["assets/jewellery_earrings1.png", "assets/jewellery_earrings1.png", "assets/jewellery_ring1.png"],
    description: "Framing the face in luxurious brilliance. The Aura Diamond Drop Earrings feature clusters of pear-cut diamonds that cascade down, culminating in a striking halo droplet. Beautifully cast in solid yellow gold, they strike the perfect balance between classic charm and high modern design.",
    metalOptions: ["Yellow Gold", "White Gold"],
    sizeOptions: ["Standard Drop"],
    specs: {
      "Total Carat Weight": "1.8 Carats Pair",
      "Clarity": "VS1",
      "Color Grade": "G Color",
      "Backing Type": "Post with alpha-safe clutch back",
      "Drop Length": "25 mm"
    },
    reviews: [
      { author: "Hanna L.", rating: 5, date: "2026-05-30", comment: "Extremely secure backing. I never feel worried wearing them out. Gorgeous, sparkly diamonds." }
    ]
  },
  {
    id: "prod-chain-1",
    name: "Imperial Cuban Gold Chain",
    category: "chains",
    priceInr: 290000,
    rating: 4.9,
    reviewsCount: 42,
    mainImage: "assets/chains_chain1.png",
    images: ["assets/chains_chain1.png", "assets/chains_chain1.png", "assets/watches_watch2.png"],
    description: "Crafted for maximum presence. The Imperial Cuban Gold Chain is a masterwork of heavy metal link design. Each link is polished to a mirror finish, hand-assembled, and secured by a custom box clasp with dual safety locks. A substantial statement of enduring luxury.",
    metalOptions: ["Yellow Gold", "White Gold", "Rose Gold"],
    sizeOptions: ["20 inch", "22 inch", "24 inch"],
    specs: {
      "Width": "10 mm thick links",
      "Weight": "Approx. 85 grams (22 inch)",
      "Metal": "Solid 18k Yellow Gold",
      "Clasp": "Heavy box clasp with side locks",
      "Assembly": "Handmade links"
    },
    reviews: [
      { author: "Marcus D.", rating: 5, date: "2026-07-20", comment: "The build quality is insane. Solid gold weight feel massive. The clasp mechanism is secure and super robust." },
      { author: "Tariq K.", rating: 4, date: "2026-07-04", comment: "Very glossy finish. Highly reflective. Exactly what I wanted in an 18k cuban link." }
    ]
  }
];

// Testimonials Slider Content
const testimonials = [
  {
    text: "An absolute masterpiece of a watch. The weight, the finish, and the service from Valerius were top tier. I will definitely be purchasing my next chronograph here.",
    author: "James L.",
    title: "Connoisseur & Collector"
  },
  {
    text: "The proposal was perfect, and the Solitaire Elegance ring exceeded every expectation. Under low lighting, the diamond glows with incredible fire and scintillation.",
    author: "Rohan S.",
    title: "Valued Client"
  },
  {
    text: "Imperial Cuban Gold chain is solid gold craft at its finest. Heavy weight, beautiful interlocking links, and a secure safety lock. Highly recommended.",
    author: "Marcus D.",
    title: "Gold Collector"
  }
];

// State Management
let currentCurrency = "INR";
const exchangeRates = {
  INR: 1.0,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0093
};

const currencySymbols = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£"
};

let currentFilter = "all";
let scrollObserver = null;
let cart = JSON.parse(localStorage.getItem("valerius_cart")) || [];
let activeProductDetail = null;
let selectedMetal = "";
let selectedSize = "";
let currentDetailQty = 1;
let currentTestimonialIndex = 0;
let appliedPromo = null;

const promoCodes = {
  WELCOME10: 10,
  GOLD20: 20,
  LUXURY20: 20
};

// DOM Cache
const catalogGrid = document.getElementById("catalog-products-grid");
const currencySelect = document.getElementById("currency-select");
const searchInput = document.getElementById("product-search");
const sortSelect = document.getElementById("product-sort");
const filterTabs = document.querySelectorAll(".filter-tab");
const cartBadge = document.getElementById("cart-badge-count");
const cartIconBtn = document.getElementById("cart-icon-btn");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartSidebar = document.getElementById("cart-sidebar-panel");
const sidebarOverlay = document.getElementById("sidebar-overlay-bg");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartSummaryQty = document.getElementById("cart-summary-qty");
const cartSummarySubtotal = document.getElementById("cart-summary-subtotal");
const cartSummaryTotal = document.getElementById("cart-summary-total");
const checkoutBtn = document.getElementById("checkout-btn");

const detailModal = document.getElementById("detail-modal");
const detailCloseBtn = document.getElementById("detail-close-btn");
const productDetailView = document.getElementById("product-detail-view");

const checkoutModal = document.getElementById("checkout-modal");
const checkoutCloseBtn = document.getElementById("checkout-close-btn");
const checkoutForm = document.getElementById("checkout-form");
const checkoutItemsList = document.getElementById("checkout-items-list");
const promoCodeInput = document.getElementById("promo-code-input");
const applyPromoBtn = document.getElementById("apply-promo-btn");
const promoStatusText = document.getElementById("promo-status-text");
const checkoutTotalItems = document.getElementById("checkout-total-items");
const checkoutSubtotalVal = document.getElementById("checkout-subtotal-val");
const checkoutDiscountRow = document.getElementById("checkout-discount-row");
const promoPercentVal = document.getElementById("promo-percent-val");
const checkoutDiscountVal = document.getElementById("checkout-discount-val");
const checkoutGrandTotal = document.getElementById("checkout-grand-total");

const policyModal = document.getElementById("policy-modal");
const policyCloseBtn = document.getElementById("policy-close-btn");
const policyContentView = document.getElementById("policy-content-view");
const policyTriggers = document.querySelectorAll(".policy-trigger, #terms-link, #privacy-link");

const notifBanner = document.getElementById("notif-banner");
const notifText = document.getElementById("notif-text");

const mobileToggle = document.getElementById("mobile-toggle");
const navigationMenu = document.getElementById("navigation-menu");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  renderProducts();
  updateCartBadge();
  setupEventListeners();
  startTestimonialSlider();
  detectSimulatedLocation();
});

// Detect simulated location currency conversion
function detectSimulatedLocation() {
  // Mock auto currency detection. In production, we'd use a geolocation API or IP look-up.
  // We simulate detecting a foreign currency (e.g. USD) and display prices.
  setTimeout(() => {
    showNotification("Visitor Location detected: Simulated multi-currency enabled.");
  }, 2000);
}

// Render Products Catalog
function renderProducts() {
  if (!catalogGrid) return;
  catalogGrid.innerHTML = "";

  // Apply filters
  let filtered = products;
  if (currentFilter !== "all") {
    filtered = products.filter(p => p.category === currentFilter);
  }

  // Apply Search
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  if (query) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query)
    );
  }

  // Apply Sort
  const sortBy = sortSelect ? sortSelect.value : "featured";
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.priceInr - b.priceInr);
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.priceInr - a.priceInr);
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 4rem 0;">No products found matching the criteria.</p>`;
    return;
  }

  filtered.forEach(p => {
    const priceFormatted = formatPrice(p.priceInr);
    
    // Star generator
    let starsHtml = "";
    const fullStars = Math.floor(p.rating);
    const hasHalf = p.rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHtml += `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
      } else {
        starsHtml += `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
      }
    }

    const card = document.createElement("div");
    card.className = "product-card scroll-reveal";
    card.setAttribute("data-id", p.id);
    card.innerHTML = `
      <div class="product-img-wrapper card-click-trigger" style="cursor: pointer;">
        <span class="product-card-badge">${p.category}</span>
        <img src="${p.mainImage}" alt="${p.name}" class="product-img" loading="lazy">
      </div>
      <div class="product-info card-click-trigger" style="cursor: pointer;">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          ${starsHtml}
          <span class="product-rating-count">(${p.reviewsCount})</span>
        </div>
        <div class="product-price-wrapper">${priceFormatted}</div>
      </div>
      <button class="product-card-btn add-to-bag-btn">Add to Bag</button>
    `;

    // Click handlers
    card.querySelectorAll(".card-click-trigger").forEach(el => {
      el.addEventListener("click", () => openProductModal(p.id));
    });
    
    card.querySelector(".add-to-bag-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      quickAddToCart(p);
    });
    
    catalogGrid.appendChild(card);
    if (scrollObserver) {
      scrollObserver.observe(card);
    }
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Currency Switcher
  const currencySelects = [
    document.getElementById("currency-select"),
    document.getElementById("currency-select-mobile")
  ];

  currencySelects.forEach(select => {
    if (select) {
      select.addEventListener("change", (e) => {
        currentCurrency = e.target.value;
        
        // Sync the other dropdown
        currencySelects.forEach(otherSelect => {
          if (otherSelect && otherSelect !== select) {
            otherSelect.value = currentCurrency;
          }
        });

        renderProducts();
        updateCartSidebar();
        if (activeProductDetail) {
          renderProductDetailView();
        }
        updateCheckoutSummary();
      });
    }
  });

  // Filter Tabs
  filterTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-filter");
      renderProducts();
    });
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener("input", renderProducts);
  }

  // Sort
  if (sortSelect) {
    sortSelect.addEventListener("change", renderProducts);
  }

  // Mobile Menu
  if (mobileToggle && navigationMenu) {
    mobileToggle.addEventListener("click", () => {
      navigationMenu.classList.toggle("open");
      mobileToggle.innerHTML = navigationMenu.classList.contains("open") 
        ? "<span>&times;</span> Close" 
        : "<span>&#9776;</span> Menu";
    });

    navigationMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", (e) => {
        navigationMenu.classList.remove("open");
        mobileToggle.innerHTML = "<span>&#9776;</span> Menu";
        
        navigationMenu.querySelectorAll("a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
        
        // Handle footer filter links redirecting to shop with active tag
        const section = link.getAttribute("data-section");
        if (section === "shop") {
          currentFilter = "all";
          filterTabs.forEach(t => {
            if(t.getAttribute("data-filter") === "all") t.classList.add("active");
            else t.classList.remove("active");
          });
          renderProducts();
        }
      });
    });
  }

  // Category card clicks
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.getAttribute("data-category");
      currentFilter = cat;
      filterTabs.forEach(t => {
        if (t.getAttribute("data-filter") === cat) t.classList.add("active");
        else t.classList.remove("active");
      });
      renderProducts();
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Footer Category Link Clicks
  document.querySelectorAll(".cat-filter-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const cat = link.getAttribute("data-cat");
      currentFilter = cat;
      filterTabs.forEach(t => {
        if (t.getAttribute("data-filter") === cat) t.classList.add("active");
        else t.classList.remove("active");
      });
      renderProducts();
    });
  });

  // Cart Slideout Control
  if (cartIconBtn) {
    cartIconBtn.addEventListener("click", openCart);
  }
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", closeCart);
  }
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", () => {
      closeCart();
      closeAllModals();
    });
  }

  // Modal Closures
  if (detailCloseBtn) {
    detailCloseBtn.addEventListener("click", () => {
      detailModal.classList.remove("open");
      activeProductDetail = null;
    });
  }

  if (checkoutCloseBtn) {
    checkoutCloseBtn.addEventListener("click", () => {
      checkoutModal.classList.remove("open");
    });
  }

  if (policyCloseBtn) {
    policyCloseBtn.addEventListener("click", () => {
      policyModal.classList.remove("open");
    });
  }

  // Open Checkout
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showNotification("Your cart is empty.");
        return;
      }
      closeCart();
      openCheckoutModal();
    });
  }

  // Promo Code Application
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener("click", applyPromoCode);
  }

  // Checkout Form Submission Simulation
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  }

  // Policy Links Triggering Modals
  policyTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const policyType = trigger.getAttribute("id") === "terms-link" || trigger.getAttribute("data-policy") === "terms" ? "terms" : "privacy";
      openPolicyModal(policyType);
    });
  });

  // Credit Card formatting (Auto-insert space every 4 digits, numbers only)
  const cardInput = document.getElementById("card-num");
  if (cardInput) {
    cardInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let matches = val.match(/\d{4,16}/g);
      let match = matches && matches[0] || '';
      let parts = [];

      for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4));
      }

      if (parts.length > 0) {
        e.target.value = parts.join(' ');
      } else {
        e.target.value = val;
      }
    });
  }

  // Card Expiration Formatting (Auto-insert / after 2 digits MM/YY)
  const expiryInput = document.getElementById("card-expiry");
  if (expiryInput) {
    expiryInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      if (val.length >= 2) {
        e.target.value = val.substring(0,2) + '/' + val.substring(2,4);
      } else {
        e.target.value = val;
      }
    });
  }

  // Newsletter Submission Form Simulation
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector("input").value;
      showNotification(`Thank you for subscribing, ${email}!`);
      newsletterForm.reset();
    });
  }
}

// Close All Modals
function closeAllModals() {
  detailModal.classList.remove("open");
  checkoutModal.classList.remove("open");
  policyModal.classList.remove("open");
  activeProductDetail = null;
}

// Helper to Format Currency Display
function formatPrice(priceInr) {
  const rate = exchangeRates[currentCurrency];
  const converted = Math.round(priceInr * rate);
  const symbol = currencySymbols[currentCurrency];
  
  if (currentCurrency === "INR") {
    return `${symbol}${priceInr.toLocaleString("en-IN")}`;
  } else {
    return `${symbol}${converted.toLocaleString("en-US")}`;
  }
}

// Quick Add To Cart from Grid
function quickAddToCart(product) {
  // Grab default options
  const defaultMetal = product.metalOptions ? product.metalOptions[0] : "";
  const defaultSize = product.sizeOptions ? product.sizeOptions[0] : "";
  
  addToCart(product.id, product.name, product.priceInr, product.mainImage, defaultMetal, defaultSize, 1);
  showNotification(`${product.name} added to cart.`);
}

// Cart Core Operations
function addToCart(id, name, priceInr, img, metal, size, qty) {
  const existingIdx = cart.findIndex(item => item.id === id && item.metal === metal && item.size === size);
  
  if (existingIdx > -1) {
    cart[existingIdx].qty += qty;
  } else {
    cart.push({
      id,
      name,
      priceInr,
      img,
      metal,
      size,
      qty
    });
  }

  localStorage.setItem("valerius_cart", JSON.stringify(cart));
  updateCartBadge();
  updateCartSidebar();
}

function updateCartBadge() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) {
    cartBadge.innerText = totalQty;
  }
}

function openCart() {
  if (cartSidebar && sidebarOverlay) {
    cartSidebar.classList.add("open");
    sidebarOverlay.classList.add("open");
    updateCartSidebar();
  }
}

function closeCart() {
  if (cartSidebar && sidebarOverlay) {
    cartSidebar.classList.remove("open");
    sidebarOverlay.classList.remove("open");
  }
}

function updateCartSidebar() {
  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-cart-message">Your luxury shopping cart is empty.</p>`;
    cartSummaryQty.innerText = "0 items";
    cartSummarySubtotal.innerText = formatPrice(0);
    cartSummaryTotal.innerText = formatPrice(0);
    return;
  }

  let subtotal = 0;
  let itemsCount = 0;

  cart.forEach((item, idx) => {
    const itemTotal = item.priceInr * item.qty;
    subtotal += itemTotal;
    itemsCount += item.qty;

    const cartItemEl = document.createElement("div");
    cartItemEl.className = "cart-item";
    cartItemEl.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-item-variant">${item.metal ? item.metal : ""} ${item.size ? ` / ${item.size}` : ""}</p>
        <div class="cart-item-price">${formatPrice(item.priceInr)}</div>
        <div class="cart-item-qty-control">
          <button class="qty-btn dec-qty-btn" data-index="${idx}">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn inc-qty-btn" data-index="${idx}">+</button>
        </div>
        <button class="cart-item-remove" data-index="${idx}">Remove</button>
      </div>
    `;

    // Increment/Decrement/Remove handlers
    cartItemEl.querySelector(".dec-qty-btn").addEventListener("click", () => adjustQty(idx, -1));
    cartItemEl.querySelector(".inc-qty-btn").addEventListener("click", () => adjustQty(idx, 1));
    cartItemEl.querySelector(".cart-item-remove").addEventListener("click", () => removeCartItem(idx));

    cartItemsContainer.appendChild(cartItemEl);
  });

  cartSummaryQty.innerText = `${itemsCount} item${itemsCount > 1 ? "s" : ""}`;
  cartSummarySubtotal.innerText = formatPrice(subtotal);
  
  // Calculate final total (including promo if applied inside cart checkout later)
  let discount = 0;
  if (appliedPromo) {
    discount = Math.round(subtotal * (appliedPromo.percent / 100));
  }
  cartSummaryTotal.innerText = formatPrice(subtotal - discount);
}

function adjustQty(index, amt) {
  cart[index].qty += amt;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("valerius_cart", JSON.stringify(cart));
  updateCartBadge();
  updateCartSidebar();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("valerius_cart", JSON.stringify(cart));
  updateCartBadge();
  updateCartSidebar();
}

// Open Product Detail Modal
function openProductModal(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  activeProductDetail = prod;
  selectedMetal = prod.metalOptions ? prod.metalOptions[0] : "";
  selectedSize = prod.sizeOptions ? prod.sizeOptions[0] : "";
  currentDetailQty = 1;

  detailModal.classList.add("open");
  renderProductDetailView();
}

// Render Inner Product Detail Layout
function renderProductDetailView() {
  if (!productDetailView || !activeProductDetail) return;

  const prod = activeProductDetail;
  const priceFormatted = formatPrice(prod.priceInr);

  // Metal Option buttons
  let metalHtml = "";
  if (prod.metalOptions && prod.metalOptions.length > 0) {
    metalHtml = `
      <div class="option-group">
        <span class="option-label">Select Accent / Strap</span>
        <div class="option-selectors">
          ${prod.metalOptions.map(opt => `
            <button class="selector-btn metal-sel-btn ${opt === selectedMetal ? "active" : ""}" data-val="${opt}">${opt}</button>
          `).join("")}
        </div>
      </div>
    `;
  }

  // Size Options
  let sizeHtml = "";
  if (prod.sizeOptions && prod.sizeOptions.length > 0) {
    sizeHtml = `
      <div class="option-group">
        <span class="option-label">Select Size / Fit</span>
        <div class="option-selectors">
          ${prod.sizeOptions.map(size => `
            <button class="selector-btn size-sel-btn ${size === selectedSize ? "active" : ""}" data-val="${size}">${size}</button>
          `).join("")}
        </div>
      </div>
    `;
  }

  // Technical Specifications
  let specsHtml = "";
  if (prod.specs) {
    specsHtml = `
      <div class="detail-meta" style="margin-top:2rem;">
        <span style="font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-primary); margin-bottom:0.5rem; display:block;">Specifications</span>
        ${Object.entries(prod.specs).map(([key, val]) => `
          <span><strong>${key}:</strong> ${val}</span>
        `).join("")}
      </div>
    `;
  }

  // Star Rating rendering
  let ratingStars = "";
  const rounded = Math.floor(prod.rating);
  for (let i = 0; i < 5; i++) {
    if (i < rounded) {
      ratingStars += `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:var(--accent-gold);"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
    } else {
      ratingStars += `<svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" style="width:16px; height:16px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
    }
  }

  // Thumbnails Grid
  const thumbnailHtml = prod.images.map((imgUrl, idx) => `
    <button class="thumbnail-btn ${idx === 0 ? "active" : ""}" data-img="${imgUrl}">
      <img src="${imgUrl}" alt="${prod.name} thumbnail">
    </button>
  `).join("");

  productDetailView.innerHTML = `
    <!-- Gallery -->
    <div class="detail-gallery">
      <div class="detail-main-img-wrapper">
        <img src="${prod.mainImage}" alt="${prod.name}" class="detail-main-img" id="detail-main-img-element">
      </div>
      <div class="detail-thumbnails">
        ${thumbnailHtml}
      </div>
    </div>
    
    <!-- Info -->
    <div class="detail-info">
      <span class="detail-category">${prod.category}</span>
      <h2 class="detail-name">${prod.name}</h2>
      
      <div class="detail-rating-row">
        <div style="display:flex; align-items:center; gap:0.2rem;">
          ${ratingStars}
        </div>
        <span class="product-rating-count" style="font-size:0.8rem;">${prod.rating} (${prod.reviewsCount} reviews)</span>
      </div>

      <div class="detail-price">${priceFormatted}</div>
      <p class="detail-desc">${prod.description}</p>
      
      <div class="detail-options">
        ${metalHtml}
        ${sizeHtml}
      </div>

      <div class="detail-actions-row">
        <div class="detail-qty-select">
          <button class="detail-qty-btn" id="detail-qty-dec">-</button>
          <span class="detail-qty-val" id="detail-qty-value">${currentDetailQty}</span>
          <button class="detail-qty-btn" id="detail-qty-inc">+</button>
        </div>
        <button class="btn btn-primary detail-add-btn" id="detail-add-to-cart">Add to Cart</button>
      </div>

      ${specsHtml}
    </div>

    <!-- Reviews Section -->
    <div class="detail-reviews-container">
      <div class="reviews-header">
        <h3 class="reviews-title">Customer Reviews</h3>
        <div style="font-size: 1.1rem; font-weight:600; color: var(--accent-gold);">★ ${prod.rating} / 5.0</div>
      </div>
      
      <div class="reviews-layout">
        <div class="reviews-list" id="detail-reviews-list">
          <!-- Rendered dynamically -->
        </div>

        <div class="review-form-wrapper">
          <h4 class="review-form-title">Write A Review</h4>
          <form id="submit-review-form">
            <div class="form-group">
              <label class="form-label" for="rev-author">Your Name</label>
              <input type="text" id="rev-author" class="form-input" required placeholder="e.g. Johnathan S.">
            </div>
            
            <div class="form-group">
              <label class="form-label">Rating</label>
              <div class="star-rating-input" id="star-selector">
                <span data-star="1">★</span>
                <span data-star="2">★</span>
                <span data-star="3">★</span>
                <span data-star="4">★</span>
                <span data-star="5" class="selected">★</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="rev-comment">Your Comments</label>
              <textarea id="rev-comment" class="form-input" rows="4" required placeholder="Share your experience..." style="resize:none; font-family:var(--font-sans)"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  `;

  // Attach handlers
  // Thumbnail switching
  productDetailView.querySelectorAll(".thumbnail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      productDetailView.querySelectorAll(".thumbnail-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetImg = btn.getAttribute("data-img");
      document.getElementById("detail-main-img-element").src = targetImg;
    });
  });

  // Variant Selection
  productDetailView.querySelectorAll(".metal-sel-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      productDetailView.querySelectorAll(".metal-sel-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedMetal = btn.getAttribute("data-val");
    });
  });

  productDetailView.querySelectorAll(".size-sel-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      productDetailView.querySelectorAll(".size-sel-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = btn.getAttribute("data-val");
    });
  });

  // Qty Adjustment
  const qtyValEl = document.getElementById("detail-qty-value");
  document.getElementById("detail-qty-dec").addEventListener("click", () => {
    if (currentDetailQty > 1) {
      currentDetailQty--;
      qtyValEl.innerText = currentDetailQty;
    }
  });

  document.getElementById("detail-qty-inc").addEventListener("click", () => {
    currentDetailQty++;
    qtyValEl.innerText = currentDetailQty;
  });

  // Add to Cart
  document.getElementById("detail-add-to-cart").addEventListener("click", () => {
    addToCart(prod.id, prod.name, prod.priceInr, prod.mainImage, selectedMetal, selectedSize, currentDetailQty);
    showNotification(`${prod.name} added to cart.`);
    detailModal.classList.remove("open");
    activeProductDetail = null;
    openCart();
  });

  // Star selector input
  let reviewRating = 5;
  const starBtns = productDetailView.querySelectorAll("#star-selector span");
  starBtns.forEach(star => {
    star.addEventListener("click", () => {
      const targetRating = parseInt(star.getAttribute("data-star"));
      reviewRating = targetRating;
      
      starBtns.forEach(s => {
        const rate = parseInt(s.getAttribute("data-star"));
        if (rate <= targetRating) {
          s.classList.add("selected");
        } else {
          s.classList.remove("selected");
        }
      });
    });
  });

  // Reviews submission
  const reviewForm = document.getElementById("submit-review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("rev-author").value.trim();
      const comment = document.getElementById("rev-comment").value.trim();
      const date = new Date().toISOString().split("T")[0];

      // Add review to our simulated database
      const newReview = { author, rating: reviewRating, date, comment };
      prod.reviews.unshift(newReview);
      
      // Update totals
      prod.reviewsCount++;
      // Recalculate average rating
      const sum = prod.reviews.reduce((acc, r) => acc + r.rating, 0);
      prod.rating = parseFloat((sum / prod.reviews.length).toFixed(1));

      showNotification("Review submitted successfully. Pending approval check.");
      renderProductDetailView();
      renderProducts(); // Update rating displays in background catalog
    });
  }

  // Load reviews list
  renderReviewsList(prod.reviews);
}

// Render reviews list
function renderReviewsList(reviews) {
  const reviewsList = document.getElementById("detail-reviews-list");
  if (!reviewsList) return;
  reviewsList.innerHTML = "";

  if (!reviews || reviews.length === 0) {
    reviewsList.innerHTML = `<p class="no-reviews-msg">No client reviews yet. Be the first to share your thoughts.</p>`;
    return;
  }

  reviews.forEach(r => {
    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
      if (i < r.rating) {
        starsHtml += "★";
      } else {
        starsHtml += "☆";
      }
    }

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-author-row">
        <span class="review-author">${r.author}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="review-stars">${starsHtml}</div>
      <p class="review-comment">"${r.comment}"</p>
    `;
    reviewsList.appendChild(item);
  });
}

// Checkout Modal Actions
function openCheckoutModal() {
  if (!checkoutModal) return;
  checkoutModal.classList.add("open");
  appliedPromo = null;
  if (promoStatusText) promoStatusText.innerText = "";
  if (promoCodeInput) promoCodeInput.value = "";
  if (checkoutDiscountRow) checkoutDiscountRow.style.display = "none";
  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  if (!checkoutItemsList) return;
  checkoutItemsList.innerHTML = "";

  let subtotal = 0;
  let itemsCount = 0;

  cart.forEach(item => {
    subtotal += item.priceInr * item.qty;
    itemsCount += item.qty;

    const itemEl = document.createElement("div");
    itemEl.className = "checkout-item";
    itemEl.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="checkout-item-img">
      <div class="checkout-item-details">
        <h4 class="checkout-item-name">${item.name}</h4>
        <span class="checkout-item-qty">Qty: ${item.qty} ${item.metal ? ` / ${item.metal}` : ""}</span>
      </div>
      <div class="checkout-item-price">${formatPrice(item.priceInr * item.qty)}</div>
    `;
    checkoutItemsList.appendChild(itemEl);
  });

  checkoutTotalItems.innerText = `${itemsCount} item${itemsCount > 1 ? "s" : ""}`;
  checkoutSubtotalVal.innerText = formatPrice(subtotal);

  // Discount calculation
  let discount = 0;
  if (appliedPromo) {
    discount = Math.round(subtotal * (appliedPromo.percent / 100));
    checkoutDiscountRow.style.display = "flex";
    promoPercentVal.innerText = appliedPromo.percent;
    checkoutDiscountVal.innerText = `-${formatPrice(discount)}`;
  } else {
    checkoutDiscountRow.style.display = "none";
  }

  const finalTotal = subtotal - discount;
  checkoutGrandTotal.innerText = formatPrice(finalTotal);
  
  // Update cart totals row if details modal/slider opened
  updateCartSidebar();
}

// Apply Promo Code
function applyPromoCode() {
  const code = promoCodeInput.value.toUpperCase().trim();
  if (!code) {
    showPromoStatus("Please enter a code.", "error");
    return;
  }

  if (promoCodes[code]) {
    appliedPromo = {
      code,
      percent: promoCodes[code]
    };
    showPromoStatus(`Promo code "${code}" applied successfully!`, "success");
    updateCheckoutSummary();
  } else {
    appliedPromo = null;
    showPromoStatus("Invalid promo code. Try WELCOME10 or GOLD20.", "error");
    updateCheckoutSummary();
  }
}

function showPromoStatus(msg, status) {
  if (!promoStatusText) return;
  promoStatusText.innerText = msg;
  promoStatusText.className = `promo-status-msg ${status}`;
}

// Simulate Secure Checkout Payment
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const button = checkoutForm.querySelector("button[type='submit']");
  const origText = button.innerText;
  button.disabled = true;
  button.innerText = "Processing secure payment via Razorpay...";
  button.style.backgroundColor = "var(--text-muted)";

  // Simulate gateway processing delay
  setTimeout(() => {
    // Payment Successful
    button.disabled = false;
    button.innerText = origText;
    button.style.backgroundColor = "var(--accent-gold)";

    checkoutModal.classList.remove("open");
    
    // Clear Cart
    cart = [];
    localStorage.removeItem("valerius_cart");
    updateCartBadge();
    updateCartSidebar();

    // Show Thank You Alert
    alert("Payment Successful!\n\nYour simulated order has been placed. A payment receipt and shipping schedule have been sent to your email. (Secure Razorpay Sandbox simulation complete.)");
  }, 2500);
}

// Open static CMS modals (Terms / Privacy Policy)
const termsContent = `
  <h2 class="policy-title">Terms & Conditions</h2>
  <div class="policy-body">
    <p>Last updated: July 2026</p>
    <p>Welcome to VALERIUS. These terms and conditions outline the rules and regulations for the use of our mock-up showcase website.</p>
    
    <h3>1. Acceptance of Terms</h3>
    <p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use VALERIUS's website if you do not agree to all of the terms and conditions stated on this page.</p>

    <h3>2. E-Commerce Demonstration</h3>
    <p>This website is a frontend design demonstration mock-up. No actual product sales, inventory verification, or financial transactions are occurring. Payments simulated are in a sandbox test environment via simulated Razorpay fields.</p>

    <h3>3. Intellectual Property</h3>
    <p>Unless otherwise stated, VALERIUS and/or its licensors own the intellectual property rights for all material on this site. All intellectual property rights are reserved. You must not copy, sell, or rent material from this website.</p>

    <h3>4. User Reviews</h3>
    <p>Parts of this website offer an opportunity for users to post reviews. VALERIUS does not screen, edit, or publish reviews prior to their appearance on the website. Reviews reflect the views of the person who posts them.</p>
  </div>
`;

const privacyContent = `
  <h2 class="policy-title">Privacy Policy</h2>
  <div class="policy-body">
    <p>Last updated: July 2026</p>
    <p>At VALERIUS, accessible from this mock-up storefront, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by this site.</p>
    
    <h3>1. Data Collection</h3>
    <p>Since this is a mockup website, we do not save personal information, shipping addresses, or credit card numbers to external servers. Any details entered in the checkout form are stored in local browser state and discarded upon session completion.</p>

    <h3>2. Cart Cookies & LocalStorage</h3>
    <p>We use LocalStorage to maintain your luxury cart items and quantities between page visits. We do not track browser histories or share statistics with third parties.</p>

    <h3>3. Third Party Integrations</h3>
    <p>The Razorpay payment simulator is a visual interface that mimics card input frames for checkout demonstration purposes. No data is transmitted to payment service providers.</p>
  </div>
`;

function openPolicyModal(type) {
  if (!policyModal || !policyContentView) return;
  
  if (type === "terms") {
    policyContentView.innerHTML = termsContent;
  } else {
    policyContentView.innerHTML = privacyContent;
  }
  
  policyModal.classList.add("open");
}

// Toast Notifications Banner
function showNotification(text) {
  if (!notifBanner || !notifText) return;
  
  notifText.innerText = text;
  notifBanner.classList.add("show");
  
  setTimeout(() => {
    notifBanner.classList.remove("show");
  }, 3500);
}

// Testimonials Slider
function startTestimonialSlider() {
  const textEl = document.getElementById("active-testimonial");
  const authorEl = document.getElementById("active-testimonial-author");
  const titleEl = document.getElementById("active-testimonial-title");

  if (!textEl || !authorEl || !titleEl) return;

  setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    const test = testimonials[currentTestimonialIndex];
    
    // Smooth transition simulation
    textEl.style.opacity = "0";
    authorEl.style.opacity = "0";
    titleEl.style.opacity = "0";

    setTimeout(() => {
      textEl.innerText = test.text;
      authorEl.innerText = test.author;
      titleEl.innerText = test.title;
      
      textEl.style.opacity = "1";
      authorEl.style.opacity = "1";
      titleEl.style.opacity = "1";
    }, 400);
  }, 6000);
}

// Scroll Reveal Observer
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05
  };

  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all static reveal elements
  document.querySelectorAll(".scroll-reveal").forEach(el => {
    scrollObserver.observe(el);
  });
}
