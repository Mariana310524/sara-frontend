function Errors() {


  const errores = [

    {
      modulo: "Gmail",
      descripcion: "No se pudo sincronizar la cuenta de correo",
      prioridad: "Alta",
      estado: "Pendiente",
      fecha: "23/07/2026"
    },

    {
      modulo: "Pipeline",
      descripcion: "Archivo con formato no válido",
      prioridad: "Media",
      estado: "Revisado",
      fecha: "22/07/2026"
    },

    {
      modulo: "Archivos",
      descripcion: "Documento sin información requerida",
      prioridad: "Baja",
      estado: "Solucionado",
      fecha: "21/07/2026"
    }

  ];



  return (

    <div className="page-container">



      <div className="page-header">

        <h1>
          Errores
        </h1>

        <p>
          Monitoreo y seguimiento de incidencias del sistema.
        </p>

      </div>





      <div className="dashboard-grid">



        <div className="kpi-card">

          <div>

            <p>
              Errores totales
            </p>

            <h2>
              12
            </h2>

            <span>
              Registrados
            </span>

          </div>

        </div>




        <div className="kpi-card">

          <div>

            <p>
              Pendientes
            </p>

            <h2>
              4
            </h2>

            <span>
              Requieren atención
            </span>

          </div>

        </div>




        <div className="kpi-card">

          <div>

            <p>
              Solucionados
            </p>

            <h2>
              8
            </h2>

            <span>
              Correctamente
            </span>

          </div>

        </div>



      </div>







      <div className="panel">



        <div className="panel-header">

          <h3>
            Historial de errores
          </h3>

        </div>





        <table className="gmail-table">


          <thead>

            <tr>

              <th>
                Módulo
              </th>

              <th>
                Descripción
              </th>

              <th>
                Prioridad
              </th>

              <th>
                Estado
              </th>

              <th>
                Fecha
              </th>

            </tr>

          </thead>





          <tbody>


            {
              errores.map((error,index)=>(

                <tr key={index}>


                  <td>
                    {error.modulo}
                  </td>


                  <td>
                    {error.descripcion}
                  </td>


                  <td>

                    <span className={
                      error.prioridad === "Alta"
                      ? "status-error"
                      :
                      error.prioridad === "Media"
                      ? "status-warning"
                      :
                      "status-ok"
                    }>

                      {error.prioridad}

                    </span>

                  </td>



                  <td>
                    {error.estado}
                  </td>



                  <td>
                    {error.fecha}
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


export default Errors;