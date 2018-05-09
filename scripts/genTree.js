const tree = require('tree-directory');
const path = require('path');

tree(path.join(__dirname, '..', 'src'), '**/*.*'). then((res) => {
  console.log(res);
});
