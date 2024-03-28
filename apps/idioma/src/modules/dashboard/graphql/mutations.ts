/*
import { graphql } from 'react-relay'

const MUTATION_ARTICLE_CREATE = graphql`
  mutation mutations_createArticleMutation(
    $input: CreateArticleMutationInput!
  ) {
    createArticle(input: $input) {
      instance {
        id
        type
        xSlug
        url
        name
        content
        summary
        created
        updated
        published
      }
    }
  }
`

const MUTATION_ARTICLE_UPDATE = graphql`
  mutation mutations_updateArticleMutation(
    $input: UpdateArticleMutationInput!
  ) {
    updateArticle(input: $input) {
      instance {
        id
        type
        xSlug
        url
        name
        content
        summary
        created
        updated
        published
      }
    }
  }
`

const MUTATION_ARTICLE_DELETE = graphql`
  mutation mutations_deleteArticleMutation(
    $input: DeleteArticleMutationInput!
  ) {
    deleteArticle(input: $input) {
      success
    }
  }
`

const MUTATION_COLLECTION_CREATE = graphql`
  mutation mutations_createCollectionMutation(
    $input: CreateCollectionMutationInput!
  ) {
    createCollection(input: $input) {
      instance {
        id
        type
        xSlug
        url
        name
        content
        summary
        created
        updated
        published

        totalItems
        items {
          edges {
            node {
              id
              xSlug
              url
              name
              content
              summary
              created
              updated
              published
            }
          }
        }
      }
    }
  }
`

const MUTATION_COLLECTION_UPDATE = graphql`
  mutation mutations_updateCollectionMutation(
    $input: UpdateCollectionMutationInput!
  ) {
    updateCollection(input: $input) {
      instance {
        id
        name
        summary
        content
        mediaType
        url
        created
        updated
      }
    }
  }
`

const MUTATION_COLLECTION_DELETE = graphql`
  mutation mutations_deleteCollectionMutation(
    $input: DeleteCollectionMutationInput!
  ) {
    deleteCollection(input: $input) {
      success
    }
  }
`

const MUTATION_EVENT_CREATE = graphql`
  mutation mutations_createEventMutation($input: CreateEventMutationInput!) {
    createEvent(input: $input) {
      instance {
        id
        type
        xSlug
        url
        name
        content
        summary
        created
        updated
        published
      }
    }
  }
`

const MUTATION_EVENT_UPDATE = graphql`
  mutation mutations_updateEventMutation($input: UpdateEventMutationInput!) {
    updateEvent(input: $input) {
      instance {
        id
        type
        xSlug
        url
        name
        content
        summary
        created
        updated
        published
      }
    }
  }
`

const MUTATION_EVENT_DELETE = graphql`
  mutation mutations_deleteEventMutation($input: DeleteEventMutationInput!) {
    deleteEvent(input: $input) {
      success
    }
  }
`

const MUTATION_IMAGE_CREATE = graphql`
  mutation mutations_createImageMutation($input: CreateImageMutationInput!) {
    createImage(input: $input) {
      instance {
        id
        type
        xSlug
        url
        name
        content
        summary
        created
        updated
        published
      }
    }
  }
`

const MUTATION_IMAGE_UPDATE = graphql`
  mutation mutations_updateImageMutation($input: UpdateImageMutationInput!) {
    updateImage(input: $input) {
      instance {
        id
        type
        xSlug
        url
        name
        content
        summary
        created
        updated
        published
      }
    }
  }
`

const MUTATION_IMAGE_DELETE = graphql`
  mutation mutations_deleteImageMutation($input: DeleteImageMutationInput!) {
    deleteImage(input: $input) {
      success
    }
  }
`

const mutations = {
  Article:{
    create:{
      accessor:'createArticle',
      graphql :MUTATION_ARTICLE_CREATE,
    },
    update:{
      accessor:'updateArticle',
      graphql :MUTATION_ARTICLE_UPDATE,
    },
    delete:{
      accessor:'deleteArticle',
      graphql :MUTATION_ARTICLE_DELETE,
    },
  },
  Collection:{
    create:{
      accessor:'createCollection',
      graphql :MUTATION_COLLECTION_CREATE,
    },
    update:{
      accessor:'updateCollection',
      graphql :MUTATION_COLLECTION_UPDATE,
    },
    delete:{
      accessor:'deleteCollection',
      graphql :MUTATION_COLLECTION_DELETE,
    },
  },
  Event:{
    create:{
      accessor:'createEvent',
      graphql :MUTATION_EVENT_CREATE,
    },
    update:{
      accessor:'updateEvent',
      graphql :MUTATION_EVENT_UPDATE,
    },
    delete:{
      accessor:'deleteEvent',
      graphql :MUTATION_EVENT_DELETE,
    },
  },
  Image:{
    create:{
      accessor:'createImage',
      graphql :MUTATION_IMAGE_CREATE,
    },
    update:{
      accessor:'updateImage',
      graphql :MUTATION_IMAGE_UPDATE,
    },
    delete:{
      accessor:'deleteImage',
      graphql :MUTATION_IMAGE_DELETE,
    },
  },
}

export default mutations
*/
