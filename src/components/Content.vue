<template>
  <div class="x-content">
      
  </div>
</template>


<script>
export default {
  name:'cont',
  props:{
      listData:{
          type:String,
          default:"内容"
      }
  }

}
</script>


<style >
    .header ~ .x-content{
        padding-top:55px
    }
    .footer ~ .x-content{
        padding-bottom:55px
    }
</style>