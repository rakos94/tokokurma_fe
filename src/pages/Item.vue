<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <div class="col-8">
      <div class="q-py-md">
        <q-btn color="white" text-color="black" icon="arrow_back" class="q-mr-sm" @click="$router.back()"/>
        <q-btn color="primary" label="New Item" to="/item/add" />
      </div>
      <!-- <ListItem/> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ListItem from 'components/ListItem.vue'

export default defineComponent({
  name: 'ItemPage',

    
})
</script>
