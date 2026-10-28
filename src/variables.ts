import { generarId } from "./funciones";
import type { Cita } from "./types";

let editando = {
    value: false
}

// objeto de cita
const citaObj: Cita = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}

