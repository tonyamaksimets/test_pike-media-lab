<template>
  <section class="films">
    <h2 class="visually-hidden">Список фильмов</h2>
    <ul class="films__list">
      <li class="films__item" v-for="film of films" :key="film.id">
        <filmCard v-bind:film="film" />
      </li>
    </ul>
  </section>
</template>

<script>
import filmCard from './film-card.vue'

export default {
  props: ['films'],
  components: { filmCard }
}

</script>

<style lang="scss">
  @import "/../assets/sass/blocks/films.scss";
</style>
