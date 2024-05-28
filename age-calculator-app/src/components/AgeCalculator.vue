<script setup>
import { ref, onMounted } from "vue";

const currentDate = new Date();
const formattedDate = {
  currentDay: currentDate.getDate(),
  currentMonth: currentDate.getMonth(),
  currentYear: currentDate.getFullYear(),
};

const userAge = ref({ years: "--", months: "--", days: "--" });

const handleSubmit = (data, node) => {
  console.log(data);
  node.setErrors(["Form incomplete"]);
};
</script>

<template>
  <div>
    <FormKit
      name="currentAge"
      type="form"
      @submit="handleSubmit"
      submit-label="calculate age"
    >
      <FormKit
        name="day"
        id="day"
        type="text"
        label="day"
        placeholder="DD"
        validation="required"
        :validation-messages="{ matches: 'Must be a valid day' }"
        :classes="{
          outer: 'max-w-[6rem]',
          label:
            'uppercase font-poppins text-[400] text-xs text-smokeygrey tracking-[3px] mb-3',
          inner: 'border-lightgrey max-w-[6rem]',
          placeholder: 'text-lightgrey font-bold',
          input: 'max-w-[5rem]',
        }"
      />
      <FormKit
        name="month"
        id="month"
        type="text"
        label="month"
        placeholder="MM"
        validation="min:1|max:12"
        min="1"
        max="12"
        :classes="{
          outer: 'max-w-[6rem]',
          label:
            'uppercase font-poppins text-light text-xs text-smokeygrey tracking-widest mb-3',
          inner: 'border-lightgrey max-w-[6rem]',
          input: 'max-w-[5rem]',
        }"
      />
      <FormKit
        name="year"
        id="year"
        type="text"
        label="year"
        placeholder="YYYY"
        validation="required"
        :classes="{
          outer: 'max-w-[6rem]',
          label:
            'uppercase font-poppins text-light text-xs text-smokeygrey tracking-widest mb-3',
          inner: 'border-lightgrey max-w-[6rem]',
          input: 'max-w-[5rem]',
        }"
      />
    </FormKit>
    <p class="result">
      <span class="result-number">{{ userAge.years }}</span> years
    </p>
    <p class="result">
      <span class="result-number">{{ userAge.months }}</span> months
    </p>
    <p class="result">
      <span class="result-number">{{ userAge.days }}</span> days
    </p>
  </div>
</template>
