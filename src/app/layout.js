import localFont from "next/font/local";
import "./globals.css";

const samarkan = localFont({
  src: "./fonts/samarkan/saman.ttf",
  variable: "--font-samarkan",
});

const cheddarGothic = localFont({
  src: './fonts/Cheddar/CheddarGothicRough-Regular.ttf',
  display: 'swap',
})

export const metadata = {
  title: "Incident 2025",
  description: "UDBHAV - the rhythm of timeless essence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
          className={`${cheddarGothic.className} ${samarkan.variable} font-cheddar-gothic   bg-[#1E0E03] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
