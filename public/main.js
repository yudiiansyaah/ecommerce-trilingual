/* ============================================================
   TRISHOP — Main JS
   ============================================================ */

// ── i18n dictionary ────────────────────────────────────────
const dict = {
  en: {
    heroBadge: 'New Arrivals Every Week',
    headline: 'Discover Products You\'ll Love',
    subtitle: 'Premium quality products, delivered worldwide. Shop in your language.',
    shopNow: 'Shop Now',
    productsTitle: 'Our Products',
    cartTitle: 'Your Cart',
    totalLabel: 'Total',
    paymentLabel: 'Payment Provider',
    checkoutBtn: 'Checkout',
    checkoutHint: 'Login required to checkout.',
    myOrdersTitle: 'My Orders',
    adminTitle: 'Admin Dashboard',
    addProductHeading: 'Add New Product',
    addProductBtn: 'Add Product',
    priceLabel: 'Price (USD)',
    stockLabel: 'Stock',
    categoryLabel: 'Category',
    adminProductsTitle: 'Manage Products',
    adminOrdersTitle: 'All Orders',
    addToCart: 'Add to Cart',
    quickView: 'Quick View',
    outOfStock: 'Out of Stock',
    stock: 'In stock',
    noResults: 'No products found for your search.',
    noOrders: 'You haven\'t placed any orders yet.',
    loginBtn: 'Login',
    tabLogin: 'Login',
    tabRegister: 'Register',
    passwordLabel: 'Password',
    passwordMinLabel: 'Password (min. 6 chars)',
    fullNameLabel: 'Full Name',
    loginSubmitBtn: 'Sign In',
    registerSubmitBtn: 'Create Account',
    logoutBtn: 'Log Out',
    adminHint: 'Admin demo: admin@trishop.dev / admin123',
    dropOrders: 'My Orders',
    dropAdmin: 'Admin Panel',
    catAll: 'All',
    catFootwear: 'Footwear',
    catElectronics: 'Electronics',
    catAccessories: 'Accessories',
    catLifestyle: 'Lifestyle',
    statusWaiting: 'Waiting Payment',
    statusPaid: 'Paid',
    statusProcessing: 'Processing',
    statusShipped: 'Shipped',
    statusDelivered: 'Delivered',
    statusCancelled: 'Cancelled',
    orderTotal: 'Total',
    viewPayment: 'View Payment',
    footerTagline: 'Quality products. Global delivery.',
    footerShop: 'Shop',
    footerAllProducts: 'All Products',
    footerElectronics: 'Electronics',
    footerAccessories: 'Accessories',
    footerSupport: 'Support',
    footerFaq: 'FAQ',
    footerContact: 'Contact Us',
    footerReturns: 'Returns & Refunds',
    footerCopyright: '© 2026 TriShop. All rights reserved.',
    toastOrdered: 'Order placed successfully!',
    toastAdded: 'Added to cart!',
    toastRegistered: 'Account created! Please sign in.',
    toastLoggedIn: 'Welcome back',
    toastLoggedOut: 'See you next time!',
    toastProductAdded: 'Product added to catalog.',
    toastProductDeleted: 'Product deleted.',
    deleteConfirm: 'Delete this product?',
    updateStatus: 'Update',
    addedToCart: 'added to cart'
  },
  id: {
    heroBadge: 'Produk Baru Setiap Minggu',
    headline: 'Temukan Produk yang Anda Sukai',
    subtitle: 'Produk kualitas premium, dikirim ke seluruh dunia. Belanja dalam bahasa Anda.',
    shopNow: 'Belanja Sekarang',
    productsTitle: 'Produk Kami',
    cartTitle: 'Keranjang Anda',
    totalLabel: 'Total',
    paymentLabel: 'Penyedia Pembayaran',
    checkoutBtn: 'Checkout',
    checkoutHint: 'Login diperlukan untuk checkout.',
    myOrdersTitle: 'Pesanan Saya',
    adminTitle: 'Dashboard Admin',
    addProductHeading: 'Tambah Produk Baru',
    addProductBtn: 'Tambah Produk',
    priceLabel: 'Harga (USD)',
    stockLabel: 'Stok',
    categoryLabel: 'Kategori',
    adminProductsTitle: 'Kelola Produk',
    adminOrdersTitle: 'Semua Pesanan',
    addToCart: 'Tambah ke Keranjang',
    quickView: 'Lihat Cepat',
    outOfStock: 'Stok Habis',
    stock: 'Tersedia',
    noResults: 'Tidak ada produk yang ditemukan.',
    noOrders: 'Anda belum melakukan pesanan.',
    loginBtn: 'Masuk',
    tabLogin: 'Masuk',
    tabRegister: 'Daftar',
    passwordLabel: 'Kata Sandi',
    passwordMinLabel: 'Kata Sandi (min. 6 karakter)',
    fullNameLabel: 'Nama Lengkap',
    loginSubmitBtn: 'Masuk',
    registerSubmitBtn: 'Buat Akun',
    logoutBtn: 'Keluar',
    adminHint: 'Demo admin: admin@trishop.dev / admin123',
    dropOrders: 'Pesanan Saya',
    dropAdmin: 'Panel Admin',
    catAll: 'Semua',
    catFootwear: 'Sepatu',
    catElectronics: 'Elektronik',
    catAccessories: 'Aksesoris',
    catLifestyle: 'Gaya Hidup',
    statusWaiting: 'Menunggu Pembayaran',
    statusPaid: 'Dibayar',
    statusProcessing: 'Diproses',
    statusShipped: 'Dikirim',
    statusDelivered: 'Diterima',
    statusCancelled: 'Dibatalkan',
    orderTotal: 'Total',
    viewPayment: 'Lihat Pembayaran',
    footerTagline: 'Produk berkualitas. Pengiriman global.',
    footerShop: 'Belanja',
    footerAllProducts: 'Semua Produk',
    footerElectronics: 'Elektronik',
    footerAccessories: 'Aksesoris',
    footerSupport: 'Dukungan',
    footerFaq: 'FAQ',
    footerContact: 'Hubungi Kami',
    footerReturns: 'Pengembalian & Refund',
    footerCopyright: '© 2026 TriShop. Semua hak dilindungi.',
    toastOrdered: 'Pesanan berhasil dibuat!',
    toastAdded: 'Ditambahkan ke keranjang!',
    toastRegistered: 'Akun dibuat! Silakan masuk.',
    toastLoggedIn: 'Selamat datang kembali',
    toastLoggedOut: 'Sampai jumpa!',
    toastProductAdded: 'Produk berhasil ditambahkan.',
    toastProductDeleted: 'Produk dihapus.',
    deleteConfirm: 'Hapus produk ini?',
    updateStatus: 'Perbarui',
    addedToCart: 'ditambahkan ke keranjang'
  },
  es: {
    heroBadge: 'Novedades Cada Semana',
    headline: 'Descubre Productos que Amarás',
    subtitle: 'Productos de calidad premium, entregados en todo el mundo. Compra en tu idioma.',
    shopNow: 'Comprar Ahora',
    productsTitle: 'Nuestros Productos',
    cartTitle: 'Tu Carrito',
    totalLabel: 'Total',
    paymentLabel: 'Proveedor de Pago',
    checkoutBtn: 'Pagar',
    checkoutHint: 'Inicia sesión para pagar.',
    myOrdersTitle: 'Mis Pedidos',
    adminTitle: 'Panel de Administración',
    addProductHeading: 'Agregar Nuevo Producto',
    addProductBtn: 'Agregar Producto',
    priceLabel: 'Precio (USD)',
    stockLabel: 'Stock',
    categoryLabel: 'Categoría',
    adminProductsTitle: 'Gestionar Productos',
    adminOrdersTitle: 'Todos los Pedidos',
    addToCart: 'Agregar al Carrito',
    quickView: 'Vista Rápida',
    outOfStock: 'Sin Stock',
    stock: 'Disponible',
    noResults: 'No se encontraron productos.',
    noOrders: 'No has realizado ningún pedido aún.',
    loginBtn: 'Iniciar Sesión',
    tabLogin: 'Iniciar Sesión',
    tabRegister: 'Registrarse',
    passwordLabel: 'Contraseña',
    passwordMinLabel: 'Contraseña (mín. 6 caracteres)',
    fullNameLabel: 'Nombre Completo',
    loginSubmitBtn: 'Entrar',
    registerSubmitBtn: 'Crear Cuenta',
    logoutBtn: 'Cerrar Sesión',
    adminHint: 'Demo admin: admin@trishop.dev / admin123',
    dropOrders: 'Mis Pedidos',
    dropAdmin: 'Panel Admin',
    catAll: 'Todos',
    catFootwear: 'Calzado',
    catElectronics: 'Electrónica',
    catAccessories: 'Accesorios',
    catLifestyle: 'Estilo de Vida',
    statusWaiting: 'Esperando Pago',
    statusPaid: 'Pagado',
    statusProcessing: 'Procesando',
    statusShipped: 'Enviado',
    statusDelivered: 'Entregado',
    statusCancelled: 'Cancelado',
    orderTotal: 'Total',
    viewPayment: 'Ver Pago',
    footerTagline: 'Productos de calidad. Entrega global.',
    footerShop: 'Tienda',
    footerAllProducts: 'Todos los Productos',
    footerElectronics: 'Electrónica',
    footerAccessories: 'Accesorios',
    footerSupport: 'Soporte',
    footerFaq: 'Preguntas Frecuentes',
    footerContact: 'Contáctanos',
    footerReturns: 'Devoluciones y Reembolsos',
    footerCopyright: '© 2026 TriShop. Todos los derechos reservados.',
    toastOrdered: '¡Pedido realizado con éxito!',
    toastAdded: '¡Agregado al carrito!',
    toastRegistered: '¡Cuenta creada! Por favor inicia sesión.',
    toastLoggedIn: 'Bienvenido de nuevo',
    toastLoggedOut: '¡Hasta pronto!',
    toastProductAdded: 'Producto agregado al catálogo.',
    toastProductDeleted: 'Producto eliminado.',
    deleteConfirm: '¿Eliminar este producto?',
    updateStatus: 'Actualizar',
    addedToCart: 'agregado al carrito'
  }
};

const statusMap = {
  en: { waiting_payment:'Waiting Payment', paid:'Paid', processing:'Processing', shipped:'Shipped', delivered:'Delivered', cancelled:'Cancelled' },
  id: { waiting_payment:'Menunggu Pembayaran', paid:'Dibayar', processing:'Diproses', shipped:'Dikirim', delivered:'Diterima', cancelled:'Dibatalkan' },
  es: { waiting_payment:'Esperando Pago', paid:'Pagado', processing:'Procesando', shipped:'Enviado', delivered:'Entregado', cancelled:'Cancelado' }
};

const categories = ['all', 'footwear', 'electronics', 'accessories', 'lifestyle'];
const catKeys = { all:'catAll', footwear:'catFootwear', electronics:'catElectronics', accessories:'catAccessories', lifestyle:'catLifestyle' };

// ── State ───────────────────────────────────────────────────
let lang = localStorage.getItem('trishop_lang') || 'en';
let products = [];
const cart = {};
let token = localStorage.getItem('trishop_token') || '';
let user = null;
let myOrders = [];
let adminOrdersData = [];
let activeCategory = 'all';
let searchQuery = '';

// ── Helpers ─────────────────────────────────────────────────
const t = () => dict[lang];

function fmtMoney(v) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v);
}

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString(lang === 'id' ? 'id-ID' : lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Toast ───────────────────────────────────────────────────
function toast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = msg;
  container.appendChild(el);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => el.classList.add('show'));
  });
  setTimeout(() => {
    el.classList.remove('show');
    el.addEventListener('transitionend', () => el.remove(), { once: true });
  }, 3500);
}

// ── API ─────────────────────────────────────────────────────
async function api(path, options = {}) {
  const headers = { ...(options.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (options.body && !headers['Content-Type']) headers['Content-Type'] = 'application/json';
  const res = await fetch(path, { ...options, headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

// ── Cart Badge ──────────────────────────────────────────────
function updateCartBadge() {
  const total = Object.values(cart).reduce((s, q) => s + q, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.classList.toggle('hidden', total === 0);
}

// ── Cart Drawer ─────────────────────────────────────────────
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

// ── Auth Modal ──────────────────────────────────────────────
function openAuthModal(tab = 'login') {
  const modal = document.getElementById('authModal');
  modal.classList.remove('hidden');
  switchTab(tab);
}

function closeAuthModal() {
  document.getElementById('authModal').classList.add('hidden');
}

function switchTab(tab) {
  document.getElementById('loginPane').classList.toggle('hidden', tab !== 'login');
  document.getElementById('registerPane').classList.toggle('hidden', tab !== 'register');
  document.getElementById('tabLoginBtn').classList.toggle('active', tab === 'login');
  document.getElementById('tabRegisterBtn').classList.toggle('active', tab !== 'login');
}

// ── Product Modal ───────────────────────────────────────────
function openProductModal(product) {
  const m = t();
  const content = document.getElementById('productModalContent');
  const isOut = product.stock === 0;
  const cartQty = cart[product.id] || 0;

  content.innerHTML = `
    <div class="product-modal-inner">
      <img class="product-modal-img" src="${escHtml(product.image)}" alt="${escHtml(product.name[lang])}" loading="lazy" />
      <div class="product-modal-info">
        <div class="product-modal-category">${escHtml(product.category || '')}</div>
        <h2 class="product-modal-name">${escHtml(product.name[lang])}</h2>
        <p class="product-modal-desc">${escHtml((product.description || {})[lang] || '')}</p>
        <div class="product-modal-price">${fmtMoney(product.price)}</div>
        <div class="product-modal-stock">
          <span class="stock-dot ${isOut ? 'out' : product.stock <= 5 ? 'low' : ''}"></span>
          ${isOut ? escHtml(m.outOfStock) : `${product.stock} ${escHtml(m.stock)}`}
        </div>
        <div class="modal-qty-row">
          <button
            class="btn btn-primary"
            id="modalAddBtn"
            ${isOut ? 'disabled' : ''}
            onclick="addToCartFromModal('${product.id}')"
          >${escHtml(m.addToCart)}</button>
          ${cartQty > 0 ? `<span style="font-size:13px;color:var(--muted)">${cartQty} ${escHtml(m.addedToCart)}</span>` : ''}
        </div>
      </div>
    </div>
  `;
  document.getElementById('productModal').classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('productModal').classList.add('hidden');
}

function addToCartFromModal(id) {
  const p = products.find(x => x.id === id);
  if (!p || p.stock === 0) return;
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  updateCartBadge();
  toast(`${p.name[lang]} ${t().addedToCart}`);
  closeProductModal();
  openCart();
}

// ── Translations ────────────────────────────────────────────
function applyTranslations() {
  const m = t();
  const setText = (id, key) => { const el = document.getElementById(id); if (el) el.textContent = m[key] || ''; };

  setText('heroBadge', 'heroBadge');
  setText('headline', 'headline');
  setText('subtitle', 'subtitle');
  setText('heroShopBtn', 'shopNow');
  setText('productsTitle', 'productsTitle');
  setText('cartTitle', 'cartTitle');
  setText('totalLabel', 'totalLabel');
  setText('paymentLabel', 'paymentLabel');
  setText('checkoutBtn', 'checkoutBtn');
  setText('checkoutHint', 'checkoutHint');
  setText('myOrdersTitle', 'myOrdersTitle');
  setText('adminTitle', 'adminTitle');
  setText('addProductHeading', 'addProductHeading');
  setText('addProductBtn', 'addProductBtn');
  setText('priceLabel', 'priceLabel');
  setText('stockLabel', 'stockLabel');
  setText('categoryLabel', 'categoryLabel');
  setText('adminProductsTitle', 'adminProductsTitle');
  setText('adminOrdersTitle', 'adminOrdersTitle');
  setText('tabLoginBtn', 'tabLogin');
  setText('tabRegisterBtn', 'tabRegister');
  setText('passwordLabel', 'passwordLabel');
  setText('passwordMinLabel', 'passwordMinLabel');
  setText('fullNameLabel', 'fullNameLabel');
  setText('loginSubmitBtn', 'loginSubmitBtn');
  setText('registerSubmitBtn', 'registerSubmitBtn');
  setText('logoutBtn', 'logoutBtn');
  setText('adminHint', 'adminHint');
  setText('dropOrdersBtn', 'dropOrders');
  setText('dropAdminBtn', 'dropAdmin');
  setText('loginTriggerBtn', 'loginBtn');
  setText('footerTagline', 'footerTagline');
  setText('footerShopHeading', 'footerShop');
  setText('footerAllProducts', 'footerAllProducts');
  setText('footerElectronics', 'footerElectronics');
  setText('footerAccessories', 'footerAccessories');
  setText('footerSupportHeading', 'footerSupport');
  setText('footerFaq', 'footerFaq');
  setText('footerContact', 'footerContact');
  setText('footerReturns', 'footerReturns');
  setText('footerCopyright', 'footerCopyright');
  setText('noResultsText', 'noResults');

  // search placeholder
  const si = document.getElementById('searchInput');
  if (si) si.placeholder = lang === 'id' ? 'Cari produk...' : lang === 'es' ? 'Buscar productos...' : 'Search products...';

  // lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // user area
  const loginArea = document.getElementById('userArea');
  const dropArea = document.getElementById('userDropdownArea');
  if (user) {
    loginArea.classList.add('hidden');
    dropArea.classList.remove('hidden');
    const nameDisplay = document.getElementById('userNameDisplay');
    const dropName = document.getElementById('dropUserName');
    const dropRole = document.getElementById('dropUserRole');
    if (nameDisplay) nameDisplay.textContent = user.name.split(' ')[0];
    if (dropName) dropName.textContent = user.name;
    if (dropRole) dropRole.textContent = user.role;
    // admin items
    document.querySelectorAll('.admin-only').forEach(el => {
      el.classList.toggle('hidden', user.role !== 'admin');
    });
  } else {
    loginArea.classList.remove('hidden');
    dropArea.classList.add('hidden');
  }

  // admin section
  const adminSection = document.getElementById('adminSection');
  if (adminSection) adminSection.classList.toggle('hidden', !user || user.role !== 'admin');

  renderCategoryPills();
  renderProducts();
  renderCart();
  renderMyOrders();
  renderAdminProducts();
  renderAdminOrders();
}

// ── Category Pills ──────────────────────────────────────────
function renderCategoryPills() {
  const m = t();
  const container = document.getElementById('categoryPills');
  if (!container) return;
  container.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `pill${activeCategory === cat ? ' active' : ''}`;
    btn.textContent = m[catKeys[cat]] || cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      renderCategoryPills();
      renderProducts();
    });
    container.appendChild(btn);
  });
}

// ── Products ────────────────────────────────────────────────
function getFilteredProducts() {
  let list = products;
  if (activeCategory !== 'all') list = list.filter(p => p.category === activeCategory);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.en.toLowerCase().includes(q) ||
      p.name.id.toLowerCase().includes(q) ||
      p.name.es.toLowerCase().includes(q)
    );
  }
  return list;
}

function renderProducts() {
  const m = t();
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  const list = getFilteredProducts();
  grid.innerHTML = '';

  if (list.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  list.forEach(p => {
    const isOut = p.stock === 0;
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${escHtml(p.image)}" alt="${escHtml(p.name[lang])}" loading="lazy" />
        <div class="product-overlay">
          <button class="btn btn-white btn-sm quick-view-btn" data-id="${escHtml(p.id)}">${escHtml(m.quickView)}</button>
        </div>
        <span class="product-cat-badge">${escHtml(p.category || '')}</span>
        ${isOut ? `<div class="out-of-stock-banner"><span>${escHtml(m.outOfStock)}</span></div>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${escHtml(p.name[lang])}</h3>
        <p class="product-desc-short">${escHtml((p.description || {})[lang] || '')}</p>
        <div class="product-bottom">
          <div>
            <div class="product-price">${fmtMoney(p.price)}</div>
            <div class="product-stock-text">${isOut ? escHtml(m.outOfStock) : `${p.stock} ${escHtml(m.stock)}`}</div>
          </div>
          <button class="add-to-cart-btn" data-id="${escHtml(p.id)}" title="${escHtml(m.addToCart)}" ${isOut ? 'disabled' : ''}>+</button>
        </div>
      </div>
    `;

    card.querySelector('.quick-view-btn').addEventListener('click', e => {
      e.stopPropagation();
      openProductModal(p);
    });

    card.querySelector('.add-to-cart-btn').addEventListener('click', e => {
      e.stopPropagation();
      if (isOut) return;
      cart[p.id] = (cart[p.id] || 0) + 1;
      renderCart();
      updateCartBadge();
      toast(`${p.name[lang]} ${m.addedToCart}`);
    });

    card.addEventListener('click', () => openProductModal(p));
    grid.appendChild(card);
  });
}

async function loadProducts() {
  const data = await api('/api/products');
  products = data.products;
  renderProducts();
  renderAdminProducts();
}

// ── Cart Render ─────────────────────────────────────────────
function renderCart() {
  const m = t();
  const itemsEl = document.getElementById('cartItems');
  if (!itemsEl) return;

  const entries = Object.entries(cart).filter(([id]) => products.find(p => p.id === id));

  if (entries.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <p>${escHtml(m.cartTitle)}</p>
      </div>
    `;
    document.getElementById('totalPrice').textContent = fmtMoney(0);
    return;
  }

  let total = 0;
  itemsEl.innerHTML = '';

  entries.forEach(([id, qty]) => {
    const p = products.find(x => x.id === id);
    if (!p) return;
    total += p.price * qty;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img class="cart-item-img" src="${escHtml(p.image)}" alt="${escHtml(p.name[lang])}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(p.name[lang])}</div>
        <div class="cart-item-price">${fmtMoney(p.price)} each</div>
      </div>
      <div class="qty-control">
        <button class="qty-btn" data-id="${escHtml(id)}" data-delta="-1">−</button>
        <span class="qty-value">${qty}</span>
        <button class="qty-btn" data-id="${escHtml(id)}" data-delta="1">+</button>
      </div>
    `;
    itemsEl.appendChild(row);
  });

  itemsEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const delta = Number(btn.dataset.delta);
      const next = (cart[id] || 0) + delta;
      if (next <= 0) delete cart[id];
      else cart[id] = next;
      renderCart();
      updateCartBadge();
    });
  });

  document.getElementById('totalPrice').textContent = fmtMoney(total);
}

// ── My Orders ───────────────────────────────────────────────
function renderMyOrders() {
  const m = t();
  const container = document.getElementById('myOrders');
  if (!container) return;

  if (!user) {
    container.innerHTML = `<p class="hint-text">${escHtml(m.checkoutHint)}</p>`;
    return;
  }
  if (myOrders.length === 0) {
    container.innerHTML = `<p class="hint-text">${escHtml(m.noOrders)}</p>`;
    return;
  }

  container.innerHTML = '';
  [...myOrders].reverse().forEach(o => {
    const statusLabel = (statusMap[lang] || statusMap.en)[o.status] || o.status;
    const card = document.createElement('div');
    card.className = 'order-card';
    const itemList = o.items.map(item =>
      `<div class="order-item-row"><span>${escHtml(item.name[lang] || item.name.en)} × ${item.qty}</span><span>${fmtMoney(item.price * item.qty)}</span></div>`
    ).join('');

    card.innerHTML = `
      <div class="order-card-header">
        <div>
          <div class="order-id">#${escHtml(o.id)}</div>
          <div class="order-date">${fmtDate(o.createdAt)}</div>
        </div>
        <span class="status-badge status-${escHtml(o.status)}">${escHtml(statusLabel)}</span>
      </div>
      <div class="order-body">${itemList}</div>
      <div class="order-footer">
        <span class="order-provider">${escHtml(o.payment.provider)}</span>
        <span class="order-total">${fmtMoney(o.total)}</span>
        <a href="${escHtml(o.payment.redirectUrl)}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm order-view-btn">${escHtml(m.viewPayment)}</a>
      </div>
    `;
    container.appendChild(card);
  });
}

async function loadMyOrders() {
  if (!token) { myOrders = []; renderMyOrders(); return; }
  try {
    const data = await api('/api/orders/me');
    myOrders = data.orders;
    renderMyOrders();
  } catch { myOrders = []; renderMyOrders(); }
}

// ── Admin Products ──────────────────────────────────────────
function renderAdminProducts() {
  const container = document.getElementById('adminProducts');
  if (!container || !user || user.role !== 'admin') return;
  container.innerHTML = '';

  if (products.length === 0) {
    container.innerHTML = '<p class="hint-text">No products yet.</p>';
    return;
  }

  products.forEach(p => {
    const row = document.createElement('div');
    row.className = 'admin-row';
    row.innerHTML = `
      <img class="admin-row-thumb" src="${escHtml(p.image)}" alt="${escHtml(p.name.en)}" />
      <div class="admin-row-info">
        <div class="admin-row-name">${escHtml(p.name.en)}</div>
        <div class="admin-row-meta">${fmtMoney(p.price)} · ${p.stock} stock · ${escHtml(p.category || '')}</div>
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-danger btn-sm del-btn" data-del="${escHtml(p.id)}">✕</button>
      </div>
    `;
    row.querySelector('.del-btn').addEventListener('click', async () => {
      if (!confirm(t().deleteConfirm)) return;
      try {
        await api(`/api/admin/products/${p.id}`, { method: 'DELETE' });
        delete cart[p.id];
        updateCartBadge();
        await loadProducts();
        toast(t().toastProductDeleted, 'info');
      } catch (err) { toast(err.message, 'error'); }
    });
    container.appendChild(row);
  });
}

// ── Admin Orders ────────────────────────────────────────────
function renderAdminOrders() {
  const container = document.getElementById('adminOrders');
  if (!container || !user || user.role !== 'admin') return;
  container.innerHTML = '';

  if (adminOrdersData.length === 0) {
    container.innerHTML = '<p class="hint-text">No orders yet.</p>';
    return;
  }

  const m = t();
  const statuses = ['waiting_payment', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'];

  [...adminOrdersData].reverse().forEach(o => {
    const statusLabel = (statusMap[lang] || statusMap.en)[o.status] || o.status;
    const row = document.createElement('div');
    row.className = 'admin-row';

    const optionsHtml = statuses.map(s =>
      `<option value="${s}" ${o.status === s ? 'selected' : ''}>${(statusMap[lang] || statusMap.en)[s] || s}</option>`
    ).join('');

    row.innerHTML = `
      <div class="admin-row-info">
        <div class="admin-row-name">#${escHtml(o.id)}</div>
        <div class="admin-row-meta">${fmtMoney(o.total)} · ${escHtml(o.payment.provider)} · ${fmtDate(o.createdAt)}</div>
      </div>
      <div class="admin-row-actions" style="gap:6px">
        <span class="status-badge status-${escHtml(o.status)}">${escHtml(statusLabel)}</span>
        <select class="status-select" data-order="${escHtml(o.id)}">${optionsHtml}</select>
        <button class="btn btn-primary btn-sm upd-btn" data-order="${escHtml(o.id)}">${escHtml(m.updateStatus)}</button>
      </div>
    `;

    row.querySelector('.upd-btn').addEventListener('click', async () => {
      const sel = row.querySelector('.status-select');
      const newStatus = sel.value;
      try {
        await api(`/api/admin/orders/${o.id}`, { method: 'PATCH', body: JSON.stringify({ status: newStatus }) });
        await loadAdminOrders();
        await loadMyOrders();
        toast(`Order ${o.id} → ${newStatus}`, 'info');
      } catch (err) { toast(err.message, 'error'); }
    });

    container.appendChild(row);
  });
}

async function loadAdminOrders() {
  if (!user || user.role !== 'admin') { adminOrdersData = []; renderAdminOrders(); return; }
  try {
    const data = await api('/api/admin/orders');
    adminOrdersData = data.orders;
    renderAdminOrders();
  } catch (err) { toast(err.message, 'error'); }
}

// ── Session ─────────────────────────────────────────────────
async function refreshSession() {
  if (!token) { user = null; applyTranslations(); return; }
  try {
    const data = await api('/api/auth/me');
    user = data.user;
  } catch {
    token = '';
    localStorage.removeItem('trishop_token');
    user = null;
  }
  applyTranslations();
  await loadMyOrders();
  await loadAdminOrders();
}

// ── Events ──────────────────────────────────────────────────
function bindEvents() {
  // Language
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      localStorage.setItem('trishop_lang', lang);
      applyTranslations();
    });
  });

  // Hero shop button
  document.getElementById('heroShopBtn')?.addEventListener('click', () => {
    document.getElementById('shopSection')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Search
  document.getElementById('searchInput')?.addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    renderProducts();
  });

  // Cart toggle
  document.getElementById('cartToggleBtn')?.addEventListener('click', openCart);
  document.getElementById('cartCloseBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  // Auth modal
  document.getElementById('loginTriggerBtn')?.addEventListener('click', () => openAuthModal('login'));
  document.getElementById('authModalClose')?.addEventListener('click', closeAuthModal);
  document.getElementById('authModal')?.addEventListener('click', e => {
    if (e.target === document.getElementById('authModal')) closeAuthModal();
  });
  document.getElementById('tabLoginBtn')?.addEventListener('click', () => switchTab('login'));
  document.getElementById('tabRegisterBtn')?.addEventListener('click', () => switchTab('register'));

  // Product modal
  document.getElementById('productModalClose')?.addEventListener('click', closeProductModal);
  document.getElementById('productModal')?.addEventListener('click', e => {
    if (e.target === document.getElementById('productModal')) closeProductModal();
  });

  // User dropdown
  document.getElementById('userAvatarBtn')?.addEventListener('click', () => {
    document.getElementById('userDropdown')?.classList.toggle('hidden');
  });
  document.addEventListener('click', e => {
    const wrap = document.getElementById('userDropdownArea');
    if (wrap && !wrap.contains(e.target)) {
      document.getElementById('userDropdown')?.classList.add('hidden');
    }
  });

  // Dropdown actions
  document.getElementById('dropOrdersBtn')?.addEventListener('click', () => {
    document.getElementById('userDropdown')?.classList.add('hidden');
    document.getElementById('ordersSection')?.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('dropAdminBtn')?.addEventListener('click', () => {
    document.getElementById('userDropdown')?.classList.add('hidden');
    document.getElementById('adminSection')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Logout
  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    token = '';
    user = null;
    myOrders = [];
    adminOrdersData = [];
    localStorage.removeItem('trishop_token');
    document.getElementById('userDropdown')?.classList.add('hidden');
    applyTranslations();
    toast(t().toastLoggedOut, 'info');
  });

  // Login form
  document.getElementById('loginForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const payload = {
      email: document.getElementById('loginEmail').value,
      password: document.getElementById('loginPassword').value
    };
    try {
      const data = await api('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) });
      token = data.token;
      localStorage.setItem('trishop_token', token);
      document.getElementById('loginForm').reset();
      closeAuthModal();
      await refreshSession();
      toast(`${t().toastLoggedIn}, ${data.user.name.split(' ')[0]}!`);
    } catch (err) { toast(err.message, 'error'); }
  });

  // Register form
  document.getElementById('registerForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const payload = {
      name: document.getElementById('regName').value,
      email: document.getElementById('regEmail').value,
      password: document.getElementById('regPassword').value
    };
    try {
      await api('/api/auth/register', { method: 'POST', body: JSON.stringify(payload) });
      document.getElementById('registerForm').reset();
      toast(t().toastRegistered);
      switchTab('login');
    } catch (err) { toast(err.message, 'error'); }
  });

  // Checkout
  document.getElementById('checkoutBtn')?.addEventListener('click', async () => {
    if (!token) { toast(t().checkoutHint, 'warn'); openAuthModal('login'); return; }
    const items = Object.entries(cart).map(([productId, qty]) => ({ productId, qty }));
    if (items.length === 0) { toast('Cart is empty', 'warn'); return; }
    try {
      const data = await api('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ items, provider: document.getElementById('provider').value })
      });
      Object.keys(cart).forEach(k => delete cart[k]);
      renderCart();
      updateCartBadge();
      await loadProducts();
      await loadMyOrders();
      await loadAdminOrders();
      closeCart();
      toast(t().toastOrdered);
    } catch (err) { toast(err.message, 'error'); }
  });

  // Add product form
  document.getElementById('addProductForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const payload = {
      nameEn: document.getElementById('pNameEn').value,
      nameId: document.getElementById('pNameId').value,
      nameEs: document.getElementById('pNameEs').value,
      price: Number(document.getElementById('pPrice').value),
      stock: Number(document.getElementById('pStock').value),
      category: document.getElementById('pCategory').value,
      image: document.getElementById('pImage').value
    };
    try {
      await api('/api/admin/products', { method: 'POST', body: JSON.stringify(payload) });
      document.getElementById('addProductForm').reset();
      await loadProducts();
      toast(t().toastProductAdded);
    } catch (err) { toast(err.message, 'error'); }
  });

  // Keyboard: close modals on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeAuthModal();
      closeProductModal();
      closeCart();
    }
  });

  // Header shrink on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── Init ─────────────────────────────────────────────────────
async function init() {
  bindEvents();
  applyTranslations();
  await loadProducts();
  await refreshSession();
}

init().catch(err => toast(err.message, 'error'));
