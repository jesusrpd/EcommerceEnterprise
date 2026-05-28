'use client';

import Head from 'next/head';
import { useState } from 'react';

const VendorDashboard = () => {
  // Estado para la navegación lateral
  const [activeTab, setActiveTab] = useState('dashboard');

  // Datos simulados para inventario
  const [inventory, setInventory] = useState([
    { id: 'PRD-001', name: 'Enterprise Quantum Watch', stock: 45, price: 1299.00, status: 'Activo' },
    { id: 'PRD-002', name: 'Neural Sound Pro', stock: 12, price: 549.50, status: 'Poco Stock' },
    { id: 'PRD-003', name: 'CyberSphere Backpack', stock: 0, price: 320.00, status: 'Agotado' },
  ]);

  // Datos simulados para pedidos
  const [orders, setOrders] = useState([
    { id: 'ENT-90284A', date: '28 de Mayo, 2026', customer: 'John Doe', total: 189.00, status: 'pendiente', labelGenerated: false },
    { id: 'ENT-88392B', date: '26 de Mayo, 2026', customer: 'Sarah Connor', total: 1299.00, status: 'enviado', labelGenerated: true },
  ]);

  // Funciones simuladas de acciones
  const handleGenerateLabel = (id: string) => {
    setOrders(orders.map(order => order.id === id ? { ...order, labelGenerated: true } : order));
  };

  const handleMarkShipped = (id: string) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: 'enviado' } : order));
  };

  const handleDeleteProduct = (id: string) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <>
      <Head>
        <title>Panel de Vendedor | EcommerceEnterprise</title>
      </Head>

      <div className="flex h-screen bg-[#0b0817] text-gray-200 font-sans overflow-hidden">
        
        {/* ================= SIDEBAR ================= */}
        <aside className="w-64 flex-shrink-0 bg-[#16132b]/80 backdrop-blur-xl border-r border-purple-500/10 flex flex-col relative z-20">
          <div className="h-20 flex items-center justify-center border-b border-gray-800/50">
            <h1 className="text-xl font-extrabold tracking-tight text-white font-serif">
              E<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-sans font-semibold">Enterprise</span> Vendor
            </h1>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'dashboard' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'text-gray-400 hover:bg-[#1f1a3a] hover:text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
              Métricas y Resumen
            </button>
            
            <button onClick={() => setActiveTab('inventory')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'inventory' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'text-gray-400 hover:bg-[#1f1a3a] hover:text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
              Inventario
            </button>

            <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'orders' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'text-gray-400 hover:bg-[#1f1a3a] hover:text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
              Gestión de Pedidos
            </button>

            <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'settings' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'text-gray-400 hover:bg-[#1f1a3a] hover:text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.78.929l-.15.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Configuración
            </button>
          </div>

          <div className="p-4 border-t border-gray-800/50">
            <div className="flex items-center gap-3 mb-4 px-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg">JD</div>
              <div>
                <p className="text-sm font-bold text-white">John Doe</p>
                <p className="text-xs text-gray-400">Vendedor Pro</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 hover:text-pink-300 rounded-xl transition-all text-sm font-medium border border-pink-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
              Cerrar Sesión
            </button>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 relative overflow-y-auto">
          {/* Fondo luminoso */}
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
          
          <div className="p-8 relative z-10 min-h-full">
            
            {/* VISTA 1: DASHBOARD Y MÉTRICAS */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="text-3xl font-bold text-white">Resumen de Actividad</h2>
                  <p className="text-gray-400 mt-1">Métricas clave de tu tienda en los últimos 30 días.</p>
                </div>

                {/* Tarjetas KPI */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Ventas Totales', value: '$24,592.00', trend: '+12.5%', color: 'text-emerald-400' },
                    { title: 'Pedidos Completados', value: '1,284', trend: '+5.2%', color: 'text-emerald-400' },
                    { title: 'Tasa de Conversión', value: '3.8%', trend: '-0.4%', color: 'text-pink-400' },
                    { title: 'Visitas a la Tienda', value: '45.2K', trend: '+18.1%', color: 'text-emerald-400' }
                  ].map((kpi, idx) => (
                    <div key={idx} className="bg-[#16132b]/60 backdrop-blur-md rounded-2xl border border-purple-500/10 p-6 shadow-lg">
                      <p className="text-sm text-gray-400 font-medium">{kpi.title}</p>
                      <h3 className="text-2xl font-bold text-white mt-2">{kpi.value}</h3>
                      <p className={`text-xs font-semibold mt-2 ${kpi.color}`}>{kpi.trend} vs mes anterior</p>
                    </div>
                  ))}
                </div>

                {/* Gráfica Atractiva (Simulada con Tailwind CSS) */}
                <div className="bg-[#16132b]/60 backdrop-blur-md rounded-3xl border border-purple-500/20 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-white">Ingresos vs. Tráfico</h3>
                      <p className="text-xs text-gray-500">Tendencia semanal</p>
                    </div>
                    <select className="bg-[#0f0d1e] border border-gray-700 text-gray-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 p-2 outline-none">
                      <option>Últimos 7 días</option>
                      <option>Últimos 30 días</option>
                    </select>
                  </div>
                  
                  {/* Gráfico de barras estilizado CSS */}
                  <div className="h-64 w-full flex items-end justify-between gap-2 border-b border-gray-700/50 pb-2">
                    {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                      <div key={i} className="flex flex-col items-center flex-1 gap-2 group relative">
                        {/* Tooltip Hover */}
                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-[#0f0d1e] text-white text-xs py-1 px-2 rounded-md border border-purple-500/30 transition-opacity">
                          ${height * 120}
                        </div>
                        {/* Barra */}
                        <div 
                          className="w-full max-w-[40px] bg-gradient-to-t from-indigo-600/40 to-purple-500 rounded-t-sm hover:from-indigo-500 hover:to-purple-400 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          style={{ height: `${height}%` }}
                        ></div>
                        {/* Etiqueta Eje X */}
                        <span className="text-[10px] text-gray-500">Día {i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VISTA 2: INVENTARIO */}
            {activeTab === 'inventory' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-3xl font-bold text-white">Gestión de Inventario</h2>
                    <p className="text-gray-400 mt-1">Añade, edita o elimina productos de tu catálogo.</p>
                  </div>
                  <button className="py-2.5 px-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(147,51,234,0.3)] hover:from-purple-500 hover:to-indigo-500 transition duration-200 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    Añadir Producto
                  </button>
                </div>

                <div className="bg-[#16132b]/60 backdrop-blur-md rounded-2xl border border-purple-500/20 overflow-hidden shadow-lg">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#0f0d1e]/80 border-b border-gray-700/50">
                        <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">ID / SKU</th>
                        <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Producto</th>
                        <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Precio</th>
                        <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Stock</th>
                        <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Estado</th>
                        <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                      {inventory.map((item) => (
                        <tr key={item.id} className="hover:bg-[#1f1a3a]/40 transition duration-200">
                          <td className="p-4 text-sm font-mono text-purple-400">{item.id}</td>
                          <td className="p-4 text-sm font-medium text-white">{item.name}</td>
                          <td className="p-4 text-sm text-gray-300">${item.price.toFixed(2)}</td>
                          <td className="p-4 text-sm text-gray-300">{item.stock} unds.</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md border ${
                              item.status === 'Activo' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                              item.status === 'Agotado' ? 'bg-pink-500/10 text-pink-400 border-pink-500/20' : 
                              'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                          <td className="p-4 flex justify-end gap-2">
                            <button className="p-2 bg-[#0f0d1e] border border-gray-700 text-gray-400 rounded-lg hover:text-white transition">✏️</button>
                            <button onClick={() => handleDeleteProduct(item.id)} className="p-2 bg-[#0f0d1e] border border-gray-700 text-gray-400 rounded-lg hover:text-pink-500 transition">🗑️</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* VISTA 3: PEDIDOS Y GUÍAS */}
            {activeTab === 'orders' && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="text-3xl font-bold text-white">Gestión de Pedidos</h2>
                  <p className="text-gray-400 mt-1">Prepara envíos, genera guías y actualiza estados.</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-[#16132b]/60 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">
                      <div className="flex gap-8 w-full lg:w-auto">
                        <div>
                          <p className="text-xs text-gray-500 uppercase">ID Pedido</p>
                          <p className="text-base font-mono font-bold text-purple-400">{order.id}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Cliente</p>
                          <p className="text-base font-medium text-white">{order.customer}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Monto</p>
                          <p className="text-base font-bold text-emerald-400">${order.total.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase mb-1">Estado</p>
                          <span className={`px-2 py-1 text-xs font-bold rounded border ${
                            order.status === 'pendiente' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                          }`}>
                            {order.status === 'pendiente' ? 'Pendiente' : 'Enviado'}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 w-full lg:w-auto lg:justify-end">
                        {/* Botón de Generar Guía */}
                        {!order.labelGenerated ? (
                          <button onClick={() => handleGenerateLabel(order.id)} className="py-2 px-4 bg-purple-600/20 border border-purple-500/50 text-purple-300 text-sm font-semibold rounded-lg hover:bg-purple-600/40 transition">
                            📄 Generar Guía
                          </button>
                        ) : (
                          <button className="py-2 px-4 bg-gray-800/50 border border-gray-700 text-gray-400 text-sm font-semibold rounded-lg cursor-not-allowed flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                            Guía Lista
                          </button>
                        )}
                        
                        {/* Botón de Marcar como Enviado */}
                        {order.status === 'pendiente' && order.labelGenerated && (
                          <button onClick={() => handleMarkShipped(order.id)} className="py-2 px-4 bg-emerald-600/20 border border-emerald-500/50 text-emerald-400 text-sm font-semibold rounded-lg hover:bg-emerald-600/40 transition">
                            📦 Marcar como Enviado
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VISTA 4: CONFIGURACIÓN (INFORMACIÓN) */}
            {activeTab === 'settings' && (
              <div className="space-y-8 animate-fadeIn max-w-3xl">
                <div>
                  <h2 className="text-3xl font-bold text-white">Información de la Tienda</h2>
                  <p className="text-gray-400 mt-1">Actualiza los datos públicos y de facturación de tu comercio.</p>
                </div>

                <div className="bg-[#16132b]/60 backdrop-blur-md rounded-2xl border border-purple-500/20 p-8 shadow-lg space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-sm font-medium text-gray-300">Nombre de la Tienda</label>
                      <input type="text" defaultValue="Tech Haven Enterprise" className="w-full px-4 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white outline-none focus:border-purple-500" />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-sm font-medium text-gray-300">Correo de Contacto</label>
                      <input type="email" defaultValue="soporte@techhaven.com" className="w-full px-4 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white outline-none focus:border-purple-500" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="text-sm font-medium text-gray-300">Descripción Corta</label>
                      <textarea rows={3} defaultValue="Proveedores de tecnología de alta gama para profesionales." className="w-full px-4 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white outline-none focus:border-purple-500"></textarea>
                    </div>
                  </div>
                  <div className="border-t border-gray-800 pt-6">
                    <button className="py-3 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(147,51,234,0.3)] hover:from-purple-500 hover:to-indigo-500 transition duration-200">
                      Guardar Cambios
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </>
  );
};

export default VendorDashboard;