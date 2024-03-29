
/* IMPORT */

import {describe} from 'fava';
import unescape from '../dist/index.js';

/* MAIN */

describe ( 'Zeptomatch Unescape', it => {

  it ( 'can remove escape sequences', t => {

    t.is ( unescape ( '\\' ), '\\' );
    t.is ( unescape ( '\\\\' ), '\\' );
    t.is ( unescape ( 'foo\\*bar\\?\\' ), 'foo*bar?\\' );

  });

});
