const path = require('path');

module.exports = {
  process(scss, scssPath) {
    return { code: `module.exports = ${JSON.stringify(path.basename(scssPath))}` };
  },
};
