import { Inter } from "next/font/google";
import { MenuLateral } from 'app/componentes/compartido/MenuLateral'
import { Cabecera } from "app/componentes/compartido/Cabecera";
import styles from './layout.module.sass'
import { Providers } from "../Providers";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.Body}>
        { children }
        </body>
    </html>
  );
}
