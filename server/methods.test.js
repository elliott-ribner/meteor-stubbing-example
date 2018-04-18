import { expect } from 'chai';
import { runAdd5 } from './wrappers';
import calcModule from  './calc-module';
import sinon from 'sinon';

describe('calcModule', () => {
    before(() => {
        sinon.stub(calcModule, 'add5').callsFake((number) => {
            return number
        });
    });
    it('stubbed add5 causes function to not add anything', () => {
        const result = runAdd5(0)
        expect(result).to.eql(0)
    });
});