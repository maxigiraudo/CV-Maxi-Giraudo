import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.css";
import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import trabajo from "../../images/trabajo.jpg";
import wallaby from "../../images/wallaby.png";
import dogs from "../../images/dogs.png";
import movies from "../../images/movies.png";
import weather from "../../images/weather.png";
import turnero from "../../images/turnero.png";
import imagenPresupuesto from "../../images/imagenPresupuesto.png";

const LandingPage = () => {
  const [boton, setBoton] = useState(true);

  function clickEducacion() {
    setBoton(true);
  }
  function clickExperiencia() {
    setBoton(false);
  }
  console.log(boton);
  return (
    <div>
      <NavBar />
      <div className={styles.redesSociales}>
        <a target="_blank" href="https://github.com/maxigiraudo">
          {BsGithub()}
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/maximiliano-giraudo-2a1933119/"
        >
          {BsLinkedin()}
        </a>
        <a target="_blank" href="https://www.instagram.com/maxigiraudo/">
          {BsInstagram()}
        </a>
      </div>
      <div id="landing" className={styles.contenedorLanding}>
        <div className={styles.text}>
          <p className={styles.ps}>CV</p>
          <div className={styles.letrosebich}>
            <p className={styles.p}>Maxi</p>
            <p className={styles.maxi}>Giraudo</p>
            <p className={styles.p}>.</p>
          </div>
          <a target="">
            <div className={styles.pfsd}>
              <p>{AiOutlineMail()} maximilianoezequielgiraudo@gmail.com</p>
              <p>{BsWhatsapp()} 3517691153</p>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.total}>
        <div className={styles.barraAmarilla}>.</div>
        <div>
          <div className={styles.botones}>
            {boton ? (
              <button
                id="educacion"
                className={styles.button}
                onClick={() => clickEducacion()}
              >
                EDUCACI??N
              </button>
            ) : (
              <button
                onClick={() => clickEducacion()}
                id="educacion"
                className={styles.buttonContrario}
              >
                EDUCACI??N
              </button>
            )}
            {boton ? (
              <button
                onClick={() => clickExperiencia()}
                id="experiencia"
                className={styles.buttonContrario}
              >
                EXPERIENCIA
              </button>
            ) : (
              <button
                id="experiencia"
                className={styles.button}
                onClick={() => clickExperiencia()}
              >
                EXPERIENCIA
              </button>
            )}
          </div>
          {boton === true ? (
            <div className={styles.educacionn}>
              <div className={styles.textEducationn}>
                <div className={styles.educacion1}>
                  <h2 className={styles.ttEdu}>Full Stack Developer</h2>
                  <h3>Academia: SOY HENRY - Bootcamp + 800 horas</h3>
                  <h4>Finalizado</h4>
                  <a
                    className={styles.certificado}
                    target="_blank"
                    href="https://certificates.soyhenry.com/cert?id=b8acae4f-8e43-4ae9-8a52-9b61a4585a7a"
                  >
                    {TbCertificate()} Certificado
                  </a>
                </div>
                <div className={styles.educacion1}>
                  <h2 className={styles.ttEdu}>Curso de Ingl??s B1-B2</h2>
                  <h3>Academia: The Academy</h3>
                  <h4>Cursando</h4>
                </div>
                <div className={styles.educacion1}>
                  <h2 className={styles.ttEdu}>Ingenieria Industrial</h2>
                  <h3>Universidad Tecnol??gica Nacional - UTN</h3>
                  <h4>4 a??os cursados</h4>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.divExp}>
              <div>
                <img className={styles.imgExp} src={trabajo} />
              </div>
              <div className={styles.divInform}>
                <div>
                  <h3 className={styles.ttExp}>E-COMMERCE NFT - ACAD??MICO</h3>
                  <h4>
                    E-Commerce para compra y venta de NFTS conectado a la WEB 3
                    mediante la billetera virtual de MetaMask. Trabajo grupal de
                    8 personas en donde forme parte del equipo de Front End,
                    utilizando Metodolog??as ??giles "SCRUM", y el Flujo de Git
                    "GIT FLOW".
                  </h4>
                </div>
                <div>
                  <h3 className={styles.ttExp}>
                    Single Page Application - ACAD??MICO
                  </h3>
                  <h4>
                    Desarrollo de una SPA en donde podemos ver diferentes razas
                    de perros, filtrarlas, ordenarlas, y hasta crear nuevas
                    razas. Esto fue un trabajo individual en donde me ocupe
                    tanto del Front End como del Back End y la Base de Datos.
                  </h4>
                </div>
                <div>
                  <h3 className={styles.ttExp}>VENDEDOR - Maipu Automotores</h3>

                  <h4>
                    Venta de veh??culos Chevrolet 0KM, manejo de agenda y
                    contacto a clientes.
                  </h4>
                  <h5>2022 - Actualidad</h5>
                </div>
                <div>
                  <h3 className={styles.ttExp}>
                    COPY WRITER - Municipalidad de C??rdoba
                  </h3>

                  <h4>
                    Formaba parte de un equipo CM en donde manejabamos las redes
                    sociales de la Municipalidad de C??rdoba y del Intendente. Mi
                    tarea principal era redactar los copys en las publicaci??nes.
                  </h4>
                  <h5>2021 - 2022</h5>
                </div>
                <div>
                  <h3 className={styles.ttExp}>NETWORKER - Amway</h3>
                  <h4>
                    Manejo de equipo, manteniendo y superando facturaciones de
                    8.000 USD grupales, en productos de primera necesidad y
                    consumo masivo.
                  </h4>
                  <h5>2017 - 2021</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.barraAmarilla}>.</div>
      <h1 id="portfolio" className={styles.portfolio}>
        PORTFOLIO
      </h1>
      <h3 className={styles.sub}>REACT-NATIVE</h3>
      <div className={styles.cardsNative}>
        <div className={styles.cardPadre}>
          <a
            className={styles.henry}
            target="_blank"
            href="https://www.youtube.com/watch?v=TKLTpjBVuOI"
          >
            <p className={styles.buttonn}>Video Turnero </p>
          </a>
          <a
            target="_blank"
            href="https://github.com/maxigiraudo/turnosVeterinaria"
          >
            <div className={styles.card}>
              <div className={styles.descriptionCard}>
                <h3>Turnero</h3>
                <p>
                  Turnos Veterinaria es una APP MOBILE que permite agendar,
                  editar y eliminar turnos de una veterinaria
                </p>
                <p>Visit?? el repositorio</p>
              </div>
              <img
                className={styles.cardImageVertical}
                src={turnero}
                alt="turnero"
              />
            </div>
          </a>
        </div>
        <div className={styles.cardPadre}>
          <a
            className={styles.henry}
            target="_blank"
            href="https://youtu.be/6SaPWvruhYU"
          >
            <p className={styles.buttonn}>Video Control de Presupuesto </p>
          </a>
          <a
            target="_blank"
            href="https://github.com/maxigiraudo/controlPresupuesto"
          >
            <div className={styles.card}>
              <div className={styles.descriptionCard}>
                <h3>Control de Presupuesto</h3>
                <p>
                  Es una APP mobile, en donde utilizamos Async Storage. Su
                  funci??n es controlar los gastos para las personas que lo
                  requieran. Permite agregar gastos, editarlos y eliminarlos.
                </p>
                <p>Visit?? el repositorio</p>
              </div>
              <img
                className={styles.cardImageVertical}
                src={imagenPresupuesto}
                alt="imagenPresupuesto"
              />
            </div>
          </a>
        </div>
      </div>
      <h3 className={styles.sub}>JAVASCRIPT FULL STACK</h3>
      <div className={styles.cards}>
        <div className={styles.cardPadre}>
          <a
            className={styles.henry}
            target="_blank"
            href="https://youtu.be/VUr_aZEccI8"
          >
            <p className={styles.buttonn}>Video Wallaby </p>
          </a>
          <a
            target="_blank"
            href="https://github.com/maxigiraudo/WallabyApp-Frontend"
          >
            <div className={styles.card}>
              <div className={styles.descriptionCard}>
                <h3>Wallaby</h3>
                <p>
                  Wallaby es un Market Place de NFT que se conecta a la Web3 por
                  medio de Metamask, en el sitio podemos comprar, crear, y
                  vender nuestros propios NFT.
                </p>
                <p>Visit?? el repositorio</p>
              </div>
              <img className={styles.cardImage} src={wallaby} alt="wallaby" />
            </div>
          </a>
        </div>
        <div className={styles.cardPadre}>
          <a
            className={styles.henry}
            target="_blank"
            href="https://youtu.be/jFHICnvBm1Y"
          >
            <p className={styles.buttonn}>Video Dogs </p>
          </a>
          <a target="_blank" href="https://github.com/maxigiraudo/Dogs">
            <div className={styles.card}>
              <div className={styles.descriptionCard}>
                <h3>Dogs SPA</h3>
                <p>
                  Dogs es una SPA (Single Page Application) que hace pedidos a
                  una API externa y puede buscar cualquier raza de perro, adem??s
                  tambien te permite crear una raza nueva.
                </p>
                <p>Visit?? el repositorio</p>
              </div>
              <img className={styles.cardImage} src={dogs} alt="dogs" />
            </div>
          </a>
        </div>
      </div>
      <h3 className={styles.sub}>JAVASCRIPT FRONTEND</h3>
      <div className={styles.cards}>
        <div className={styles.cardPadre}>
          <a target="_blank" href="https://github.com/maxigiraudo/App-Movies">
            <div className={styles.card}>
              <div className={styles.descriptionCard}>
                <h3>App Movies</h3>
                <p>
                  Movies es una App que haciendo consultas a una API externa
                  permite buscar cualquier pelicula
                </p>
                <p>Visit?? el repositorio</p>
              </div>
              <img className={styles.cardImage} src={movies} alt="movies" />
            </div>
          </a>
        </div>
        <div className={styles.cardPadre}>
          <a target="_blank" href="https://github.com/maxigiraudo/App-Weather">
            <div className={styles.card}>
              <div className={styles.descriptionCard}>
                <h3>App Weather</h3>
                <p>
                  Weather es una App que haciendo consultas a una API externa
                  permite buscar cualquier pelicula
                </p>
                <p>Visit?? el repositorio</p>
              </div>
              <img className={styles.cardImage} src={weather} alt="weather" />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
