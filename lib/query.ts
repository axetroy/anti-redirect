/**
 * Created by axetroy on 16-11-18.
 */

export default class Query {
  object: any = {};

  constructor(public queryStr: String) {
    this.object = this.toObject(queryStr.replace(/^\?+/, ''));
  }

  toObject(queryStr: String) {
    let obj = {};
    queryStr.split('&').forEach((item)=> {
      let arr = item.split('=') || [];
      let key = arr[0] || '';
      obj[key] = arr[1] || '';
    });
    return obj;
  }

  public toString(): String {
    let arr = [];
    for (let key in this.object) {
      if (this.object.hasOwnProperty(key)) {
        let value = this.object[key];
        arr.push(key + '=' + value);
      }
    }
    return '?' + arr.join('&');
  }

}