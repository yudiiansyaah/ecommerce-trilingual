# TriShop Full (EN/ID/ES)

## EN
Full e-commerce demo features:
- Register/Login (token auth)
- Product catalog + cart
- Checkout simulation with Stripe or Midtrans URL
- Customer order history
- Admin dashboard: add/delete products, view all orders
- JSON file database (`data/db.json`)

Run:
```bash
cd /home/yuds/project/ecommerce-trilingual
npm start
```
Open: `http://localhost:3000`

Admin demo:
- email: `admin@trishop.dev`
- password: `admin123`

## ID
Fitur demo toko online lengkap:
- Register/Login (token auth)
- Katalog produk + keranjang
- Simulasi checkout dengan URL Stripe atau Midtrans
- Riwayat pesanan pelanggan
- Dashboard admin: tambah/hapus produk, lihat semua pesanan
- Database file JSON (`data/db.json`)

Jalankan:
```bash
cd /home/yuds/project/ecommerce-trilingual
npm start
```
Buka: `http://localhost:3000`

Admin demo:
- email: `admin@trishop.dev`
- password: `admin123`

## ES
Funciones completas del demo de e-commerce:
- Registro/Login (auth con token)
- Catalogo de productos + carrito
- Simulacion de pago con URL Stripe o Midtrans
- Historial de pedidos del cliente
- Panel admin: agregar/eliminar productos, ver todos los pedidos
- Base de datos JSON (`data/db.json`)

Ejecuta:
```bash
cd /home/yuds/project/ecommerce-trilingual
npm start
```
Abre: `http://localhost:3000`

Admin demo:
- email: `admin@trishop.dev`
- password: `admin123`

## API Ringkas
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/products`
- `POST /api/checkout`
- `GET /api/orders/me`
- `POST /api/admin/products`
- `DELETE /api/admin/products/:id`
- `GET /api/admin/orders`
