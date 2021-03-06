'use strict';

const BaseError = require('./base-error');

/**
 * A wrapper for multiple Errors
 *
 * @param {Error[]} [errors] Array of errors
 *
 * @property errors {Error[]}
 */
class CredentialsError extends BaseError {
  constructor(errors) {
    super();
    this.errors = errors;
    this.name = 'CredentialsError';
  }

  toString() {
    const message = `CredentialsError of:\n${this.errors
      .map(error =>
        error === this
          ? '[Circular CredentialsError]'
          : error instanceof CredentialsError
            ? String(error).replace(/\n$/, '').replace(/^/gm, '  ')
            : String(error).replace(/^/gm, '    ').substring(2)
      )
      .join('\n')}\n`;
    return message;
  }
}

module.exports = CredentialsError;
