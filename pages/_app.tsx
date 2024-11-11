// pages/_app.tsx

import '../styles/globals.css';  // Import your global styles
import Header from '../components/Header'; // Import Header component
import MainSection from '../components/Mainsection'; // Import MainSection component
import Opportunities from '../components/Opportunities'; // Import Opportunities component
import { AppProps } from 'next/app'; // Import the AppProps type from Next.js

// Import CSS modules, but only for scoped styles in the components
import '../styles/Header.module.css'; // Import Header module styles
import '../styles/Mainsection.module.css'; // Import Mainsection module styles
import '../styles/Opportunities.module.css'; // Import Opportunities module styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Opportunities />
      <Component {...pageProps} /> {/* Render the specific page */}
    </div>
  );
}

export default MyApp;
