function Settings() {

  const configuraciones = [
    {
      icono: "👤",
      titulo: "Cuenta conectada",
      valor: "demo@aguabendita.com.co",
      estado: "Conectada"
    },
    {
      icono: "🌐",
      titulo: "Entorno",
      valor: "Producción",
      estado: "Activo"
    },
    {
      icono: "🔄",
      titulo: "Sincronización",
      valor: "Automática",
      estado: "Cada 30 minutos"
    },
    {
      icono: "⚙️",
      titulo: "Versión",
      valor: "SARA v1.0.0",
      estado: "Actualizada"
    }
  ];


  return (

    <div className="page-container">

      <div className="page-header">
        <h1>Configuración</h1>
        <p>
          Parámetros generales de la plataforma SARA.
        </p>
      </div>


      <div className="settings-grid">

        {configuraciones.map((item, index)=>(

          <div className="settings-card" key={index}>

            <div className="settings-icon">
              {item.icono}
            </div>

            <div>

              <h3>
                {item.titulo}
              </h3>

              <h2>
                {item.valor}
              </h2>

              <span>
                {item.estado}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Settings;