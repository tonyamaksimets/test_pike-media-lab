<template>
  <section class="filters">
    <h2 class="visually-hidden">Фильтры</h2>

    <ul class="filters__list">
      <li class="filters__item" v-on:click="$emit('changeSort', sort)">
        <button class="filters__button" v-bind:class="{'filters__button--active': sort === 'byName'}" type="button" v-on:click ="sort = (sort !== 'byName')?'byName':'none'">Отсортировать по названию</button>
      </li>
      <li class="filters__item" v-on:click="$emit('changeSort', sort)">
        <button class="filters__button" v-bind:class="{'filters__button--active': sort === 'byYear'}" type="button" v-on:click ="sort = (sort !== 'byYear')?'byYear':'none'">Отсортировать по году</button>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  data () {
    return {
      sort: 'none'
    }
  },
  components: {}
}
</script>

<style lang="scss">
  @import "/../assets/sass/blocks/filters.scss";
</style>
