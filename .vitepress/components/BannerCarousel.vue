<template>
  <section class="carousel-container">
    <div class="carousel-slides">
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="carousel-slide"
        :class="{ active: index === currentIndex }"
      >
        <div class="carousel-inner">
          <div class="carousel-content">
            <h1 v-html="banner.title" />
            <p v-if="banner.subtitle" class="subtitle" v-html="banner.subtitle" />
            <div v-if="banner.buttons?.length" class="carousel-buttons">
              <a
                v-for="btn in banner.buttons"
                :key="btn.text"
                :href="btn.link"
                :class="btn.theme === 'brand' ? 'btn-primary' : 'btn-secondary'"
              >
                {{ btn.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-dots">
      <span
        v-for="(_, index) in banners"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      />
    </div>

    <button class="carousel-prev" @click="prev">❮</button>
    <button class="carousel-next" @click="next">❯</button>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const banners = [
  {
    title: '一站式计算机系统核心课程资源库',
    subtitle: '基于 LoongArch 架构，统一·开源·高质量',
    buttons: [
      { text: '进入课程资源', link: '/resources/', theme: 'brand' },
      { text: '问答与讨论', link: '/qa/', theme: 'alt' }
    ]
  },
  {
    title: '完整学习路径 + 即用型教学包',
    subtitle:
      '学生：完整学习路径，从理论视频到实战习题<br/>教师：即用型教学包，降低备课负担',
    buttons: [
      { text: '面向学生', link: '/resources/', theme: 'brand' },
      { text: '面向教师', link: '/downloads/tech-docs/', theme: 'alt' }
    ]
  },
  {
    title: '加强 LoongArch 高等教育资源建设',
    subtitle: '支撑计算产业自主生态',
    buttons: [
      { text: '问题反馈', link: '/feedback/', theme: 'brand' }
    ]
  }
]

const currentIndex = ref(0)
let timer

const show = (index) => {
  const len = banners.length
  if (!len) return
  let next = index
  if (next < 0) next = len - 1
  if (next >= len) next = 0
  currentIndex.value = next
}

const next = () => show(currentIndex.value + 1)
const prev = () => show(currentIndex.value - 1)
const goTo = (index) => show(index)

onMounted(() => {
  timer = setInterval(next, 5000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100vw; /* 宽度铺满整个屏幕 */
  left: 50%;
  right: 50%;
  margin-left: -50vw; /* 从 VitePress 容器中“突破出来” */
  margin-right: -50vw;
  /* 首页首屏 Banner 高度（适当降低） */
  height: 420px;
  min-height: 360px;
  overflow: hidden;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  /* 整体偏白的底色，避免与页面突兀分离 */
  background: linear-gradient(180deg, #f7fafc 0%, #ffffff 40%, #ffffff 100%);
}

.carousel-slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
  display: flex;
  align-items: stretch;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-inner {
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  border-radius: 0;
  padding: 40px 80px;
  position: relative;
  overflow: hidden;
  background: transparent;
}

/* 三个 banner 使用不同、但都很浅的背景氛围，类似官网 Hero 图 */
.carousel-slide:nth-child(1) .carousel-inner {
  background: radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.08), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.08), transparent 65%),
    #ffffff;
}

.carousel-slide:nth-child(2) .carousel-inner {
  background: radial-gradient(circle at 10% 10%, rgba(37, 99, 235, 0.06), transparent 55%),
    radial-gradient(circle at 85% 0%, rgba(251, 191, 36, 0.1), transparent 60%),
    #ffffff;
}

.carousel-slide:nth-child(3) .carousel-inner {
  background: radial-gradient(circle at 0% 20%, rgba(129, 140, 248, 0.08), transparent 60%),
    radial-gradient(circle at 75% 10%, rgba(45, 212, 191, 0.08), transparent 60%),
    #ffffff;
}

.carousel-content {
  text-align: left;
  color: #1f2937;
  max-width: 620px; /* 稍微放宽，方便大标题一行显示 */
}

.carousel-content h1 {
  font-size: 2.4rem; /* 稍微放大一丢丢，主标题更突出 */
  margin-bottom: 1rem;
  line-height: 1.15;
  font-weight: 800;
}

.carousel-content .subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #4b5563;
  opacity: 0.8; /* 副标题更浅一点 */
}

.carousel-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 0.5rem;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #ffffff;
  color: #2563eb;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.btn-secondary {
  background: rgba(37, 99, 235, 0.06);
  color: #1f2937;
  border: 1px solid rgba(37, 99, 235, 0.16);
  backdrop-filter: blur(4px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.28);
  transform: translateY(-1px);
}

.carousel-dots {
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 26px;
  height: 4px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.25);
  cursor: pointer;
  transition: all 0.2s ease;
}

.dot.active {
  background: #2563eb;
  transform: scaleX(1.2);
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(15, 23, 42, 0.06);
  color: #1f2937;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.carousel-prev:hover,
.carousel-next:hover {
  background: rgba(37, 99, 235, 0.18);
}

.carousel-prev {
  left: 18px;
}

.carousel-next {
  right: 18px;
}

/* 删除右侧几何球后，移动端不再需要隐藏该区域 */

@media (max-width: 768px) {
  .carousel-container {
    height: 420px;
  }

  .carousel-inner {
    flex-direction: column;
    justify-content: center;
    gap: 24px;
  }

  .carousel-content h1 {
    font-size: 2rem;
  }

  .carousel-content .subtitle {
    font-size: 1.05rem;
  }

  .carousel-buttons {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>