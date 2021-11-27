<template>
<div class="navbar  shadow-lg bg-neutral text-neutral-content rounded-box">
  <div class="px-2 mx-2 navbar-start">
   <NuxtLink to=/> <span class="text-lg font-bold">
           Harrison Kugler 
          </span></NuxtLink>
  </div> 
  <div class="hidden px-2 mx-2 navbar-center lg:flex">
    <div class="flex items-stretch">
      <NuxtLink to=/ class="btn btn-ghost btn-sm rounded-btn">
              Home
      </NuxtLink> 
      <NuxtLink to=/Work class="btn btn-ghost btn-sm rounded-btn">
              Work
            </NuxtLink> 
      <NuxtLink to=/About class=" btn btn-ghost btn-sm rounded-btn">
              About
            </NuxtLink> 
      <NuxtLink to=/About class="btn btn-ghost btn-sm rounded-btn">
              Projects
            </NuxtLink> 
      <NuxtLink to=/Contact class="btn btn-ghost btn-sm rounded-btn">
              Contact
            </NuxtLink>
    </div>
  </div> 
  <div class="navbar-end">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">     
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
      </svg>
    </button> 
    <select data-choose-theme class="select select-bordered w-full max-w-xs bg-neutral">
  
  <option value="cyberpunk">🤖 Cyberpunk</option> 
  <option value="forest">🌙 Dark</option> 
  <option value="retro">📺 Retro</option> 
  <option value="aqua">🟦 Ocean</option> 
  <option value="wireframe">📓 Wireframe</option> 
  <option value="corporate">💼 Corporate</option> 
  <option value="pastel">🍭 Cotton Candy</option> 
  <option value="valentine">🩰 Pink</option> 
  <option value="fastasy">🦄 Fantasy</option> 
  

  
</select>
  </div>
</div>
</template>