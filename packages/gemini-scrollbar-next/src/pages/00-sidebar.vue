<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { GeminiScrollbar } from '~/index'

const sidebarScrollbar = useTemplateRef<HTMLDivElement>('sidebar-scrollbar')
const mainScrollbar = useTemplateRef<HTMLDivElement>('main-scrollbar')

onMounted(() => {
  const sidebar = new GeminiScrollbar({
    element: sidebarScrollbar.value,
    onResize() {
      console.log('sidebar resized')
    },
  }).create()

  const main = new GeminiScrollbar({
    element: mainScrollbar.value,
    onResize() {
      console.log('main resized')
    },
  }).create()
  console.log(sidebar, main)
})
</script>

<template>
  <div>
    <div class="main">
      <div ref="main-scrollbar" class="main-scrollbar">
        <div class="hero">
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
        <div class="content">
          <p class="description-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore reprehenderit harum corrupti. Quibusdam nulla, dicta cupiditate reprehenderit, ullam in beatae, qui aperiam natus repellat dolor omnis ea amet modi autem.
          </p>
          <div class="col">
            <div class="row">
              <div class="fake-image" />
            </div>
            <div class="row">
              <div class="fake-image" />
            </div>
            <div class="row">
              <div class="fake-image" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <aside>
      <header>
        <div class="logo">
          <h1>Hi</h1>
        </div>
      </header>
      <div ref="sidebar-scrollbar" class="sidebar-scrollbar">
        <div class="sidebar-content">
          <ul>
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
            <li class="fake-image" />
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<style lang="css" scoped>
.fake-image {
  position: relative;
  padding-top: 9em;
  margin-bottom: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.fake-image::after {
  content: '.';
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #ccc;
}

/* sidebar */
aside {
  position: absolute;
  top: 0;
  left: 0;
  width: 16rem;
  height: 100vh;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
}

aside header {
  height: 4rem;
  background-color: #ca9eff;
}

.logo {
  padding: 1.2rem 2rem 0;
}

/* sidebar scrollbar wrapper */
.sidebar-scrollbar {
  position: relative;
  height: calc(100vh - 4rem);
  overflow: auto;
}

.sidebar-content {
  padding: 1.5rem 1.5rem 0.5rem;
}

/* main content */
.main {
  margin-left: 16rem;
  height: 100vh;
}

/* main scrollbar wrapper */
.main-scrollbar {
  height: 100%;
  overflow: auto;
}

.main .hero {
  padding: 14rem 4rem;
  background-image: linear-gradient(-90deg, #ca9eff, #9efff4);
}

.main .content {
  padding: 4rem;
}

.main .fake-image {
  padding-top: 24em;
}

.description-text {
  margin-bottom: 2em;
}

/* gemini-scrollbar override styles */
.gm-scrollbar {
  border-radius: 4px;
}

.gm-scrollbar.-vertical {
  width: 8px;
}

.gm-scrollbar .thumb {
  background-color: rgba(111, 87, 140, 0.4);
}
.gm-scrollbar .thumb:hover,
.gm-scrollbar .thumb:active {
  background-color: rgba(111, 87, 140, 0.6);
}
</style>
