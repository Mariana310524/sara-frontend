function Settings() {

return ( <div className='page-container'>

```
  <div className='page-header'>
    <h1>Configuración</h1>
    <p>Parámetros generales de la plataforma SARA.</p>
  </div>

  <div className='settings-grid'>

    <div className='settings-card'>
      <h3>Cuenta conectada</h3>
      <p>demo@aguabendita.com.co</p>
    </div>

    <div className='settings-card'>
      <h3>Entorno</h3>
      <p>Producción</p>
    </div>

    <div className='settings-card'>
      <h3>Sincronización</h3>
      <p>Automática cada 30 minutos</p>
    </div>

    <div className='settings-card'>
      <h3>Versión</h3>
      <p>SARA v1.0.0</p>
    </div>

  </div>

</div>


);
}

export default Settings;
