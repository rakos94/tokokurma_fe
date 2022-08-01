<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <div class="col-8">
      <div class="q-py-md">
        <q-btn color="white" text-color="black" icon="arrow_back" class="q-mr-sm" @click="$router.back()"/>
      </div>

      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="name"
          label="Item name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        
        <q-input
          filled
          v-model.number="price"
          label="Price"
          type="number"
          lazy-rules
          :rules="[ val => val && val > 0 || 'Please type something']"
        />
        
        <q-input
          filled
          v-model.number="stock"
          label="Stock"
          type="number"
          lazy-rules
          :rules="[ val => val && val > 0 || 'Please type something']"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="TEST" type="button" color="primary" @click="testNotif"/>
        </div>
      </q-form>

    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, reactive, readonly, watch } from 'vue';
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'ItemAddPage',
  
  setup(props) {
    const $q = useQuasar()
    const $store = useStore()
    const name = ref(null)
    const price = ref(null)
    const stock = ref(null)
    
    const notif = reactive($store.state.menu.notif)
    watch(notif,() => {
      // works for reactivity tracking
      $q.notify({
        message: notif.message,
        color: notif.color,
        position: 'top'
      })
    })
    function onSubmit () {
      $store.dispatch('menu/ItemAdd', {
        name: name.value,
        price: price.value,
        stock: stock.value
      })
    }
    
    function testNotif () {
      $store.commit('menu/setNotif', { message:"Sukses", sukses:true })
    }

    return { name, price, stock, onSubmit, notif, testNotif }
  },
})
</script>
