import Link from 'next/link'
import styles from './Materia.module.sass'
import Image from 'next/image'


interface MateriaProps {
  params: {
    idMateria: string,
    nombre: string,
    descripcion: string,
    fechaCreacion: string,
    fechaActualizado: string,
    rutaImagen: string,
  }
}

export const Materia = (props: MateriaProps) => {
  
  const materia = props
  return (
    <section className={styles.Materia}>
      <Image 
        layout='intrinsic'
        height={0}
        width={600}
        src={"/imagenes/materias/" + materia.params.rutaImagen}
        alt={materia.params.idMateria}
        priority={false}
      />
      <div className={styles.Bottom}>
        <h2 className={styles.Titulo}>{materia.params.nombre}</h2>
        <p>Código: {materia.params.idMateria}</p>
        <div>
          <Link href={"/materias/" + materia.params.idMateria}><button className={styles.ButtonVer}>VER CONTENIDO</button></Link>
          <button className={styles.ButtonInscribirse}>INSCRIBIRSE</button>
        </div>
      </div>
    </section>
  )
}