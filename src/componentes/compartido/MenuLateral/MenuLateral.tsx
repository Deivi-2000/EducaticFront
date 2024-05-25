'use client';

import styles from './MenuLateral.module.sass'
import Link from 'next/link';

export const MenuLateral = () => {
  
  return (
    <section className={styles.MenuLateral}>
          <Link href="/"><button className={styles.Boton}>Inicio</button></Link>
          <Link href="/materias"><button className={styles.Boton}>Buscar Materias</button></Link>
          <Link href="/buscar"><button className={styles.Boton}>Mis Materias</button></Link>
    </section>
  )
}