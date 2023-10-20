import { Realm } from "@realm/react";
export class Component6 extends Realm.Object {
  pregunta6_1 = "";
  otroTexto6_1 = "";
  pregunta6_2 = "";
  pregunta6_2_1 = "";
  pregunta6_2_2="";
  pregunta6_3 = "";
  departamento_pregunta6_3 = "";
  municipio_pregunta6_3 = "";
  encuestador_compo7 = "";
  FechaDilingecimiento="";


  static schema = {
    name: "component6",
    properties: {
      pregunta6_1: "string",
      otroTexto6_1: "string",
      pregunta6_2: "string",
      pregunta6_2_1: "string",
      pregunta6_2_2:"string",
      pregunta6_3: "string",
      departamento_pregunta6_3: "string",
      municipio_pregunta6_3: "string",
      encuestador_compo7: "string",
      FechaDilingecimiento: "string",
    }
  };
}