import type { Meta, StoryObj } from '@storybook/react'
import { ProfileBox as ProfileBoxComponent } from '.'
import { myProfile } from '@mocks/fixture'

type ProfileBox = typeof ProfileBoxComponent

const meta: Meta<ProfileBox> = {
  component: ProfileBoxComponent,
  title: 'MyPage/ProfileBox'
}

export default meta

export const Primary: StoryObj<ProfileBox> = {
  args: myProfile
}
