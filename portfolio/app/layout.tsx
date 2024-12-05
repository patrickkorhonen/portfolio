import { Murecho, Lilita_One, Crimson_Text } from "next/font/google";
import "./globals.css";

const murecho = Murecho({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Patrick Korhonen",
  description: " Patrick Korhonen's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={crimson.className}>
        <div className="flex flex-col min-h-screen overflow-x-hidden tracking-wider">
          {children}
        </div>
      </body>
    </html>
  );
}
