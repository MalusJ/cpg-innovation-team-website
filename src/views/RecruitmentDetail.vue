<template>
  <div class="career-detail">
    <v-row no-gutters>
      <v-col md="8" offset-md="2">
        <v-row class="career-header" no-gutters>
          <v-col cols="8">
            <div class="career-detail-title">{{ jobs[index].title }}</div>
          </v-col>
          <v-col class="text-right" cols="4">
            <v-dialog transition="dialog-top-transition" max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" v-bind="attrs" v-on="on">申请岗位</v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-card-text>
                    <div class="text-h4 pa-12">请发送简历至contact@example.com</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <a href="mailto:contact@example.com"><v-btn depressed color="primary"> 发送简历 </v-btn></a>
                    <v-btn text @click="dialog.value = false">关闭</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
        <div class="career-detail-tag">
          {{ jobs[index].department }} | {{ jobs[index].position }} | {{ jobs[index].city }} |
          {{ jobs[index].time }}
        </div>
        <v-divider></v-divider>
        <div class="career-sub-title">工作职责</div>
        <div class="career-detail-content">
          {{ jobs[index].responsibility }}
        </div>
        <div class="career-sub-title">工作要求</div>
        <div class="career-detail-content">
          {{ jobs[index].requirements }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const jobs = require('../career');

export default {
  data: () => ({
    jobs,
    index: 0,
  }),
  created() {
    if (this.$route.query.id > 0 && this.$route.query.id < jobs.length) {
      this.index = this.$route.query.id - 1;
    }
  },
};
</script>

<style lang="scss" scoped>
.career-header {
  margin-top: 100px;

  .career-detail-title {
    font-size: 32px;
    margin-left: auto;
    font-weight: bold;
    color: black;
  }
}

.career-detail-tag {
  margin-top: 50px;
  font-size: 15px;
}

.career-sub-title {
  font-size: 23px;
  margin-left: auto;
  margin-top: 50px;
  margin-bottom: 30px;
  font-weight: bold;
  color: black;
}

.career-detail-content {
  font-size: 15px;
  white-space: pre-wrap;
  line-height: 28px;
  margin-bottom: 80px;
}
</style>
