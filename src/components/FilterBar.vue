<template>
  <list-div v-if="hasFilters" class="filter-div">
    <ul v-for="i in languages" :key="i">
      <li @click="clickFilter">
        <p>{{ i }}</p>
        <button 
        @click="$emit('clear','language', i )"
        type="button">X</button>
      </li>
    </ul>
    <span class="flex-1"></span>
    <button class="clear"
    @click="$emit('clear','all' )">Clear</button>
  </list-div>
</template>
<script>
export default {
  props: ["languages"],
  emits:['clear'],
  //languages ---> array
  computed: {
    hasFilters() {
      return this.languages.length > 0;
    },
  },
};
</script>
<style scoped>
.filter-div {
  position: absolute;
  transform: translateX(-50%);
  top: 10vh;
  transform: translateY(-50%);
}
ul {
  display: flex;
  list-style: none;
}
.flex-1 {
  flex: 1 1 0;
}
li {
  border-radius: 0.2rem;
  background-color: #f1f5f6;
  display: flex;
  margin-right: 1rem;
  overflow: hidden;
  font-size: 0.7rem;
  font-weight: 700;
}
li p {
  padding: 0.2rem 0.5rem;
  color: #5ba4a5;
}
button {
  border: none;
  background-color: #5ba4a5;
  color: white;
  padding: 0rem 0.5rem;
  font-family: inherit;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #2d3737;
}
</style>
