import { defineListenerProp } from '../utils/components'

export const props = {
  elevation: {
    type: [Number, String],
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  radius: {
    type: [Number, String],
  },
  width: {
    type: [Number, String],
  },
  height: {
    type: [Number, String],
  },
  round: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
