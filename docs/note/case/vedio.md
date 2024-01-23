---
sidebar:
title: 监控实现
isTimeLine: true
date: 2024-01-14
tags:
---

# 监控实现

## 监控实现-视频文件流

video.js + videojs-contrib-hls

```text
npm i video.js -save -D  
npm i videojs-contrib-hls -save -D  


//导入 css 与 videojs (可全局，可只在使用的页面)
import "video.js/dist/video-js.css";
import videojs from "video.js";

<video ref="videoPlayer" style="width: 100%; height: 100%" class="video-js videoNmae"></video>


data(){
    return {
      optionc: {
        autoplay: true,
        controls: true,
        muted: true,
        sources: [
          {
            src: "视频地址",
            type: "application/x-mpegURL", // 监控类直播视频流为此格式
            // src: '',
            // type: "video/mp4", // 本地video视频播放为此格式
          },
        ],
      },}
}



 mounted() {
    // 将方法包装成异步
    this.$nextTick(() => {
      setTimeout(() => {
        this.playerd = videojs(   // playerd 为data中的变量，初始值可设置为null
          this.$refs.videoPlayer,  // this.$refs.videoPlayer为放置视频的dom
          this.options,   // this.options为视频的配置，可根据官方文档自行配置，下面有我的配置项
          function onPlayerReady() {
            console.log("onPlayerReady", this);
          }
        );
        this.playerda = videojs(
          this.$refs.videoPlayera,
          this.optionc,
          function onPlayerReady() {
            console.log("onPlayerReady", this);
          }
        );
      });
    })
 }

// 定时器的清理
    beforeDestroy() {
         //clearInterval(this.int)
       // var videoTime = document.getElementById("myvideo");
        videoTime.pause();
    }


```













