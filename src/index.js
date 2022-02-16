module.exports = function check(str, bracketsConfig) {
  let result = [];
  let condition = null;
    for (let i = 0; i < str.length; i++) {
        if (result.length === 0) {
            result.push(str[i]);
        } else if (result !=0) {
            bracketsConfig.forEach(elem => (elem.includes(result[result.length - 1]) && (condition = elem)));
            str[i] === condition[1] ? result.pop() : result.push(str[i]);
        }
    }

    return result.length > 0 ? false : true;
};
