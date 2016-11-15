<template>
    <div id="warpper">
        <!-- 显示其他组件的内容 -->
        <!-- <firstcomponent></firstcomponent> -->
        
        <!-- nav -->
        <div class="header">
            <div class="logo">
                <div class="logoImg fl">
                    <img src="./assets/images/logo.png" height="80" width="80">
                </div>
                <div class="author fl">
                    <strong>Vue2</strong>
                </div>
            </div>
            <ul>
                <li>
                    <router-link to="/First">首页</router-link>
                </li>
                <li>
                    <router-link to="/second">跳转第二页</router-link>
                </li>
                <li>
                    <router-link to="/tree">跳转第三页</router-link>
                </li>
                <li>
                    <router-link to="/four">跳转第四页</router-link>
                </li>
                <li>
                    <router-link to="/five">跳转第五页</router-link>
                </li>
            </ul>
        </div>

        <!-- router-view -->
        <router-view class="view"></router-view>
    </div>
</template>

<!-- js -->
<script>
    //组件中引入其他组件
    import firstcomponent from './component/firstcomponent.vue'

    //组件数据
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Hello Vue2'
            }
        }
        // components: { firstcomponent }
    }
</script>

<!-- css -->
<style>
    body{
        font-family: "微软雅黑";
        font-size: 16px;
    }
    .fl{
        float: left;
    }
    #warpper{
        width: 1200px;
        margin: 0 auto;
    }
    .header{
        height: 80px;
        overflow: hidden;
        border-bottom: 1px solid #000; 
        /*background: #000;*/
    }
    .header .logo{
        line-height: 80px;
        float: left;
    }

    /*导航*/
    .header ul{
        overflow: hidden;
        height: 80px;
        float: right;
    }
    .header ul li{
        float: left;
        line-height: 80px;
        width: 120px;
        text-align: center;
        cursor: pointer;
    }
    .header ul li a{
        color: #000;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 18px;
        text-decoration: none;
        font-weight: 600;
    }
    .header ul li a:hover{
        color: #fff;
        background: #000;
        transition: all 1s;
    }
</style>
