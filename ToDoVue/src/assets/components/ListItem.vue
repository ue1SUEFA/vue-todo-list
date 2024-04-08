<template>
  <li :id="item.id">
    <input type="checkbox" :checked="item.isChecked" />

    <p>{{ item.title }}</p>
    <div>
      <button @click="$emit('editData', item.id)">Edit</button>
      <button @click="$emit('removeData', item.id)">delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
li {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  list-style-type: none;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
