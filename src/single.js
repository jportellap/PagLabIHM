import Videojuegos from './data/videojuegos.json'
import './style.css';

const Single = () => {

    const currentRoute = window.location.pathname;
    const videojuegos = Videojuegos.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{videojuegos.name}</h1>
        <hr></hr>
        <img src={videojuegos.picture}></img>
        <p>{videojuegos.description}</p>
    </>);
}

export default Single;