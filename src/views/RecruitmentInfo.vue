<template>
  <div class="career">
    <div class="career-title">招聘信息</div>
    <v-app>
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-select
            class="dropdown"
            :items="position"
            filled
            label="职位"
            v-model="positionVal"
            @change="filter"
            dense
          ></v-select>
          <v-spacer></v-spacer>
          <v-select
            class="dropdown"
            :items="city"
            filled
            label="城市"
            v-model="cityVal"
            @change="filter"
            dense
          ></v-select>
          <v-spacer></v-spacer>
          <v-select
            class="dropdown"
            :items="type"
            filled
            label="类型"
            v-model="typeVal"
            @change="filter"
            dense
          ></v-select>
          <v-spacer></v-spacer>
        </v-row>

        <div class="job-title">最新发布</div>
        <div class="job-listing">
          <div v-for="job in this.filteredJobs.slice(page * 10 - 10, page * 10)" :key="job.id">
            <v-card class="mx-auto pa-md-4" max-width="1000">
              <v-card-text>
                <p class="text-h4 text--primary">{{ job.title }}</p>
                <p>{{ job.department }} | {{ job.city }} | {{ job.type }} | {{ job.time }}</p>
                <v-row no-gutters>
                  <div class="text--primary" style="width: 700px">
                    {{ job.abstract }}
                  </div>
                  <v-spacer></v-spacer>
                  <router-link :to="{ path: '/recruitmentDetail', query: { id: job.id } }">
                    <v-btn depressed color="primary"> 查看详情 </v-btn>
                  </router-link>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
        </div>

        <div class="page-pagination">
          <v-pagination
            v-model="page"
            total-visible="10"
            :length="getPageLength()"
            @input="handlePageChange"
          ></v-pagination>
        </div>
      </v-container>
    </v-app>
  </div>
</template>

<script>
const jobs = require('../career');

export default {
  data: () => ({
    positionVal: '全部职位',
    cityVal: '全部城市',
    typeVal: '全部类型',
    position: ['全部职位', '技术类', '人力资源类', '产品类'],
    city: ['全部城市', '上海', '深圳', '广州', '北京'],
    type: ['全部类型', '校园招聘', '社会招聘'],
    alignments: ['start'],
    reveal: false,
    page: 2,
    jobs,
    filteredJobs: [],
  }),
  created() {
    this.filteredJobs = this.sort(jobs);
    this.page = parseInt(this.$route.query.page, 10) || 1;
  },
  methods: {
    filter() {
      this.page = 1;
      this.filteredJobs = this.jobs.filter((job) => {
        if (this.positionVal !== '全部职位' && this.cityVal !== '全部城市' && this.typeVal !== '全部类型') {
          return job.position === this.positionVal && job.city === this.cityVal && job.type === this.typeVal;
        }
        if (this.positionVal !== '全部职位' && this.cityVal !== '全部城市') {
          return job.position === this.positionVal && job.city === this.cityVal;
        }
        if (this.positionVal !== '全部职位' && this.typeVal !== '全部类型') {
          return job.position === this.positionVal && job.type === this.typeVal;
        }
        if (this.cityVal !== '全部城市' && this.typeVal !== '全部类型') {
          return job.city === this.cityVal && job.type === this.typeVal;
        }
        if (this.typeVal !== '全部类型') {
          return job.type === this.typeVal;
        }
        if (this.positionVal !== '全部职位') {
          return job.position === this.positionVal;
        }
        if (this.cityVal !== '全部城市') {
          return job.city === this.cityVal;
        }
        return jobs;
      });
    },
    getPageLength() {
      return Math.ceil(this.filteredJobs.length / 10);
    },
    handlePageChange(value) {
      this.page = value;
      this.$router.push({
        path: '/recruitmentInfo',
        query: {
          page: this.page,
        },
      });
    },
    sort(arr) {
      const temp = arr.concat([]);
      temp.sort((a, b) => {
        const t1 = new Date(Date.parse(a.time.replace(/-/g, '/')));
        const t2 = new Date(Date.parse(b.time.replace(/-/g, '/')));
        return t2.getTime() - t1.getTime();
      });
      return temp;
    },
  },
};
</script>

<style lang="scss" scoped>
.career-title {
  font-size: 30px;
  margin-left: 250px;
  font-style: italic;
  margin-bottom: 50px;
  margin-top: 80px;
  font-weight: bold;
  color: black;
}

.dropdown {
  width: 100px;
}

.job-title {
  font-size: 30px;
  color: black;
  margin-top: 50px;
  margin-left: 80px;
}

.mx-auto {
  margin-top: 30px;
}

.page-pagination {
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>
