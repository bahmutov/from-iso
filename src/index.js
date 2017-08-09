#!/usr/bin/env node

'use strict'

// passing locale and options allows for simple testing
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
//  /Reference/Global_Objects/Date/toLocaleString
function isoToLocale (str, locale, options) {
  if (typeof str !== 'string') {
    console.error("Sorry, don't know what to do with date", str)
    return
  }
  if (!str) {
    console.error('Empty string is not a date')
    return
  }
  const d = new Date(str)
  return d.toLocaleString(locale, options)
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
