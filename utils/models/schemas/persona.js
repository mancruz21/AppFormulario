import { Realm } from "@realm/react";
export class Persona extends Realm.Object {
  _id = Realm.BSON.ObjectID();
  pregunta1_1Apell = "";
  pregunta1_1_2Nombres = "";
  pregunta1_1_3_Sexo = "";
  pregunta1_1_4Fecha = "";
  pregunta1_1_5Edad = 0;

  static schema = {
    name: "Persona",
    properties: {
      _id: { type: "objectId", default: new Realm.BSON.ObjectId() },
      identificacion: {
        tipoID: "string",
        Id: "int"

      },

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

      componente2: {

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
      componente3: {
        pregunta3_1: "string",
        pregunta3_2: "string",
        pregunta3_3: "string",
        municipio_pregunta3_3: "string",
        pregunta3_4: "string",
        municipio_pregunta3_4: "string",
        municipio: "string",
        departamento_pregunta3_4: "string",
        nombreDepartamento: "string",

      },
      componente4:{
        pregunta4_1: "string",
          pregunta4_2: "string",
          pregunta4_3_1Transtornos: "string",
          pregunta4_3_Def: "string",
          pregunta4_3_Cron: "string",
          pregunta4_3_Infec: "string",
          pregunta4_3_4_Sens: "string",
          pregunta4_3_5Less: "string",
          pregunta4_3_6_Auto: "string",
          pregunta4_4: "string",

      }

    },
    primaryKey: "_id",


  };

}
