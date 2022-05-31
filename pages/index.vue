<template>
  <div>
    <div v-if="testVar">
      <Test />
    </div>
  </div>
</template>

<script setup>
  const testVar = ref(undefined)

  setTimeout(() => {
    testVar.value = true
  }, 3000);
</script>
