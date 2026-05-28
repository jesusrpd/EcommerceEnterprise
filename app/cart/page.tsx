'use client';

import Head from 'next/head';
import { useState } from 'react';

const CartPage = () => {
  // Datos simulados del carrito
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Enterprise Quantum Watch', category: 'Wearables', price: 1299.00, quantity: 1, img: '/p1.png' },
    { id: 2, name: 'Neural Sound Pro Headphones', category: 'Audio', price: 549.50, quantity: 2, img: '/p2.png' }
  ]);

  // Funciones simuladas
  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 25.00; // Costo simulado
  const total = subtotal + shipping;

  return (
    <>
      <Head>
        <title>Carrito | EcommerceEnterprise</title>
      </Head>

      <div className="min-h-screen bg-[#0b0817] text-gray-200 font-sans relative overflow-x-hidden py-10">
        {/* Fondo decorativo */}
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header de la vista */}
          <div className="flex items-center gap-4 mb-8">
            <button className="p-2 rounded-xl bg-[#16132b]/50 border border-purple-500/20 text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
            </button>
            <h1 className="text-3xl font-bold text-white tracking-tight">Tu Carrito</h1>
            <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              {cartItems.length} Artículos
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Lista de Productos */}
            <div className="lg:col-span-8 space-y-4">
              {cartItems.length === 0 ? (
                <div className="bg-[#16132b]/40 backdrop-blur-md rounded-3xl border border-purple-500/10 p-10 text-center text-gray-400">
                  Tu carrito está vacío.
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="bg-[#16132b]/40 backdrop-blur-md rounded-2xl border border-purple-500/10 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                    
                    <div className="h-28 w-28 shrink-0 bg-[#0f0d1e]/60 rounded-xl border border-gray-800/50 flex items-center justify-center p-2">
                      <img src={item.img} alt={item.name} className="max-h-full object-contain drop-shadow-md" />
                    </div>

                    <div className="flex-1 text-center sm:text-left space-y-1">
                      <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">{item.category}</p>
                      <h3 className="text-lg font-bold text-white">{item.name}</h3>
                      <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Selector de Cantidad */}
                      <div className="flex items-center bg-[#0f0d1e] rounded-lg border border-gray-700/50 p-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 text-gray-400 hover:text-white transition">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 text-gray-400 hover:text-white transition">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                        </button>
                      </div>

                      {/* Botón Eliminar */}
                      <button onClick={() => removeItem(item.id)} className="p-2 text-gray-500 hover:text-pink-500 hover:bg-pink-500/10 rounded-lg transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

            {/* Panel Derecho: Envío y Resumen */}
            <div className="lg:col-span-4">
              <div className="bg-[#16132b]/70 backdrop-blur-xl rounded-[2rem] border border-purple-500/20 p-6 sm:p-8 sticky top-24 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                
                {/* Formulario de Dirección */}
                <h3 className="text-lg font-bold text-white mb-4">Calcula tu Envío</h3>
                <div className="space-y-3 mb-8">
                  <input type="text" placeholder="Dirección exacta (Calle, No.)" className="w-full px-4 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none text-sm transition" />
                  <div className="flex gap-3">
                    <input type="text" placeholder="Ciudad" className="w-2/3 px-4 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none text-sm transition" />
                    <input type="text" placeholder="C.P." className="w-1/3 px-4 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none text-sm transition" />
                  </div>
                  <button className="w-full py-2 bg-[#1f1a3a] border border-gray-700 text-gray-300 rounded-xl text-sm font-medium hover:text-white transition">Actualizar Envío</button>
                </div>

                <div className="w-full h-[1px] bg-gray-700/50 mb-6"></div>

                {/* Resumen de Compra */}
                <h3 className="text-lg font-bold text-white mb-4">Resumen de Compra</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Costo de Entrega</span>
                    <span className="text-white">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-700/50 mt-3">
                    <span className="text-base font-bold text-white">Total</span>
                    <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-[0_10px_25px_rgba(147,51,234,0.3)] hover:from-purple-500 hover:to-indigo-500 transform hover:-translate-y-0.5 transition duration-200 tracking-wider">
                  PROCEDER AL PAGO
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;