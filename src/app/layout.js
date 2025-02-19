import localFont from "next/font/local";
import "./globals.css";

const samarkan = localFont({
  src: "./fonts/samarkan/saman.ttf",
  variable: "--font-samarkan",
});

export const metadata = {
  title: "Incident 2025",
  description: "UDBHAV - the rhythm of timeless essence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${samarkan.variable} font-samarkan bg-[#1E0E03] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
