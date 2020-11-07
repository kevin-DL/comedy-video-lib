import { Magic } from 'magic-sdk'

export default ({ app }, inject) => {
  const m = new Magic(process.env.magicPublicKey)
  m.preload()
  inject('magic', m)
}
