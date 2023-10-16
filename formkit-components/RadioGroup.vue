<template>
  <div>
    <label v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        :id="'option' + index"
        :value="option"
        v-model="selectedOption"
        @change="handleChange(option)"
        name="radioGroup"
      />
      {{ option }}
    </label>
    selected value child: {{ selectedOption }}
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  options: Array,
  modelValue: String,
});

const selectedOption = ref(props.modelValue);

const emit = defineEmits();

const handleChange = (value) => {
  selectedOption.value = value;
  emit('update:modelValue', value);
};
</script>
