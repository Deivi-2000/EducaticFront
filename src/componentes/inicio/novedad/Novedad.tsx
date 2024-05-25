import styles from './Novedad.module.sass'
import Image from 'next/image'


interface NovedadProps {
  params: {
    idNovedad: number,
    idMateria: string,
    fechaPublicacion: string,
    rutaImagen: string,

  }
}

export const Novedad = (props: NovedadProps) => {
  
  const novedad = props
  return (
    <section>
      <Image 
        layout='intrinsic'
        height={0}
        width={600}
        src={"/imagenes/novedades/" + novedad.params.rutaImagen}
        alt='Novedad 1'
        priority={false}
      />
    </section>
  )
}