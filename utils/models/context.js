import { Persona } from "./schemas/persona";
import Realm from "realm";
import {createRealmContext} from '@realm/react';

export const RealmConfigContext =  createRealmContext({
  schema: [Persona],
  path: "personas.realm",
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true,
});
