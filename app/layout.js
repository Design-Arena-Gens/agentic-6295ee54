export const metadata = {
  title: 'Solitary Samurai',
  description: 'A somber, cinematic night scene of a lone samurai',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="night">
        {children}
      </body>
    </html>
  );
}
