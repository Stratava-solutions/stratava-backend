const USER_TOKEN_EXPIRATION = 86400;
const USER_ROLE = 'user';
const PASSWORD_COMPLEXITY = {
  min: 8,
  max: 35,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};
const MAX_CONSECUTIVE_FAILS_BY_USERNAME = 10;
const PRODUCTION_ENV = 'production';
const VERBOSE_LOGGING_LVL = 'verbose';
const INFO_LOGGING_LVL = 'info';
const DEFAULT_PAGINATION_LIMIT = 25;
const MAX_PAGINATION_LIMIT = 100;
const DEFAULT_PAGINATION_PAGE = 1;

module.exports = {
  USER_TOKEN_EXPIRATION,
  USER_ROLE,
  PASSWORD_COMPLEXITY,
  MAX_CONSECUTIVE_FAILS_BY_USERNAME,
  PRODUCTION_ENV,
  VERBOSE_LOGGING_LVL,
  INFO_LOGGING_LVL,
  DEFAULT_PAGINATION_LIMIT,
  MAX_PAGINATION_LIMIT,
  DEFAULT_PAGINATION_PAGE,
};