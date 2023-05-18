let gameidd = 'NgLlMu9RCpVBMpjtvqQ1';
export default (id) => {
  gameidd = id;
  gameidd = gameidd.slice(14, 34);
};

// assigning 'const' instead of 'let'  import/no-mutable-exports
const gameid = gameidd;
export { gameid };
