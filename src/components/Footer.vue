<template>
  <div class="footer">
      <ul>
        <li>
            <p>{{tit1}}</p>
        </li>
        <li>
            <p>{{tit2}}</p>
        </li>
        <li>
            <p>{{tit3}}</p>
        </li>
        <li>
            <p>{{tit4}}</p>
        </li>
      </ul>
  </div>
</template>


<script>
export default {
  name:'Footer',
  props:{
      tit1:{
          type:String,
          default:'首页'
      },
      tit2:{
          type:String,
          default:'发现'
      },
      tit3:{
          type:String,
          default:'订单'
      },
      tit4:{
          type:String,
          default:'我的'
      }
  }

}
</script>


<style>
   .footer{
        position: absolute;
        left: 0;
        bottom:0;
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border-top: 1px solid #cccccc;
        background: #fff
    }
    .footer ul{
        display: flex
    }
    .footer ul li{
        width: 25%
    }
</style>