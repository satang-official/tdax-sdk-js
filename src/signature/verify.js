import { sign } from './sign'

/**
 * @param {String} secret
 * @param {Object} payload     A key-value hash that represents the payload.
 * @param {String} signature
 */
export function verify (secret, payload, signature) {
  if (sign(secret, payload) !== signature) {
    throw new Error('Invalid Signature: provided signature does not match')
  }

  return payload
}
