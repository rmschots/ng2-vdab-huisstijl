const ROLLUP_GLOBALS = {
  '@angular/common': 'ng.common',
  '@angular/core': 'ng.core',
  '@angular/forms': 'ng.forms',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/ReplaySubject': 'Rx',
  'rxjs/add/operator/map': 'Rx.Observable.prototype',
  'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
  'rxjs/add/observable/fromEvent': 'Rx.Observable',
  'rxjs/add/observable/of': 'Rx.Observable'
};

export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/vdabhuisstijl.umd.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'vdabhuisstijl',
  globals: ROLLUP_GLOBALS,
  onwarn: warning => {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME',
      'UNRESOLVED_IMPORT'
    ];
    if (skip_codes.indexOf(warning.code) !== -1) return;
    console.error(warning);
  }
}