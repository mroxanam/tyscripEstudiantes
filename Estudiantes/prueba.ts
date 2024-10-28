// Importa la clase GradeManagement (si trabajas con módulos en TypeScript)
import { GradeManagement,Estudiante,Curso,Calificacion} from './GradeManagement';

// Instancia del sistema de gestión de calificaciones
const sistemaCalificaciones = new GradeManagement();

// Agregar Estudiantes
sistemaCalificaciones.agregarEstudiante({ id: 1, nombre: 'Juan Pérez', edad: 20 });
sistemaCalificaciones.agregarEstudiante({ id: 2, nombre: 'Ana García', edad: 22 });

// Agregar Cursos
sistemaCalificaciones.agregarCurso({ id: 1, nombre: 'Matemáticas', duracion: '10 semanas' });
sistemaCalificaciones.agregarCurso({ id: 2, nombre: 'Historia', duracion: '8 semanas' });

// Agregar Calificaciones
sistemaCalificaciones.agregarCalificacion({ estudianteId: 1, cursoId: 1, nota: 90 });
sistemaCalificaciones.agregarCalificacion({ estudianteId: 1, cursoId: 2, nota: 85 });
sistemaCalificaciones.agregarCalificacion({ estudianteId: 2, cursoId: 1, nota: 88 });

// Mostrar Calificaciones de un Estudiante
console.log('Calificaciones de Juan Pérez:');
console.log(sistemaCalificaciones.obtenerCalificacionesPorEstudiante(1));

// Actualizar Calificaciones
sistemaCalificaciones.actualizarCalificacion(1, 1, 95); // Actualiza la nota de Matemáticas para Juan Pérez
console.log('Calificaciones actualizadas de Juan Pérez:');
console.log(sistemaCalificaciones.obtenerCalificacionesPorEstudiante(1));

// Eliminar un Estudiante
sistemaCalificaciones.eliminarEstudiante(2); // Elimina a Ana García
console.log('Estudiantes después de eliminar a Ana García:');
console.log(sistemaCalificaciones.obtenerEstudiante(2)); // Debería retornar undefined

// Obtener un Curso
console.log('Detalles del curso de Matemáticas:');
console.log(sistemaCalificaciones.obtenerCurso(1));

// Actualizar Curso
sistemaCalificaciones.actualizarCurso(1, 'Matemáticas Avanzadas', '12 semanas');
console.log('Curso de Matemáticas después de actualización:');
console.log(sistemaCalificaciones.obtenerCurso(1));

// Eliminar Curso
sistemaCalificaciones.eliminarCurso(2); // Elimina el curso de Historia
console.log('Cursos después de eliminar Historia:');
console.log(sistemaCalificaciones.obtenerCurso(2)); // Debería retornar undefined
