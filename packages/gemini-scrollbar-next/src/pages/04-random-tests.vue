<script setup lang="ts">
import { onMounted } from 'vue'
import { GeminiScrollbar } from '~/index'

onMounted(() => {
  const ex0 = new GeminiScrollbar({
    element: document.querySelector('#example-0'),
  }).create()

  const ex1 = new GeminiScrollbar({
    element: document.querySelector('#example-1'),
  }).create()

  const ex2 = new GeminiScrollbar({
    element: document.querySelector('#example-2'),
    autoshow: true,
  }).create()

  const ex3 = new GeminiScrollbar({
    element: document.querySelector('#example-3'),
  }).create()
  document.querySelector('#example-3 img')!.addEventListener('load', () => {
    ex3.update()
  })

  const ex4 = new GeminiScrollbar({
    element: document.querySelector('#example-4'),
  }).create()

  const ex5 = new GeminiScrollbar({
    element: document.querySelector('#example-5'),
    horizontal: true,
  }).create()

  const ex6 = new GeminiScrollbar({
    element: document.querySelector('#example-6'),
  }).create()

  const ex7 = new GeminiScrollbar({
    element: document.querySelector('#example-7'),
  }).create()
  console.log(ex0, ex1, ex2, ex3, ex4, ex5, ex6, ex7)
})
</script>

<template>
  <div>
    <div id="example-0" class="inline" />

    <div id="example-1" class="inline">
      <div class="example-content">
        <header><h1>#1 Vertical Scrollbar</h1></header>
        <section>
          <h2>Subtitle</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
        </section>
      </div>
    </div>

    <div id="example-2" class="inline">
      <div class="example-content">
        <header><h1>#2 Vertical Scrollbar</h1></header>
        <section>
          <h2>(with more content)</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis totam nobis iste accusamus voluptas! Maiores tempore recusandae pariatur nulla consequuntur inventore accusantium molestias? Distinctio nemo culpa sapiente obcaecati officiis.</p>
        </section>
      </div>
    </div>

    <div id="example-3" class="inline">
      <div class="example-content">
        <header><h1>#3 Vertical Scrollbar</h1></header>
        <section>
          <h2>(update method)</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <img src="./assets/images/huge-reddit-visual-exploration.png" alt="">
          <img src="./assets/images/huge-reddit-visual-exploration.png" alt="">
          <img src="./assets/images/huge-reddit-visual-exploration.png" alt="">
          <img src="./assets/images/huge-reddit-visual-exploration.png" alt="">
          <img src="./assets/images/huge-reddit-visual-exploration.png" alt="">
        </section>
      </div>
    </div>

    <div id="example-4" class="inline">
      <div class="example-content">
        <header><h1>#4 Scrollbars not required</h1></header>
      </div>
    </div>

    <div id="example-5" class="inline">
      <div class="example-content">
        <header><h1>#5 Horizontal Scrollbar</h1></header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
      </div>
    </div>

    <div id="example-6" class="inline">
      <div class="example-content">
        <header><h1>#6 Horizontal and Vertical Scrollbar</h1></header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
      </div>
    </div>

    <div id="example-7" class="inline">
      <div class="example-content">
        <header><h1>#7 No width or height defined</h1></header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam consequuntur in aperiam recusandae tenetur, ratione enim magni quis tempora corporis iste facere sequi similique dolor inventore aut iusto! Saepe.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .hide {
  display: none;
}
.example-content {
  padding: 1em;
  border: 0px solid red;
}

.inline {
  display: inline-block;
  vertical-align: top;
  border: 1px solid;
  overflow: auto;
}

h1 {
  margin: 0;
}

/** ---------- 0 ---------- **/
#example-0 {
  width: 170px;
  height: 150px;
}
#example-0:before {
  content: 'div with no content';
  color: grey;
}

/** ---------- 1 ---------- **/
#example-1 {
  width: 170px;
  height: 150px;
}

#example-1 .gm-scroll-view {
}

/** ---------- 2 ---------- **/
#example-2 {
  width: 370px;
  height: 200px;
}

/** ---------- 3 ---------- **/
#example-3 {
  width: 170px;
  height: 200px;
}
#example-3 img {
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  margin: 1em 0 0 0;
}
#example-3 img:first-of-type {
  margin-top: 0;
}
#example-3 .gm-scrollbar.-vertical .thumb {
  background-color: hsl(204, 100%, 50%);
}
#example-3 .gm-scrollbar.-vertical .thumb:hover {
  background-color: hsl(204, 100%, 60%);
}

/** ---------- 4 ---------- **/
#example-4 {
  width: 170px;
  height: 200px;
}

/** ---------- 5 ---------- **/
#example-5 {
  width: 200px;
  height: 120px;
}
#example-5 .example-content {
  width: 1200px;
}

/** ---------- 6 ---------- **/
#example-6 {
  width: 25%;
  height: 30%;
}

#example-6 .example-content {
  width: 1000px;
}
</style>
