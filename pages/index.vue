<template>
<div class="snap-y"> 
  <Hero/>
  <Hero2 class="snap-center"/>
  <Hero3 />
  <Testimonial />
  <ClientLogos />
    <MainContact />
</div>
</template>

<script>
import { themeChange } from 'theme-change';
export default {

  transition: "default",  
  mounted: function () {
    themeChange(false)
  }


};
 

</script>
