export enum STATUS {
  ACTIVE = "active",
  INACTIVE = "inactive",
  DELETED = "deleted",
}

export const STATUS_ENUM = [STATUS.ACTIVE, STATUS.DELETED, STATUS.INACTIVE];

/**
 *  Common
 */
export const enum HTTP_STATUS_CODES {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
}
