export default {
  methods: {
    $notification(message, type = 'info') {
      this.$store.dispatch("showNotification", {
        message, type
      });
    },
  }
};
