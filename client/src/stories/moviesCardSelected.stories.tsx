import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MoviesCardSelected } from '../components'
import { movies } from './stub'

export default {
  title: 'Card/MoviesCardSelected',
  component: MoviesCardSelected,
} as ComponentMeta<typeof MoviesCardSelected>

const Template: ComponentStory<typeof MoviesCardSelected> = (args) => (
  <MoviesCardSelected {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  movie: movies[0],
  onDeleteClick: () => {},
}
