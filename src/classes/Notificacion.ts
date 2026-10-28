import { formulario } from "../selectores";

type NotificacionType = {
    texto: string;
    tipo: 'error' | 'exito' | '';
}

export default class Notificacion {

    notificacion: NotificacionType = {
        texto: '',
        tipo: ''
    }

    constructor({ texto, tipo }: NotificacionType) {
        this.notificacion.texto = texto;
        this.notificacion.tipo = tipo;

        this.mostrar();
    }

    mostrar() {
        const notificacion = document.createElement('div');
        notificacion.classList.add('text-center', 'p-3', 'my-5', 'rounded', 'font-bold', 'uppercase', 'alert', 'text-sm');
        notificacion.textContent = this.notificacion.texto;

        // Eliminar notificaciones duplicadas
        const notificacionExistente = document.querySelector('.alert');
        notificacionExistente?.remove();

        if (this.notificacion.tipo === 'error') {
            notificacion.classList.add('bg-red-500', 'text-white');
        } else {
            notificacion.classList.add('bg-green-500', 'text-white');
        }

        // Mostrar la notificación
        formulario?.parentElement?.insertBefore(notificacion, formulario);

        setTimeout(() => {
            notificacion.remove();
        }, 3000);
    }
}