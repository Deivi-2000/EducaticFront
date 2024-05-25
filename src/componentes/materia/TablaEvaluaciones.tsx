import Link from 'next/link'
import styles from './TablaEvaluaciones.module.sass'

interface Evaluaciones {
    params:  Evaluacion[]
}

interface Evaluacion {
    idEvaluacion: number,
    idModulo: string,
    dificultad: string,
    nombre: string,
    contenido: string,
    puntajeMaximo: number,
    fechaCreacion: string
    fechaActualizado: string
}

export const TablaEvaluaciones = (props: Evaluaciones) => {

    const evaluaciones = props.params
    return (
        <table className={styles.Table}>
            <thead className={styles.Thead}>
                <tr className={styles.Tr}>
                <td className={styles.Td}>Nombre</td>
                <td className={styles.Td}>Dificultad</td>
                <td className={styles.Td}>Puntaje Máximo</td>
                </tr>
            </thead>
            <tbody>
                {evaluaciones.map((item) => (
                    <tr className={styles.Tr} key={item.idEvaluacion}>
                        <td className={styles.Td}>{item.nombre}</td>
                        <td className={styles.Td}>{item.dificultad}</td>
                        <td className={styles.Td}>{item.puntajeMaximo}</td>
                        <td className={styles.Td}>
                        <Link href={"/evaluacion/" + item.idEvaluacion}><button className={styles.ButtonPresentar}>PRESENTAR EVALUACIÓN</button></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

