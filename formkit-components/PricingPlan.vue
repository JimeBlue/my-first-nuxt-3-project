<template>
  <div class="flex flex-col lg:flex-row lg:space-x-6">
    <label
      v-for="(option, index) in options"
      :key="option.value"
      class="flex flex-col space-y-6 shadow-md p-4 w-fit"
    >
      <div class="flex justify-between">
        <span class="text-sm text-slate-700">{{ option.label }}</span>
        <input
          type="radio"
          :id="'option' + index"
          :value="option.value"
          @input="handleInput($event)"
          :checked="props.context._value === option.value"
          :name="'option' + index"
        />
      </div>
      <div class="w-10 h-10">
        <img
          :src="`/img/${option.img}`"
          :alt="option.img.replace(/\.[^/.]+$/, '')"
          class="w-full"
        />
      </div>
      <div>
        <p
          v-if="option.text_one"
          class="text-xl font-bold"
          v-html="option.text_one"
        ></p>

        <small v-if="option.text_two"
          ><span class="text-blue-500">{{ option.text_two }}</span>
          {{ option.text_three }}</small
        >
      </div>
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
