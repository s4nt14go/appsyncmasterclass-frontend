import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';

Amplify.configure({
  Auth: {
    region: process.env.VUE_APP_REGION,
    userPoolId: process.env.VUE_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.VUE_APP_USER_POOL_WEB_CLIENT_ID,
    mandatorySignIn: true,  // we want our users to be signed in before they can interact with our app
  }
})

const myAppConfig = {
  aws_appsync_graphqlEndpoint: process.env.VUE_APP_GRAPHQL_ENDPOINT,
  aws_appsync_region: process.env.VUE_APP_REGION,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
}

Amplify.configure(myAppConfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
