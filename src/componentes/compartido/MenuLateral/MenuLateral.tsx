import styles from './MenuLateral.module.sass'

export const MenuLateral = () => {
  
  return (
    <section className={styles.MenuLateral}>
          <button className={styles.Boton}>Inicio</button>
          <button className={styles.Boton}>Buscar Materias</button>
          <button className={styles.Boton}>Mis Materias</button>
    </section>
  )
}