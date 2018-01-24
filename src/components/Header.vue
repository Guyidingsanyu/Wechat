<template>
  <div class="header">
      <ul>
          <li class="header-btn">
              <slot></slot>
          </li>
          <li class="header-tit">
              <p>{{tit}}</p>
          </li>
          <li class="header-btn">
              <slot></slot>
          </li>

      </ul>
  </div>
</template>


<script>
export default {
  name:'Header',
  props:{
      tit:{
          type:String,
          default:'头部'
      }
  }

}
</script>


<style scoped>
    .header{
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border-bottom: 1px solid #cccccc;
        background: #0af
    }
    .header ul{
        display: flex
    }
    .header .header-tit{
        flex: 1;
        color:#fff
    }
    .header .header-btn{
        width: 60px
    }
</style>
