// ****************************************
// DARRT framework
// data elements 
// properties, requireds, and enums
// 2020-02-01 : mamund
// ****************************************

// this service's message properties
// you MUST include id, dateCreated, and dateUpdated
exports.props = [
  'id',
  
  'status',
  'dateCreated',
  'dateUpdated'
];

// required properties
exports.reqd = [];

// enumerated properties
exports.enums = [
  {status:['pending','active','suspended','closed']}
];

// default values for properties
exports.defs = [
  {name:"status",value:"pending"}
]
