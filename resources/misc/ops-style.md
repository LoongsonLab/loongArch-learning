---
title: OpForge 风格示例页
outline: deep
---

<div class="hero">
  <div class="hero-left">
    <p class="hero-kicker">LoongArch · 系统能力贯通教学</p>
    <h1 class="hero-title">
      <span class="hero-title-main">LoongArch 系统能力贯通</span><br />
      <span class="hero-title-sub">教学资源库</span>
    </h1>
    <p class="hero-subtitle">
      本站汇聚视频课程、配套教材、实验代码、配套工具等全栈资源，帮助老师和同学在 LoongArch 平台上一站式完成「教、学、做」。
    </p>
    <div class="hero-actions">
      <a class="hero-button primary" href="/resources/courses/intro/">开始学习</a>
      <a class="hero-button ghost" href="/feedback/">问题反馈</a>
    </div>
  </div>
</div>

---

<div class="grid">
  <div class="grid-card">
    <div class="grid-icon">CS</div>
    <h3>LA 教学配套</h3>
    <p>四门核心课程：计算机系统、组成原理/体系结构、操作系统、编译原理。</p>
  </div>
  <div class="grid-card">
    <div class="grid-icon">DOC</div>
    <h3>LA 相关文档</h3>
    <p>架构参考手册、ABI、工具链约定等官方/权威文档。</p>
  </div>
  <div class="grid-card">
    <div class="grid-icon">CPT</div>
    <h3>竞赛资源</h3>
    <p>平台手册、FAQ、培训报告与历届优秀案例。</p>
  </div>
  <div class="grid-card">
    <div class="grid-icon">TL</div>
    <h3>LA 工具链</h3>
    <p>GCC / Clang / Rust 交叉编译器、Qemu、GDB 等工具。</p>
  </div>
  <div class="grid-card">
    <div class="grid-icon">IP</div>
    <h3>LA 相关 IP</h3>
    <p>ChipLab、OpenLA1000 等开源/教学处理器 IP。</p>
  </div>
  <div class="grid-card">
    <div class="grid-icon">OS</div>
    <h3>LA 开源 OS</h3>
    <p>xv6、uCore、rCore、Android 等 LA 平台操作系统。</p>
  </div>
</div>

---

如在使用过程中有任何问题或建议，欢迎随时前往 <a href="/feedback/">问题反馈</a> 页面告诉我们。

<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
}
.hero-left {
  flex: 1 1 320px;
}
.hero-right {
  flex: 0 0 260px;
  display: flex;
  justify-content: center;
  position: relative;
}
.hero-kicker {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 0.4rem;
}
.hero-title {
  margin: 0 0 0.8rem;
  line-height: 1.25;
}
.hero-title-main {
  font-size: 2.6rem;
  font-weight: 800;
  background: linear-gradient(90deg, #22c1c3, #2563eb);
  -webkit-background-clip: text;
  color: transparent;
}
.hero-title-sub {
  position: relative;
  display: inline-block;
  font-size: 2.3rem;
  font-weight: 800;
  color: #111827;
}

.hero-subtitle {
  font-size: 0.98rem;
  color: #4b5563;
  max-width: 32rem;
}
.hero-actions {
  margin-top: 1.4rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.hero-button {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
}
.hero-button.primary {
  background-color: #2563eb;
  color: #fff;
}
.hero-button.primary:hover {
  background-color: #1d4ed8;
}
.hero-button.ghost {
  background-color: #f9fafb;
  color: #111827;
  border-color: #e5e7eb;
}
.hero-card {
  background: radial-gradient(circle at top, #e0f2fe, #eff6ff);
  border-radius: 24px;
  padding: 1.4rem 1.6rem;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
  max-width: 280px;
}
.hero-card-title {
  font-weight: 700;
  margin-bottom: 0.6rem;
}
.hero-card-text {
  font-size: 0.9rem;
  color: #374151;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  margin-bottom: 1.5rem;
}
.grid-card {
  background-color: #ffffff;
  border-radius: 18px;
  padding: 1.1rem 1.2rem;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.16);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.grid-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
  border-color: rgba(37, 99, 235, 0.35);
}
.grid-icon {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.grid-card h3 {
  margin: 0 0 0.4rem;
  font-size: 1rem;
}
.grid-card p {
  margin: 0 0 0.6rem;
  font-size: 0.9rem;
  color: #4b5563;
}
.grid-card a {
  font-size: 0.88rem;
  color: #2563eb;
  text-decoration: none;
}
.grid-card a:hover {
  text-decoration: underline;
}
/* 右侧发光圆效果，类似 OpForge */
.hero-right::before {
  content: '';
  position: absolute;
  inset: auto;
  width: 260px;
  height: 260px;
  border-radius: 999px;
  background: radial-gradient(circle, #e0f2ff 0, #c7d2fe 40%, transparent 70%);
  filter: blur(2px);
  opacity: 0.9;
  z-index: -1;
  animation: hero-halo 8s ease-in-out infinite alternate;
}
@keyframes hero-halo {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.05);
    opacity: 1;
  }
}
@media (max-width: 640px) {
  .hero-title {
    font-size: 1.7rem;
  }
}
</style>

