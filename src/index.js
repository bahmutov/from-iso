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
