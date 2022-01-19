<template>
    <section class="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
  <div class="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
    <span class="mb-3 text-white bg-blue-900 badge">Hey? Whatsup? Hello?</span>
    <h1 class="mb-6 text-4xl font-bold leading-tight text-base-content md:text-4xl lg:text-5xl">Contact Me About Your Project</h1>
<form action="https://formspree.io/f/mdobozvb" method="POST" class="form-control">
  
  <div class="relative w-full">
    <input type="email" name="email" placeholder="Email" class="w-full pr-32 md:pr-64 lg:pr-96 input input-primary input-bordered"> 
    <button type="submit" class="absolute top-0 right-0 rounded-l-none btn btn-primary bg-gradient-to-r from-primary via-secondary to-accent-focus">go</button>
  </div>
</form> 
<div class="form-control">
  <label class="label">
    
  </label> 
  
</div>


   <NuxtLink to="/contact" class="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">Or send me a detailed message here</NuxtLink>
  </div>
  <div>
    <img
      src="https://i.ibb.co/3hvghF1/124026684-370287604237680-5585876580566453797-n.jpg"
      alt="3 women looking at a laptop"
      class="object-cover w-full h-auto bg-gray-100 md:h-auto"
      loading="lazy"
    />
  </div>
</section>
</template>