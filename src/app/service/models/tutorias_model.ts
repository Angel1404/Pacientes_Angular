// To parse this data:
//
//   import { Convert } from "./file";
//
//   const seancesModel = Convert.toSeancesModel(json);

export interface TutoriasModels {
    id_tutoria:    number;
    id_estudiante: number;
    id_tutor:      number;
    id_asignatura: number;
    tema:          string;
    fecha:         Date;
    duracion:      number;
    comentario?:    string;
    estado?:        number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSeancesModel(json: string): TutoriasModels[] {
        return JSON.parse(json);
    }

    public static seancesModelToJson(value: TutoriasModels[]): string {
        return JSON.stringify(value);
    }
}
