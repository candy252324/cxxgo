'use strict'

const log = require('npmlog')
log.level = 'info' // 当前level

log.heading = 'cxxgo:' // 自定义前缀
log.headingStyle = { fg: 'white', bg: '', bold: false } // 前缀样式
// log.prefixStyle = { fg: '', bg: '', bold: true } // 输出信息样式
// 只有level值大于或等于当前level的log才会被执行
log.addLevel('info', 1000, { fg: 'white', bg: 'blue', bold: true, inverse: true })
log.addLevel('warn', 2000, { fg: 'white', bg: 'yellow', bold: true })
log.addLevel('error', 3000, { fg: 'white', bg: 'red', bold: true })
log.addLevel('success', 4000, { fg: 'white', bg: 'green', bold: true })

// 使用示例
// log.info('info输出')
// log.warn('warn 输出')
// log.error('error 输出')
// log.success('success 输出')

module.exports = log
