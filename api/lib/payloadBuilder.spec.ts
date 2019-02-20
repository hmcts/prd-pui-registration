import {expect} from 'chai'
import 'mocha'
import {shouldReturnTrue} from './payloadBuilder'

describe('Payload builder', () => {

    it('Should return false', () => {
        const result = shouldReturnTrue()
        expect(result).to.equal(false)
    })
})
