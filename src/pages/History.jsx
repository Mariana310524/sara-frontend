function History() {

  const eventos = [
    {
      icono: "⚙️",
      titulo: "Pipeline ejecutado correctamente",
      fecha: "23/07/2026",
      estado: "Completado"
    },
    {
      icono: "📧",
      titulo: "Sincronización Gmail completada",
      fecha: "23/07/2026",
      estado: "Completado"
    },
    {
      icono: "📂",
      titulo: "Archivo ventas_julio.xlsx procesado",
      fecha: "23/07/2026",
      estado: "Procesado"
    },
    {
      icono: "📊",
      titulo: "Dashboard actualizado",
      fecha: "22/07/2026",
      estado: "Actualizado"
    },
    {
      icono: "🔄",
      titulo: "Nueva ejecución programada",
      fecha: "22/07/2026",
      estado: "Programado"
    }
  ];


  return (

    <div className="page-container">

      <div className="page-header">
        <h1>Historial</h1>
        <p>
          Actividad reciente y trazabilidad del sistema.
        </p>
      </div>


      <div className="history-list">

        {eventos.map((evento, i)=>(

          <div className="history-card" key={i}>

            <div className="history-icon">
              {evento.icono}
            </div>


            <div className="history-info">

              <h3>
                {evento.titulo}
              </h3>

              <p>
                {evento.fecha}
              </p>

            </div>


            <span className="history-status">
              {evento.estado}
            </span>


          </div>

        ))}

      </div>


    </div>

  );
}

export default History;