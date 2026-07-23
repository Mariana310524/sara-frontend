function Files() {

const archivos = [
{
nombre: 'ventas_julio.xlsx',
estado: 'Procesado',
fecha: '23/07/2026'
},
{
nombre: 'inventario.csv',
estado: 'Pendiente',
fecha: '23/07/2026'
},
{
nombre: 'sellthrough_q3.xlsx',
estado: 'Procesado',
fecha: '22/07/2026'
}
];

return ( <div className='page-container'>

```
  <div className='page-header'>
    <h1>Archivos</h1>
    <p>Gestión de documentos cargados en la plataforma.</p>
  </div>

  <div className='table-container'>

    <table className='gmail-table'>

      <thead>
        <tr>
          <th>Archivo</th>
          <th>Estado</th>
          <th>Fecha</th>
        </tr>
      </thead>

      <tbody>

        {archivos.map((a, i) => (

          <tr key={i}>
            <td>{a.nombre}</td>
            <td>{a.estado}</td>
            <td>{a.fecha}</td>
          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>


);
}

export default Files;
