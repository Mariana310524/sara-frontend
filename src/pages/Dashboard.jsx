import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid
} from 'recharts';

import {
FiMail,
FiBarChart2,
FiCheckCircle,
FiClock
} from 'react-icons/fi';

function Dashboard() {

const datos = [
{ semana: 'Lun', correos: 120 },
{ semana: 'Mar', correos: 210 },
{ semana: 'Mié', correos: 180 },
{ semana: 'Jue', correos: 260 },
{ semana: 'Vie', correos: 320 },
{ semana: 'Sáb', correos: 150 },
{ semana: 'Dom', correos: 90 },
];

return ( <div className='dashboard-page'>

```
  <div className='page-header'>
    <h1>Dashboard</h1>
    <p>Resumen general de la plataforma SARA</p>
  </div>

  <div className='dashboard-grid'>

    <div className='kpi-card'>
      <div className='kpi-icon'>
        <FiMail />
      </div>

      <div>
        <p>Correos analizados</p>
        <h2>1248</h2>
        <span>+12% este mes</span>
      </div>
    </div>

    <div className='kpi-card'>
      <div className='kpi-icon'>
        <FiBarChart2 />
      </div>

      <div>
        <p>Procesos activos</p>
        <h2>24</h2>
        <span>Sin incidencias</span>
      </div>
    </div>

    <div className='kpi-card'>
      <div className='kpi-icon'>
        <FiCheckCircle />
      </div>

      <div>
        <p>Documentos procesados</p>
        <h2>356</h2>
        <span>Últimas 24 horas</span>
      </div>
    </div>

    <div className='kpi-card'>
      <div className='kpi-icon'>
        <FiClock />
      </div>

      <div>
        <p>Tiempo promedio</p>
        <h2>2.4m</h2>
        <span>Por ejecución</span>
      </div>
    </div>

  </div>

  <div className='panel' style={{ marginBottom: '24px' }}>

    <div className='panel-header'>
      <h3>Correos procesados por semana</h3>
    </div>

    <div style={{ width: '100%', height: 320 }}>

      <ResponsiveContainer width='100%' height='100%'>

        <LineChart data={datos}>

          <CartesianGrid strokeDasharray='3 3' />

          <XAxis dataKey='semana' />

          <YAxis />

          <Tooltip />

          <Line
            type='monotone'
            dataKey='correos'
            stroke='#D4AF37'
            strokeWidth={3}
            dot={{ r: 5 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  </div>

  <div className='dashboard-panels'>

    <div className='panel'>

      <div className='panel-header'>
        <h3>Actividad reciente</h3>
      </div>

      <div className='activity-list'>

        <div className='activity-item'>
          <div className='activity-dot success'></div>

          <div>
            <p>Procesamiento de Gmail completado</p>
            <span>Hace 5 minutos</span>
          </div>
        </div>

        <div className='activity-item'>
          <div className='activity-dot info'></div>

          <div>
            <p>Nuevo archivo detectado en Pipeline</p>
            <span>Hace 18 minutos</span>
          </div>
        </div>

        <div className='activity-item'>
          <div className='activity-dot warning'></div>

          <div>
            <p>Revisión manual requerida</p>
            <span>Hace 42 minutos</span>
          </div>
        </div>

      </div>

    </div>

    <div className='panel'>

      <div className='panel-header'>
        <h3>Estado del sistema</h3>
      </div>

      <div className='system-status'>

        <div className='status-row'>
          <span>API Backend</span>
          <span className='status-ok'>Operativo</span>
        </div>

        <div className='status-row'>
          <span>Pipeline</span>
          <span className='status-ok'>Operativo</span>
        </div>

        <div className='status-row'>
          <span>Gmail Sync</span>
          <span className='status-ok'>Operativo</span>
        </div>

        <div className='status-row'>
          <span>Base de datos</span>
          <span className='status-ok'>Operativo</span>
        </div>

      </div>

    </div>

  </div>

</div>


);
}

export default Dashboard;
