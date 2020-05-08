const fs = require('fs');
const path = require('path');
module.exports = function(context) {
    const filePath = path.join(
        context.opts.projectRoot,
        'platforms',
        'android',
        'build-extras.gradle',
    );
    return fs.promises
        .writeFile(filePath, 'ext.cdvMinSdkVersion = 21\n', 'utf-8')
        .then(() => 'done');
};