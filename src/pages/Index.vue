<template>
  <div class="row justify-center">
    <div class="col-8">
      <div class="row">
        <div class="col-md-6 col-xs-12 q-pa-md q-gutter-sm">
          <q-btn class="full-width q-py-md" color="white" text-color="black" label="Order" to="/order"/>
        </div>
        <div class="col-md-6 col-xs-12 q-pa-md q-gutter-sm">
          <q-btn class="full-width q-py-md" color="white" text-color="black" label="Barang" to="/item/"/>
        </div>
        <div class="col-md-6 col-xs-12 q-pa-md q-gutter-sm">
          <q-btn class="full-width q-py-md" color="white" text-color="black" label="Customer" />
        </div>
        <div class="col-md-6 col-xs-12 q-pa-md q-gutter-sm">
          <q-btn class="full-width q-py-md" color="white" text-color="black" label="User Admin" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',

    
})
</script>
