<template>
  <div>
    <label v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        :id="'option' + index"
        :value="option.value"
        v-model="selectedValue"
        @change="handleInput($event)"
        name="pricingPlan"
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
    Selected value in child: {{ selectedValue }}
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
  context: Object,
  modelValue: String,
});

const options = props.context.options;
const imagen = props.context.imagen;
const selectedValue = ref(props.modelValue);
const emit = defineEmits();
function handleInput(event) {
  selectedValue.value = event.target.value;
  props.context.node.input(selectedValue.value);
  // You may not need to emit 'input' anymore if FormKit is taking care of it.
  // emit('input', selectedValue.value);
}
</script>
<style scoped>
.test {
  width: 20px;
  height: 20px;
}
</style>
