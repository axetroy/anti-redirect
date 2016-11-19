/**
 * Created by axetroy on 16-11-18.
 */

import * as _ from 'underscore';

const log = _.once(function (project?: string) {
  console.log(
    "%c Anti-Redirect %c Copyright \xa9 2015-%s %s",
    'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',
    "font-size:12px;color:#999999;",
    (new Date).getFullYear(),
    '\n' + (project || '')
  );
});

export {log};