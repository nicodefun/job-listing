<template>
  <header class="header-bg">
    <img src="./assets/images/bg-header-desktop.svg" alt="bg-header" />
  </header>
  <filter-bar :languages="filteredLanguages" @clear="handleClear"></filter-bar>
  <main>
    <list-item
      :filteredJobs="filteredJobs"
      @handleFilter="handleFilter"
    ></list-item>
  </main>
</template>

<script>
import data from "./assets/data.json";
import FilterBar from "./components/FilterBar.vue";
import ListItem from "./components/ListItem.vue";

export default {
  name: "App",
  components: {
    FilterBar,
    ListItem,
  },
  data() {
    return {
      data: data,
      isFiltered: false,
      filteredValue: [],
      filteredLanguages: [],
    };
  },
  computed: {
    filteredJobs: function () {
      let newJobs = this.data;
      console.log(newJobs);
      newJobs = newJobs.filter((job) => {
        if (this.filteredLanguages.length > 0) {
          if (
            !this.filteredLanguages.every((item) =>
              job.languages.includes(item)
            )
          ) {
            return false;
          }
        }
        return true;
      });
      return newJobs;
    },
  },
  methods: {
    handleFilter(key, value) {
      if (key === "languages") {
        if (!this.filteredLanguages.includes(value)) {
          this.filteredLanguages.push(value);
        }
        // console.log(this.filteredLanguages);
      }
    },
    handleClear(key, value) {
      if (key === "language") {
        // console.log(value);
        this.filteredLanguages = this.filteredLanguages.filter(
          (language) => {
          return language !== value;
        });
      }
      if (key === "all") {
        this.filteredLanguages = [];
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100vh;
  background-color: #f0fafa;
}
#app {
  font-family: "Barlow Semi Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
main {
  margin-top: 3rem;
  width: 80%;
}
.header-bg {
  width: 100vw;
  height: 10vh;
  background-color: #5ca5a4;
}
.header-bg img {
  width: 100vw;
  height: 10vh;
  object-fit: cover;
}
</style>
