<script setup>
import { ref, onMounted } from "vue";

const currentDate = new Date();
const formattedDate = {
  currentDay: currentDate.getDate(),
  currentMonth: currentDate.getMonth(),
  currentYear: currentDate.getFullYear(),
};

const userAge = ref({ years: "--", months: "--", days: "--" });

const handleSubmit = (data) => {
  console.log(data);
  // console.log(formattedDate);
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
          label:
            'uppercase font-poppins text-[400] text-xs text-smokeygrey tracking-[3px] mb-3',
          inner: 'border-lightgrey max-w-[5em]',
          placeholder: 'text-lightgrey font-bold',
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
          label:
            'uppercase font-poppins text-light text-xs text-smokeygrey tracking-widest mb-3',
          inner: 'border-lightgrey max-w-[5em]',
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
          label:
            'uppercase font-poppins text-light text-xs text-smokeygrey tracking-widest mb-3',
          inner: 'border-lightgrey max-w-[5em]',
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
