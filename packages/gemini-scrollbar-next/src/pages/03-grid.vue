<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'
import { GeminiScrollbar } from '~/index'

const heroScrollbar = shallowRef<GeminiScrollbar>()
const gridScrollbar = shallowRef<GeminiScrollbar>()

onMounted(() => {
  heroScrollbar.value = new GeminiScrollbar({
    element: document.querySelector('.hero .content'),
  })

  gridScrollbar.value = new GeminiScrollbar({
    element: document.querySelector('.grid'),
  })

  heroScrollbar.value.create()
  gridScrollbar.value.create()
})

function onClick() {
  document.body.classList.toggle('collapsed')
  heroScrollbar.value?.update()
  gridScrollbar.value?.update()
}
</script>

<template>
  <div>
    <header>
      <div class="wrapper -clearfix">
        <div class="col -clearfix">
          <div class="row-6">
            <p>ABC</p>
          </div>
          <div class="row-6 -text-right">
            <p>a a a</p>
          </div>
        </div>
      </div>
    </header>

    <section class="hero">
      <div class="content">
        <div class="col -clearfix">
          <div class="row-3">
            <div class="fake-image" />
          </div>
          <div class="row-3">
            <div class="fake-image" />
          </div>
          <div class="row-3">
            <div class="fake-image" />
          </div>
          <div class="row-3">
            <div class="fake-image" />
          </div>
          <div class="col -clearfix">
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
          </div>
          <div class="col -clearfix">
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
          </div>
          <div class="col -clearfix">
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
          </div>
          <div class="col -clearfix">
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
          </div>
          <div class="col -clearfix">
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
            <div class="row-3">
              <div class="fake-image" />
            </div>
          </div>
        </div>
      </div>
      <div class="collapse -text-center" @click="onClick">
        .
      </div>
    </section>

    <section class="grid">
      <div class="col -clearfix">
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
      </div>
      <div class="col -clearfix">
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
      </div>
      <div class="col -clearfix">
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
      </div>
      <div class="col -clearfix">
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
      </div>
      <div class="col -clearfix">
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
      </div>
      <div class="col -clearfix">
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
      </div>
      <div class="col -clearfix">
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
        <div class="row-3">
          <div class="fake-image" />
        </div>
      </div>
    </section>

    <footer>
      <div class="wrapper -clearfix">
        <div class="col -clearfix">
          <div class="row-6">
            <p>a b c</p>
          </div>
          <div class="row-6 -text-right">
            <p>a b c</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
[class^='row'] {
  float: left;
}
.row-3 {
  width: 25%;
}
.row-4 {
  width: 33.33333333333333%;
}
.row-6 {
  width: 50%;
}
.row-12 {
  width: 100%;
}

.-left {
  float: left;
}
.-right {
  float: right;
}
.-clearfix::after {
  content: '';
  display: table;
  clear: both;
}

.-text-center {
  text-align: center;
}
.-text-right {
  text-align: right;
}

.fake-image {
  position: relative;
  min-height: 20vw;
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}

.fake-image::after {
  content: '.';
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.16);
}

/* layout for the example */
header {
  padding: 1rem;
  height: 45px;
  border-bottom: 1px solid #ccc;
}

footer {
  padding: 0.5rem 1em 0;
  height: 30px;
  border-top: 1px solid #ccc;
  background-color: #333;
}

.hero {
  position: relative;
  height: 50vh;
  background-image: linear-gradient(-90deg, #ca9eff, #9efff4);
}

/* will apply scrollbar to this element */
.hero .content {
  height: 100%;
  overflow: auto;
}

.hero .collapse {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  background-color: #333;
  cursor: pointer;
  z-index: 2;
}

/* will apply scrollbar to this element */
.grid {
  height: calc(50vh - 45px - 30px);
  overflow: auto;
}

.collapsed .hero {
  height: 25vh;
}

.collapsed .grid {
  height: calc(75vh - 45px - 30px);
}

/* gemini-scrollbar override styles */
.gm-scrollbar .thumb {
  border-radius: 4px;
}

.gm-scrollbar.-vertical {
  width: 8px;
}

.hero .gm-scrollbar .thumb {
  background-color: rgba(58, 255, 244, 0.5);
}
.hero .gm-scrollbar .thumb:hover,
.hero .gm-scrollbar .thumb:active {
  background-color: rgba(58, 255, 244, 0.7);
}

.grid .gm-scrollbar .thumb {
  background-color: rgba(111, 87, 140, 0.4);
}
.grid .gm-scrollbar .thumb:hover,
.grid .gm-scrollbar .thumb:active {
  background-color: rgba(111, 87, 140, 0.6);
}
</style>
