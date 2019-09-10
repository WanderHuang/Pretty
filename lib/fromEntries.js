module.exports = {
  objectFromEntries(entries) {
    const o = {};
    for(const [key, value] of entries) {
      o[key] = value;
    }
    return o;
  }
}