<template>
  <div class="home">
    <v-carousel v-model="model" cycle :interval="4000" delimiter-icon="mdi-minus" height="350" show-arrows-on-hover>
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container>
      <h1 id="news-header">News</h1>
      <v-row>
        <v-col md="4" sm="6" xs="12">
          <v-container>
            <v-card>
              <v-img src="https://picsum.photos/500/300?image=1" />
              <v-card-title>AAA</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum ac nibh a malesuada. Etiam a
                arcu ullamcorper, luctus dui tristique, varius magna.
              </v-card-text>
              <v-card-text>
                <v-chip><a>More</a></v-chip>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col>
        <v-col md="4" sm="6" xs="12">
          <v-container>
            <v-card>
              <v-img src="https://picsum.photos/500/300?image=20" />
              <v-card-title>BBB</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum ac nibh a malesuada. Etiam a
                arcu ullamcorper, luctus dui tristique, varius magna.
              </v-card-text>
              <v-card-text>
                <v-chip><a>More</a></v-chip>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col>
        <v-col md="4" sm="6" xs="12">
          <v-container fluid>
            <v-img src="https://picsum.photos/500/300?image=30" />
            <h2>CCC</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum ac nibh a malesuada. Etiam a arcu
              ullamcorper, luctus dui tristique, varius magna.
              <v-chip><a>More</a></v-chip>
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
  }),
};
</script>

<style>
#news-header {
  text-align: center;
}
</style>
