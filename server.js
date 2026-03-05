const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const DB_PATH = path.join(__dirname, 'data', 'db.json');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const sessions = new Map();

const seedProducts = [
  {
    id: 'p1',
    name: { en: 'Trail Running Shoes', id: 'Sepatu Lari Trail', es: 'Zapatillas de Trail Running' },
    description: {
      en: 'High-performance trail runners with superior grip and breathable mesh upper. Perfect for off-road adventures and daily training.',
      id: 'Sepatu trail performa tinggi dengan grip superior dan mesh breathable. Sempurna untuk petualangan off-road dan latihan harian.',
      es: 'Zapatillas de trail de alto rendimiento con agarre superior y malla transpirable. Perfectas para aventuras todoterreno.'
    },
    price: 89, stock: 20, category: 'footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'p2',
    name: { en: 'Minimal Leather Wallet', id: 'Dompet Kulit Minimalis', es: 'Billetera de Cuero Minimalista' },
    description: {
      en: 'Slim RFID-blocking genuine leather wallet. Holds up to 8 cards and fits comfortably in any pocket.',
      id: 'Dompet kulit asli tipis dengan pemblokir RFID. Menampung hingga 8 kartu dan nyaman di saku manapun.',
      es: 'Billetera delgada de cuero genuino con bloqueo RFID. Cabe hasta 8 tarjetas y entra en cualquier bolsillo.'
    },
    price: 35, stock: 45, category: 'accessories',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'p3',
    name: { en: 'Wireless Headphones', id: 'Headphone Nirkabel', es: 'Auriculares Inalámbricos' },
    description: {
      en: 'Premium over-ear wireless headphones with active noise cancellation and 30-hour battery life.',
      id: 'Headphone over-ear nirkabel premium dengan noise cancellation aktif dan baterai 30 jam.',
      es: 'Auriculares inalámbricos premium con cancelación de ruido activa y 30 horas de batería.'
    },
    price: 120, stock: 12, category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'p4',
    name: { en: 'Stainless Water Bottle', id: 'Botol Air Stainless', es: 'Botella de Agua de Acero' },
    description: {
      en: 'Double-walled stainless steel bottle keeps drinks cold 24h or hot 12h. BPA-free and eco-friendly.',
      id: 'Botol baja double-wall menjaga minuman dingin 24 jam atau panas 12 jam. BPA-free dan ramah lingkungan.',
      es: 'Botella de acero de doble pared mantiene bebidas frías 24h o calientes 12h. Sin BPA y ecológica.'
    },
    price: 24, stock: 60, category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'p5',
    name: { en: 'Canvas Backpack', id: 'Tas Ransel Kanvas', es: 'Mochila de Lona' },
    description: {
      en: 'Durable 30L canvas backpack with padded laptop sleeve and multiple organizer pockets for everyday carry.',
      id: 'Ransel kanvas 30L yang tahan lama dengan sleeve laptop berpadding dan banyak kantong organizer.',
      es: 'Mochila de lona resistente de 30L con compartimento acolchado para laptop y múltiples bolsillos.'
    },
    price: 65, stock: 30, category: 'accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'p6',
    name: { en: 'Smart Watch', id: 'Jam Tangan Pintar', es: 'Reloj Inteligente' },
    description: {
      en: 'Stylish smartwatch with health tracking, built-in GPS, and 7-day battery life. Water-resistant to 50m.',
      id: 'Smartwatch stylish dengan pelacak kesehatan, GPS bawaan, dan baterai 7 hari. Tahan air hingga 50m.',
      es: 'Smartwatch elegante con seguimiento de salud, GPS integrado y 7 días de batería. Resistente al agua hasta 50m.'
    },
    price: 199, stock: 15, category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'p7',
    name: { en: 'Premium Yoga Mat', id: 'Matras Yoga Premium', es: 'Esterilla de Yoga Premium' },
    description: {
      en: 'Non-slip 6mm thick yoga mat with alignment lines and carry strap. Made from eco-friendly TPE material.',
      id: 'Matras yoga non-slip tebal 6mm dengan garis alignment dan tali bawa. Terbuat dari TPE ramah lingkungan.',
      es: 'Esterilla de yoga antideslizante de 6mm con líneas de alineación y correa transportadora. De TPE ecológico.'
    },
    price: 45, stock: 25, category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1601925228028-a9eb5b7f9f91?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'p8',
    name: { en: 'Polarized Sunglasses', id: 'Kacamata Hitam Polarized', es: 'Gafas de Sol Polarizadas' },
    description: {
      en: 'UV400 polarized sunglasses with lightweight titanium frame. Perfect for outdoor sports and everyday wear.',
      id: 'Kacamata hitam polarized UV400 dengan rangka titanium ringan. Sempurna untuk olahraga outdoor dan pemakaian harian.',
      es: 'Gafas de sol polarizadas UV400 con montura de titanio ligera. Perfectas para deportes al aire libre y uso diario.'
    },
    price: 55, stock: 40, category: 'accessories',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80'
  }
];

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function createDefaultDb() {
  return {
    users: [
      {
        id: 'u_admin',
        name: 'Admin TriShop',
        email: 'admin@trishop.dev',
        passwordHash: sha256('admin123'),
        role: 'admin',
        createdAt: new Date().toISOString()
      }
    ],
    products: seedProducts,
    orders: []
  };
}

function loadDb() {
  if (!fs.existsSync(DB_PATH)) {
    const initial = createDefaultDb();
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2));
    return initial;
  }
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(raw);
}

function saveDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

let db = loadDb();

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) reject(new Error('Payload too large'));
    });
    req.on('end', () => {
      try { resolve(body ? JSON.parse(body) : {}); }
      catch { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

function getAuthUser(req) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return null;
  const token = auth.slice(7);
  const userId = sessions.get(token);
  if (!userId) return null;
  return db.users.find((u) => u.id === userId) || null;
}

function requireAuth(req, res) {
  const user = getAuthUser(req);
  if (!user) { sendJson(res, 401, { error: 'Unauthorized' }); return null; }
  return user;
}

function requireAdmin(req, res) {
  const user = requireAuth(req, res);
  if (!user) return null;
  if (user.role !== 'admin') { sendJson(res, 403, { error: 'Admin only' }); return null; }
  return user;
}

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, role: user.role };
}

function createPayment(provider, amount, orderId) {
  const p = String(provider || '').toLowerCase();
  if (p !== 'stripe' && p !== 'midtrans') throw new Error('Unsupported provider');
  return {
    provider: p,
    paymentId: `pay_${crypto.randomUUID().slice(0, 8)}`,
    amount,
    status: 'pending',
    redirectUrl: p === 'stripe'
      ? `https://checkout.stripe.com/pay/${orderId}`
      : `https://app.sandbox.midtrans.com/snap/v2/vtweb/${orderId}`
  };
}

function serveStatic(reqPath, res) {
  const normalized = reqPath === '/' ? 'index.html' : reqPath.replace(/^\/+/, '');
  const filePath = path.join(PUBLIC_DIR, normalized);
  if (!filePath.startsWith(PUBLIC_DIR)) { sendJson(res, 403, { error: 'Forbidden' }); return; }
  fs.readFile(filePath, (err, data) => {
    if (err) { sendJson(res, 404, { error: 'Not found' }); return; }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const ORDER_STATUSES = ['waiting_payment', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'];

async function handleApi(req, res, url) {
  if (url.pathname === '/api/health' && req.method === 'GET') {
    sendJson(res, 200, { status: 'ok', now: new Date().toISOString() });
    return true;
  }

  // GET /api/products — supports ?category= and ?search=
  if (url.pathname === '/api/products' && req.method === 'GET') {
    let list = db.products;
    const category = url.searchParams.get('category');
    const search = (url.searchParams.get('search') || '').toLowerCase().trim();
    if (category && category !== 'all') {
      list = list.filter((p) => p.category === category);
    }
    if (search) {
      list = list.filter((p) =>
        p.name.en.toLowerCase().includes(search) ||
        p.name.id.toLowerCase().includes(search) ||
        p.name.es.toLowerCase().includes(search)
      );
    }
    sendJson(res, 200, { products: list });
    return true;
  }

  if (url.pathname === '/api/auth/register' && req.method === 'POST') {
    const body = await parseBody(req);
    const { name, email, password } = body;
    if (!name || !email || !password || password.length < 6) {
      sendJson(res, 400, { error: 'Invalid register payload' });
      return true;
    }
    const normalizedEmail = String(email).toLowerCase().trim();
    if (db.users.find((u) => u.email === normalizedEmail)) {
      sendJson(res, 409, { error: 'Email already registered' });
      return true;
    }
    const user = {
      id: `u_${crypto.randomUUID().slice(0, 8)}`,
      name: String(name).trim(),
      email: normalizedEmail,
      passwordHash: sha256(password),
      role: 'customer',
      createdAt: new Date().toISOString()
    };
    db.users.push(user);
    saveDb(db);
    sendJson(res, 201, { user: publicUser(user) });
    return true;
  }

  if (url.pathname === '/api/auth/login' && req.method === 'POST') {
    const body = await parseBody(req);
    const email = String(body.email || '').toLowerCase().trim();
    const password = String(body.password || '');
    const user = db.users.find((u) => u.email === email && u.passwordHash === sha256(password));
    if (!user) { sendJson(res, 401, { error: 'Invalid credentials' }); return true; }
    const token = crypto.randomBytes(24).toString('hex');
    sessions.set(token, user.id);
    sendJson(res, 200, { token, user: publicUser(user) });
    return true;
  }

  if (url.pathname === '/api/auth/me' && req.method === 'GET') {
    const user = requireAuth(req, res);
    if (!user) return true;
    sendJson(res, 200, { user: publicUser(user) });
    return true;
  }

  if (url.pathname === '/api/orders/me' && req.method === 'GET') {
    const user = requireAuth(req, res);
    if (!user) return true;
    sendJson(res, 200, { orders: db.orders.filter((o) => o.userId === user.id) });
    return true;
  }

  if (url.pathname === '/api/checkout' && req.method === 'POST') {
    const user = requireAuth(req, res);
    if (!user) return true;
    const body = await parseBody(req);
    const items = Array.isArray(body.items) ? body.items : [];
    if (items.length === 0) { sendJson(res, 400, { error: 'Cart is empty' }); return true; }

    const normalizedItems = [];
    let total = 0;
    for (const item of items) {
      const product = db.products.find((p) => p.id === item.productId);
      const qty = Number(item.qty || 0);
      if (!product || qty <= 0) { sendJson(res, 400, { error: 'Invalid cart item' }); return true; }
      if (product.stock < qty) { sendJson(res, 400, { error: `Insufficient stock: ${product.name.en}` }); return true; }
      product.stock -= qty;
      normalizedItems.push({ productId: product.id, qty, price: product.price, name: product.name });
      total += product.price * qty;
    }

    try {
      const orderId = `ord_${crypto.randomUUID().slice(0, 10)}`;
      const payment = createPayment(body.provider, total, orderId);
      const order = {
        id: orderId, userId: user.id, items: normalizedItems, total, payment,
        status: 'waiting_payment', createdAt: new Date().toISOString()
      };
      db.orders.push(order);
      saveDb(db);
      sendJson(res, 201, { order });
    } catch (err) {
      sendJson(res, 400, { error: err.message });
    }
    return true;
  }

  // Admin: add product
  if (url.pathname === '/api/admin/products' && req.method === 'POST') {
    const user = requireAdmin(req, res);
    if (!user) return true;
    const body = await parseBody(req);
    const { nameEn, nameId, nameEs, descEn, descId, descEs, price, stock, image, category } = body;
    if (!nameEn || !nameId || !nameEs || Number(price) <= 0) {
      sendJson(res, 400, { error: 'Invalid product payload' }); return true;
    }
    const product = {
      id: `p_${crypto.randomUUID().slice(0, 8)}`,
      name: { en: nameEn, id: nameId, es: nameEs },
      description: {
        en: descEn || '',
        id: descId || '',
        es: descEs || ''
      },
      price: Number(price),
      stock: Number(stock || 0),
      category: category || 'accessories',
      image: image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
    };
    db.products.push(product);
    saveDb(db);
    sendJson(res, 201, { product });
    return true;
  }

  // Admin: update product
  if (url.pathname.match(/^\/api\/admin\/products\/[^/]+$/) && req.method === 'PUT') {
    const user = requireAdmin(req, res);
    if (!user) return true;
    const productId = url.pathname.split('/').pop();
    const product = db.products.find((p) => p.id === productId);
    if (!product) { sendJson(res, 404, { error: 'Product not found' }); return true; }
    const body = await parseBody(req);
    if (body.nameEn) product.name.en = body.nameEn;
    if (body.nameId) product.name.id = body.nameId;
    if (body.nameEs) product.name.es = body.nameEs;
    if (body.price != null && Number(body.price) > 0) product.price = Number(body.price);
    if (body.stock != null && Number(body.stock) >= 0) product.stock = Number(body.stock);
    if (body.image) product.image = body.image;
    if (body.category) product.category = body.category;
    saveDb(db);
    sendJson(res, 200, { product });
    return true;
  }

  // Admin: delete product
  if (url.pathname.match(/^\/api\/admin\/products\/[^/]+$/) && req.method === 'DELETE') {
    const user = requireAdmin(req, res);
    if (!user) return true;
    const productId = url.pathname.split('/').pop();
    const index = db.products.findIndex((p) => p.id === productId);
    if (index === -1) { sendJson(res, 404, { error: 'Product not found' }); return true; }
    db.products.splice(index, 1);
    saveDb(db);
    sendJson(res, 200, { ok: true });
    return true;
  }

  // Admin: get all orders
  if (url.pathname === '/api/admin/orders' && req.method === 'GET') {
    const user = requireAdmin(req, res);
    if (!user) return true;
    sendJson(res, 200, { orders: db.orders });
    return true;
  }

  // Admin: update order status
  if (url.pathname.match(/^\/api\/admin\/orders\/[^/]+$/) && req.method === 'PATCH') {
    const user = requireAdmin(req, res);
    if (!user) return true;
    const orderId = url.pathname.split('/').pop();
    const order = db.orders.find((o) => o.id === orderId);
    if (!order) { sendJson(res, 404, { error: 'Order not found' }); return true; }
    const body = await parseBody(req);
    if (!body.status || !ORDER_STATUSES.includes(body.status)) {
      sendJson(res, 400, { error: 'Invalid status' }); return true;
    }
    order.status = body.status;
    saveDb(db);
    sendJson(res, 200, { order });
    return true;
  }

  return false;
}

const server = http.createServer(async (req, res) => {
  try {
    if (!req.url) { sendJson(res, 400, { error: 'Bad request' }); return; }
    const url = new URL(req.url, `http://${req.headers.host}`);

    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
      res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE', 'Access-Control-Allow-Headers': 'Content-Type,Authorization' });
      res.end();
      return;
    }

    if (url.pathname.startsWith('/api/')) {
      const handled = await handleApi(req, res, url);
      if (!handled) sendJson(res, 404, { error: 'API route not found' });
      return;
    }

    if (req.method !== 'GET') { sendJson(res, 405, { error: 'Method not allowed' }); return; }
    serveStatic(url.pathname, res);
  } catch (err) {
    sendJson(res, 500, { error: err.message || 'Internal server error' });
  }
});

server.listen(PORT, () => {
  console.log(`\n  TriShop running at http://localhost:${PORT}`);
  console.log('  Admin: admin@trishop.dev / admin123\n');
});
