import styles from '../styles/Header.module.css'; // Import styles as a module

// Functional component, no props to type
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Techible</div>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={styles.userIcon}>👤</div>
    </header>
  );
};

export default Header;
