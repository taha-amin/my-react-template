import styles from './Home.css';
import PokemonCenterImage from '/Users/mohamedamin/Desktop/alchemy/Module-4/Week-1/my-react-template/public/pokemon-center.jpeg';

export default function Home() {
  return (
    <div
      className={styles.Home}
      style={{ backgroundImage: 'url("pokemon-center.jpeg")' }}
    >
      <h1>Alchemy Pokemon Center</h1>
      {/* <img src={PokemonCenterImage} alt="pokemon center" /> */}
      <br />
      <p>
        Welcome to the Alchemy Pokemon Center! Take a rest from all your travels
        and battles and heal your Pokemon here, or browse our selection of
        Pokemon. We have a wide variety of Pokemon you can look for, including
        rare Pokemon that you wont find anywhere else!
      </p>
    </div>
  );
}
