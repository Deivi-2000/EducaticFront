'use client'
import styles from './materia.module.sass'
import { Materia } from 'app/componentes/inicio/materia';
import { getMateriaById, getComentariosByMateria, getModulosByMateria } from 'app/servicios/materias';
import { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { getUsuarioById } from 'app/servicios/usuarios';
import { useSession } from 'next-auth/react';
import { deleteComentario, postComentario } from 'app/servicios/comentarios';
import { getEvaluacionesByModulo } from 'app/servicios/evaluaciones';
import { TablaEvaluaciones } from 'app/componentes/materia/TablaEvaluaciones';

interface Materia {

    idMateria: string,
    nombre: string,
    descripcion: string,
    fechaCreacion: string,
    fechaActualizado: string,
    rutaImagen: string,
  
}

interface Modulo {
  idModulo: string,
  idMateria: string,
  nombre: string,
  descripcion: string,
  fechaCreacion: string,
  fechaActualizado: string
  rutaImagen: string
}

interface Comentario {
  idComentario: number,
  ID_USUARIO: string,
  ID_MATERIA: string,
  TEXTO: string,
  FECHA_CREACION: string,
  HORA_CREACION: string,
  nombre: string
}

interface Evaluacion {
  idEvaluacion: number,
  idMateria: string,
  idModulo: string,
  dificultad: string,
  nombre: string,
  contenido: string,
  puntajeMaximo: number,
  fechaCreacion: string
  fechaActualizado: string
  nota: number
}

function obtenerFechaActual() {
  const ahora = new Date();
  const dia = String(ahora.getDate()).padStart(2, '0');
  const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Los meses van de 0-11
  const anio = ahora.getFullYear();
  return `${dia}/${mes}/${anio}`;
}

function obtenerHoraActual() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  return `${horas}:${minutos}`;
}

export default function Materias(props: any) {

  const { data: session } = useSession()
  const { materia } = props.params
  const [selectedMateria, setSelectedMateria] = useState<Materia>()
  const [Modulos, setModulo] = useState<Modulo[]>([])
  const [isLoading, setLoading] = useState(true)
  const [selectedModulo, setSelectedModulo] = useState<Modulo>()
  const [comentarios, setComentarios] = useState<Comentario[]>()
  const [evaluaciones, setEvaluaciones] = useState<Evaluacion[]>()
  const [comentarioText, setComentarioText] = useState('')
  const [countComentarios, setCountComentarios] = useState(0)
  
  useEffect(() => {
    getMateriaById(materia).then((dataMateria) => 
      {
        setSelectedMateria(dataMateria)
        getModulosByMateria(materia).then((dataModulos) => 
          {
            setModulo(dataModulos)
            setLoading(false)
            setSelectedModulo(dataModulos[0])

            getEvaluacionesByModulo(dataModulos[0].idModulo).then((dataEvaluaciones) => {
              dataEvaluaciones.idMateria = materia
              setEvaluaciones(dataEvaluaciones)
            })
          }
        ) 
        
        getComentariosByMateria(materia).then((data) => 
          {
            var arrayComentarios: Comentario[] = []
              data.forEach((comentario: any) => {
                getUsuarioById(comentario.ID_USUARIO).then((usuario) => {
                  comentario.nombre = usuario.NOMBRE
                  arrayComentarios.push(comentario)
                })
              });
              setComentarios(arrayComentarios)
            }
          
        )
      } 
    )
  }, []);
  
  if (isLoading || selectedModulo == null) return (<h1>Cargando...</h1>) 
    {
  return (
    <main className={selectedModulo.nombre == "General" ? styles.MainGeneral : styles.Main}>
      <div className={styles.Center}>
      <h1 className={styles.Titulo}>{selectedMateria!.nombre}</h1>
      <div className={styles.Modulos}>
        {
            Modulos.map((modulo: any) => (
              <button 
              key={modulo.idModulo} 
              className={selectedModulo != modulo ? styles.BotonModulo: styles.BotonModuloPressed} 
              onClick={() => {setSelectedModulo(modulo); getEvaluacionesByModulo(modulo.idModulo).then((dataEvaluaciones) => {
              setEvaluaciones(dataEvaluaciones)
            })}}>{modulo.nombre}</button>
            )) 
        }
      </div>
      <div className={styles.ContenidoModulo}>
      <h3>{selectedModulo!.nombre}</h3>
      <p>{selectedModulo!.descripcion}</p>
      </div>
      {
        (selectedModulo.rutaImagen != null && selectedModulo.rutaImagen != '') ? 
        <Image 
          layout='intrinsic'
          height={0}
          width={1000}
          src={"/imagenes/modulo/" + selectedModulo.rutaImagen}
          alt={selectedModulo.idModulo}
          priority={false}
          />
        : null
      }
      {
        (evaluaciones != null && evaluaciones.length > 0) ? 
        <TablaEvaluaciones params={evaluaciones} idUsuario={session?.user?.email!} idMateria={selectedMateria!.idMateria} />
      :null
      }
      </div>{
        selectedModulo.nombre == 'General' ? 
        <div className={styles.Comentarios}>
          {
            session?.user != null ? 
            <div>
              <h1 className={styles.ComentariosTitulo}>Dudas e inquietudes</h1>
              <div className={styles.ListaComentarios}>
          {
          comentarios?.map((comentario: Comentario) => (
              <div className={styles.Comentario}
              key={comentario.idComentario}>
                <div className={styles.CabeceraComentario}>
                <p className={styles.Nombre}>{comentario.nombre}</p>    
                </div>
                <p className={styles.Texto}>{comentario.TEXTO}</p>
                {
                  comentario.ID_USUARIO == session.user?.email ? 
                  <button className={styles.Eliminar} onClick={() => {
                    deleteComentario((comentario.idComentario))
                    setComentarios(comentarios?.filter(comment => comment.idComentario !== comentario.idComentario))
                  }
                  }>Eliminar</button>: null
                }
              </div>
            ))
          } 
          </div>
          <div className={styles.CajaComentario}>
            <h3>Agrega tu pregunta</h3>
            <div>
              <input
              value={comentarioText}
              onChange={e => setComentarioText(e.target.value)}
              className={styles.InputText}/>
              <button className={styles.ButtonComentario} onClick={
                () => {
                  const nuevoComentario: Comentario = {
                    idComentario: Date.now(), // Asigna un ID temporal
                    ID_USUARIO: session!.user!.email!,
                    ID_MATERIA: materia,
                    TEXTO: comentarioText,
                    FECHA_CREACION: obtenerFechaActual(),
                    HORA_CREACION: obtenerHoraActual(),
                    nombre: session!.user!.name!,
                }
                setComentarios([...comentarios!, nuevoComentario])
                  postComentario({"ID_USUARIO": session!.user!.email!,
                    "ID_MATERIA": materia,
                    "TEXTO": comentarioText,
                    "FECHA_CREACION": obtenerFechaActual(),
                    "HORA_CREACION": obtenerHoraActual()})
                }
              }>Enviar Pregunta</button>
            </div>
          </div>
            </div>:
            <div>
              <h3 className={styles.AuthRequired}>Debes estar autenticado para poder publicar comentarios</h3>
              </div>
          }
        </div>
        :null
      }
    </main>
  );
}
}

