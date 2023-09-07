import { Realm } from "@realm/react";
export class Component2 extends Realm.Object {
  _id = Realm.BSON.ObjectID();
  pregunta2_1 = "";
  pregunta2_2 = "";
  pregunta2_3 = "";
  pregunta2_4 = "";
  pregunta2_2_1 = "";
  pregunta2_2_2 = "";
  pregunta2_4_1 = "";
  pregunta2_4_1_nombre = "";
  pregunta2_5_2_UltimoNivel = "";
  pregunta2_5_1EducaSuperior = "";
  pregunta2_6_Ocupacion = "";
  pregunta2_7_Trabajo = "";
  pregunta2_8_1_Salario = "";
  pregunta2_8_2_Ingreso = "";

  static schema = {
    name: "component2",
    properties: {
      _id: { type: "objectId", default: new Realm.BSON.ObjectId() },
      pregunta2_1: "string",
      pregunta2_2: "string",
      pregunta2_3: "string",
      pregunta2_4: "string",
      pregunta2_2_1: "string",
      pregunta2_2_2: "string",
      pregunta2_4_1: "string",
      pregunta2_4_1_nombre: "string",
      pregunta2_5_2_UltimoNivel: "string",
      pregunta2_5_1EducaSuperior: "string",
      pregunta2_6_Ocupacion: "string",
      pregunta2_7_Trabajo: "string",
      pregunta2_8_1_Salario: "string",
      pregunta2_8_2_Ingreso: "string",
    },
    primaryKey: "_id",
  };
}
