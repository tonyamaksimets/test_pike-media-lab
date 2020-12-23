<template>
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="page-main__title visually-hidden">{{film.title}}</h1>
      <router-link class="page-main__back-link" to="/">
        <svg class="page-main__icon" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.67 1.8701L9.9 0.100098L0 10.0001L9.9 19.9001L11.67 18.1301L3.54 10.0001L11.67 1.8701Z" fill="currentColor"/>
        </svg>
        <span>Назад к списку</span>
      </router-link>
    </div>
    <filmCard v-bind:film="film"/>
    <error v-if=errored />
    <loader v-if=loading />
  </main>
</template>

<script>
import filmCard from '../components/film-card.vue'
import error from '../components/error.vue'
import loader from '../components/loader.vue'

export default {
  data () {
    return {
      film: '',
      filmId: +document.location.pathname.slice(1),
      loading: true,
      errored: false
    }
  },
  components: {
    filmCard,
    error,
    loader
  },
  mounted () {
    this.axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${this.filmId}`)
      .then(response => {
        this.film = response.data.data
        this.loading = false
      })
      .catch(error => {
        this.errored = true
        console.log('Ошибка:', error)
      })
  }
}
</script>

<style lang="scss">
  @import "/../assets/sass/blocks/page-main.scss";
</style>
