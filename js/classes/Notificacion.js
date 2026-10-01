import { formulario } from "../selectores.js";

export default class Notificacion {

    constructor({ texto, tipo }) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar() {
        const notificacion = document.createElement('div');
        notificacion.classList.add('text-center', 'p-3', 'my-5', 'rounded', 'font-bold', 'uppercase', 'alert', 'text-sm');
        notificacion.textContent = this.texto;

        // Eliminar notificaciones duplicadas
        const notificacionExistente = document.querySelector('.alert');
        notificacionExistente?.remove();

        if (this.tipo === 'error') {
            notificacion.classList.add('bg-red-500', 'text-white');
        } else {
            notificacion.classList.add('bg-green-500', 'text-white');
        }

        // Mostrar la notificación
        formulario.parentElement.insertBefore(notificacion, formulario);

        setTimeout(() => {
            notificacion.remove();
        }, 3000);
    }
}