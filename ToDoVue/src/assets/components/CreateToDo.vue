<template>
  <form @submit.prevent="createNewObject">
    <input v-focus type="text" v-model="input" placeholder="input..." />
    <button>btn</button>
  </form>
</template>

<script>
export default {
  name: "CreateToDo",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    createNewObject() {
      const obj = {
        id: Date.now(),
        title: this.input,
        isChecked: false,
      };
      localStorage.setItem("new", JSON.stringify(obj));
      this.$emit("saveData", obj);
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
