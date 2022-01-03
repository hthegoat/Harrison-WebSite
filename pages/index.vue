<template>
<div> 
  <Hero />
  
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
