<template>
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="page-main__title">Фильмы</h1>
      <filters v-if=!loading v-on:changeSort="sortFilms"/>
    </div>
    <filmsList v-bind:films=sortedFilms />
    <loader v-if=loading />
  </main>
</template>

<script>
import filters from '../components/filters.vue'
import filmsList from '../components/films.vue'
import loader from '../components/loader.vue'

export default {
  data () {
    return {
      films: [],
      loading: true,
      sortedFilms: []
    }
  },
  components: {
    filters,
    filmsList,
    loader
  },
  mounted () {
    this.axios.get('https://floating-sierra-20135.herokuapp.com/api/movies')
      .then(response => {
        this.films = response.data.data
        this.sortedFilms = response.data.data
        this.loading = false
      })
  },
  methods: {
    sortFilms (sort) {
      if (sort === 'byYear') {
        this.sortedFilms = this.films.slice().sort((a, b) => {
          if (a.year > b.year) return 1
          if (a.year === b.year) return 0
          if (a.year < b.year) return -1
        })
      }

      if (sort === 'byName') {
        this.sortedFilms = this.films.slice().sort((a, b) => {
          if (a.title > b.title) return 1
          if (a.title === b.title) return 0
          if (a.title < b.title) return -1
        })
      }

      if (sort === 'none') {
        this.sortedFilms = this.films
      }

      return this.sortedFilms
    }
  }
}
</script>

<style lang="scss">
  @import "/../assets/sass/blocks/page-main.scss";
</style>
