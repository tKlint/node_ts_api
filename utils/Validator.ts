type RequstParams = {
  key: string;
  value?: null | any;
  require?: boolean;
  valueType: 'string' | 'number' | 'email';
  validator?: (requstParams: RequstParams[]) => boolean;
}


export default class Validator {
  static patterns = {
    email: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
  }
  static isEmail(email: any) {
    if(typeof email !== 'string'){
      return false;
    }
    return this.patterns.email.test(email);
  }
  
  static validateRequstParams(requstParams: RequstParams[]) {
    const invalidParam = requstParams.find(({ key, valueType, validator, value, require = true }) => {
      let flag = true;
      if (!require && ((value ?? '') !== '')) {
        return true;
      }
      if (valueType === 'email') {
        flag = this.isEmail(value);
      } else if (valueType === 'string') {
        flag = typeof value  === 'string';
      } else if (valueType === 'number') {
        flag = typeof value === 'number';
      }
      return !flag;
    });
    if (invalidParam !== undefined) {
      return [false, invalidParam] as [false, RequstParams];
    }
    return [true] as [true];
  }
}