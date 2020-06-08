export default function ({ $axios, redirect })
{
  // Set baseURL (both client and server)
  $axios.setBaseURL(process.env.apiBaseUrl);

  //set credential to true, required by sanctum
  $axios.defaults.withCredentials = true;

  //handle errors
  $axios.onError(error => {

    console.log(error.response);

    const code = parseInt(error.response && error.response.status)

    if (code === 404) {

    }else if(code === 401) {

    }else if(code === 422) {
      // store.dispatch('validation/setErrors', error.response.data.errors)
      return Promise.reject();
    }else if(code === 500) {

    }
  });
}
