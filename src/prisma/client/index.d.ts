
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Secretaria
 * 
 */
export type Secretaria = $Result.DefaultSelection<Prisma.$SecretariaPayload>
/**
 * Model Consulta
 * 
 */
export type Consulta = $Result.DefaultSelection<Prisma.$ConsultaPayload>
/**
 * Model Agenda
 * 
 */
export type Agenda = $Result.DefaultSelection<Prisma.$AgendaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pacientes
 * const pacientes = await prisma.paciente.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pacientes
   * const pacientes = await prisma.paciente.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs>;

  /**
   * `prisma.secretaria`: Exposes CRUD operations for the **Secretaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secretarias
    * const secretarias = await prisma.secretaria.findMany()
    * ```
    */
  get secretaria(): Prisma.SecretariaDelegate<ExtArgs>;

  /**
   * `prisma.consulta`: Exposes CRUD operations for the **Consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consulta.findMany()
    * ```
    */
  get consulta(): Prisma.ConsultaDelegate<ExtArgs>;

  /**
   * `prisma.agenda`: Exposes CRUD operations for the **Agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.AgendaDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Paciente: 'Paciente',
    Secretaria: 'Secretaria',
    Consulta: 'Consulta',
    Agenda: 'Agenda'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'paciente' | 'secretaria' | 'consulta' | 'agenda'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>,
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Secretaria: {
        payload: Prisma.$SecretariaPayload<ExtArgs>
        fields: Prisma.SecretariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretariaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretariaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          findFirst: {
            args: Prisma.SecretariaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretariaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          findMany: {
            args: Prisma.SecretariaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>[]
          }
          create: {
            args: Prisma.SecretariaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          delete: {
            args: Prisma.SecretariaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          update: {
            args: Prisma.SecretariaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          deleteMany: {
            args: Prisma.SecretariaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SecretariaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SecretariaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          aggregate: {
            args: Prisma.SecretariaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSecretaria>
          }
          groupBy: {
            args: Prisma.SecretariaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SecretariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretariaCountArgs<ExtArgs>,
            result: $Utils.Optional<SecretariaCountAggregateOutputType> | number
          }
        }
      }
      Consulta: {
        payload: Prisma.$ConsultaPayload<ExtArgs>
        fields: Prisma.ConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findFirst: {
            args: Prisma.ConsultaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findMany: {
            args: Prisma.ConsultaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          create: {
            args: Prisma.ConsultaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          delete: {
            args: Prisma.ConsultaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          update: {
            args: Prisma.ConsultaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConsultaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          aggregate: {
            args: Prisma.ConsultaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConsulta>
          }
          groupBy: {
            args: Prisma.ConsultaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultaCountArgs<ExtArgs>,
            result: $Utils.Optional<ConsultaCountAggregateOutputType> | number
          }
        }
      }
      Agenda: {
        payload: Prisma.$AgendaPayload<ExtArgs>
        fields: Prisma.AgendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findFirst: {
            args: Prisma.AgendaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findMany: {
            args: Prisma.AgendaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          create: {
            args: Prisma.AgendaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          delete: {
            args: Prisma.AgendaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          update: {
            args: Prisma.AgendaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          deleteMany: {
            args: Prisma.AgendaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AgendaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AgendaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          aggregate: {
            args: Prisma.AgendaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAgenda>
          }
          groupBy: {
            args: Prisma.AgendaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendaCountArgs<ExtArgs>,
            result: $Utils.Optional<AgendaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    consultas: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    consultas?: boolean | PacienteCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }



  /**
   * Count Type SecretariaCountOutputType
   */

  export type SecretariaCountOutputType = {
    consultas: number
  }

  export type SecretariaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    consultas?: boolean | SecretariaCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes

  /**
   * SecretariaCountOutputType without action
   */
  export type SecretariaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretariaCountOutputType
     */
    select?: SecretariaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SecretariaCountOutputType without action
   */
  export type SecretariaCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }



  /**
   * Count Type ConsultaCountOutputType
   */

  export type ConsultaCountOutputType = {
    agendas: number
  }

  export type ConsultaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    agendas?: boolean | ConsultaCountOutputTypeCountAgendasArgs
  }

  // Custom InputTypes

  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultaCountOutputType
     */
    select?: ConsultaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeCountAgendasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
    senha: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
    senha: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    nomePaciente: string | null
    senha: number | null
    usuario: string | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    nomePaciente: string | null
    senha: number | null
    usuario: string | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    nomePaciente: number
    senha: number
    usuario: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
    senha?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
    senha?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    nomePaciente?: true
    senha?: true
    usuario?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    nomePaciente?: true
    senha?: true
    usuario?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    nomePaciente?: true
    senha?: true
    usuario?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    nomePaciente: string
    senha: number
    usuario: string
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomePaciente?: boolean
    senha?: boolean
    usuario?: boolean
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    nomePaciente?: boolean
    senha?: boolean
    usuario?: boolean
  }

  export type PacienteInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PacientePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      nomePaciente: string
      senha: number
      usuario: string
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }


  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PacienteFindManyArgs, 'select' | 'include'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PacienteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Paciente that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PacienteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PacienteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
    **/
    create<T extends PacienteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
    **/
    delete<T extends PacienteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PacienteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PacienteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PacienteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
    **/
    upsert<T extends PacienteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    consultas<T extends Paciente$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Paciente model
   */ 
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly nomePaciente: FieldRef<"Paciente", 'String'>
    readonly senha: FieldRef<"Paciente", 'Int'>
    readonly usuario: FieldRef<"Paciente", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }


  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }


  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }


  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }


  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }


  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }


  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }


  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
  }


  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }


  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }


  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
  }


  /**
   * Paciente.consultas
   */
  export type Paciente$consultasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }


  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
  }



  /**
   * Model Secretaria
   */

  export type AggregateSecretaria = {
    _count: SecretariaCountAggregateOutputType | null
    _avg: SecretariaAvgAggregateOutputType | null
    _sum: SecretariaSumAggregateOutputType | null
    _min: SecretariaMinAggregateOutputType | null
    _max: SecretariaMaxAggregateOutputType | null
  }

  export type SecretariaAvgAggregateOutputType = {
    id: number | null
    RG: number | null
  }

  export type SecretariaSumAggregateOutputType = {
    id: number | null
    RG: number | null
  }

  export type SecretariaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    RG: number | null
  }

  export type SecretariaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    RG: number | null
  }

  export type SecretariaCountAggregateOutputType = {
    id: number
    nome: number
    RG: number
    _all: number
  }


  export type SecretariaAvgAggregateInputType = {
    id?: true
    RG?: true
  }

  export type SecretariaSumAggregateInputType = {
    id?: true
    RG?: true
  }

  export type SecretariaMinAggregateInputType = {
    id?: true
    nome?: true
    RG?: true
  }

  export type SecretariaMaxAggregateInputType = {
    id?: true
    nome?: true
    RG?: true
  }

  export type SecretariaCountAggregateInputType = {
    id?: true
    nome?: true
    RG?: true
    _all?: true
  }

  export type SecretariaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretaria to aggregate.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Secretarias
    **/
    _count?: true | SecretariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecretariaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecretariaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretariaMaxAggregateInputType
  }

  export type GetSecretariaAggregateType<T extends SecretariaAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretaria[P]>
      : GetScalarType<T[P], AggregateSecretaria[P]>
  }




  export type SecretariaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SecretariaWhereInput
    orderBy?: SecretariaOrderByWithAggregationInput | SecretariaOrderByWithAggregationInput[]
    by: SecretariaScalarFieldEnum[] | SecretariaScalarFieldEnum
    having?: SecretariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretariaCountAggregateInputType | true
    _avg?: SecretariaAvgAggregateInputType
    _sum?: SecretariaSumAggregateInputType
    _min?: SecretariaMinAggregateInputType
    _max?: SecretariaMaxAggregateInputType
  }

  export type SecretariaGroupByOutputType = {
    id: number
    nome: string
    RG: number
    _count: SecretariaCountAggregateOutputType | null
    _avg: SecretariaAvgAggregateOutputType | null
    _sum: SecretariaSumAggregateOutputType | null
    _min: SecretariaMinAggregateOutputType | null
    _max: SecretariaMaxAggregateOutputType | null
  }

  type GetSecretariaGroupByPayload<T extends SecretariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretariaGroupByOutputType[P]>
            : GetScalarType<T[P], SecretariaGroupByOutputType[P]>
        }
      >
    >


  export type SecretariaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    RG?: boolean
    consultas?: boolean | Secretaria$consultasArgs<ExtArgs>
    _count?: boolean | SecretariaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretaria"]>

  export type SecretariaSelectScalar = {
    id?: boolean
    nome?: boolean
    RG?: boolean
  }

  export type SecretariaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    consultas?: boolean | Secretaria$consultasArgs<ExtArgs>
    _count?: boolean | SecretariaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SecretariaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Secretaria"
    objects: {
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      nome: string
      RG: number
    }, ExtArgs["result"]["secretaria"]>
    composites: {}
  }


  type SecretariaGetPayload<S extends boolean | null | undefined | SecretariaDefaultArgs> = $Result.GetResult<Prisma.$SecretariaPayload, S>

  type SecretariaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SecretariaFindManyArgs, 'select' | 'include'> & {
      select?: SecretariaCountAggregateInputType | true
    }

  export interface SecretariaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Secretaria'], meta: { name: 'Secretaria' } }
    /**
     * Find zero or one Secretaria that matches the filter.
     * @param {SecretariaFindUniqueArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SecretariaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SecretariaFindUniqueArgs<ExtArgs>>
    ): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Secretaria that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SecretariaFindUniqueOrThrowArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SecretariaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SecretariaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Secretaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindFirstArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SecretariaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SecretariaFindFirstArgs<ExtArgs>>
    ): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Secretaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindFirstOrThrowArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SecretariaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SecretariaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Secretarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secretarias
     * const secretarias = await prisma.secretaria.findMany()
     * 
     * // Get first 10 Secretarias
     * const secretarias = await prisma.secretaria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretariaWithIdOnly = await prisma.secretaria.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SecretariaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SecretariaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Secretaria.
     * @param {SecretariaCreateArgs} args - Arguments to create a Secretaria.
     * @example
     * // Create one Secretaria
     * const Secretaria = await prisma.secretaria.create({
     *   data: {
     *     // ... data to create a Secretaria
     *   }
     * })
     * 
    **/
    create<T extends SecretariaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SecretariaCreateArgs<ExtArgs>>
    ): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Secretaria.
     * @param {SecretariaDeleteArgs} args - Arguments to delete one Secretaria.
     * @example
     * // Delete one Secretaria
     * const Secretaria = await prisma.secretaria.delete({
     *   where: {
     *     // ... filter to delete one Secretaria
     *   }
     * })
     * 
    **/
    delete<T extends SecretariaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SecretariaDeleteArgs<ExtArgs>>
    ): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Secretaria.
     * @param {SecretariaUpdateArgs} args - Arguments to update one Secretaria.
     * @example
     * // Update one Secretaria
     * const secretaria = await prisma.secretaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SecretariaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SecretariaUpdateArgs<ExtArgs>>
    ): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Secretarias.
     * @param {SecretariaDeleteManyArgs} args - Arguments to filter Secretarias to delete.
     * @example
     * // Delete a few Secretarias
     * const { count } = await prisma.secretaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SecretariaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SecretariaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secretarias
     * const secretaria = await prisma.secretaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SecretariaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SecretariaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Secretaria.
     * @param {SecretariaUpsertArgs} args - Arguments to update or create a Secretaria.
     * @example
     * // Update or create a Secretaria
     * const secretaria = await prisma.secretaria.upsert({
     *   create: {
     *     // ... data to create a Secretaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secretaria we want to update
     *   }
     * })
    **/
    upsert<T extends SecretariaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SecretariaUpsertArgs<ExtArgs>>
    ): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaCountArgs} args - Arguments to filter Secretarias to count.
     * @example
     * // Count the number of Secretarias
     * const count = await prisma.secretaria.count({
     *   where: {
     *     // ... the filter for the Secretarias we want to count
     *   }
     * })
    **/
    count<T extends SecretariaCountArgs>(
      args?: Subset<T, SecretariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecretariaAggregateArgs>(args: Subset<T, SecretariaAggregateArgs>): Prisma.PrismaPromise<GetSecretariaAggregateType<T>>

    /**
     * Group by Secretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaGroupByArgs} args - Group by arguments.
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
      T extends SecretariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretariaGroupByArgs['orderBy'] }
        : { orderBy?: SecretariaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecretariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Secretaria model
   */
  readonly fields: SecretariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Secretaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretariaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    consultas<T extends Secretaria$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Secretaria$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Secretaria model
   */ 
  interface SecretariaFieldRefs {
    readonly id: FieldRef<"Secretaria", 'Int'>
    readonly nome: FieldRef<"Secretaria", 'String'>
    readonly RG: FieldRef<"Secretaria", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Secretaria findUnique
   */
  export type SecretariaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where: SecretariaWhereUniqueInput
  }


  /**
   * Secretaria findUniqueOrThrow
   */
  export type SecretariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where: SecretariaWhereUniqueInput
  }


  /**
   * Secretaria findFirst
   */
  export type SecretariaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarias.
     */
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }


  /**
   * Secretaria findFirstOrThrow
   */
  export type SecretariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarias.
     */
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }


  /**
   * Secretaria findMany
   */
  export type SecretariaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretarias to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }


  /**
   * Secretaria create
   */
  export type SecretariaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * The data needed to create a Secretaria.
     */
    data: XOR<SecretariaCreateInput, SecretariaUncheckedCreateInput>
  }


  /**
   * Secretaria update
   */
  export type SecretariaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * The data needed to update a Secretaria.
     */
    data: XOR<SecretariaUpdateInput, SecretariaUncheckedUpdateInput>
    /**
     * Choose, which Secretaria to update.
     */
    where: SecretariaWhereUniqueInput
  }


  /**
   * Secretaria updateMany
   */
  export type SecretariaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Secretarias.
     */
    data: XOR<SecretariaUpdateManyMutationInput, SecretariaUncheckedUpdateManyInput>
    /**
     * Filter which Secretarias to update
     */
    where?: SecretariaWhereInput
  }


  /**
   * Secretaria upsert
   */
  export type SecretariaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * The filter to search for the Secretaria to update in case it exists.
     */
    where: SecretariaWhereUniqueInput
    /**
     * In case the Secretaria found by the `where` argument doesn't exist, create a new Secretaria with this data.
     */
    create: XOR<SecretariaCreateInput, SecretariaUncheckedCreateInput>
    /**
     * In case the Secretaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretariaUpdateInput, SecretariaUncheckedUpdateInput>
  }


  /**
   * Secretaria delete
   */
  export type SecretariaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter which Secretaria to delete.
     */
    where: SecretariaWhereUniqueInput
  }


  /**
   * Secretaria deleteMany
   */
  export type SecretariaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretarias to delete
     */
    where?: SecretariaWhereInput
  }


  /**
   * Secretaria.consultas
   */
  export type Secretaria$consultasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }


  /**
   * Secretaria without action
   */
  export type SecretariaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
  }



  /**
   * Model Consulta
   */

  export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  export type ConsultaAvgAggregateOutputType = {
    id: number | null
  }

  export type ConsultaSumAggregateOutputType = {
    id: number | null
  }

  export type ConsultaMinAggregateOutputType = {
    id: number | null
    data: Date | null
    nomePaciente: string | null
    nomeDentista: string | null
  }

  export type ConsultaMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    nomePaciente: string | null
    nomeDentista: string | null
  }

  export type ConsultaCountAggregateOutputType = {
    id: number
    data: number
    nomePaciente: number
    nomeDentista: number
    _all: number
  }


  export type ConsultaAvgAggregateInputType = {
    id?: true
  }

  export type ConsultaSumAggregateInputType = {
    id?: true
  }

  export type ConsultaMinAggregateInputType = {
    id?: true
    data?: true
    nomePaciente?: true
    nomeDentista?: true
  }

  export type ConsultaMaxAggregateInputType = {
    id?: true
    data?: true
    nomePaciente?: true
    nomeDentista?: true
  }

  export type ConsultaCountAggregateInputType = {
    id?: true
    data?: true
    nomePaciente?: true
    nomeDentista?: true
    _all?: true
  }

  export type ConsultaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType
  }

  export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulta[P]>
      : GetScalarType<T[P], AggregateConsulta[P]>
  }




  export type ConsultaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithAggregationInput | ConsultaOrderByWithAggregationInput[]
    by: ConsultaScalarFieldEnum[] | ConsultaScalarFieldEnum
    having?: ConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultaCountAggregateInputType | true
    _avg?: ConsultaAvgAggregateInputType
    _sum?: ConsultaSumAggregateInputType
    _min?: ConsultaMinAggregateInputType
    _max?: ConsultaMaxAggregateInputType
  }

  export type ConsultaGroupByOutputType = {
    id: number
    data: Date
    nomePaciente: string
    nomeDentista: string
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    nomePaciente?: boolean
    nomeDentista?: boolean
    paciente?: boolean | Consulta$pacienteArgs<ExtArgs>
    secretaria?: boolean | Consulta$secretariaArgs<ExtArgs>
    agendas?: boolean | Consulta$agendasArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectScalar = {
    id?: boolean
    data?: boolean
    nomePaciente?: boolean
    nomeDentista?: boolean
  }

  export type ConsultaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    paciente?: boolean | Consulta$pacienteArgs<ExtArgs>
    secretaria?: boolean | Consulta$secretariaArgs<ExtArgs>
    agendas?: boolean | Consulta$agendasArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ConsultaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Consulta"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs> | null
      secretaria: Prisma.$SecretariaPayload<ExtArgs> | null
      agendas: Prisma.$AgendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      data: Date
      nomePaciente: string
      nomeDentista: string
    }, ExtArgs["result"]["consulta"]>
    composites: {}
  }


  type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = $Result.GetResult<Prisma.$ConsultaPayload, S>

  type ConsultaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ConsultaFindManyArgs, 'select' | 'include'> & {
      select?: ConsultaCountAggregateInputType | true
    }

  export interface ConsultaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consulta'], meta: { name: 'Consulta' } }
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConsultaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Consulta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConsultaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConsultaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     * 
    **/
    create<T extends ConsultaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaCreateArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     * 
    **/
    delete<T extends ConsultaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConsultaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConsultaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConsultaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
    **/
    upsert<T extends ConsultaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(
      args?: Subset<T, ConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultaAggregateArgs>(args: Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>

    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
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
      T extends ConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consulta model
   */
  readonly fields: ConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    paciente<T extends Consulta$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$pacienteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    secretaria<T extends Consulta$secretariaArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$secretariaArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    agendas<T extends Consulta$agendasArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$agendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Consulta model
   */ 
  interface ConsultaFieldRefs {
    readonly id: FieldRef<"Consulta", 'Int'>
    readonly data: FieldRef<"Consulta", 'DateTime'>
    readonly nomePaciente: FieldRef<"Consulta", 'String'>
    readonly nomeDentista: FieldRef<"Consulta", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Consulta findUnique
   */
  export type ConsultaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }


  /**
   * Consulta findUniqueOrThrow
   */
  export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }


  /**
   * Consulta findFirst
   */
  export type ConsultaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }


  /**
   * Consulta findFirstOrThrow
   */
  export type ConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }


  /**
   * Consulta findMany
   */
  export type ConsultaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }


  /**
   * Consulta create
   */
  export type ConsultaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consulta.
     */
    data: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
  }


  /**
   * Consulta update
   */
  export type ConsultaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consulta.
     */
    data: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
    /**
     * Choose, which Consulta to update.
     */
    where: ConsultaWhereUniqueInput
  }


  /**
   * Consulta updateMany
   */
  export type ConsultaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
  }


  /**
   * Consulta upsert
   */
  export type ConsultaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: ConsultaWhereUniqueInput
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
  }


  /**
   * Consulta delete
   */
  export type ConsultaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter which Consulta to delete.
     */
    where: ConsultaWhereUniqueInput
  }


  /**
   * Consulta deleteMany
   */
  export type ConsultaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultaWhereInput
  }


  /**
   * Consulta.paciente
   */
  export type Consulta$pacienteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
  }


  /**
   * Consulta.secretaria
   */
  export type Consulta$secretariaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecretariaInclude<ExtArgs> | null
    where?: SecretariaWhereInput
  }


  /**
   * Consulta.agendas
   */
  export type Consulta$agendasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    cursor?: AgendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }


  /**
   * Consulta without action
   */
  export type ConsultaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
  }



  /**
   * Model Agenda
   */

  export type AggregateAgenda = {
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  export type AgendaAvgAggregateOutputType = {
    id: number | null
  }

  export type AgendaSumAggregateOutputType = {
    id: number | null
  }

  export type AgendaMinAggregateOutputType = {
    id: number | null
    data: Date | null
    nomePaciente: string | null
  }

  export type AgendaMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    nomePaciente: string | null
  }

  export type AgendaCountAggregateOutputType = {
    id: number
    data: number
    nomePaciente: number
    _all: number
  }


  export type AgendaAvgAggregateInputType = {
    id?: true
  }

  export type AgendaSumAggregateInputType = {
    id?: true
  }

  export type AgendaMinAggregateInputType = {
    id?: true
    data?: true
    nomePaciente?: true
  }

  export type AgendaMaxAggregateInputType = {
    id?: true
    data?: true
    nomePaciente?: true
  }

  export type AgendaCountAggregateInputType = {
    id?: true
    data?: true
    nomePaciente?: true
    _all?: true
  }

  export type AgendaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to aggregate.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agenda
    **/
    _count?: true | AgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaMaxAggregateInputType
  }

  export type GetAgendaAggregateType<T extends AgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda[P]>
      : GetScalarType<T[P], AggregateAgenda[P]>
  }




  export type AgendaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithAggregationInput | AgendaOrderByWithAggregationInput[]
    by: AgendaScalarFieldEnum[] | AgendaScalarFieldEnum
    having?: AgendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaCountAggregateInputType | true
    _avg?: AgendaAvgAggregateInputType
    _sum?: AgendaSumAggregateInputType
    _min?: AgendaMinAggregateInputType
    _max?: AgendaMaxAggregateInputType
  }

  export type AgendaGroupByOutputType = {
    id: number
    data: Date
    nomePaciente: string
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  type GetAgendaGroupByPayload<T extends AgendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaGroupByOutputType[P]>
        }
      >
    >


  export type AgendaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    nomePaciente?: boolean
    consulta?: boolean | Agenda$consultaArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectScalar = {
    id?: boolean
    data?: boolean
    nomePaciente?: boolean
  }

  export type AgendaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    consulta?: boolean | Agenda$consultaArgs<ExtArgs>
  }


  export type $AgendaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Agenda"
    objects: {
      consulta: Prisma.$ConsultaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      data: Date
      nomePaciente: string
    }, ExtArgs["result"]["agenda"]>
    composites: {}
  }


  type AgendaGetPayload<S extends boolean | null | undefined | AgendaDefaultArgs> = $Result.GetResult<Prisma.$AgendaPayload, S>

  type AgendaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AgendaFindManyArgs, 'select' | 'include'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface AgendaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agenda'], meta: { name: 'Agenda' } }
    /**
     * Find zero or one Agenda that matches the filter.
     * @param {AgendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AgendaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AgendaFindUniqueArgs<ExtArgs>>
    ): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Agenda that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AgendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AgendaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AgendaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendaFindFirstArgs<ExtArgs>>
    ): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Agenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AgendaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda
     * const agenda = await prisma.agenda.findMany()
     * 
     * // Get first 10 Agenda
     * const agenda = await prisma.agenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendaWithIdOnly = await prisma.agenda.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AgendaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Agenda.
     * @param {AgendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
    **/
    create<T extends AgendaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AgendaCreateArgs<ExtArgs>>
    ): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Agenda.
     * @param {AgendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
    **/
    delete<T extends AgendaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AgendaDeleteArgs<ExtArgs>>
    ): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Agenda.
     * @param {AgendaUpdateArgs} args - Arguments to update one Agenda.
     * @example
     * // Update one Agenda
     * const agenda = await prisma.agenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AgendaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AgendaUpdateArgs<ExtArgs>>
    ): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Agenda.
     * @param {AgendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AgendaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AgendaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AgendaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agenda.
     * @param {AgendaUpsertArgs} args - Arguments to update or create a Agenda.
     * @example
     * // Update or create a Agenda
     * const agenda = await prisma.agenda.upsert({
     *   create: {
     *     // ... data to create a Agenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda we want to update
     *   }
     * })
    **/
    upsert<T extends AgendaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AgendaUpsertArgs<ExtArgs>>
    ): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends AgendaCountArgs>(
      args?: Subset<T, AgendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendaAggregateArgs>(args: Subset<T, AgendaAggregateArgs>): Prisma.PrismaPromise<GetAgendaAggregateType<T>>

    /**
     * Group by Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaGroupByArgs} args - Group by arguments.
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
      T extends AgendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendaGroupByArgs['orderBy'] }
        : { orderBy?: AgendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agenda model
   */
  readonly fields: AgendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    consulta<T extends Agenda$consultaArgs<ExtArgs> = {}>(args?: Subset<T, Agenda$consultaArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Agenda model
   */ 
  interface AgendaFieldRefs {
    readonly id: FieldRef<"Agenda", 'Int'>
    readonly data: FieldRef<"Agenda", 'DateTime'>
    readonly nomePaciente: FieldRef<"Agenda", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Agenda findUnique
   */
  export type AgendaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }


  /**
   * Agenda findUniqueOrThrow
   */
  export type AgendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }


  /**
   * Agenda findFirst
   */
  export type AgendaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }


  /**
   * Agenda findFirstOrThrow
   */
  export type AgendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }


  /**
   * Agenda findMany
   */
  export type AgendaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }


  /**
   * Agenda create
   */
  export type AgendaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Agenda.
     */
    data: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
  }


  /**
   * Agenda update
   */
  export type AgendaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Agenda.
     */
    data: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
    /**
     * Choose, which Agenda to update.
     */
    where: AgendaWhereUniqueInput
  }


  /**
   * Agenda updateMany
   */
  export type AgendaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agenda.
     */
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyInput>
    /**
     * Filter which Agenda to update
     */
    where?: AgendaWhereInput
  }


  /**
   * Agenda upsert
   */
  export type AgendaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Agenda to update in case it exists.
     */
    where: AgendaWhereUniqueInput
    /**
     * In case the Agenda found by the `where` argument doesn't exist, create a new Agenda with this data.
     */
    create: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
    /**
     * In case the Agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
  }


  /**
   * Agenda delete
   */
  export type AgendaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter which Agenda to delete.
     */
    where: AgendaWhereUniqueInput
  }


  /**
   * Agenda deleteMany
   */
  export type AgendaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to delete
     */
    where?: AgendaWhereInput
  }


  /**
   * Agenda.consulta
   */
  export type Agenda$consultaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
  }


  /**
   * Agenda without action
   */
  export type AgendaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgendaInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    nomePaciente: 'nomePaciente',
    senha: 'senha',
    usuario: 'usuario'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const SecretariaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    RG: 'RG'
  };

  export type SecretariaScalarFieldEnum = (typeof SecretariaScalarFieldEnum)[keyof typeof SecretariaScalarFieldEnum]


  export const ConsultaScalarFieldEnum: {
    id: 'id',
    data: 'data',
    nomePaciente: 'nomePaciente',
    nomeDentista: 'nomeDentista'
  };

  export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum]


  export const AgendaScalarFieldEnum: {
    id: 'id',
    data: 'data',
    nomePaciente: 'nomePaciente'
  };

  export type AgendaScalarFieldEnum = (typeof AgendaScalarFieldEnum)[keyof typeof AgendaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    nomePaciente?: StringFilter<"Paciente"> | string
    senha?: IntFilter<"Paciente"> | number
    usuario?: StringFilter<"Paciente"> | string
    consultas?: ConsultaListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    nomePaciente?: SortOrder
    senha?: SortOrder
    usuario?: SortOrder
    consultas?: ConsultaOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuario?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nomePaciente?: StringFilter<"Paciente"> | string
    senha?: IntFilter<"Paciente"> | number
    consultas?: ConsultaListRelationFilter
  }, "id" | "usuario">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    nomePaciente?: SortOrder
    senha?: SortOrder
    usuario?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    nomePaciente?: StringWithAggregatesFilter<"Paciente"> | string
    senha?: IntWithAggregatesFilter<"Paciente"> | number
    usuario?: StringWithAggregatesFilter<"Paciente"> | string
  }

  export type SecretariaWhereInput = {
    AND?: SecretariaWhereInput | SecretariaWhereInput[]
    OR?: SecretariaWhereInput[]
    NOT?: SecretariaWhereInput | SecretariaWhereInput[]
    id?: IntFilter<"Secretaria"> | number
    nome?: StringFilter<"Secretaria"> | string
    RG?: IntFilter<"Secretaria"> | number
    consultas?: ConsultaListRelationFilter
  }

  export type SecretariaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    RG?: SortOrder
    consultas?: ConsultaOrderByRelationAggregateInput
  }

  export type SecretariaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: SecretariaWhereInput | SecretariaWhereInput[]
    OR?: SecretariaWhereInput[]
    NOT?: SecretariaWhereInput | SecretariaWhereInput[]
    RG?: IntFilter<"Secretaria"> | number
    consultas?: ConsultaListRelationFilter
  }, "id" | "nome">

  export type SecretariaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    RG?: SortOrder
    _count?: SecretariaCountOrderByAggregateInput
    _avg?: SecretariaAvgOrderByAggregateInput
    _max?: SecretariaMaxOrderByAggregateInput
    _min?: SecretariaMinOrderByAggregateInput
    _sum?: SecretariaSumOrderByAggregateInput
  }

  export type SecretariaScalarWhereWithAggregatesInput = {
    AND?: SecretariaScalarWhereWithAggregatesInput | SecretariaScalarWhereWithAggregatesInput[]
    OR?: SecretariaScalarWhereWithAggregatesInput[]
    NOT?: SecretariaScalarWhereWithAggregatesInput | SecretariaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Secretaria"> | number
    nome?: StringWithAggregatesFilter<"Secretaria"> | string
    RG?: IntWithAggregatesFilter<"Secretaria"> | number
  }

  export type ConsultaWhereInput = {
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    id?: IntFilter<"Consulta"> | number
    data?: DateTimeFilter<"Consulta"> | Date | string
    nomePaciente?: StringFilter<"Consulta"> | string
    nomeDentista?: StringFilter<"Consulta"> | string
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
    secretaria?: XOR<SecretariaNullableRelationFilter, SecretariaWhereInput> | null
    agendas?: AgendaListRelationFilter
  }

  export type ConsultaOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
    nomeDentista?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    secretaria?: SecretariaOrderByWithRelationInput
    agendas?: AgendaOrderByRelationAggregateInput
  }

  export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nomePaciente?: string
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    data?: DateTimeFilter<"Consulta"> | Date | string
    nomeDentista?: StringFilter<"Consulta"> | string
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
    secretaria?: XOR<SecretariaNullableRelationFilter, SecretariaWhereInput> | null
    agendas?: AgendaListRelationFilter
  }, "id" | "nomePaciente">

  export type ConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
    nomeDentista?: SortOrder
    _count?: ConsultaCountOrderByAggregateInput
    _avg?: ConsultaAvgOrderByAggregateInput
    _max?: ConsultaMaxOrderByAggregateInput
    _min?: ConsultaMinOrderByAggregateInput
    _sum?: ConsultaSumOrderByAggregateInput
  }

  export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    OR?: ConsultaScalarWhereWithAggregatesInput[]
    NOT?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consulta"> | number
    data?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    nomePaciente?: StringWithAggregatesFilter<"Consulta"> | string
    nomeDentista?: StringWithAggregatesFilter<"Consulta"> | string
  }

  export type AgendaWhereInput = {
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    id?: IntFilter<"Agenda"> | number
    data?: DateTimeFilter<"Agenda"> | Date | string
    nomePaciente?: StringFilter<"Agenda"> | string
    consulta?: XOR<ConsultaNullableRelationFilter, ConsultaWhereInput> | null
  }

  export type AgendaOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
    consulta?: ConsultaOrderByWithRelationInput
  }

  export type AgendaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    data?: DateTimeFilter<"Agenda"> | Date | string
    nomePaciente?: StringFilter<"Agenda"> | string
    consulta?: XOR<ConsultaNullableRelationFilter, ConsultaWhereInput> | null
  }, "id">

  export type AgendaOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
    _count?: AgendaCountOrderByAggregateInput
    _avg?: AgendaAvgOrderByAggregateInput
    _max?: AgendaMaxOrderByAggregateInput
    _min?: AgendaMinOrderByAggregateInput
    _sum?: AgendaSumOrderByAggregateInput
  }

  export type AgendaScalarWhereWithAggregatesInput = {
    AND?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    OR?: AgendaScalarWhereWithAggregatesInput[]
    NOT?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agenda"> | number
    data?: DateTimeWithAggregatesFilter<"Agenda"> | Date | string
    nomePaciente?: StringWithAggregatesFilter<"Agenda"> | string
  }

  export type PacienteCreateInput = {
    nomePaciente: string
    senha: number
    usuario: string
    consultas?: ConsultaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    nomePaciente: string
    senha: number
    usuario: string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    nomePaciente?: StringFieldUpdateOperationsInput | string
    senha?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePaciente?: StringFieldUpdateOperationsInput | string
    senha?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUpdateManyMutationInput = {
    nomePaciente?: StringFieldUpdateOperationsInput | string
    senha?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePaciente?: StringFieldUpdateOperationsInput | string
    senha?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaCreateInput = {
    nome: string
    RG: number
    consultas?: ConsultaCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaUncheckedCreateInput = {
    id?: number
    nome: string
    RG: number
    consultas?: ConsultaUncheckedCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    RG?: IntFieldUpdateOperationsInput | number
    consultas?: ConsultaUpdateManyWithoutSecretariaNestedInput
  }

  export type SecretariaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    RG?: IntFieldUpdateOperationsInput | number
    consultas?: ConsultaUncheckedUpdateManyWithoutSecretariaNestedInput
  }

  export type SecretariaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    RG?: IntFieldUpdateOperationsInput | number
  }

  export type SecretariaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    RG?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaCreateInput = {
    data: Date | string
    nomeDentista: string
    paciente?: PacienteCreateNestedOneWithoutConsultasInput
    secretaria?: SecretariaCreateNestedOneWithoutConsultasInput
    agendas?: AgendaCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateInput = {
    id?: number
    data: Date | string
    nomePaciente: string
    nomeDentista: string
    agendas?: AgendaUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneWithoutConsultasNestedInput
    secretaria?: SecretariaUpdateOneWithoutConsultasNestedInput
    agendas?: AgendaUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomePaciente?: StringFieldUpdateOperationsInput | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
    agendas?: AgendaUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomePaciente?: StringFieldUpdateOperationsInput | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
  }

  export type AgendaCreateInput = {
    data: Date | string
    consulta?: ConsultaCreateNestedOneWithoutAgendasInput
  }

  export type AgendaUncheckedCreateInput = {
    id?: number
    data: Date | string
    nomePaciente: string
  }

  export type AgendaUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta?: ConsultaUpdateOneWithoutAgendasNestedInput
  }

  export type AgendaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomePaciente?: StringFieldUpdateOperationsInput | string
  }

  export type AgendaUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomePaciente?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ConsultaListRelationFilter = {
    every?: ConsultaWhereInput
    some?: ConsultaWhereInput
    none?: ConsultaWhereInput
  }

  export type ConsultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    nomePaciente?: SortOrder
    senha?: SortOrder
    usuario?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nomePaciente?: SortOrder
    senha?: SortOrder
    usuario?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    nomePaciente?: SortOrder
    senha?: SortOrder
    usuario?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type SecretariaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    RG?: SortOrder
  }

  export type SecretariaAvgOrderByAggregateInput = {
    id?: SortOrder
    RG?: SortOrder
  }

  export type SecretariaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    RG?: SortOrder
  }

  export type SecretariaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    RG?: SortOrder
  }

  export type SecretariaSumOrderByAggregateInput = {
    id?: SortOrder
    RG?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PacienteNullableRelationFilter = {
    is?: PacienteWhereInput | null
    isNot?: PacienteWhereInput | null
  }

  export type SecretariaNullableRelationFilter = {
    is?: SecretariaWhereInput | null
    isNot?: SecretariaWhereInput | null
  }

  export type AgendaListRelationFilter = {
    every?: AgendaWhereInput
    some?: AgendaWhereInput
    none?: AgendaWhereInput
  }

  export type AgendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
    nomeDentista?: SortOrder
  }

  export type ConsultaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
    nomeDentista?: SortOrder
  }

  export type ConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
    nomeDentista?: SortOrder
  }

  export type ConsultaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConsultaNullableRelationFilter = {
    is?: ConsultaWhereInput | null
    isNot?: ConsultaWhereInput | null
  }

  export type AgendaCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
  }

  export type AgendaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgendaMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
  }

  export type AgendaMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    nomePaciente?: SortOrder
  }

  export type AgendaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConsultaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
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

  export type ConsultaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<ConsultaCreateWithoutSecretariaInput, ConsultaUncheckedCreateWithoutSecretariaInput> | ConsultaCreateWithoutSecretariaInput[] | ConsultaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutSecretariaInput | ConsultaCreateOrConnectWithoutSecretariaInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<ConsultaCreateWithoutSecretariaInput, ConsultaUncheckedCreateWithoutSecretariaInput> | ConsultaCreateWithoutSecretariaInput[] | ConsultaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutSecretariaInput | ConsultaCreateOrConnectWithoutSecretariaInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<ConsultaCreateWithoutSecretariaInput, ConsultaUncheckedCreateWithoutSecretariaInput> | ConsultaCreateWithoutSecretariaInput[] | ConsultaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutSecretariaInput | ConsultaCreateOrConnectWithoutSecretariaInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutSecretariaInput | ConsultaUpsertWithWhereUniqueWithoutSecretariaInput[]
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutSecretariaInput | ConsultaUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutSecretariaInput | ConsultaUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<ConsultaCreateWithoutSecretariaInput, ConsultaUncheckedCreateWithoutSecretariaInput> | ConsultaCreateWithoutSecretariaInput[] | ConsultaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutSecretariaInput | ConsultaCreateOrConnectWithoutSecretariaInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutSecretariaInput | ConsultaUpsertWithWhereUniqueWithoutSecretariaInput[]
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutSecretariaInput | ConsultaUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutSecretariaInput | ConsultaUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutConsultasInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    connect?: PacienteWhereUniqueInput
  }

  export type SecretariaCreateNestedOneWithoutConsultasInput = {
    create?: XOR<SecretariaCreateWithoutConsultasInput, SecretariaUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutConsultasInput
    connect?: SecretariaWhereUniqueInput
  }

  export type AgendaCreateNestedManyWithoutConsultaInput = {
    create?: XOR<AgendaCreateWithoutConsultaInput, AgendaUncheckedCreateWithoutConsultaInput> | AgendaCreateWithoutConsultaInput[] | AgendaUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutConsultaInput | AgendaCreateOrConnectWithoutConsultaInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type AgendaUncheckedCreateNestedManyWithoutConsultaInput = {
    create?: XOR<AgendaCreateWithoutConsultaInput, AgendaUncheckedCreateWithoutConsultaInput> | AgendaCreateWithoutConsultaInput[] | AgendaUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutConsultaInput | AgendaCreateOrConnectWithoutConsultaInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PacienteUpdateOneWithoutConsultasNestedInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    upsert?: PacienteUpsertWithoutConsultasInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutConsultasInput, PacienteUpdateWithoutConsultasInput>, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type SecretariaUpdateOneWithoutConsultasNestedInput = {
    create?: XOR<SecretariaCreateWithoutConsultasInput, SecretariaUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutConsultasInput
    upsert?: SecretariaUpsertWithoutConsultasInput
    disconnect?: SecretariaWhereInput | boolean
    delete?: SecretariaWhereInput | boolean
    connect?: SecretariaWhereUniqueInput
    update?: XOR<XOR<SecretariaUpdateToOneWithWhereWithoutConsultasInput, SecretariaUpdateWithoutConsultasInput>, SecretariaUncheckedUpdateWithoutConsultasInput>
  }

  export type AgendaUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<AgendaCreateWithoutConsultaInput, AgendaUncheckedCreateWithoutConsultaInput> | AgendaCreateWithoutConsultaInput[] | AgendaUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutConsultaInput | AgendaCreateOrConnectWithoutConsultaInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutConsultaInput | AgendaUpsertWithWhereUniqueWithoutConsultaInput[]
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutConsultaInput | AgendaUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutConsultaInput | AgendaUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type AgendaUncheckedUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<AgendaCreateWithoutConsultaInput, AgendaUncheckedCreateWithoutConsultaInput> | AgendaCreateWithoutConsultaInput[] | AgendaUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutConsultaInput | AgendaCreateOrConnectWithoutConsultaInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutConsultaInput | AgendaUpsertWithWhereUniqueWithoutConsultaInput[]
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutConsultaInput | AgendaUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutConsultaInput | AgendaUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type ConsultaCreateNestedOneWithoutAgendasInput = {
    create?: XOR<ConsultaCreateWithoutAgendasInput, ConsultaUncheckedCreateWithoutAgendasInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutAgendasInput
    connect?: ConsultaWhereUniqueInput
  }

  export type ConsultaUpdateOneWithoutAgendasNestedInput = {
    create?: XOR<ConsultaCreateWithoutAgendasInput, ConsultaUncheckedCreateWithoutAgendasInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutAgendasInput
    upsert?: ConsultaUpsertWithoutAgendasInput
    disconnect?: ConsultaWhereInput | boolean
    delete?: ConsultaWhereInput | boolean
    connect?: ConsultaWhereUniqueInput
    update?: XOR<XOR<ConsultaUpdateToOneWithWhereWithoutAgendasInput, ConsultaUpdateWithoutAgendasInput>, ConsultaUncheckedUpdateWithoutAgendasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConsultaCreateWithoutPacienteInput = {
    data: Date | string
    nomeDentista: string
    secretaria?: SecretariaCreateNestedOneWithoutConsultasInput
    agendas?: AgendaCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutPacienteInput = {
    id?: number
    data: Date | string
    nomeDentista: string
    agendas?: AgendaUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutPacienteInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ConsultaScalarWhereInput = {
    AND?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    OR?: ConsultaScalarWhereInput[]
    NOT?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    id?: IntFilter<"Consulta"> | number
    data?: DateTimeFilter<"Consulta"> | Date | string
    nomePaciente?: StringFilter<"Consulta"> | string
    nomeDentista?: StringFilter<"Consulta"> | string
  }

  export type ConsultaCreateWithoutSecretariaInput = {
    data: Date | string
    nomeDentista: string
    paciente?: PacienteCreateNestedOneWithoutConsultasInput
    agendas?: AgendaCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutSecretariaInput = {
    id?: number
    data: Date | string
    nomeDentista: string
    agendas?: AgendaUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutSecretariaInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutSecretariaInput, ConsultaUncheckedCreateWithoutSecretariaInput>
  }

  export type ConsultaUpsertWithWhereUniqueWithoutSecretariaInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutSecretariaInput, ConsultaUncheckedUpdateWithoutSecretariaInput>
    create: XOR<ConsultaCreateWithoutSecretariaInput, ConsultaUncheckedCreateWithoutSecretariaInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutSecretariaInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutSecretariaInput, ConsultaUncheckedUpdateWithoutSecretariaInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutSecretariaInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutSecretariaInput>
  }

  export type PacienteCreateWithoutConsultasInput = {
    nomePaciente: string
    senha: number
    usuario: string
  }

  export type PacienteUncheckedCreateWithoutConsultasInput = {
    id?: number
    nomePaciente: string
    senha: number
    usuario: string
  }

  export type PacienteCreateOrConnectWithoutConsultasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
  }

  export type SecretariaCreateWithoutConsultasInput = {
    nome: string
    RG: number
  }

  export type SecretariaUncheckedCreateWithoutConsultasInput = {
    id?: number
    nome: string
    RG: number
  }

  export type SecretariaCreateOrConnectWithoutConsultasInput = {
    where: SecretariaWhereUniqueInput
    create: XOR<SecretariaCreateWithoutConsultasInput, SecretariaUncheckedCreateWithoutConsultasInput>
  }

  export type AgendaCreateWithoutConsultaInput = {
    data: Date | string
  }

  export type AgendaUncheckedCreateWithoutConsultaInput = {
    id?: number
    data: Date | string
  }

  export type AgendaCreateOrConnectWithoutConsultaInput = {
    where: AgendaWhereUniqueInput
    create: XOR<AgendaCreateWithoutConsultaInput, AgendaUncheckedCreateWithoutConsultaInput>
  }

  export type PacienteUpsertWithoutConsultasInput = {
    update: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutConsultasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type PacienteUpdateWithoutConsultasInput = {
    nomePaciente?: StringFieldUpdateOperationsInput | string
    senha?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePaciente?: StringFieldUpdateOperationsInput | string
    senha?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaUpsertWithoutConsultasInput = {
    update: XOR<SecretariaUpdateWithoutConsultasInput, SecretariaUncheckedUpdateWithoutConsultasInput>
    create: XOR<SecretariaCreateWithoutConsultasInput, SecretariaUncheckedCreateWithoutConsultasInput>
    where?: SecretariaWhereInput
  }

  export type SecretariaUpdateToOneWithWhereWithoutConsultasInput = {
    where?: SecretariaWhereInput
    data: XOR<SecretariaUpdateWithoutConsultasInput, SecretariaUncheckedUpdateWithoutConsultasInput>
  }

  export type SecretariaUpdateWithoutConsultasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    RG?: IntFieldUpdateOperationsInput | number
  }

  export type SecretariaUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    RG?: IntFieldUpdateOperationsInput | number
  }

  export type AgendaUpsertWithWhereUniqueWithoutConsultaInput = {
    where: AgendaWhereUniqueInput
    update: XOR<AgendaUpdateWithoutConsultaInput, AgendaUncheckedUpdateWithoutConsultaInput>
    create: XOR<AgendaCreateWithoutConsultaInput, AgendaUncheckedCreateWithoutConsultaInput>
  }

  export type AgendaUpdateWithWhereUniqueWithoutConsultaInput = {
    where: AgendaWhereUniqueInput
    data: XOR<AgendaUpdateWithoutConsultaInput, AgendaUncheckedUpdateWithoutConsultaInput>
  }

  export type AgendaUpdateManyWithWhereWithoutConsultaInput = {
    where: AgendaScalarWhereInput
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyWithoutConsultaInput>
  }

  export type AgendaScalarWhereInput = {
    AND?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
    OR?: AgendaScalarWhereInput[]
    NOT?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
    id?: IntFilter<"Agenda"> | number
    data?: DateTimeFilter<"Agenda"> | Date | string
    nomePaciente?: StringFilter<"Agenda"> | string
  }

  export type ConsultaCreateWithoutAgendasInput = {
    data: Date | string
    nomeDentista: string
    paciente?: PacienteCreateNestedOneWithoutConsultasInput
    secretaria?: SecretariaCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateWithoutAgendasInput = {
    id?: number
    data: Date | string
    nomePaciente: string
    nomeDentista: string
  }

  export type ConsultaCreateOrConnectWithoutAgendasInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutAgendasInput, ConsultaUncheckedCreateWithoutAgendasInput>
  }

  export type ConsultaUpsertWithoutAgendasInput = {
    update: XOR<ConsultaUpdateWithoutAgendasInput, ConsultaUncheckedUpdateWithoutAgendasInput>
    create: XOR<ConsultaCreateWithoutAgendasInput, ConsultaUncheckedCreateWithoutAgendasInput>
    where?: ConsultaWhereInput
  }

  export type ConsultaUpdateToOneWithWhereWithoutAgendasInput = {
    where?: ConsultaWhereInput
    data: XOR<ConsultaUpdateWithoutAgendasInput, ConsultaUncheckedUpdateWithoutAgendasInput>
  }

  export type ConsultaUpdateWithoutAgendasInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneWithoutConsultasNestedInput
    secretaria?: SecretariaUpdateOneWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutAgendasInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomePaciente?: StringFieldUpdateOperationsInput | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultaUpdateWithoutPacienteInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
    secretaria?: SecretariaUpdateOneWithoutConsultasNestedInput
    agendas?: AgendaUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
    agendas?: AgendaUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultaUpdateWithoutSecretariaInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneWithoutConsultasNestedInput
    agendas?: AgendaUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutSecretariaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
    agendas?: AgendaUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateManyWithoutSecretariaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nomeDentista?: StringFieldUpdateOperationsInput | string
  }

  export type AgendaUpdateWithoutConsultaInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateManyWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PacienteCountOutputTypeDefaultArgs instead
     */
    export type PacienteCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PacienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SecretariaCountOutputTypeDefaultArgs instead
     */
    export type SecretariaCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SecretariaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultaCountOutputTypeDefaultArgs instead
     */
    export type ConsultaCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConsultaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PacienteDefaultArgs instead
     */
    export type PacienteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PacienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SecretariaDefaultArgs instead
     */
    export type SecretariaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SecretariaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultaDefaultArgs instead
     */
    export type ConsultaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConsultaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgendaDefaultArgs instead
     */
    export type AgendaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AgendaDefaultArgs<ExtArgs>

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