import Link from 'next/link'
import styles from './Materia.module.sass'
import Image from 'next/image'
import { postMatricula } from 'app/servicios/matriculas'


interface MateriaProps {
  params: {
    idMateria: string,
    nombre: string,
    descripcion: string,
    fechaCreacion: string,
    fechaActualizado: string,
    rutaImagen: string,
  },
  idUsuario: string | null
}

export const Materia = (props: MateriaProps) => {
  

  const materia = props
  const idUsuario = props.idUsuario
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
          {
            idUsuario != null ?
            <button className={styles.ButtonInscribirse} onClick={() => {
              postMatricula({"id":{"ID_USUARIO": idUsuario, "ID_MATERIA": materia.params.idMateria}, "SEMESTRE": "2024-1", "ESTADO": "En curso"})
            }}>INSCRIBIRSE</button>
            : null
          }
          
        </div>
      </div>
    </section>
  )
}