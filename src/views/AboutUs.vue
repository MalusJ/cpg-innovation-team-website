<template>
  <div class="about">
    <div class="about-title">联系我们</div>

    <div class="address-container">
      <baidu-map class="map" :center="display" :zoom="16">
        <bm-marker :position="center" @click="infoWindowOpen">
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <div class="address-window">
              <p>公司名称</p>
              <a
                href="https://map.baidu.com/poi/wework(%E6%96%B0%E7%96%86%E8%B7%AF518%E5%8F%B7)/@13522476.695830092,3642838.087485785,17.72z?uid=09d840c7bf78285bb64f5498&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&querytype=detailConInfo&da_src=shareurl"
              >
                到这里去
              </a>
            </div>
          </bm-info-window>
        </bm-marker>
      </baidu-map>
      <div class="address">
        <div class="address-sub-title">公司地址</div>
        <div class="address-body">地址：新疆路518号</div>
        <div class="address-body">邮箱：contact@example.com</div>
        <div class="address-body">总机联系电话：021-8888 8888</div>
        <div class="address-body">经理联系电话：021-8888 8888 转 8012</div>
      </div>
    </div>

    <div class="social-media-title">关注我们</div>
    <div class="social-media-image">
      <a class="social-media-link" href="https://facebook.com">
        <img class="social-media-icon" src="../assets/icon-fb.png" />
      </a>
      <a class="social-media-link" href="https://instagram.com">
        <img class="social-media-icon" src="../assets/icon-ins.png" />
      </a>
      <a class="social-media-link" href="https://twitter.com">
        <img class="social-media-icon" src="../assets/icon-twitter.png" />
      </a>
      <a class="social-media-link" href="https://linkedin.com">
        <img class="social-media-icon" src="../assets/icon-linkedin.png" />
      </a>
      <img class="social-media-code" src="../assets/qrcode.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: { lng: 121.473138, lat: 31.249951 },
      center: { lng: 121.473138, lat: 31.248893 },
      show: true,
    };
  },
  methods: {
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.about-title {
  font-size: 30px;
  margin-left: 250px;
  font-style: italic;
  margin-top: 80px;
  margin-bottom: 50px;
  font-weight: bold;
  color: black;
}

.address-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.address-window {
  text-align: center;
  font-size: 15px;
}

.map {
  margin-right: 80px;
  width: 400px;
  height: 250px;
}

.address {
  line-height: 30px;
}

.address-sub-title {
  font-size: 18px;
}

.address-body {
  font-size: 14px;
}

.social-media-title {
  margin-top: 80px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: black;
}

.social-media-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
}

.social-media-link {
  margin: 20px;
}

.social-media-icon {
  width: 50px;
  height: 50px;
}

.social-media-code {
  height: 140px;
  margin-left: 60px;
}
</style>
