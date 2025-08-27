<template>
  <div id="container">
    <div id="sticky" v-sticky="{ topOffset: 50, side: 'top' }" style="height: 200px;">vSticky指令</div>
  </div>
</template>
<script>
export default ({
  name: 'basic',
})
</script>