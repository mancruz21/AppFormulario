import { Realm } from "@realm/react";
export class Persona extends Realm.Object {
  _id = new Realm.BSON.ObjectID();
  tipoID = "";
  id_document = 0;
  component1 = {};
  component2 = {};
  component3 = {};
  component4 = {};
  component5 = {};
  component6 = {};

  static schema = {
    name: "Persona",
    properties: {
      _id: { type: "objectId", default: new Realm.BSON.ObjectId() },
      tipoID: "string",
      id_document: "int",
      component1: { type: "object", objectType: "component1" },
      component2: { type: "object", objectType: "component2" },
      component3: { type: "object", objectType: "component3" },
      component4: { type: "object", objectType: "component4" },
      component5: { type: "object", objectType: "component5" },
      component6: { type: "object", objectType: "component6" },
    },
    primaryKey: "_id",
  };
}
