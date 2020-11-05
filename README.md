# create-react-app 模板

基于create-react-app创建项目模板，记录修改过程

## 初始创建

```
npx create-react-app create-react-app-template --template typescript

```

## 按照文档更新设置

Visual Studio Code调试设置，使用prettier做格式化相关设置，使用Storybook来辅助开发界面组件

```
yarn add husky lint-staged prettier -D

npx -p @storybook/cli sb init
```

