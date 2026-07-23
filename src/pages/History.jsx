function History() {

  const eventos = [
    {
      icono: '📧',
      titulo: 'Sincronización Gmail completada',
      fecha: '23 Jul 2026 • 10:42 AM',
      estado: 'Completado'
    },
    {
      icono: '📂',
      titulo: 'Archivo ventas_julio.xlsx procesado',
      fecha: '23 Jul 2026 • 10:15 AM',
      estado: 'Procesado'
    },
    {
      icono: '⚙️',
      titulo: 'Pipeline ejecutado correctamente',
      fecha: '23 Jul 2026 • 09:58 AM',
      estado: 'Exitoso'
    },
    {
      icono: '📊',
      titulo: 'Dashboard actualizado',
      fecha: '22 Jul 2026 • 06:30 PM',
      estado: 'Actualizado'
    },
    {
      icono: '🔄',
      titulo: 'Nueva ejecución programada',
      fecha: '22 Jul 2026 • 05:12 PM',
      estado: 'Programado'
    }
  ];

  return (
    <div className='page-container'>

      <div className='page-header'>
        <h1>Historial</h1>
        <p>Actividad reciente y trazabilidad del sistema SARA.</p>
      </div>

      <div className='history-list'>

        {eventos.map((evento, i) => (

          <div key={i} className='history-card'>

            <div className='history-icon'>
              {evento.icono}
            </div>

            <div className='history-content'>

              <div className='history-top'>

                <h3>{evento.titulo}</h3>

                <span className='history-status'>
                  {evento.estado}
                </span>

              </div>

              <p>{evento.fecha}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default History;