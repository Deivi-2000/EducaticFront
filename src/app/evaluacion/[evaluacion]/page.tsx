'use client'
import { getEvaluacionesById, getPreguntasByEvaluacion } from 'app/servicios/evaluaciones';
import styles from './evaluacion.module.sass'
import { useEffect, useState } from 'react';
import { Pregunta } from 'app/componentes/evaluacion';
import { postCalificacion } from 'app/servicios/calificaciones';
import { useSession } from 'next-auth/react';


interface Evaluacion {
    idEvaluacion: number,
    idModulo: string,
    dificultad: string,
    nombre: string,
    contenido: string,
    puntajeMaximo: number,
    fechaCreacion: string,
    fechaActualizado: string
}

interface Pregunta {
    idPregunta: number,
    idEvaluacion: number,
    descripcion: string,
    opcionUno: string,
    opcionDos: string,
    opcionTres: string,
    opcionCuatro: string,
    respuestaCorrecta: string,
    rutaImagen: string
}


export default function Evaluaciones(props: any) {
    const { data: session } = useSession();
    const idEvaluacion = props.params.evaluacion;
    const [isLoading, setLoading] = useState(true)
    const [evaluacion, setEvaluacion] = useState<Evaluacion>()
    const [preguntas, setPreguntas] = useState<Pregunta[]>()
    const [puntaje, setPuntaje] = useState<number>(0);
    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {

        getEvaluacionesById(idEvaluacion).then((dataEvaluacion) => {
            getPreguntasByEvaluacion(idEvaluacion).then((dataPreguntas) => {
                setEvaluacion(dataEvaluacion)
                setPreguntas(dataPreguntas)
                setLoading(false)
            })
        })

    }, []);

    const handleAnswer = (preguntaId: string, respuesta: string) => {
        setRespuestas(prev => ({ ...prev, [preguntaId]: respuesta }));
    };

    const handleSubmit = () => {
        let newScore = 0;
        preguntas!.forEach(pregunta => {
            if (respuestas[pregunta.idPregunta] === pregunta.respuestaCorrecta) {
                newScore++;
            }
        });
        postCalificacion({"id": {"ID_USUARIO": session?.user?.email!, "ID_EVALUACION": evaluacion?.idEvaluacion!}, "NOTA": (evaluacion?.puntajeMaximo! / preguntas?.length! * newScore)})
        setPuntaje((evaluacion?.puntajeMaximo! / preguntas?.length! * newScore));
    };

    if (isLoading) return (<h1>Cargando...</h1>)
    {
        return (
            <main className={styles.Main}>
                <div className={styles.Center}>
                    <h1 className={styles.Titulo}></h1>
                    <div className={styles.Modulos}>
                        <div>
                            <h1>Examen</h1>
                            <form>
                                {preguntas!.map((q) => (
                                    <Pregunta
                                        key={q.idPregunta}
                                        pregunta={q.descripcion}
                                        opciones={[q.opcionUno, q.opcionDos, q.opcionTres, q.opcionCuatro]}
                                        handleAnswer={(respuesta: string) => handleAnswer(q.idPregunta.toString(), respuesta)}
                                    />
                                ))}

                            </form>
                            <button onClick={handleSubmit}>Enviar</button>
                            {puntaje !== null && <p>Tu calificación es: {puntaje}</p>}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

