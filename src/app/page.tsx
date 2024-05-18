import styles from './page.module.sass'

export default function Home() {
  return (
    <main>
      <h1 className={styles.Titulo}>Bienvenidos a EducaTIC UdeA</h1>
      <p className={styles.Parrafo}>En EducaTIC UdeA, creemos que el acceso a la educación de calidad es la clave para el desarrollo personal y profesional. Por eso, hemos creado este espacio dedicado a enriquecer tu experiencia educativa en la Universidad de Antioquia. Aquí encontrarás una amplia gama de recursos que incluyen materiales de estudio, tutorías personalizadas, y una comunidad de apoyo para asegurar tu éxito académico.
Nuestra plataforma está diseñada para facilitarte el acceso a la información que necesitas, cuando la necesitas. Ya sea que estés buscando profundizar en un tema específico, prepararte para un examen, o simplemente explorar nuevos horizontes de conocimiento, EducaTIC UdeA es tu compañero de viaje en el camino del aprendizaje</p>
      <h2 className={styles.Subtitulo}>Novedades</h2>
      <></>
    </main>
  );
}
