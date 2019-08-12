<template>
  <div class="todo">
    <div class="title">Taskwedwe </div>
    <div class="task-maker">
      <div class="task-type">
      </div>
      <div class="button"></div>
      <div class="checkbox"></div>
    </div>
    <AliveCheckbox></AliveCheckbox>
    <div class="list"></div>
  </div>
</template>

<script>
  import AliveCheckbox from '../components/neKidaem/aliveCheckbox'
  export default {
    name: 'Todo',
    components: {AliveCheckbox}
  }
</script>

<style scoped>

</style>