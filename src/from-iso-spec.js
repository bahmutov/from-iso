'use strict'

/* eslint-env mocha */
const fromIso = require('.')
const snapshot = require('snap-shot')

describe('from-iso', () => {
  it('valid date', () => {
    const s = '2017-08-09T03:20:10.437Z'
    const locale = 'en-US'
    const options = {
      timeZone: 'America/New_York'
    }
    const result = fromIso(s, locale, options)
    snapshot(result)
  })
})
