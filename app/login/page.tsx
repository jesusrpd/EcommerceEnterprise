'use client'
import { useState } from 'react';
import Head from 'next/head';

const AuthPage = () => {
  // Estado para controlar qué pestaña está activa ('login' o 'signup')
  const [activeTab, setActiveTab] = useState('login');

  return (
    <>
      <Head>
        <title>Acceso Enterprise | EcommerceEnterprise</title>
      </Head>

      {/* Contenedor Principal con fondo a pantalla completa */}
      <div 
        className="relative min-h-screen flex items-center justify-center p-6 md:p-10 font-sans bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1674027392887-751d6396b710?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        
        {/* Filtro de desenfoque para dar legibilidad */}
        <div className="absolute inset-0 bg-[#0b0817]/60 backdrop-blur-sm z-0"></div>

        {/* Tarjeta del Formulario Glassmorphism */}
        <div className="relative z-10 w-full max-w-lg bg-[#16132b]/85 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-purple-500/20 transition-all duration-500">
          
          {/* Header con Logo */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-900/50">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <h1 className="text-2xl font-semibold text-white tracking-tight">
              Ecommerce<span className="text-purple-400">Enterprise</span>
            </h1>
          </div>

          {/* Pestañas (Navegación Animada) */}
          <div className="relative flex mb-8">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 text-center py-4 text-lg font-medium transition duration-300 z-10 ${activeTab === 'login' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Inicia Sesión
            </button>
            <button 
              onClick={() => setActiveTab('signup')}
              className={`flex-1 text-center py-4 text-lg font-medium transition duration-300 z-10 ${activeTab === 'signup' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Crear Cuenta
            </button>

            {/* Línea base de las pestañas */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-700/50"></div>
            
            {/* Indicador animado (La línea morada que se mueve) */}
            <div 
              className={`absolute bottom-0 h-[2px] bg-purple-500 w-1/2 transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(168,85,247,0.8)] z-20 ${activeTab === 'login' ? 'left-0' : 'left-1/2'}`}
            ></div>
          </div>

          {/* Contenedor de Formularios (Animación de transición) */}
          <div className="relative w-full">
            
            {/* ================= FORMULARIO DE LOGIN ================= */}
            <div 
              className={`transition-all duration-500 ease-in-out ${
                activeTab === 'login' 
                  ? 'opacity-100 translate-x-0 relative z-10' 
                  : 'opacity-0 -translate-x-8 absolute top-0 left-0 w-full pointer-events-none z-0'
              }`}
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 tracking-wide">CORREO ELECTRÓNICO</label>
                  <input 
                    type="email" 
                    placeholder="ejemplo@empresa.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200"
                  />
                </div>

                <div className="space-y-2 relative">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-300 tracking-wide">CONTRASEÑA</label>
                    <a href="#" className="text-xs text-purple-400 hover:text-purple-300 transition">¿Olvidaste tu contraseña?</a>
                  </div>
                  <input 
                    type="password" 
                    placeholder="Min. 8 caracteres" 
                    className="w-full px-6 py-4 rounded-2xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200"
                  />
                  <button type="button" className="absolute right-6 top-[48px] text-gray-500 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>

                <button className="w-full mt-2 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-[0_10px_25px_rgba(147,51,234,0.3)] hover:from-purple-500 hover:to-indigo-500 transform hover:-translate-y-0.5 transition duration-200 active:translate-y-0 tracking-wider">
                  INICIA SESIÓN
                </button>
              </form>
            </div>

            {/* ================= FORMULARIO DE SIGN UP ================= */}
            <div 
              className={`transition-all duration-500 ease-in-out ${
                activeTab === 'signup' 
                  ? 'opacity-100 translate-x-0 relative z-10' 
                  : 'opacity-0 translate-x-8 absolute top-0 left-0 w-full pointer-events-none z-0'
              }`}
            >
              <form className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-1">
                  <label className="text-xs font-medium text-gray-300 tracking-wide">NOMBRES COMPLETOS</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition duration-200" />
                </div>
                
                <div className="col-span-2 sm:col-span-1 space-y-1">
                  <label className="text-xs font-medium text-gray-300 tracking-wide">NACIMIENTO</label>
                  <input type="date" className="w-full px-5 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition duration-200" />
                </div>

                <div className="col-span-2 sm:col-span-1 space-y-1">
                  <label className="text-xs font-medium text-gray-300 tracking-wide">CORREO</label>
                  <input type="email" placeholder="ejemplo@empresa.com" className="w-full px-5 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition duration-200" />
                </div>

                <div className="col-span-2 sm:col-span-1 space-y-1">
                  <label className="text-xs font-medium text-gray-300 tracking-wide">CONTRASEÑA</label>
                  <input type="password" placeholder="••••••••" className="w-full px-5 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition duration-200" />
                </div>

                <div className="col-span-2 sm:col-span-1 space-y-1">
                  <label className="text-xs font-medium text-gray-300 tracking-wide">CONFIRMAR</label>
                  <input type="password" placeholder="••••••••" className="w-full px-5 py-3 rounded-xl bg-[#0f0d1e]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition duration-200" />
                </div>

                <button className="col-span-2 w-full mt-4 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-[0_10px_25px_rgba(147,51,234,0.3)] hover:from-purple-500 hover:to-indigo-500 transform hover:-translate-y-0.5 transition duration-200 active:translate-y-0 tracking-wider">
                  CREAR CUENTA
                </button>
              </form>
            </div>

          </div>

          {/* Separador y Botón de Google (Se mantienen estáticos en la parte inferior) */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-700/50" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#16132b] px-4 text-sm text-gray-400">O continúa con</span>
            </div>
          </div>

          <button className="w-full py-4 flex items-center justify-center gap-3 bg-white text-gray-900 font-semibold rounded-2xl hover:bg-gray-100 transition duration-200 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Google Enterprise
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthPage;