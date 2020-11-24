<template>
  <div class="text-center">
    <v-snackbar :value="notification.show" top app content-class="white--text" :color="color">
      {{ notification.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          fab
          small
          light
          v-bind="attrs"
          @click="hide"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  methods: {
    hide() {
      this.$store.dispatch('hideNotification');
    }
  },
  computed:{
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    color() {
      let type = this.notification.type;
      if (type === 'success') return 'primary';
      else if (type === 'error') return 'ternary';
      else if (type === 'warning') return 'orange darken-2';
      else return 'secondary'
    },
    notification() {
      return this.$store.getters.notification;
    }
  },
}
</script>