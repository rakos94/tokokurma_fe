<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Tokokurma
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="menuDrawer"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    caption: '',
    icon: 'home',
    link: '/'
  }
];

import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  

  setup () {
    const $store = useStore()
    const leftDrawerOpen = ref(false)

    const menuDrawer = computed({
      get: () => $store.state.menu.menuDrawer,
      set: val => {
        $store.commit('menu/updateDrawerState', val)
      }
    })

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      menuDrawer,
      toggleLeftDrawer () {
        $store.commit('menu/toggleMenuDrawer')
      }
    }
  }
})
</script>
