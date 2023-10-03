import { Realm } from "@realm/react";
export class Component3 extends Realm.Object {
  pregunta3_1 = "";
  pregunta3_2 = "";
  pregunta3_2_1Otra = "";
  pregunta3_3 = "";
  municipio_pregunta3_3 = "";
  pregunta3_4 = "";
  municipio_pregunta3_4 = "";
  municipio = "";
  departamento_pregunta3_4 = "";
  nombreDepartamento = "";

  static schema = {
    name: "component3",
    properties: {
      pregunta3_1: "string",
      pregunta3_2: "string",
      pregunta3_2_1Otra: "string",
      pregunta3_3: "string",
      municipio_pregunta3_3: "string",
      pregunta3_4: "string",
      municipio_pregunta3_4: "string",
      departamento_pregunta3_4: "string",

    }
  };
}
