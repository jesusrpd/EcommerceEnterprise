'use client'

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link'

const StorePage = () => {
  // Estado para simular productos en el carrito o favoritos
  const [cartCount, setCartCount] = useState(2);
  const [favCount, setFavCount] = useState(5);

  // Datos simulados de productos Premium
  const products = [
    { id: 1, name: 'Enterprise Quantum Watch', price: '$1,299.00', category: 'Wearables', img: '/p1.png', tag: 'Hot' },
    { id: 2, name: 'Neural Sound Pro Headphones', price: '$549.50', category: 'Audio', img: '/p2.png', tag: 'Luxury' },
    { id: 3, name: 'CyberSphere Cybernetic Backpack', price: '$320.00', category: 'Accesorios', img: '/p3.png', tag: 'New' },
    { id: 4, name: 'Apex Ledger Hardware Wallet', price: '$189.00', category: 'Seguridad', img: '/p4.png', tag: 'Secure' },
  ];

  return (
    <>
      <Head>
        <title>Inicio | EcommerceEnterprise Store</title>
      </Head>

      {/* Contenedor Principal con el fondo morado tecnológico oscuro */}
      <div className="min-h-screen bg-[#0b0817] text-gray-200 font-sans relative overflow-x-hidden">
        {/* Luces de neón decorativas difuminadas en el fondo */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none"></div>

        {/* ================= HEADER / NAV BAR (Glassmorphism) ================= */}
        <header className="sticky top-0 z-50 w-full bg-[#16132b]/75 backdrop-blur-md border-b border-purple-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            
            {/* Logo e Identidad con Tipografía Elegante */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/40">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-white font-serif">
                Ecommerce<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-sans font-semibold">Enterprise</span>
              </h1>
            </div>

            {/* Barra de Búsqueda Avanzada e Inmersiva */}
            <div className="hidden md:flex flex-1 max-w-md relative mx-4">
              <input 
                type="text" 
                placeholder="Busca productos exclusivos, categorías..." 
                className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200 text-sm"
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-4 top-3 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.602z" />
              </svg>
            </div>

            {/* Navegación y Botones de Acción */}
            <nav className="flex items-center gap-2 sm:gap-4">
              <button className="hidden lg:block text-sm font-medium text-gray-300 hover:text-purple-400 transition py-2 px-3 rounded-lg">
                Productos
              </button>
              
              <button className="hidden sm:block text-sm font-medium text-gray-300 hover:text-purple-400 transition py-2 px-3 rounded-lg">
                Mis Compras
              </button>

              {/* Botón Favoritos con Badge */}
              <Link href="/favorite" className="relative p-2.5 text-gray-400 hover:text-purple-400 transition rounded-xl hover:bg-[#1f1a3a]/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span className="absolute top-1 right-1 w-4 h-4 bg-purple-500 text-[10px] font-bold text-white rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                  {favCount}
                </span>
              </Link>

              {/* Botón Carrito con Badge */}
              <Link href="/cart" className="relative p-2.5 text-gray-400 hover:text-purple-400 transition rounded-xl hover:bg-[#1f1a3a]/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.625.625 0 11-1.25 0 .625.625 0 011.25 0zm7.5 0a.625.625 0 11-1.25 0 .625.625 0 011.25 0z" />
                </svg>
                <span className="absolute top-1 right-1 w-4 h-4 bg-indigo-500 text-[10px] font-bold text-white rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(99,102,241,0.6)]">
                  {cartCount}
                </span>
              </Link>

              <div className="h-6 w-[1px] bg-gray-700/50 mx-1 hidden sm:block"></div>

              {/* Botón de Autenticación llamativo */}
              <button className="text-xs sm:text-sm font-semibold py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-[0_4px_15px_rgba(147,51,234,0.3)] hover:from-purple-500 hover:to-indigo-500 transition duration-200 transform active:scale-95">
                Iniciar Sesión
              </button>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 relative z-10">
          
          {/* ================= BANNER PRINCIPAL HERO (Glassmorphism) ================= */}
          <section 
            className="relative w-full rounded-[2.5rem] bg-[#16132b]/50 backdrop-blur-md border border-purple-500/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 lg:p-16 items-center min-h-[450px]">
              {/* Información del Banner */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 tracking-wider uppercase">
                  Colección Enterprise 2026
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  El Futuro del Comercio <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                    Es Exclusivo e Inteligente
                  </span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  Descubre dispositivos y accesorios de nueva generación diseñados bajo estándares de alto rendimiento y elegancia corporativa. Acceso prioritario con tu cuenta Enterprise.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="w-full sm:w-auto py-3.5 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-[0_10px_25px_rgba(147,51,234,0.3)] hover:from-purple-500 hover:to-indigo-500 transform hover:-translate-y-0.5 transition duration-200 tracking-wide">
                    Explorar Catálogo
                  </button>
                  <button className="w-full sm:w-auto py-3.5 px-8 bg-[#0f0d1e]/80 border border-gray-700/60 text-gray-300 font-medium rounded-xl hover:bg-[#1b1735]/60 hover:text-white transition duration-200">
                    Ver Promociones
                  </button>
                </div>
              </div>

              {/* Contenedor de Imagen de Producto Destacado */}
              <div className="lg:col-span-5 flex justify-center z-10 relative">
                {/* Aura brillante detrás del producto del banner */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl transform scale-75"></div>
                <img 
                  src="/banner-product-3d.png" // <-- Tu imagen representativa de ecommerce 3D
                  alt="Destacado Enterprise" 
                  className="w-full max-w-sm sm:max-w-md object-contain drop-shadow-[0_20px_35px_rgba(147,51,234,0.3)] transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
            
            {/* Elemento de diseño de fondo del banner */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-indigo-600/5 to-transparent pointer-events-none"></div>
          </section>

          {/* ================= SECCIÓN DE PRODUCTOS (Cards) ================= */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-white">Productos Destacados</h3>
                <p className="text-xs sm:text-sm text-gray-500">Selección de alta gama basada en tus preferencias tecnológicas</p>
              </div>
              <a href="#" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition flex items-center gap-1">
                Ver todos 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>

            {/* Grid de Cards de Producto con Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="group relative bg-[#16132b]/40 backdrop-blur-md rounded-3xl border border-purple-500/10 p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Badge y Botón de Favorito Rápido */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-purple-500/20 border border-purple-500/30 text-purple-300 px-2.5 py-1 rounded-md">
                      {product.tag}
                    </span>
                    <button className="p-2 rounded-xl bg-[#0f0d1e]/60 border border-gray-800 text-gray-500 hover:text-pink-500 hover:border-pink-500/30 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </button>
                  </div>

                  {/* Imagen del Producto en Card */}
                  <div className="h-44 w-full flex items-center justify-center mb-4 relative rounded-2xl bg-[#0f0d1e]/40 border border-gray-900/40 overflow-hidden group-hover:bg-[#0f0d1e]/20 transition duration-300">
                    <img 
                      src={product.img} // <-- Reemplaza por las imágenes de tu catálogo
                      alt={product.name} 
                      className="max-h-36 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  {/* Contenido e Información técnica */}
                  <div className="space-y-1 mb-5">
                    <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">{product.category}</p>
                    <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition duration-200 line-clamp-1">
                      {product.name}
                    </h4>
                    <p className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                      {product.price}
                    </p>
                  </div>

                  {/* Botón de Agregar al carrito */}
                  <button className="w-full py-3 bg-[#0f0d1e]/90 border border-purple-500/20 text-gray-200 font-semibold text-sm rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:border-transparent hover:shadow-[0_8px_20px_rgba(147,51,234,0.25)] transition duration-300 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Añadir al Carrito
                  </button>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default StorePage;