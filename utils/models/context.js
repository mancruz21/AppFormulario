import { Persona } from "./schemas/persona";
import { Component1 } from "./schemas/component1";
import { Component2 } from "./schemas/component2";
import { Component3 } from "./schemas/component3";
import { Component4 } from "./schemas/component4";
import { Component5 } from "./schemas/component5";
import { Component6 } from "./schemas/component6";
import {createRealmContext} from '@realm/react';

export const RealmConfigContext =  createRealmContext({
  schema: [Persona,Component1,Component2,Component3,Component4,Component5,Component6],
  path: "personas.realm",
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true,
});
