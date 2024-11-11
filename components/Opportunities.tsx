import Image from 'next/image';
import styles from '../styles/Opportunities.module.css'; // Importing CSS module for scoped styling

// Define types for the opportunity object
interface Opportunity {
  title: string;
  type: string;
  participants: string;
  daysLeft: string;
  image: string;
}

const Opportunities: React.FC = () => {
  const opportunities: Opportunity[] = [
    {
      title: "Advaita-2024",
      type: "Festival",
      participants: "14,292 Registered",
      daysLeft: "12 Competitions",
      image: "/images/bussiness.png", // Ensure images are placed under the 'public/images' folder
    },
    {
      title: "PhD Sponsorships, Cash Rewards & Internships",
      type: "Online | Free",
      participants: "2,491 Registered",
      daysLeft: "29 days left",
      image: "/images/phd.png",
    },
    {
      title: "The Ultimate Pitch",
      type: "Online | Free",
      participants: "4,733 Registered",
      daysLeft: "19 days left",
      image: "/images/ultimate.png",
    },
    {
      title: "Luminous Techno-X",
      type: "Online | Free",
      participants: "55,002 Registered",
      daysLeft: "4 days left",
      image: "/images/techno.png",
    },
  ];

  return (
    <section className={styles.opportunitiesSection}>
      {/* Featured Opportunities */}
      <div className={styles.opportunityGroup}>
        <h2>Featured Opportunities</h2>
        <p>Check out the curated opportunities handpicked for you from top organizations.</p>
        <div className={styles.opportunityCards}>
          {opportunities.map((opportunity, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={opportunity.image}
                alt={opportunity.title}
                width={300}
                height={200}
                className={styles.opportunityImage}
              />
              <h3>{opportunity.title}</h3>
              <p className={styles.type}>{opportunity.type}</p>
              <p className={styles.participants}>{opportunity.participants}</p>
              <p className={styles.daysLeft}>{opportunity.daysLeft}</p>
              <button className={styles.registerButton}>Register Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Project-Based Internships under Faculties */}
      <div className={styles.opportunityGroup}>
        <h2>Project-Based Internships under Faculties</h2>
        <p>Check out the curated opportunities handpicked for you from top organizations.</p>
        <div className={styles.opportunityCards}>
          {opportunities.map((opportunity, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={opportunity.image}
                alt={opportunity.title}
                width={300}
                height={200}
                className={styles.opportunityImage}
              />
              <h3>{opportunity.title}</h3>
              <p className={styles.type}>{opportunity.type}</p>
              <p className={styles.participants}>{opportunity.participants}</p>
              <p className={styles.daysLeft}>{opportunity.daysLeft}</p>
              <button className={styles.registerButton}>Register Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className={styles.opportunityGroup}>
        <h2>Learn a new Skill and be job-ready</h2>
        <p>Start or switch your career by upskilling with job-ready skills.</p>
        <div className={styles.opportunityCards}>
          <div className={styles.card}>
            <Image src="/images/aiml.png" alt="Learn AI/ML" width={300} height={200} />
            <h3>Learn AI/ML</h3>
            <p className={styles.type}>13k Lessons</p>
            <button className={styles.viewCourseButton}>View Course</button>
          </div>
        </div>
      </div>

      {/* Mentors */}
      <div className={styles.opportunityGroup}>
        <h2>Take Guidance from Top Mentors</h2>
        <p>In search of excellence? Explore the highest-rated mentors as recognized by the learner community.</p>
        <div className={styles.opportunityCards}>
          <div className={styles.card}>
            <Image src="/images/sk.png" alt="Shubham Kumar" width={300} height={200} />
            <h3>Shubham Kumar</h3>
            <p className={styles.type}>Top Unstoppable Mentor 2024</p>
            <button className={styles.viewProfileButton}>View Profile</button>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className={styles.communityJoin}>
        <Image src="/images/react.png" alt="Avatar Group" width={300} height={200} className={styles.avatarGroup} />
        <h2>You are not alone in this journey</h2>
        <p>Meet 30,000+ aspirants and access handwritten notes, mind-maps, and practice with Daily Targets</p>
        <button className={styles.joinCommunityButton}>Join community 🚀</button>
      </div>
    </section>
  );
};

export default Opportunities;
