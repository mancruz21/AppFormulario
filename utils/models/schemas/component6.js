import { Realm } from "@realm/react";
export class Component6 extends Realm.Object {
  _id = new Realm.BSON.ObjectID();
  pregunta6_1= "";
  otroTexto6_1= "";
  pregunta6_2= "";
  otroIndicacion6_2="";
  pregunta6_3= "";
  municipio_pregunta6_3= "";

  static schema = {
    name: "component6",
    properties: {
      _id: { type: "objectId", default: new Realm.BSON.ObjectId() },
      pregunta6_1: "string",
      otroTexto6_1: "string",
      pregunta6_2: "string",
      otroIndicacion6_2: "string",
      pregunta6_3: "string",
      municipio_pregunta6_3: "string",
    },
    primaryKey: "_id",
  };
}