<script setup lang="ts">
import { onMounted } from 'vue'
import { GeminiScrollbar } from '~/index'

onMounted(() => {
  /* EXAMPLE 1 */
  const Element1 = document.getElementById('example-1')!
  const Create1 = Element1.querySelector('[data-action="create"]')!
  const Destroy1 = Element1.querySelector('[data-action="destroy"]')!
  const EX1 = new GeminiScrollbar({
    element: Element1.querySelector('.content'),
    createElements: false,
  })
  Create1.addEventListener('click', () => {
    EX1.create()
  })
  Destroy1.addEventListener('click', () => {
    EX1.destroy()
  })

  /* EXAMPLE 2 */
  const Element2 = document.getElementById('example-2')!
  const Create2 = Element2.querySelector('[data-action="create"]')!
  const Destroy2 = Element2.querySelector('[data-action="destroy"]')!
  const EX2 = new GeminiScrollbar({
    element: Element2.querySelector('.content'),
    createElements: true,
  })
  Create2.addEventListener('click', () => {
    EX2.create()
  })
  Destroy2.addEventListener('click', () => {
    EX2.destroy()
  })
})
</script>

<template>
  <div>
    <h1>Create/Destroy methods test</h1>

    <hr>

    <h2>with option - createElements: false</h2>
    <div id="example-1">
      <div class="content">
        <div class="gm-scrollbar -vertical">
          <div class="thumb" />
        </div>
        <div class="gm-scrollbar -horizontal">
          <div class="thumb" />
        </div>
        <div class="gm-scroll-view">
          <div class="example-content">
            <h2>Subtitle</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          </div>
        </div>
      </div>
      <div class="actions">
        <button data-action="create">
          Create
        </button>
        <button data-action="destroy">
          Destroy
        </button>
      </div>
    </div>

    <hr>

    <h2>with option - createElements: true</h2>
    <div id="example-2">
      <div class="content">
        <div class="example-content">
          <h2>Subtitle</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
        </div>
      </div>
      <div class="actions">
        <button data-action="create">
          Create
        </button>
        <button data-action="destroy">
          Destroy
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.17rem;
}
h4 {
  font-size: 1rem;
}
h5 {
  font-size: 0.83rem;
}
h6 {
  font-size: 0.67rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 0.5em;
}

.example-content {
  padding: 1em;
}
.actions {
  padding: 1em 0;
}

/* EXAMPLE 1 - createElements: false */
#example-1 .content {
  position: relative;
  width: 500px;
  height: 200px;
  border: 1px solid #ccc;
  overflow-x: auto;
}
#example-1 .gm-scroll-view {
  /* prevent horizontal scrollbar take space when destroyed*/
  overflow-x: auto;
}
/* custom styles for example 1 */
#example-1 .thumb {
  background-color: #84b3fc;
}
#example-1 .thumb:hover,
#example-1 .thumb:active {
  background-color: #9dc2fd;
}

/* EXAMPLE 2 - createElements: true */
#example-2 .content {
  position: relative;
  width: 500px;
  height: 200px;
  border: 1px solid #ccc;
  overflow-x: auto;
}
/* custom styles for example 2 */
#example-2 .thumb {
  background-color: #cc9eed;
}
#example-2 .thumb:hover,
#example-2 .thumb:active {
  background-color: #d4adf0;
}
</style>
