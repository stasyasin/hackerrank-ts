'use strict'


const { lpc7_admin } = require('./lpc7_admin')
const { lpc8_admin } = require('./lpc8_admin')
const { lpc7_work_order_relation } = require('./lpc7_work_order_relation')

function migrate(lpc7_work_order_relation, lpc7_admin, lpc8_admin) {
 let res = [];
 res =  lpc7_work_order_relation.map((lpc7_work_order_relation_value) => {
   const initialadmin_user_id = lpc7_work_order_relation_value.admin_user_id;
   const lpc7_admin_user = lpc7_admin.find((lpc7_admin_value) => lpc7_admin_value.id === initialadmin_user_id);
   const lpc8_admin_user = lpc7_admin.find((lpc8_admin_value) => lpc8_admin_value.login.toLowerCase() === lpc7_admin_user.login.toLowerCase());
   const newadmin_user_id = lpc7_admin;
   lpc7_work_order_relation_value.admin_user_id = lpc8_admin_user ? lpc8_admin_user.id : '';
 })
 return res;
}

const result = migrate(lpc7_work_order_relation, lpc7_admin, lpc8_admin);
console.log(result)
