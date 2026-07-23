import { useState } from 'react';
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


  const [width, setWidth] = useState(260);


  const menu = [
    { path: '/', label: 'Dashboard', icon: <FiHome /> },
    { path: '/gmail', label: 'Gmail', icon: <FiMail /> },
    { path: '/pipeline', label: 'Pipeline', icon: <FiLayers /> },
    { path: '/files', label: 'Archivos', icon: <FiFolder /> },
    { path: '/errors', label: 'Errores', icon: <FiAlertCircle /> },
    { path: '/history', label: 'Historial', icon: <FiClock /> },
    { path: '/settings', label: 'Configuración', icon: <FiSettings /> },
  ];



  const moverSidebar = (e) => {

    const nuevoAncho = e.clientX;


    if(nuevoAncho >= 200 && nuevoAncho <= 400){

      setWidth(nuevoAncho);

    }

  };



  const detenerResize = () => {

    document.removeEventListener(
      'mousemove',
      moverSidebar
    );

  };



  const iniciarResize = () => {

    document.addEventListener(
      'mousemove',
      moverSidebar
    );


    document.addEventListener(
      'mouseup',
      detenerResize
    );

  };



  return (

    <aside 
      className='sidebar'
      style={{width:`${width}px`}}
    >


      <div className='sidebar-brand'>


        <div className='brand-logo'>
          S
        </div>


        <div className='brand-text'>

          <h2>SARA</h2>

          <span>
            Analytics Platform
          </span>

        </div>


      </div>



      <nav className='sidebar-nav'>


        {menu.map((item)=>(


          <NavLink

            key={item.path}

            to={item.path}

            className={({isActive}) =>
              isActive 
              ? 'nav-item active' 
              : 'nav-item'
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

            <p>
              Servidor
            </p>

            <span>
              En línea
            </span>


          </div>


        </div>


      </div>




      {/* MANIJA PARA CAMBIAR TAMAÑO */}

      <div

        className="resize-handle"

        onMouseDown={iniciarResize}

      />



    </aside>


  );

}


export default Sidebar;