---
title: FAQ
outline: deep
---

# 往年问题的 FAQ

本栏根据队伍回访与问卷调查，汇总参赛各队在赛事实践中遇到的实际问题。

<div class="faq-by-year">

<details>
<summary>2025 年</summary>

<div class="past-loongson-topics-page">


<div class="faq-q-block faq-q-block--with-body">
<p class="faq-q-link-line"><strong>问题 1：LSX / LASX 指令说明</strong>：<a id="faq-2025-q1" href="https://chipsandcheese.com/p/loongsons-lsx-and-lasx-vector-extensions" target="_blank" rel="noopener noreferrer">点击查阅说明</a></p>
<ul class="faq-q-body-list">
<li>LSX 提供名为 VR0–VR31 的 128 位向量寄存器；LASX 提供名为 XR0–XR31 的 256 位向量寄存器。在后端执行时，寄存器可被重命名到浮点寄存器堆中。</li>
<li>LSX 与 LASX 提供多种向量处理指令，包括向量加法、乘法、逻辑运算等；支持浮点元素（FP32 / FP64）或整数元素（8 / 16 / 32 / 64 位），并提供 128 位与 256 位的 load / store 指令。</li>
<li>除算术指令外，LASX 还包括置换、最小/最大值、绝对值，以及加载并广播（如 XVLDREPL）等指令。</li>
</ul>
</div>

<div class="faq-q-block faq-q-block--linkonly">
<p class="faq-q-link-line"><strong>问题 2：TLB 相关指令</strong>：<a id="faq-2025-q2" href="https://os-kernel-with-loong64-doc.readthedocs.io/en/latest/context/privilege_isa/tlb_insn.html#id1" target="_blank" rel="noopener noreferrer">点击查阅说明</a></p>
</div>

<div class="faq-q-block faq-q-block--linkonly">
<p class="faq-q-link-line"><strong>问题 3：页表遍历相关指令</strong>：<a id="faq-2025-q3" href="https://os-kernel-with-loong64-doc.readthedocs.io/en/latest/context/privilege_isa/tlb_insn.html#id1" target="_blank" rel="noopener noreferrer">点击查阅说明</a></p>
</div>

<div class="faq-q-block faq-q-block--linkonly">
<p class="faq-q-link-line"><strong>问题 4：DMW 映射窗口问题</strong>：<a id="faq-2025-q4" href="https://os-kernel-with-loong64-doc.readthedocs.io/en/latest/context/mmu/dmw.html" target="_blank" rel="noopener noreferrer">点击查阅说明</a></p>
</div>

<div class="faq-q-block faq-q-block--linkonly">
<p class="faq-q-link-line"><strong>问题 5：页表遍历与页表项相关</strong>：<a id="faq-2025-q5" href="https://os-kernel-with-loong64-doc.readthedocs.io/en/latest/context/mmu/tlb_struct.html" target="_blank" rel="noopener noreferrer">点击查阅说明</a></p>
</div>

<div class="faq-q-block faq-q-block--linkonly">
<p class="faq-q-link-line"><strong>问题 6：2K1000 开发板上非对齐访问的处理方式</strong>：<a id="faq-2025-q6" href="https://os-kernel-with-loong64-doc.readthedocs.io/en/latest/context/trap/trap_in_kernel.html#id11" target="_blank" rel="noopener noreferrer">点击查阅说明</a></p>
</div>

<div class="faq-q-block faq-q-block--linkonly">
<p class="faq-q-link-line"><strong>问题 7：平台模块与设备驱动</strong>：<a id="faq-2025-q7" href="https://os-kernel-with-loong64-doc.readthedocs.io/en/latest/context/platform/2k1000la.html#" target="_blank" rel="noopener noreferrer">点击查阅说明</a></p>
</div>

<div class="faq-q-block faq-q-block--linkonly">
<p class="faq-q-link-line"><strong>问题 8：仿真与调试</strong>：<a id="faq-2025-q8" href="https://os-kernel-with-loong64-doc.readthedocs.io/en/latest/context/debug/index.html" target="_blank" rel="noopener noreferrer">点击查阅说明</a></p>
</div>

</div>

</details>



</div>
