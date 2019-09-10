##### prettier

> 快速格式化你的代码， 终结各种写法之争

目前来看，在`react`开发中大多使用prettier默认设置就行了，喜欢js中用单引号的，自行修改singleQuote就行了。

##### eslint

> 代码检测，让问题代码无处遁形

人工做代码检测是很累的，大部分程式化的工作就交给机器来做就行了。

##### use
* 另起工程来做
  1. `clone`到本地
  2. 把旧工程的`eslint`和`prettier`规则迁移到当前。如旧工程没有的，可以在本目录配置好这两个插件
  3. 执行`node index --help`(可以查看参数)
  4. 执行`node index`使用默认参数运行
* 安装到`devDependencies`使用命令行
  1. `npm install @wander/pretty --save-dev`
  2. 在项目根目录
  3. `pretty --help`查看参数
  4. `pretty`使用默认参数执行


##### benefit
* 自动给全部`js`应用`.prettier`的样式
* 输出一个报错的`eslint`文件，供你选择

##### linter-learner
学习使用lint
```json
{
  // import语句排序
  "sort-imports": 0,
  // 驼峰命名变量
  "camelcase": 0,
  // 未定义变量
  "no-undef": 0,
  // --自减号
  "no-plusplus": 0,
  // 下划线使用
  "no-underscore-dangle": 0,
  // 强制使用===号
  "react/jsx-props-no-spreading": 0,
  "eqeqeq": 0,
  // 函数参数重新赋值
  "no-param-reassign": 0,
  // return语句不能赋值
  "no-return-assign": 0,
  // 外部已定义变量名
  "no-shadow": 0,
  // 未使用的变量
  "no-unused-vars": 0,
  // 未命名函数
  "func-names": 0,
  // react的state应该在constructor内声明
  "react/state-in-constructor": 0,
  // react的state\props应该用解构获取值
  "react/destructuring-assignment": 0,
  // 未使用到的表达式
  "no-unused-expressions": 0,
  // 使用array的index作为keys
  "react/no-array-index-key": 0,
  // a 标签提供一个herf地址，键位可达
  "jsx-a11y/anchor-is-valid": 0,
  // img标签需要一个alt属性 或者文字
  "jsx-a11y/alt-text": 0,
  // 非必填数据必须带有默认值
  "react/require-default-props": 0,
  // 数组中禁止出现空的逗号
  "no-sparse-arrays": 0,
  // 默认属性应该定义在class之外
  "react/static-property-placement": 0,
  // 没有用到this的方法应该定义为static方法
  "class-methods-use-this": 0,
  // class内部方法按字典排序
  "react/sort-comp": 0,
  // children有可能只有一个 危险的children
  "react/no-danger-with-children": 0,
  // 一行最长100个字符
  "max-len": 0,
  // for-in 语句应该过滤不需要的属性
  "guard-for-in": 0,
  // 不应该定义空对象参数
  "no-empty-pattern": 0,
  // 可见的非交互性元素有click事件时需要至少一个键位事件
  "jsx-a11y/click-events-have-key-events": 0,
  // 逗号后面加空格
  "comma-spacing": 0,
  // 不要用new String()
  "no-new-wrappers": 0,
  // 一个文件只需要一个class
  "max-classes-per-file": 0,
  // 不要使用ReactDom.findDOMNode
  "react/no-find-dom-node": 0,
  // 不要使用this.refs | 字符串
  "react/no-string-refs": 0,
  // 未重新赋值的变量应该声明为const
  "prefer-const": 0,
  // 使用上一次状态时 应该在setState中用callback
  "react/no-access-state-in-setstate": 0,
  // import语句应该排序
  "import/order": 0,
  // iframe需要一个独立的title属性
  "jsx-a11y/iframe-has-title": 0,
  // 没有用到的state属性
  "react/no-unused-state": 0,
  // props没有用到
  "react/no-unused-prop-types": 0,
  // 不要使用new产生副作用
  "no-new": 0,
  // 应该用解构
  "prefer-destructuring": 0,
  // 禁用部分全局变量
  "no-restricted-globals": 0,
  // 不要有空的block
  "no-empty": 0,
  // Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener
  "react/jsx-no-target-blank": 0,
  // jsx {前不应有新行
  "react/jsx-curly-newline": 0,
  // 箭头函数应该返回值
  "array-callback-return": 0,
  // 重复定义class成员函数
  "no-dupe-class-members": 0,
  // 单独的块级作用域{}
  "no-lone-blocks": 0,
  // `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`
  "react/no-unescaped-entities": 0,
  // default返回
  "default-case": 0,
  // Caution: `IssueUpgradeStateEnum` also has a named export `KEYMAP`. Check if you meant to write `import {KEYMAP} from '../../constants/IssueUpgradeStateEnum'` instead
  "import/no-named-as-default-member": 0,
  // Function declared in a loop contains unsafe references to variable(s) 'file'  no-loop-func
  "no-loop-func": 0,
  // 禁用不必要的转义
  "no-useless-escape": 0,
  // jsx缩进
  "react/jsx-indent": 0
}
```