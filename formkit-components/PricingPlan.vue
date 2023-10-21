<template>
  <div>
    <label v-for="(option, index) in options" :key="option.value">
      <input
        type="radio"
        :id="'option' + index"
        :value="option.value"
        @input="handleInput($event)"
        :checked="props.context._value === option.value"
        :name="'option' + index"
      />
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
import { defineProps } from 'vue';
const props = defineProps({
  context: Object,
});

const options = props.context.options;

function handleInput(e) {
  // NOTE: FormKit is taking care of emitting value
  props.context.node.input(e.target.value);
}
</script>
<style scoped>
.test {
  width: 20px;
  height: 20px;
}
</style>
