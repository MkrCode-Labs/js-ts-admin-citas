

export interface Cita {
    [key: string]: string; // permite que el objeto tenga propiedades dinamicas - index signature
    id: string;
    paciente: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
}