'use client'
import styles from './materias.module.sass'
import { Materia } from 'app/componentes/inicio/materia';
import { getMaterias, getModulosByMateria } from 'app/servicios/materias';
import { getMateriasByIdUsuario } from 'app/servicios/matriculas';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface Materia {
  idMateria: string,
  nombre: string,
  descripcion: string,
  fechaCreacion: string,
  fechaActualizado: string,
  rutaImagen: string,
}

export default function BuscarMaterias() {
  const { data: session } = useSession();
  const [materias, setMaterias] = useState<Materia[]>()
  useEffect(() => {
    getMateriasByIdUsuario(session?.user?.email!).then((dataMateria: Materia[]) => 
      {
        setMaterias(dataMateria) 
      }
    )
  }, []);
  

  return (
    <main className={styles.Main}>
      <div className={styles.GridMaterias}>
      {
      materias?.map((materia: Materia) => (
        <Materia key={materia.idMateria} params={materia} idUsuario={(session?.user?.email) ?? null}/>
      ))
      }
      </div>
      </main>
  );
}