// Interfaces
export interface Estudiante {
    id: number;
    nombre: string;
    edad: number;
}

export interface Curso {
    id: number;
    nombre: string;
    duracion: string;
}

export interface Calificacion {
    estudianteId: number;
    cursoId: number;
    nota: number;
}

// Clase GradeManagement
export class GradeManagement {
    private estudiantes: Estudiante[] = [];
    private cursos: Curso[] = [];
    private calificaciones: Calificacion[] = [];

    // CRUD para Estudiantes
    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
    }

    obtenerEstudiante(id: number): Estudiante | undefined {
        return this.estudiantes.find(est => est.id === id);
    }

    actualizarEstudiante(id: number, nuevoNombre: string, nuevaEdad: number): void {
        const estudiante = this.obtenerEstudiante(id);
        if (estudiante) {
            estudiante.nombre = nuevoNombre;
            estudiante.edad = nuevaEdad;
        }
    }

    eliminarEstudiante(id: number): void {
        this.estudiantes = this.estudiantes.filter(est => est.id !== id);
    }

    // CRUD para Cursos
    agregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }

    obtenerCurso(id: number): Curso | undefined {
        return this.cursos.find(cur => cur.id === id);
    }

    actualizarCurso(id: number, nuevoNombre: string, nuevaDuracion: string): void {
        const curso = this.obtenerCurso(id);
        if (curso) {
            curso.nombre = nuevoNombre;
            curso.duracion = nuevaDuracion;
        }
    }

    eliminarCurso(id: number): void {
        this.cursos = this.cursos.filter(cur => cur.id !== id);
    }

    // CRUD para Calificaciones
    agregarCalificacion(calificacion: Calificacion): void {
        this.calificaciones.push(calificacion);
    }

    obtenerCalificacion(estudianteId: number, cursoId: number): Calificacion | undefined {
        return this.calificaciones.find(cal => cal.estudianteId === estudianteId && cal.cursoId === cursoId);
    }

    actualizarCalificacion(estudianteId: number, cursoId: number, nuevaNota: number): void {
        const calificacion = this.obtenerCalificacion(estudianteId, cursoId);
        if (calificacion) {
            calificacion.nota = nuevaNota;
        }
    }

    eliminarCalificacion(estudianteId: number, cursoId: number): void {
        this.calificaciones = this.calificaciones.filter(cal => cal.estudianteId !== estudianteId || cal.cursoId !== cursoId);
    }

    // Mostrar calificaciones de un estudiante
    obtenerCalificacionesPorEstudiante(estudianteId: number): Calificacion[] {
        return this.calificaciones.filter(cal => cal.estudianteId === estudianteId);
    }
}
