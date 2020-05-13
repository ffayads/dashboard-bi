export default "Variables generales";

export const orientation = {
    0: " Bogotá - Girardot",
    1: " Girardot - Bogotá"
}

export const status = {
    0: "INACTIVO",
    1: "ACTIVO"
}

export const reportS = {
    0: "PENDIENTE",
    1: "APROBADO",
    2: "RECHAZADO",
    3: "FINALIZADO"
}

export const TypeReport = {
    1: "Accidente/Incidente",
    2: "Represamiento",
    3: "Huecos",
    4: "Derrumbes",
    5: "Arbol Caido",
    6: "Roceria",
    7: "Señales en mal estado ",
    8: "Estado del pavimento",
}

export const multiSelectType = () => {
    let newData = [];
    Object.entries(TypeReport).map((data) => {
        newData.push({ value: data[0], label: data[1] });
    })
    return newData;
}