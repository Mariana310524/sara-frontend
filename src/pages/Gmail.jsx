import { useState } from "react";
import { 
  FiMail,
  FiPaperclip,
  FiCheckCircle,
  FiAlertTriangle
} from "react-icons/fi";


function Gmail() {


  const [estado, setEstado] = useState("No conectado");
  const [totales, setTotales] = useState(0);
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(false);



  async function conectarGmail() {


    setCargando(true);
    setEstado("Conectando...");


    setTimeout(() => {


      setEstado("Conectado");


      setTotales(12);


      setMensajes([

        {
          id: 1,
          subject: "Reporte de ventas semanal"
        },

        {
          id: 2,
          subject: "Informe de inventario"
        },

        {
          id: 3,
          subject: "Archivo adjunto SARA"
        },

        {
          id: 4,
          subject: "Seguimiento comercial"
        }

      ]);


      setCargando(false);


    }, 1500);


  }




  return (


    <div className="gmail-page">



      <div className="gmail-header">


        <h1>
          Integración Gmail
        </h1>


        <p>
  Plataforma de análisis y procesamiento de correos corporativos.
</p>



        <button
          className="btn-gmail"
          onClick={conectarGmail}
          disabled={cargando}
        >

          {cargando ? "Conectando..." : "Buscar correos"}

        </button>


      </div>





      <div className="gmail-card estado-card">


        <div className="estado-header">


          <h3>
            Estado de conexión
          </h3>



          <span
            className={
              estado === "Conectado"
              ? "estado-badge activo"
              : "estado-badge"
            }
          >

            {estado === "Conectado" ? "● Conectado" : estado}

          </span>



        </div>



        <p className="estado-texto">

          {estado}

        </p>



      </div>






      <div className="gmail-card resumen-card">


        <div className="resumen-icono">

          <FiMail />

        </div>



        <div>


          <p className="resumen-label">
            Total de correos
          </p>



          <h2 className="resumen-numero">
            {totales}
          </h2>


        </div>



      </div>







      <div className="gmail-stats">



        <div className="stat-card">

          <span className="stat-icon">
            <FiMail />
          </span>

          <div>

            <p>
              Correos encontrados
            </p>

            <h2>
              {totales}
            </h2>

          </div>

        </div>





        <div className="stat-card">


          <span className="stat-icon">

            <FiPaperclip />

          </span>



          <div>

            <p>
              Adjuntos
            </p>

            <h2>
              5
            </h2>


          </div>


        </div>







        <div className="stat-card">


          <span className="stat-icon">

            <FiCheckCircle />

          </span>



          <div>


            <p>
              Procesados
            </p>


            <h2>
              8
            </h2>



          </div>


        </div>







        <div className="stat-card">


          <span className="stat-icon">

            <FiAlertTriangle />

          </span>



          <div>


            <p>
              Errores
            </p>


            <h2>
              0
            </h2>



          </div>


        </div>



      </div>







      <div className="gmail-table-container">



        <table className="gmail-table">



          <thead>

            <tr>

              <th>
                #
              </th>


              <th>
                Asunto
              </th>


            </tr>


          </thead>






     {mensajes.length === 0 ? (
  <tr>
    <td colSpan="3" style={{ textAlign: 'center', padding: '30px' }}>
      No hay correos para mostrar
    </td>
  </tr>
) : (
  mensajes.map((msg, index) => (
    <tr key={msg.id}>
      <td>
        <div className="mail-index">{index + 1}</div>
      </td>

      <td>
        <div className="mail-subject">
          <FiMail className="mail-icon" />
          <span>{msg.subject}</span>
        </div>
      </td>

      <td className="mail-date">
        Hoy
      </td>
    </tr>
  ))
)}




        </table>



      </div>






    </div>


  );

}


export default Gmail;