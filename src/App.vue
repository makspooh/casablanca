<template>
  <div id="app">
    <app-header></app-header>
    <app-introduction></app-introduction>
    <app-creativity></app-creativity>
    <router-view></router-view>
    <app-help></app-help>
    <app-clients></app-clients>
    <app-about></app-about>
    <app-reasons></app-reasons>
    <app-quote></app-quote>
    <app-touch></app-touch>
    <app-footer></app-footer>
  </div>
</template>

<script>

import appHeader from './components/Header.vue'
import appIntroduction from './components/Introduction.vue'
import appCreativity from './components/Creativity.vue' 
import appHelp from './components/Help.vue' 
import appClients from './components/Clients.vue' 
import appAbout from './components/About.vue' 
import appReasons from './components/Why.vue' 
import appQuote from './components/Quote.vue' 
import appTouch from './components/Touch.vue' 
import appFooter from './components/Footer.vue' 

export default {
  data() {
    return {
    }
  },
  components: {
    appHeader,
    appIntroduction,
    appCreativity,
    appHelp,
    appClients,
    appAbout,
    appReasons,
    appQuote,
    appTouch,
    appFooter
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
