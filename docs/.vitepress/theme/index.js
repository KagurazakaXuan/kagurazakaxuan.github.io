import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'
import BlogList from './BlogList.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('BlogList', BlogList)
    }
}