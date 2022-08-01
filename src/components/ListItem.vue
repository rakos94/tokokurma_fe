<template>
  <q-card class="my-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">{{ lastOrder ? 'Last' : '' }} Order</div>
    </q-card-section>

    <q-separator />
    
    <q-card-section>
      
      <q-list bordered separator>
        <q-item class="text-weight-bold">
          <q-item-section class="col-2">
            Tanggal
          </q-item-section>
          <q-item-section>
            <q-item-label>Nama</q-item-label>
            <q-item-label caption>Barang - Jumlah</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label class="text-weight-bold">Total Harga</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-for="o in order" :key="o">
          <q-item-section class="col-2">
            {{o.updated_at}}
          </q-item-section>
          <q-item-section>
            <q-item-label>{{o.customer_name || '-'}}</q-item-label>
            <q-item-label caption>{{o.item_name}} - {{o.quantity}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label class="text-weight-bold">{{o.total_price}}</q-item-label>
          </q-item-section>
        </q-item>
  
      </q-list>

      <div class="row q-py-sm items-center">
        <div class="col ">
        <q-btn label="Back" :disable="orderPage == 1" @click="back"/>
        <q-btn label="Next" :disable="order.length < 5" @click="next"/>
        </div>
        <div class="col q-px-sm">
          <div class="row justify-end">
          <span class="">Halaman {{orderPage}}</span>
          </div>
        </div>
      </div>
    </q-card-section>

  </q-card>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(props) {
    const $store = useStore()
    const order = computed({
      get: () => $store.state.menu.order
    })
    const orderPage = computed({
      get: () => $store.state.menu.orderPage
    })
    
    function next () {
      $store.dispatch('menu/fetchOrder', { page: orderPage.value+1})
    }
    function back () {
      if (orderPage.value == 1) return
      $store.dispatch('menu/fetchOrder', { page: orderPage.value-1})
    }

    return { order, next, back, orderPage }
  },

  props: {
    lastOrder: Boolean,
    page: Number,
  },


  mounted(){
    const $store = useStore()
    if (this.orderPage == null) $store.commit('menu/updateOrderPage', 1)
    $store.dispatch('menu/fetchOrder', { page: this.orderPage})
  }

}
</script>