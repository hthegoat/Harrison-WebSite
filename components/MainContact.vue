<template>
    <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

<div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
<a href="" name="contact"></a>  
  <div class="max-w-lg mx-auto text-center">
    <h1 class="text-3xl font-bold sm:text-3xl md:text-5xl">Request A Proposal!</h1>

    <p class="mt-4 text-gray-500">
     We help companies you know grow their businesses through paid marketing, web design, and acquisition strategies. For more information about what we can do for your business and how to get started, contact us today.
    </p>
  </div>

  <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
          type="email"
          class="input text-neutral w-full p-4 pr-12 text-md font-bold bg-accent active:bg-primary focus:bg-primary border-gray-200 rounded-lg shadow-sm"
          placeholder="Do it, do it"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>

        </span>
          

      </div>
    </div>
      <textarea class="textarea w-full p-4 pr-12 text-md text-neutral font-bold bg-accent active:bg-primary focus:bg-primary border-gray-200 rounded-lg shadow-sm" placeholder="Bio"></textarea>

   

    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-500">
        Calendar Link
       
      </p>

      <a class="inline-block p-[2px] rounded " href="/download">
  <span class="block px-8 py-3 text-sm font-medium bg-secondary-focus rounded-sm hover:bg-transparent">
    Send It 
  </span>
</a>
    </div>
  </form>
</div>
</template>