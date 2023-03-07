<template>
    <div class="mx-auto">
        <TheNavBarApp>
          <TableUser :data="guests" />
        </TheNavBarApp>
    </div>
</template>

<script>
import TableUser from '~/components/jong-dai/TableUser.vue';
import TheNavBarApp from '../../components/jong-dai/TheNavBarApp.vue';
export default {
    head: {
    title: 'Jong Dai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My Jong Dai App'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: {
    TheNavBarApp,
    TableUser
  },
  data(){
    return {
      guests: require('assets/data/guests.json')
    }
  }
}
</script>
<style>
body {
  background: #F1F1F1;
}
</style>