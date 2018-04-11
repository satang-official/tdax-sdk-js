import crypto from 'crypto'
import qs from 'qs'

export const ALGORITHM = 'sha512'
export const ENCODING = 'hex'

/**
 * @param {String} secret
 * @param {Object} payload   A key-value hash that represents the payload.
 *
 * @returns {String} A generated signature.
 */
export function sign (secret, payload = {}) {
  const preparedString = qs.stringify(payload, { sort: _alphabeticalSort, encode: false })

  return crypto.createHmac(ALGORITHM, secret).update(preparedString).digest(ENCODING)
}

/**
 * @private
 */
function _alphabeticalSort (a, b) {
  return a.localeCompare(b)
}
