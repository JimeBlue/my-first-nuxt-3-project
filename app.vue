<template>
  <div>
    <FormKit
      type="form"
      v-model="formValues"
      @submit="handleSubmit"
      :submit-label="submitLabel"
      :submit-attrs="{
        inputClass: isSubmitting
          ? 'bg-gray-500 border border-gray-500 text-white font-bold p-4 rounded-md opacity-70 cursor-not-allowed'
          : 'bg-blue-500 border border-blue-500 text-white font-bold p-4 rounded-md hover:opacity-80',
      }"
      incomplete-message="⚠️ Please fill in all required fields."
      message-class="text-red-500 font-bold"
    >
      <FormKit
        :type="pp"
        name="plan"
        label="Select Your Pricing Plan*"
        label-class="font-bold text-xl block mb-4"
        :options="radioOptions"
        validation="required"
        validation-label="A pricing Plan"
        message-class="text-red-500 font-bold mt-5"
      />

      <pre wrap> You selected{{ formValues }}</pre>
    </FormKit>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { createInput } from '@formkit/vue';
import PricingPlan from '~/formkit-components/PricingPlan.vue';

const pp = createInput(PricingPlan, {
  props: ['options'],
});

const formValues = ref({ plan: '' });

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

const submitLabel = computed(() =>
  isSubmitting.value ? '⏳ Submitting...' : 'Submit your plan',
);

const isSubmitting = ref(false);
async function handleSubmit(data) {
  isSubmitting.value = true;
  await wait(3000);
  console.log(data);
  isSubmitting.value = false;
}
</script>
<style scoped>
.test {
  width: 20px;
  height: 20px;
}
</style>
