<template>
  <div>
    <label v-for="(option, index) in options" :key="index">
      <input type="radio" :id="'option' + index" />
      <span>{{ option.label }}</span>
      <img
        :src="`/img/${option.img}`"
        :alt="option.img.replace(/\.[^/.]+$/, '')"
        class="w-5 h-5"
      />
      <span v-if="option.text_one">{{ option.text_one }}</span>
      <span v-if="option.text_two">{{ option.text_two }}</span>
      <br />
      <br />
    </label>
  </div>
</template>
<script setup>
const props = defineProps({
  context: Object,
  modelValue: String,
});

const options = props.context.options;
const imagen = props.context.imagen;

function handleInput(e) {
  props.context.node.input(e.target.value);
}
</script>
<style scoped>
.test {
  width: 20px;
  height: 20px;
}
</style>
