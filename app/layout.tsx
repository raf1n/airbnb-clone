import Modal from "./components/Modals/Modal";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Modal title="haha" isOpen />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
