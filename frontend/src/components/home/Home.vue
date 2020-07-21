<template>
  <v-container>
    <v-row justify="center">
      <v-col
        v-for="item in items"
        :key="item"
        cols="auto"
      >
        <v-card
          height="250"
          width="250"
        >
          <h2 style="text-align: center;">{{ item.title }}</h2>
          <router-link :to="item.to">
            <img class="img" :src="item.img">
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { to: '/', img: require('@/assets/undraw_welcome_cats_thqn.svg'), title: 'Bem Vindo!', subtitle: 'Jan 9, 2014' },
        { to: '/servicos', img: require('@/assets/undraw_Cautious_dog_q83f.svg'), title: 'Servicos', subtitle: 'Jan 17, 2014' },
        { to: '/passeios', img: require('@/assets/undraw_dog_walking_0jpt.svg'), title: 'Passeios', subtitle: 'Jan 28, 2014' },
        { to: '/perdidos', img: require('@/assets/undraw_good_doggy_4wfq.svg'), title: 'Perdidos', subtitle: 'Jan 9, 2014' },
        { to: '/bem-estar', img: require('@/assets/undraw_friends_r511.svg'), title: 'Bem Estar', subtitle: 'Jan 17, 2014' },
        { to: '/outros-pets', img: require('@/assets/undraw_fish_bowl_uu88.svg'), title: 'Outros Pets', subtitle: 'Jan 28, 2014' },
        { to: '/adote', img: require('@/assets/undraw_pet_adoption_2qkw.svg'), title: 'Adote', subtitle: 'Jan 9, 2014' },
        { to: '/blog/categories/14/articles', img: require('@/assets/undraw_settings_tab_mgiw.svg'), title: 'Nosso Blog.', subtitle: 'Jan 9, 2014' },
      ],
    }
  }
}
</script>

<style>
  .img {
      max-width: 100%;
      max-height: 100%;
      display: table-cell;
      height: 200px;
      vertical-align: middle;
  }
</style>