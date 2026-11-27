import test from 'node:test'
import assert from 'node:assert/strict'
import { sum } from '../src/utils.js'

test('2 + 3 = 5', () => {
    assert.equal(sum(2, 3), 5)
})

test('10 + 15 = 25', () => {
    assert.equal(sum(10, 15), 25)
})
