import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);
const Main = () => {
    const navigate = useNavigate();
  
    const handleClick = (slug) => {
      navigate("/detalle/" + slug);
    }
  
return <main>
    <Carousel>
      {
        videojuegos.map(it => {
          return (<Carousel.Item onClick={(e) => {
            e.preventDefault(); handleClick(it.slug)
          }}>
            <img className='w-100 dark-image' src={it.picture}></img>
            <Carousel.Caption>
              <h3 className="title-carousel text-light fw-medium">{it.name}</h3>
              <p className="title-carousel text-light fw-medium">{it.description}</p>
              <button className="botton-carousel text-light btn">Ver detalle</button>
            </Carousel.Caption>
          </Carousel.Item>);
        })
      }
    </Carousel>
  </main >;
}

const videojuegos = [
    {
      name: "Marvel´s Spider-Man 2",
      slug: 'videojuegos-1',
      description: "Aventúrate en la segunda entrega de Spider-Man para PS5",
      picture: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/e66c4ae18c5d8e3986a24599b293162a6f5c9eba22968d2c.jpg'
    },
    {
      name: "Minecraft Legends – Deluxe Edition",
      slug: 'videojuegos-2',
      description: "Descubre los misterios de Minecraft Legends, un nuevo juego de acción y estrategia.",
      picture: 'https://i.ytimg.com/vi/Dyq9zIHerWQ/maxresdefault.jpg'
    },
    {
      name: "Call Of Duty: Modern Warfare III",
      slug: 'videojuegos-3',
      description: "Celebra el 20 aniversario de COD con una de las sagas de shooters más famosas",
      picture: 'https://image.api.playstation.com/vulcan/ap/rnd/202308/1415/a43f7a9e28b0ff81d82f9a83bc85d5d5fe59b6f7bdd6828f.jpg'
    },
  ];
export default Main;