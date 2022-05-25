
export const Formulario = () => {

  return (
    <div className="md:w-1/2 lg:w-2/5">
      
      <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5">

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete=""
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Propietario
          </label>
          <input
            id="propietario"
            type="email"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete=""
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete=""
          />
        </div>

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete=""
          />
        </div>
      </form>

    </div>
  )
}
