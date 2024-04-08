<template>
    <div class="modal" @click="modalexit">
        <div class="box" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        modalexit() {
            const exit = false
            this.$emit('modalexit', exit)
        }
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0%;
    bottom: 0%;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(50, 50, 50, 0.5);
}

.box {
    padding: 20px;
    background-color: white;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>