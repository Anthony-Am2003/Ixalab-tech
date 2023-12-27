import React from 'react';
import './landingPage.css'; 

const LandingPge = () => {
    return (
        <div className="sostenibilidad-container">
          <div className="content-container">
            <section className="main-section">
              <h1 className='title'>Ixalab</h1>
              <img className="side-image" src="https://www.jmp.com/es_co/statistics-knowledge-portal/exploratory-data-analysis/bar-chart/_jcr_content/par/styledcontainer_2069/par/image.img.png/1594745266124.png" alt="barra" />
             
              <p className='text'>
                En Ixalab, nos dedicamos a promover la sostenibilidad empresarial mediante el estudio
                del ciclo de vida de los productos. Nuestra misión es ayudar a las empresas a comprender
                y minimizar su impacto ambiental, desde la producción hasta la disposición final.
              </p>
    
              <p className='text'>
                Trabajamos en colaboración con empresas para implementar prácticas sostenibles,
                identificar oportunidades de mejora y fomentar la innovación ecoamigable. Nuestra
                visión es crear un mundo empresarial que priorice la responsabilidad ambiental y social.
              </p>

            </section>
    
            <section className="cta-section">
              <h2 className='text'>¿Listo para hacer tu empresa más sostenible?</h2>
              <p className='text'>
                Únete a nosotros en el camino hacia la sostenibilidad. ¡Contáctanos para conocer cómo
                podemos trabajar juntos para crear un impacto positivo en tu empresa y en el medio ambiente!
              </p>
              <a href="#" className="cta-button">Contactar Ahora</a>
            </section>
          </div>
        </div>
      );
    };


export default LandingPge;
