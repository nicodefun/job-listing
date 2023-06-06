<template>
  <list-div class="main" 
  v-for="item in filteredJobs" 
  :key="item.id">
    <img :src="srcFormed(item)" :alt="item.company" />
    <div class="list-container">
      <div class="list-top">
        <h3>{{ item.company }}</h3>
        <span class="new" v-if="item.new">NEW!</span>
        <span class="featured" v-if="item.featured">FEATURED</span>
      </div>
      <div class="list-middle">
        <h2>{{ item.position }}</h2>
        <span class="flex-1"></span>
        <ul v-for="i in item.languages" :key="i">
          <li 
          @click="$emit('handleFilter', 'languages', i)" 
          >{{ i }}</li>
        </ul>
      </div>
      <div class="list-bottom">
        <span class="postedAt">{{ item.postedAt }}</span>
        <span class="dot"></span>
        <span class="contract">{{ item.contract }}</span>
        <span class="dot"></span>
        <span class="location">{{ item.location }}</span>
      </div>
    </div>
  </list-div>
</template>
<script>

export default {
  emits:['handleFilter'],
  props: ['filteredJobs'],
  methods: {
    srcFormed(item) {
      return require(`../assets${item.logo}`);
    },
  }
};
</script>
<style scoped>
.main {
  width: 100%;
  margin-top: 1.5rem;
}
.list-container {
  width: 90%;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
h3 {
  color: #60a3a4;
  margin-right: 1rem;
  font-size: 0.8rem;
}

.list-top,
.list-middle,
.list-bottom {
  display: flex;
  flex-direction: row;
}
.list-top {
  align-items: center;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}
li {
  background-color: #f0fafa;
  color: #8dc4c5;
  font-weight: 700;
  padding: 0.5rem;
  margin-right: 1rem;
}
.flex-1 {
  flex: 1 1 0;
}
.new,
.featured {
  border-radius: 1rem;
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  text-align: center;
  margin-right: 0.5rem;
}
.new {
  background-color: #60a3a4;
}
.featured {
  background-color: #2b3937;
}
h2 {
  font-size: 1rem;
  letter-spacing: 0.05rem;
}
.list-bottom {
  color: rgb(146, 146, 146);
  font-size: 0.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.list-middle {
  align-items: center;
}
.dot {
  width: 0.1rem;
  height: 0.1rem;
  background-color: rgb(190, 187, 187);
  border-radius: 999px;
  margin: 0 0.5rem;
}
</style>
