function Files() {


  const archivos = [

    {
      nombre: "ventas_julio.xlsx",
      tipo: "Excel",
      estado: "Procesado",
      fecha: "23/07/2026"
    },

    {
      nombre: "inventario.csv",
      tipo: "CSV",
      estado: "Pendiente",
      fecha: "23/07/2026"
    },

    {
      nombre: "sellthrough_q3.xlsx",
      tipo: "Excel",
      estado: "Procesado",
      fecha: "22/07/2026"
    }

  ];



  return (

    <div className="page-container">


      <div className="page-header">

        <h1>
          Archivos
        </h1>

        <p>
          Gestión y seguimiento de documentos cargados en SARA.
        </p>

      </div>




      <div className="dashboard-grid">


        <div className="kpi-card">

          <div>

            <p>Total archivos</p>

            <h2>
              24
            </h2>

            <span>
              Registrados
            </span>

          </div>

        </div>




        <div className="kpi-card">

          <div>

            <p>Procesados</p>

            <h2>
              18
            </h2>

            <span>
              Correctamente
            </span>

          </div>

        </div>




        <div className="kpi-card">

          <div>

            <p>Pendientes</p>

            <h2>
              6
            </h2>

            <span>
              Revisión requerida
            </span>

          </div>

        </div>


      </div>





      <div className="panel">


        <div className="panel-header">

          <h3>
            Documentos recientes
          </h3>

        </div>




        <table className="gmail-table">


          <thead>

            <tr>

              <th>
                Archivo
              </th>

              <th>
                Tipo
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
              archivos.map((archivo,index)=>(

                <tr key={index}>


                  <td>
                    {archivo.nombre}
                  </td>


                  <td>
                    {archivo.tipo}
                  </td>


                  <td>

                    <span className={
                      archivo.estado === "Procesado"
                      ? "status-ok"
                      : "status-warning"
                    }>

                      {archivo.estado}

                    </span>

                  </td>


                  <td>
                    {archivo.fecha}
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


export default Files;