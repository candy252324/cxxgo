#! /usr/bin/env node
const importLocal=require('import-local')

if(importLocal(__filename)){
  console.log("项目中版本")
}else{
  console.log("全局版本")
  require("../lib")(process.argv.slice(2))
}