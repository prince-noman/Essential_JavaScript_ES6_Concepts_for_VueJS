<script setup>
import { ref } from 'vue';
const counter = ref(0)

function decrease(){
  counter.value > 0 ? counter.value-- : counter.value
}
function increase(){
  counter.value++
}

</script>

<template>
  <main class="min-h-screen w-full py-20 px-5 flex items-center justify-center bg-blue-300">
    <!-- Counter wrapper -->
    <div class="w-full max-w-xs grid grid-cols-3 gap-4">
      <!-- Decrease button -->
      <button 
       @click="decrease()"
          class="bg-blue-700 rounded-lg py-4 flex items-center justify-center text-white shadow-md hover:bg-opacity-90 hover:shadow-xl active:scale-90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
        </svg>
      </button>
      <!-- Decrease button end -->

      <!-- Counter -->
      <div
          class="bg-blue-700 rounded-lg py-4 flex items-center justify-center text-white shadow-md text-2xl font-semibold">
       {{ counter }}

      </div>
      <!-- Counter end -->

      <!-- Increase button -->
      <button 
      @click="increase()"
          class="bg-blue-700 rounded-lg py-4 flex items-center justify-center text-white shadow-md hover:bg-opacity-90 hover:shadow-xl active:scale-90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
      </button>
      <!-- Increase button end -->

    </div>
  </main>
</template>

<!-- <style>

</style> -->