import { Roboto } from "next/font/google";
import { MenuLateral } from 'app/componentes/compartido/MenuLateral'
import { Cabecera } from "app/componentes/compartido/Cabecera";
import styles from './layout.module.sass'
import { Providers } from "./Providers";
const roboto = Roboto({ 
  weight: ["100", "300"],
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={roboto.className}>
      <body className={styles.Body}>
        <Providers>
        <Cabecera/>
        <div className={styles.Contenedor}>
          <MenuLateral />
          <div className={styles.Center}>
            {children}
          </div>
        </div>
        </Providers>
        </body>
    </html>
  );
}
