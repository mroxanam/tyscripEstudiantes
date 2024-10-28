"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeManagement = void 0;
// Clase GradeManagement
class GradeManagement {
    constructor() {
        this.estudiantes = [];
        this.cursos = [];
        this.calificaciones = [];
    }
    // CRUD para Estudiantes
    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
    obtenerEstudiante(id) {
        return this.estudiantes.find(est => est.id === id);
    }
    actualizarEstudiante(id, nuevoNombre, nuevaEdad) {
        const estudiante = this.obtenerEstudiante(id);
        if (estudiante) {
            estudiante.nombre = nuevoNombre;
            estudiante.edad = nuevaEdad;
        }
    }
    eliminarEstudiante(id) {
        this.estudiantes = this.estudiantes.filter(est => est.id !== id);
    }
    // CRUD para Cursos
    agregarCurso(curso) {
        this.cursos.push(curso);
    }
    obtenerCurso(id) {
        return this.cursos.find(cur => cur.id === id);
    }
    actualizarCurso(id, nuevoNombre, nuevaDuracion) {
        const curso = this.obtenerCurso(id);
        if (curso) {
            curso.nombre = nuevoNombre;
            curso.duracion = nuevaDuracion;
        }
    }
    eliminarCurso(id) {
        this.cursos = this.cursos.filter(cur => cur.id !== id);
    }
    // CRUD para Calificaciones
    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
    }
    obtenerCalificacion(estudianteId, cursoId) {
        return this.calificaciones.find(cal => cal.estudianteId === estudianteId && cal.cursoId === cursoId);
    }
    actualizarCalificacion(estudianteId, cursoId, nuevaNota) {
        const calificacion = this.obtenerCalificacion(estudianteId, cursoId);
        if (calificacion) {
            calificacion.nota = nuevaNota;
        }
    }
    eliminarCalificacion(estudianteId, cursoId) {
        this.calificaciones = this.calificaciones.filter(cal => cal.estudianteId !== estudianteId || cal.cursoId !== cursoId);
    }
    // Mostrar calificaciones de un estudiante
    obtenerCalificacionesPorEstudiante(estudianteId) {
        return this.calificaciones.filter(cal => cal.estudianteId === estudianteId);
    }
}
exports.GradeManagement = GradeManagement;
