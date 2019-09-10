const fs = require('fs');
const chalk = require('chalk');
const sh = require('shelljs');
const commander = require('commander');
const { resolveRoot, baseUri, slash, copy } = require('./lib/util');
const { isDir, getDistPath, mkdir } = require('./lib/util');
const writeString = require('./lib/writeString');
const readAsJson = require('./lib/readAsJson');
const { objectFromEntries } = require('./lib/fromEntries');
const defaultConfig = require('./lib/defaultConfig');
const Pretty = require('./lib/pretty');
const Verify = require('./lib/verify');

const eslintrc = resolveRoot('.eslintrc');



function main(args) {
  const {
    eslintrc = defaultConfig.eslintrc,
    src: inputSrcDirName = defaultConfig.src,
    dist: inputDistDirName = defaultConfig.dist,
    errorEslintFile = defaultConfig.errorEslint,
    ext = defaultConfig.ext,
    errorDetailLevel = defaultConfig.errorDetailLevel
  } = args;

  sh.echo(chalk.blue('based on [shell] & [commander] & [eslint] & [prettier]'));

  sh.echo(chalk.blue(eslintrc, inputSrcDirName, inputDistDirName, errorEslintFile, ext, errorDetailLevel));

  readAsJson(resolveRoot(eslintrc)).then((eslintConfig) => {
    // here u can modify
    const verify = new Verify({
      allowInlineConfig: false,
      fix: true,
      envs: ['browser', 'node'],
      baseConfig: eslintConfig
    }, errorDetailLevel);
    const pretty = new Pretty();
    pretty.applyMiddelware(verify.resolve.bind(verify));
    pretty.getConfig().then((config) => {
      const promises = [];
      function walk(config, root = '', src = inputSrcDirName, dist = inputDistDirName) {
        if (!root.startsWith(slash)) {
          root = slash + root;
        }
        const currentPath = baseUri + root;
        if (!isDir(currentPath)) return;
        mkdir(getDistPath(currentPath, src, dist));
        const files = fs.readdirSync(baseUri + root);
        files.forEach(name => {
          const absolutePath = currentPath + slash + name;
          if (isDir(absolutePath)) {
            walk(config, root + slash + name, src, dist);
          } else {
            if (absolutePath.endsWith(ext)) {
              const p = pretty
                .resolve(
                  absolutePath,
                  getDistPath(absolutePath, src, dist),
                  config
                )
                .catch(sh.echo);
              promises.push(p);
            } else {
              sh.cp(absolutePath, getDistPath(absolutePath, src, dist));
            }
          }
        });
      }
      sh.echo(chalk.blue('> config init...'));

      walk(config, inputSrcDirName, slash + inputSrcDirName, slash + inputDistDirName);
      
      Promise.all(promises).then(datas => {
        sh.echo(chalk.blue('> pretty finished...'));
        sh.echo(chalk.blue('> start checking `eslint`...'));
        writeString(
          errorEslintFile,
          JSON.stringify(objectFromEntries(verify.getMaps().entries())),
          'utf8'
        );
      });
    });
  })
}

commander
  .version('0.1.0')
  .option('-l, --eslintrc <eslintrcName>', 'which file to use for eslint check')
  .option('-s, --src <srcDir>', 'which directory do you choose to `pretty`')
  .option('-d, --dist <distDir>', 'which directory do you choose to receive output from `pretty`')
  .option('-e, --error-eslint-file <errorEslintFile>', 'which directory do you choose to receive eslint errors from `pretty`')
  .option('-i, --error-detail-level <errorEslintLevel>', 'set how many errors do you want')
  .option('-x, --ext <extName>', 'default ext is .js')

commander.parse(process.argv);

main(commander);
