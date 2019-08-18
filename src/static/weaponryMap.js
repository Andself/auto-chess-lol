import base from './base'
import advanced from './advanced'

const dataMap = {}

base.forEach(e => {
  dataMap[e.key] = { ...e }
})

advanced.forEach(e => {
  dataMap[e.key] = { ...e }
})

export default dataMap
