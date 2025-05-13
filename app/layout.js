import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Workforce Augmentation Lab',
  description: 'Research lab enhancing human capabilities with technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto p-4 pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}