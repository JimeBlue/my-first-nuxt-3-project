<template>
  <div class="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6">
    <label
      v-for="(option, index) in options"
      :key="option.value"
      class="flex flex-col space-y-6 shadow-md p-4 w-fit"
      :class="{
        'bg-blue-100 border border-gray-400':
          props.context._value === option.value,
      }"
    >
      <div class="flex justify-between">
        <span class="text-sm text-slate-700">{{ option.label }}</span>
        <div class="relative">
          <input
            type="radio"
            :id="'option' + index"
            :value="option.value"
            @input="handleInput($event)"
            :checked="props.context._value === option.value"
            :name="'option' + index"
            class="hidden"
          />

          <svg
            v-if="props.context._value === option.value"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle-fill w-4 h-4 text-blue-500 absolute top-0 right-0"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
        </div>
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
  // NOTE: FormKit is taking care of emitting the value
  props.context.node.input(e.target.value);
}
</script>
<style scoped>
/* .test {
  width: 20px;
  height: 20px;
} */
/* NOTE: improve it to a dynamic class or have it in tailwind and in the custom theme */
[data-invalid] label {
  border: 5px solid red;
}
</style>
