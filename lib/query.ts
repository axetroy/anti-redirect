/**
 * Created by axetroy on 16-11-18.
 */

export default class Query {
  object: any = {};

  constructor(public queryStr: String = '') {
    this.object = this.toObject(queryStr.replace(/^\?+/, ''));
  }

  private toObject(queryStr: String) {
    let obj = {};
    queryStr.split('&').forEach((item)=> {
      let arr = item.split('=') || [];
      let key = arr[0] || '';
      key && (obj[key] = arr[1] || '');
    });
    return obj;
  }

  public toString(): String {
    let arr: string[] = [];
    for (let key in this.object) {
      if (this.object.hasOwnProperty(key)) {
        let value = this.object[key];
        arr.push(key + '=' + value);
      }
    }
    return arr.length ? '?' + arr.join('&') : '';
  }

}