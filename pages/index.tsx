// pages/_app.tsx

import '../styles/globals.css';  // Import your global styles
import '../styles/Header.module.css'; // Ensure this is also being imported if necessary
import '../styles/Mainsection.module.css'; // Add any other relevant CSS files
import '../styles/Opportunities.module.css'; // Add any other relevant CSS files

import Header from '../components/Header'; // Import Header component
import MainSection from '../components/Mainsection'; // Import MainSection component
import Opportunities from '../components/Opportunities'; // Import Opportunities component
import { AppProps } from 'next/app'; // Import the AppProps type from Next.js

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Opportunities />
      <Component {...pageProps} /> {/* Render the specific page */}
    </div>
  );
};

export default MyApp;
