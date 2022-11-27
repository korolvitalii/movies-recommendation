import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MoviesCard } from '../components'
import { movies } from './stub'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card/MoviesCard',
  component: MoviesCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MoviesCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MoviesCard> = (args) => <MoviesCard {...args} />

export const Card = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card.args = {
  movie: movies[0],
  onCardSelect: () => {},
}
