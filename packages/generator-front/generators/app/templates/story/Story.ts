/* <%= pkg %> <%= version %> */
import * as React from 'react'

import { <%= name %> } from 'ui'

export default {
  title: '<%= fullname %>',
  component: <%= name %>,
  subcomponents: {
    //Item:<%= name %>.Item
  },
  decorators:[
    //storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Base = () => (
  <<%= name %>>Sample <%= name %></<%= name %>>
)
