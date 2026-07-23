function Pipeline() {

  const procesos = [
    {
      nombre: "Procesamiento de correos Gmail",
      estado: "Completado",
      fecha: "Hoy 10:30 AM",
      progreso: "100%"
    },
    {
      nombre: "Análisis de documentos",
      estado: "En proceso",
      fecha: "Hoy 11:15 AM",
      progreso: "65%"
    },
    {
      nombre: "Clasificación de archivos",
      estado: "Pendiente",
      fecha: "Hoy 12:00 PM",
      progreso: "0%"
    }
  ];


  return (

    <div className="pipeline-page">


      <div className="page-header">

        <h1>
          Pipeline
        </h1>

        <p>
          Seguimiento del procesamiento automático de información.
        </p>

      </div>



      <div className="dashboard-grid">


        <div className="kpi-card">

          <div>

            <p>Procesos totales</p>

            <h2>24</h2>

            <span>Este mes</span>

          </div>

        </div>



        <div className="kpi-card">

          <div>

            <p>Procesos activos</p>

            <h2>8</h2>

            <span>Ejecutándose</span>

          </div>

        </div>



        <div className="kpi-card">

          <div>

            <p>Completados</p>

            <h2>16</h2>

            <span>Correctamente</span>

          </div>

        </div>


      </div>





      <div className="panel">


        <div className="panel-header">

          <h3>
            Estado de procesos
          </h3>

        </div>



        <table className="gmail-table">

          <thead>

            <tr>

              <th>Proceso</th>

              <th>Estado</th>

              <th>Fecha</th>

              <th>Avance</th>

            </tr>

          </thead>



          <tbody>

            {
              procesos.map((proceso, index)=>(

                <tr key={index}>

                  <td>
                    {proceso.nombre}
                  </td>

                  <td>
                    {proceso.estado}
                  </td>

                  <td>
                    {proceso.fecha}
                  </td>

                  <td>
                    {proceso.progreso}
                  </td>

                </tr>

              ))
            }


          </tbody>


        </table>


      </div>


    </div>

  );

}


export default Pipeline;