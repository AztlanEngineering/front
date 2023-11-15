import {
  Environment, RecordSource, Store, Network,
} from 'relay-runtime'

// Alternative way to do SSR
// const collector = []
const store = new Store(new RecordSource())

// { collector }

const getEnvironment = (url) => new Environment({
  network:Network.create((params, variables) => {
    const request = fetch(url, {
      method :'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        query:params.text,
        variables,
      }),
    }).then((response) => response.json())
    // collector.push(request)
    return request
  }),
  store,
})

export default {
  store,
  getEnvironment,
}
