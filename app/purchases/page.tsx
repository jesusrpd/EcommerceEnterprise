'use client'

import Head from 'next/head';
import { useState } from 'react';

const PurchasesPage = () => {
  // Datos simulados del historial de compras
  const [orders, setOrders] = useState([
    {
      id: 'ENT-90284A',
      date: '24 de Mayo, 2026',
      status: 'en_camino',
      total: 189.00,
      items: [
        { id: 4, name: 'Apex Ledger Hardware Wallet', category: 'Seguridad', price: 189.00, qty: 1, img: '/p4.png' }
      ]
    },
    {
      id: 'ENT-88392B',
      date: '10 de Mayo, 2026',
      status: 'entregado',
      total: 1848.50,
      items: [
        { id: 1, name: 'Enterprise Quantum Watch', category: 'Wearables', price: 1299.00, qty: 1, img: '/p1.png' },
        { id: 2, name: 'Neural Sound Pro Headphones', category: 'Audio', price: 549.50, qty: 1, img: '/p2.png' }
      ]
    }
  ]);

  // Función para renderizar el badge de estado con colores dinámicos
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'en_camino':
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            En Camino
          </span>
        );
      case 'entregado':
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 tracking-wide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Entregado
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Mis Compras | EcommerceEnterprise</title>
      </Head>

      <div className="min-h-screen bg-[#0b0817] text-gray-200 font-sans relative overflow-x-hidden py-10">
        {/* Efectos de luz de fondo */}
        <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="fixed bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header de la vista */}
          <div className="flex items-center gap-4 mb-10">
            <button className="p-2.5 rounded-xl bg-[#16132b]/50 border border-purple-500/20 text-gray-400 hover:text-white hover:bg-purple-500/10 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Mis Compras</h1>
              <p className="text-sm text-gray-400 mt-1">Historial detallado de tus pedidos corporativos.</p>
            </div>
          </div>

          {/* Filtros rápidos (Opcional visual) */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium shadow-[0_4px_15px_rgba(147,51,234,0.3)] whitespace-nowrap">
              Todos los pedidos
            </button>
            <button className="px-5 py-2 rounded-full bg-[#16132b]/60 border border-gray-700/50 text-gray-300 hover:text-white text-sm font-medium transition whitespace-nowrap">
              En Camino
            </button>
            <button className="px-5 py-2 rounded-full bg-[#16132b]/60 border border-gray-700/50 text-gray-300 hover:text-white text-sm font-medium transition whitespace-nowrap">
              Entregados
            </button>
          </div>

          {/* Lista de Pedidos */}
          <div className="space-y-8">
            {orders.length === 0 ? (
              <div className="bg-[#16132b]/40 backdrop-blur-md rounded-3xl border border-purple-500/10 p-12 text-center text-gray-400">
                Aún no has realizado ninguna compra.
              </div>
            ) : (
              orders.map((order) => (
                <div 
                  key={order.id} 
                  className="bg-[#16132b]/40 backdrop-blur-xl rounded-[2rem] border border-purple-500/20 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition hover:border-purple-500/40"
                >
                  {/* Cabecera del Pedido */}
                  <div className="bg-[#0f0d1e]/50 border-b border-gray-700/50 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-0.5">Pedido Realizado</p>
                        <p className="text-sm text-gray-200 font-medium">{order.date}</p>
                      </div>
                      <div className="hidden sm:block w-[1px] h-8 bg-gray-700/50"></div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-0.5">Total</p>
                        <p className="text-sm text-gray-200 font-medium">${order.total.toFixed(2)}</p>
                      </div>
                      <div className="hidden sm:block w-[1px] h-8 bg-gray-700/50"></div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-0.5">Nº de Pedido</p>
                        <p className="text-sm font-mono text-purple-400">{order.id}</p>
                      </div>
                    </div>
                    <div>
                      {renderStatusBadge(order.status)}
                    </div>
                  </div>

                  {/* Cuerpo del Pedido (Productos) */}
                  <div className="p-6 space-y-6">
                    {order.items.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                          {/* Imagen del producto */}
                          <div className="h-24 w-24 shrink-0 bg-[#0f0d1e]/80 rounded-2xl border border-gray-800 flex items-center justify-center p-3 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            <img src={item.img} alt={item.name} className="max-h-full object-contain drop-shadow-md group-hover:scale-110 transition duration-300" />
                          </div>

                          {/* Info del producto */}
                          <div className="flex-1 text-center sm:text-left">
                            <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">{item.category}</p>
                            <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
                            <p className="text-sm text-gray-400">
                              <span className="font-medium text-gray-300">Precio:</span> ${item.price.toFixed(2)} &nbsp;&bull;&nbsp; <span className="font-medium text-gray-300">Cant:</span> {item.qty}
                            </p>
                          </div>

                          {/* Botón de acción individual (Volver a comprar) */}
                          <button className="px-4 py-2 text-sm font-medium text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-xl transition duration-200 whitespace-nowrap">
                            Comprar de nuevo
                          </button>
                        </div>
                        {/* Separador entre productos si hay más de uno */}
                        {index !== order.items.length - 1 && <div className="w-full h-[1px] bg-gray-800/50 mt-6"></div>}
                      </div>
                    ))}
                  </div>

                  {/* Footer del Pedido (Acciones Globales) */}
                  <div className="bg-[#0f0d1e]/30 border-t border-gray-700/50 p-4 sm:px-6 flex flex-col sm:flex-row justify-end gap-3">
                    <button className="py-2.5 px-5 bg-transparent border border-gray-600 text-gray-300 text-sm font-medium rounded-xl hover:text-white hover:border-gray-400 transition duration-200">
                      Ver Recibo
                    </button>
                    {order.status === 'en_camino' && (
                      <button className="py-2.5 px-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-xl shadow-[0_4px_15px_rgba(147,51,234,0.3)] hover:from-purple-500 hover:to-indigo-500 transition duration-200 transform hover:-translate-y-0.5">
                        Rastrear Paquete
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default PurchasesPage;