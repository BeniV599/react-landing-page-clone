import styles from './App.module.scss';
import { ReactComponent as Logo } from './logo.svg';

export default function App() {
  return (
    <>
      <header>
        <nav className={`${styles.container} ${styles.navBar}`}>
          <div>
            <Logo />
          </div>
          <ul>
            <li>
              <a href="/#">Modern BI</a>
            </li>
            <li>
              <a href="/#">Why Mode</a>
            </li>
            <li>
              <a href="/#">Customer Stories</a>
            </li>
            <li>
              <a href="/#">Compare Plans</a>
            </li>
            <li>
              <a href="/#">Resources</a>
            </li>
          </ul>
          <div>
            <a href="/#">Sign in</a>
            <a href="/#">Try for free</a>
          </div>
        </nav>
      </header>
      <main>My dish div soup, oop!</main>
      <footer>My leg! My leeeeg.</footer>
    </>
  );
}
