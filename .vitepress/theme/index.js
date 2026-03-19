import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NavLinkWithIcon from './components/NavLinkWithIcon.vue'
import './sidebar-divider.css'
import './sidebar-collapse.css'
import './home-hero-bg.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('NavLinkWithIcon', NavLinkWithIcon)
    // 在客户端注入侧栏分隔线样式，确保覆盖默认 scoped 样式
    if (typeof document !== 'undefined') {
      const style = document.createElement('style')
      style.textContent = `
        .VPSidebar .nav .group + .group,
        .VPSidebar #VPSidebarNav .group + .group {
          border-top: 1px solid var(--vp-c-divider);
          padding-top: 10px;
        }
        .VPSidebar .nav .group:nth-child(4),
        .VPSidebar #VPSidebarNav .group:nth-child(4) {
          border-top: 1px solid var(--vp-c-divider);
          padding-top: 10px;
        }
        .VPNavBarTitle .title .logo {
          margin-right: 12px;
          height: 28px;
          width: auto;
          object-fit: contain;
        }
      `
      document.head.appendChild(style)
    }
  }
}
