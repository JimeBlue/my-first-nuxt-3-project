<template>
  <!-- <div>
    <FormKit
      :type="pp"
      label="Select Your Pricing Plan"
      :options="radioOptions"
      help="What is the best plan for you?"
    />
  </div> -->

  <div>
    <h1>Radio Group Example</h1>
    <RadioGroup
      :modelValue="selectedValue"
      :options="options"
      @update:modelValue="selectedValue = $event"
    />

    <p>Selected Value (Parent Component): {{ selectedValue }}</p>
  </div>
</template>
<!-- <script setup>
import { ref } from 'vue';
import { createInput } from '@formkit/vue';
import PricingPlan from '~/formkit-components/PricingPlan.vue';

const pp = createInput(PricingPlan, {
  props: ['options'],
});
const selectedPlan = ref(null);

const radioOptions = ref([
  {
    label: '10 Downloads',
    value: '10 downloads',
    text_one: '$150/m',
    text_two: 'Save 10% if paid annually',
    img: 'send.png',
  },
  {
    label: '30 Downloads',
    value: '30 downloads',
    text_one: '$350/m',
    text_two: 'Save 10% if paid annually',
    img: 'plane.png',
  },
  {
    label: '50 Downloads',
    value: '50 downloads',
    text_one: '$550/m',
    img: 'plane-toy.png',
  },
  {
    label: 'Unlimited',
    value: 'unlimited',
    text_one: 'text4',
    text_two: 'Save 10% if paid annually',
    img: 'rocket.png',
  },
]);
const selectedOption = ref(null);
</script> -->
<script setup>
import { ref } from 'vue';
import RadioGroup from '~/formkit-components/RadioGroup.vue';

const selectedValue = ref(null);

const options = ['Option A', 'Option B', 'Option C', 'Option D']; // Define your options here
</script>
