'use client'
import { signIn, useSession, signOut } from 'next-auth/react'
import styles from './Cabecera.module.sass'
import { getUsuarioById, postUsuario } from 'app/servicios/usuarios'
import { useEffect } from 'react';

interface Usuario {
  id_usuario: string
  id_carrera: string
  genero: string
  nombre: string
  fecha_registro: string
  fecha_nacimiento: string
}

function obtenerFechaActual() {
  const ahora = new Date();
  const dia = String(ahora.getDate()).padStart(2, '0');
  const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Los meses van de 0-11
  const anio = ahora.getFullYear();
  return `${dia}/${mes}/${anio}`;
}

export const Cabecera = () => {

  const { data: session, status } = useSession()

  const fechaFormateada = obtenerFechaActual();

  useEffect(() => {
    console.log(session)
    if (status === 'authenticated' && session.user?.email != null) {
      getUsuarioById(session.user.email).then((data) => {
        if (data == null) {
          postUsuario({ "ID_USUARIO": session.user!.email!, "NOMBRE": session.user!.name!, "FECHA_REGISTRO": fechaFormateada, "ID_CARRERA": "504" })
        }
      }
      )
    }
  })

  return (
    <section className={styles.Cabecera}>
      <button className={styles.Hero}>EducaTIC UdeA</button>

      {
        session == null ?
          <div className={styles.Izquierda}>
            <button onClick={() => signIn('google')}>Iniciar Sesión</button>
          </div>
          :

          <div className={styles.Izquierda}>
            <h5>{session.user?.name}</h5>
            <button className={styles.Salir} onClick={() => signOut()}>Salir</button>
          </div>
      }
    </section>
  )
}