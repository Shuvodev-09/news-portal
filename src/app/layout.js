import './globals.css';
import Navbar from '@/components/shared/Navbar';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from '@/components/shared/Footer';
config.autoAddCss = false;

export const metadata = {
  title: 'dragon news',
  description: 'News portal website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
