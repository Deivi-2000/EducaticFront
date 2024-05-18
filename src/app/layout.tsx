import { Inter } from "next/font/google";
import { MenuLateral } from 'app/componentes/compartido/MenuLateral'
import { Cabecera } from "app/componentes/compartido/Cabecera";
import styles from './layout.module.sass'
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.Body}>
        <Cabecera/>
        <div className={styles.Contenedor}>
          <MenuLateral />
          <div className={styles.Center}>
            {children}
          </div>
        </div>
        </body>
    </html>
  );
}
