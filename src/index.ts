
/* MAIN */

const unescape = (() => {

  const re = /\\(.)/gs;

  return ( glob: string ): string => {

    return glob.replace ( re, '$1' );

  };

})();

/* EXPORT */

export default unescape;
