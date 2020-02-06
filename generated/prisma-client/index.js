"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "User_Role",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Avi_Roles",
    embedded: true
  },
  {
    name: "Media_Item",
    embedded: false
  },
  {
    name: "Project_Category",
    embedded: true
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
