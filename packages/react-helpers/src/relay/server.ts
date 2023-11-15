import { RecordSource, Store, Network } from 'relay-runtime'

// Alternative way to do SSR
// const collector = []
export const store = new Store(new RecordSource())

function fetchGraphQL(params, variables) {
  const request = fetch(process.env.GRAPHQL_ENDPOINT, {
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
}

// export { collector }

export const network = Network.create(fetchGraphQL)

export const getEnvironment = () => new Environment({
  network,
  store,
})
