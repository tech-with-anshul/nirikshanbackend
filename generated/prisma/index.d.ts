
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Building
 * 
 */
export type Building = $Result.DefaultSelection<Prisma.$BuildingPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model ParentProfile
 * 
 */
export type ParentProfile = $Result.DefaultSelection<Prisma.$ParentProfilePayload>
/**
 * Model WardenProfile
 * 
 */
export type WardenProfile = $Result.DefaultSelection<Prisma.$WardenProfilePayload>
/**
 * Model ChiefWardenProfile
 * 
 */
export type ChiefWardenProfile = $Result.DefaultSelection<Prisma.$ChiefWardenProfilePayload>
/**
 * Model MatronProfile
 * 
 */
export type MatronProfile = $Result.DefaultSelection<Prisma.$MatronProfilePayload>
/**
 * Model MessageThread
 * 
 */
export type MessageThread = $Result.DefaultSelection<Prisma.$MessageThreadPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model EmailNotification
 * 
 */
export type EmailNotification = $Result.DefaultSelection<Prisma.$EmailNotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  STUDENT: 'STUDENT',
  PARENT: 'PARENT',
  WARDEN: 'WARDEN',
  CHIEF_WARDEN: 'CHIEF_WARDEN',
  MATRON: 'MATRON'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const MessageType: {
  STUDENT_PARENT: 'STUDENT_PARENT',
  PARENT_STUDENT: 'PARENT_STUDENT',
  PARENT_WARDEN: 'PARENT_WARDEN',
  WARDEN_STUDENT: 'WARDEN_STUDENT',
  WARDEN_PARENT: 'WARDEN_PARENT',
  CHIEF_WARDEN_WARDEN: 'CHIEF_WARDEN_WARDEN',
  CHIEF_WARDEN_STUDENT: 'CHIEF_WARDEN_STUDENT',
  CHIEF_WARDEN_PARENT: 'CHIEF_WARDEN_PARENT',
  STUDENT_WARDEN: 'STUDENT_WARDEN'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const MessagePriority: {
  LOW: 'LOW',
  NORMAL: 'NORMAL',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type MessagePriority = (typeof MessagePriority)[keyof typeof MessagePriority]


export const EmailStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED',
  RETRYING: 'RETRYING'
};

export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus]


export const EmailType: {
  MESSAGE_NOTIFICATION: 'MESSAGE_NOTIFICATION',
  REQUEST_STATUS_UPDATE: 'REQUEST_STATUS_UPDATE',
  WELCOME: 'WELCOME',
  OTP_VERIFICATION: 'OTP_VERIFICATION',
  SYSTEM_ALERT: 'SYSTEM_ALERT'
};

export type EmailType = (typeof EmailType)[keyof typeof EmailType]


export const RequestType: {
  LATE: 'LATE',
  GO_HOME: 'GO_HOME',
  ARRIVAL_CONFIRMATION: 'ARRIVAL_CONFIRMATION'
};

export type RequestType = (typeof RequestType)[keyof typeof RequestType]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type MessagePriority = $Enums.MessagePriority

export const MessagePriority: typeof $Enums.MessagePriority

export type EmailStatus = $Enums.EmailStatus

export const EmailStatus: typeof $Enums.EmailStatus

export type EmailType = $Enums.EmailType

export const EmailType: typeof $Enums.EmailType

export type RequestType = $Enums.RequestType

export const RequestType: typeof $Enums.RequestType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Buildings
 * const buildings = await prisma.building.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Buildings
   * const buildings = await prisma.building.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.building`: Exposes CRUD operations for the **Building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.BuildingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parentProfile`: Exposes CRUD operations for the **ParentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParentProfiles
    * const parentProfiles = await prisma.parentProfile.findMany()
    * ```
    */
  get parentProfile(): Prisma.ParentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wardenProfile`: Exposes CRUD operations for the **WardenProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WardenProfiles
    * const wardenProfiles = await prisma.wardenProfile.findMany()
    * ```
    */
  get wardenProfile(): Prisma.WardenProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chiefWardenProfile`: Exposes CRUD operations for the **ChiefWardenProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChiefWardenProfiles
    * const chiefWardenProfiles = await prisma.chiefWardenProfile.findMany()
    * ```
    */
  get chiefWardenProfile(): Prisma.ChiefWardenProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matronProfile`: Exposes CRUD operations for the **MatronProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatronProfiles
    * const matronProfiles = await prisma.matronProfile.findMany()
    * ```
    */
  get matronProfile(): Prisma.MatronProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageThread`: Exposes CRUD operations for the **MessageThread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageThreads
    * const messageThreads = await prisma.messageThread.findMany()
    * ```
    */
  get messageThread(): Prisma.MessageThreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailNotification`: Exposes CRUD operations for the **EmailNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailNotifications
    * const emailNotifications = await prisma.emailNotification.findMany()
    * ```
    */
  get emailNotification(): Prisma.EmailNotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Building: 'Building',
    User: 'User',
    StudentProfile: 'StudentProfile',
    ParentProfile: 'ParentProfile',
    WardenProfile: 'WardenProfile',
    ChiefWardenProfile: 'ChiefWardenProfile',
    MatronProfile: 'MatronProfile',
    MessageThread: 'MessageThread',
    Message: 'Message',
    Room: 'Room',
    Request: 'Request',
    EmailNotification: 'EmailNotification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "building" | "user" | "studentProfile" | "parentProfile" | "wardenProfile" | "chiefWardenProfile" | "matronProfile" | "messageThread" | "message" | "room" | "request" | "emailNotification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Building: {
        payload: Prisma.$BuildingPayload<ExtArgs>
        fields: Prisma.BuildingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findFirst: {
            args: Prisma.BuildingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findMany: {
            args: Prisma.BuildingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          create: {
            args: Prisma.BuildingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          createMany: {
            args: Prisma.BuildingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          delete: {
            args: Prisma.BuildingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          update: {
            args: Prisma.BuildingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          deleteMany: {
            args: Prisma.BuildingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          upsert: {
            args: Prisma.BuildingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          aggregate: {
            args: Prisma.BuildingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuilding>
          }
          groupBy: {
            args: Prisma.BuildingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildingCountArgs<ExtArgs>
            result: $Utils.Optional<BuildingCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      ParentProfile: {
        payload: Prisma.$ParentProfilePayload<ExtArgs>
        fields: Prisma.ParentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload>
          }
          findFirst: {
            args: Prisma.ParentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload>
          }
          findMany: {
            args: Prisma.ParentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload>[]
          }
          create: {
            args: Prisma.ParentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload>
          }
          createMany: {
            args: Prisma.ParentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload>[]
          }
          delete: {
            args: Prisma.ParentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload>
          }
          update: {
            args: Prisma.ParentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload>
          }
          deleteMany: {
            args: Prisma.ParentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload>[]
          }
          upsert: {
            args: Prisma.ParentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentProfilePayload>
          }
          aggregate: {
            args: Prisma.ParentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParentProfile>
          }
          groupBy: {
            args: Prisma.ParentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ParentProfileCountAggregateOutputType> | number
          }
        }
      }
      WardenProfile: {
        payload: Prisma.$WardenProfilePayload<ExtArgs>
        fields: Prisma.WardenProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WardenProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WardenProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload>
          }
          findFirst: {
            args: Prisma.WardenProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WardenProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload>
          }
          findMany: {
            args: Prisma.WardenProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload>[]
          }
          create: {
            args: Prisma.WardenProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload>
          }
          createMany: {
            args: Prisma.WardenProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WardenProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload>[]
          }
          delete: {
            args: Prisma.WardenProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload>
          }
          update: {
            args: Prisma.WardenProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload>
          }
          deleteMany: {
            args: Prisma.WardenProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WardenProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WardenProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload>[]
          }
          upsert: {
            args: Prisma.WardenProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenProfilePayload>
          }
          aggregate: {
            args: Prisma.WardenProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWardenProfile>
          }
          groupBy: {
            args: Prisma.WardenProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<WardenProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.WardenProfileCountArgs<ExtArgs>
            result: $Utils.Optional<WardenProfileCountAggregateOutputType> | number
          }
        }
      }
      ChiefWardenProfile: {
        payload: Prisma.$ChiefWardenProfilePayload<ExtArgs>
        fields: Prisma.ChiefWardenProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChiefWardenProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChiefWardenProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload>
          }
          findFirst: {
            args: Prisma.ChiefWardenProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChiefWardenProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload>
          }
          findMany: {
            args: Prisma.ChiefWardenProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload>[]
          }
          create: {
            args: Prisma.ChiefWardenProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload>
          }
          createMany: {
            args: Prisma.ChiefWardenProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChiefWardenProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload>[]
          }
          delete: {
            args: Prisma.ChiefWardenProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload>
          }
          update: {
            args: Prisma.ChiefWardenProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload>
          }
          deleteMany: {
            args: Prisma.ChiefWardenProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChiefWardenProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChiefWardenProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload>[]
          }
          upsert: {
            args: Prisma.ChiefWardenProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiefWardenProfilePayload>
          }
          aggregate: {
            args: Prisma.ChiefWardenProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChiefWardenProfile>
          }
          groupBy: {
            args: Prisma.ChiefWardenProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChiefWardenProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChiefWardenProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ChiefWardenProfileCountAggregateOutputType> | number
          }
        }
      }
      MatronProfile: {
        payload: Prisma.$MatronProfilePayload<ExtArgs>
        fields: Prisma.MatronProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatronProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatronProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload>
          }
          findFirst: {
            args: Prisma.MatronProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatronProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload>
          }
          findMany: {
            args: Prisma.MatronProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload>[]
          }
          create: {
            args: Prisma.MatronProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload>
          }
          createMany: {
            args: Prisma.MatronProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatronProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload>[]
          }
          delete: {
            args: Prisma.MatronProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload>
          }
          update: {
            args: Prisma.MatronProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload>
          }
          deleteMany: {
            args: Prisma.MatronProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatronProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatronProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload>[]
          }
          upsert: {
            args: Prisma.MatronProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatronProfilePayload>
          }
          aggregate: {
            args: Prisma.MatronProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatronProfile>
          }
          groupBy: {
            args: Prisma.MatronProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatronProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatronProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MatronProfileCountAggregateOutputType> | number
          }
        }
      }
      MessageThread: {
        payload: Prisma.$MessageThreadPayload<ExtArgs>
        fields: Prisma.MessageThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageThreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageThreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload>
          }
          findFirst: {
            args: Prisma.MessageThreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageThreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload>
          }
          findMany: {
            args: Prisma.MessageThreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload>[]
          }
          create: {
            args: Prisma.MessageThreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload>
          }
          createMany: {
            args: Prisma.MessageThreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageThreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload>[]
          }
          delete: {
            args: Prisma.MessageThreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload>
          }
          update: {
            args: Prisma.MessageThreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload>
          }
          deleteMany: {
            args: Prisma.MessageThreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageThreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageThreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload>[]
          }
          upsert: {
            args: Prisma.MessageThreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageThreadPayload>
          }
          aggregate: {
            args: Prisma.MessageThreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageThread>
          }
          groupBy: {
            args: Prisma.MessageThreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageThreadCountArgs<ExtArgs>
            result: $Utils.Optional<MessageThreadCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      EmailNotification: {
        payload: Prisma.$EmailNotificationPayload<ExtArgs>
        fields: Prisma.EmailNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findFirst: {
            args: Prisma.EmailNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findMany: {
            args: Prisma.EmailNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          create: {
            args: Prisma.EmailNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          createMany: {
            args: Prisma.EmailNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          delete: {
            args: Prisma.EmailNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          update: {
            args: Prisma.EmailNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          upsert: {
            args: Prisma.EmailNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          aggregate: {
            args: Prisma.EmailNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailNotification>
          }
          groupBy: {
            args: Prisma.EmailNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    building?: BuildingOmit
    user?: UserOmit
    studentProfile?: StudentProfileOmit
    parentProfile?: ParentProfileOmit
    wardenProfile?: WardenProfileOmit
    chiefWardenProfile?: ChiefWardenProfileOmit
    matronProfile?: MatronProfileOmit
    messageThread?: MessageThreadOmit
    message?: MessageOmit
    room?: RoomOmit
    request?: RequestOmit
    emailNotification?: EmailNotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentMessages: number
    receivedMessages: number
    studentRequests: number
    parentRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    studentRequests?: boolean | UserCountOutputTypeCountStudentRequestsArgs
    parentRequests?: boolean | UserCountOutputTypeCountParentRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * Count Type ParentProfileCountOutputType
   */

  export type ParentProfileCountOutputType = {
    childrenAsMother: number
    childrenAsFather: number
  }

  export type ParentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childrenAsMother?: boolean | ParentProfileCountOutputTypeCountChildrenAsMotherArgs
    childrenAsFather?: boolean | ParentProfileCountOutputTypeCountChildrenAsFatherArgs
  }

  // Custom InputTypes
  /**
   * ParentProfileCountOutputType without action
   */
  export type ParentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfileCountOutputType
     */
    select?: ParentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentProfileCountOutputType without action
   */
  export type ParentProfileCountOutputTypeCountChildrenAsMotherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
  }

  /**
   * ParentProfileCountOutputType without action
   */
  export type ParentProfileCountOutputTypeCountChildrenAsFatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
  }


  /**
   * Count Type MessageThreadCountOutputType
   */

  export type MessageThreadCountOutputType = {
    messages: number
  }

  export type MessageThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | MessageThreadCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * MessageThreadCountOutputType without action
   */
  export type MessageThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThreadCountOutputType
     */
    select?: MessageThreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageThreadCountOutputType without action
   */
  export type MessageThreadCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    students: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | RoomCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Building
   */

  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingAvgAggregateOutputType = {
    totalCapacity: number | null
    currentOccupancy: number | null
    floors: number | null
    roomsPerFloor: number | null
    studentsPerRoom: number | null
  }

  export type BuildingSumAggregateOutputType = {
    totalCapacity: number | null
    currentOccupancy: number | null
    floors: number | null
    roomsPerFloor: number | null
    studentsPerRoom: number | null
  }

  export type BuildingMinAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    totalCapacity: number | null
    currentOccupancy: number | null
    floors: number | null
    roomsPerFloor: number | null
    studentsPerRoom: number | null
    description: string | null
    facilities: string | null
    wardenOffice: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    totalCapacity: number | null
    currentOccupancy: number | null
    floors: number | null
    roomsPerFloor: number | null
    studentsPerRoom: number | null
    description: string | null
    facilities: string | null
    wardenOffice: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildingCountAggregateOutputType = {
    id: number
    name: number
    displayName: number
    totalCapacity: number
    currentOccupancy: number
    floors: number
    roomsPerFloor: number
    studentsPerRoom: number
    description: number
    facilities: number
    wardenOffice: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BuildingAvgAggregateInputType = {
    totalCapacity?: true
    currentOccupancy?: true
    floors?: true
    roomsPerFloor?: true
    studentsPerRoom?: true
  }

  export type BuildingSumAggregateInputType = {
    totalCapacity?: true
    currentOccupancy?: true
    floors?: true
    roomsPerFloor?: true
    studentsPerRoom?: true
  }

  export type BuildingMinAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    totalCapacity?: true
    currentOccupancy?: true
    floors?: true
    roomsPerFloor?: true
    studentsPerRoom?: true
    description?: true
    facilities?: true
    wardenOffice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildingMaxAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    totalCapacity?: true
    currentOccupancy?: true
    floors?: true
    roomsPerFloor?: true
    studentsPerRoom?: true
    description?: true
    facilities?: true
    wardenOffice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildingCountAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    totalCapacity?: true
    currentOccupancy?: true
    floors?: true
    roomsPerFloor?: true
    studentsPerRoom?: true
    description?: true
    facilities?: true
    wardenOffice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BuildingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Building to aggregate.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type BuildingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithAggregationInput | BuildingOrderByWithAggregationInput[]
    by: BuildingScalarFieldEnum[] | BuildingScalarFieldEnum
    having?: BuildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _avg?: BuildingAvgAggregateInputType
    _sum?: BuildingSumAggregateInputType
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }

  export type BuildingGroupByOutputType = {
    id: string
    name: string
    displayName: string
    totalCapacity: number
    currentOccupancy: number
    floors: number
    roomsPerFloor: number
    studentsPerRoom: number
    description: string | null
    facilities: string | null
    wardenOffice: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends BuildingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type BuildingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    totalCapacity?: boolean
    currentOccupancy?: boolean
    floors?: boolean
    roomsPerFloor?: boolean
    studentsPerRoom?: boolean
    description?: boolean
    facilities?: boolean
    wardenOffice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    totalCapacity?: boolean
    currentOccupancy?: boolean
    floors?: boolean
    roomsPerFloor?: boolean
    studentsPerRoom?: boolean
    description?: boolean
    facilities?: boolean
    wardenOffice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    totalCapacity?: boolean
    currentOccupancy?: boolean
    floors?: boolean
    roomsPerFloor?: boolean
    studentsPerRoom?: boolean
    description?: boolean
    facilities?: boolean
    wardenOffice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectScalar = {
    id?: boolean
    name?: boolean
    displayName?: boolean
    totalCapacity?: boolean
    currentOccupancy?: boolean
    floors?: boolean
    roomsPerFloor?: boolean
    studentsPerRoom?: boolean
    description?: boolean
    facilities?: boolean
    wardenOffice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BuildingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "displayName" | "totalCapacity" | "currentOccupancy" | "floors" | "roomsPerFloor" | "studentsPerRoom" | "description" | "facilities" | "wardenOffice" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["building"]>

  export type $BuildingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Building"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      displayName: string
      totalCapacity: number
      currentOccupancy: number
      floors: number
      roomsPerFloor: number
      studentsPerRoom: number
      description: string | null
      facilities: string | null
      wardenOffice: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["building"]>
    composites: {}
  }

  type BuildingGetPayload<S extends boolean | null | undefined | BuildingDefaultArgs> = $Result.GetResult<Prisma.$BuildingPayload, S>

  type BuildingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildingCountAggregateInputType | true
    }

  export interface BuildingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Building'], meta: { name: 'Building' } }
    /**
     * Find zero or one Building that matches the filter.
     * @param {BuildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildingFindUniqueArgs>(args: SelectSubset<T, BuildingFindUniqueArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Building that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildingFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildingFindFirstArgs>(args?: SelectSubset<T, BuildingFindFirstArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildingFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildingWithIdOnly = await prisma.building.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildingFindManyArgs>(args?: SelectSubset<T, BuildingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Building.
     * @param {BuildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
     */
    create<T extends BuildingCreateArgs>(args: SelectSubset<T, BuildingCreateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buildings.
     * @param {BuildingCreateManyArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildingCreateManyArgs>(args?: SelectSubset<T, BuildingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buildings and returns the data saved in the database.
     * @param {BuildingCreateManyAndReturnArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buildings and only return the `id`
     * const buildingWithIdOnly = await prisma.building.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildingCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Building.
     * @param {BuildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
     */
    delete<T extends BuildingDeleteArgs>(args: SelectSubset<T, BuildingDeleteArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Building.
     * @param {BuildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildingUpdateArgs>(args: SelectSubset<T, BuildingUpdateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buildings.
     * @param {BuildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildingDeleteManyArgs>(args?: SelectSubset<T, BuildingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildingUpdateManyArgs>(args: SelectSubset<T, BuildingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings and returns the data updated in the database.
     * @param {BuildingUpdateManyAndReturnArgs} args - Arguments to update many Buildings.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buildings and only return the `id`
     * const buildingWithIdOnly = await prisma.building.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuildingUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Building.
     * @param {BuildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
     */
    upsert<T extends BuildingUpsertArgs>(args: SelectSubset<T, BuildingUpsertArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends BuildingCountArgs>(
      args?: Subset<T, BuildingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): Prisma.PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingGroupByArgs['orderBy'] }
        : { orderBy?: BuildingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Building model
   */
  readonly fields: BuildingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Building model
   */
  interface BuildingFieldRefs {
    readonly id: FieldRef<"Building", 'String'>
    readonly name: FieldRef<"Building", 'String'>
    readonly displayName: FieldRef<"Building", 'String'>
    readonly totalCapacity: FieldRef<"Building", 'Int'>
    readonly currentOccupancy: FieldRef<"Building", 'Int'>
    readonly floors: FieldRef<"Building", 'Int'>
    readonly roomsPerFloor: FieldRef<"Building", 'Int'>
    readonly studentsPerRoom: FieldRef<"Building", 'Int'>
    readonly description: FieldRef<"Building", 'String'>
    readonly facilities: FieldRef<"Building", 'String'>
    readonly wardenOffice: FieldRef<"Building", 'String'>
    readonly isActive: FieldRef<"Building", 'Boolean'>
    readonly createdAt: FieldRef<"Building", 'DateTime'>
    readonly updatedAt: FieldRef<"Building", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Building findUnique
   */
  export type BuildingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findUniqueOrThrow
   */
  export type BuildingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findFirst
   */
  export type BuildingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findFirstOrThrow
   */
  export type BuildingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findMany
   */
  export type BuildingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building create
   */
  export type BuildingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data needed to create a Building.
     */
    data: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
  }

  /**
   * Building createMany
   */
  export type BuildingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Building createManyAndReturn
   */
  export type BuildingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Building update
   */
  export type BuildingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data needed to update a Building.
     */
    data: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
    /**
     * Choose, which Building to update.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building updateMany
   */
  export type BuildingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
  }

  /**
   * Building updateManyAndReturn
   */
  export type BuildingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
  }

  /**
   * Building upsert
   */
  export type BuildingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The filter to search for the Building to update in case it exists.
     */
    where: BuildingWhereUniqueInput
    /**
     * In case the Building found by the `where` argument doesn't exist, create a new Building with this data.
     */
    create: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
    /**
     * In case the Building was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
  }

  /**
   * Building delete
   */
  export type BuildingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Filter which Building to delete.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building deleteMany
   */
  export type BuildingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buildings to delete
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to delete.
     */
    limit?: number
  }

  /**
   * Building without action
   */
  export type BuildingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    otp: string | null
    otpExpiresAt: Date | null
    isVerified: boolean | null
    lastLoginAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    otp: string | null
    otpExpiresAt: Date | null
    isVerified: boolean | null
    lastLoginAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    firstName: number
    lastName: number
    phone: number
    createdAt: number
    updatedAt: number
    otp: number
    otpExpiresAt: number
    isVerified: number
    lastLoginAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    otp?: true
    otpExpiresAt?: true
    isVerified?: true
    lastLoginAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    otp?: true
    otpExpiresAt?: true
    isVerified?: true
    lastLoginAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    otp?: true
    otpExpiresAt?: true
    isVerified?: true
    lastLoginAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    password: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    otp: string | null
    otpExpiresAt: Date | null
    isVerified: boolean
    lastLoginAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    parentProfile?: boolean | User$parentProfileArgs<ExtArgs>
    wardenProfile?: boolean | User$wardenProfileArgs<ExtArgs>
    chiefWardenProfile?: boolean | User$chiefWardenProfileArgs<ExtArgs>
    matronProfile?: boolean | User$matronProfileArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    studentRequests?: boolean | User$studentRequestsArgs<ExtArgs>
    parentRequests?: boolean | User$parentRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "firstName" | "lastName" | "phone" | "createdAt" | "updatedAt" | "otp" | "otpExpiresAt" | "isVerified" | "lastLoginAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    parentProfile?: boolean | User$parentProfileArgs<ExtArgs>
    wardenProfile?: boolean | User$wardenProfileArgs<ExtArgs>
    chiefWardenProfile?: boolean | User$chiefWardenProfileArgs<ExtArgs>
    matronProfile?: boolean | User$matronProfileArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    studentRequests?: boolean | User$studentRequestsArgs<ExtArgs>
    parentRequests?: boolean | User$parentRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs> | null
      parentProfile: Prisma.$ParentProfilePayload<ExtArgs> | null
      wardenProfile: Prisma.$WardenProfilePayload<ExtArgs> | null
      chiefWardenProfile: Prisma.$ChiefWardenProfilePayload<ExtArgs> | null
      matronProfile: Prisma.$MatronProfilePayload<ExtArgs> | null
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      studentRequests: Prisma.$RequestPayload<ExtArgs>[]
      parentRequests: Prisma.$RequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      password: string | null
      role: $Enums.UserRole
      firstName: string
      lastName: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
      otp: string | null
      otpExpiresAt: Date | null
      isVerified: boolean
      lastLoginAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentProfile<T extends User$studentProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$studentProfileArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parentProfile<T extends User$parentProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$parentProfileArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    wardenProfile<T extends User$wardenProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$wardenProfileArgs<ExtArgs>>): Prisma__WardenProfileClient<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chiefWardenProfile<T extends User$chiefWardenProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$chiefWardenProfileArgs<ExtArgs>>): Prisma__ChiefWardenProfileClient<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    matronProfile<T extends User$matronProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$matronProfileArgs<ExtArgs>>): Prisma__MatronProfileClient<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentRequests<T extends User$studentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parentRequests<T extends User$parentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$parentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiresAt: FieldRef<"User", 'DateTime'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.studentProfile
   */
  export type User$studentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
  }

  /**
   * User.parentProfile
   */
  export type User$parentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    where?: ParentProfileWhereInput
  }

  /**
   * User.wardenProfile
   */
  export type User$wardenProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    where?: WardenProfileWhereInput
  }

  /**
   * User.chiefWardenProfile
   */
  export type User$chiefWardenProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    where?: ChiefWardenProfileWhereInput
  }

  /**
   * User.matronProfile
   */
  export type User$matronProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    where?: MatronProfileWhereInput
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.studentRequests
   */
  export type User$studentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.parentRequests
   */
  export type User$parentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    studentId: string | null
    username: string | null
    roomNumber: string | null
    floorNumber: string | null
    building: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    emergencyContact: string | null
    medicalInfo: string | null
    isAtHostel: boolean | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: string | null
    motherProfileId: string | null
    fatherProfileId: string | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    studentId: string | null
    username: string | null
    roomNumber: string | null
    floorNumber: string | null
    building: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    emergencyContact: string | null
    medicalInfo: string | null
    isAtHostel: boolean | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: string | null
    motherProfileId: string | null
    fatherProfileId: string | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    userId: number
    studentId: number
    username: number
    roomNumber: number
    floorNumber: number
    building: number
    checkInDate: number
    checkOutDate: number
    emergencyContact: number
    medicalInfo: number
    isAtHostel: number
    profilePicture: number
    createdAt: number
    updatedAt: number
    roomId: number
    motherProfileId: number
    fatherProfileId: number
    _all: number
  }


  export type StudentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    studentId?: true
    username?: true
    roomNumber?: true
    floorNumber?: true
    building?: true
    checkInDate?: true
    checkOutDate?: true
    emergencyContact?: true
    medicalInfo?: true
    isAtHostel?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    motherProfileId?: true
    fatherProfileId?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    studentId?: true
    username?: true
    roomNumber?: true
    floorNumber?: true
    building?: true
    checkInDate?: true
    checkOutDate?: true
    emergencyContact?: true
    medicalInfo?: true
    isAtHostel?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    motherProfileId?: true
    fatherProfileId?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    studentId?: true
    username?: true
    roomNumber?: true
    floorNumber?: true
    building?: true
    checkInDate?: true
    checkOutDate?: true
    emergencyContact?: true
    medicalInfo?: true
    isAtHostel?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    motherProfileId?: true
    fatherProfileId?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: string
    userId: string
    studentId: string
    username: string | null
    roomNumber: string | null
    floorNumber: string | null
    building: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    emergencyContact: string | null
    medicalInfo: string | null
    isAtHostel: boolean
    profilePicture: string | null
    createdAt: Date
    updatedAt: Date
    roomId: string | null
    motherProfileId: string | null
    fatherProfileId: string | null
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    studentId?: boolean
    username?: boolean
    roomNumber?: boolean
    floorNumber?: boolean
    building?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    emergencyContact?: boolean
    medicalInfo?: boolean
    isAtHostel?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    motherProfileId?: boolean
    fatherProfileId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | StudentProfile$roomArgs<ExtArgs>
    motherProfile?: boolean | StudentProfile$motherProfileArgs<ExtArgs>
    fatherProfile?: boolean | StudentProfile$fatherProfileArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    studentId?: boolean
    username?: boolean
    roomNumber?: boolean
    floorNumber?: boolean
    building?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    emergencyContact?: boolean
    medicalInfo?: boolean
    isAtHostel?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    motherProfileId?: boolean
    fatherProfileId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | StudentProfile$roomArgs<ExtArgs>
    motherProfile?: boolean | StudentProfile$motherProfileArgs<ExtArgs>
    fatherProfile?: boolean | StudentProfile$fatherProfileArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    studentId?: boolean
    username?: boolean
    roomNumber?: boolean
    floorNumber?: boolean
    building?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    emergencyContact?: boolean
    medicalInfo?: boolean
    isAtHostel?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    motherProfileId?: boolean
    fatherProfileId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | StudentProfile$roomArgs<ExtArgs>
    motherProfile?: boolean | StudentProfile$motherProfileArgs<ExtArgs>
    fatherProfile?: boolean | StudentProfile$fatherProfileArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    studentId?: boolean
    username?: boolean
    roomNumber?: boolean
    floorNumber?: boolean
    building?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    emergencyContact?: boolean
    medicalInfo?: boolean
    isAtHostel?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    motherProfileId?: boolean
    fatherProfileId?: boolean
  }

  export type StudentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "studentId" | "username" | "roomNumber" | "floorNumber" | "building" | "checkInDate" | "checkOutDate" | "emergencyContact" | "medicalInfo" | "isAtHostel" | "profilePicture" | "createdAt" | "updatedAt" | "roomId" | "motherProfileId" | "fatherProfileId", ExtArgs["result"]["studentProfile"]>
  export type StudentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | StudentProfile$roomArgs<ExtArgs>
    motherProfile?: boolean | StudentProfile$motherProfileArgs<ExtArgs>
    fatherProfile?: boolean | StudentProfile$fatherProfileArgs<ExtArgs>
  }
  export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | StudentProfile$roomArgs<ExtArgs>
    motherProfile?: boolean | StudentProfile$motherProfileArgs<ExtArgs>
    fatherProfile?: boolean | StudentProfile$fatherProfileArgs<ExtArgs>
  }
  export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | StudentProfile$roomArgs<ExtArgs>
    motherProfile?: boolean | StudentProfile$motherProfileArgs<ExtArgs>
    fatherProfile?: boolean | StudentProfile$fatherProfileArgs<ExtArgs>
  }

  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs> | null
      motherProfile: Prisma.$ParentProfilePayload<ExtArgs> | null
      fatherProfile: Prisma.$ParentProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      studentId: string
      username: string | null
      roomNumber: string | null
      floorNumber: string | null
      building: string | null
      checkInDate: Date | null
      checkOutDate: Date | null
      emergencyContact: string | null
      medicalInfo: string | null
      isAtHostel: boolean
      profilePicture: string | null
      createdAt: Date
      updatedAt: Date
      roomId: string | null
      motherProfileId: string | null
      fatherProfileId: string | null
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends StudentProfile$roomArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    motherProfile<T extends StudentProfile$motherProfileArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$motherProfileArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fatherProfile<T extends StudentProfile$fatherProfileArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$fatherProfileArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentProfile model
   */
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'String'>
    readonly userId: FieldRef<"StudentProfile", 'String'>
    readonly studentId: FieldRef<"StudentProfile", 'String'>
    readonly username: FieldRef<"StudentProfile", 'String'>
    readonly roomNumber: FieldRef<"StudentProfile", 'String'>
    readonly floorNumber: FieldRef<"StudentProfile", 'String'>
    readonly building: FieldRef<"StudentProfile", 'String'>
    readonly checkInDate: FieldRef<"StudentProfile", 'DateTime'>
    readonly checkOutDate: FieldRef<"StudentProfile", 'DateTime'>
    readonly emergencyContact: FieldRef<"StudentProfile", 'String'>
    readonly medicalInfo: FieldRef<"StudentProfile", 'String'>
    readonly isAtHostel: FieldRef<"StudentProfile", 'Boolean'>
    readonly profilePicture: FieldRef<"StudentProfile", 'String'>
    readonly createdAt: FieldRef<"StudentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentProfile", 'DateTime'>
    readonly roomId: FieldRef<"StudentProfile", 'String'>
    readonly motherProfileId: FieldRef<"StudentProfile", 'String'>
    readonly fatherProfileId: FieldRef<"StudentProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile updateManyAndReturn
   */
  export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfile.room
   */
  export type StudentProfile$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * StudentProfile.motherProfile
   */
  export type StudentProfile$motherProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    where?: ParentProfileWhereInput
  }

  /**
   * StudentProfile.fatherProfile
   */
  export type StudentProfile$fatherProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    where?: ParentProfileWhereInput
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
  }


  /**
   * Model ParentProfile
   */

  export type AggregateParentProfile = {
    _count: ParentProfileCountAggregateOutputType | null
    _min: ParentProfileMinAggregateOutputType | null
    _max: ParentProfileMaxAggregateOutputType | null
  }

  export type ParentProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    emergencyContact: string | null
    relationship: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParentProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    emergencyContact: string | null
    relationship: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParentProfileCountAggregateOutputType = {
    id: number
    userId: number
    address: number
    emergencyContact: number
    relationship: number
    profilePicture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    emergencyContact?: true
    relationship?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    emergencyContact?: true
    relationship?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    emergencyContact?: true
    relationship?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentProfile to aggregate.
     */
    where?: ParentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentProfiles to fetch.
     */
    orderBy?: ParentProfileOrderByWithRelationInput | ParentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParentProfiles
    **/
    _count?: true | ParentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentProfileMaxAggregateInputType
  }

  export type GetParentProfileAggregateType<T extends ParentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateParentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParentProfile[P]>
      : GetScalarType<T[P], AggregateParentProfile[P]>
  }




  export type ParentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentProfileWhereInput
    orderBy?: ParentProfileOrderByWithAggregationInput | ParentProfileOrderByWithAggregationInput[]
    by: ParentProfileScalarFieldEnum[] | ParentProfileScalarFieldEnum
    having?: ParentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentProfileCountAggregateInputType | true
    _min?: ParentProfileMinAggregateInputType
    _max?: ParentProfileMaxAggregateInputType
  }

  export type ParentProfileGroupByOutputType = {
    id: string
    userId: string
    address: string | null
    emergencyContact: string | null
    relationship: string | null
    profilePicture: string | null
    createdAt: Date
    updatedAt: Date
    _count: ParentProfileCountAggregateOutputType | null
    _min: ParentProfileMinAggregateOutputType | null
    _max: ParentProfileMaxAggregateOutputType | null
  }

  type GetParentProfileGroupByPayload<T extends ParentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ParentProfileGroupByOutputType[P]>
        }
      >
    >


  export type ParentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    emergencyContact?: boolean
    relationship?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    childrenAsMother?: boolean | ParentProfile$childrenAsMotherArgs<ExtArgs>
    childrenAsFather?: boolean | ParentProfile$childrenAsFatherArgs<ExtArgs>
    _count?: boolean | ParentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentProfile"]>

  export type ParentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    emergencyContact?: boolean
    relationship?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentProfile"]>

  export type ParentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    emergencyContact?: boolean
    relationship?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentProfile"]>

  export type ParentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    address?: boolean
    emergencyContact?: boolean
    relationship?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "address" | "emergencyContact" | "relationship" | "profilePicture" | "createdAt" | "updatedAt", ExtArgs["result"]["parentProfile"]>
  export type ParentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    childrenAsMother?: boolean | ParentProfile$childrenAsMotherArgs<ExtArgs>
    childrenAsFather?: boolean | ParentProfile$childrenAsFatherArgs<ExtArgs>
    _count?: boolean | ParentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParentProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      childrenAsMother: Prisma.$StudentProfilePayload<ExtArgs>[]
      childrenAsFather: Prisma.$StudentProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      address: string | null
      emergencyContact: string | null
      relationship: string | null
      profilePicture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parentProfile"]>
    composites: {}
  }

  type ParentProfileGetPayload<S extends boolean | null | undefined | ParentProfileDefaultArgs> = $Result.GetResult<Prisma.$ParentProfilePayload, S>

  type ParentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentProfileCountAggregateInputType | true
    }

  export interface ParentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParentProfile'], meta: { name: 'ParentProfile' } }
    /**
     * Find zero or one ParentProfile that matches the filter.
     * @param {ParentProfileFindUniqueArgs} args - Arguments to find a ParentProfile
     * @example
     * // Get one ParentProfile
     * const parentProfile = await prisma.parentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentProfileFindUniqueArgs>(args: SelectSubset<T, ParentProfileFindUniqueArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentProfileFindUniqueOrThrowArgs} args - Arguments to find a ParentProfile
     * @example
     * // Get one ParentProfile
     * const parentProfile = await prisma.parentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentProfileFindFirstArgs} args - Arguments to find a ParentProfile
     * @example
     * // Get one ParentProfile
     * const parentProfile = await prisma.parentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentProfileFindFirstArgs>(args?: SelectSubset<T, ParentProfileFindFirstArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentProfileFindFirstOrThrowArgs} args - Arguments to find a ParentProfile
     * @example
     * // Get one ParentProfile
     * const parentProfile = await prisma.parentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParentProfiles
     * const parentProfiles = await prisma.parentProfile.findMany()
     * 
     * // Get first 10 ParentProfiles
     * const parentProfiles = await prisma.parentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentProfileWithIdOnly = await prisma.parentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentProfileFindManyArgs>(args?: SelectSubset<T, ParentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParentProfile.
     * @param {ParentProfileCreateArgs} args - Arguments to create a ParentProfile.
     * @example
     * // Create one ParentProfile
     * const ParentProfile = await prisma.parentProfile.create({
     *   data: {
     *     // ... data to create a ParentProfile
     *   }
     * })
     * 
     */
    create<T extends ParentProfileCreateArgs>(args: SelectSubset<T, ParentProfileCreateArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParentProfiles.
     * @param {ParentProfileCreateManyArgs} args - Arguments to create many ParentProfiles.
     * @example
     * // Create many ParentProfiles
     * const parentProfile = await prisma.parentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentProfileCreateManyArgs>(args?: SelectSubset<T, ParentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParentProfiles and returns the data saved in the database.
     * @param {ParentProfileCreateManyAndReturnArgs} args - Arguments to create many ParentProfiles.
     * @example
     * // Create many ParentProfiles
     * const parentProfile = await prisma.parentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParentProfiles and only return the `id`
     * const parentProfileWithIdOnly = await prisma.parentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParentProfile.
     * @param {ParentProfileDeleteArgs} args - Arguments to delete one ParentProfile.
     * @example
     * // Delete one ParentProfile
     * const ParentProfile = await prisma.parentProfile.delete({
     *   where: {
     *     // ... filter to delete one ParentProfile
     *   }
     * })
     * 
     */
    delete<T extends ParentProfileDeleteArgs>(args: SelectSubset<T, ParentProfileDeleteArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParentProfile.
     * @param {ParentProfileUpdateArgs} args - Arguments to update one ParentProfile.
     * @example
     * // Update one ParentProfile
     * const parentProfile = await prisma.parentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentProfileUpdateArgs>(args: SelectSubset<T, ParentProfileUpdateArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParentProfiles.
     * @param {ParentProfileDeleteManyArgs} args - Arguments to filter ParentProfiles to delete.
     * @example
     * // Delete a few ParentProfiles
     * const { count } = await prisma.parentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentProfileDeleteManyArgs>(args?: SelectSubset<T, ParentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParentProfiles
     * const parentProfile = await prisma.parentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentProfileUpdateManyArgs>(args: SelectSubset<T, ParentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentProfiles and returns the data updated in the database.
     * @param {ParentProfileUpdateManyAndReturnArgs} args - Arguments to update many ParentProfiles.
     * @example
     * // Update many ParentProfiles
     * const parentProfile = await prisma.parentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParentProfiles and only return the `id`
     * const parentProfileWithIdOnly = await prisma.parentProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParentProfile.
     * @param {ParentProfileUpsertArgs} args - Arguments to update or create a ParentProfile.
     * @example
     * // Update or create a ParentProfile
     * const parentProfile = await prisma.parentProfile.upsert({
     *   create: {
     *     // ... data to create a ParentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParentProfile we want to update
     *   }
     * })
     */
    upsert<T extends ParentProfileUpsertArgs>(args: SelectSubset<T, ParentProfileUpsertArgs<ExtArgs>>): Prisma__ParentProfileClient<$Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentProfileCountArgs} args - Arguments to filter ParentProfiles to count.
     * @example
     * // Count the number of ParentProfiles
     * const count = await prisma.parentProfile.count({
     *   where: {
     *     // ... the filter for the ParentProfiles we want to count
     *   }
     * })
    **/
    count<T extends ParentProfileCountArgs>(
      args?: Subset<T, ParentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParentProfileAggregateArgs>(args: Subset<T, ParentProfileAggregateArgs>): Prisma.PrismaPromise<GetParentProfileAggregateType<T>>

    /**
     * Group by ParentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentProfileGroupByArgs['orderBy'] }
        : { orderBy?: ParentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParentProfile model
   */
  readonly fields: ParentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    childrenAsMother<T extends ParentProfile$childrenAsMotherArgs<ExtArgs> = {}>(args?: Subset<T, ParentProfile$childrenAsMotherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    childrenAsFather<T extends ParentProfile$childrenAsFatherArgs<ExtArgs> = {}>(args?: Subset<T, ParentProfile$childrenAsFatherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParentProfile model
   */
  interface ParentProfileFieldRefs {
    readonly id: FieldRef<"ParentProfile", 'String'>
    readonly userId: FieldRef<"ParentProfile", 'String'>
    readonly address: FieldRef<"ParentProfile", 'String'>
    readonly emergencyContact: FieldRef<"ParentProfile", 'String'>
    readonly relationship: FieldRef<"ParentProfile", 'String'>
    readonly profilePicture: FieldRef<"ParentProfile", 'String'>
    readonly createdAt: FieldRef<"ParentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"ParentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParentProfile findUnique
   */
  export type ParentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParentProfile to fetch.
     */
    where: ParentProfileWhereUniqueInput
  }

  /**
   * ParentProfile findUniqueOrThrow
   */
  export type ParentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParentProfile to fetch.
     */
    where: ParentProfileWhereUniqueInput
  }

  /**
   * ParentProfile findFirst
   */
  export type ParentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParentProfile to fetch.
     */
    where?: ParentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentProfiles to fetch.
     */
    orderBy?: ParentProfileOrderByWithRelationInput | ParentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentProfiles.
     */
    cursor?: ParentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentProfiles.
     */
    distinct?: ParentProfileScalarFieldEnum | ParentProfileScalarFieldEnum[]
  }

  /**
   * ParentProfile findFirstOrThrow
   */
  export type ParentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParentProfile to fetch.
     */
    where?: ParentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentProfiles to fetch.
     */
    orderBy?: ParentProfileOrderByWithRelationInput | ParentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentProfiles.
     */
    cursor?: ParentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentProfiles.
     */
    distinct?: ParentProfileScalarFieldEnum | ParentProfileScalarFieldEnum[]
  }

  /**
   * ParentProfile findMany
   */
  export type ParentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParentProfiles to fetch.
     */
    where?: ParentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentProfiles to fetch.
     */
    orderBy?: ParentProfileOrderByWithRelationInput | ParentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParentProfiles.
     */
    cursor?: ParentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentProfiles.
     */
    skip?: number
    distinct?: ParentProfileScalarFieldEnum | ParentProfileScalarFieldEnum[]
  }

  /**
   * ParentProfile create
   */
  export type ParentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ParentProfile.
     */
    data: XOR<ParentProfileCreateInput, ParentProfileUncheckedCreateInput>
  }

  /**
   * ParentProfile createMany
   */
  export type ParentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParentProfiles.
     */
    data: ParentProfileCreateManyInput | ParentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParentProfile createManyAndReturn
   */
  export type ParentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ParentProfiles.
     */
    data: ParentProfileCreateManyInput | ParentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentProfile update
   */
  export type ParentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ParentProfile.
     */
    data: XOR<ParentProfileUpdateInput, ParentProfileUncheckedUpdateInput>
    /**
     * Choose, which ParentProfile to update.
     */
    where: ParentProfileWhereUniqueInput
  }

  /**
   * ParentProfile updateMany
   */
  export type ParentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParentProfiles.
     */
    data: XOR<ParentProfileUpdateManyMutationInput, ParentProfileUncheckedUpdateManyInput>
    /**
     * Filter which ParentProfiles to update
     */
    where?: ParentProfileWhereInput
    /**
     * Limit how many ParentProfiles to update.
     */
    limit?: number
  }

  /**
   * ParentProfile updateManyAndReturn
   */
  export type ParentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * The data used to update ParentProfiles.
     */
    data: XOR<ParentProfileUpdateManyMutationInput, ParentProfileUncheckedUpdateManyInput>
    /**
     * Filter which ParentProfiles to update
     */
    where?: ParentProfileWhereInput
    /**
     * Limit how many ParentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentProfile upsert
   */
  export type ParentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ParentProfile to update in case it exists.
     */
    where: ParentProfileWhereUniqueInput
    /**
     * In case the ParentProfile found by the `where` argument doesn't exist, create a new ParentProfile with this data.
     */
    create: XOR<ParentProfileCreateInput, ParentProfileUncheckedCreateInput>
    /**
     * In case the ParentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentProfileUpdateInput, ParentProfileUncheckedUpdateInput>
  }

  /**
   * ParentProfile delete
   */
  export type ParentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
    /**
     * Filter which ParentProfile to delete.
     */
    where: ParentProfileWhereUniqueInput
  }

  /**
   * ParentProfile deleteMany
   */
  export type ParentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentProfiles to delete
     */
    where?: ParentProfileWhereInput
    /**
     * Limit how many ParentProfiles to delete.
     */
    limit?: number
  }

  /**
   * ParentProfile.childrenAsMother
   */
  export type ParentProfile$childrenAsMotherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    cursor?: StudentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * ParentProfile.childrenAsFather
   */
  export type ParentProfile$childrenAsFatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    cursor?: StudentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * ParentProfile without action
   */
  export type ParentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: ParentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: ParentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentProfileInclude<ExtArgs> | null
  }


  /**
   * Model WardenProfile
   */

  export type AggregateWardenProfile = {
    _count: WardenProfileCountAggregateOutputType | null
    _min: WardenProfileMinAggregateOutputType | null
    _max: WardenProfileMaxAggregateOutputType | null
  }

  export type WardenProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    assignedBuilding: string | null
    wardNumber: string | null
    responsibilities: string | null
    shiftHours: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WardenProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    assignedBuilding: string | null
    wardNumber: string | null
    responsibilities: string | null
    shiftHours: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WardenProfileCountAggregateOutputType = {
    id: number
    userId: number
    assignedBuilding: number
    wardNumber: number
    responsibilities: number
    shiftHours: number
    profilePicture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WardenProfileMinAggregateInputType = {
    id?: true
    userId?: true
    assignedBuilding?: true
    wardNumber?: true
    responsibilities?: true
    shiftHours?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WardenProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    assignedBuilding?: true
    wardNumber?: true
    responsibilities?: true
    shiftHours?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WardenProfileCountAggregateInputType = {
    id?: true
    userId?: true
    assignedBuilding?: true
    wardNumber?: true
    responsibilities?: true
    shiftHours?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WardenProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WardenProfile to aggregate.
     */
    where?: WardenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardenProfiles to fetch.
     */
    orderBy?: WardenProfileOrderByWithRelationInput | WardenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WardenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardenProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WardenProfiles
    **/
    _count?: true | WardenProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WardenProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WardenProfileMaxAggregateInputType
  }

  export type GetWardenProfileAggregateType<T extends WardenProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateWardenProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWardenProfile[P]>
      : GetScalarType<T[P], AggregateWardenProfile[P]>
  }




  export type WardenProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WardenProfileWhereInput
    orderBy?: WardenProfileOrderByWithAggregationInput | WardenProfileOrderByWithAggregationInput[]
    by: WardenProfileScalarFieldEnum[] | WardenProfileScalarFieldEnum
    having?: WardenProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WardenProfileCountAggregateInputType | true
    _min?: WardenProfileMinAggregateInputType
    _max?: WardenProfileMaxAggregateInputType
  }

  export type WardenProfileGroupByOutputType = {
    id: string
    userId: string
    assignedBuilding: string | null
    wardNumber: string | null
    responsibilities: string | null
    shiftHours: string | null
    profilePicture: string | null
    createdAt: Date
    updatedAt: Date
    _count: WardenProfileCountAggregateOutputType | null
    _min: WardenProfileMinAggregateOutputType | null
    _max: WardenProfileMaxAggregateOutputType | null
  }

  type GetWardenProfileGroupByPayload<T extends WardenProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WardenProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WardenProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WardenProfileGroupByOutputType[P]>
            : GetScalarType<T[P], WardenProfileGroupByOutputType[P]>
        }
      >
    >


  export type WardenProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assignedBuilding?: boolean
    wardNumber?: boolean
    responsibilities?: boolean
    shiftHours?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wardenProfile"]>

  export type WardenProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assignedBuilding?: boolean
    wardNumber?: boolean
    responsibilities?: boolean
    shiftHours?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wardenProfile"]>

  export type WardenProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assignedBuilding?: boolean
    wardNumber?: boolean
    responsibilities?: boolean
    shiftHours?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wardenProfile"]>

  export type WardenProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    assignedBuilding?: boolean
    wardNumber?: boolean
    responsibilities?: boolean
    shiftHours?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WardenProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "assignedBuilding" | "wardNumber" | "responsibilities" | "shiftHours" | "profilePicture" | "createdAt" | "updatedAt", ExtArgs["result"]["wardenProfile"]>
  export type WardenProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WardenProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WardenProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WardenProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WardenProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      assignedBuilding: string | null
      wardNumber: string | null
      responsibilities: string | null
      shiftHours: string | null
      profilePicture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wardenProfile"]>
    composites: {}
  }

  type WardenProfileGetPayload<S extends boolean | null | undefined | WardenProfileDefaultArgs> = $Result.GetResult<Prisma.$WardenProfilePayload, S>

  type WardenProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WardenProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WardenProfileCountAggregateInputType | true
    }

  export interface WardenProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WardenProfile'], meta: { name: 'WardenProfile' } }
    /**
     * Find zero or one WardenProfile that matches the filter.
     * @param {WardenProfileFindUniqueArgs} args - Arguments to find a WardenProfile
     * @example
     * // Get one WardenProfile
     * const wardenProfile = await prisma.wardenProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WardenProfileFindUniqueArgs>(args: SelectSubset<T, WardenProfileFindUniqueArgs<ExtArgs>>): Prisma__WardenProfileClient<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WardenProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WardenProfileFindUniqueOrThrowArgs} args - Arguments to find a WardenProfile
     * @example
     * // Get one WardenProfile
     * const wardenProfile = await prisma.wardenProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WardenProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, WardenProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WardenProfileClient<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WardenProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenProfileFindFirstArgs} args - Arguments to find a WardenProfile
     * @example
     * // Get one WardenProfile
     * const wardenProfile = await prisma.wardenProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WardenProfileFindFirstArgs>(args?: SelectSubset<T, WardenProfileFindFirstArgs<ExtArgs>>): Prisma__WardenProfileClient<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WardenProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenProfileFindFirstOrThrowArgs} args - Arguments to find a WardenProfile
     * @example
     * // Get one WardenProfile
     * const wardenProfile = await prisma.wardenProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WardenProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, WardenProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__WardenProfileClient<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WardenProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WardenProfiles
     * const wardenProfiles = await prisma.wardenProfile.findMany()
     * 
     * // Get first 10 WardenProfiles
     * const wardenProfiles = await prisma.wardenProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wardenProfileWithIdOnly = await prisma.wardenProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WardenProfileFindManyArgs>(args?: SelectSubset<T, WardenProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WardenProfile.
     * @param {WardenProfileCreateArgs} args - Arguments to create a WardenProfile.
     * @example
     * // Create one WardenProfile
     * const WardenProfile = await prisma.wardenProfile.create({
     *   data: {
     *     // ... data to create a WardenProfile
     *   }
     * })
     * 
     */
    create<T extends WardenProfileCreateArgs>(args: SelectSubset<T, WardenProfileCreateArgs<ExtArgs>>): Prisma__WardenProfileClient<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WardenProfiles.
     * @param {WardenProfileCreateManyArgs} args - Arguments to create many WardenProfiles.
     * @example
     * // Create many WardenProfiles
     * const wardenProfile = await prisma.wardenProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WardenProfileCreateManyArgs>(args?: SelectSubset<T, WardenProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WardenProfiles and returns the data saved in the database.
     * @param {WardenProfileCreateManyAndReturnArgs} args - Arguments to create many WardenProfiles.
     * @example
     * // Create many WardenProfiles
     * const wardenProfile = await prisma.wardenProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WardenProfiles and only return the `id`
     * const wardenProfileWithIdOnly = await prisma.wardenProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WardenProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, WardenProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WardenProfile.
     * @param {WardenProfileDeleteArgs} args - Arguments to delete one WardenProfile.
     * @example
     * // Delete one WardenProfile
     * const WardenProfile = await prisma.wardenProfile.delete({
     *   where: {
     *     // ... filter to delete one WardenProfile
     *   }
     * })
     * 
     */
    delete<T extends WardenProfileDeleteArgs>(args: SelectSubset<T, WardenProfileDeleteArgs<ExtArgs>>): Prisma__WardenProfileClient<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WardenProfile.
     * @param {WardenProfileUpdateArgs} args - Arguments to update one WardenProfile.
     * @example
     * // Update one WardenProfile
     * const wardenProfile = await prisma.wardenProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WardenProfileUpdateArgs>(args: SelectSubset<T, WardenProfileUpdateArgs<ExtArgs>>): Prisma__WardenProfileClient<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WardenProfiles.
     * @param {WardenProfileDeleteManyArgs} args - Arguments to filter WardenProfiles to delete.
     * @example
     * // Delete a few WardenProfiles
     * const { count } = await prisma.wardenProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WardenProfileDeleteManyArgs>(args?: SelectSubset<T, WardenProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WardenProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WardenProfiles
     * const wardenProfile = await prisma.wardenProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WardenProfileUpdateManyArgs>(args: SelectSubset<T, WardenProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WardenProfiles and returns the data updated in the database.
     * @param {WardenProfileUpdateManyAndReturnArgs} args - Arguments to update many WardenProfiles.
     * @example
     * // Update many WardenProfiles
     * const wardenProfile = await prisma.wardenProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WardenProfiles and only return the `id`
     * const wardenProfileWithIdOnly = await prisma.wardenProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WardenProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, WardenProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WardenProfile.
     * @param {WardenProfileUpsertArgs} args - Arguments to update or create a WardenProfile.
     * @example
     * // Update or create a WardenProfile
     * const wardenProfile = await prisma.wardenProfile.upsert({
     *   create: {
     *     // ... data to create a WardenProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WardenProfile we want to update
     *   }
     * })
     */
    upsert<T extends WardenProfileUpsertArgs>(args: SelectSubset<T, WardenProfileUpsertArgs<ExtArgs>>): Prisma__WardenProfileClient<$Result.GetResult<Prisma.$WardenProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WardenProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenProfileCountArgs} args - Arguments to filter WardenProfiles to count.
     * @example
     * // Count the number of WardenProfiles
     * const count = await prisma.wardenProfile.count({
     *   where: {
     *     // ... the filter for the WardenProfiles we want to count
     *   }
     * })
    **/
    count<T extends WardenProfileCountArgs>(
      args?: Subset<T, WardenProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WardenProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WardenProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WardenProfileAggregateArgs>(args: Subset<T, WardenProfileAggregateArgs>): Prisma.PrismaPromise<GetWardenProfileAggregateType<T>>

    /**
     * Group by WardenProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WardenProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WardenProfileGroupByArgs['orderBy'] }
        : { orderBy?: WardenProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WardenProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWardenProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WardenProfile model
   */
  readonly fields: WardenProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WardenProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WardenProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WardenProfile model
   */
  interface WardenProfileFieldRefs {
    readonly id: FieldRef<"WardenProfile", 'String'>
    readonly userId: FieldRef<"WardenProfile", 'String'>
    readonly assignedBuilding: FieldRef<"WardenProfile", 'String'>
    readonly wardNumber: FieldRef<"WardenProfile", 'String'>
    readonly responsibilities: FieldRef<"WardenProfile", 'String'>
    readonly shiftHours: FieldRef<"WardenProfile", 'String'>
    readonly profilePicture: FieldRef<"WardenProfile", 'String'>
    readonly createdAt: FieldRef<"WardenProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"WardenProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WardenProfile findUnique
   */
  export type WardenProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which WardenProfile to fetch.
     */
    where: WardenProfileWhereUniqueInput
  }

  /**
   * WardenProfile findUniqueOrThrow
   */
  export type WardenProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which WardenProfile to fetch.
     */
    where: WardenProfileWhereUniqueInput
  }

  /**
   * WardenProfile findFirst
   */
  export type WardenProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which WardenProfile to fetch.
     */
    where?: WardenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardenProfiles to fetch.
     */
    orderBy?: WardenProfileOrderByWithRelationInput | WardenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WardenProfiles.
     */
    cursor?: WardenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardenProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WardenProfiles.
     */
    distinct?: WardenProfileScalarFieldEnum | WardenProfileScalarFieldEnum[]
  }

  /**
   * WardenProfile findFirstOrThrow
   */
  export type WardenProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which WardenProfile to fetch.
     */
    where?: WardenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardenProfiles to fetch.
     */
    orderBy?: WardenProfileOrderByWithRelationInput | WardenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WardenProfiles.
     */
    cursor?: WardenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardenProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WardenProfiles.
     */
    distinct?: WardenProfileScalarFieldEnum | WardenProfileScalarFieldEnum[]
  }

  /**
   * WardenProfile findMany
   */
  export type WardenProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which WardenProfiles to fetch.
     */
    where?: WardenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardenProfiles to fetch.
     */
    orderBy?: WardenProfileOrderByWithRelationInput | WardenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WardenProfiles.
     */
    cursor?: WardenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardenProfiles.
     */
    skip?: number
    distinct?: WardenProfileScalarFieldEnum | WardenProfileScalarFieldEnum[]
  }

  /**
   * WardenProfile create
   */
  export type WardenProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a WardenProfile.
     */
    data: XOR<WardenProfileCreateInput, WardenProfileUncheckedCreateInput>
  }

  /**
   * WardenProfile createMany
   */
  export type WardenProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WardenProfiles.
     */
    data: WardenProfileCreateManyInput | WardenProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WardenProfile createManyAndReturn
   */
  export type WardenProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * The data used to create many WardenProfiles.
     */
    data: WardenProfileCreateManyInput | WardenProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WardenProfile update
   */
  export type WardenProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a WardenProfile.
     */
    data: XOR<WardenProfileUpdateInput, WardenProfileUncheckedUpdateInput>
    /**
     * Choose, which WardenProfile to update.
     */
    where: WardenProfileWhereUniqueInput
  }

  /**
   * WardenProfile updateMany
   */
  export type WardenProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WardenProfiles.
     */
    data: XOR<WardenProfileUpdateManyMutationInput, WardenProfileUncheckedUpdateManyInput>
    /**
     * Filter which WardenProfiles to update
     */
    where?: WardenProfileWhereInput
    /**
     * Limit how many WardenProfiles to update.
     */
    limit?: number
  }

  /**
   * WardenProfile updateManyAndReturn
   */
  export type WardenProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * The data used to update WardenProfiles.
     */
    data: XOR<WardenProfileUpdateManyMutationInput, WardenProfileUncheckedUpdateManyInput>
    /**
     * Filter which WardenProfiles to update
     */
    where?: WardenProfileWhereInput
    /**
     * Limit how many WardenProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WardenProfile upsert
   */
  export type WardenProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the WardenProfile to update in case it exists.
     */
    where: WardenProfileWhereUniqueInput
    /**
     * In case the WardenProfile found by the `where` argument doesn't exist, create a new WardenProfile with this data.
     */
    create: XOR<WardenProfileCreateInput, WardenProfileUncheckedCreateInput>
    /**
     * In case the WardenProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WardenProfileUpdateInput, WardenProfileUncheckedUpdateInput>
  }

  /**
   * WardenProfile delete
   */
  export type WardenProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
    /**
     * Filter which WardenProfile to delete.
     */
    where: WardenProfileWhereUniqueInput
  }

  /**
   * WardenProfile deleteMany
   */
  export type WardenProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WardenProfiles to delete
     */
    where?: WardenProfileWhereInput
    /**
     * Limit how many WardenProfiles to delete.
     */
    limit?: number
  }

  /**
   * WardenProfile without action
   */
  export type WardenProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenProfile
     */
    select?: WardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenProfile
     */
    omit?: WardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenProfileInclude<ExtArgs> | null
  }


  /**
   * Model ChiefWardenProfile
   */

  export type AggregateChiefWardenProfile = {
    _count: ChiefWardenProfileCountAggregateOutputType | null
    _min: ChiefWardenProfileMinAggregateOutputType | null
    _max: ChiefWardenProfileMaxAggregateOutputType | null
  }

  export type ChiefWardenProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    department: string | null
    responsibilities: string | null
    adminLevel: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChiefWardenProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    department: string | null
    responsibilities: string | null
    adminLevel: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChiefWardenProfileCountAggregateOutputType = {
    id: number
    userId: number
    department: number
    responsibilities: number
    adminLevel: number
    profilePicture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChiefWardenProfileMinAggregateInputType = {
    id?: true
    userId?: true
    department?: true
    responsibilities?: true
    adminLevel?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChiefWardenProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    department?: true
    responsibilities?: true
    adminLevel?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChiefWardenProfileCountAggregateInputType = {
    id?: true
    userId?: true
    department?: true
    responsibilities?: true
    adminLevel?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChiefWardenProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChiefWardenProfile to aggregate.
     */
    where?: ChiefWardenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiefWardenProfiles to fetch.
     */
    orderBy?: ChiefWardenProfileOrderByWithRelationInput | ChiefWardenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChiefWardenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiefWardenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiefWardenProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChiefWardenProfiles
    **/
    _count?: true | ChiefWardenProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChiefWardenProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChiefWardenProfileMaxAggregateInputType
  }

  export type GetChiefWardenProfileAggregateType<T extends ChiefWardenProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateChiefWardenProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChiefWardenProfile[P]>
      : GetScalarType<T[P], AggregateChiefWardenProfile[P]>
  }




  export type ChiefWardenProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiefWardenProfileWhereInput
    orderBy?: ChiefWardenProfileOrderByWithAggregationInput | ChiefWardenProfileOrderByWithAggregationInput[]
    by: ChiefWardenProfileScalarFieldEnum[] | ChiefWardenProfileScalarFieldEnum
    having?: ChiefWardenProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChiefWardenProfileCountAggregateInputType | true
    _min?: ChiefWardenProfileMinAggregateInputType
    _max?: ChiefWardenProfileMaxAggregateInputType
  }

  export type ChiefWardenProfileGroupByOutputType = {
    id: string
    userId: string
    department: string | null
    responsibilities: string | null
    adminLevel: string | null
    profilePicture: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChiefWardenProfileCountAggregateOutputType | null
    _min: ChiefWardenProfileMinAggregateOutputType | null
    _max: ChiefWardenProfileMaxAggregateOutputType | null
  }

  type GetChiefWardenProfileGroupByPayload<T extends ChiefWardenProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChiefWardenProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChiefWardenProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChiefWardenProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ChiefWardenProfileGroupByOutputType[P]>
        }
      >
    >


  export type ChiefWardenProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    department?: boolean
    responsibilities?: boolean
    adminLevel?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chiefWardenProfile"]>

  export type ChiefWardenProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    department?: boolean
    responsibilities?: boolean
    adminLevel?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chiefWardenProfile"]>

  export type ChiefWardenProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    department?: boolean
    responsibilities?: boolean
    adminLevel?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chiefWardenProfile"]>

  export type ChiefWardenProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    department?: boolean
    responsibilities?: boolean
    adminLevel?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChiefWardenProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "department" | "responsibilities" | "adminLevel" | "profilePicture" | "createdAt" | "updatedAt", ExtArgs["result"]["chiefWardenProfile"]>
  export type ChiefWardenProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChiefWardenProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChiefWardenProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChiefWardenProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChiefWardenProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      department: string | null
      responsibilities: string | null
      adminLevel: string | null
      profilePicture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chiefWardenProfile"]>
    composites: {}
  }

  type ChiefWardenProfileGetPayload<S extends boolean | null | undefined | ChiefWardenProfileDefaultArgs> = $Result.GetResult<Prisma.$ChiefWardenProfilePayload, S>

  type ChiefWardenProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChiefWardenProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChiefWardenProfileCountAggregateInputType | true
    }

  export interface ChiefWardenProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChiefWardenProfile'], meta: { name: 'ChiefWardenProfile' } }
    /**
     * Find zero or one ChiefWardenProfile that matches the filter.
     * @param {ChiefWardenProfileFindUniqueArgs} args - Arguments to find a ChiefWardenProfile
     * @example
     * // Get one ChiefWardenProfile
     * const chiefWardenProfile = await prisma.chiefWardenProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChiefWardenProfileFindUniqueArgs>(args: SelectSubset<T, ChiefWardenProfileFindUniqueArgs<ExtArgs>>): Prisma__ChiefWardenProfileClient<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChiefWardenProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChiefWardenProfileFindUniqueOrThrowArgs} args - Arguments to find a ChiefWardenProfile
     * @example
     * // Get one ChiefWardenProfile
     * const chiefWardenProfile = await prisma.chiefWardenProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChiefWardenProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ChiefWardenProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChiefWardenProfileClient<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChiefWardenProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiefWardenProfileFindFirstArgs} args - Arguments to find a ChiefWardenProfile
     * @example
     * // Get one ChiefWardenProfile
     * const chiefWardenProfile = await prisma.chiefWardenProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChiefWardenProfileFindFirstArgs>(args?: SelectSubset<T, ChiefWardenProfileFindFirstArgs<ExtArgs>>): Prisma__ChiefWardenProfileClient<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChiefWardenProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiefWardenProfileFindFirstOrThrowArgs} args - Arguments to find a ChiefWardenProfile
     * @example
     * // Get one ChiefWardenProfile
     * const chiefWardenProfile = await prisma.chiefWardenProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChiefWardenProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ChiefWardenProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChiefWardenProfileClient<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChiefWardenProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiefWardenProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChiefWardenProfiles
     * const chiefWardenProfiles = await prisma.chiefWardenProfile.findMany()
     * 
     * // Get first 10 ChiefWardenProfiles
     * const chiefWardenProfiles = await prisma.chiefWardenProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chiefWardenProfileWithIdOnly = await prisma.chiefWardenProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChiefWardenProfileFindManyArgs>(args?: SelectSubset<T, ChiefWardenProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChiefWardenProfile.
     * @param {ChiefWardenProfileCreateArgs} args - Arguments to create a ChiefWardenProfile.
     * @example
     * // Create one ChiefWardenProfile
     * const ChiefWardenProfile = await prisma.chiefWardenProfile.create({
     *   data: {
     *     // ... data to create a ChiefWardenProfile
     *   }
     * })
     * 
     */
    create<T extends ChiefWardenProfileCreateArgs>(args: SelectSubset<T, ChiefWardenProfileCreateArgs<ExtArgs>>): Prisma__ChiefWardenProfileClient<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChiefWardenProfiles.
     * @param {ChiefWardenProfileCreateManyArgs} args - Arguments to create many ChiefWardenProfiles.
     * @example
     * // Create many ChiefWardenProfiles
     * const chiefWardenProfile = await prisma.chiefWardenProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChiefWardenProfileCreateManyArgs>(args?: SelectSubset<T, ChiefWardenProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChiefWardenProfiles and returns the data saved in the database.
     * @param {ChiefWardenProfileCreateManyAndReturnArgs} args - Arguments to create many ChiefWardenProfiles.
     * @example
     * // Create many ChiefWardenProfiles
     * const chiefWardenProfile = await prisma.chiefWardenProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChiefWardenProfiles and only return the `id`
     * const chiefWardenProfileWithIdOnly = await prisma.chiefWardenProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChiefWardenProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ChiefWardenProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChiefWardenProfile.
     * @param {ChiefWardenProfileDeleteArgs} args - Arguments to delete one ChiefWardenProfile.
     * @example
     * // Delete one ChiefWardenProfile
     * const ChiefWardenProfile = await prisma.chiefWardenProfile.delete({
     *   where: {
     *     // ... filter to delete one ChiefWardenProfile
     *   }
     * })
     * 
     */
    delete<T extends ChiefWardenProfileDeleteArgs>(args: SelectSubset<T, ChiefWardenProfileDeleteArgs<ExtArgs>>): Prisma__ChiefWardenProfileClient<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChiefWardenProfile.
     * @param {ChiefWardenProfileUpdateArgs} args - Arguments to update one ChiefWardenProfile.
     * @example
     * // Update one ChiefWardenProfile
     * const chiefWardenProfile = await prisma.chiefWardenProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChiefWardenProfileUpdateArgs>(args: SelectSubset<T, ChiefWardenProfileUpdateArgs<ExtArgs>>): Prisma__ChiefWardenProfileClient<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChiefWardenProfiles.
     * @param {ChiefWardenProfileDeleteManyArgs} args - Arguments to filter ChiefWardenProfiles to delete.
     * @example
     * // Delete a few ChiefWardenProfiles
     * const { count } = await prisma.chiefWardenProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChiefWardenProfileDeleteManyArgs>(args?: SelectSubset<T, ChiefWardenProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChiefWardenProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiefWardenProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChiefWardenProfiles
     * const chiefWardenProfile = await prisma.chiefWardenProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChiefWardenProfileUpdateManyArgs>(args: SelectSubset<T, ChiefWardenProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChiefWardenProfiles and returns the data updated in the database.
     * @param {ChiefWardenProfileUpdateManyAndReturnArgs} args - Arguments to update many ChiefWardenProfiles.
     * @example
     * // Update many ChiefWardenProfiles
     * const chiefWardenProfile = await prisma.chiefWardenProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChiefWardenProfiles and only return the `id`
     * const chiefWardenProfileWithIdOnly = await prisma.chiefWardenProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChiefWardenProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ChiefWardenProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChiefWardenProfile.
     * @param {ChiefWardenProfileUpsertArgs} args - Arguments to update or create a ChiefWardenProfile.
     * @example
     * // Update or create a ChiefWardenProfile
     * const chiefWardenProfile = await prisma.chiefWardenProfile.upsert({
     *   create: {
     *     // ... data to create a ChiefWardenProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChiefWardenProfile we want to update
     *   }
     * })
     */
    upsert<T extends ChiefWardenProfileUpsertArgs>(args: SelectSubset<T, ChiefWardenProfileUpsertArgs<ExtArgs>>): Prisma__ChiefWardenProfileClient<$Result.GetResult<Prisma.$ChiefWardenProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChiefWardenProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiefWardenProfileCountArgs} args - Arguments to filter ChiefWardenProfiles to count.
     * @example
     * // Count the number of ChiefWardenProfiles
     * const count = await prisma.chiefWardenProfile.count({
     *   where: {
     *     // ... the filter for the ChiefWardenProfiles we want to count
     *   }
     * })
    **/
    count<T extends ChiefWardenProfileCountArgs>(
      args?: Subset<T, ChiefWardenProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChiefWardenProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChiefWardenProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiefWardenProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChiefWardenProfileAggregateArgs>(args: Subset<T, ChiefWardenProfileAggregateArgs>): Prisma.PrismaPromise<GetChiefWardenProfileAggregateType<T>>

    /**
     * Group by ChiefWardenProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiefWardenProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChiefWardenProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChiefWardenProfileGroupByArgs['orderBy'] }
        : { orderBy?: ChiefWardenProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChiefWardenProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChiefWardenProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChiefWardenProfile model
   */
  readonly fields: ChiefWardenProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChiefWardenProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChiefWardenProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChiefWardenProfile model
   */
  interface ChiefWardenProfileFieldRefs {
    readonly id: FieldRef<"ChiefWardenProfile", 'String'>
    readonly userId: FieldRef<"ChiefWardenProfile", 'String'>
    readonly department: FieldRef<"ChiefWardenProfile", 'String'>
    readonly responsibilities: FieldRef<"ChiefWardenProfile", 'String'>
    readonly adminLevel: FieldRef<"ChiefWardenProfile", 'String'>
    readonly profilePicture: FieldRef<"ChiefWardenProfile", 'String'>
    readonly createdAt: FieldRef<"ChiefWardenProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"ChiefWardenProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChiefWardenProfile findUnique
   */
  export type ChiefWardenProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChiefWardenProfile to fetch.
     */
    where: ChiefWardenProfileWhereUniqueInput
  }

  /**
   * ChiefWardenProfile findUniqueOrThrow
   */
  export type ChiefWardenProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChiefWardenProfile to fetch.
     */
    where: ChiefWardenProfileWhereUniqueInput
  }

  /**
   * ChiefWardenProfile findFirst
   */
  export type ChiefWardenProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChiefWardenProfile to fetch.
     */
    where?: ChiefWardenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiefWardenProfiles to fetch.
     */
    orderBy?: ChiefWardenProfileOrderByWithRelationInput | ChiefWardenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChiefWardenProfiles.
     */
    cursor?: ChiefWardenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiefWardenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiefWardenProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChiefWardenProfiles.
     */
    distinct?: ChiefWardenProfileScalarFieldEnum | ChiefWardenProfileScalarFieldEnum[]
  }

  /**
   * ChiefWardenProfile findFirstOrThrow
   */
  export type ChiefWardenProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChiefWardenProfile to fetch.
     */
    where?: ChiefWardenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiefWardenProfiles to fetch.
     */
    orderBy?: ChiefWardenProfileOrderByWithRelationInput | ChiefWardenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChiefWardenProfiles.
     */
    cursor?: ChiefWardenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiefWardenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiefWardenProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChiefWardenProfiles.
     */
    distinct?: ChiefWardenProfileScalarFieldEnum | ChiefWardenProfileScalarFieldEnum[]
  }

  /**
   * ChiefWardenProfile findMany
   */
  export type ChiefWardenProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChiefWardenProfiles to fetch.
     */
    where?: ChiefWardenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiefWardenProfiles to fetch.
     */
    orderBy?: ChiefWardenProfileOrderByWithRelationInput | ChiefWardenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChiefWardenProfiles.
     */
    cursor?: ChiefWardenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiefWardenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiefWardenProfiles.
     */
    skip?: number
    distinct?: ChiefWardenProfileScalarFieldEnum | ChiefWardenProfileScalarFieldEnum[]
  }

  /**
   * ChiefWardenProfile create
   */
  export type ChiefWardenProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ChiefWardenProfile.
     */
    data: XOR<ChiefWardenProfileCreateInput, ChiefWardenProfileUncheckedCreateInput>
  }

  /**
   * ChiefWardenProfile createMany
   */
  export type ChiefWardenProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChiefWardenProfiles.
     */
    data: ChiefWardenProfileCreateManyInput | ChiefWardenProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChiefWardenProfile createManyAndReturn
   */
  export type ChiefWardenProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ChiefWardenProfiles.
     */
    data: ChiefWardenProfileCreateManyInput | ChiefWardenProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChiefWardenProfile update
   */
  export type ChiefWardenProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ChiefWardenProfile.
     */
    data: XOR<ChiefWardenProfileUpdateInput, ChiefWardenProfileUncheckedUpdateInput>
    /**
     * Choose, which ChiefWardenProfile to update.
     */
    where: ChiefWardenProfileWhereUniqueInput
  }

  /**
   * ChiefWardenProfile updateMany
   */
  export type ChiefWardenProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChiefWardenProfiles.
     */
    data: XOR<ChiefWardenProfileUpdateManyMutationInput, ChiefWardenProfileUncheckedUpdateManyInput>
    /**
     * Filter which ChiefWardenProfiles to update
     */
    where?: ChiefWardenProfileWhereInput
    /**
     * Limit how many ChiefWardenProfiles to update.
     */
    limit?: number
  }

  /**
   * ChiefWardenProfile updateManyAndReturn
   */
  export type ChiefWardenProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * The data used to update ChiefWardenProfiles.
     */
    data: XOR<ChiefWardenProfileUpdateManyMutationInput, ChiefWardenProfileUncheckedUpdateManyInput>
    /**
     * Filter which ChiefWardenProfiles to update
     */
    where?: ChiefWardenProfileWhereInput
    /**
     * Limit how many ChiefWardenProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChiefWardenProfile upsert
   */
  export type ChiefWardenProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ChiefWardenProfile to update in case it exists.
     */
    where: ChiefWardenProfileWhereUniqueInput
    /**
     * In case the ChiefWardenProfile found by the `where` argument doesn't exist, create a new ChiefWardenProfile with this data.
     */
    create: XOR<ChiefWardenProfileCreateInput, ChiefWardenProfileUncheckedCreateInput>
    /**
     * In case the ChiefWardenProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChiefWardenProfileUpdateInput, ChiefWardenProfileUncheckedUpdateInput>
  }

  /**
   * ChiefWardenProfile delete
   */
  export type ChiefWardenProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
    /**
     * Filter which ChiefWardenProfile to delete.
     */
    where: ChiefWardenProfileWhereUniqueInput
  }

  /**
   * ChiefWardenProfile deleteMany
   */
  export type ChiefWardenProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChiefWardenProfiles to delete
     */
    where?: ChiefWardenProfileWhereInput
    /**
     * Limit how many ChiefWardenProfiles to delete.
     */
    limit?: number
  }

  /**
   * ChiefWardenProfile without action
   */
  export type ChiefWardenProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiefWardenProfile
     */
    select?: ChiefWardenProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiefWardenProfile
     */
    omit?: ChiefWardenProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiefWardenProfileInclude<ExtArgs> | null
  }


  /**
   * Model MatronProfile
   */

  export type AggregateMatronProfile = {
    _count: MatronProfileCountAggregateOutputType | null
    _min: MatronProfileMinAggregateOutputType | null
    _max: MatronProfileMaxAggregateOutputType | null
  }

  export type MatronProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    employeeId: string | null
    department: string | null
    responsibilities: string | null
    shiftStartTime: string | null
    shiftEndTime: string | null
    isActive: boolean | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatronProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    employeeId: string | null
    department: string | null
    responsibilities: string | null
    shiftStartTime: string | null
    shiftEndTime: string | null
    isActive: boolean | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatronProfileCountAggregateOutputType = {
    id: number
    userId: number
    employeeId: number
    department: number
    responsibilities: number
    shiftStartTime: number
    shiftEndTime: number
    isActive: number
    profilePicture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatronProfileMinAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    department?: true
    responsibilities?: true
    shiftStartTime?: true
    shiftEndTime?: true
    isActive?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatronProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    department?: true
    responsibilities?: true
    shiftStartTime?: true
    shiftEndTime?: true
    isActive?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatronProfileCountAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    department?: true
    responsibilities?: true
    shiftStartTime?: true
    shiftEndTime?: true
    isActive?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatronProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatronProfile to aggregate.
     */
    where?: MatronProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatronProfiles to fetch.
     */
    orderBy?: MatronProfileOrderByWithRelationInput | MatronProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatronProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatronProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatronProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatronProfiles
    **/
    _count?: true | MatronProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatronProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatronProfileMaxAggregateInputType
  }

  export type GetMatronProfileAggregateType<T extends MatronProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMatronProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatronProfile[P]>
      : GetScalarType<T[P], AggregateMatronProfile[P]>
  }




  export type MatronProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatronProfileWhereInput
    orderBy?: MatronProfileOrderByWithAggregationInput | MatronProfileOrderByWithAggregationInput[]
    by: MatronProfileScalarFieldEnum[] | MatronProfileScalarFieldEnum
    having?: MatronProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatronProfileCountAggregateInputType | true
    _min?: MatronProfileMinAggregateInputType
    _max?: MatronProfileMaxAggregateInputType
  }

  export type MatronProfileGroupByOutputType = {
    id: string
    userId: string
    employeeId: string
    department: string | null
    responsibilities: string | null
    shiftStartTime: string | null
    shiftEndTime: string | null
    isActive: boolean
    profilePicture: string | null
    createdAt: Date
    updatedAt: Date
    _count: MatronProfileCountAggregateOutputType | null
    _min: MatronProfileMinAggregateOutputType | null
    _max: MatronProfileMaxAggregateOutputType | null
  }

  type GetMatronProfileGroupByPayload<T extends MatronProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatronProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatronProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatronProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MatronProfileGroupByOutputType[P]>
        }
      >
    >


  export type MatronProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    department?: boolean
    responsibilities?: boolean
    shiftStartTime?: boolean
    shiftEndTime?: boolean
    isActive?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matronProfile"]>

  export type MatronProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    department?: boolean
    responsibilities?: boolean
    shiftStartTime?: boolean
    shiftEndTime?: boolean
    isActive?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matronProfile"]>

  export type MatronProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    department?: boolean
    responsibilities?: boolean
    shiftStartTime?: boolean
    shiftEndTime?: boolean
    isActive?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matronProfile"]>

  export type MatronProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    department?: boolean
    responsibilities?: boolean
    shiftStartTime?: boolean
    shiftEndTime?: boolean
    isActive?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatronProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "employeeId" | "department" | "responsibilities" | "shiftStartTime" | "shiftEndTime" | "isActive" | "profilePicture" | "createdAt" | "updatedAt", ExtArgs["result"]["matronProfile"]>
  export type MatronProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatronProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatronProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatronProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatronProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      employeeId: string
      department: string | null
      responsibilities: string | null
      shiftStartTime: string | null
      shiftEndTime: string | null
      isActive: boolean
      profilePicture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matronProfile"]>
    composites: {}
  }

  type MatronProfileGetPayload<S extends boolean | null | undefined | MatronProfileDefaultArgs> = $Result.GetResult<Prisma.$MatronProfilePayload, S>

  type MatronProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatronProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatronProfileCountAggregateInputType | true
    }

  export interface MatronProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatronProfile'], meta: { name: 'MatronProfile' } }
    /**
     * Find zero or one MatronProfile that matches the filter.
     * @param {MatronProfileFindUniqueArgs} args - Arguments to find a MatronProfile
     * @example
     * // Get one MatronProfile
     * const matronProfile = await prisma.matronProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatronProfileFindUniqueArgs>(args: SelectSubset<T, MatronProfileFindUniqueArgs<ExtArgs>>): Prisma__MatronProfileClient<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatronProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatronProfileFindUniqueOrThrowArgs} args - Arguments to find a MatronProfile
     * @example
     * // Get one MatronProfile
     * const matronProfile = await prisma.matronProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatronProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MatronProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatronProfileClient<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatronProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatronProfileFindFirstArgs} args - Arguments to find a MatronProfile
     * @example
     * // Get one MatronProfile
     * const matronProfile = await prisma.matronProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatronProfileFindFirstArgs>(args?: SelectSubset<T, MatronProfileFindFirstArgs<ExtArgs>>): Prisma__MatronProfileClient<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatronProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatronProfileFindFirstOrThrowArgs} args - Arguments to find a MatronProfile
     * @example
     * // Get one MatronProfile
     * const matronProfile = await prisma.matronProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatronProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MatronProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatronProfileClient<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatronProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatronProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatronProfiles
     * const matronProfiles = await prisma.matronProfile.findMany()
     * 
     * // Get first 10 MatronProfiles
     * const matronProfiles = await prisma.matronProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matronProfileWithIdOnly = await prisma.matronProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatronProfileFindManyArgs>(args?: SelectSubset<T, MatronProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatronProfile.
     * @param {MatronProfileCreateArgs} args - Arguments to create a MatronProfile.
     * @example
     * // Create one MatronProfile
     * const MatronProfile = await prisma.matronProfile.create({
     *   data: {
     *     // ... data to create a MatronProfile
     *   }
     * })
     * 
     */
    create<T extends MatronProfileCreateArgs>(args: SelectSubset<T, MatronProfileCreateArgs<ExtArgs>>): Prisma__MatronProfileClient<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatronProfiles.
     * @param {MatronProfileCreateManyArgs} args - Arguments to create many MatronProfiles.
     * @example
     * // Create many MatronProfiles
     * const matronProfile = await prisma.matronProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatronProfileCreateManyArgs>(args?: SelectSubset<T, MatronProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatronProfiles and returns the data saved in the database.
     * @param {MatronProfileCreateManyAndReturnArgs} args - Arguments to create many MatronProfiles.
     * @example
     * // Create many MatronProfiles
     * const matronProfile = await prisma.matronProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatronProfiles and only return the `id`
     * const matronProfileWithIdOnly = await prisma.matronProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatronProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MatronProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatronProfile.
     * @param {MatronProfileDeleteArgs} args - Arguments to delete one MatronProfile.
     * @example
     * // Delete one MatronProfile
     * const MatronProfile = await prisma.matronProfile.delete({
     *   where: {
     *     // ... filter to delete one MatronProfile
     *   }
     * })
     * 
     */
    delete<T extends MatronProfileDeleteArgs>(args: SelectSubset<T, MatronProfileDeleteArgs<ExtArgs>>): Prisma__MatronProfileClient<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatronProfile.
     * @param {MatronProfileUpdateArgs} args - Arguments to update one MatronProfile.
     * @example
     * // Update one MatronProfile
     * const matronProfile = await prisma.matronProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatronProfileUpdateArgs>(args: SelectSubset<T, MatronProfileUpdateArgs<ExtArgs>>): Prisma__MatronProfileClient<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatronProfiles.
     * @param {MatronProfileDeleteManyArgs} args - Arguments to filter MatronProfiles to delete.
     * @example
     * // Delete a few MatronProfiles
     * const { count } = await prisma.matronProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatronProfileDeleteManyArgs>(args?: SelectSubset<T, MatronProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatronProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatronProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatronProfiles
     * const matronProfile = await prisma.matronProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatronProfileUpdateManyArgs>(args: SelectSubset<T, MatronProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatronProfiles and returns the data updated in the database.
     * @param {MatronProfileUpdateManyAndReturnArgs} args - Arguments to update many MatronProfiles.
     * @example
     * // Update many MatronProfiles
     * const matronProfile = await prisma.matronProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatronProfiles and only return the `id`
     * const matronProfileWithIdOnly = await prisma.matronProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatronProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, MatronProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatronProfile.
     * @param {MatronProfileUpsertArgs} args - Arguments to update or create a MatronProfile.
     * @example
     * // Update or create a MatronProfile
     * const matronProfile = await prisma.matronProfile.upsert({
     *   create: {
     *     // ... data to create a MatronProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatronProfile we want to update
     *   }
     * })
     */
    upsert<T extends MatronProfileUpsertArgs>(args: SelectSubset<T, MatronProfileUpsertArgs<ExtArgs>>): Prisma__MatronProfileClient<$Result.GetResult<Prisma.$MatronProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatronProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatronProfileCountArgs} args - Arguments to filter MatronProfiles to count.
     * @example
     * // Count the number of MatronProfiles
     * const count = await prisma.matronProfile.count({
     *   where: {
     *     // ... the filter for the MatronProfiles we want to count
     *   }
     * })
    **/
    count<T extends MatronProfileCountArgs>(
      args?: Subset<T, MatronProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatronProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatronProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatronProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatronProfileAggregateArgs>(args: Subset<T, MatronProfileAggregateArgs>): Prisma.PrismaPromise<GetMatronProfileAggregateType<T>>

    /**
     * Group by MatronProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatronProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatronProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatronProfileGroupByArgs['orderBy'] }
        : { orderBy?: MatronProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatronProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatronProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatronProfile model
   */
  readonly fields: MatronProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatronProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatronProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatronProfile model
   */
  interface MatronProfileFieldRefs {
    readonly id: FieldRef<"MatronProfile", 'String'>
    readonly userId: FieldRef<"MatronProfile", 'String'>
    readonly employeeId: FieldRef<"MatronProfile", 'String'>
    readonly department: FieldRef<"MatronProfile", 'String'>
    readonly responsibilities: FieldRef<"MatronProfile", 'String'>
    readonly shiftStartTime: FieldRef<"MatronProfile", 'String'>
    readonly shiftEndTime: FieldRef<"MatronProfile", 'String'>
    readonly isActive: FieldRef<"MatronProfile", 'Boolean'>
    readonly profilePicture: FieldRef<"MatronProfile", 'String'>
    readonly createdAt: FieldRef<"MatronProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"MatronProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatronProfile findUnique
   */
  export type MatronProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    /**
     * Filter, which MatronProfile to fetch.
     */
    where: MatronProfileWhereUniqueInput
  }

  /**
   * MatronProfile findUniqueOrThrow
   */
  export type MatronProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    /**
     * Filter, which MatronProfile to fetch.
     */
    where: MatronProfileWhereUniqueInput
  }

  /**
   * MatronProfile findFirst
   */
  export type MatronProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    /**
     * Filter, which MatronProfile to fetch.
     */
    where?: MatronProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatronProfiles to fetch.
     */
    orderBy?: MatronProfileOrderByWithRelationInput | MatronProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatronProfiles.
     */
    cursor?: MatronProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatronProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatronProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatronProfiles.
     */
    distinct?: MatronProfileScalarFieldEnum | MatronProfileScalarFieldEnum[]
  }

  /**
   * MatronProfile findFirstOrThrow
   */
  export type MatronProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    /**
     * Filter, which MatronProfile to fetch.
     */
    where?: MatronProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatronProfiles to fetch.
     */
    orderBy?: MatronProfileOrderByWithRelationInput | MatronProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatronProfiles.
     */
    cursor?: MatronProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatronProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatronProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatronProfiles.
     */
    distinct?: MatronProfileScalarFieldEnum | MatronProfileScalarFieldEnum[]
  }

  /**
   * MatronProfile findMany
   */
  export type MatronProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    /**
     * Filter, which MatronProfiles to fetch.
     */
    where?: MatronProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatronProfiles to fetch.
     */
    orderBy?: MatronProfileOrderByWithRelationInput | MatronProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatronProfiles.
     */
    cursor?: MatronProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatronProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatronProfiles.
     */
    skip?: number
    distinct?: MatronProfileScalarFieldEnum | MatronProfileScalarFieldEnum[]
  }

  /**
   * MatronProfile create
   */
  export type MatronProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MatronProfile.
     */
    data: XOR<MatronProfileCreateInput, MatronProfileUncheckedCreateInput>
  }

  /**
   * MatronProfile createMany
   */
  export type MatronProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatronProfiles.
     */
    data: MatronProfileCreateManyInput | MatronProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatronProfile createManyAndReturn
   */
  export type MatronProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * The data used to create many MatronProfiles.
     */
    data: MatronProfileCreateManyInput | MatronProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatronProfile update
   */
  export type MatronProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MatronProfile.
     */
    data: XOR<MatronProfileUpdateInput, MatronProfileUncheckedUpdateInput>
    /**
     * Choose, which MatronProfile to update.
     */
    where: MatronProfileWhereUniqueInput
  }

  /**
   * MatronProfile updateMany
   */
  export type MatronProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatronProfiles.
     */
    data: XOR<MatronProfileUpdateManyMutationInput, MatronProfileUncheckedUpdateManyInput>
    /**
     * Filter which MatronProfiles to update
     */
    where?: MatronProfileWhereInput
    /**
     * Limit how many MatronProfiles to update.
     */
    limit?: number
  }

  /**
   * MatronProfile updateManyAndReturn
   */
  export type MatronProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * The data used to update MatronProfiles.
     */
    data: XOR<MatronProfileUpdateManyMutationInput, MatronProfileUncheckedUpdateManyInput>
    /**
     * Filter which MatronProfiles to update
     */
    where?: MatronProfileWhereInput
    /**
     * Limit how many MatronProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatronProfile upsert
   */
  export type MatronProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MatronProfile to update in case it exists.
     */
    where: MatronProfileWhereUniqueInput
    /**
     * In case the MatronProfile found by the `where` argument doesn't exist, create a new MatronProfile with this data.
     */
    create: XOR<MatronProfileCreateInput, MatronProfileUncheckedCreateInput>
    /**
     * In case the MatronProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatronProfileUpdateInput, MatronProfileUncheckedUpdateInput>
  }

  /**
   * MatronProfile delete
   */
  export type MatronProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
    /**
     * Filter which MatronProfile to delete.
     */
    where: MatronProfileWhereUniqueInput
  }

  /**
   * MatronProfile deleteMany
   */
  export type MatronProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatronProfiles to delete
     */
    where?: MatronProfileWhereInput
    /**
     * Limit how many MatronProfiles to delete.
     */
    limit?: number
  }

  /**
   * MatronProfile without action
   */
  export type MatronProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatronProfile
     */
    select?: MatronProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatronProfile
     */
    omit?: MatronProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatronProfileInclude<ExtArgs> | null
  }


  /**
   * Model MessageThread
   */

  export type AggregateMessageThread = {
    _count: MessageThreadCountAggregateOutputType | null
    _min: MessageThreadMinAggregateOutputType | null
    _max: MessageThreadMaxAggregateOutputType | null
  }

  export type MessageThreadMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastMessageAt: Date | null
  }

  export type MessageThreadMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastMessageAt: Date | null
  }

  export type MessageThreadCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    lastMessageAt: number
    participantIds: number
    _all: number
  }


  export type MessageThreadMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    lastMessageAt?: true
  }

  export type MessageThreadMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    lastMessageAt?: true
  }

  export type MessageThreadCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    lastMessageAt?: true
    participantIds?: true
    _all?: true
  }

  export type MessageThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageThread to aggregate.
     */
    where?: MessageThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageThreads to fetch.
     */
    orderBy?: MessageThreadOrderByWithRelationInput | MessageThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageThreads
    **/
    _count?: true | MessageThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageThreadMaxAggregateInputType
  }

  export type GetMessageThreadAggregateType<T extends MessageThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageThread[P]>
      : GetScalarType<T[P], AggregateMessageThread[P]>
  }




  export type MessageThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageThreadWhereInput
    orderBy?: MessageThreadOrderByWithAggregationInput | MessageThreadOrderByWithAggregationInput[]
    by: MessageThreadScalarFieldEnum[] | MessageThreadScalarFieldEnum
    having?: MessageThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageThreadCountAggregateInputType | true
    _min?: MessageThreadMinAggregateInputType
    _max?: MessageThreadMaxAggregateInputType
  }

  export type MessageThreadGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    lastMessageAt: Date
    participantIds: string[]
    _count: MessageThreadCountAggregateOutputType | null
    _min: MessageThreadMinAggregateOutputType | null
    _max: MessageThreadMaxAggregateOutputType | null
  }

  type GetMessageThreadGroupByPayload<T extends MessageThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageThreadGroupByOutputType[P]>
            : GetScalarType<T[P], MessageThreadGroupByOutputType[P]>
        }
      >
    >


  export type MessageThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessageAt?: boolean
    participantIds?: boolean
    messages?: boolean | MessageThread$messagesArgs<ExtArgs>
    _count?: boolean | MessageThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageThread"]>

  export type MessageThreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessageAt?: boolean
    participantIds?: boolean
  }, ExtArgs["result"]["messageThread"]>

  export type MessageThreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessageAt?: boolean
    participantIds?: boolean
  }, ExtArgs["result"]["messageThread"]>

  export type MessageThreadSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastMessageAt?: boolean
    participantIds?: boolean
  }

  export type MessageThreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "lastMessageAt" | "participantIds", ExtArgs["result"]["messageThread"]>
  export type MessageThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | MessageThread$messagesArgs<ExtArgs>
    _count?: boolean | MessageThreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageThreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MessageThreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MessageThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageThread"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      lastMessageAt: Date
      participantIds: string[]
    }, ExtArgs["result"]["messageThread"]>
    composites: {}
  }

  type MessageThreadGetPayload<S extends boolean | null | undefined | MessageThreadDefaultArgs> = $Result.GetResult<Prisma.$MessageThreadPayload, S>

  type MessageThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageThreadCountAggregateInputType | true
    }

  export interface MessageThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageThread'], meta: { name: 'MessageThread' } }
    /**
     * Find zero or one MessageThread that matches the filter.
     * @param {MessageThreadFindUniqueArgs} args - Arguments to find a MessageThread
     * @example
     * // Get one MessageThread
     * const messageThread = await prisma.messageThread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageThreadFindUniqueArgs>(args: SelectSubset<T, MessageThreadFindUniqueArgs<ExtArgs>>): Prisma__MessageThreadClient<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageThread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageThreadFindUniqueOrThrowArgs} args - Arguments to find a MessageThread
     * @example
     * // Get one MessageThread
     * const messageThread = await prisma.messageThread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageThreadFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageThreadClient<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageThread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageThreadFindFirstArgs} args - Arguments to find a MessageThread
     * @example
     * // Get one MessageThread
     * const messageThread = await prisma.messageThread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageThreadFindFirstArgs>(args?: SelectSubset<T, MessageThreadFindFirstArgs<ExtArgs>>): Prisma__MessageThreadClient<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageThread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageThreadFindFirstOrThrowArgs} args - Arguments to find a MessageThread
     * @example
     * // Get one MessageThread
     * const messageThread = await prisma.messageThread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageThreadFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageThreadClient<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageThreads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageThreads
     * const messageThreads = await prisma.messageThread.findMany()
     * 
     * // Get first 10 MessageThreads
     * const messageThreads = await prisma.messageThread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageThreadWithIdOnly = await prisma.messageThread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageThreadFindManyArgs>(args?: SelectSubset<T, MessageThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageThread.
     * @param {MessageThreadCreateArgs} args - Arguments to create a MessageThread.
     * @example
     * // Create one MessageThread
     * const MessageThread = await prisma.messageThread.create({
     *   data: {
     *     // ... data to create a MessageThread
     *   }
     * })
     * 
     */
    create<T extends MessageThreadCreateArgs>(args: SelectSubset<T, MessageThreadCreateArgs<ExtArgs>>): Prisma__MessageThreadClient<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageThreads.
     * @param {MessageThreadCreateManyArgs} args - Arguments to create many MessageThreads.
     * @example
     * // Create many MessageThreads
     * const messageThread = await prisma.messageThread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageThreadCreateManyArgs>(args?: SelectSubset<T, MessageThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageThreads and returns the data saved in the database.
     * @param {MessageThreadCreateManyAndReturnArgs} args - Arguments to create many MessageThreads.
     * @example
     * // Create many MessageThreads
     * const messageThread = await prisma.messageThread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageThreads and only return the `id`
     * const messageThreadWithIdOnly = await prisma.messageThread.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageThreadCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageThread.
     * @param {MessageThreadDeleteArgs} args - Arguments to delete one MessageThread.
     * @example
     * // Delete one MessageThread
     * const MessageThread = await prisma.messageThread.delete({
     *   where: {
     *     // ... filter to delete one MessageThread
     *   }
     * })
     * 
     */
    delete<T extends MessageThreadDeleteArgs>(args: SelectSubset<T, MessageThreadDeleteArgs<ExtArgs>>): Prisma__MessageThreadClient<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageThread.
     * @param {MessageThreadUpdateArgs} args - Arguments to update one MessageThread.
     * @example
     * // Update one MessageThread
     * const messageThread = await prisma.messageThread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageThreadUpdateArgs>(args: SelectSubset<T, MessageThreadUpdateArgs<ExtArgs>>): Prisma__MessageThreadClient<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageThreads.
     * @param {MessageThreadDeleteManyArgs} args - Arguments to filter MessageThreads to delete.
     * @example
     * // Delete a few MessageThreads
     * const { count } = await prisma.messageThread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageThreadDeleteManyArgs>(args?: SelectSubset<T, MessageThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageThreads
     * const messageThread = await prisma.messageThread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageThreadUpdateManyArgs>(args: SelectSubset<T, MessageThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageThreads and returns the data updated in the database.
     * @param {MessageThreadUpdateManyAndReturnArgs} args - Arguments to update many MessageThreads.
     * @example
     * // Update many MessageThreads
     * const messageThread = await prisma.messageThread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageThreads and only return the `id`
     * const messageThreadWithIdOnly = await prisma.messageThread.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageThreadUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageThread.
     * @param {MessageThreadUpsertArgs} args - Arguments to update or create a MessageThread.
     * @example
     * // Update or create a MessageThread
     * const messageThread = await prisma.messageThread.upsert({
     *   create: {
     *     // ... data to create a MessageThread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageThread we want to update
     *   }
     * })
     */
    upsert<T extends MessageThreadUpsertArgs>(args: SelectSubset<T, MessageThreadUpsertArgs<ExtArgs>>): Prisma__MessageThreadClient<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageThreadCountArgs} args - Arguments to filter MessageThreads to count.
     * @example
     * // Count the number of MessageThreads
     * const count = await prisma.messageThread.count({
     *   where: {
     *     // ... the filter for the MessageThreads we want to count
     *   }
     * })
    **/
    count<T extends MessageThreadCountArgs>(
      args?: Subset<T, MessageThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageThreadAggregateArgs>(args: Subset<T, MessageThreadAggregateArgs>): Prisma.PrismaPromise<GetMessageThreadAggregateType<T>>

    /**
     * Group by MessageThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageThreadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageThreadGroupByArgs['orderBy'] }
        : { orderBy?: MessageThreadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageThread model
   */
  readonly fields: MessageThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageThread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends MessageThread$messagesArgs<ExtArgs> = {}>(args?: Subset<T, MessageThread$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageThread model
   */
  interface MessageThreadFieldRefs {
    readonly id: FieldRef<"MessageThread", 'String'>
    readonly createdAt: FieldRef<"MessageThread", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageThread", 'DateTime'>
    readonly lastMessageAt: FieldRef<"MessageThread", 'DateTime'>
    readonly participantIds: FieldRef<"MessageThread", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * MessageThread findUnique
   */
  export type MessageThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
    /**
     * Filter, which MessageThread to fetch.
     */
    where: MessageThreadWhereUniqueInput
  }

  /**
   * MessageThread findUniqueOrThrow
   */
  export type MessageThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
    /**
     * Filter, which MessageThread to fetch.
     */
    where: MessageThreadWhereUniqueInput
  }

  /**
   * MessageThread findFirst
   */
  export type MessageThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
    /**
     * Filter, which MessageThread to fetch.
     */
    where?: MessageThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageThreads to fetch.
     */
    orderBy?: MessageThreadOrderByWithRelationInput | MessageThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageThreads.
     */
    cursor?: MessageThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageThreads.
     */
    distinct?: MessageThreadScalarFieldEnum | MessageThreadScalarFieldEnum[]
  }

  /**
   * MessageThread findFirstOrThrow
   */
  export type MessageThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
    /**
     * Filter, which MessageThread to fetch.
     */
    where?: MessageThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageThreads to fetch.
     */
    orderBy?: MessageThreadOrderByWithRelationInput | MessageThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageThreads.
     */
    cursor?: MessageThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageThreads.
     */
    distinct?: MessageThreadScalarFieldEnum | MessageThreadScalarFieldEnum[]
  }

  /**
   * MessageThread findMany
   */
  export type MessageThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
    /**
     * Filter, which MessageThreads to fetch.
     */
    where?: MessageThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageThreads to fetch.
     */
    orderBy?: MessageThreadOrderByWithRelationInput | MessageThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageThreads.
     */
    cursor?: MessageThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageThreads.
     */
    skip?: number
    distinct?: MessageThreadScalarFieldEnum | MessageThreadScalarFieldEnum[]
  }

  /**
   * MessageThread create
   */
  export type MessageThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageThread.
     */
    data: XOR<MessageThreadCreateInput, MessageThreadUncheckedCreateInput>
  }

  /**
   * MessageThread createMany
   */
  export type MessageThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageThreads.
     */
    data: MessageThreadCreateManyInput | MessageThreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageThread createManyAndReturn
   */
  export type MessageThreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * The data used to create many MessageThreads.
     */
    data: MessageThreadCreateManyInput | MessageThreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageThread update
   */
  export type MessageThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageThread.
     */
    data: XOR<MessageThreadUpdateInput, MessageThreadUncheckedUpdateInput>
    /**
     * Choose, which MessageThread to update.
     */
    where: MessageThreadWhereUniqueInput
  }

  /**
   * MessageThread updateMany
   */
  export type MessageThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageThreads.
     */
    data: XOR<MessageThreadUpdateManyMutationInput, MessageThreadUncheckedUpdateManyInput>
    /**
     * Filter which MessageThreads to update
     */
    where?: MessageThreadWhereInput
    /**
     * Limit how many MessageThreads to update.
     */
    limit?: number
  }

  /**
   * MessageThread updateManyAndReturn
   */
  export type MessageThreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * The data used to update MessageThreads.
     */
    data: XOR<MessageThreadUpdateManyMutationInput, MessageThreadUncheckedUpdateManyInput>
    /**
     * Filter which MessageThreads to update
     */
    where?: MessageThreadWhereInput
    /**
     * Limit how many MessageThreads to update.
     */
    limit?: number
  }

  /**
   * MessageThread upsert
   */
  export type MessageThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageThread to update in case it exists.
     */
    where: MessageThreadWhereUniqueInput
    /**
     * In case the MessageThread found by the `where` argument doesn't exist, create a new MessageThread with this data.
     */
    create: XOR<MessageThreadCreateInput, MessageThreadUncheckedCreateInput>
    /**
     * In case the MessageThread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageThreadUpdateInput, MessageThreadUncheckedUpdateInput>
  }

  /**
   * MessageThread delete
   */
  export type MessageThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
    /**
     * Filter which MessageThread to delete.
     */
    where: MessageThreadWhereUniqueInput
  }

  /**
   * MessageThread deleteMany
   */
  export type MessageThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageThreads to delete
     */
    where?: MessageThreadWhereInput
    /**
     * Limit how many MessageThreads to delete.
     */
    limit?: number
  }

  /**
   * MessageThread.messages
   */
  export type MessageThread$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * MessageThread without action
   */
  export type MessageThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageThread
     */
    select?: MessageThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageThread
     */
    omit?: MessageThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageThreadInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    senderId: string | null
    receiverId: string | null
    threadId: string | null
    isRead: boolean | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    senderId: string | null
    receiverId: string | null
    threadId: string | null
    isRead: boolean | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    senderId: number
    receiverId: number
    threadId: number
    isRead: number
    readAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    threadId?: true
    isRead?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    threadId?: true
    isRead?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    threadId?: true
    isRead?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    senderId: string
    receiverId: string
    threadId: string
    isRead: boolean
    readAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    threadId?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | MessageThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    threadId?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | MessageThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    threadId?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | MessageThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    threadId?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "senderId" | "receiverId" | "threadId" | "isRead" | "readAt" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | MessageThreadDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | MessageThreadDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | MessageThreadDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      thread: Prisma.$MessageThreadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      senderId: string
      receiverId: string
      threadId: string
      isRead: boolean
      readAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thread<T extends MessageThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageThreadDefaultArgs<ExtArgs>>): Prisma__MessageThreadClient<$Result.GetResult<Prisma.$MessageThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly threadId: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly readAt: FieldRef<"Message", 'DateTime'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    roomNumber: string | null
    floorNumber: string | null
    building: string | null
    capacity: number | null
    isOccupied: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    roomNumber: string | null
    floorNumber: string | null
    building: string | null
    capacity: number | null
    isOccupied: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    roomNumber: number
    floorNumber: number
    building: number
    capacity: number
    isOccupied: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    roomNumber?: true
    floorNumber?: true
    building?: true
    capacity?: true
    isOccupied?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    floorNumber?: true
    building?: true
    capacity?: true
    isOccupied?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    roomNumber?: true
    floorNumber?: true
    building?: true
    capacity?: true
    isOccupied?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    roomNumber: string
    floorNumber: string
    building: string
    capacity: number
    isOccupied: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    floorNumber?: boolean
    building?: boolean
    capacity?: boolean
    isOccupied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    students?: boolean | Room$studentsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    floorNumber?: boolean
    building?: boolean
    capacity?: boolean
    isOccupied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    floorNumber?: boolean
    building?: boolean
    capacity?: boolean
    isOccupied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    floorNumber?: boolean
    building?: boolean
    capacity?: boolean
    isOccupied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "floorNumber" | "building" | "capacity" | "isOccupied" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Room$studentsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      students: Prisma.$StudentProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomNumber: string
      floorNumber: string
      building: string
      capacity: number
      isOccupied: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Room$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Room$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly roomNumber: FieldRef<"Room", 'String'>
    readonly floorNumber: FieldRef<"Room", 'String'>
    readonly building: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly isOccupied: FieldRef<"Room", 'Boolean'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.students
   */
  export type Room$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    cursor?: StudentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    locationLatitude: number | null
    locationLongitude: number | null
    locationAccuracy: number | null
    parentLocationLatitude: number | null
    parentLocationLongitude: number | null
    parentLocationAccuracy: number | null
  }

  export type RequestSumAggregateOutputType = {
    locationLatitude: number | null
    locationLongitude: number | null
    locationAccuracy: number | null
    parentLocationLatitude: number | null
    parentLocationLongitude: number | null
    parentLocationAccuracy: number | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    type: $Enums.RequestType | null
    status: $Enums.RequestStatus | null
    reason: string | null
    requestedAt: Date | null
    expectedBack: Date | null
    studentId: string | null
    parentId: string | null
    approvedAt: Date | null
    approvedBy: string | null
    verificationPhotoUrl: string | null
    locationLatitude: number | null
    locationLongitude: number | null
    locationAccuracy: number | null
    locationAddress: string | null
    locationTimestamp: Date | null
    parentStatus: $Enums.RequestStatus | null
    parentApprovedAt: Date | null
    parentLocationLatitude: number | null
    parentLocationLongitude: number | null
    parentLocationAccuracy: number | null
    parentLocationAddress: string | null
    parentLocationTimestamp: Date | null
    isScaledUp: boolean | null
    scaledUpAt: Date | null
    scaledUpBy: string | null
    chiefWardenStatus: $Enums.RequestStatus | null
    chiefWardenApprovedAt: Date | null
    chiefWardenApprovedBy: string | null
    chiefWardenMessage: string | null
    confirmedByWarden: boolean | null
    confirmedByWardenAt: Date | null
    confirmedByWardenId: string | null
    confirmedByChiefWarden: boolean | null
    confirmedByChiefWardenAt: Date | null
    confirmedByChiefWardenId: string | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    type: $Enums.RequestType | null
    status: $Enums.RequestStatus | null
    reason: string | null
    requestedAt: Date | null
    expectedBack: Date | null
    studentId: string | null
    parentId: string | null
    approvedAt: Date | null
    approvedBy: string | null
    verificationPhotoUrl: string | null
    locationLatitude: number | null
    locationLongitude: number | null
    locationAccuracy: number | null
    locationAddress: string | null
    locationTimestamp: Date | null
    parentStatus: $Enums.RequestStatus | null
    parentApprovedAt: Date | null
    parentLocationLatitude: number | null
    parentLocationLongitude: number | null
    parentLocationAccuracy: number | null
    parentLocationAddress: string | null
    parentLocationTimestamp: Date | null
    isScaledUp: boolean | null
    scaledUpAt: Date | null
    scaledUpBy: string | null
    chiefWardenStatus: $Enums.RequestStatus | null
    chiefWardenApprovedAt: Date | null
    chiefWardenApprovedBy: string | null
    chiefWardenMessage: string | null
    confirmedByWarden: boolean | null
    confirmedByWardenAt: Date | null
    confirmedByWardenId: string | null
    confirmedByChiefWarden: boolean | null
    confirmedByChiefWardenAt: Date | null
    confirmedByChiefWardenId: string | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    type: number
    status: number
    reason: number
    requestedAt: number
    expectedBack: number
    studentId: number
    parentId: number
    approvedAt: number
    approvedBy: number
    verificationPhotoUrl: number
    locationLatitude: number
    locationLongitude: number
    locationAccuracy: number
    locationAddress: number
    locationTimestamp: number
    parentStatus: number
    parentApprovedAt: number
    parentLocationLatitude: number
    parentLocationLongitude: number
    parentLocationAccuracy: number
    parentLocationAddress: number
    parentLocationTimestamp: number
    isScaledUp: number
    scaledUpAt: number
    scaledUpBy: number
    chiefWardenStatus: number
    chiefWardenApprovedAt: number
    chiefWardenApprovedBy: number
    chiefWardenMessage: number
    confirmedByWarden: number
    confirmedByWardenAt: number
    confirmedByWardenId: number
    confirmedByChiefWarden: number
    confirmedByChiefWardenAt: number
    confirmedByChiefWardenId: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    locationLatitude?: true
    locationLongitude?: true
    locationAccuracy?: true
    parentLocationLatitude?: true
    parentLocationLongitude?: true
    parentLocationAccuracy?: true
  }

  export type RequestSumAggregateInputType = {
    locationLatitude?: true
    locationLongitude?: true
    locationAccuracy?: true
    parentLocationLatitude?: true
    parentLocationLongitude?: true
    parentLocationAccuracy?: true
  }

  export type RequestMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    reason?: true
    requestedAt?: true
    expectedBack?: true
    studentId?: true
    parentId?: true
    approvedAt?: true
    approvedBy?: true
    verificationPhotoUrl?: true
    locationLatitude?: true
    locationLongitude?: true
    locationAccuracy?: true
    locationAddress?: true
    locationTimestamp?: true
    parentStatus?: true
    parentApprovedAt?: true
    parentLocationLatitude?: true
    parentLocationLongitude?: true
    parentLocationAccuracy?: true
    parentLocationAddress?: true
    parentLocationTimestamp?: true
    isScaledUp?: true
    scaledUpAt?: true
    scaledUpBy?: true
    chiefWardenStatus?: true
    chiefWardenApprovedAt?: true
    chiefWardenApprovedBy?: true
    chiefWardenMessage?: true
    confirmedByWarden?: true
    confirmedByWardenAt?: true
    confirmedByWardenId?: true
    confirmedByChiefWarden?: true
    confirmedByChiefWardenAt?: true
    confirmedByChiefWardenId?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    reason?: true
    requestedAt?: true
    expectedBack?: true
    studentId?: true
    parentId?: true
    approvedAt?: true
    approvedBy?: true
    verificationPhotoUrl?: true
    locationLatitude?: true
    locationLongitude?: true
    locationAccuracy?: true
    locationAddress?: true
    locationTimestamp?: true
    parentStatus?: true
    parentApprovedAt?: true
    parentLocationLatitude?: true
    parentLocationLongitude?: true
    parentLocationAccuracy?: true
    parentLocationAddress?: true
    parentLocationTimestamp?: true
    isScaledUp?: true
    scaledUpAt?: true
    scaledUpBy?: true
    chiefWardenStatus?: true
    chiefWardenApprovedAt?: true
    chiefWardenApprovedBy?: true
    chiefWardenMessage?: true
    confirmedByWarden?: true
    confirmedByWardenAt?: true
    confirmedByWardenId?: true
    confirmedByChiefWarden?: true
    confirmedByChiefWardenAt?: true
    confirmedByChiefWardenId?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    reason?: true
    requestedAt?: true
    expectedBack?: true
    studentId?: true
    parentId?: true
    approvedAt?: true
    approvedBy?: true
    verificationPhotoUrl?: true
    locationLatitude?: true
    locationLongitude?: true
    locationAccuracy?: true
    locationAddress?: true
    locationTimestamp?: true
    parentStatus?: true
    parentApprovedAt?: true
    parentLocationLatitude?: true
    parentLocationLongitude?: true
    parentLocationAccuracy?: true
    parentLocationAddress?: true
    parentLocationTimestamp?: true
    isScaledUp?: true
    scaledUpAt?: true
    scaledUpBy?: true
    chiefWardenStatus?: true
    chiefWardenApprovedAt?: true
    chiefWardenApprovedBy?: true
    chiefWardenMessage?: true
    confirmedByWarden?: true
    confirmedByWardenAt?: true
    confirmedByWardenId?: true
    confirmedByChiefWarden?: true
    confirmedByChiefWardenAt?: true
    confirmedByChiefWardenId?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    type: $Enums.RequestType
    status: $Enums.RequestStatus
    reason: string | null
    requestedAt: Date
    expectedBack: Date | null
    studentId: string
    parentId: string | null
    approvedAt: Date | null
    approvedBy: string | null
    verificationPhotoUrl: string | null
    locationLatitude: number | null
    locationLongitude: number | null
    locationAccuracy: number | null
    locationAddress: string | null
    locationTimestamp: Date | null
    parentStatus: $Enums.RequestStatus
    parentApprovedAt: Date | null
    parentLocationLatitude: number | null
    parentLocationLongitude: number | null
    parentLocationAccuracy: number | null
    parentLocationAddress: string | null
    parentLocationTimestamp: Date | null
    isScaledUp: boolean
    scaledUpAt: Date | null
    scaledUpBy: string | null
    chiefWardenStatus: $Enums.RequestStatus | null
    chiefWardenApprovedAt: Date | null
    chiefWardenApprovedBy: string | null
    chiefWardenMessage: string | null
    confirmedByWarden: boolean
    confirmedByWardenAt: Date | null
    confirmedByWardenId: string | null
    confirmedByChiefWarden: boolean
    confirmedByChiefWardenAt: Date | null
    confirmedByChiefWardenId: string | null
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    requestedAt?: boolean
    expectedBack?: boolean
    studentId?: boolean
    parentId?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    verificationPhotoUrl?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    locationAccuracy?: boolean
    locationAddress?: boolean
    locationTimestamp?: boolean
    parentStatus?: boolean
    parentApprovedAt?: boolean
    parentLocationLatitude?: boolean
    parentLocationLongitude?: boolean
    parentLocationAccuracy?: boolean
    parentLocationAddress?: boolean
    parentLocationTimestamp?: boolean
    isScaledUp?: boolean
    scaledUpAt?: boolean
    scaledUpBy?: boolean
    chiefWardenStatus?: boolean
    chiefWardenApprovedAt?: boolean
    chiefWardenApprovedBy?: boolean
    chiefWardenMessage?: boolean
    confirmedByWarden?: boolean
    confirmedByWardenAt?: boolean
    confirmedByWardenId?: boolean
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: boolean
    confirmedByChiefWardenId?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Request$parentArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    requestedAt?: boolean
    expectedBack?: boolean
    studentId?: boolean
    parentId?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    verificationPhotoUrl?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    locationAccuracy?: boolean
    locationAddress?: boolean
    locationTimestamp?: boolean
    parentStatus?: boolean
    parentApprovedAt?: boolean
    parentLocationLatitude?: boolean
    parentLocationLongitude?: boolean
    parentLocationAccuracy?: boolean
    parentLocationAddress?: boolean
    parentLocationTimestamp?: boolean
    isScaledUp?: boolean
    scaledUpAt?: boolean
    scaledUpBy?: boolean
    chiefWardenStatus?: boolean
    chiefWardenApprovedAt?: boolean
    chiefWardenApprovedBy?: boolean
    chiefWardenMessage?: boolean
    confirmedByWarden?: boolean
    confirmedByWardenAt?: boolean
    confirmedByWardenId?: boolean
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: boolean
    confirmedByChiefWardenId?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Request$parentArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    requestedAt?: boolean
    expectedBack?: boolean
    studentId?: boolean
    parentId?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    verificationPhotoUrl?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    locationAccuracy?: boolean
    locationAddress?: boolean
    locationTimestamp?: boolean
    parentStatus?: boolean
    parentApprovedAt?: boolean
    parentLocationLatitude?: boolean
    parentLocationLongitude?: boolean
    parentLocationAccuracy?: boolean
    parentLocationAddress?: boolean
    parentLocationTimestamp?: boolean
    isScaledUp?: boolean
    scaledUpAt?: boolean
    scaledUpBy?: boolean
    chiefWardenStatus?: boolean
    chiefWardenApprovedAt?: boolean
    chiefWardenApprovedBy?: boolean
    chiefWardenMessage?: boolean
    confirmedByWarden?: boolean
    confirmedByWardenAt?: boolean
    confirmedByWardenId?: boolean
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: boolean
    confirmedByChiefWardenId?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Request$parentArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    requestedAt?: boolean
    expectedBack?: boolean
    studentId?: boolean
    parentId?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    verificationPhotoUrl?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    locationAccuracy?: boolean
    locationAddress?: boolean
    locationTimestamp?: boolean
    parentStatus?: boolean
    parentApprovedAt?: boolean
    parentLocationLatitude?: boolean
    parentLocationLongitude?: boolean
    parentLocationAccuracy?: boolean
    parentLocationAddress?: boolean
    parentLocationTimestamp?: boolean
    isScaledUp?: boolean
    scaledUpAt?: boolean
    scaledUpBy?: boolean
    chiefWardenStatus?: boolean
    chiefWardenApprovedAt?: boolean
    chiefWardenApprovedBy?: boolean
    chiefWardenMessage?: boolean
    confirmedByWarden?: boolean
    confirmedByWardenAt?: boolean
    confirmedByWardenId?: boolean
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: boolean
    confirmedByChiefWardenId?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "reason" | "requestedAt" | "expectedBack" | "studentId" | "parentId" | "approvedAt" | "approvedBy" | "verificationPhotoUrl" | "locationLatitude" | "locationLongitude" | "locationAccuracy" | "locationAddress" | "locationTimestamp" | "parentStatus" | "parentApprovedAt" | "parentLocationLatitude" | "parentLocationLongitude" | "parentLocationAccuracy" | "parentLocationAddress" | "parentLocationTimestamp" | "isScaledUp" | "scaledUpAt" | "scaledUpBy" | "chiefWardenStatus" | "chiefWardenApprovedAt" | "chiefWardenApprovedBy" | "chiefWardenMessage" | "confirmedByWarden" | "confirmedByWardenAt" | "confirmedByWardenId" | "confirmedByChiefWarden" | "confirmedByChiefWardenAt" | "confirmedByChiefWardenId", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Request$parentArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Request$parentArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Request$parentArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.RequestType
      status: $Enums.RequestStatus
      reason: string | null
      requestedAt: Date
      expectedBack: Date | null
      studentId: string
      parentId: string | null
      approvedAt: Date | null
      approvedBy: string | null
      verificationPhotoUrl: string | null
      locationLatitude: number | null
      locationLongitude: number | null
      locationAccuracy: number | null
      locationAddress: string | null
      locationTimestamp: Date | null
      parentStatus: $Enums.RequestStatus
      parentApprovedAt: Date | null
      parentLocationLatitude: number | null
      parentLocationLongitude: number | null
      parentLocationAccuracy: number | null
      parentLocationAddress: string | null
      parentLocationTimestamp: Date | null
      isScaledUp: boolean
      scaledUpAt: Date | null
      scaledUpBy: string | null
      chiefWardenStatus: $Enums.RequestStatus | null
      chiefWardenApprovedAt: Date | null
      chiefWardenApprovedBy: string | null
      chiefWardenMessage: string | null
      confirmedByWarden: boolean
      confirmedByWardenAt: Date | null
      confirmedByWardenId: string | null
      confirmedByChiefWarden: boolean
      confirmedByChiefWardenAt: Date | null
      confirmedByChiefWardenId: string | null
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Request$parentArgs<ExtArgs> = {}>(args?: Subset<T, Request$parentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly type: FieldRef<"Request", 'RequestType'>
    readonly status: FieldRef<"Request", 'RequestStatus'>
    readonly reason: FieldRef<"Request", 'String'>
    readonly requestedAt: FieldRef<"Request", 'DateTime'>
    readonly expectedBack: FieldRef<"Request", 'DateTime'>
    readonly studentId: FieldRef<"Request", 'String'>
    readonly parentId: FieldRef<"Request", 'String'>
    readonly approvedAt: FieldRef<"Request", 'DateTime'>
    readonly approvedBy: FieldRef<"Request", 'String'>
    readonly verificationPhotoUrl: FieldRef<"Request", 'String'>
    readonly locationLatitude: FieldRef<"Request", 'Float'>
    readonly locationLongitude: FieldRef<"Request", 'Float'>
    readonly locationAccuracy: FieldRef<"Request", 'Float'>
    readonly locationAddress: FieldRef<"Request", 'String'>
    readonly locationTimestamp: FieldRef<"Request", 'DateTime'>
    readonly parentStatus: FieldRef<"Request", 'RequestStatus'>
    readonly parentApprovedAt: FieldRef<"Request", 'DateTime'>
    readonly parentLocationLatitude: FieldRef<"Request", 'Float'>
    readonly parentLocationLongitude: FieldRef<"Request", 'Float'>
    readonly parentLocationAccuracy: FieldRef<"Request", 'Float'>
    readonly parentLocationAddress: FieldRef<"Request", 'String'>
    readonly parentLocationTimestamp: FieldRef<"Request", 'DateTime'>
    readonly isScaledUp: FieldRef<"Request", 'Boolean'>
    readonly scaledUpAt: FieldRef<"Request", 'DateTime'>
    readonly scaledUpBy: FieldRef<"Request", 'String'>
    readonly chiefWardenStatus: FieldRef<"Request", 'RequestStatus'>
    readonly chiefWardenApprovedAt: FieldRef<"Request", 'DateTime'>
    readonly chiefWardenApprovedBy: FieldRef<"Request", 'String'>
    readonly chiefWardenMessage: FieldRef<"Request", 'String'>
    readonly confirmedByWarden: FieldRef<"Request", 'Boolean'>
    readonly confirmedByWardenAt: FieldRef<"Request", 'DateTime'>
    readonly confirmedByWardenId: FieldRef<"Request", 'String'>
    readonly confirmedByChiefWarden: FieldRef<"Request", 'Boolean'>
    readonly confirmedByChiefWardenAt: FieldRef<"Request", 'DateTime'>
    readonly confirmedByChiefWardenId: FieldRef<"Request", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request.parent
   */
  export type Request$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model EmailNotification
   */

  export type AggregateEmailNotification = {
    _count: EmailNotificationCountAggregateOutputType | null
    _avg: EmailNotificationAvgAggregateOutputType | null
    _sum: EmailNotificationSumAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  export type EmailNotificationAvgAggregateOutputType = {
    retryCount: number | null
    maxRetries: number | null
  }

  export type EmailNotificationSumAggregateOutputType = {
    retryCount: number | null
    maxRetries: number | null
  }

  export type EmailNotificationMinAggregateOutputType = {
    id: string | null
    to: string | null
    subject: string | null
    content: string | null
    type: $Enums.EmailType | null
    status: $Enums.EmailStatus | null
    sentAt: Date | null
    failureReason: string | null
    retryCount: number | null
    maxRetries: number | null
    createdAt: Date | null
    updatedAt: Date | null
    relatedMessageId: string | null
    relatedRequestId: string | null
    relatedUserId: string | null
  }

  export type EmailNotificationMaxAggregateOutputType = {
    id: string | null
    to: string | null
    subject: string | null
    content: string | null
    type: $Enums.EmailType | null
    status: $Enums.EmailStatus | null
    sentAt: Date | null
    failureReason: string | null
    retryCount: number | null
    maxRetries: number | null
    createdAt: Date | null
    updatedAt: Date | null
    relatedMessageId: string | null
    relatedRequestId: string | null
    relatedUserId: string | null
  }

  export type EmailNotificationCountAggregateOutputType = {
    id: number
    to: number
    subject: number
    content: number
    type: number
    status: number
    sentAt: number
    failureReason: number
    retryCount: number
    maxRetries: number
    createdAt: number
    updatedAt: number
    relatedMessageId: number
    relatedRequestId: number
    relatedUserId: number
    _all: number
  }


  export type EmailNotificationAvgAggregateInputType = {
    retryCount?: true
    maxRetries?: true
  }

  export type EmailNotificationSumAggregateInputType = {
    retryCount?: true
    maxRetries?: true
  }

  export type EmailNotificationMinAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    content?: true
    type?: true
    status?: true
    sentAt?: true
    failureReason?: true
    retryCount?: true
    maxRetries?: true
    createdAt?: true
    updatedAt?: true
    relatedMessageId?: true
    relatedRequestId?: true
    relatedUserId?: true
  }

  export type EmailNotificationMaxAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    content?: true
    type?: true
    status?: true
    sentAt?: true
    failureReason?: true
    retryCount?: true
    maxRetries?: true
    createdAt?: true
    updatedAt?: true
    relatedMessageId?: true
    relatedRequestId?: true
    relatedUserId?: true
  }

  export type EmailNotificationCountAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    content?: true
    type?: true
    status?: true
    sentAt?: true
    failureReason?: true
    retryCount?: true
    maxRetries?: true
    createdAt?: true
    updatedAt?: true
    relatedMessageId?: true
    relatedRequestId?: true
    relatedUserId?: true
    _all?: true
  }

  export type EmailNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotification to aggregate.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailNotifications
    **/
    _count?: true | EmailNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailNotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailNotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type GetEmailNotificationAggregateType<T extends EmailNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailNotification[P]>
      : GetScalarType<T[P], AggregateEmailNotification[P]>
  }




  export type EmailNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailNotificationWhereInput
    orderBy?: EmailNotificationOrderByWithAggregationInput | EmailNotificationOrderByWithAggregationInput[]
    by: EmailNotificationScalarFieldEnum[] | EmailNotificationScalarFieldEnum
    having?: EmailNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailNotificationCountAggregateInputType | true
    _avg?: EmailNotificationAvgAggregateInputType
    _sum?: EmailNotificationSumAggregateInputType
    _min?: EmailNotificationMinAggregateInputType
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type EmailNotificationGroupByOutputType = {
    id: string
    to: string
    subject: string
    content: string
    type: $Enums.EmailType
    status: $Enums.EmailStatus
    sentAt: Date | null
    failureReason: string | null
    retryCount: number
    maxRetries: number
    createdAt: Date
    updatedAt: Date
    relatedMessageId: string | null
    relatedRequestId: string | null
    relatedUserId: string | null
    _count: EmailNotificationCountAggregateOutputType | null
    _avg: EmailNotificationAvgAggregateOutputType | null
    _sum: EmailNotificationSumAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  type GetEmailNotificationGroupByPayload<T extends EmailNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
        }
      >
    >


  export type EmailNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    content?: boolean
    type?: boolean
    status?: boolean
    sentAt?: boolean
    failureReason?: boolean
    retryCount?: boolean
    maxRetries?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    relatedMessageId?: boolean
    relatedRequestId?: boolean
    relatedUserId?: boolean
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    content?: boolean
    type?: boolean
    status?: boolean
    sentAt?: boolean
    failureReason?: boolean
    retryCount?: boolean
    maxRetries?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    relatedMessageId?: boolean
    relatedRequestId?: boolean
    relatedUserId?: boolean
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    content?: boolean
    type?: boolean
    status?: boolean
    sentAt?: boolean
    failureReason?: boolean
    retryCount?: boolean
    maxRetries?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    relatedMessageId?: boolean
    relatedRequestId?: boolean
    relatedUserId?: boolean
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectScalar = {
    id?: boolean
    to?: boolean
    subject?: boolean
    content?: boolean
    type?: boolean
    status?: boolean
    sentAt?: boolean
    failureReason?: boolean
    retryCount?: boolean
    maxRetries?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    relatedMessageId?: boolean
    relatedRequestId?: boolean
    relatedUserId?: boolean
  }

  export type EmailNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "to" | "subject" | "content" | "type" | "status" | "sentAt" | "failureReason" | "retryCount" | "maxRetries" | "createdAt" | "updatedAt" | "relatedMessageId" | "relatedRequestId" | "relatedUserId", ExtArgs["result"]["emailNotification"]>

  export type $EmailNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailNotification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      to: string
      subject: string
      content: string
      type: $Enums.EmailType
      status: $Enums.EmailStatus
      sentAt: Date | null
      failureReason: string | null
      retryCount: number
      maxRetries: number
      createdAt: Date
      updatedAt: Date
      relatedMessageId: string | null
      relatedRequestId: string | null
      relatedUserId: string | null
    }, ExtArgs["result"]["emailNotification"]>
    composites: {}
  }

  type EmailNotificationGetPayload<S extends boolean | null | undefined | EmailNotificationDefaultArgs> = $Result.GetResult<Prisma.$EmailNotificationPayload, S>

  type EmailNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailNotificationCountAggregateInputType | true
    }

  export interface EmailNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailNotification'], meta: { name: 'EmailNotification' } }
    /**
     * Find zero or one EmailNotification that matches the filter.
     * @param {EmailNotificationFindUniqueArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailNotificationFindUniqueArgs>(args: SelectSubset<T, EmailNotificationFindUniqueArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailNotificationFindUniqueOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailNotificationFindFirstArgs>(args?: SelectSubset<T, EmailNotificationFindFirstArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany()
     * 
     * // Get first 10 EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailNotificationFindManyArgs>(args?: SelectSubset<T, EmailNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailNotification.
     * @param {EmailNotificationCreateArgs} args - Arguments to create a EmailNotification.
     * @example
     * // Create one EmailNotification
     * const EmailNotification = await prisma.emailNotification.create({
     *   data: {
     *     // ... data to create a EmailNotification
     *   }
     * })
     * 
     */
    create<T extends EmailNotificationCreateArgs>(args: SelectSubset<T, EmailNotificationCreateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailNotifications.
     * @param {EmailNotificationCreateManyArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailNotificationCreateManyArgs>(args?: SelectSubset<T, EmailNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailNotifications and returns the data saved in the database.
     * @param {EmailNotificationCreateManyAndReturnArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailNotification.
     * @param {EmailNotificationDeleteArgs} args - Arguments to delete one EmailNotification.
     * @example
     * // Delete one EmailNotification
     * const EmailNotification = await prisma.emailNotification.delete({
     *   where: {
     *     // ... filter to delete one EmailNotification
     *   }
     * })
     * 
     */
    delete<T extends EmailNotificationDeleteArgs>(args: SelectSubset<T, EmailNotificationDeleteArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailNotification.
     * @param {EmailNotificationUpdateArgs} args - Arguments to update one EmailNotification.
     * @example
     * // Update one EmailNotification
     * const emailNotification = await prisma.emailNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailNotificationUpdateArgs>(args: SelectSubset<T, EmailNotificationUpdateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailNotifications.
     * @param {EmailNotificationDeleteManyArgs} args - Arguments to filter EmailNotifications to delete.
     * @example
     * // Delete a few EmailNotifications
     * const { count } = await prisma.emailNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailNotificationDeleteManyArgs>(args?: SelectSubset<T, EmailNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailNotificationUpdateManyArgs>(args: SelectSubset<T, EmailNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications and returns the data updated in the database.
     * @param {EmailNotificationUpdateManyAndReturnArgs} args - Arguments to update many EmailNotifications.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailNotification.
     * @param {EmailNotificationUpsertArgs} args - Arguments to update or create a EmailNotification.
     * @example
     * // Update or create a EmailNotification
     * const emailNotification = await prisma.emailNotification.upsert({
     *   create: {
     *     // ... data to create a EmailNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailNotification we want to update
     *   }
     * })
     */
    upsert<T extends EmailNotificationUpsertArgs>(args: SelectSubset<T, EmailNotificationUpsertArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationCountArgs} args - Arguments to filter EmailNotifications to count.
     * @example
     * // Count the number of EmailNotifications
     * const count = await prisma.emailNotification.count({
     *   where: {
     *     // ... the filter for the EmailNotifications we want to count
     *   }
     * })
    **/
    count<T extends EmailNotificationCountArgs>(
      args?: Subset<T, EmailNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailNotificationAggregateArgs>(args: Subset<T, EmailNotificationAggregateArgs>): Prisma.PrismaPromise<GetEmailNotificationAggregateType<T>>

    /**
     * Group by EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailNotificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailNotification model
   */
  readonly fields: EmailNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailNotification model
   */
  interface EmailNotificationFieldRefs {
    readonly id: FieldRef<"EmailNotification", 'String'>
    readonly to: FieldRef<"EmailNotification", 'String'>
    readonly subject: FieldRef<"EmailNotification", 'String'>
    readonly content: FieldRef<"EmailNotification", 'String'>
    readonly type: FieldRef<"EmailNotification", 'EmailType'>
    readonly status: FieldRef<"EmailNotification", 'EmailStatus'>
    readonly sentAt: FieldRef<"EmailNotification", 'DateTime'>
    readonly failureReason: FieldRef<"EmailNotification", 'String'>
    readonly retryCount: FieldRef<"EmailNotification", 'Int'>
    readonly maxRetries: FieldRef<"EmailNotification", 'Int'>
    readonly createdAt: FieldRef<"EmailNotification", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailNotification", 'DateTime'>
    readonly relatedMessageId: FieldRef<"EmailNotification", 'String'>
    readonly relatedRequestId: FieldRef<"EmailNotification", 'String'>
    readonly relatedUserId: FieldRef<"EmailNotification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailNotification findUnique
   */
  export type EmailNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findUniqueOrThrow
   */
  export type EmailNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findFirst
   */
  export type EmailNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findFirstOrThrow
   */
  export type EmailNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findMany
   */
  export type EmailNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotifications to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification create
   */
  export type EmailNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailNotification.
     */
    data: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
  }

  /**
   * EmailNotification createMany
   */
  export type EmailNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailNotification createManyAndReturn
   */
  export type EmailNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailNotification update
   */
  export type EmailNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailNotification.
     */
    data: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
    /**
     * Choose, which EmailNotification to update.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification updateMany
   */
  export type EmailNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
  }

  /**
   * EmailNotification updateManyAndReturn
   */
  export type EmailNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
  }

  /**
   * EmailNotification upsert
   */
  export type EmailNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailNotification to update in case it exists.
     */
    where: EmailNotificationWhereUniqueInput
    /**
     * In case the EmailNotification found by the `where` argument doesn't exist, create a new EmailNotification with this data.
     */
    create: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
    /**
     * In case the EmailNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
  }

  /**
   * EmailNotification delete
   */
  export type EmailNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter which EmailNotification to delete.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification deleteMany
   */
  export type EmailNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotifications to delete
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to delete.
     */
    limit?: number
  }

  /**
   * EmailNotification without action
   */
  export type EmailNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BuildingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    displayName: 'displayName',
    totalCapacity: 'totalCapacity',
    currentOccupancy: 'currentOccupancy',
    floors: 'floors',
    roomsPerFloor: 'roomsPerFloor',
    studentsPerRoom: 'studentsPerRoom',
    description: 'description',
    facilities: 'facilities',
    wardenOffice: 'wardenOffice',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    otp: 'otp',
    otpExpiresAt: 'otpExpiresAt',
    isVerified: 'isVerified',
    lastLoginAt: 'lastLoginAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    studentId: 'studentId',
    username: 'username',
    roomNumber: 'roomNumber',
    floorNumber: 'floorNumber',
    building: 'building',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate',
    emergencyContact: 'emergencyContact',
    medicalInfo: 'medicalInfo',
    isAtHostel: 'isAtHostel',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roomId: 'roomId',
    motherProfileId: 'motherProfileId',
    fatherProfileId: 'fatherProfileId'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const ParentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    address: 'address',
    emergencyContact: 'emergencyContact',
    relationship: 'relationship',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParentProfileScalarFieldEnum = (typeof ParentProfileScalarFieldEnum)[keyof typeof ParentProfileScalarFieldEnum]


  export const WardenProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    assignedBuilding: 'assignedBuilding',
    wardNumber: 'wardNumber',
    responsibilities: 'responsibilities',
    shiftHours: 'shiftHours',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WardenProfileScalarFieldEnum = (typeof WardenProfileScalarFieldEnum)[keyof typeof WardenProfileScalarFieldEnum]


  export const ChiefWardenProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    department: 'department',
    responsibilities: 'responsibilities',
    adminLevel: 'adminLevel',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChiefWardenProfileScalarFieldEnum = (typeof ChiefWardenProfileScalarFieldEnum)[keyof typeof ChiefWardenProfileScalarFieldEnum]


  export const MatronProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    employeeId: 'employeeId',
    department: 'department',
    responsibilities: 'responsibilities',
    shiftStartTime: 'shiftStartTime',
    shiftEndTime: 'shiftEndTime',
    isActive: 'isActive',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatronProfileScalarFieldEnum = (typeof MatronProfileScalarFieldEnum)[keyof typeof MatronProfileScalarFieldEnum]


  export const MessageThreadScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastMessageAt: 'lastMessageAt',
    participantIds: 'participantIds'
  };

  export type MessageThreadScalarFieldEnum = (typeof MessageThreadScalarFieldEnum)[keyof typeof MessageThreadScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderId: 'senderId',
    receiverId: 'receiverId',
    threadId: 'threadId',
    isRead: 'isRead',
    readAt: 'readAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    floorNumber: 'floorNumber',
    building: 'building',
    capacity: 'capacity',
    isOccupied: 'isOccupied',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    reason: 'reason',
    requestedAt: 'requestedAt',
    expectedBack: 'expectedBack',
    studentId: 'studentId',
    parentId: 'parentId',
    approvedAt: 'approvedAt',
    approvedBy: 'approvedBy',
    verificationPhotoUrl: 'verificationPhotoUrl',
    locationLatitude: 'locationLatitude',
    locationLongitude: 'locationLongitude',
    locationAccuracy: 'locationAccuracy',
    locationAddress: 'locationAddress',
    locationTimestamp: 'locationTimestamp',
    parentStatus: 'parentStatus',
    parentApprovedAt: 'parentApprovedAt',
    parentLocationLatitude: 'parentLocationLatitude',
    parentLocationLongitude: 'parentLocationLongitude',
    parentLocationAccuracy: 'parentLocationAccuracy',
    parentLocationAddress: 'parentLocationAddress',
    parentLocationTimestamp: 'parentLocationTimestamp',
    isScaledUp: 'isScaledUp',
    scaledUpAt: 'scaledUpAt',
    scaledUpBy: 'scaledUpBy',
    chiefWardenStatus: 'chiefWardenStatus',
    chiefWardenApprovedAt: 'chiefWardenApprovedAt',
    chiefWardenApprovedBy: 'chiefWardenApprovedBy',
    chiefWardenMessage: 'chiefWardenMessage',
    confirmedByWarden: 'confirmedByWarden',
    confirmedByWardenAt: 'confirmedByWardenAt',
    confirmedByWardenId: 'confirmedByWardenId',
    confirmedByChiefWarden: 'confirmedByChiefWarden',
    confirmedByChiefWardenAt: 'confirmedByChiefWardenAt',
    confirmedByChiefWardenId: 'confirmedByChiefWardenId'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const EmailNotificationScalarFieldEnum: {
    id: 'id',
    to: 'to',
    subject: 'subject',
    content: 'content',
    type: 'type',
    status: 'status',
    sentAt: 'sentAt',
    failureReason: 'failureReason',
    retryCount: 'retryCount',
    maxRetries: 'maxRetries',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    relatedMessageId: 'relatedMessageId',
    relatedRequestId: 'relatedRequestId',
    relatedUserId: 'relatedUserId'
  };

  export type EmailNotificationScalarFieldEnum = (typeof EmailNotificationScalarFieldEnum)[keyof typeof EmailNotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'RequestType'
   */
  export type EnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType'>
    


  /**
   * Reference to a field of type 'RequestType[]'
   */
  export type ListEnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EmailType'
   */
  export type EnumEmailTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailType'>
    


  /**
   * Reference to a field of type 'EmailType[]'
   */
  export type ListEnumEmailTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailType[]'>
    


  /**
   * Reference to a field of type 'EmailStatus'
   */
  export type EnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus'>
    


  /**
   * Reference to a field of type 'EmailStatus[]'
   */
  export type ListEnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type BuildingWhereInput = {
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    id?: StringFilter<"Building"> | string
    name?: StringFilter<"Building"> | string
    displayName?: StringFilter<"Building"> | string
    totalCapacity?: IntFilter<"Building"> | number
    currentOccupancy?: IntFilter<"Building"> | number
    floors?: IntFilter<"Building"> | number
    roomsPerFloor?: IntFilter<"Building"> | number
    studentsPerRoom?: IntFilter<"Building"> | number
    description?: StringNullableFilter<"Building"> | string | null
    facilities?: StringNullableFilter<"Building"> | string | null
    wardenOffice?: StringNullableFilter<"Building"> | string | null
    isActive?: BoolFilter<"Building"> | boolean
    createdAt?: DateTimeFilter<"Building"> | Date | string
    updatedAt?: DateTimeFilter<"Building"> | Date | string
  }

  export type BuildingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    totalCapacity?: SortOrder
    currentOccupancy?: SortOrder
    floors?: SortOrder
    roomsPerFloor?: SortOrder
    studentsPerRoom?: SortOrder
    description?: SortOrderInput | SortOrder
    facilities?: SortOrderInput | SortOrder
    wardenOffice?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    displayName?: StringFilter<"Building"> | string
    totalCapacity?: IntFilter<"Building"> | number
    currentOccupancy?: IntFilter<"Building"> | number
    floors?: IntFilter<"Building"> | number
    roomsPerFloor?: IntFilter<"Building"> | number
    studentsPerRoom?: IntFilter<"Building"> | number
    description?: StringNullableFilter<"Building"> | string | null
    facilities?: StringNullableFilter<"Building"> | string | null
    wardenOffice?: StringNullableFilter<"Building"> | string | null
    isActive?: BoolFilter<"Building"> | boolean
    createdAt?: DateTimeFilter<"Building"> | Date | string
    updatedAt?: DateTimeFilter<"Building"> | Date | string
  }, "id" | "name">

  export type BuildingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    totalCapacity?: SortOrder
    currentOccupancy?: SortOrder
    floors?: SortOrder
    roomsPerFloor?: SortOrder
    studentsPerRoom?: SortOrder
    description?: SortOrderInput | SortOrder
    facilities?: SortOrderInput | SortOrder
    wardenOffice?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BuildingCountOrderByAggregateInput
    _avg?: BuildingAvgOrderByAggregateInput
    _max?: BuildingMaxOrderByAggregateInput
    _min?: BuildingMinOrderByAggregateInput
    _sum?: BuildingSumOrderByAggregateInput
  }

  export type BuildingScalarWhereWithAggregatesInput = {
    AND?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    OR?: BuildingScalarWhereWithAggregatesInput[]
    NOT?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Building"> | string
    name?: StringWithAggregatesFilter<"Building"> | string
    displayName?: StringWithAggregatesFilter<"Building"> | string
    totalCapacity?: IntWithAggregatesFilter<"Building"> | number
    currentOccupancy?: IntWithAggregatesFilter<"Building"> | number
    floors?: IntWithAggregatesFilter<"Building"> | number
    roomsPerFloor?: IntWithAggregatesFilter<"Building"> | number
    studentsPerRoom?: IntWithAggregatesFilter<"Building"> | number
    description?: StringNullableWithAggregatesFilter<"Building"> | string | null
    facilities?: StringNullableWithAggregatesFilter<"Building"> | string | null
    wardenOffice?: StringNullableWithAggregatesFilter<"Building"> | string | null
    isActive?: BoolWithAggregatesFilter<"Building"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Building"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Building"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    parentProfile?: XOR<ParentProfileNullableScalarRelationFilter, ParentProfileWhereInput> | null
    wardenProfile?: XOR<WardenProfileNullableScalarRelationFilter, WardenProfileWhereInput> | null
    chiefWardenProfile?: XOR<ChiefWardenProfileNullableScalarRelationFilter, ChiefWardenProfileWhereInput> | null
    matronProfile?: XOR<MatronProfileNullableScalarRelationFilter, MatronProfileWhereInput> | null
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    studentRequests?: RequestListRelationFilter
    parentRequests?: RequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    studentProfile?: StudentProfileOrderByWithRelationInput
    parentProfile?: ParentProfileOrderByWithRelationInput
    wardenProfile?: WardenProfileOrderByWithRelationInput
    chiefWardenProfile?: ChiefWardenProfileOrderByWithRelationInput
    matronProfile?: MatronProfileOrderByWithRelationInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    studentRequests?: RequestOrderByRelationAggregateInput
    parentRequests?: RequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    parentProfile?: XOR<ParentProfileNullableScalarRelationFilter, ParentProfileWhereInput> | null
    wardenProfile?: XOR<WardenProfileNullableScalarRelationFilter, WardenProfileWhereInput> | null
    chiefWardenProfile?: XOR<ChiefWardenProfileNullableScalarRelationFilter, ChiefWardenProfileWhereInput> | null
    matronProfile?: XOR<MatronProfileNullableScalarRelationFilter, MatronProfileWhereInput> | null
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    studentRequests?: RequestListRelationFilter
    parentRequests?: RequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    userId?: StringFilter<"StudentProfile"> | string
    studentId?: StringFilter<"StudentProfile"> | string
    username?: StringNullableFilter<"StudentProfile"> | string | null
    roomNumber?: StringNullableFilter<"StudentProfile"> | string | null
    floorNumber?: StringNullableFilter<"StudentProfile"> | string | null
    building?: StringNullableFilter<"StudentProfile"> | string | null
    checkInDate?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    checkOutDate?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    emergencyContact?: StringNullableFilter<"StudentProfile"> | string | null
    medicalInfo?: StringNullableFilter<"StudentProfile"> | string | null
    isAtHostel?: BoolFilter<"StudentProfile"> | boolean
    profilePicture?: StringNullableFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    roomId?: StringNullableFilter<"StudentProfile"> | string | null
    motherProfileId?: StringNullableFilter<"StudentProfile"> | string | null
    fatherProfileId?: StringNullableFilter<"StudentProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    motherProfile?: XOR<ParentProfileNullableScalarRelationFilter, ParentProfileWhereInput> | null
    fatherProfile?: XOR<ParentProfileNullableScalarRelationFilter, ParentProfileWhereInput> | null
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
    username?: SortOrderInput | SortOrder
    roomNumber?: SortOrderInput | SortOrder
    floorNumber?: SortOrderInput | SortOrder
    building?: SortOrderInput | SortOrder
    checkInDate?: SortOrderInput | SortOrder
    checkOutDate?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    medicalInfo?: SortOrderInput | SortOrder
    isAtHostel?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrderInput | SortOrder
    motherProfileId?: SortOrderInput | SortOrder
    fatherProfileId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    motherProfile?: ParentProfileOrderByWithRelationInput
    fatherProfile?: ParentProfileOrderByWithRelationInput
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    studentId?: string
    username?: string
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    roomNumber?: StringNullableFilter<"StudentProfile"> | string | null
    floorNumber?: StringNullableFilter<"StudentProfile"> | string | null
    building?: StringNullableFilter<"StudentProfile"> | string | null
    checkInDate?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    checkOutDate?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    emergencyContact?: StringNullableFilter<"StudentProfile"> | string | null
    medicalInfo?: StringNullableFilter<"StudentProfile"> | string | null
    isAtHostel?: BoolFilter<"StudentProfile"> | boolean
    profilePicture?: StringNullableFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    roomId?: StringNullableFilter<"StudentProfile"> | string | null
    motherProfileId?: StringNullableFilter<"StudentProfile"> | string | null
    fatherProfileId?: StringNullableFilter<"StudentProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    motherProfile?: XOR<ParentProfileNullableScalarRelationFilter, ParentProfileWhereInput> | null
    fatherProfile?: XOR<ParentProfileNullableScalarRelationFilter, ParentProfileWhereInput> | null
  }, "id" | "userId" | "studentId" | "username">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
    username?: SortOrderInput | SortOrder
    roomNumber?: SortOrderInput | SortOrder
    floorNumber?: SortOrderInput | SortOrder
    building?: SortOrderInput | SortOrder
    checkInDate?: SortOrderInput | SortOrder
    checkOutDate?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    medicalInfo?: SortOrderInput | SortOrder
    isAtHostel?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrderInput | SortOrder
    motherProfileId?: SortOrderInput | SortOrder
    fatherProfileId?: SortOrderInput | SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentProfile"> | string
    userId?: StringWithAggregatesFilter<"StudentProfile"> | string
    studentId?: StringWithAggregatesFilter<"StudentProfile"> | string
    username?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    roomNumber?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    floorNumber?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    building?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    checkInDate?: DateTimeNullableWithAggregatesFilter<"StudentProfile"> | Date | string | null
    checkOutDate?: DateTimeNullableWithAggregatesFilter<"StudentProfile"> | Date | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    medicalInfo?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    isAtHostel?: BoolWithAggregatesFilter<"StudentProfile"> | boolean
    profilePicture?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
    roomId?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    motherProfileId?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    fatherProfileId?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
  }

  export type ParentProfileWhereInput = {
    AND?: ParentProfileWhereInput | ParentProfileWhereInput[]
    OR?: ParentProfileWhereInput[]
    NOT?: ParentProfileWhereInput | ParentProfileWhereInput[]
    id?: StringFilter<"ParentProfile"> | string
    userId?: StringFilter<"ParentProfile"> | string
    address?: StringNullableFilter<"ParentProfile"> | string | null
    emergencyContact?: StringNullableFilter<"ParentProfile"> | string | null
    relationship?: StringNullableFilter<"ParentProfile"> | string | null
    profilePicture?: StringNullableFilter<"ParentProfile"> | string | null
    createdAt?: DateTimeFilter<"ParentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ParentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    childrenAsMother?: StudentProfileListRelationFilter
    childrenAsFather?: StudentProfileListRelationFilter
  }

  export type ParentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    relationship?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    childrenAsMother?: StudentProfileOrderByRelationAggregateInput
    childrenAsFather?: StudentProfileOrderByRelationAggregateInput
  }

  export type ParentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ParentProfileWhereInput | ParentProfileWhereInput[]
    OR?: ParentProfileWhereInput[]
    NOT?: ParentProfileWhereInput | ParentProfileWhereInput[]
    address?: StringNullableFilter<"ParentProfile"> | string | null
    emergencyContact?: StringNullableFilter<"ParentProfile"> | string | null
    relationship?: StringNullableFilter<"ParentProfile"> | string | null
    profilePicture?: StringNullableFilter<"ParentProfile"> | string | null
    createdAt?: DateTimeFilter<"ParentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ParentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    childrenAsMother?: StudentProfileListRelationFilter
    childrenAsFather?: StudentProfileListRelationFilter
  }, "id" | "userId">

  export type ParentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    relationship?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParentProfileCountOrderByAggregateInput
    _max?: ParentProfileMaxOrderByAggregateInput
    _min?: ParentProfileMinOrderByAggregateInput
  }

  export type ParentProfileScalarWhereWithAggregatesInput = {
    AND?: ParentProfileScalarWhereWithAggregatesInput | ParentProfileScalarWhereWithAggregatesInput[]
    OR?: ParentProfileScalarWhereWithAggregatesInput[]
    NOT?: ParentProfileScalarWhereWithAggregatesInput | ParentProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParentProfile"> | string
    userId?: StringWithAggregatesFilter<"ParentProfile"> | string
    address?: StringNullableWithAggregatesFilter<"ParentProfile"> | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"ParentProfile"> | string | null
    relationship?: StringNullableWithAggregatesFilter<"ParentProfile"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"ParentProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ParentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParentProfile"> | Date | string
  }

  export type WardenProfileWhereInput = {
    AND?: WardenProfileWhereInput | WardenProfileWhereInput[]
    OR?: WardenProfileWhereInput[]
    NOT?: WardenProfileWhereInput | WardenProfileWhereInput[]
    id?: StringFilter<"WardenProfile"> | string
    userId?: StringFilter<"WardenProfile"> | string
    assignedBuilding?: StringNullableFilter<"WardenProfile"> | string | null
    wardNumber?: StringNullableFilter<"WardenProfile"> | string | null
    responsibilities?: StringNullableFilter<"WardenProfile"> | string | null
    shiftHours?: StringNullableFilter<"WardenProfile"> | string | null
    profilePicture?: StringNullableFilter<"WardenProfile"> | string | null
    createdAt?: DateTimeFilter<"WardenProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WardenProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WardenProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    assignedBuilding?: SortOrderInput | SortOrder
    wardNumber?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    shiftHours?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WardenProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: WardenProfileWhereInput | WardenProfileWhereInput[]
    OR?: WardenProfileWhereInput[]
    NOT?: WardenProfileWhereInput | WardenProfileWhereInput[]
    assignedBuilding?: StringNullableFilter<"WardenProfile"> | string | null
    wardNumber?: StringNullableFilter<"WardenProfile"> | string | null
    responsibilities?: StringNullableFilter<"WardenProfile"> | string | null
    shiftHours?: StringNullableFilter<"WardenProfile"> | string | null
    profilePicture?: StringNullableFilter<"WardenProfile"> | string | null
    createdAt?: DateTimeFilter<"WardenProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WardenProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type WardenProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    assignedBuilding?: SortOrderInput | SortOrder
    wardNumber?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    shiftHours?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WardenProfileCountOrderByAggregateInput
    _max?: WardenProfileMaxOrderByAggregateInput
    _min?: WardenProfileMinOrderByAggregateInput
  }

  export type WardenProfileScalarWhereWithAggregatesInput = {
    AND?: WardenProfileScalarWhereWithAggregatesInput | WardenProfileScalarWhereWithAggregatesInput[]
    OR?: WardenProfileScalarWhereWithAggregatesInput[]
    NOT?: WardenProfileScalarWhereWithAggregatesInput | WardenProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WardenProfile"> | string
    userId?: StringWithAggregatesFilter<"WardenProfile"> | string
    assignedBuilding?: StringNullableWithAggregatesFilter<"WardenProfile"> | string | null
    wardNumber?: StringNullableWithAggregatesFilter<"WardenProfile"> | string | null
    responsibilities?: StringNullableWithAggregatesFilter<"WardenProfile"> | string | null
    shiftHours?: StringNullableWithAggregatesFilter<"WardenProfile"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"WardenProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WardenProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WardenProfile"> | Date | string
  }

  export type ChiefWardenProfileWhereInput = {
    AND?: ChiefWardenProfileWhereInput | ChiefWardenProfileWhereInput[]
    OR?: ChiefWardenProfileWhereInput[]
    NOT?: ChiefWardenProfileWhereInput | ChiefWardenProfileWhereInput[]
    id?: StringFilter<"ChiefWardenProfile"> | string
    userId?: StringFilter<"ChiefWardenProfile"> | string
    department?: StringNullableFilter<"ChiefWardenProfile"> | string | null
    responsibilities?: StringNullableFilter<"ChiefWardenProfile"> | string | null
    adminLevel?: StringNullableFilter<"ChiefWardenProfile"> | string | null
    profilePicture?: StringNullableFilter<"ChiefWardenProfile"> | string | null
    createdAt?: DateTimeFilter<"ChiefWardenProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ChiefWardenProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChiefWardenProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    adminLevel?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChiefWardenProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ChiefWardenProfileWhereInput | ChiefWardenProfileWhereInput[]
    OR?: ChiefWardenProfileWhereInput[]
    NOT?: ChiefWardenProfileWhereInput | ChiefWardenProfileWhereInput[]
    department?: StringNullableFilter<"ChiefWardenProfile"> | string | null
    responsibilities?: StringNullableFilter<"ChiefWardenProfile"> | string | null
    adminLevel?: StringNullableFilter<"ChiefWardenProfile"> | string | null
    profilePicture?: StringNullableFilter<"ChiefWardenProfile"> | string | null
    createdAt?: DateTimeFilter<"ChiefWardenProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ChiefWardenProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ChiefWardenProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    adminLevel?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChiefWardenProfileCountOrderByAggregateInput
    _max?: ChiefWardenProfileMaxOrderByAggregateInput
    _min?: ChiefWardenProfileMinOrderByAggregateInput
  }

  export type ChiefWardenProfileScalarWhereWithAggregatesInput = {
    AND?: ChiefWardenProfileScalarWhereWithAggregatesInput | ChiefWardenProfileScalarWhereWithAggregatesInput[]
    OR?: ChiefWardenProfileScalarWhereWithAggregatesInput[]
    NOT?: ChiefWardenProfileScalarWhereWithAggregatesInput | ChiefWardenProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChiefWardenProfile"> | string
    userId?: StringWithAggregatesFilter<"ChiefWardenProfile"> | string
    department?: StringNullableWithAggregatesFilter<"ChiefWardenProfile"> | string | null
    responsibilities?: StringNullableWithAggregatesFilter<"ChiefWardenProfile"> | string | null
    adminLevel?: StringNullableWithAggregatesFilter<"ChiefWardenProfile"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"ChiefWardenProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChiefWardenProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChiefWardenProfile"> | Date | string
  }

  export type MatronProfileWhereInput = {
    AND?: MatronProfileWhereInput | MatronProfileWhereInput[]
    OR?: MatronProfileWhereInput[]
    NOT?: MatronProfileWhereInput | MatronProfileWhereInput[]
    id?: StringFilter<"MatronProfile"> | string
    userId?: StringFilter<"MatronProfile"> | string
    employeeId?: StringFilter<"MatronProfile"> | string
    department?: StringNullableFilter<"MatronProfile"> | string | null
    responsibilities?: StringNullableFilter<"MatronProfile"> | string | null
    shiftStartTime?: StringNullableFilter<"MatronProfile"> | string | null
    shiftEndTime?: StringNullableFilter<"MatronProfile"> | string | null
    isActive?: BoolFilter<"MatronProfile"> | boolean
    profilePicture?: StringNullableFilter<"MatronProfile"> | string | null
    createdAt?: DateTimeFilter<"MatronProfile"> | Date | string
    updatedAt?: DateTimeFilter<"MatronProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatronProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    department?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    shiftStartTime?: SortOrderInput | SortOrder
    shiftEndTime?: SortOrderInput | SortOrder
    isActive?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MatronProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    employeeId?: string
    AND?: MatronProfileWhereInput | MatronProfileWhereInput[]
    OR?: MatronProfileWhereInput[]
    NOT?: MatronProfileWhereInput | MatronProfileWhereInput[]
    department?: StringNullableFilter<"MatronProfile"> | string | null
    responsibilities?: StringNullableFilter<"MatronProfile"> | string | null
    shiftStartTime?: StringNullableFilter<"MatronProfile"> | string | null
    shiftEndTime?: StringNullableFilter<"MatronProfile"> | string | null
    isActive?: BoolFilter<"MatronProfile"> | boolean
    profilePicture?: StringNullableFilter<"MatronProfile"> | string | null
    createdAt?: DateTimeFilter<"MatronProfile"> | Date | string
    updatedAt?: DateTimeFilter<"MatronProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "employeeId">

  export type MatronProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    department?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    shiftStartTime?: SortOrderInput | SortOrder
    shiftEndTime?: SortOrderInput | SortOrder
    isActive?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatronProfileCountOrderByAggregateInput
    _max?: MatronProfileMaxOrderByAggregateInput
    _min?: MatronProfileMinOrderByAggregateInput
  }

  export type MatronProfileScalarWhereWithAggregatesInput = {
    AND?: MatronProfileScalarWhereWithAggregatesInput | MatronProfileScalarWhereWithAggregatesInput[]
    OR?: MatronProfileScalarWhereWithAggregatesInput[]
    NOT?: MatronProfileScalarWhereWithAggregatesInput | MatronProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatronProfile"> | string
    userId?: StringWithAggregatesFilter<"MatronProfile"> | string
    employeeId?: StringWithAggregatesFilter<"MatronProfile"> | string
    department?: StringNullableWithAggregatesFilter<"MatronProfile"> | string | null
    responsibilities?: StringNullableWithAggregatesFilter<"MatronProfile"> | string | null
    shiftStartTime?: StringNullableWithAggregatesFilter<"MatronProfile"> | string | null
    shiftEndTime?: StringNullableWithAggregatesFilter<"MatronProfile"> | string | null
    isActive?: BoolWithAggregatesFilter<"MatronProfile"> | boolean
    profilePicture?: StringNullableWithAggregatesFilter<"MatronProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MatronProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatronProfile"> | Date | string
  }

  export type MessageThreadWhereInput = {
    AND?: MessageThreadWhereInput | MessageThreadWhereInput[]
    OR?: MessageThreadWhereInput[]
    NOT?: MessageThreadWhereInput | MessageThreadWhereInput[]
    id?: StringFilter<"MessageThread"> | string
    createdAt?: DateTimeFilter<"MessageThread"> | Date | string
    updatedAt?: DateTimeFilter<"MessageThread"> | Date | string
    lastMessageAt?: DateTimeFilter<"MessageThread"> | Date | string
    participantIds?: StringNullableListFilter<"MessageThread">
    messages?: MessageListRelationFilter
  }

  export type MessageThreadOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessageAt?: SortOrder
    participantIds?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type MessageThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageThreadWhereInput | MessageThreadWhereInput[]
    OR?: MessageThreadWhereInput[]
    NOT?: MessageThreadWhereInput | MessageThreadWhereInput[]
    createdAt?: DateTimeFilter<"MessageThread"> | Date | string
    updatedAt?: DateTimeFilter<"MessageThread"> | Date | string
    lastMessageAt?: DateTimeFilter<"MessageThread"> | Date | string
    participantIds?: StringNullableListFilter<"MessageThread">
    messages?: MessageListRelationFilter
  }, "id">

  export type MessageThreadOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessageAt?: SortOrder
    participantIds?: SortOrder
    _count?: MessageThreadCountOrderByAggregateInput
    _max?: MessageThreadMaxOrderByAggregateInput
    _min?: MessageThreadMinOrderByAggregateInput
  }

  export type MessageThreadScalarWhereWithAggregatesInput = {
    AND?: MessageThreadScalarWhereWithAggregatesInput | MessageThreadScalarWhereWithAggregatesInput[]
    OR?: MessageThreadScalarWhereWithAggregatesInput[]
    NOT?: MessageThreadScalarWhereWithAggregatesInput | MessageThreadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageThread"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MessageThread"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageThread"> | Date | string
    lastMessageAt?: DateTimeWithAggregatesFilter<"MessageThread"> | Date | string
    participantIds?: StringNullableListFilter<"MessageThread">
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    threadId?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<MessageThreadScalarRelationFilter, MessageThreadWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    threadId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    thread?: MessageThreadOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    threadId?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<MessageThreadScalarRelationFilter, MessageThreadWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    threadId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    threadId?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    roomNumber?: StringFilter<"Room"> | string
    floorNumber?: StringFilter<"Room"> | string
    building?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    isOccupied?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    students?: StudentProfileListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    building?: SortOrder
    capacity?: SortOrder
    isOccupied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    students?: StudentProfileOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomNumber?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    floorNumber?: StringFilter<"Room"> | string
    building?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    isOccupied?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    students?: StudentProfileListRelationFilter
  }, "id" | "roomNumber">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    building?: SortOrder
    capacity?: SortOrder
    isOccupied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    roomNumber?: StringWithAggregatesFilter<"Room"> | string
    floorNumber?: StringWithAggregatesFilter<"Room"> | string
    building?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    isOccupied?: BoolWithAggregatesFilter<"Room"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    type?: EnumRequestTypeFilter<"Request"> | $Enums.RequestType
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    reason?: StringNullableFilter<"Request"> | string | null
    requestedAt?: DateTimeFilter<"Request"> | Date | string
    expectedBack?: DateTimeNullableFilter<"Request"> | Date | string | null
    studentId?: StringFilter<"Request"> | string
    parentId?: StringNullableFilter<"Request"> | string | null
    approvedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    approvedBy?: StringNullableFilter<"Request"> | string | null
    verificationPhotoUrl?: StringNullableFilter<"Request"> | string | null
    locationLatitude?: FloatNullableFilter<"Request"> | number | null
    locationLongitude?: FloatNullableFilter<"Request"> | number | null
    locationAccuracy?: FloatNullableFilter<"Request"> | number | null
    locationAddress?: StringNullableFilter<"Request"> | string | null
    locationTimestamp?: DateTimeNullableFilter<"Request"> | Date | string | null
    parentStatus?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    parentApprovedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    parentLocationLatitude?: FloatNullableFilter<"Request"> | number | null
    parentLocationLongitude?: FloatNullableFilter<"Request"> | number | null
    parentLocationAccuracy?: FloatNullableFilter<"Request"> | number | null
    parentLocationAddress?: StringNullableFilter<"Request"> | string | null
    parentLocationTimestamp?: DateTimeNullableFilter<"Request"> | Date | string | null
    isScaledUp?: BoolFilter<"Request"> | boolean
    scaledUpAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    scaledUpBy?: StringNullableFilter<"Request"> | string | null
    chiefWardenStatus?: EnumRequestStatusNullableFilter<"Request"> | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    chiefWardenApprovedBy?: StringNullableFilter<"Request"> | string | null
    chiefWardenMessage?: StringNullableFilter<"Request"> | string | null
    confirmedByWarden?: BoolFilter<"Request"> | boolean
    confirmedByWardenAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    confirmedByWardenId?: StringNullableFilter<"Request"> | string | null
    confirmedByChiefWarden?: BoolFilter<"Request"> | boolean
    confirmedByChiefWardenAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    confirmedByChiefWardenId?: StringNullableFilter<"Request"> | string | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    requestedAt?: SortOrder
    expectedBack?: SortOrderInput | SortOrder
    studentId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    verificationPhotoUrl?: SortOrderInput | SortOrder
    locationLatitude?: SortOrderInput | SortOrder
    locationLongitude?: SortOrderInput | SortOrder
    locationAccuracy?: SortOrderInput | SortOrder
    locationAddress?: SortOrderInput | SortOrder
    locationTimestamp?: SortOrderInput | SortOrder
    parentStatus?: SortOrder
    parentApprovedAt?: SortOrderInput | SortOrder
    parentLocationLatitude?: SortOrderInput | SortOrder
    parentLocationLongitude?: SortOrderInput | SortOrder
    parentLocationAccuracy?: SortOrderInput | SortOrder
    parentLocationAddress?: SortOrderInput | SortOrder
    parentLocationTimestamp?: SortOrderInput | SortOrder
    isScaledUp?: SortOrder
    scaledUpAt?: SortOrderInput | SortOrder
    scaledUpBy?: SortOrderInput | SortOrder
    chiefWardenStatus?: SortOrderInput | SortOrder
    chiefWardenApprovedAt?: SortOrderInput | SortOrder
    chiefWardenApprovedBy?: SortOrderInput | SortOrder
    chiefWardenMessage?: SortOrderInput | SortOrder
    confirmedByWarden?: SortOrder
    confirmedByWardenAt?: SortOrderInput | SortOrder
    confirmedByWardenId?: SortOrderInput | SortOrder
    confirmedByChiefWarden?: SortOrder
    confirmedByChiefWardenAt?: SortOrderInput | SortOrder
    confirmedByChiefWardenId?: SortOrderInput | SortOrder
    student?: UserOrderByWithRelationInput
    parent?: UserOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    type?: EnumRequestTypeFilter<"Request"> | $Enums.RequestType
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    reason?: StringNullableFilter<"Request"> | string | null
    requestedAt?: DateTimeFilter<"Request"> | Date | string
    expectedBack?: DateTimeNullableFilter<"Request"> | Date | string | null
    studentId?: StringFilter<"Request"> | string
    parentId?: StringNullableFilter<"Request"> | string | null
    approvedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    approvedBy?: StringNullableFilter<"Request"> | string | null
    verificationPhotoUrl?: StringNullableFilter<"Request"> | string | null
    locationLatitude?: FloatNullableFilter<"Request"> | number | null
    locationLongitude?: FloatNullableFilter<"Request"> | number | null
    locationAccuracy?: FloatNullableFilter<"Request"> | number | null
    locationAddress?: StringNullableFilter<"Request"> | string | null
    locationTimestamp?: DateTimeNullableFilter<"Request"> | Date | string | null
    parentStatus?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    parentApprovedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    parentLocationLatitude?: FloatNullableFilter<"Request"> | number | null
    parentLocationLongitude?: FloatNullableFilter<"Request"> | number | null
    parentLocationAccuracy?: FloatNullableFilter<"Request"> | number | null
    parentLocationAddress?: StringNullableFilter<"Request"> | string | null
    parentLocationTimestamp?: DateTimeNullableFilter<"Request"> | Date | string | null
    isScaledUp?: BoolFilter<"Request"> | boolean
    scaledUpAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    scaledUpBy?: StringNullableFilter<"Request"> | string | null
    chiefWardenStatus?: EnumRequestStatusNullableFilter<"Request"> | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    chiefWardenApprovedBy?: StringNullableFilter<"Request"> | string | null
    chiefWardenMessage?: StringNullableFilter<"Request"> | string | null
    confirmedByWarden?: BoolFilter<"Request"> | boolean
    confirmedByWardenAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    confirmedByWardenId?: StringNullableFilter<"Request"> | string | null
    confirmedByChiefWarden?: BoolFilter<"Request"> | boolean
    confirmedByChiefWardenAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    confirmedByChiefWardenId?: StringNullableFilter<"Request"> | string | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    requestedAt?: SortOrder
    expectedBack?: SortOrderInput | SortOrder
    studentId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    verificationPhotoUrl?: SortOrderInput | SortOrder
    locationLatitude?: SortOrderInput | SortOrder
    locationLongitude?: SortOrderInput | SortOrder
    locationAccuracy?: SortOrderInput | SortOrder
    locationAddress?: SortOrderInput | SortOrder
    locationTimestamp?: SortOrderInput | SortOrder
    parentStatus?: SortOrder
    parentApprovedAt?: SortOrderInput | SortOrder
    parentLocationLatitude?: SortOrderInput | SortOrder
    parentLocationLongitude?: SortOrderInput | SortOrder
    parentLocationAccuracy?: SortOrderInput | SortOrder
    parentLocationAddress?: SortOrderInput | SortOrder
    parentLocationTimestamp?: SortOrderInput | SortOrder
    isScaledUp?: SortOrder
    scaledUpAt?: SortOrderInput | SortOrder
    scaledUpBy?: SortOrderInput | SortOrder
    chiefWardenStatus?: SortOrderInput | SortOrder
    chiefWardenApprovedAt?: SortOrderInput | SortOrder
    chiefWardenApprovedBy?: SortOrderInput | SortOrder
    chiefWardenMessage?: SortOrderInput | SortOrder
    confirmedByWarden?: SortOrder
    confirmedByWardenAt?: SortOrderInput | SortOrder
    confirmedByWardenId?: SortOrderInput | SortOrder
    confirmedByChiefWarden?: SortOrder
    confirmedByChiefWardenAt?: SortOrderInput | SortOrder
    confirmedByChiefWardenId?: SortOrderInput | SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    type?: EnumRequestTypeWithAggregatesFilter<"Request"> | $Enums.RequestType
    status?: EnumRequestStatusWithAggregatesFilter<"Request"> | $Enums.RequestStatus
    reason?: StringNullableWithAggregatesFilter<"Request"> | string | null
    requestedAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    expectedBack?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    studentId?: StringWithAggregatesFilter<"Request"> | string
    parentId?: StringNullableWithAggregatesFilter<"Request"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"Request"> | string | null
    verificationPhotoUrl?: StringNullableWithAggregatesFilter<"Request"> | string | null
    locationLatitude?: FloatNullableWithAggregatesFilter<"Request"> | number | null
    locationLongitude?: FloatNullableWithAggregatesFilter<"Request"> | number | null
    locationAccuracy?: FloatNullableWithAggregatesFilter<"Request"> | number | null
    locationAddress?: StringNullableWithAggregatesFilter<"Request"> | string | null
    locationTimestamp?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    parentStatus?: EnumRequestStatusWithAggregatesFilter<"Request"> | $Enums.RequestStatus
    parentApprovedAt?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    parentLocationLatitude?: FloatNullableWithAggregatesFilter<"Request"> | number | null
    parentLocationLongitude?: FloatNullableWithAggregatesFilter<"Request"> | number | null
    parentLocationAccuracy?: FloatNullableWithAggregatesFilter<"Request"> | number | null
    parentLocationAddress?: StringNullableWithAggregatesFilter<"Request"> | string | null
    parentLocationTimestamp?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    isScaledUp?: BoolWithAggregatesFilter<"Request"> | boolean
    scaledUpAt?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    scaledUpBy?: StringNullableWithAggregatesFilter<"Request"> | string | null
    chiefWardenStatus?: EnumRequestStatusNullableWithAggregatesFilter<"Request"> | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    chiefWardenApprovedBy?: StringNullableWithAggregatesFilter<"Request"> | string | null
    chiefWardenMessage?: StringNullableWithAggregatesFilter<"Request"> | string | null
    confirmedByWarden?: BoolWithAggregatesFilter<"Request"> | boolean
    confirmedByWardenAt?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    confirmedByWardenId?: StringNullableWithAggregatesFilter<"Request"> | string | null
    confirmedByChiefWarden?: BoolWithAggregatesFilter<"Request"> | boolean
    confirmedByChiefWardenAt?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    confirmedByChiefWardenId?: StringNullableWithAggregatesFilter<"Request"> | string | null
  }

  export type EmailNotificationWhereInput = {
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    id?: StringFilter<"EmailNotification"> | string
    to?: StringFilter<"EmailNotification"> | string
    subject?: StringFilter<"EmailNotification"> | string
    content?: StringFilter<"EmailNotification"> | string
    type?: EnumEmailTypeFilter<"EmailNotification"> | $Enums.EmailType
    status?: EnumEmailStatusFilter<"EmailNotification"> | $Enums.EmailStatus
    sentAt?: DateTimeNullableFilter<"EmailNotification"> | Date | string | null
    failureReason?: StringNullableFilter<"EmailNotification"> | string | null
    retryCount?: IntFilter<"EmailNotification"> | number
    maxRetries?: IntFilter<"EmailNotification"> | number
    createdAt?: DateTimeFilter<"EmailNotification"> | Date | string
    updatedAt?: DateTimeFilter<"EmailNotification"> | Date | string
    relatedMessageId?: StringNullableFilter<"EmailNotification"> | string | null
    relatedRequestId?: StringNullableFilter<"EmailNotification"> | string | null
    relatedUserId?: StringNullableFilter<"EmailNotification"> | string | null
  }

  export type EmailNotificationOrderByWithRelationInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    relatedMessageId?: SortOrderInput | SortOrder
    relatedRequestId?: SortOrderInput | SortOrder
    relatedUserId?: SortOrderInput | SortOrder
  }

  export type EmailNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    to?: StringFilter<"EmailNotification"> | string
    subject?: StringFilter<"EmailNotification"> | string
    content?: StringFilter<"EmailNotification"> | string
    type?: EnumEmailTypeFilter<"EmailNotification"> | $Enums.EmailType
    status?: EnumEmailStatusFilter<"EmailNotification"> | $Enums.EmailStatus
    sentAt?: DateTimeNullableFilter<"EmailNotification"> | Date | string | null
    failureReason?: StringNullableFilter<"EmailNotification"> | string | null
    retryCount?: IntFilter<"EmailNotification"> | number
    maxRetries?: IntFilter<"EmailNotification"> | number
    createdAt?: DateTimeFilter<"EmailNotification"> | Date | string
    updatedAt?: DateTimeFilter<"EmailNotification"> | Date | string
    relatedMessageId?: StringNullableFilter<"EmailNotification"> | string | null
    relatedRequestId?: StringNullableFilter<"EmailNotification"> | string | null
    relatedUserId?: StringNullableFilter<"EmailNotification"> | string | null
  }, "id">

  export type EmailNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    relatedMessageId?: SortOrderInput | SortOrder
    relatedRequestId?: SortOrderInput | SortOrder
    relatedUserId?: SortOrderInput | SortOrder
    _count?: EmailNotificationCountOrderByAggregateInput
    _avg?: EmailNotificationAvgOrderByAggregateInput
    _max?: EmailNotificationMaxOrderByAggregateInput
    _min?: EmailNotificationMinOrderByAggregateInput
    _sum?: EmailNotificationSumOrderByAggregateInput
  }

  export type EmailNotificationScalarWhereWithAggregatesInput = {
    AND?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    OR?: EmailNotificationScalarWhereWithAggregatesInput[]
    NOT?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailNotification"> | string
    to?: StringWithAggregatesFilter<"EmailNotification"> | string
    subject?: StringWithAggregatesFilter<"EmailNotification"> | string
    content?: StringWithAggregatesFilter<"EmailNotification"> | string
    type?: EnumEmailTypeWithAggregatesFilter<"EmailNotification"> | $Enums.EmailType
    status?: EnumEmailStatusWithAggregatesFilter<"EmailNotification"> | $Enums.EmailStatus
    sentAt?: DateTimeNullableWithAggregatesFilter<"EmailNotification"> | Date | string | null
    failureReason?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
    retryCount?: IntWithAggregatesFilter<"EmailNotification"> | number
    maxRetries?: IntWithAggregatesFilter<"EmailNotification"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EmailNotification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailNotification"> | Date | string
    relatedMessageId?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
    relatedRequestId?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
    relatedUserId?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
  }

  export type BuildingCreateInput = {
    id?: string
    name: string
    displayName: string
    totalCapacity: number
    currentOccupancy?: number
    floors: number
    roomsPerFloor: number
    studentsPerRoom: number
    description?: string | null
    facilities?: string | null
    wardenOffice?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingUncheckedCreateInput = {
    id?: string
    name: string
    displayName: string
    totalCapacity: number
    currentOccupancy?: number
    floors: number
    roomsPerFloor: number
    studentsPerRoom: number
    description?: string | null
    facilities?: string | null
    wardenOffice?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: IntFieldUpdateOperationsInput | number
    currentOccupancy?: IntFieldUpdateOperationsInput | number
    floors?: IntFieldUpdateOperationsInput | number
    roomsPerFloor?: IntFieldUpdateOperationsInput | number
    studentsPerRoom?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: NullableStringFieldUpdateOperationsInput | string | null
    wardenOffice?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: IntFieldUpdateOperationsInput | number
    currentOccupancy?: IntFieldUpdateOperationsInput | number
    floors?: IntFieldUpdateOperationsInput | number
    roomsPerFloor?: IntFieldUpdateOperationsInput | number
    studentsPerRoom?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: NullableStringFieldUpdateOperationsInput | string | null
    wardenOffice?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingCreateManyInput = {
    id?: string
    name: string
    displayName: string
    totalCapacity: number
    currentOccupancy?: number
    floors: number
    roomsPerFloor: number
    studentsPerRoom: number
    description?: string | null
    facilities?: string | null
    wardenOffice?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: IntFieldUpdateOperationsInput | number
    currentOccupancy?: IntFieldUpdateOperationsInput | number
    floors?: IntFieldUpdateOperationsInput | number
    roomsPerFloor?: IntFieldUpdateOperationsInput | number
    studentsPerRoom?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: NullableStringFieldUpdateOperationsInput | string | null
    wardenOffice?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: IntFieldUpdateOperationsInput | number
    currentOccupancy?: IntFieldUpdateOperationsInput | number
    floors?: IntFieldUpdateOperationsInput | number
    roomsPerFloor?: IntFieldUpdateOperationsInput | number
    studentsPerRoom?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: NullableStringFieldUpdateOperationsInput | string | null
    wardenOffice?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestCreateNestedManyWithoutStudentInput
    parentRequests?: RequestCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileUncheckedCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileUncheckedCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestUncheckedCreateNestedManyWithoutStudentInput
    parentRequests?: RequestUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUncheckedUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUncheckedUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUncheckedUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProfileCreateInput = {
    id?: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentProfileInput
    room?: RoomCreateNestedOneWithoutStudentsInput
    motherProfile?: ParentProfileCreateNestedOneWithoutChildrenAsMotherInput
    fatherProfile?: ParentProfileCreateNestedOneWithoutChildrenAsFatherInput
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: string
    userId: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    motherProfileId?: string | null
    fatherProfileId?: string | null
  }

  export type StudentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    room?: RoomUpdateOneWithoutStudentsNestedInput
    motherProfile?: ParentProfileUpdateOneWithoutChildrenAsMotherNestedInput
    fatherProfile?: ParentProfileUpdateOneWithoutChildrenAsFatherNestedInput
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    motherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileCreateManyInput = {
    id?: string
    userId: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    motherProfileId?: string | null
    fatherProfileId?: string | null
  }

  export type StudentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    motherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParentProfileCreateInput = {
    id?: string
    address?: string | null
    emergencyContact?: string | null
    relationship?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParentProfileInput
    childrenAsMother?: StudentProfileCreateNestedManyWithoutMotherProfileInput
    childrenAsFather?: StudentProfileCreateNestedManyWithoutFatherProfileInput
  }

  export type ParentProfileUncheckedCreateInput = {
    id?: string
    userId: string
    address?: string | null
    emergencyContact?: string | null
    relationship?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAsMother?: StudentProfileUncheckedCreateNestedManyWithoutMotherProfileInput
    childrenAsFather?: StudentProfileUncheckedCreateNestedManyWithoutFatherProfileInput
  }

  export type ParentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParentProfileNestedInput
    childrenAsMother?: StudentProfileUpdateManyWithoutMotherProfileNestedInput
    childrenAsFather?: StudentProfileUpdateManyWithoutFatherProfileNestedInput
  }

  export type ParentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAsMother?: StudentProfileUncheckedUpdateManyWithoutMotherProfileNestedInput
    childrenAsFather?: StudentProfileUncheckedUpdateManyWithoutFatherProfileNestedInput
  }

  export type ParentProfileCreateManyInput = {
    id?: string
    userId: string
    address?: string | null
    emergencyContact?: string | null
    relationship?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardenProfileCreateInput = {
    id?: string
    assignedBuilding?: string | null
    wardNumber?: string | null
    responsibilities?: string | null
    shiftHours?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWardenProfileInput
  }

  export type WardenProfileUncheckedCreateInput = {
    id?: string
    userId: string
    assignedBuilding?: string | null
    wardNumber?: string | null
    responsibilities?: string | null
    shiftHours?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WardenProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedBuilding?: NullableStringFieldUpdateOperationsInput | string | null
    wardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWardenProfileNestedInput
  }

  export type WardenProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedBuilding?: NullableStringFieldUpdateOperationsInput | string | null
    wardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardenProfileCreateManyInput = {
    id?: string
    userId: string
    assignedBuilding?: string | null
    wardNumber?: string | null
    responsibilities?: string | null
    shiftHours?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WardenProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedBuilding?: NullableStringFieldUpdateOperationsInput | string | null
    wardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardenProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedBuilding?: NullableStringFieldUpdateOperationsInput | string | null
    wardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChiefWardenProfileCreateInput = {
    id?: string
    department?: string | null
    responsibilities?: string | null
    adminLevel?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChiefWardenProfileInput
  }

  export type ChiefWardenProfileUncheckedCreateInput = {
    id?: string
    userId: string
    department?: string | null
    responsibilities?: string | null
    adminLevel?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChiefWardenProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    adminLevel?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChiefWardenProfileNestedInput
  }

  export type ChiefWardenProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    adminLevel?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChiefWardenProfileCreateManyInput = {
    id?: string
    userId: string
    department?: string | null
    responsibilities?: string | null
    adminLevel?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChiefWardenProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    adminLevel?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChiefWardenProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    adminLevel?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatronProfileCreateInput = {
    id?: string
    employeeId: string
    department?: string | null
    responsibilities?: string | null
    shiftStartTime?: string | null
    shiftEndTime?: string | null
    isActive?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMatronProfileInput
  }

  export type MatronProfileUncheckedCreateInput = {
    id?: string
    userId: string
    employeeId: string
    department?: string | null
    responsibilities?: string | null
    shiftStartTime?: string | null
    shiftEndTime?: string | null
    isActive?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatronProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    shiftEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatronProfileNestedInput
  }

  export type MatronProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    shiftEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatronProfileCreateManyInput = {
    id?: string
    userId: string
    employeeId: string
    department?: string | null
    responsibilities?: string | null
    shiftStartTime?: string | null
    shiftEndTime?: string | null
    isActive?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatronProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    shiftEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatronProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    shiftEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageThreadCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessageAt?: Date | string
    participantIds?: MessageThreadCreateparticipantIdsInput | string[]
    messages?: MessageCreateNestedManyWithoutThreadInput
  }

  export type MessageThreadUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessageAt?: Date | string
    participantIds?: MessageThreadCreateparticipantIdsInput | string[]
    messages?: MessageUncheckedCreateNestedManyWithoutThreadInput
  }

  export type MessageThreadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: MessageThreadUpdateparticipantIdsInput | string[]
    messages?: MessageUpdateManyWithoutThreadNestedInput
  }

  export type MessageThreadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: MessageThreadUpdateparticipantIdsInput | string[]
    messages?: MessageUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type MessageThreadCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessageAt?: Date | string
    participantIds?: MessageThreadCreateparticipantIdsInput | string[]
  }

  export type MessageThreadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: MessageThreadUpdateparticipantIdsInput | string[]
  }

  export type MessageThreadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: MessageThreadUpdateparticipantIdsInput | string[]
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    thread: MessageThreadCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    senderId: string
    receiverId: string
    threadId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    thread?: MessageThreadUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    senderId: string
    receiverId: string
    threadId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    roomNumber: string
    floorNumber: string
    building: string
    capacity: number
    isOccupied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentProfileCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    roomNumber: string
    floorNumber: string
    building: string
    capacity: number
    isOccupied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentProfileUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    roomNumber: string
    floorNumber: string
    building: string
    capacity: number
    isOccupied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    reason?: string | null
    requestedAt?: Date | string
    expectedBack?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    verificationPhotoUrl?: string | null
    locationLatitude?: number | null
    locationLongitude?: number | null
    locationAccuracy?: number | null
    locationAddress?: string | null
    locationTimestamp?: Date | string | null
    parentStatus?: $Enums.RequestStatus
    parentApprovedAt?: Date | string | null
    parentLocationLatitude?: number | null
    parentLocationLongitude?: number | null
    parentLocationAccuracy?: number | null
    parentLocationAddress?: string | null
    parentLocationTimestamp?: Date | string | null
    isScaledUp?: boolean
    scaledUpAt?: Date | string | null
    scaledUpBy?: string | null
    chiefWardenStatus?: $Enums.RequestStatus | null
    chiefWardenApprovedAt?: Date | string | null
    chiefWardenApprovedBy?: string | null
    chiefWardenMessage?: string | null
    confirmedByWarden?: boolean
    confirmedByWardenAt?: Date | string | null
    confirmedByWardenId?: string | null
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: Date | string | null
    confirmedByChiefWardenId?: string | null
    student: UserCreateNestedOneWithoutStudentRequestsInput
    parent?: UserCreateNestedOneWithoutParentRequestsInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    reason?: string | null
    requestedAt?: Date | string
    expectedBack?: Date | string | null
    studentId: string
    parentId?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    verificationPhotoUrl?: string | null
    locationLatitude?: number | null
    locationLongitude?: number | null
    locationAccuracy?: number | null
    locationAddress?: string | null
    locationTimestamp?: Date | string | null
    parentStatus?: $Enums.RequestStatus
    parentApprovedAt?: Date | string | null
    parentLocationLatitude?: number | null
    parentLocationLongitude?: number | null
    parentLocationAccuracy?: number | null
    parentLocationAddress?: string | null
    parentLocationTimestamp?: Date | string | null
    isScaledUp?: boolean
    scaledUpAt?: Date | string | null
    scaledUpBy?: string | null
    chiefWardenStatus?: $Enums.RequestStatus | null
    chiefWardenApprovedAt?: Date | string | null
    chiefWardenApprovedBy?: string | null
    chiefWardenMessage?: string | null
    confirmedByWarden?: boolean
    confirmedByWardenAt?: Date | string | null
    confirmedByWardenId?: string | null
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: Date | string | null
    confirmedByChiefWardenId?: string | null
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    student?: UserUpdateOneRequiredWithoutStudentRequestsNestedInput
    parent?: UserUpdateOneWithoutParentRequestsNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestCreateManyInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    reason?: string | null
    requestedAt?: Date | string
    expectedBack?: Date | string | null
    studentId: string
    parentId?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    verificationPhotoUrl?: string | null
    locationLatitude?: number | null
    locationLongitude?: number | null
    locationAccuracy?: number | null
    locationAddress?: string | null
    locationTimestamp?: Date | string | null
    parentStatus?: $Enums.RequestStatus
    parentApprovedAt?: Date | string | null
    parentLocationLatitude?: number | null
    parentLocationLongitude?: number | null
    parentLocationAccuracy?: number | null
    parentLocationAddress?: string | null
    parentLocationTimestamp?: Date | string | null
    isScaledUp?: boolean
    scaledUpAt?: Date | string | null
    scaledUpBy?: string | null
    chiefWardenStatus?: $Enums.RequestStatus | null
    chiefWardenApprovedAt?: Date | string | null
    chiefWardenApprovedBy?: string | null
    chiefWardenMessage?: string | null
    confirmedByWarden?: boolean
    confirmedByWardenAt?: Date | string | null
    confirmedByWardenId?: string | null
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: Date | string | null
    confirmedByChiefWardenId?: string | null
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationCreateInput = {
    id?: string
    to: string
    subject: string
    content: string
    type: $Enums.EmailType
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    failureReason?: string | null
    retryCount?: number
    maxRetries?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedMessageId?: string | null
    relatedRequestId?: string | null
    relatedUserId?: string | null
  }

  export type EmailNotificationUncheckedCreateInput = {
    id?: string
    to: string
    subject: string
    content: string
    type: $Enums.EmailType
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    failureReason?: string | null
    retryCount?: number
    maxRetries?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedMessageId?: string | null
    relatedRequestId?: string | null
    relatedUserId?: string | null
  }

  export type EmailNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationCreateManyInput = {
    id?: string
    to: string
    subject: string
    content: string
    type: $Enums.EmailType
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    failureReason?: string | null
    retryCount?: number
    maxRetries?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedMessageId?: string | null
    relatedRequestId?: string | null
    relatedUserId?: string | null
  }

  export type EmailNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BuildingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    totalCapacity?: SortOrder
    currentOccupancy?: SortOrder
    floors?: SortOrder
    roomsPerFloor?: SortOrder
    studentsPerRoom?: SortOrder
    description?: SortOrder
    facilities?: SortOrder
    wardenOffice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingAvgOrderByAggregateInput = {
    totalCapacity?: SortOrder
    currentOccupancy?: SortOrder
    floors?: SortOrder
    roomsPerFloor?: SortOrder
    studentsPerRoom?: SortOrder
  }

  export type BuildingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    totalCapacity?: SortOrder
    currentOccupancy?: SortOrder
    floors?: SortOrder
    roomsPerFloor?: SortOrder
    studentsPerRoom?: SortOrder
    description?: SortOrder
    facilities?: SortOrder
    wardenOffice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    totalCapacity?: SortOrder
    currentOccupancy?: SortOrder
    floors?: SortOrder
    roomsPerFloor?: SortOrder
    studentsPerRoom?: SortOrder
    description?: SortOrder
    facilities?: SortOrder
    wardenOffice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingSumOrderByAggregateInput = {
    totalCapacity?: SortOrder
    currentOccupancy?: SortOrder
    floors?: SortOrder
    roomsPerFloor?: SortOrder
    studentsPerRoom?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StudentProfileNullableScalarRelationFilter = {
    is?: StudentProfileWhereInput | null
    isNot?: StudentProfileWhereInput | null
  }

  export type ParentProfileNullableScalarRelationFilter = {
    is?: ParentProfileWhereInput | null
    isNot?: ParentProfileWhereInput | null
  }

  export type WardenProfileNullableScalarRelationFilter = {
    is?: WardenProfileWhereInput | null
    isNot?: WardenProfileWhereInput | null
  }

  export type ChiefWardenProfileNullableScalarRelationFilter = {
    is?: ChiefWardenProfileWhereInput | null
    isNot?: ChiefWardenProfileWhereInput | null
  }

  export type MatronProfileNullableScalarRelationFilter = {
    is?: MatronProfileWhereInput | null
    isNot?: MatronProfileWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoomNullableScalarRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
    username?: SortOrder
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    building?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    emergencyContact?: SortOrder
    medicalInfo?: SortOrder
    isAtHostel?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    motherProfileId?: SortOrder
    fatherProfileId?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
    username?: SortOrder
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    building?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    emergencyContact?: SortOrder
    medicalInfo?: SortOrder
    isAtHostel?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    motherProfileId?: SortOrder
    fatherProfileId?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
    username?: SortOrder
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    building?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    emergencyContact?: SortOrder
    medicalInfo?: SortOrder
    isAtHostel?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    motherProfileId?: SortOrder
    fatherProfileId?: SortOrder
  }

  export type StudentProfileListRelationFilter = {
    every?: StudentProfileWhereInput
    some?: StudentProfileWhereInput
    none?: StudentProfileWhereInput
  }

  export type StudentProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    relationship?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    relationship?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    relationship?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WardenProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assignedBuilding?: SortOrder
    wardNumber?: SortOrder
    responsibilities?: SortOrder
    shiftHours?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WardenProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assignedBuilding?: SortOrder
    wardNumber?: SortOrder
    responsibilities?: SortOrder
    shiftHours?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WardenProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assignedBuilding?: SortOrder
    wardNumber?: SortOrder
    responsibilities?: SortOrder
    shiftHours?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChiefWardenProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    adminLevel?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChiefWardenProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    adminLevel?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChiefWardenProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    adminLevel?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatronProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    shiftStartTime?: SortOrder
    shiftEndTime?: SortOrder
    isActive?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatronProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    shiftStartTime?: SortOrder
    shiftEndTime?: SortOrder
    isActive?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatronProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    shiftStartTime?: SortOrder
    shiftEndTime?: SortOrder
    isActive?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MessageThreadCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessageAt?: SortOrder
    participantIds?: SortOrder
  }

  export type MessageThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type MessageThreadMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type MessageThreadScalarRelationFilter = {
    is?: MessageThreadWhereInput
    isNot?: MessageThreadWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    threadId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    threadId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    threadId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    building?: SortOrder
    capacity?: SortOrder
    isOccupied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    building?: SortOrder
    capacity?: SortOrder
    isOccupied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    building?: SortOrder
    capacity?: SortOrder
    isOccupied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type EnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRequestStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRequestStatusNullableFilter<$PrismaModel> | $Enums.RequestStatus | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    requestedAt?: SortOrder
    expectedBack?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    verificationPhotoUrl?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    locationAccuracy?: SortOrder
    locationAddress?: SortOrder
    locationTimestamp?: SortOrder
    parentStatus?: SortOrder
    parentApprovedAt?: SortOrder
    parentLocationLatitude?: SortOrder
    parentLocationLongitude?: SortOrder
    parentLocationAccuracy?: SortOrder
    parentLocationAddress?: SortOrder
    parentLocationTimestamp?: SortOrder
    isScaledUp?: SortOrder
    scaledUpAt?: SortOrder
    scaledUpBy?: SortOrder
    chiefWardenStatus?: SortOrder
    chiefWardenApprovedAt?: SortOrder
    chiefWardenApprovedBy?: SortOrder
    chiefWardenMessage?: SortOrder
    confirmedByWarden?: SortOrder
    confirmedByWardenAt?: SortOrder
    confirmedByWardenId?: SortOrder
    confirmedByChiefWarden?: SortOrder
    confirmedByChiefWardenAt?: SortOrder
    confirmedByChiefWardenId?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    locationAccuracy?: SortOrder
    parentLocationLatitude?: SortOrder
    parentLocationLongitude?: SortOrder
    parentLocationAccuracy?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    requestedAt?: SortOrder
    expectedBack?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    verificationPhotoUrl?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    locationAccuracy?: SortOrder
    locationAddress?: SortOrder
    locationTimestamp?: SortOrder
    parentStatus?: SortOrder
    parentApprovedAt?: SortOrder
    parentLocationLatitude?: SortOrder
    parentLocationLongitude?: SortOrder
    parentLocationAccuracy?: SortOrder
    parentLocationAddress?: SortOrder
    parentLocationTimestamp?: SortOrder
    isScaledUp?: SortOrder
    scaledUpAt?: SortOrder
    scaledUpBy?: SortOrder
    chiefWardenStatus?: SortOrder
    chiefWardenApprovedAt?: SortOrder
    chiefWardenApprovedBy?: SortOrder
    chiefWardenMessage?: SortOrder
    confirmedByWarden?: SortOrder
    confirmedByWardenAt?: SortOrder
    confirmedByWardenId?: SortOrder
    confirmedByChiefWarden?: SortOrder
    confirmedByChiefWardenAt?: SortOrder
    confirmedByChiefWardenId?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    requestedAt?: SortOrder
    expectedBack?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    verificationPhotoUrl?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    locationAccuracy?: SortOrder
    locationAddress?: SortOrder
    locationTimestamp?: SortOrder
    parentStatus?: SortOrder
    parentApprovedAt?: SortOrder
    parentLocationLatitude?: SortOrder
    parentLocationLongitude?: SortOrder
    parentLocationAccuracy?: SortOrder
    parentLocationAddress?: SortOrder
    parentLocationTimestamp?: SortOrder
    isScaledUp?: SortOrder
    scaledUpAt?: SortOrder
    scaledUpBy?: SortOrder
    chiefWardenStatus?: SortOrder
    chiefWardenApprovedAt?: SortOrder
    chiefWardenApprovedBy?: SortOrder
    chiefWardenMessage?: SortOrder
    confirmedByWarden?: SortOrder
    confirmedByWardenAt?: SortOrder
    confirmedByWardenId?: SortOrder
    confirmedByChiefWarden?: SortOrder
    confirmedByChiefWardenAt?: SortOrder
    confirmedByChiefWardenId?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    locationAccuracy?: SortOrder
    parentLocationLatitude?: SortOrder
    parentLocationLongitude?: SortOrder
    parentLocationAccuracy?: SortOrder
  }

  export type EnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRequestStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusNullableFilter<$PrismaModel>
  }

  export type EnumEmailTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeFilter<$PrismaModel> | $Enums.EmailType
  }

  export type EnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type EmailNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    failureReason?: SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    relatedMessageId?: SortOrder
    relatedRequestId?: SortOrder
    relatedUserId?: SortOrder
  }

  export type EmailNotificationAvgOrderByAggregateInput = {
    retryCount?: SortOrder
    maxRetries?: SortOrder
  }

  export type EmailNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    failureReason?: SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    relatedMessageId?: SortOrder
    relatedRequestId?: SortOrder
    relatedUserId?: SortOrder
  }

  export type EmailNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    failureReason?: SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    relatedMessageId?: SortOrder
    relatedRequestId?: SortOrder
    relatedUserId?: SortOrder
  }

  export type EmailNotificationSumOrderByAggregateInput = {
    retryCount?: SortOrder
    maxRetries?: SortOrder
  }

  export type EnumEmailTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailTypeFilter<$PrismaModel>
  }

  export type EnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type ParentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ParentProfileCreateWithoutUserInput, ParentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentProfileCreateOrConnectWithoutUserInput
    connect?: ParentProfileWhereUniqueInput
  }

  export type WardenProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<WardenProfileCreateWithoutUserInput, WardenProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WardenProfileCreateOrConnectWithoutUserInput
    connect?: WardenProfileWhereUniqueInput
  }

  export type ChiefWardenProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ChiefWardenProfileCreateWithoutUserInput, ChiefWardenProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChiefWardenProfileCreateOrConnectWithoutUserInput
    connect?: ChiefWardenProfileWhereUniqueInput
  }

  export type MatronProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<MatronProfileCreateWithoutUserInput, MatronProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MatronProfileCreateOrConnectWithoutUserInput
    connect?: MatronProfileWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutStudentInput = {
    create?: XOR<RequestCreateWithoutStudentInput, RequestUncheckedCreateWithoutStudentInput> | RequestCreateWithoutStudentInput[] | RequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutStudentInput | RequestCreateOrConnectWithoutStudentInput[]
    createMany?: RequestCreateManyStudentInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutParentInput = {
    create?: XOR<RequestCreateWithoutParentInput, RequestUncheckedCreateWithoutParentInput> | RequestCreateWithoutParentInput[] | RequestUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutParentInput | RequestCreateOrConnectWithoutParentInput[]
    createMany?: RequestCreateManyParentInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type ParentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ParentProfileCreateWithoutUserInput, ParentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentProfileCreateOrConnectWithoutUserInput
    connect?: ParentProfileWhereUniqueInput
  }

  export type WardenProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WardenProfileCreateWithoutUserInput, WardenProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WardenProfileCreateOrConnectWithoutUserInput
    connect?: WardenProfileWhereUniqueInput
  }

  export type ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ChiefWardenProfileCreateWithoutUserInput, ChiefWardenProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChiefWardenProfileCreateOrConnectWithoutUserInput
    connect?: ChiefWardenProfileWhereUniqueInput
  }

  export type MatronProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MatronProfileCreateWithoutUserInput, MatronProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MatronProfileCreateOrConnectWithoutUserInput
    connect?: MatronProfileWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<RequestCreateWithoutStudentInput, RequestUncheckedCreateWithoutStudentInput> | RequestCreateWithoutStudentInput[] | RequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutStudentInput | RequestCreateOrConnectWithoutStudentInput[]
    createMany?: RequestCreateManyStudentInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<RequestCreateWithoutParentInput, RequestUncheckedCreateWithoutParentInput> | RequestCreateWithoutParentInput[] | RequestUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutParentInput | RequestCreateOrConnectWithoutParentInput[]
    createMany?: RequestCreateManyParentInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type ParentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParentProfileCreateWithoutUserInput, ParentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentProfileCreateOrConnectWithoutUserInput
    upsert?: ParentProfileUpsertWithoutUserInput
    disconnect?: ParentProfileWhereInput | boolean
    delete?: ParentProfileWhereInput | boolean
    connect?: ParentProfileWhereUniqueInput
    update?: XOR<XOR<ParentProfileUpdateToOneWithWhereWithoutUserInput, ParentProfileUpdateWithoutUserInput>, ParentProfileUncheckedUpdateWithoutUserInput>
  }

  export type WardenProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<WardenProfileCreateWithoutUserInput, WardenProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WardenProfileCreateOrConnectWithoutUserInput
    upsert?: WardenProfileUpsertWithoutUserInput
    disconnect?: WardenProfileWhereInput | boolean
    delete?: WardenProfileWhereInput | boolean
    connect?: WardenProfileWhereUniqueInput
    update?: XOR<XOR<WardenProfileUpdateToOneWithWhereWithoutUserInput, WardenProfileUpdateWithoutUserInput>, WardenProfileUncheckedUpdateWithoutUserInput>
  }

  export type ChiefWardenProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ChiefWardenProfileCreateWithoutUserInput, ChiefWardenProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChiefWardenProfileCreateOrConnectWithoutUserInput
    upsert?: ChiefWardenProfileUpsertWithoutUserInput
    disconnect?: ChiefWardenProfileWhereInput | boolean
    delete?: ChiefWardenProfileWhereInput | boolean
    connect?: ChiefWardenProfileWhereUniqueInput
    update?: XOR<XOR<ChiefWardenProfileUpdateToOneWithWhereWithoutUserInput, ChiefWardenProfileUpdateWithoutUserInput>, ChiefWardenProfileUncheckedUpdateWithoutUserInput>
  }

  export type MatronProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<MatronProfileCreateWithoutUserInput, MatronProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MatronProfileCreateOrConnectWithoutUserInput
    upsert?: MatronProfileUpsertWithoutUserInput
    disconnect?: MatronProfileWhereInput | boolean
    delete?: MatronProfileWhereInput | boolean
    connect?: MatronProfileWhereUniqueInput
    update?: XOR<XOR<MatronProfileUpdateToOneWithWhereWithoutUserInput, MatronProfileUpdateWithoutUserInput>, MatronProfileUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RequestCreateWithoutStudentInput, RequestUncheckedCreateWithoutStudentInput> | RequestCreateWithoutStudentInput[] | RequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutStudentInput | RequestCreateOrConnectWithoutStudentInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutStudentInput | RequestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RequestCreateManyStudentInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutStudentInput | RequestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutStudentInput | RequestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutParentNestedInput = {
    create?: XOR<RequestCreateWithoutParentInput, RequestUncheckedCreateWithoutParentInput> | RequestCreateWithoutParentInput[] | RequestUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutParentInput | RequestCreateOrConnectWithoutParentInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutParentInput | RequestUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RequestCreateManyParentInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutParentInput | RequestUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutParentInput | RequestUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type ParentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParentProfileCreateWithoutUserInput, ParentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentProfileCreateOrConnectWithoutUserInput
    upsert?: ParentProfileUpsertWithoutUserInput
    disconnect?: ParentProfileWhereInput | boolean
    delete?: ParentProfileWhereInput | boolean
    connect?: ParentProfileWhereUniqueInput
    update?: XOR<XOR<ParentProfileUpdateToOneWithWhereWithoutUserInput, ParentProfileUpdateWithoutUserInput>, ParentProfileUncheckedUpdateWithoutUserInput>
  }

  export type WardenProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WardenProfileCreateWithoutUserInput, WardenProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WardenProfileCreateOrConnectWithoutUserInput
    upsert?: WardenProfileUpsertWithoutUserInput
    disconnect?: WardenProfileWhereInput | boolean
    delete?: WardenProfileWhereInput | boolean
    connect?: WardenProfileWhereUniqueInput
    update?: XOR<XOR<WardenProfileUpdateToOneWithWhereWithoutUserInput, WardenProfileUpdateWithoutUserInput>, WardenProfileUncheckedUpdateWithoutUserInput>
  }

  export type ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ChiefWardenProfileCreateWithoutUserInput, ChiefWardenProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChiefWardenProfileCreateOrConnectWithoutUserInput
    upsert?: ChiefWardenProfileUpsertWithoutUserInput
    disconnect?: ChiefWardenProfileWhereInput | boolean
    delete?: ChiefWardenProfileWhereInput | boolean
    connect?: ChiefWardenProfileWhereUniqueInput
    update?: XOR<XOR<ChiefWardenProfileUpdateToOneWithWhereWithoutUserInput, ChiefWardenProfileUpdateWithoutUserInput>, ChiefWardenProfileUncheckedUpdateWithoutUserInput>
  }

  export type MatronProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MatronProfileCreateWithoutUserInput, MatronProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MatronProfileCreateOrConnectWithoutUserInput
    upsert?: MatronProfileUpsertWithoutUserInput
    disconnect?: MatronProfileWhereInput | boolean
    delete?: MatronProfileWhereInput | boolean
    connect?: MatronProfileWhereUniqueInput
    update?: XOR<XOR<MatronProfileUpdateToOneWithWhereWithoutUserInput, MatronProfileUpdateWithoutUserInput>, MatronProfileUncheckedUpdateWithoutUserInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RequestCreateWithoutStudentInput, RequestUncheckedCreateWithoutStudentInput> | RequestCreateWithoutStudentInput[] | RequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutStudentInput | RequestCreateOrConnectWithoutStudentInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutStudentInput | RequestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RequestCreateManyStudentInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutStudentInput | RequestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutStudentInput | RequestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<RequestCreateWithoutParentInput, RequestUncheckedCreateWithoutParentInput> | RequestCreateWithoutParentInput[] | RequestUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutParentInput | RequestCreateOrConnectWithoutParentInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutParentInput | RequestUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RequestCreateManyParentInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutParentInput | RequestUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutParentInput | RequestUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutStudentsInput = {
    create?: XOR<RoomCreateWithoutStudentsInput, RoomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutStudentsInput
    connect?: RoomWhereUniqueInput
  }

  export type ParentProfileCreateNestedOneWithoutChildrenAsMotherInput = {
    create?: XOR<ParentProfileCreateWithoutChildrenAsMotherInput, ParentProfileUncheckedCreateWithoutChildrenAsMotherInput>
    connectOrCreate?: ParentProfileCreateOrConnectWithoutChildrenAsMotherInput
    connect?: ParentProfileWhereUniqueInput
  }

  export type ParentProfileCreateNestedOneWithoutChildrenAsFatherInput = {
    create?: XOR<ParentProfileCreateWithoutChildrenAsFatherInput, ParentProfileUncheckedCreateWithoutChildrenAsFatherInput>
    connectOrCreate?: ParentProfileCreateOrConnectWithoutChildrenAsFatherInput
    connect?: ParentProfileWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    upsert?: UserUpsertWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentProfileInput, UserUpdateWithoutStudentProfileInput>, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type RoomUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<RoomCreateWithoutStudentsInput, RoomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutStudentsInput
    upsert?: RoomUpsertWithoutStudentsInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutStudentsInput, RoomUpdateWithoutStudentsInput>, RoomUncheckedUpdateWithoutStudentsInput>
  }

  export type ParentProfileUpdateOneWithoutChildrenAsMotherNestedInput = {
    create?: XOR<ParentProfileCreateWithoutChildrenAsMotherInput, ParentProfileUncheckedCreateWithoutChildrenAsMotherInput>
    connectOrCreate?: ParentProfileCreateOrConnectWithoutChildrenAsMotherInput
    upsert?: ParentProfileUpsertWithoutChildrenAsMotherInput
    disconnect?: ParentProfileWhereInput | boolean
    delete?: ParentProfileWhereInput | boolean
    connect?: ParentProfileWhereUniqueInput
    update?: XOR<XOR<ParentProfileUpdateToOneWithWhereWithoutChildrenAsMotherInput, ParentProfileUpdateWithoutChildrenAsMotherInput>, ParentProfileUncheckedUpdateWithoutChildrenAsMotherInput>
  }

  export type ParentProfileUpdateOneWithoutChildrenAsFatherNestedInput = {
    create?: XOR<ParentProfileCreateWithoutChildrenAsFatherInput, ParentProfileUncheckedCreateWithoutChildrenAsFatherInput>
    connectOrCreate?: ParentProfileCreateOrConnectWithoutChildrenAsFatherInput
    upsert?: ParentProfileUpsertWithoutChildrenAsFatherInput
    disconnect?: ParentProfileWhereInput | boolean
    delete?: ParentProfileWhereInput | boolean
    connect?: ParentProfileWhereUniqueInput
    update?: XOR<XOR<ParentProfileUpdateToOneWithWhereWithoutChildrenAsFatherInput, ParentProfileUpdateWithoutChildrenAsFatherInput>, ParentProfileUncheckedUpdateWithoutChildrenAsFatherInput>
  }

  export type UserCreateNestedOneWithoutParentProfileInput = {
    create?: XOR<UserCreateWithoutParentProfileInput, UserUncheckedCreateWithoutParentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentProfileInput
    connect?: UserWhereUniqueInput
  }

  export type StudentProfileCreateNestedManyWithoutMotherProfileInput = {
    create?: XOR<StudentProfileCreateWithoutMotherProfileInput, StudentProfileUncheckedCreateWithoutMotherProfileInput> | StudentProfileCreateWithoutMotherProfileInput[] | StudentProfileUncheckedCreateWithoutMotherProfileInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutMotherProfileInput | StudentProfileCreateOrConnectWithoutMotherProfileInput[]
    createMany?: StudentProfileCreateManyMotherProfileInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type StudentProfileCreateNestedManyWithoutFatherProfileInput = {
    create?: XOR<StudentProfileCreateWithoutFatherProfileInput, StudentProfileUncheckedCreateWithoutFatherProfileInput> | StudentProfileCreateWithoutFatherProfileInput[] | StudentProfileUncheckedCreateWithoutFatherProfileInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutFatherProfileInput | StudentProfileCreateOrConnectWithoutFatherProfileInput[]
    createMany?: StudentProfileCreateManyFatherProfileInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedManyWithoutMotherProfileInput = {
    create?: XOR<StudentProfileCreateWithoutMotherProfileInput, StudentProfileUncheckedCreateWithoutMotherProfileInput> | StudentProfileCreateWithoutMotherProfileInput[] | StudentProfileUncheckedCreateWithoutMotherProfileInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutMotherProfileInput | StudentProfileCreateOrConnectWithoutMotherProfileInput[]
    createMany?: StudentProfileCreateManyMotherProfileInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedManyWithoutFatherProfileInput = {
    create?: XOR<StudentProfileCreateWithoutFatherProfileInput, StudentProfileUncheckedCreateWithoutFatherProfileInput> | StudentProfileCreateWithoutFatherProfileInput[] | StudentProfileUncheckedCreateWithoutFatherProfileInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutFatherProfileInput | StudentProfileCreateOrConnectWithoutFatherProfileInput[]
    createMany?: StudentProfileCreateManyFatherProfileInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutParentProfileNestedInput = {
    create?: XOR<UserCreateWithoutParentProfileInput, UserUncheckedCreateWithoutParentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentProfileInput
    upsert?: UserUpsertWithoutParentProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParentProfileInput, UserUpdateWithoutParentProfileInput>, UserUncheckedUpdateWithoutParentProfileInput>
  }

  export type StudentProfileUpdateManyWithoutMotherProfileNestedInput = {
    create?: XOR<StudentProfileCreateWithoutMotherProfileInput, StudentProfileUncheckedCreateWithoutMotherProfileInput> | StudentProfileCreateWithoutMotherProfileInput[] | StudentProfileUncheckedCreateWithoutMotherProfileInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutMotherProfileInput | StudentProfileCreateOrConnectWithoutMotherProfileInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutMotherProfileInput | StudentProfileUpsertWithWhereUniqueWithoutMotherProfileInput[]
    createMany?: StudentProfileCreateManyMotherProfileInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutMotherProfileInput | StudentProfileUpdateWithWhereUniqueWithoutMotherProfileInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutMotherProfileInput | StudentProfileUpdateManyWithWhereWithoutMotherProfileInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type StudentProfileUpdateManyWithoutFatherProfileNestedInput = {
    create?: XOR<StudentProfileCreateWithoutFatherProfileInput, StudentProfileUncheckedCreateWithoutFatherProfileInput> | StudentProfileCreateWithoutFatherProfileInput[] | StudentProfileUncheckedCreateWithoutFatherProfileInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutFatherProfileInput | StudentProfileCreateOrConnectWithoutFatherProfileInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutFatherProfileInput | StudentProfileUpsertWithWhereUniqueWithoutFatherProfileInput[]
    createMany?: StudentProfileCreateManyFatherProfileInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutFatherProfileInput | StudentProfileUpdateWithWhereUniqueWithoutFatherProfileInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutFatherProfileInput | StudentProfileUpdateManyWithWhereWithoutFatherProfileInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateManyWithoutMotherProfileNestedInput = {
    create?: XOR<StudentProfileCreateWithoutMotherProfileInput, StudentProfileUncheckedCreateWithoutMotherProfileInput> | StudentProfileCreateWithoutMotherProfileInput[] | StudentProfileUncheckedCreateWithoutMotherProfileInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutMotherProfileInput | StudentProfileCreateOrConnectWithoutMotherProfileInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutMotherProfileInput | StudentProfileUpsertWithWhereUniqueWithoutMotherProfileInput[]
    createMany?: StudentProfileCreateManyMotherProfileInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutMotherProfileInput | StudentProfileUpdateWithWhereUniqueWithoutMotherProfileInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutMotherProfileInput | StudentProfileUpdateManyWithWhereWithoutMotherProfileInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateManyWithoutFatherProfileNestedInput = {
    create?: XOR<StudentProfileCreateWithoutFatherProfileInput, StudentProfileUncheckedCreateWithoutFatherProfileInput> | StudentProfileCreateWithoutFatherProfileInput[] | StudentProfileUncheckedCreateWithoutFatherProfileInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutFatherProfileInput | StudentProfileCreateOrConnectWithoutFatherProfileInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutFatherProfileInput | StudentProfileUpsertWithWhereUniqueWithoutFatherProfileInput[]
    createMany?: StudentProfileCreateManyFatherProfileInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutFatherProfileInput | StudentProfileUpdateWithWhereUniqueWithoutFatherProfileInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutFatherProfileInput | StudentProfileUpdateManyWithWhereWithoutFatherProfileInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWardenProfileInput = {
    create?: XOR<UserCreateWithoutWardenProfileInput, UserUncheckedCreateWithoutWardenProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutWardenProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWardenProfileNestedInput = {
    create?: XOR<UserCreateWithoutWardenProfileInput, UserUncheckedCreateWithoutWardenProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutWardenProfileInput
    upsert?: UserUpsertWithoutWardenProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWardenProfileInput, UserUpdateWithoutWardenProfileInput>, UserUncheckedUpdateWithoutWardenProfileInput>
  }

  export type UserCreateNestedOneWithoutChiefWardenProfileInput = {
    create?: XOR<UserCreateWithoutChiefWardenProfileInput, UserUncheckedCreateWithoutChiefWardenProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutChiefWardenProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChiefWardenProfileNestedInput = {
    create?: XOR<UserCreateWithoutChiefWardenProfileInput, UserUncheckedCreateWithoutChiefWardenProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutChiefWardenProfileInput
    upsert?: UserUpsertWithoutChiefWardenProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChiefWardenProfileInput, UserUpdateWithoutChiefWardenProfileInput>, UserUncheckedUpdateWithoutChiefWardenProfileInput>
  }

  export type UserCreateNestedOneWithoutMatronProfileInput = {
    create?: XOR<UserCreateWithoutMatronProfileInput, UserUncheckedCreateWithoutMatronProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatronProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMatronProfileNestedInput = {
    create?: XOR<UserCreateWithoutMatronProfileInput, UserUncheckedCreateWithoutMatronProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatronProfileInput
    upsert?: UserUpsertWithoutMatronProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatronProfileInput, UserUpdateWithoutMatronProfileInput>, UserUncheckedUpdateWithoutMatronProfileInput>
  }

  export type MessageThreadCreateparticipantIdsInput = {
    set: string[]
  }

  export type MessageCreateNestedManyWithoutThreadInput = {
    create?: XOR<MessageCreateWithoutThreadInput, MessageUncheckedCreateWithoutThreadInput> | MessageCreateWithoutThreadInput[] | MessageUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutThreadInput | MessageCreateOrConnectWithoutThreadInput[]
    createMany?: MessageCreateManyThreadInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<MessageCreateWithoutThreadInput, MessageUncheckedCreateWithoutThreadInput> | MessageCreateWithoutThreadInput[] | MessageUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutThreadInput | MessageCreateOrConnectWithoutThreadInput[]
    createMany?: MessageCreateManyThreadInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageThreadUpdateparticipantIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MessageUpdateManyWithoutThreadNestedInput = {
    create?: XOR<MessageCreateWithoutThreadInput, MessageUncheckedCreateWithoutThreadInput> | MessageCreateWithoutThreadInput[] | MessageUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutThreadInput | MessageCreateOrConnectWithoutThreadInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutThreadInput | MessageUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: MessageCreateManyThreadInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutThreadInput | MessageUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutThreadInput | MessageUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<MessageCreateWithoutThreadInput, MessageUncheckedCreateWithoutThreadInput> | MessageCreateWithoutThreadInput[] | MessageUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutThreadInput | MessageCreateOrConnectWithoutThreadInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutThreadInput | MessageUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: MessageCreateManyThreadInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutThreadInput | MessageUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutThreadInput | MessageUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageThreadCreateNestedOneWithoutMessagesInput = {
    create?: XOR<MessageThreadCreateWithoutMessagesInput, MessageThreadUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: MessageThreadCreateOrConnectWithoutMessagesInput
    connect?: MessageThreadWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type MessageThreadUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<MessageThreadCreateWithoutMessagesInput, MessageThreadUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: MessageThreadCreateOrConnectWithoutMessagesInput
    upsert?: MessageThreadUpsertWithoutMessagesInput
    connect?: MessageThreadWhereUniqueInput
    update?: XOR<XOR<MessageThreadUpdateToOneWithWhereWithoutMessagesInput, MessageThreadUpdateWithoutMessagesInput>, MessageThreadUncheckedUpdateWithoutMessagesInput>
  }

  export type StudentProfileCreateNestedManyWithoutRoomInput = {
    create?: XOR<StudentProfileCreateWithoutRoomInput, StudentProfileUncheckedCreateWithoutRoomInput> | StudentProfileCreateWithoutRoomInput[] | StudentProfileUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutRoomInput | StudentProfileCreateOrConnectWithoutRoomInput[]
    createMany?: StudentProfileCreateManyRoomInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<StudentProfileCreateWithoutRoomInput, StudentProfileUncheckedCreateWithoutRoomInput> | StudentProfileCreateWithoutRoomInput[] | StudentProfileUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutRoomInput | StudentProfileCreateOrConnectWithoutRoomInput[]
    createMany?: StudentProfileCreateManyRoomInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type StudentProfileUpdateManyWithoutRoomNestedInput = {
    create?: XOR<StudentProfileCreateWithoutRoomInput, StudentProfileUncheckedCreateWithoutRoomInput> | StudentProfileCreateWithoutRoomInput[] | StudentProfileUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutRoomInput | StudentProfileCreateOrConnectWithoutRoomInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutRoomInput | StudentProfileUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: StudentProfileCreateManyRoomInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutRoomInput | StudentProfileUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutRoomInput | StudentProfileUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<StudentProfileCreateWithoutRoomInput, StudentProfileUncheckedCreateWithoutRoomInput> | StudentProfileCreateWithoutRoomInput[] | StudentProfileUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutRoomInput | StudentProfileCreateOrConnectWithoutRoomInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutRoomInput | StudentProfileUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: StudentProfileCreateManyRoomInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutRoomInput | StudentProfileUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutRoomInput | StudentProfileUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentRequestsInput = {
    create?: XOR<UserCreateWithoutStudentRequestsInput, UserUncheckedCreateWithoutStudentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParentRequestsInput = {
    create?: XOR<UserCreateWithoutParentRequestsInput, UserUncheckedCreateWithoutParentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestTypeFieldUpdateOperationsInput = {
    set?: $Enums.RequestType
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus | null
  }

  export type UserUpdateOneRequiredWithoutStudentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutStudentRequestsInput, UserUncheckedCreateWithoutStudentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentRequestsInput
    upsert?: UserUpsertWithoutStudentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentRequestsInput, UserUpdateWithoutStudentRequestsInput>, UserUncheckedUpdateWithoutStudentRequestsInput>
  }

  export type UserUpdateOneWithoutParentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutParentRequestsInput, UserUncheckedCreateWithoutParentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentRequestsInput
    upsert?: UserUpsertWithoutParentRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParentRequestsInput, UserUpdateWithoutParentRequestsInput>, UserUncheckedUpdateWithoutParentRequestsInput>
  }

  export type EnumEmailTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmailType
  }

  export type EnumEmailStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmailStatus
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRequestStatusNullableFilter<$PrismaModel> | $Enums.RequestStatus | null
  }

  export type NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRequestStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmailTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeFilter<$PrismaModel> | $Enums.EmailType
  }

  export type NestedEnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type NestedEnumEmailTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailTypeFilter<$PrismaModel>
  }

  export type NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type StudentProfileCreateWithoutUserInput = {
    id?: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room?: RoomCreateNestedOneWithoutStudentsInput
    motherProfile?: ParentProfileCreateNestedOneWithoutChildrenAsMotherInput
    fatherProfile?: ParentProfileCreateNestedOneWithoutChildrenAsFatherInput
  }

  export type StudentProfileUncheckedCreateWithoutUserInput = {
    id?: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    motherProfileId?: string | null
    fatherProfileId?: string | null
  }

  export type StudentProfileCreateOrConnectWithoutUserInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
  }

  export type ParentProfileCreateWithoutUserInput = {
    id?: string
    address?: string | null
    emergencyContact?: string | null
    relationship?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAsMother?: StudentProfileCreateNestedManyWithoutMotherProfileInput
    childrenAsFather?: StudentProfileCreateNestedManyWithoutFatherProfileInput
  }

  export type ParentProfileUncheckedCreateWithoutUserInput = {
    id?: string
    address?: string | null
    emergencyContact?: string | null
    relationship?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAsMother?: StudentProfileUncheckedCreateNestedManyWithoutMotherProfileInput
    childrenAsFather?: StudentProfileUncheckedCreateNestedManyWithoutFatherProfileInput
  }

  export type ParentProfileCreateOrConnectWithoutUserInput = {
    where: ParentProfileWhereUniqueInput
    create: XOR<ParentProfileCreateWithoutUserInput, ParentProfileUncheckedCreateWithoutUserInput>
  }

  export type WardenProfileCreateWithoutUserInput = {
    id?: string
    assignedBuilding?: string | null
    wardNumber?: string | null
    responsibilities?: string | null
    shiftHours?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WardenProfileUncheckedCreateWithoutUserInput = {
    id?: string
    assignedBuilding?: string | null
    wardNumber?: string | null
    responsibilities?: string | null
    shiftHours?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WardenProfileCreateOrConnectWithoutUserInput = {
    where: WardenProfileWhereUniqueInput
    create: XOR<WardenProfileCreateWithoutUserInput, WardenProfileUncheckedCreateWithoutUserInput>
  }

  export type ChiefWardenProfileCreateWithoutUserInput = {
    id?: string
    department?: string | null
    responsibilities?: string | null
    adminLevel?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChiefWardenProfileUncheckedCreateWithoutUserInput = {
    id?: string
    department?: string | null
    responsibilities?: string | null
    adminLevel?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChiefWardenProfileCreateOrConnectWithoutUserInput = {
    where: ChiefWardenProfileWhereUniqueInput
    create: XOR<ChiefWardenProfileCreateWithoutUserInput, ChiefWardenProfileUncheckedCreateWithoutUserInput>
  }

  export type MatronProfileCreateWithoutUserInput = {
    id?: string
    employeeId: string
    department?: string | null
    responsibilities?: string | null
    shiftStartTime?: string | null
    shiftEndTime?: string | null
    isActive?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatronProfileUncheckedCreateWithoutUserInput = {
    id?: string
    employeeId: string
    department?: string | null
    responsibilities?: string | null
    shiftStartTime?: string | null
    shiftEndTime?: string | null
    isActive?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatronProfileCreateOrConnectWithoutUserInput = {
    where: MatronProfileWhereUniqueInput
    create: XOR<MatronProfileCreateWithoutUserInput, MatronProfileUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    thread: MessageThreadCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    receiverId: string
    threadId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    content: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    thread: MessageThreadCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    content: string
    senderId: string
    threadId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutStudentInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    reason?: string | null
    requestedAt?: Date | string
    expectedBack?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    verificationPhotoUrl?: string | null
    locationLatitude?: number | null
    locationLongitude?: number | null
    locationAccuracy?: number | null
    locationAddress?: string | null
    locationTimestamp?: Date | string | null
    parentStatus?: $Enums.RequestStatus
    parentApprovedAt?: Date | string | null
    parentLocationLatitude?: number | null
    parentLocationLongitude?: number | null
    parentLocationAccuracy?: number | null
    parentLocationAddress?: string | null
    parentLocationTimestamp?: Date | string | null
    isScaledUp?: boolean
    scaledUpAt?: Date | string | null
    scaledUpBy?: string | null
    chiefWardenStatus?: $Enums.RequestStatus | null
    chiefWardenApprovedAt?: Date | string | null
    chiefWardenApprovedBy?: string | null
    chiefWardenMessage?: string | null
    confirmedByWarden?: boolean
    confirmedByWardenAt?: Date | string | null
    confirmedByWardenId?: string | null
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: Date | string | null
    confirmedByChiefWardenId?: string | null
    parent?: UserCreateNestedOneWithoutParentRequestsInput
  }

  export type RequestUncheckedCreateWithoutStudentInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    reason?: string | null
    requestedAt?: Date | string
    expectedBack?: Date | string | null
    parentId?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    verificationPhotoUrl?: string | null
    locationLatitude?: number | null
    locationLongitude?: number | null
    locationAccuracy?: number | null
    locationAddress?: string | null
    locationTimestamp?: Date | string | null
    parentStatus?: $Enums.RequestStatus
    parentApprovedAt?: Date | string | null
    parentLocationLatitude?: number | null
    parentLocationLongitude?: number | null
    parentLocationAccuracy?: number | null
    parentLocationAddress?: string | null
    parentLocationTimestamp?: Date | string | null
    isScaledUp?: boolean
    scaledUpAt?: Date | string | null
    scaledUpBy?: string | null
    chiefWardenStatus?: $Enums.RequestStatus | null
    chiefWardenApprovedAt?: Date | string | null
    chiefWardenApprovedBy?: string | null
    chiefWardenMessage?: string | null
    confirmedByWarden?: boolean
    confirmedByWardenAt?: Date | string | null
    confirmedByWardenId?: string | null
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: Date | string | null
    confirmedByChiefWardenId?: string | null
  }

  export type RequestCreateOrConnectWithoutStudentInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutStudentInput, RequestUncheckedCreateWithoutStudentInput>
  }

  export type RequestCreateManyStudentInputEnvelope = {
    data: RequestCreateManyStudentInput | RequestCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutParentInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    reason?: string | null
    requestedAt?: Date | string
    expectedBack?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    verificationPhotoUrl?: string | null
    locationLatitude?: number | null
    locationLongitude?: number | null
    locationAccuracy?: number | null
    locationAddress?: string | null
    locationTimestamp?: Date | string | null
    parentStatus?: $Enums.RequestStatus
    parentApprovedAt?: Date | string | null
    parentLocationLatitude?: number | null
    parentLocationLongitude?: number | null
    parentLocationAccuracy?: number | null
    parentLocationAddress?: string | null
    parentLocationTimestamp?: Date | string | null
    isScaledUp?: boolean
    scaledUpAt?: Date | string | null
    scaledUpBy?: string | null
    chiefWardenStatus?: $Enums.RequestStatus | null
    chiefWardenApprovedAt?: Date | string | null
    chiefWardenApprovedBy?: string | null
    chiefWardenMessage?: string | null
    confirmedByWarden?: boolean
    confirmedByWardenAt?: Date | string | null
    confirmedByWardenId?: string | null
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: Date | string | null
    confirmedByChiefWardenId?: string | null
    student: UserCreateNestedOneWithoutStudentRequestsInput
  }

  export type RequestUncheckedCreateWithoutParentInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    reason?: string | null
    requestedAt?: Date | string
    expectedBack?: Date | string | null
    studentId: string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    verificationPhotoUrl?: string | null
    locationLatitude?: number | null
    locationLongitude?: number | null
    locationAccuracy?: number | null
    locationAddress?: string | null
    locationTimestamp?: Date | string | null
    parentStatus?: $Enums.RequestStatus
    parentApprovedAt?: Date | string | null
    parentLocationLatitude?: number | null
    parentLocationLongitude?: number | null
    parentLocationAccuracy?: number | null
    parentLocationAddress?: string | null
    parentLocationTimestamp?: Date | string | null
    isScaledUp?: boolean
    scaledUpAt?: Date | string | null
    scaledUpBy?: string | null
    chiefWardenStatus?: $Enums.RequestStatus | null
    chiefWardenApprovedAt?: Date | string | null
    chiefWardenApprovedBy?: string | null
    chiefWardenMessage?: string | null
    confirmedByWarden?: boolean
    confirmedByWardenAt?: Date | string | null
    confirmedByWardenId?: string | null
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: Date | string | null
    confirmedByChiefWardenId?: string | null
  }

  export type RequestCreateOrConnectWithoutParentInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutParentInput, RequestUncheckedCreateWithoutParentInput>
  }

  export type RequestCreateManyParentInputEnvelope = {
    data: RequestCreateManyParentInput | RequestCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type StudentProfileUpsertWithoutUserInput = {
    update: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutStudentsNestedInput
    motherProfile?: ParentProfileUpdateOneWithoutChildrenAsMotherNestedInput
    fatherProfile?: ParentProfileUpdateOneWithoutChildrenAsFatherNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    motherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParentProfileUpsertWithoutUserInput = {
    update: XOR<ParentProfileUpdateWithoutUserInput, ParentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ParentProfileCreateWithoutUserInput, ParentProfileUncheckedCreateWithoutUserInput>
    where?: ParentProfileWhereInput
  }

  export type ParentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ParentProfileWhereInput
    data: XOR<ParentProfileUpdateWithoutUserInput, ParentProfileUncheckedUpdateWithoutUserInput>
  }

  export type ParentProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAsMother?: StudentProfileUpdateManyWithoutMotherProfileNestedInput
    childrenAsFather?: StudentProfileUpdateManyWithoutFatherProfileNestedInput
  }

  export type ParentProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAsMother?: StudentProfileUncheckedUpdateManyWithoutMotherProfileNestedInput
    childrenAsFather?: StudentProfileUncheckedUpdateManyWithoutFatherProfileNestedInput
  }

  export type WardenProfileUpsertWithoutUserInput = {
    update: XOR<WardenProfileUpdateWithoutUserInput, WardenProfileUncheckedUpdateWithoutUserInput>
    create: XOR<WardenProfileCreateWithoutUserInput, WardenProfileUncheckedCreateWithoutUserInput>
    where?: WardenProfileWhereInput
  }

  export type WardenProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: WardenProfileWhereInput
    data: XOR<WardenProfileUpdateWithoutUserInput, WardenProfileUncheckedUpdateWithoutUserInput>
  }

  export type WardenProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedBuilding?: NullableStringFieldUpdateOperationsInput | string | null
    wardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardenProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedBuilding?: NullableStringFieldUpdateOperationsInput | string | null
    wardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChiefWardenProfileUpsertWithoutUserInput = {
    update: XOR<ChiefWardenProfileUpdateWithoutUserInput, ChiefWardenProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ChiefWardenProfileCreateWithoutUserInput, ChiefWardenProfileUncheckedCreateWithoutUserInput>
    where?: ChiefWardenProfileWhereInput
  }

  export type ChiefWardenProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ChiefWardenProfileWhereInput
    data: XOR<ChiefWardenProfileUpdateWithoutUserInput, ChiefWardenProfileUncheckedUpdateWithoutUserInput>
  }

  export type ChiefWardenProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    adminLevel?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChiefWardenProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    adminLevel?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatronProfileUpsertWithoutUserInput = {
    update: XOR<MatronProfileUpdateWithoutUserInput, MatronProfileUncheckedUpdateWithoutUserInput>
    create: XOR<MatronProfileCreateWithoutUserInput, MatronProfileUncheckedCreateWithoutUserInput>
    where?: MatronProfileWhereInput
  }

  export type MatronProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: MatronProfileWhereInput
    data: XOR<MatronProfileUpdateWithoutUserInput, MatronProfileUncheckedUpdateWithoutUserInput>
  }

  export type MatronProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    shiftEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatronProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    shiftStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    shiftEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    threadId?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutStudentInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutStudentInput, RequestUncheckedUpdateWithoutStudentInput>
    create: XOR<RequestCreateWithoutStudentInput, RequestUncheckedCreateWithoutStudentInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutStudentInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutStudentInput, RequestUncheckedUpdateWithoutStudentInput>
  }

  export type RequestUpdateManyWithWhereWithoutStudentInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutStudentInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    type?: EnumRequestTypeFilter<"Request"> | $Enums.RequestType
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    reason?: StringNullableFilter<"Request"> | string | null
    requestedAt?: DateTimeFilter<"Request"> | Date | string
    expectedBack?: DateTimeNullableFilter<"Request"> | Date | string | null
    studentId?: StringFilter<"Request"> | string
    parentId?: StringNullableFilter<"Request"> | string | null
    approvedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    approvedBy?: StringNullableFilter<"Request"> | string | null
    verificationPhotoUrl?: StringNullableFilter<"Request"> | string | null
    locationLatitude?: FloatNullableFilter<"Request"> | number | null
    locationLongitude?: FloatNullableFilter<"Request"> | number | null
    locationAccuracy?: FloatNullableFilter<"Request"> | number | null
    locationAddress?: StringNullableFilter<"Request"> | string | null
    locationTimestamp?: DateTimeNullableFilter<"Request"> | Date | string | null
    parentStatus?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    parentApprovedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    parentLocationLatitude?: FloatNullableFilter<"Request"> | number | null
    parentLocationLongitude?: FloatNullableFilter<"Request"> | number | null
    parentLocationAccuracy?: FloatNullableFilter<"Request"> | number | null
    parentLocationAddress?: StringNullableFilter<"Request"> | string | null
    parentLocationTimestamp?: DateTimeNullableFilter<"Request"> | Date | string | null
    isScaledUp?: BoolFilter<"Request"> | boolean
    scaledUpAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    scaledUpBy?: StringNullableFilter<"Request"> | string | null
    chiefWardenStatus?: EnumRequestStatusNullableFilter<"Request"> | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    chiefWardenApprovedBy?: StringNullableFilter<"Request"> | string | null
    chiefWardenMessage?: StringNullableFilter<"Request"> | string | null
    confirmedByWarden?: BoolFilter<"Request"> | boolean
    confirmedByWardenAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    confirmedByWardenId?: StringNullableFilter<"Request"> | string | null
    confirmedByChiefWarden?: BoolFilter<"Request"> | boolean
    confirmedByChiefWardenAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    confirmedByChiefWardenId?: StringNullableFilter<"Request"> | string | null
  }

  export type RequestUpsertWithWhereUniqueWithoutParentInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutParentInput, RequestUncheckedUpdateWithoutParentInput>
    create: XOR<RequestCreateWithoutParentInput, RequestUncheckedCreateWithoutParentInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutParentInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutParentInput, RequestUncheckedUpdateWithoutParentInput>
  }

  export type RequestUpdateManyWithWhereWithoutParentInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutParentInput>
  }

  export type UserCreateWithoutStudentProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    parentProfile?: ParentProfileCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestCreateNestedManyWithoutStudentInput
    parentRequests?: RequestCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutStudentProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    parentProfile?: ParentProfileUncheckedCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileUncheckedCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestUncheckedCreateNestedManyWithoutStudentInput
    parentRequests?: RequestUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutStudentProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
  }

  export type RoomCreateWithoutStudentsInput = {
    id?: string
    roomNumber: string
    floorNumber: string
    building: string
    capacity: number
    isOccupied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUncheckedCreateWithoutStudentsInput = {
    id?: string
    roomNumber: string
    floorNumber: string
    building: string
    capacity: number
    isOccupied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutStudentsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutStudentsInput, RoomUncheckedCreateWithoutStudentsInput>
  }

  export type ParentProfileCreateWithoutChildrenAsMotherInput = {
    id?: string
    address?: string | null
    emergencyContact?: string | null
    relationship?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParentProfileInput
    childrenAsFather?: StudentProfileCreateNestedManyWithoutFatherProfileInput
  }

  export type ParentProfileUncheckedCreateWithoutChildrenAsMotherInput = {
    id?: string
    userId: string
    address?: string | null
    emergencyContact?: string | null
    relationship?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAsFather?: StudentProfileUncheckedCreateNestedManyWithoutFatherProfileInput
  }

  export type ParentProfileCreateOrConnectWithoutChildrenAsMotherInput = {
    where: ParentProfileWhereUniqueInput
    create: XOR<ParentProfileCreateWithoutChildrenAsMotherInput, ParentProfileUncheckedCreateWithoutChildrenAsMotherInput>
  }

  export type ParentProfileCreateWithoutChildrenAsFatherInput = {
    id?: string
    address?: string | null
    emergencyContact?: string | null
    relationship?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParentProfileInput
    childrenAsMother?: StudentProfileCreateNestedManyWithoutMotherProfileInput
  }

  export type ParentProfileUncheckedCreateWithoutChildrenAsFatherInput = {
    id?: string
    userId: string
    address?: string | null
    emergencyContact?: string | null
    relationship?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAsMother?: StudentProfileUncheckedCreateNestedManyWithoutMotherProfileInput
  }

  export type ParentProfileCreateOrConnectWithoutChildrenAsFatherInput = {
    where: ParentProfileWhereUniqueInput
    create: XOR<ParentProfileCreateWithoutChildrenAsFatherInput, ParentProfileUncheckedCreateWithoutChildrenAsFatherInput>
  }

  export type UserUpsertWithoutStudentProfileInput = {
    update: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type UserUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentProfile?: ParentProfileUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentProfile?: ParentProfileUncheckedUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUncheckedUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUncheckedUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RoomUpsertWithoutStudentsInput = {
    update: XOR<RoomUpdateWithoutStudentsInput, RoomUncheckedUpdateWithoutStudentsInput>
    create: XOR<RoomCreateWithoutStudentsInput, RoomUncheckedCreateWithoutStudentsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutStudentsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutStudentsInput, RoomUncheckedUpdateWithoutStudentsInput>
  }

  export type RoomUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentProfileUpsertWithoutChildrenAsMotherInput = {
    update: XOR<ParentProfileUpdateWithoutChildrenAsMotherInput, ParentProfileUncheckedUpdateWithoutChildrenAsMotherInput>
    create: XOR<ParentProfileCreateWithoutChildrenAsMotherInput, ParentProfileUncheckedCreateWithoutChildrenAsMotherInput>
    where?: ParentProfileWhereInput
  }

  export type ParentProfileUpdateToOneWithWhereWithoutChildrenAsMotherInput = {
    where?: ParentProfileWhereInput
    data: XOR<ParentProfileUpdateWithoutChildrenAsMotherInput, ParentProfileUncheckedUpdateWithoutChildrenAsMotherInput>
  }

  export type ParentProfileUpdateWithoutChildrenAsMotherInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParentProfileNestedInput
    childrenAsFather?: StudentProfileUpdateManyWithoutFatherProfileNestedInput
  }

  export type ParentProfileUncheckedUpdateWithoutChildrenAsMotherInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAsFather?: StudentProfileUncheckedUpdateManyWithoutFatherProfileNestedInput
  }

  export type ParentProfileUpsertWithoutChildrenAsFatherInput = {
    update: XOR<ParentProfileUpdateWithoutChildrenAsFatherInput, ParentProfileUncheckedUpdateWithoutChildrenAsFatherInput>
    create: XOR<ParentProfileCreateWithoutChildrenAsFatherInput, ParentProfileUncheckedCreateWithoutChildrenAsFatherInput>
    where?: ParentProfileWhereInput
  }

  export type ParentProfileUpdateToOneWithWhereWithoutChildrenAsFatherInput = {
    where?: ParentProfileWhereInput
    data: XOR<ParentProfileUpdateWithoutChildrenAsFatherInput, ParentProfileUncheckedUpdateWithoutChildrenAsFatherInput>
  }

  export type ParentProfileUpdateWithoutChildrenAsFatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParentProfileNestedInput
    childrenAsMother?: StudentProfileUpdateManyWithoutMotherProfileNestedInput
  }

  export type ParentProfileUncheckedUpdateWithoutChildrenAsFatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAsMother?: StudentProfileUncheckedUpdateManyWithoutMotherProfileNestedInput
  }

  export type UserCreateWithoutParentProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestCreateNestedManyWithoutStudentInput
    parentRequests?: RequestCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutParentProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileUncheckedCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestUncheckedCreateNestedManyWithoutStudentInput
    parentRequests?: RequestUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutParentProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentProfileInput, UserUncheckedCreateWithoutParentProfileInput>
  }

  export type StudentProfileCreateWithoutMotherProfileInput = {
    id?: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentProfileInput
    room?: RoomCreateNestedOneWithoutStudentsInput
    fatherProfile?: ParentProfileCreateNestedOneWithoutChildrenAsFatherInput
  }

  export type StudentProfileUncheckedCreateWithoutMotherProfileInput = {
    id?: string
    userId: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    fatherProfileId?: string | null
  }

  export type StudentProfileCreateOrConnectWithoutMotherProfileInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutMotherProfileInput, StudentProfileUncheckedCreateWithoutMotherProfileInput>
  }

  export type StudentProfileCreateManyMotherProfileInputEnvelope = {
    data: StudentProfileCreateManyMotherProfileInput | StudentProfileCreateManyMotherProfileInput[]
    skipDuplicates?: boolean
  }

  export type StudentProfileCreateWithoutFatherProfileInput = {
    id?: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentProfileInput
    room?: RoomCreateNestedOneWithoutStudentsInput
    motherProfile?: ParentProfileCreateNestedOneWithoutChildrenAsMotherInput
  }

  export type StudentProfileUncheckedCreateWithoutFatherProfileInput = {
    id?: string
    userId: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    motherProfileId?: string | null
  }

  export type StudentProfileCreateOrConnectWithoutFatherProfileInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutFatherProfileInput, StudentProfileUncheckedCreateWithoutFatherProfileInput>
  }

  export type StudentProfileCreateManyFatherProfileInputEnvelope = {
    data: StudentProfileCreateManyFatherProfileInput | StudentProfileCreateManyFatherProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParentProfileInput = {
    update: XOR<UserUpdateWithoutParentProfileInput, UserUncheckedUpdateWithoutParentProfileInput>
    create: XOR<UserCreateWithoutParentProfileInput, UserUncheckedCreateWithoutParentProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParentProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParentProfileInput, UserUncheckedUpdateWithoutParentProfileInput>
  }

  export type UserUpdateWithoutParentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutParentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUncheckedUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUncheckedUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StudentProfileUpsertWithWhereUniqueWithoutMotherProfileInput = {
    where: StudentProfileWhereUniqueInput
    update: XOR<StudentProfileUpdateWithoutMotherProfileInput, StudentProfileUncheckedUpdateWithoutMotherProfileInput>
    create: XOR<StudentProfileCreateWithoutMotherProfileInput, StudentProfileUncheckedCreateWithoutMotherProfileInput>
  }

  export type StudentProfileUpdateWithWhereUniqueWithoutMotherProfileInput = {
    where: StudentProfileWhereUniqueInput
    data: XOR<StudentProfileUpdateWithoutMotherProfileInput, StudentProfileUncheckedUpdateWithoutMotherProfileInput>
  }

  export type StudentProfileUpdateManyWithWhereWithoutMotherProfileInput = {
    where: StudentProfileScalarWhereInput
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyWithoutMotherProfileInput>
  }

  export type StudentProfileScalarWhereInput = {
    AND?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    OR?: StudentProfileScalarWhereInput[]
    NOT?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    userId?: StringFilter<"StudentProfile"> | string
    studentId?: StringFilter<"StudentProfile"> | string
    username?: StringNullableFilter<"StudentProfile"> | string | null
    roomNumber?: StringNullableFilter<"StudentProfile"> | string | null
    floorNumber?: StringNullableFilter<"StudentProfile"> | string | null
    building?: StringNullableFilter<"StudentProfile"> | string | null
    checkInDate?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    checkOutDate?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    emergencyContact?: StringNullableFilter<"StudentProfile"> | string | null
    medicalInfo?: StringNullableFilter<"StudentProfile"> | string | null
    isAtHostel?: BoolFilter<"StudentProfile"> | boolean
    profilePicture?: StringNullableFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    roomId?: StringNullableFilter<"StudentProfile"> | string | null
    motherProfileId?: StringNullableFilter<"StudentProfile"> | string | null
    fatherProfileId?: StringNullableFilter<"StudentProfile"> | string | null
  }

  export type StudentProfileUpsertWithWhereUniqueWithoutFatherProfileInput = {
    where: StudentProfileWhereUniqueInput
    update: XOR<StudentProfileUpdateWithoutFatherProfileInput, StudentProfileUncheckedUpdateWithoutFatherProfileInput>
    create: XOR<StudentProfileCreateWithoutFatherProfileInput, StudentProfileUncheckedCreateWithoutFatherProfileInput>
  }

  export type StudentProfileUpdateWithWhereUniqueWithoutFatherProfileInput = {
    where: StudentProfileWhereUniqueInput
    data: XOR<StudentProfileUpdateWithoutFatherProfileInput, StudentProfileUncheckedUpdateWithoutFatherProfileInput>
  }

  export type StudentProfileUpdateManyWithWhereWithoutFatherProfileInput = {
    where: StudentProfileScalarWhereInput
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyWithoutFatherProfileInput>
  }

  export type UserCreateWithoutWardenProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestCreateNestedManyWithoutStudentInput
    parentRequests?: RequestCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutWardenProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileUncheckedCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestUncheckedCreateNestedManyWithoutStudentInput
    parentRequests?: RequestUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutWardenProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWardenProfileInput, UserUncheckedCreateWithoutWardenProfileInput>
  }

  export type UserUpsertWithoutWardenProfileInput = {
    update: XOR<UserUpdateWithoutWardenProfileInput, UserUncheckedUpdateWithoutWardenProfileInput>
    create: XOR<UserCreateWithoutWardenProfileInput, UserUncheckedCreateWithoutWardenProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWardenProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWardenProfileInput, UserUncheckedUpdateWithoutWardenProfileInput>
  }

  export type UserUpdateWithoutWardenProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutWardenProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUncheckedUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUncheckedUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserCreateWithoutChiefWardenProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestCreateNestedManyWithoutStudentInput
    parentRequests?: RequestCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutChiefWardenProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileUncheckedCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileUncheckedCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestUncheckedCreateNestedManyWithoutStudentInput
    parentRequests?: RequestUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutChiefWardenProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChiefWardenProfileInput, UserUncheckedCreateWithoutChiefWardenProfileInput>
  }

  export type UserUpsertWithoutChiefWardenProfileInput = {
    update: XOR<UserUpdateWithoutChiefWardenProfileInput, UserUncheckedUpdateWithoutChiefWardenProfileInput>
    create: XOR<UserCreateWithoutChiefWardenProfileInput, UserUncheckedCreateWithoutChiefWardenProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChiefWardenProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChiefWardenProfileInput, UserUncheckedUpdateWithoutChiefWardenProfileInput>
  }

  export type UserUpdateWithoutChiefWardenProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutChiefWardenProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUncheckedUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUncheckedUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUncheckedUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserCreateWithoutMatronProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestCreateNestedManyWithoutStudentInput
    parentRequests?: RequestCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutMatronProfileInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileUncheckedCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileUncheckedCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestUncheckedCreateNestedManyWithoutStudentInput
    parentRequests?: RequestUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutMatronProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatronProfileInput, UserUncheckedCreateWithoutMatronProfileInput>
  }

  export type UserUpsertWithoutMatronProfileInput = {
    update: XOR<UserUpdateWithoutMatronProfileInput, UserUncheckedUpdateWithoutMatronProfileInput>
    create: XOR<UserCreateWithoutMatronProfileInput, UserUncheckedCreateWithoutMatronProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatronProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatronProfileInput, UserUncheckedUpdateWithoutMatronProfileInput>
  }

  export type UserUpdateWithoutMatronProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutMatronProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUncheckedUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUncheckedUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUncheckedUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUncheckedUpdateManyWithoutParentNestedInput
  }

  export type MessageCreateWithoutThreadInput = {
    id?: string
    content: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutThreadInput = {
    id?: string
    content: string
    senderId: string
    receiverId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutThreadInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutThreadInput, MessageUncheckedCreateWithoutThreadInput>
  }

  export type MessageCreateManyThreadInputEnvelope = {
    data: MessageCreateManyThreadInput | MessageCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutThreadInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutThreadInput, MessageUncheckedUpdateWithoutThreadInput>
    create: XOR<MessageCreateWithoutThreadInput, MessageUncheckedCreateWithoutThreadInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutThreadInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutThreadInput, MessageUncheckedUpdateWithoutThreadInput>
  }

  export type MessageUpdateManyWithWhereWithoutThreadInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutThreadInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileCreateNestedOneWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestCreateNestedManyWithoutStudentInput
    parentRequests?: RequestCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileUncheckedCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileUncheckedCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileUncheckedCreateNestedOneWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestUncheckedCreateNestedManyWithoutStudentInput
    parentRequests?: RequestUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    studentRequests?: RequestCreateNestedManyWithoutStudentInput
    parentRequests?: RequestCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileUncheckedCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileUncheckedCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    studentRequests?: RequestUncheckedCreateNestedManyWithoutStudentInput
    parentRequests?: RequestUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type MessageThreadCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessageAt?: Date | string
    participantIds?: MessageThreadCreateparticipantIdsInput | string[]
  }

  export type MessageThreadUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessageAt?: Date | string
    participantIds?: MessageThreadCreateparticipantIdsInput | string[]
  }

  export type MessageThreadCreateOrConnectWithoutMessagesInput = {
    where: MessageThreadWhereUniqueInput
    create: XOR<MessageThreadCreateWithoutMessagesInput, MessageThreadUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUpdateOneWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUncheckedUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUncheckedUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUncheckedUpdateOneWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUncheckedUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    studentRequests?: RequestUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUncheckedUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUncheckedUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    studentRequests?: RequestUncheckedUpdateManyWithoutStudentNestedInput
    parentRequests?: RequestUncheckedUpdateManyWithoutParentNestedInput
  }

  export type MessageThreadUpsertWithoutMessagesInput = {
    update: XOR<MessageThreadUpdateWithoutMessagesInput, MessageThreadUncheckedUpdateWithoutMessagesInput>
    create: XOR<MessageThreadCreateWithoutMessagesInput, MessageThreadUncheckedCreateWithoutMessagesInput>
    where?: MessageThreadWhereInput
  }

  export type MessageThreadUpdateToOneWithWhereWithoutMessagesInput = {
    where?: MessageThreadWhereInput
    data: XOR<MessageThreadUpdateWithoutMessagesInput, MessageThreadUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageThreadUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: MessageThreadUpdateparticipantIdsInput | string[]
  }

  export type MessageThreadUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: MessageThreadUpdateparticipantIdsInput | string[]
  }

  export type StudentProfileCreateWithoutRoomInput = {
    id?: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentProfileInput
    motherProfile?: ParentProfileCreateNestedOneWithoutChildrenAsMotherInput
    fatherProfile?: ParentProfileCreateNestedOneWithoutChildrenAsFatherInput
  }

  export type StudentProfileUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    motherProfileId?: string | null
    fatherProfileId?: string | null
  }

  export type StudentProfileCreateOrConnectWithoutRoomInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutRoomInput, StudentProfileUncheckedCreateWithoutRoomInput>
  }

  export type StudentProfileCreateManyRoomInputEnvelope = {
    data: StudentProfileCreateManyRoomInput | StudentProfileCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type StudentProfileUpsertWithWhereUniqueWithoutRoomInput = {
    where: StudentProfileWhereUniqueInput
    update: XOR<StudentProfileUpdateWithoutRoomInput, StudentProfileUncheckedUpdateWithoutRoomInput>
    create: XOR<StudentProfileCreateWithoutRoomInput, StudentProfileUncheckedCreateWithoutRoomInput>
  }

  export type StudentProfileUpdateWithWhereUniqueWithoutRoomInput = {
    where: StudentProfileWhereUniqueInput
    data: XOR<StudentProfileUpdateWithoutRoomInput, StudentProfileUncheckedUpdateWithoutRoomInput>
  }

  export type StudentProfileUpdateManyWithWhereWithoutRoomInput = {
    where: StudentProfileScalarWhereInput
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutStudentRequestsInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    parentRequests?: RequestCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutStudentRequestsInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileUncheckedCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileUncheckedCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    parentRequests?: RequestUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutStudentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentRequestsInput, UserUncheckedCreateWithoutStudentRequestsInput>
  }

  export type UserCreateWithoutParentRequestsInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutParentRequestsInput = {
    id?: string
    email?: string | null
    password?: string | null
    role: $Enums.UserRole
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    parentProfile?: ParentProfileUncheckedCreateNestedOneWithoutUserInput
    wardenProfile?: WardenProfileUncheckedCreateNestedOneWithoutUserInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedCreateNestedOneWithoutUserInput
    matronProfile?: MatronProfileUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    studentRequests?: RequestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutParentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentRequestsInput, UserUncheckedCreateWithoutParentRequestsInput>
  }

  export type UserUpsertWithoutStudentRequestsInput = {
    update: XOR<UserUpdateWithoutStudentRequestsInput, UserUncheckedUpdateWithoutStudentRequestsInput>
    create: XOR<UserCreateWithoutStudentRequestsInput, UserUncheckedCreateWithoutStudentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentRequestsInput, UserUncheckedUpdateWithoutStudentRequestsInput>
  }

  export type UserUpdateWithoutStudentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    parentRequests?: RequestUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUncheckedUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUncheckedUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    parentRequests?: RequestUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutParentRequestsInput = {
    update: XOR<UserUpdateWithoutParentRequestsInput, UserUncheckedUpdateWithoutParentRequestsInput>
    create: XOR<UserCreateWithoutParentRequestsInput, UserUncheckedCreateWithoutParentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParentRequestsInput, UserUncheckedUpdateWithoutParentRequestsInput>
  }

  export type UserUpdateWithoutParentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutParentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    parentProfile?: ParentProfileUncheckedUpdateOneWithoutUserNestedInput
    wardenProfile?: WardenProfileUncheckedUpdateOneWithoutUserNestedInput
    chiefWardenProfile?: ChiefWardenProfileUncheckedUpdateOneWithoutUserNestedInput
    matronProfile?: MatronProfileUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    studentRequests?: RequestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    receiverId: string
    threadId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    content: string
    senderId: string
    threadId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestCreateManyStudentInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    reason?: string | null
    requestedAt?: Date | string
    expectedBack?: Date | string | null
    parentId?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    verificationPhotoUrl?: string | null
    locationLatitude?: number | null
    locationLongitude?: number | null
    locationAccuracy?: number | null
    locationAddress?: string | null
    locationTimestamp?: Date | string | null
    parentStatus?: $Enums.RequestStatus
    parentApprovedAt?: Date | string | null
    parentLocationLatitude?: number | null
    parentLocationLongitude?: number | null
    parentLocationAccuracy?: number | null
    parentLocationAddress?: string | null
    parentLocationTimestamp?: Date | string | null
    isScaledUp?: boolean
    scaledUpAt?: Date | string | null
    scaledUpBy?: string | null
    chiefWardenStatus?: $Enums.RequestStatus | null
    chiefWardenApprovedAt?: Date | string | null
    chiefWardenApprovedBy?: string | null
    chiefWardenMessage?: string | null
    confirmedByWarden?: boolean
    confirmedByWardenAt?: Date | string | null
    confirmedByWardenId?: string | null
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: Date | string | null
    confirmedByChiefWardenId?: string | null
  }

  export type RequestCreateManyParentInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    reason?: string | null
    requestedAt?: Date | string
    expectedBack?: Date | string | null
    studentId: string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    verificationPhotoUrl?: string | null
    locationLatitude?: number | null
    locationLongitude?: number | null
    locationAccuracy?: number | null
    locationAddress?: string | null
    locationTimestamp?: Date | string | null
    parentStatus?: $Enums.RequestStatus
    parentApprovedAt?: Date | string | null
    parentLocationLatitude?: number | null
    parentLocationLongitude?: number | null
    parentLocationAccuracy?: number | null
    parentLocationAddress?: string | null
    parentLocationTimestamp?: Date | string | null
    isScaledUp?: boolean
    scaledUpAt?: Date | string | null
    scaledUpBy?: string | null
    chiefWardenStatus?: $Enums.RequestStatus | null
    chiefWardenApprovedAt?: Date | string | null
    chiefWardenApprovedBy?: string | null
    chiefWardenMessage?: string | null
    confirmedByWarden?: boolean
    confirmedByWardenAt?: Date | string | null
    confirmedByWardenId?: string | null
    confirmedByChiefWarden?: boolean
    confirmedByChiefWardenAt?: Date | string | null
    confirmedByChiefWardenId?: string | null
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    thread?: MessageThreadUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    thread?: MessageThreadUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: UserUpdateOneWithoutParentRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    student?: UserUpdateOneRequiredWithoutStudentRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedBack?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verificationPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    locationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    parentApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentLocationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    parentLocationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    parentLocationTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isScaledUp?: BoolFieldUpdateOperationsInput | boolean
    scaledUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaledUpBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenStatus?: NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null
    chiefWardenApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chiefWardenApprovedBy?: NullableStringFieldUpdateOperationsInput | string | null
    chiefWardenMessage?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByWardenId?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedByChiefWarden?: BoolFieldUpdateOperationsInput | boolean
    confirmedByChiefWardenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedByChiefWardenId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileCreateManyMotherProfileInput = {
    id?: string
    userId: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    fatherProfileId?: string | null
  }

  export type StudentProfileCreateManyFatherProfileInput = {
    id?: string
    userId: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    motherProfileId?: string | null
  }

  export type StudentProfileUpdateWithoutMotherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    room?: RoomUpdateOneWithoutStudentsNestedInput
    fatherProfile?: ParentProfileUpdateOneWithoutChildrenAsFatherNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutMotherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileUncheckedUpdateManyWithoutMotherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileUpdateWithoutFatherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    room?: RoomUpdateOneWithoutStudentsNestedInput
    motherProfile?: ParentProfileUpdateOneWithoutChildrenAsMotherNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutFatherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    motherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileUncheckedUpdateManyWithoutFatherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    motherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyThreadInput = {
    id?: string
    content: string
    senderId: string
    receiverId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateManyRoomInput = {
    id?: string
    userId: string
    studentId: string
    username?: string | null
    roomNumber?: string | null
    floorNumber?: string | null
    building?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    emergencyContact?: string | null
    medicalInfo?: string | null
    isAtHostel?: boolean
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    motherProfileId?: string | null
    fatherProfileId?: string | null
  }

  export type StudentProfileUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    motherProfile?: ParentProfileUpdateOneWithoutChildrenAsMotherNestedInput
    fatherProfile?: ParentProfileUpdateOneWithoutChildrenAsFatherNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    motherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floorNumber?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    medicalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isAtHostel?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    motherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}