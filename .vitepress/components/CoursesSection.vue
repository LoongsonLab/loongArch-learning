<template>
  <section class="home-section resources-section">
    <div class="resources-header">
      <h2>LoongArch 课程资源</h2>
      <p class="resources-subtitle">
        围绕 LoongArch 架构，覆盖从系统基础到操作系统与编译器的四大核心课程方向
      </p>
    </div>

    <div class="cards-row">
      <a class="card" href="/resources/courses/intro/">
        <div class="thumb">
          <div class="thumb-inner thumb-intro" />
        </div>
        <div class="content">
          <h3>计算机系统基础 / 导论</h3>
          <p class="meta">从零开始，理解计算机 · 基于 LoongArch，理论 + 实验全覆盖</p>
        </div>
      </a>

      <a class="card" href="/resources/courses/arch/">
        <div class="thumb">
          <div class="thumb-inner thumb-arch" />
        </div>
        <div class="content">
          <h3>计算机组成原理 / 体系结构</h3>
          <p class="meta">动手设计一个 CPU · 在 LoongArch 上亲手搭建完整处理器</p>
        </div>
      </a>

      <a class="card" href="/resources/courses/os/">
        <div class="thumb">
          <div class="thumb-inner thumb-os" />
        </div>
        <div class="content">
          <h3>操作系统</h3>
          <p class="meta">多款 OS 实现，满足不同教学需求 · 覆盖 MOS / Maque / Ucore / XV6 / NPUcore</p>
        </div>
      </a>

      <a class="card" href="/resources/courses/compiler/">
        <div class="thumb">
          <div class="thumb-inner thumb-compiler" />
        </div>
        <div class="content">
          <h3>编译原理</h3>
          <p class="meta">把代码变成机器指令 · 实现编译器后端，生成 LoongArch 指令</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  max-width: 1120px;
  margin: 0 auto 72px;
  padding: 0 24px;
}

.resources-header {
  text-align: center;
}

.resources-header h2 {
  font-size: 1.9rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.5rem;
}

.resources-subtitle {
  font-size: 0.98rem;
  color: #6b7280;
  margin-bottom: 1.75rem;
}

.cards-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 0;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(15, 23, 42, 0.06);
}

.card:hover {
  box-shadow: 0 22px 56px rgba(15, 23, 42, 0.12);
  transform: translateY(-2px);
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.thumb {
  padding: 12px 12px 0;
}

.thumb-inner {
  border-radius: 0;
  height: 140px;
  background-size: cover;
  background-position: center;
}

/* 四张图用抽象几何渐变，留白边，风格类似你发的截图 */
.thumb-intro {
  background: linear-gradient(135deg, #60a5fa, #22c55e);
}
.thumb-arch {
  background: linear-gradient(135deg, #2563eb, #a855f7);
}
.thumb-os {
  background: linear-gradient(135deg, #0ea5e9, #10b981);
}
.thumb-compiler {
  background: linear-gradient(135deg, #f59e0b, #3b82f6);
}

.content {
  padding: 12px 12px 14px; /* 与上方图片左右对齐，留统一内边距 */
}

.content h3 {
  font-size: 1.02rem;
  font-weight: 800;
  color: #111827;
  margin: 0 0 10px;
}

.meta {
  font-size: 0.9rem;
  color: #374151;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .cards-row {
    grid-template-columns: 1fr;
  }
}

/* 去掉首页内容顶部默认的那条分割线 */
:global(.VPDoc .content) {
  border-top: none;
}
</style>

