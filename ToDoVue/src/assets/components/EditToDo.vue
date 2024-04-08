<template>
  <form @submit.prevent="createNewObject">
    <p>Edit to do</p>
    <input v-focus type="text" v-model="input" placeholder="input..." />
    <input type="checkbox" v-model="isChecked" />
    <button @click="edit">btn</button>
  </form>
</template>

<script>
export default {
  name: "EditToDo",
  props: {
    toDoes: {
      type: Array,
      required: true,
    },
    checking: { type: Number },
  },
  data() {
    return {
      input: "",
      isChecked: false,
    };
  },
  mounted() {
    this.toDoes.forEach((em) => {
      if (em.id == this.checking) {
        this.input = em.title;
        this.isChecked = em.isChecked;
      }
    });
  },
  methods: {
    edit() {
      const obj = {
        id: this.checking,
        isChecked: this.isChecked,
        title: this.input,
      };
      this.$emit("EditData", obj);
    },
  },
};
</script>

<style scoped>
form input {
  padding: 5px;
}

form {
  display: flex;
  flex-direction: column;
}

form button {
  padding: 5px;
}
</style>
