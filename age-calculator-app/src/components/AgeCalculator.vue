<script setup>
import { ref, onMounted } from "vue";

const formData = ref({
  day: "",
  month: "",
  year: "",
});

const userAge = ref({ years: "--", months: "--", days: "--" });

const handleSubmit = (data) => {
  console.log(`${day.value} ${month.value} ${year.value}`);
};
</script>

<template>
  <div>
    <FormKit
      name="age-calculator"
      type="form"
      :value="formData"
      :classes="{
        outer: '',
        inner: '',
      }"
      @submit="handleSubmit"
    >
      <FormKit
        name="day"
        id="day"
        type="text"
        label="DAY"
        placeholder="DD"
        validation="required"
        :validation-messages="{ matches: 'Must be a valid day' }"
        :classes="{
          label: 'text-orange-700 font-extrabold text-xl',
        }"
        help="Must be a number"
      />
      <FormKit
        name="month"
        id="month"
        type="text"
        label="MONTH"
        placeholder="MM"
        validation="min:1|max:12"
        min="1"
        max="12"
      />
      <FormKit
        name="year"
        id="year"
        type="text"
        label="YEAR"
        placeholder="YYYY"
        validation="required"
      />
    </FormKit>
    <p>{{ userAge.years }} years</p>
    <p>{{ userAge.months }} months</p>
    <p>{{ userAge.days }} days</p>
  </div>
</template>
