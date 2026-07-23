function Pipeline() {

const procesos = [
{
nombre: 'Procesamiento Gmail',
estado: 'En ejecución',
progreso: 78
},
{
nombre: 'Extracción de archivos',
estado: 'Completado',
progreso: 100
},
{
nombre: 'Validación de documentos',
estado: 'Pendiente',
progreso: 35
}
];

return ( <div className='page-container'>

```
  <div className='page-header'>
    <h1>Pipeline</h1>
    <p>Monitoreo de procesos y automatizaciones de SARA.</p>
  </div>

  <div className='pipeline-list'>

    {procesos.map((p, index) => (

      <div key={index} className='pipeline-card'>

        <div className='pipeline-top'>
          <h3>{p.nombre}</h3>
          <span className='pipeline-status'>{p.estado}</span>
        </div>

        <div className='progress-bar'>
          <div
            className='progress-fill'
            style={{ width: `${p.progreso}%` }}
          ></div>
        </div>

        <p>{p.progreso}% completado</p>

      </div>

    ))}

  </div>

</div>


);
}

export default Pipeline;
