// src/App.js
import React from 'react';

const ControlKey = ({ children }) => (
  <span className="inline-block px-2 py-1 ml-1 font-mono text-xs font-bold border-2 rounded-sm border-blueBorder bg-blueAccent text-mountainBrown">
    {children}
  </span>
);

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* --- HEADER --- */}
      <header className="fixed top-0 z-50 w-full bg-white border-b-2 shadow-md border-blueBorder">
        <nav className="container flex items-center justify-between px-6 py-4 mx-auto">
          <div className="flex items-center">
            {/* AQUÍ VA TU LOGO (asegúrate de que esté en la carpeta public) */}
            <img src="./logo.jpg" alt="Dino Run v4 Logo" className="h-12 mr-3 border-2 border-blueBorder" />
            <span className="text-2xl font-bold text-darkAccent font-['VT323']">DINO RUN</span>
          </div>
          <div className="hidden space-x-6 md:flex">
            <a href="#premise" className="transition hover:text-blueAccent">Premisa</a>
            <a href="#controls" className="transition hover:text-blueAccent">Controles</a>
            <a href="#scores" className="transition hover:text-blueAccent">Puntaje</a>
            <a href="#skins" className="transition hover:text-blueAccent">Skins</a>
          </div>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="container flex flex-col items-center px-6 pt-32 pb-20 mx-auto md:flex-row">
        <div className="flex flex-col items-start w-full md:w-1/2">
          <h1 className="mb-6 text-6xl font-bold leading-tight text-darkAccent font-['VT323']">
            Pequeño dino. Gran escape.
          </h1>
          <p className="mb-10 text-xl text-gray-700">
            Huye de la tundra helada. Esquiva obstáculos prehistóricos. Sobrevive el mayor tiempo posible y rompe tu propio récord.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#premise"
              className="px-10 py-4 text-lg font-semibold text-white transition border-2 shadow-lg rounded-full bg-blueAccent hover:bg-opacity-90 border-blueBorder font-['VT323']"
            >
              ¡Huye rápido!
            </a>
            <a
              href="#controls"
              className="px-10 py-4 text-lg font-semibold transition bg-white border-2 shadow-lg rounded-full text-blueAccent hover:text-mountainBrown border-blueBorder font-['VT323']"
            >
              Cómo se juega
            </a>
          </div>
        </div>
        <div className="flex justify-center w-full mt-12 md:w-1/2 md:mt-0">
          {/* IMAGEN DEL DINO SALTANDO EN LA TUNDRA */}
          <img src="./dino_jump.png" alt="Jumping Dino Pixel Art" className="w-full max-w-sm border-4 h-auto border-blueBorder" />
        </div>
      </section>

      {/* --- SECCIÓN PREMISA --- */}
      <section id="premise" className="py-20 border-t-2 bg-tundraBackground border-blueBorder">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center md:flex-row md:space-x-12">
            <div className="w-full md:w-1/2">
              <h2 className="mb-12 text-5xl font-bold text-darkAccent font-['VT323']">La Premisa: Carrera Infinita</h2>
              <p className="mb-8 text-lg text-gray-800">
                Tu único objetivo es correr, saltar y sobrevivir. Eres un dinosaurio que avanza automáticamente en un paisaje prehistórico helado. Esquiva rocas, troncos, arbustos y aves para mantenerte con vida.
              </p>
              <p className="text-lg text-gray-800">
                A mayor puntuación, más rápido correrás y más densos serán los grupos de obstáculos. En el nivel máximo, ¡prepárate para esquivar aves volando a dos alturas!
              </p>
            </div>
            <div className="flex justify-center w-full mt-10 md:w-1/2 md:mt-0">
               <div className="flex p-4 space-x-4 border-2 bg-blueAccent border-blueBorder">
                 {/* IMÁGENES DE OBSTÁCULOS */}
                 <img src="./Rocas.png" alt="Roca" className="h-16" />
                 <img src="./Tronco.png" alt="Tronco" className="h-20" />
                 <img src="./Pajaro.png" alt="Ave" className="h-16" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN CONTROLES --- */}
      <section id="controls" className="py-20 bg-white border-t-2 border-blueBorder">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-5xl font-bold text-center text-darkAccent font-['VT323']">Controles y Mecánicas</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex items-center p-8 space-x-6 border-2 rounded-lg border-blueBorder bg-blueAccent">
                {/* ICONO DE SALTO */}
                <img src="./brinco.png" alt="Salto" className="h-16"/>
                <div className="flex-1">
                    <h3 className="mb-2 text-3xl font-bold text-white font-['VT323']">Saltar</h3>
                    <p className="text-white">Un toque corto: salto mínimo. Mantener: salto máximo.</p>
                    <p className="mt-2 text-white">Teclas: <ControlKey>Enter</ControlKey> <ControlKey>Espacio</ControlKey></p>
                </div>
            </div>
            <div className="flex items-center p-8 space-x-6 border-2 rounded-lg border-blueBorder bg-blueAccent">
                 {/* ICONO DE AGACHARSE */}
                 <img src="./agachado.png" alt="Agacharse" className="h-16"/>
                 <div className="flex-1">
                    <h3 className="mb-2 text-3xl font-bold text-white font-['VT323']">Agacharse</h3>
                    <p className="text-white">Reduce la hitbox para esquivar aves. Actívalo en cualquier momento en el suelo.</p>
                    <p className="mt-2 text-white">Teclas: <ControlKey>Flecha Abajo</ControlKey> <ControlKey>S</ControlKey></p>
                </div>
            </div>
             <div className="flex items-center p-8 space-x-6 border-2 rounded-lg md:col-span-2 border-blueBorder bg-blueAccent">
                 {/* ICONO DE SKIN */}
                 <img src="./skin.png" alt="Skin" className="h-16"/>
                 <div className="flex-1">
                    <h3 className="mb-2 text-3xl font-bold text-white font-['VT323']">Personalizar Skin</h3>
                    <p className="text-white">Selecciona tu color preferido en el menú principal.</p>
                    <p className="mt-2 text-white">Teclas: <ControlKey>Flechas {"<- ->"}</ControlKey></p>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN SKINS --- */}
      <section id="skins" className="py-20 border-t-2 bg-tundraBackground border-blueBorder">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-5xl font-bold text-center text-darkAccent font-['VT323']">6 Colores de Skin Disponibles</h2>
          <p className="max-w-2xl mx-auto mb-16 text-lg text-center text-gray-800">
            Elige entre una variedad de colores vibrantes para personalizar tu dino directamente desde el menú, utilizando la misma hoja de sprites.
          </p>
          <div className="grid grid-cols-2 p-4 gap-6 sm:grid-cols-3 md:grid-cols-6 border-2 bg-blueAccent border-blueBorder">
            {['Azul', 'Verde', 'Rojo', 'Dorado', 'Morado', 'Rosa'].map(skin => (
              <div key={skin} className="flex flex-col items-center p-4 bg-white border-2 rounded-lg border-blueBorder">
                <div className="flex items-center justify-center w-20 h-20 mb-3 font-bold text-white border-4 rounded-lg border-blueBorder bg-blueAccent">{skin}</div>
                <span className="font-semibold text-darkAccent font-['VT323']">{skin}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 bg-white border-t-2 border-blueBorder bg-mountainBrown">
        <div className="container p-4 mx-auto text-center border-2 px-6 bg-blueAccent border-blueBorder">
          <p className="mb-2 text-2xl font-bold text-warmTan font-['VT323']">DINO RUN v1.0</p>
          <p className="mb-2 text-white">Desarrollado con Godot 4.7 & GDScript</p>
          <p className="text-white">Septiembre de 2026</p>
          <p className="mt-4 text-sm text-white">Integrantes: Santiago Castaños Quiñonez - Jose Juan Alatorre Noris</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
