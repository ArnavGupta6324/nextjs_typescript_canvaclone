import styles from '../styles/MainSection.module.css'; // Importing the CSS module

// Define functional component using React.FC (optional, but recommended for type safety)
const MainSection: React.FC = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContent}>
        <h1>Learn A New Skill</h1>
        <p>
          Unlock your potential and master a new skill with our expert-led courses. Whether you’re looking to enhance your career or explore new passions, we provide the tools and guidance to help you succeed. Start learning today!
        </p>
        <button className={styles.startButton}>START NOW &gt;</button>
      </div>
      {/* Ensure that "main.png" is placed in the "public" folder */}
      <img src="/main.png" alt="Learn AI/ML" className={styles.imagePlaceholder} />
    </section>
  );
};

export default MainSection;
