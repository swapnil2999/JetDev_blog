/* eslint-disable @typescript-eslint/no-explicit-any */
class Validator {
    public isAlphaNum(pValue: any): boolean {
        const exp = new RegExp(/^([a-zA-Z0-9 _-]+)$/);
        if (exp.test(pValue)) {
            return true;
        }
        return false;
    }
    public isOnlyNumber(pValue: any): boolean {
        const exp = new RegExp(/^\d+$/);
        if (exp.test(pValue)) {
            return true;
        }
        return false;
    }
    public isNotUndefinedAndNull(pValue: any): boolean {
        let value = pValue;
        if (typeof value === 'string') {
            value = pValue.trim();
        }
        if (value !== undefined && value !== null && value !== '' && value !== 'null' && value !== 'undefined') {
            return true;
        }
        return false;
    }
    public isNullOrUndefined(pValue: any): boolean {
        if (pValue === undefined || pValue === null || (typeof pValue === 'string' && pValue.trim() === '') || pValue === 'null' || pValue === 'undefined') {
            return true;
        }
        return false;
    }
    public isArrayEmpty(pValue: any): boolean {
        if (!pValue || !Array.isArray(pValue) || pValue.length === 0) {
            return true;
        }
        return false;
    }
}

export default Validator;