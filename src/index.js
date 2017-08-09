#!/usr/bin/env node

'use strict'

function isoToLocale (str) {
  if (typeof str !== 'string') {
    console.error("Sorry, don't know what to do with", str)
    return
  }
  if (!str) {
    console.error('Empty string is not a date')
    return
  }
  const d = new Date(str)
  return d.toLocaleString()
}

// eslint-disable-next-line immutable/no-mutation
module.exports = isoToLocale

if (!module.parent) {
  const str = process.argv[2]
  const local = isoToLocale(str)
  if (!local) {
    process.exit(-1)
  }
  console.log(local)
}
