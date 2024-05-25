
export const apiUrls = {

    novedades: {
        'all': 'http://localhost:8080/novedad/all'
    },
    usuarios: {
        'all': 'http://localhost:8080/usuario/all',
        'getById': 'http://localhost:8080/usuario/getById/',
        'postUsuario': 'http://localhost:8080/usuario/set'
    },
    materias: {
        'all': 'http://localhost:8080/materia/all',
        'getById': 'http://localhost:8080/materia/getById/',
        'getModulos': 'http://localhost:8080/materia/'
    },
    comentarios: {
        'postComentario': 'http://localhost:8080/comentario/set'
    },
    modulos: {
        'getEvaluaciones': 'http://localhost:8080/modulo/'
    },
    matriculas: {
        'postMatricula': 'http://localhost:8080/matricula/set',
        'getMateriasByUsuario': 'http://localhost:8080/matricula/getMateriasByIdUsuario/'
    },
    evaluaciones: {
        'getById': 'http://localhost:8080/evaluacion/getById/',
        'getPreguntas': 'http://localhost:8080/evaluacion/',
    },
    calificaciones: {
        'postCalificacion': 'http://localhost:8080/calificacion/set',
        'getByUsuarioAndEvaluacion': 'http://localhost:8080/calificacion/getCalificacionByUsuarioAndEvaluacion/'
    }

}