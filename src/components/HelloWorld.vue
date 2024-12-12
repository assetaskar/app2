<script setup lang="ts">
import {useBaseStore} from "../store/base.ts";

defineProps<{ msg: string }>()

const countStore = useBaseStore()

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div>
      <button type="button" @click="countStore.increment">count is {{ countStore.count }}</button>
    </div>

    <br/>

    <div>
      <router-link :to="{name: 'About'}">About page</router-link>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
