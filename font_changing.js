const dayjs = require('dayjs')
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs().format()
dayjs.extend(relativeTime)

console.log(dayjs('1980-01-01').fromNow())