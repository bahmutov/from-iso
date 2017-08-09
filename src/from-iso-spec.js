'use strict'

/* eslint-env mocha */
const fromIso = require('.')
const snapshot = require('snap-shot')

describe('from-iso', () => {
  it('valid date', () => {
    const s = '2017-08-09T03:20:10.437Z'
    const result = fromIso(s)
    snapshot(result)
  })
})
