<template>
  <div>
    <div class="container">

      <div class="df header">
        <h1>{{ title }}</h1>
        <button class="add" @click="changeModalVuew">Add</button>
      </div>
      <Modal v-if="modalvue" @modalexit="modalexit">
        <CreateToDo @saveData="saveData"></CreateToDo>
      </Modal>

      <Modal v-if="editmodalvue" @modalexit="modalexit">
        <EditToDo :toDoes="toDoes" :checking="checking" @EditData="EditData"></EditToDo>
      </Modal>

      <div v-if="toDoes.length">
        <List :toDoes="toDoes" @removeData="removeData" @editData="editData"></List>
      </div>
      <div v-else>ПОСТОВ НЕТ!</div>

    </div>
  </div>
</template>

<script>
import List from "./assets/components/List.vue";
import CreateToDo from "./assets/components/CreateToDo.vue";
import Modal from "./assets/UI/Modal.vue";
import EditToDo from "./assets/components/EditToDo.vue";


export default {
  data() {
    return {
      date: "",
      current: "",
      title: "ToDo List",
      modalvue: false,
      editmodalvue: false,
      checking: 0,
      i: 0,
      toDoes: [
        { id: 1, title: "To-do 1", isChecked: true },
        { id: 2, title: "To-do 2", isChecked: false },
        { id: 3, title: "To-do 3", isChecked: true },
      ],
    };
  },

  components: {
    List,
    CreateToDo,
    Modal,
    EditToDo,
  },
  methods: {
    saveData(obj) {
      // this.toDoes.push(obj)
      this.toDoes.push(JSON.parse(localStorage.getItem("new")));
      this.modalvue = false;
    },
    editData(data) {
      this.checking = data;
      this.editmodalvue = true;
    },
    EditData(obj) {
      this.editmodalvue = false;
      this.toDoes.forEach((em, index) => {
        if (em.id == this.checking) {
          this.i = index;
        }
      });
      this.toDoes[this.i] = obj;
    },
    changeModalVuew() {
      this.modalvue = true;
    },
    modalexit(exit) {
      this.modalvue = exit;
      this.editmodalvue = exit;
    },
    removeData(id) {
      this.toDoes = this.toDoes.filter((em) => {
        return em.id != id;
      });
    },
    time() {
      const current = new Date();
      this.date = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    },
  },
  mounted() {
    if (localStorage.getItem("new")) {
      this.toDoes.push(JSON.parse(localStorage.getItem("new")));
    }
    setInterval(() => {
      this.time();
    }, 1000);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.df {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header {
  height: 60px;
  margin-bottom: 10px;

}

.container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

button:hover {
  cursor: pointer;
  background-color: rgb(224, 224, 224);
}

.add {
  padding: 8px 30px;
  border: none;
  border-radius: 20px;
}
</style>
