import { Realm } from "@realm/react";
export class Persona extends Realm.Object {
  tipoID = "";
  id_document = 0;
  departamento="";
  component1 = {};
  component2 = {};
  component3 = {};
  component4 = {};
  component5 = {};
  component6 = {};

  static schema = {
    name: "Persona",
    properties: {
      tipoID: "string",
      id_document: "int",
      departamento:"string",
      component1: { type: "object", objectType: "component1" },
      component2: { type: "object", objectType: "component2" },
      component3: { type: "object", objectType: "component3" },
      component4: { type: "object", objectType: "component4" },
      component5: { type: "object", objectType: "component5" },
      component6: { type: "object", objectType: "component6" },
    },
    primaryKey: "id_document",
  };
}
