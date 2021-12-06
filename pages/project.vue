<template>
<section class="px-4 py-24 mx-auto max-w-7xl">
  <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Case Studies</h2>
  <p class="mb-20 text-lg text-gray-500">Me Showing My Work</p>
  <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
    <div>
      <NuxtLink to="projects/burythehatchet">
        <img src="https://i.ibb.co/m4qS4jw/JL1-4968.jpg" class="object-cover w-full h-72 mb-5 bg-center rounded" alt="Harrison Kugler" loading="lazy" />
      </NuxtLink>
      <h2 class="mb-2 text-lg font-semibold text-gray-900">
        <NuxtLink to="project/burythehatchet" class="text-gray-900 hover:text-accent">Full Stack Marketing with Bury The Hatchet</NuxtLink>
      </h2>
      <p class="mb-3 text-sm font-normal text-gray-500">
        Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
        Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
      </p>
      <p class="mb-3 text-sm font-normal text-gray-500">
        <NuxtLink to="#" class="font-medium text-gray-900 hover:text-accent">Harrison Kugler</NuxtLink>
        • Full Stack
      </p>
    </div>
    <div>
      <NuxtLink to="projects/keystone">
        <img src="https://i.ibb.co/3yT90jp/208880923-2946105035665082-7096162953045180106-n.jpg" class="object-cover w-full h-72 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
      </NuxtLink>
      <h2 class="mb-2 text-lg font-semibold text-gray-900">
        <NuxtLink to="projects/keystone" class="text-gray-900 hover:text-accent">Lead Generation for Keystone Roofing </NuxtLink>
      </h2>
      <p class="mb-3 text-sm font-normal text-gray-500">
        Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy
        Dark Mode.
      </p>
      <p class="mb-3 text-sm font-normal text-gray-500">
        <NuxtLink to="#" class="font-medium text-gray-900 hover:text-accent">Harrison Kugler</NuxtLink>
        • Lead Generation
      </p>
    </div>
   
    
  </div>
  <div class="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
    <NuxtLink to="/" class="w-full rounded-full btn btn-light btn-xl md:w-auto">Contact Me</NuxtLink>
    <NuxtLink to="/" class="w-full rounded-full btn btn-light btn-xl md:w-auto">Home</NuxtLink>
  </div>
</section>    
</template>