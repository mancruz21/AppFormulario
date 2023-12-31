import { Realm } from "@realm/react";
export class Component1 extends Realm.Object {
  pregunta1_1Apell = "";
  pregunta1_1_2Nombres = "";
  pregunta1_1_3_Sexo = "";
  pregunta1_1_4Fecha = "";
  pregunta1_1_5Edad = 0;
  pregunta1_2_1 = "";
  pregunta1_2_2 = "";
  pregunta1_2_3_Mun = "";
  pregunta1_2_4_Area = "";
  pregunta1_2_5 = "";
  pregunta1_2_6_Ver = "";
  pregunta1_2_7_Dir = "";
  pregunta1_2_8_Tel = "";
  pregunta1_2_9_Estr = "";

  static schema = {
    name: "component1",
    properties: {
      pregunta1_1Apell: "string",
      pregunta1_1_2Nombres: "string",
      pregunta1_1_3_Sexo: "string",
      pregunta1_1_4Fecha: "string",
      pregunta1_1_5Edad: "int",
      pregunta1_2_1: "string",
      pregunta1_2_2: "string",
      pregunta1_2_3_Mun: "string",
      pregunta1_2_4_Area: "string",
      pregunta1_2_5: "string",
      pregunta1_2_6_Ver: "string",
      pregunta1_2_7_Dir: "string",
      pregunta1_2_8_Tel: "int",
      pregunta1_2_9_Estr: "string",
    }
  };
}
