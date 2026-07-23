import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiMail,
  FiLayers,
  FiFolder,
  FiAlertCircle,
  FiClock,
  FiSettings
} from 'react-icons/fi';

function Sidebar() {

  const menu = [
    { path: '/', label: 'Dashboard', icon: <FiHome /> },
    { path: '/gmail', label: 'Gmail', icon: <FiMail /> },
    { path: '/pipeline', label: 'Pipeline', icon: <FiLayers /> },
    { path: '/files', label: 'Archivos', icon: <FiFolder /> },
    { path: '/errors', label: 'Errores', icon: <FiAlertCircle /> },
    { path: '/history', label: 'Historial', icon: <FiClock /> },
    { path: '/settings', label: 'Configuración', icon: <FiSettings /> },
  ];

  return (
    <aside className='sidebar'>

      <div className='sidebar-brand'>

        <div className='brand-logo'>
          S
        </div>

        <div className='brand-text'>
          <h2>SARA</h2>
          <span>Analytics Platform</span>
        </div>

      </div>

      <nav className='sidebar-nav'>

        {menu.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'nav-item active' : 'nav-item'
            }
          >

            <span className='nav-icon'>
              {item.icon}
            </span>

            <span className='nav-label'>
              {item.label}
            </span>

          </NavLink>

        ))}

      </nav>

      <div className='sidebar-footer'>

        <div className='footer-card'>

          <div className='footer-status'></div>

          <div>
            <p>Servidor</p>
            <span>En línea</span>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;