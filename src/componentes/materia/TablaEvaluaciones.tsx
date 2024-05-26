import Link from 'next/link'
import styles from './TablaEvaluaciones.module.sass'
import { useEffect, useState } from 'react'
import { getCalificacionesByUsuarioAndEvaluacion } from 'app/servicios/calificaciones'

interface Evaluaciones {
    params:  Evaluacion[],
    idUsuario: string | null
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
    nota: number | null
}

export const TablaEvaluaciones = (props: Evaluaciones) => {

    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        evaluaciones.map((item) => {
            if (props.idUsuario != null) {
                getCalificacionesByUsuarioAndEvaluacion(props.idUsuario, item.idEvaluacion).then((dataCalificacion) => {
                    
                    item.nota = dataCalificacion.NOTA
                    setLoading(true)
                })
                
            }
            
        })
        setLoading(false)
    })

    const evaluaciones = props.params
    return (
        <table className={styles.Table}>
            <thead className={styles.Thead}>
                <tr className={styles.Tr}>
                <td className={styles.Td}>Nombre</td>
                <td className={styles.Td}>Dificultad</td>
                <td className={styles.Td}>Puntaje Máximo</td>
                <td className={styles.Td}>Nota</td>
                </tr>
            </thead>
            <tbody>
                {evaluaciones.map((item) => (
                    <tr className={styles.Tr} key={item.idEvaluacion}>
                        <td className={styles.Td}>{item.nombre}</td>
                        <td className={styles.Td}>{item.dificultad}</td>
                        <td className={styles.Td}>{item.puntajeMaximo}</td>
                        <td className={styles.Td}>{(item.nota != null) ? item.nota: "Sin realizar"}</td>
                        <td className={styles.Td}>
                        <Link href={"/evaluacion/" + item.idEvaluacion}><button className={styles.ButtonPresentar}>PRESENTAR EVALUACIÓN</button></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

