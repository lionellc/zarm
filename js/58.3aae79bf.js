(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{655:function(n,e){n.exports='# Stepper 步进器\n\n\n\n## 基本用法\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 1,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          title="普通"\n          description={\n            <Stepper\n              value={this.state.value}\n              onChange={(value) => {\n                console.log(value);\n              }}\n            />\n          }\n        />\n\n        <Cell\n          title="设置默认值"\n          description={\n            <Stepper defaultValue={2} />\n          }\n        />\n\n        <Cell\n          title="设置上下限（-3 ~ 3）"\n          description={\n            <Stepper min={-3} max={3} />\n          }\n        />\n\n        <Cell\n          title="设置步长"\n          description={\n            <Stepper step={5} />\n          }\n        />\n\n        <Cell\n          title="禁用状态"\n          description={\n            <Stepper disabled />\n          }\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 多形状\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          title="直角"\n          description={\n            <Stepper shape="rect" />\n          }\n        />\n\n        <Cell\n          title="圆形"\n          description={\n            <Stepper shape="circle" />\n          }\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 多尺寸\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          title="大号"\n          description={\n            <Stepper size="lg" />\n          }\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| shape | string | \'rect\' | 形状，可选值 `rect`, `radius`, `circle` |\n| size | string | \'md\' | 大小，可选值 `md`、`lg` |\n| value | number | - | 值 |\n| defaultValue | number | - | 初始值 |\n| min | number | - | 最小值 |\n| max | number | - | 最大值 |\n| step | number | 1 | 步长 |\n| disabled | boolean | false | 是否禁用 |\n| onInputChange | (value?: number) => void | - | 输入值变化时触发的回调函数 |\n| onChange | (value?: number) => void | - | 值变化时触发的回调函数 |\n'}}]);