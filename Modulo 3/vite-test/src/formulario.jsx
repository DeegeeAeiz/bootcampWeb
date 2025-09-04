import React, { useState, useEffect } from "react";

function Formulario() {
  const [formData, setformData] = useState({
    nombre: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("formulario", JSON.stringify(formData));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value.toUpperCase() }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-green-600">
      <div className="bg-white p-8 rounded-xl shado-md w-full max-w-md">
        <h2 className="text-xl fontbold mb-6 text-center text-blue-700">
          Formulario
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu Nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu Email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
