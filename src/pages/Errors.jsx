function Errors() {

const errores = [
{
tipo: 'Validación',
detalle: 'Archivo sin encabezados requeridos',
hora: '10:32'
},
{
tipo: 'Conectividad',
detalle: 'Tiempo de espera excedido',
hora: '09:18'
},
{
tipo: 'Formato',
detalle: 'Columna de fechas inválida',
hora: 'Ayer'
}
];

return ( <div className='page-container'>

```
  <div className='page-header'>
    <h1>Errores</h1>
    <p>Registro de incidencias detectadas por el sistema.</p>
  </div>

  <div className='error-list'>

    {errores.map((e, i) => (

      <div key={i} className='error-card'>

        <div className='error-badge'>{e.tipo}</div>

        <h3>{e.detalle}</h3>

        <span>{e.hora}</span>

      </div>

    ))}

  </div>

</div>


);
}

export default Errors;
