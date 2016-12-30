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
      let value = arr[1] || '';
      try {
        key = decodeURIComponent(arr[0] || '');
        value = decodeURIComponent(arr[1] || '');
      } catch (err) {

      }
      key && (obj[key] = value);
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