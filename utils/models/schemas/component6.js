import { Realm } from "@realm/react";
export class Component6 extends Realm.Object {
  _id = new Realm.BSON.ObjectID();
  pregunta4_1 = "";
  pregunta4_2 = "";
  pregunta4_3_1Transtornos = "";
  pregunta4_3_Def = "";
  pregunta4_3_Cron = "";
  pregunta4_3_Infec = "";
  pregunta4_3_4_Sens = "";
  pregunta4_3_5Less = "";
  pregunta4_3_6_Auto = "";
  pregunta4_4 = "";

  static schema = {
    name: "component6",
    properties: {
      _id: { type: "objectId", default: new Realm.BSON.ObjectId() },
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
    },
    primaryKey: "_id",
  };
}