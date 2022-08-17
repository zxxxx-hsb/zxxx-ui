// 导入组件，组件必须声明 name
import ZxButton from './src'

// 为组件提供 install 安装方法，供按需引入
ZxButton.install = function (Vue) {
    Vue.component(ZxButton.name, ZxButton)
}

// 导出组件
export default ZxButton
