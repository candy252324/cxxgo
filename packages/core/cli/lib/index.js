'use strict'
const axios = require('axios')
const utils = require('@cxxgo/utils')
const log = utils.log
const fs = require('fs')

module.exports = core

function core(a) {
  checkPkgVersion()
}

/** 检查版本号更新 */
function checkPkgVersion() {
  const pkgVersion = require('../../package.json').version
  axios.get('https://registry.npmjs.org/vue').then(res => {
    if (res.status === 200) {
      debugger
      console.log(typeof JSON.parse(res.data))
      console.log(res.data)
    }

    // if (res.status === 200) {
    //   const versions = Object.keys(res.data.versions || [])
    //   console.log(versions)
    // }
  })
  log.info('检查版本更新', pkgVersion)
}
