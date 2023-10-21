<template>
  <div>
    <FormKit type="form" v-model="formValues" @submit="handleSubmit">
      <FormKit
        :type="pp"
        label="Select Your Pricing Plan"
        :options="radioOptions"
        name="plan"
        label-class="font-bold text-xl block mb-4"
      />

      <pre wrap> You selected{{ formValues }}</pre>
    </FormKit>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { createInput } from '@formkit/vue';
import PricingPlan from '~/formkit-components/PricingPlan.vue';

const formValues = ref({ plan: '' });
const pp = createInput(PricingPlan, {
  props: ['options'],
});

const radioOptions = ref([
  {
    label: '10 Downloads',
    value: '10 downloads',
    text_one: '$150/<small>m</small>',
    text_two: 'Save 10%',
    text_three: 'if paid annually',
    img: 'send.png',
  },
  {
    label: '30 Downloads',
    value: '30 downloads',
    text_one: '$350/<small>m</small>',
    text_two: 'Save 10%',
    text_three: 'if paid annually',
    img: 'plane.png',
  },
  {
    label: '50 Downloads',
    value: '50 downloads',
    text_one: '$550/<small>m</small>',
    text_two: 'Save 10%',
    text_three: 'if paid annually',
    img: 'plane-toy.png',
  },
  {
    label: 'Unlimited',
    value: 'unlimited',
    text_one: '$950/<small>m</small>',
    text_two: 'Save 10%',
    text_three: 'if paid annually',
    img: 'rocket.png',
  },
]);

async function handleSubmit(data) {
  await wait(3000);
  console.log(data);
}
</script>
