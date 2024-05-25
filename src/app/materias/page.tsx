import styles from './materias.module.sass'
import { Materia } from 'app/componentes/inicio/materia';
import { getMaterias } from 'app/servicios/materias';

export default async function Materias() {

  const materias = await getMaterias();

  return (
    <main className={styles.Main}>
      <div className={styles.GridMaterias}>
      {
      materias.map((materia: any) => (
        <Materia params={materia}/>
      ))
      }
      </div>
      </main>
  );
}
