<template>
<div class="navbar fixed shadow-lg bg-neutral text-neutral-content">
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
      <NuxtLink to=/Project class="btn btn-ghost btn-sm rounded-btn">
              Projects
            </NuxtLink> 
      <NuxtLink to=/Contact class="btn btn-ghost btn-sm rounded-btn">
              Contact
            </NuxtLink>
    </div>
  </div> 
  <div class="navbar-end">
    <select data-choose-theme class="select select-bordered w-full max-w-xs bg-neutral">
  
  <option value="cyberpunk">🤖 Cyberpunk</option> 
  <option value="forest">🌙 Forest</option> 
  <option value="retro">📺 Retro</option> 
  <option value="aqua">🟦 Ocean</option> 
  <option value="wireframe">📓 Wireframe</option> 
  <option value="corporate">💼 Corporate</option> 
  <option value="cmyk">🎨 CMYK</option> 
  <option value="luxury">🤵 Luxury</option> 
  <option value="fastasy">🦄 Fantasy</option> 
  

  
</select>  
  <!-- Mobile menu, show/hide based on menu state. -->
   <div class=" flex-none">
  <button  class="z-0 dropdown dropdown-end" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> 
         </svg>   
      <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li class="text-base-content">
      <NuxtLink to="/">Home</NuxtLink>
    </li> 
    <li class="text-base-content">
      <NuxtLink to="/work">Work</NuxtLink>
    </li>
    <li class="text-base-content">
      <NuxtLink to="/about">About</NuxtLink>
    </li> 
    <li class="text-base-content">
      <NuxtLink to="/project">Projects</NuxtLink>
    </li>
    <li class="text-base-content">
      <NuxtLink to="/contact">Contact</NuxtLink>
    </li>
    
   
    </ul> </button>           
  
   </div>  
  </div>
       

    
  </div>
  </div>
  </div>
</template>