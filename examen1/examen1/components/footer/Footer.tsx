import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <h2>¡Síguenos!</h2>
      <ul>
        <li>
          <a href="https://www.facebook.com/pamee.contreras.142?mibextid=ZbWKwL" style={{ fontSize: '30px', display: 'block' }}>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=+50687460160" style={{ fontSize: '30px', display: 'block' }}>
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="mailto:barrantespamela2103@gmail.com" style={{ fontSize: '30px', display: 'block' }}>
            <FaEnvelope />
          </a>
        </li>
      </ul>
      
      <div>
        <h2>¡Contáctanos!</h2>
        <ul>
          <li>
         Cuidad: Cuidad Neily, Puntarena, Costa Rica
          </li>
          <li>
            Correo electrónico: barrantespamela2103@gmail.com
          </li>
          <li>
            Teléfono: +506 87460160
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;



