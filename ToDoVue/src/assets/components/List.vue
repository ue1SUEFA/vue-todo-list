<template>
  <div>
    <input type="text" placeholder="Search" class="searchInput" v-model="search">
    <ul v-for="(item, i) in filteredSearch" :key="i">
      <ListItem :item="item" @removeData="removeData" @editData="editData"></ListItem>
    </ul>

  </div>
</template>

<script>


import ListItem from "@/assets/components/ListItem.vue";

export default {
  components: { ListItem },
  name: "List",
  data() {
    return {
      search: ''
    }
  },
  props: {
    toDoes: {
      type: Array,
      required: true,
    },

  },
  methods: {
    removeData(data) {
      this.$emit("removeData", data);
    },
    editData(data) {
      this.$emit("editData", data);
    },
  },
  computed: {
    filteredSearch: function () {
      return this.toDoes.filter((todo) => {
        return todo.title.includes(this.search)
      })
    }
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
</style>