'use client';

import Head from 'next/head';
import { useState } from 'react';

const RootDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Datos simulados: Vendedores de la plataforma
  const [vendors, setVendors] = useState([
    { id: 'VND-001', storeName: 'Tech Haven Enterprise', owner: 'John Doe', totalSales: 24592.00, status: 'Activo' },
    { id: 'VND-002', storeName: 'AudioMakers', owner: 'Sarah Connor', totalSales: 8430.50, status: 'Activo' },
    { id: 'VND-003', storeName: 'CyberGear Co.', owner: 'Mike Smith', totalSales: 0.00, status: 'Suspendido' },
  ]);

  // Datos simulados: Pedidos Globales
  const [globalOrders, setGlobalOrders] = useState([
    { id: 'ENT-90284A', vendor: 'Tech Haven', customer: 'Alice Cooper', total: 189.00, status: 'entregado', date: '28 Mayo, 2026' },
    { id: 'ENT-88392B', vendor: 'AudioMakers', customer: 'Bob Ross', total: 549.50, status: 'en_camino', date: '27 Mayo, 2026' },
    { id: 'ENT-77482C', vendor: 'Tech Haven', customer: 'Charlie Brown', total: 1299.00, status: 'pendiente', date: '27 Mayo, 2026' },
  ]);

  // Funciones de gestión de Vendedores
  const toggleVendorStatus = (id: string) => {
    setVendors(vendors.map(v => {
      if (v.id === id) {
        return { ...v, status: v.status === 'Activo' ? 'Suspendido' : 'Activo' };
      }
      return v;
    }));
  };

  const deleteVendor = (id: string) => {
    setVendors(vendors.filter(v => v.id !== id));
  };

  return (
    <>
      <Head>
        <title>Super Admin | EcommerceEnterprise</title>
      </Head>

      <div className="flex h-screen bg-[#0b0817] text-gray-200 font-sans overflow-hidden">
        
        {/* ================= SIDEBAR (ROOT ADMIN) ================= */}
        <aside className="w-64 flex-shrink-0 bg-[#16132b]/90 backdrop-blur-xl border-r border-red-500/10 flex flex-col relative z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
          <div className="h-20 flex items-center justify-center border-b border-gray-800/50">
            <h1 className="text-xl font-extrabold tracking-tight text-white font-serif">
              E<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 font-sans font-semibold">Enterprise</span> Root
            </h1>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'overview' ? 'bg-red-500/10 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)]' : 'text-gray-400 hover:bg-[#1f1a3a] hover:text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
              Métricas Globales
            </button>
            
            <button onClick={() => setActiveTab('vendors')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'vendors' ? 'bg-red-500/10 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)]' : 'text-gray-400 hover:bg-[#1f1a3a] hover:text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
              Vendedores (Tiendas)
            </button>

            <button onClick={() => setActiveTab('all-orders')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'all-orders' ? 'bg-red-500/10 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)]' : 'text-gray-400 hover:bg-[#1f1a3a] hover:text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Monitor de Pedidos
            </button>
          </div>

          <div className="p-4 border-t border-gray-800/50 bg-[#0f0d1e]/50">
            <div className="flex items-center gap-3 mb-4 px-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-500 to-orange-600 flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/30">SA</div>
              <div>
                <p className="text-sm font-bold text-white">Super Admin</p>
                <p className="text-[10px] uppercase tracking-widest text-red-400 font-bold">Nivel Root</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white rounded-xl transition-all text-sm font-medium border border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
              Cerrar Sesión
            </button>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 relative overflow-y-auto">
          {/* Fondo luminoso para Root (Tonos cálidos y morados profundos) */}
          <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
          
          <div className="p-8 relative z-10 min-h-full">
            
            {/* VISTA 1: MÉTRICAS GLOBALES */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="text-3xl font-bold text-white">Centro de Mando Global</h2>
                  <p className="text-gray-400 mt-1">Visión general del rendimiento de toda la plataforma EcommerceEnterprise.</p>
                </div>

                {/* Tarjetas KPI Root */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Volumen Bruto (GMV)', value: '$1.2M', trend: '+18.5%', color: 'text-emerald-400' },
                    { title: 'Comisiones Generadas', value: '$185.4K', trend: '+22.1%', color: 'text-emerald-400' },
                    { title: 'Vendedores Activos', value: '142', trend: '+5', color: 'text-indigo-400' },
                    { title: 'Pedidos Globales', value: '18,492', trend: '+12.4%', color: 'text-emerald-400' }
                  ].map((kpi, idx) => (
                    <div key={idx} className="bg-[#16132b]/80 backdrop-blur-md rounded-2xl border border-red-500/10 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                      <p className="text-sm text-gray-400 font-medium">{kpi.title}</p>
                      <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mt-2">{kpi.value}</h3>
                      <p className={`text-xs font-semibold mt-2 ${kpi.color}`}>{kpi.trend} vs mes anterior</p>
                    </div>
                  ))}
                </div>

                {/* Gráfica Global Simulada */}
                <div className="bg-[#16132b]/60 backdrop-blur-md rounded-3xl border border-purple-500/20 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h3 className="text-xl font-bold text-white">Crecimiento de GMV vs Comisiones</h3>
                      <p className="text-sm text-gray-500">Métricas de la plataforma en los últimos 6 meses</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500"></span> GMV</div>
                      <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span> Comisiones</div>
                    </div>
                  </div>
                  
                  {/* Simulación de gráfico de área multicapa con CSS */}
                  <div className="h-72 w-full flex items-end justify-between gap-1 border-b border-gray-700/50 pb-2 relative">
                    {/* Líneas de cuadrícula de fondo */}
                    <div className="absolute inset-0 flex flex-col justify-between border-l border-gray-700/50 pb-2">
                      {[100, 75, 50, 25, 0].map(val => (
                        <div key={val} className="w-full border-t border-dashed border-gray-800/50 h-0 flex items-center">
                          <span className="text-[10px] text-gray-600 -translate-x-8">${val}k</span>
                        </div>
                      ))}
                    </div>

                    {/* Barras de datos */}
                    {[{ g: 40, c: 10, m: 'Ene' }, { g: 55, c: 15, m: 'Feb' }, { g: 45, c: 12, m: 'Mar' }, { g: 70, c: 20, m: 'Abr' }, { g: 85, c: 25, m: 'May' }, { g: 100, c: 30, m: 'Jun' }].map((data, i) => (
                      <div key={i} className="flex flex-col items-center flex-1 gap-2 relative z-10 group">
                        <div className="w-full max-w-[60px] h-full flex items-end justify-center relative">
                          {/* Barra GMV */}
                          <div 
                            className="absolute bottom-0 w-full bg-gradient-to-t from-purple-900/50 to-purple-500/80 rounded-t-md hover:brightness-110 transition-all duration-300"
                            style={{ height: `${data.g}%` }}
                          ></div>
                          {/* Barra Comisiones */}
                          <div 
                            className="absolute bottom-0 w-1/2 bg-gradient-to-t from-red-900/50 to-red-500 rounded-t-sm shadow-[0_0_15px_rgba(239,68,68,0.3)] z-10"
                            style={{ height: `${data.c}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium text-gray-400">{data.m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VISTA 2: GESTIÓN DE VENDEDORES */}
            {activeTab === 'vendors' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white">Directorio de Vendedores</h2>
                    <p className="text-gray-400 mt-1">Da de alta, suspende o elimina cuentas de tiendas en la plataforma.</p>
                  </div>
                  <button className="py-2.5 px-6 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(239,68,68,0.3)] hover:from-red-500 hover:to-orange-500 transition duration-200">
                    + Nuevo Vendedor
                  </button>
                </div>

                <div className="bg-[#16132b]/60 backdrop-blur-md rounded-2xl border border-red-500/10 overflow-hidden shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#0f0d1e]/90 border-b border-gray-700/50">
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">ID Tienda</th>
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Información Comercial</th>
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Ingresos (GMV)</th>
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Estado</th>
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Administrar</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800/50">
                        {vendors.map((vendor) => (
                          <tr key={vendor.id} className="hover:bg-[#1f1a3a]/60 transition duration-200">
                            <td className="p-5 text-sm font-mono text-purple-400">{vendor.id}</td>
                            <td className="p-5">
                              <p className="text-base font-bold text-white">{vendor.storeName}</p>
                              <p className="text-xs text-gray-400 mt-0.5">Prop: {vendor.owner}</p>
                            </td>
                            <td className="p-5 text-sm font-semibold text-emerald-400">${vendor.totalSales.toFixed(2)}</td>
                            <td className="p-5">
                              <span className={`px-3 py-1.5 text-xs font-bold uppercase rounded-lg border flex items-center w-max gap-1.5 ${
                                vendor.status === 'Activo' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-red-500/10 text-red-400 border-red-500/30'
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${vendor.status === 'Activo' ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`}></span>
                                {vendor.status}
                              </span>
                            </td>
                            <td className="p-5 flex justify-end gap-2">
                              <button 
                                onClick={() => toggleVendorStatus(vendor.id)} 
                                className="py-1.5 px-3 bg-[#0f0d1e] border border-gray-700 text-gray-300 text-xs font-semibold rounded-lg hover:text-white transition"
                              >
                                {vendor.status === 'Activo' ? 'Suspender' : 'Activar'}
                              </button>
                              <button 
                                onClick={() => deleteVendor(vendor.id)} 
                                className="p-1.5 bg-[#0f0d1e] border border-red-900/50 text-red-500 rounded-lg hover:bg-red-500/10 hover:border-red-500/50 transition"
                                title="Eliminar Vendedor"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* VISTA 3: MONITOR DE PEDIDOS GLOBALES */}
            {activeTab === 'all-orders' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-3xl font-bold text-white">Monitor de Transacciones</h2>
                    <p className="text-gray-400 mt-1">Supervisa todos los pedidos realizados a través de la plataforma.</p>
                  </div>
                  {/* Buscador Global (Visual) */}
                  <div className="relative">
                    <input type="text" placeholder="Buscar ID de pedido..." className="pl-10 pr-4 py-2 bg-[#0f0d1e]/80 border border-gray-700/50 rounded-xl text-sm text-white focus:border-purple-500 outline-none w-64" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 absolute left-3 top-3 text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.602z" /></svg>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {globalOrders.map((order) => (
                    <div key={order.id} className="bg-[#16132b]/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-[#16132b]/60 transition cursor-default">
                      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 w-full">
                        <div className="w-32">
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">ID Transacción</p>
                          <p className="text-sm font-mono text-purple-400">{order.id}</p>
                        </div>
                        <div className="w-40">
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Tienda Originaria</p>
                          <p className="text-sm font-medium text-white">{order.vendor}</p>
                        </div>
                        <div className="w-40">
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Comprador</p>
                          <p className="text-sm text-gray-300">{order.customer}</p>
                        </div>
                        <div className="w-24">
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Monto Bruto</p>
                          <p className="text-sm font-bold text-emerald-400">${order.total.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Estado Operativo</p>
                          <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded border ${
                            order.status === 'entregado' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 
                            order.status === 'en_camino' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' : 
                            'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                          }`}>
                            {order.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                      
                      <button className="flex-shrink-0 text-sm font-medium text-purple-400 hover:text-purple-300 px-3 py-1.5 border border-transparent hover:border-purple-500/30 rounded-lg transition">
                        Ver Detalles
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </>
  );
};

export default RootDashboard;