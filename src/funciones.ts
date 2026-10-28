import Notificacion from './classes/Notificacion';
import AdminCitas from './classes/AdminCitas';
import { citaObj, editando } from './variables'
import { formulario, formularioInput, pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput } from './selectores';
import type { Cita } from './types';

const citas = new AdminCitas();

export function datosCita(e: Event) {
    const target = e.target as HTMLInputElement;
    citaObj[target.name] = target.value;
}

export function nuevaCita(e: SubmitEvent) {
    e.preventDefault();

    if (Object.values(citaObj).some(elemento => elemento.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }

    if (editando.value) {
        citas.editarCita({ ...citaObj });
        new Notificacion({
            texto: 'Cita actualizada correctamente',
            tipo: 'exito'
        });
    } else {
        citas.agregarCita({ ...citaObj });

        new Notificacion({
            texto: 'Cita agregada correctamente',
            tipo: 'exito'
        });
    }

    formulario?.reset();

    reiniciarObjetoCita();
    
    if (formularioInput) {
        formularioInput.value = 'Registrar Paciente';
    }
    editando.value = false;


}

export function reiniciarObjetoCita() {
    // citaObj.paciente = '';
    // citaObj.propietario = '';
    // citaObj.email = '';
    // citaObj.fecha = '';
    // citaObj.sintomas = '';
    Object.assign(citaObj, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    });
}

export function cargarEdicion(cita: Cita) {
    Object.assign(citaObj, cita);

    pacienteInput.value = citaObj.paciente;
    propietarioInput.value = citaObj.propietario;
    emailInput.value = citaObj.email;
    fechaInput.value = citaObj.fecha;
    sintomasInput.value = citaObj.sintomas;

    editando.value = true;

    formularioInput.value = 'Actualizar Paciente';
}

export function generarId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
