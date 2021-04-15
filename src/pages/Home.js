import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <Logo/>         
        </div>
    )
}

export default Home; //permet de réutiliser partout le composant Home