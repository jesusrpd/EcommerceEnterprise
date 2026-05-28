'use client';

import Head from 'next/head';
import { useState } from 'react';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Enterprise Quantum Watch', price: '$1,299.00', category: 'Wearables', img: '/p1.png' },
    { id: 3, name: 'CyberSphere Backpack', price: '$320.00', category: 'Accesorios', img: '/p3.png' },
    { id: 4, name: 'Apex Ledger Hardware', price: '$189.00', category: 'Seguridad', img: '/p4.png' },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <>
      <Head>
        <title>Favoritos | EcommerceEnterprise</title>
      </Head>

      <div className="min-h-screen bg-[#0b0817] text-gray-200 font-sans relative overflow-x-hidden py-10">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header de Favoritos */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 bg-[#16132b]/40 backdrop-blur-md border border-purple-500/10 p-6 rounded-[2rem]">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-purple-500"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /></svg>
                Tus Favoritos
              </h1>
              <p className="text-sm text-gray-400 mt-1">Colección guardada para compra futura ({favorites.length} artículos)</p>
            </div>
            
            <button className="py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-[0_10px_25px_rgba(147,51,234,0.3)] hover:from-purple-500 hover:to-indigo-500 transition duration-200 whitespace-nowrap flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
              Comprar todos los favoritos
            </button>
          </div>

          {/* Grid de Favoritos */}
          {favorites.length === 0 ? (
            <div className="text-center py-20 text-gray-400">No tienes productos guardados en favoritos.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favorites.map((product) => (
                <div 
                  key={product.id}
                  className="group relative bg-[#16132b]/40 backdrop-blur-md rounded-3xl border border-purple-500/10 p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] transition-all duration-300"
                >
                  {/* Botón Eliminar de Favoritos */}
                  <div className="absolute top-4 right-4 z-20">
                    <button 
                      onClick={() => removeFavorite(product.id)}
                      className="p-2 rounded-full bg-[#0f0d1e]/80 border border-gray-800 text-gray-400 hover:text-pink-500 hover:border-pink-500/50 transition duration-200 shadow-md"
                      title="Eliminar de favoritos"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>

                  {/* Imagen */}
                  <div className="h-44 w-full flex items-center justify-center mb-4 relative rounded-2xl bg-[#0f0d1e]/40 border border-gray-900/40 overflow-hidden group-hover:bg-[#0f0d1e]/20 transition duration-300 mt-2">
                    <img src={product.img} alt={product.name} className="max-h-36 object-contain drop-shadow-lg group-hover:scale-105 transition duration-300" />
                  </div>

                  {/* Info */}
                  <div className="space-y-1 mb-5">
                    <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">{product.category}</p>
                    <h4 className="text-base font-bold text-white line-clamp-1">{product.name}</h4>
                    <p className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{product.price}</p>
                  </div>

                  {/* Botón Añadir al Carrito individual */}
                  <button className="w-full py-3 bg-[#0f0d1e]/90 border border-purple-500/20 text-gray-200 font-semibold text-sm rounded-xl hover:bg-purple-600 hover:text-white transition duration-300">
                    Añadir al Carrito
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;