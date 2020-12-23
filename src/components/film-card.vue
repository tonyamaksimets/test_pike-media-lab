<template>
  <article class="film">
    <div class="film__poster-block">
      <img class="film__poster" v-bind:src=film.poster width="112" height="168" v-bind:alt=film.title>
    </div>
    <div class="film__text-block">
      <h3 class="film__name">
        <router-link class="film__link" v-bind:to="'/' + film.id" v-html="film.title"></router-link>
      </h3>
      <p class="film__duration" v-if="film.collapse && film.collapse.duration">{{film.collapse.duration[0]}}</p>
      <p class="film__main-info">
        <span class="film__year">{{film.year}}</span> , <span class="film__genre" v-if=film.genres>{{film.genres.join(', ')}}</span>
      </p>
      <p class="film__director" v-if=film.directors>
        Режиссёр: <span class="film__director-name">{{film.directors.join(', ')}}</span>
      </p>
      <p class="film__actors" v-if=film.actors>
        Актёры:
        <span class="film__actors-names">{{film.actors.join(', ')}}</span>
      </p>
      <p class="film__description" v-if=film.description>{{film.description}}</p>
    </div>
  </article>
</template>

<script>

export default {
  props: ['film'],
  components: {}
}
</script>

<style lang="scss">
  @import "/../assets/sass/blocks/film.scss";
</style>
