import styles from './Cabecera.module.sass'

export const Cabecera = () => {
  
  return (
    <section className={styles.Cabecera}>
          <button className={styles.Hero}>EducaTIC UdeA</button>
          <div className={styles.Izquierda}>
          <h5>Nombre y Apellidos</h5>
          <button className={styles.Salir}>Salir</button>
          </div>
    </section>
  )
}