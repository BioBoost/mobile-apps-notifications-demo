<template>
  <div class="text-center">
    <v-snackbar v-model="show" top app content-class="white--text" :color="color" timeout="5000">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          fab
          small
          light
          v-bind="attrs"
          @click="show = false"
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
  data() {
    return {
      show: false,
      message: '',
      type: 'info'
    }
  },
  created () {
    // Substribe to state mutations
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'showNotification') {
        this.message = state.notification.message;
        this.type = state.notification.type;
        this.show = true;
      }
    })
  },
  computed:{
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    color() {
      if (this.type === 'success') return 'primary';
      else if (this.type === 'error') return 'ternary';
      else if (this.type === 'warning') return 'orange darken-2';
      else return 'secondary'
    }
  },
}
</script>