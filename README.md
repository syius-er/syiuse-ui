# default

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



封装组件库发布到github npm 上

初始化一个vue项目

指定到目录下

检测是否有安装 vue-cli 如果有将显示版本号 如果没有请自行安装

初始化一个vue项目


进入到指定目录 并测试vue项目

访问地址

检测项目 是否各项成功运行 如下图效果则各项运行成功

将创建好的vue项目导入到hbuilderx当中

另一种方法
直接在 hbuilderx 里创建一个vue-cli项目




创建项目疑惑



这几种方式的创建是否会影响到后期的操作 现在还不知道 有待后期发现 尤其是在一些配置文件的安装上

首先使用npm创建的vue-cli项目
将src目录下默认的东西清除 assets components 目录下的文件删除

在组件目录下创建一个button.vue文件 用来写按钮的样式

在button.vue 里创建一个按钮 并为其命名

在 main.js 里导入 并全局引入

在app.vue里引用

封装按钮要考虑到这些知识要素 属性 方法



使用slot简单插槽实现数据动态渲染 并用span套在外边 控制其样式



给按钮设置样式 放入css样式
样式
.hm-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.hm-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.hm-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.hm-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.hm-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}



使用props 获取父类传过来的值 并进行props 约束 和校验 在div使用模板字符串 `${type}`  



plain属性 放入css样式
plain属性
// 朴素的按钮
.hm-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.hm-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.hm-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.hm-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.hm-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.hm-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
同样定义一组按钮 添加 plain 属性

获取 plain 属性 并遍历



round属性
.hm-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
circle属性
// 原形按钮
.hm-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
icon的支持
在main.js中引入字体图标文件
import './assets/fonts/font.scss'
结构
<i :class="icon" v-if="icon"></i>
<slot></slot>
js
icon: {
  type: String,
  default: ''
}
样式
// 按钮后的文本
.hm-button [class*=hm-icon-]+span {
    margin-left: 5px;
}

禁用按钮
props
disabled: Boolean
结构
<button class="hm-button" :class="[`hm-button--${type}`, {
  'is-plain': plain,
  'is-round': round,
  'is-circle': circle,
  'is-disabled': disabled
  }]"
  :disabled="disabled"
  @click="handleClick"
>
样式
//样式

// 禁用
.sy-button.is-disabled,
.sy-button.is-disabled:focus,
sy-button:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.sy-button.is-disabled,
.sy-button.is-disabled:focus,
.sy-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.sy-button--primary.is-disabled,
.sy-button--primary.is-disabled:active,
.sy-button--primary.is-disabled:focus,
.sy-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.sy-button--success.is-disabled,
.sy-button--success.is-disabled:active,
.sy-button--success.is-disabled:focus,
.sy-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.sy-button--info.is-disabled,
.sy-button--info.is-disabled:active,
.sy-button--info.is-disabled:focus,
.sy-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.sy-button--warning.is-disabled,
.sy-button--warning.is-disabled:active,
.sy-button--warning.is-disabled:focus,
.sy-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.sy-button--danger.is-disabled,
.sy-button--danger.is-disabled:active,
.sy-button--danger.is-disabled:focus,
.sy-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

打包
在项目根目录创建两个文件夹packages和examples
packages: 用于存放所有的组件 examples: 用于进行测试,把src改成examples
把components中所有的组件放入到packages中
把fonts放到packages中
删除原来的src目录（不用删除也可以 将src给为examples）

vue.config.js配置 新增vue.config.js配置
const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}

