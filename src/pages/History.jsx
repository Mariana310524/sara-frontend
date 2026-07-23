function History() {

const eventos = [
'Pipeline ejecutado correctamente',
'Sincronización Gmail completada',
'Archivo ventas_julio.xlsx procesado',
'Dashboard actualizado',
'Nueva ejecución programada'
];

return ( <div className='page-container'>

```
  <div className='page-header'>
    <h1>Historial</h1>
    <p>Actividad reciente y trazabilidad del sistema.</p>
  </div>

  <div className='history-list'>

    {eventos.map((evento, i) => (

      <div key={i} className='history-item'>

        <div className='history-dot'></div>

        <span>{evento}</span>

      </div>

    ))}

  </div>

</div>


);
}

export default History;
