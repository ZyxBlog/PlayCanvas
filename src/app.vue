<template>
    <div class="whole-wrap">
        <div class="left-wrap">
            <div class="left-title">PLAYCANVAS</div>
            <div class="menu-list">
                <ul>
                    <li v-for="(item, index) in list" 
                        :key="index" 
                        :class="{'active': $route.path == item.link}">
                        <router-link :to="item.link">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    export default class App extends Vue {
        list = [{
                name: '悬浮粒子效果',
                link: '/lizi',
            },{
                name: '子效果',
                link: '/l',
            },{
                name: '悬浮粒',
                link: '/w',
            }
        ]

    }
</script>

<style lang="less">
    body, html {
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: Tahoma,Arial,Helvetica,"宋体";
        background-color: #f5f5f5;
    }

    ul, li {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    .whole-wrap {
        .left-wrap {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 250px;
            height: 100%;
            background: #033348;
            .left-title {
                width: 100%;
                height: 90px;
                line-height: 90px;
                text-align: center;
                font-size: 32px;
                font-weight: bold;
                color: #fff;
            }
            .menu-list {
                ul {
                    width: 100%;
                    li {
                        height: 60px;
                        line-height: 60px;
                        text-align: center;
                        a {
                            display: block;
                            color: #fff;
                            font-size: 17px;
                            font-weight: bold;
                        }
                    }
                    .active {
                        background: rgba(80, 113, 139, 0.6);
                    }
                }
            }
        }
        .main-wrap {
            position: fixed;
            top: 0;
            left: 250px;
            right: 0;
            bottom: 0;
        }
    }
</style>
