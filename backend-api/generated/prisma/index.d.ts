
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
 * Model Alimentacion
 * 
 */
export type Alimentacion = $Result.DefaultSelection<Prisma.$AlimentacionPayload>
/**
 * Model Historial
 * 
 */
export type Historial = $Result.DefaultSelection<Prisma.$HistorialPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alimentacions
 * const alimentacions = await prisma.alimentacion.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Alimentacions
   * const alimentacions = await prisma.alimentacion.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alimentacion`: Exposes CRUD operations for the **Alimentacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alimentacions
    * const alimentacions = await prisma.alimentacion.findMany()
    * ```
    */
  get alimentacion(): Prisma.AlimentacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historial`: Exposes CRUD operations for the **Historial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historials
    * const historials = await prisma.historial.findMany()
    * ```
    */
  get historial(): Prisma.HistorialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Alimentacion: 'Alimentacion',
    Historial: 'Historial',
    Usuario: 'Usuario'
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
      modelProps: "alimentacion" | "historial" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Alimentacion: {
        payload: Prisma.$AlimentacionPayload<ExtArgs>
        fields: Prisma.AlimentacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlimentacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlimentacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload>
          }
          findFirst: {
            args: Prisma.AlimentacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlimentacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload>
          }
          findMany: {
            args: Prisma.AlimentacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload>[]
          }
          create: {
            args: Prisma.AlimentacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload>
          }
          createMany: {
            args: Prisma.AlimentacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlimentacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload>[]
          }
          delete: {
            args: Prisma.AlimentacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload>
          }
          update: {
            args: Prisma.AlimentacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload>
          }
          deleteMany: {
            args: Prisma.AlimentacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlimentacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlimentacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload>[]
          }
          upsert: {
            args: Prisma.AlimentacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentacionPayload>
          }
          aggregate: {
            args: Prisma.AlimentacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlimentacion>
          }
          groupBy: {
            args: Prisma.AlimentacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlimentacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlimentacionCountArgs<ExtArgs>
            result: $Utils.Optional<AlimentacionCountAggregateOutputType> | number
          }
        }
      }
      Historial: {
        payload: Prisma.$HistorialPayload<ExtArgs>
        fields: Prisma.HistorialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistorialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistorialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload>
          }
          findFirst: {
            args: Prisma.HistorialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistorialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload>
          }
          findMany: {
            args: Prisma.HistorialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload>[]
          }
          create: {
            args: Prisma.HistorialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload>
          }
          createMany: {
            args: Prisma.HistorialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistorialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload>[]
          }
          delete: {
            args: Prisma.HistorialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload>
          }
          update: {
            args: Prisma.HistorialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload>
          }
          deleteMany: {
            args: Prisma.HistorialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistorialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistorialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload>[]
          }
          upsert: {
            args: Prisma.HistorialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPayload>
          }
          aggregate: {
            args: Prisma.HistorialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorial>
          }
          groupBy: {
            args: Prisma.HistorialGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistorialGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistorialCountArgs<ExtArgs>
            result: $Utils.Optional<HistorialCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    alimentacion?: AlimentacionOmit
    historial?: HistorialOmit
    usuario?: UsuarioOmit
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
   * Count Type AlimentacionCountOutputType
   */

  export type AlimentacionCountOutputType = {
    Historial: number
  }

  export type AlimentacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Historial?: boolean | AlimentacionCountOutputTypeCountHistorialArgs
  }

  // Custom InputTypes
  /**
   * AlimentacionCountOutputType without action
   */
  export type AlimentacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentacionCountOutputType
     */
    select?: AlimentacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlimentacionCountOutputType without action
   */
  export type AlimentacionCountOutputTypeCountHistorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    Alimentacion: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alimentacion?: boolean | UsuarioCountOutputTypeCountAlimentacionArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAlimentacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlimentacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Alimentacion
   */

  export type AggregateAlimentacion = {
    _count: AlimentacionCountAggregateOutputType | null
    _avg: AlimentacionAvgAggregateOutputType | null
    _sum: AlimentacionSumAggregateOutputType | null
    _min: AlimentacionMinAggregateOutputType | null
    _max: AlimentacionMaxAggregateOutputType | null
  }

  export type AlimentacionAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    numero_comida: number | null
    cantidad_comida: number | null
  }

  export type AlimentacionSumAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    numero_comida: number | null
    cantidad_comida: number | null
  }

  export type AlimentacionMinAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    numero_comida: number | null
    hora: string | null
    cantidad_comida: number | null
  }

  export type AlimentacionMaxAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    numero_comida: number | null
    hora: string | null
    cantidad_comida: number | null
  }

  export type AlimentacionCountAggregateOutputType = {
    id: number
    id_usuario: number
    numero_comida: number
    hora: number
    cantidad_comida: number
    _all: number
  }


  export type AlimentacionAvgAggregateInputType = {
    id?: true
    id_usuario?: true
    numero_comida?: true
    cantidad_comida?: true
  }

  export type AlimentacionSumAggregateInputType = {
    id?: true
    id_usuario?: true
    numero_comida?: true
    cantidad_comida?: true
  }

  export type AlimentacionMinAggregateInputType = {
    id?: true
    id_usuario?: true
    numero_comida?: true
    hora?: true
    cantidad_comida?: true
  }

  export type AlimentacionMaxAggregateInputType = {
    id?: true
    id_usuario?: true
    numero_comida?: true
    hora?: true
    cantidad_comida?: true
  }

  export type AlimentacionCountAggregateInputType = {
    id?: true
    id_usuario?: true
    numero_comida?: true
    hora?: true
    cantidad_comida?: true
    _all?: true
  }

  export type AlimentacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alimentacion to aggregate.
     */
    where?: AlimentacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alimentacions to fetch.
     */
    orderBy?: AlimentacionOrderByWithRelationInput | AlimentacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlimentacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alimentacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alimentacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alimentacions
    **/
    _count?: true | AlimentacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlimentacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlimentacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlimentacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlimentacionMaxAggregateInputType
  }

  export type GetAlimentacionAggregateType<T extends AlimentacionAggregateArgs> = {
        [P in keyof T & keyof AggregateAlimentacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlimentacion[P]>
      : GetScalarType<T[P], AggregateAlimentacion[P]>
  }




  export type AlimentacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlimentacionWhereInput
    orderBy?: AlimentacionOrderByWithAggregationInput | AlimentacionOrderByWithAggregationInput[]
    by: AlimentacionScalarFieldEnum[] | AlimentacionScalarFieldEnum
    having?: AlimentacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlimentacionCountAggregateInputType | true
    _avg?: AlimentacionAvgAggregateInputType
    _sum?: AlimentacionSumAggregateInputType
    _min?: AlimentacionMinAggregateInputType
    _max?: AlimentacionMaxAggregateInputType
  }

  export type AlimentacionGroupByOutputType = {
    id: number
    id_usuario: number
    numero_comida: number
    hora: string
    cantidad_comida: number
    _count: AlimentacionCountAggregateOutputType | null
    _avg: AlimentacionAvgAggregateOutputType | null
    _sum: AlimentacionSumAggregateOutputType | null
    _min: AlimentacionMinAggregateOutputType | null
    _max: AlimentacionMaxAggregateOutputType | null
  }

  type GetAlimentacionGroupByPayload<T extends AlimentacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlimentacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlimentacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlimentacionGroupByOutputType[P]>
            : GetScalarType<T[P], AlimentacionGroupByOutputType[P]>
        }
      >
    >


  export type AlimentacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario?: boolean
    numero_comida?: boolean
    hora?: boolean
    cantidad_comida?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Historial?: boolean | Alimentacion$HistorialArgs<ExtArgs>
    _count?: boolean | AlimentacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alimentacion"]>

  export type AlimentacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario?: boolean
    numero_comida?: boolean
    hora?: boolean
    cantidad_comida?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alimentacion"]>

  export type AlimentacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario?: boolean
    numero_comida?: boolean
    hora?: boolean
    cantidad_comida?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alimentacion"]>

  export type AlimentacionSelectScalar = {
    id?: boolean
    id_usuario?: boolean
    numero_comida?: boolean
    hora?: boolean
    cantidad_comida?: boolean
  }

  export type AlimentacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_usuario" | "numero_comida" | "hora" | "cantidad_comida", ExtArgs["result"]["alimentacion"]>
  export type AlimentacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Historial?: boolean | Alimentacion$HistorialArgs<ExtArgs>
    _count?: boolean | AlimentacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlimentacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AlimentacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AlimentacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alimentacion"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
      Historial: Prisma.$HistorialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_usuario: number
      numero_comida: number
      hora: string
      cantidad_comida: number
    }, ExtArgs["result"]["alimentacion"]>
    composites: {}
  }

  type AlimentacionGetPayload<S extends boolean | null | undefined | AlimentacionDefaultArgs> = $Result.GetResult<Prisma.$AlimentacionPayload, S>

  type AlimentacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlimentacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlimentacionCountAggregateInputType | true
    }

  export interface AlimentacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alimentacion'], meta: { name: 'Alimentacion' } }
    /**
     * Find zero or one Alimentacion that matches the filter.
     * @param {AlimentacionFindUniqueArgs} args - Arguments to find a Alimentacion
     * @example
     * // Get one Alimentacion
     * const alimentacion = await prisma.alimentacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlimentacionFindUniqueArgs>(args: SelectSubset<T, AlimentacionFindUniqueArgs<ExtArgs>>): Prisma__AlimentacionClient<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alimentacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlimentacionFindUniqueOrThrowArgs} args - Arguments to find a Alimentacion
     * @example
     * // Get one Alimentacion
     * const alimentacion = await prisma.alimentacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlimentacionFindUniqueOrThrowArgs>(args: SelectSubset<T, AlimentacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlimentacionClient<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alimentacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacionFindFirstArgs} args - Arguments to find a Alimentacion
     * @example
     * // Get one Alimentacion
     * const alimentacion = await prisma.alimentacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlimentacionFindFirstArgs>(args?: SelectSubset<T, AlimentacionFindFirstArgs<ExtArgs>>): Prisma__AlimentacionClient<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alimentacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacionFindFirstOrThrowArgs} args - Arguments to find a Alimentacion
     * @example
     * // Get one Alimentacion
     * const alimentacion = await prisma.alimentacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlimentacionFindFirstOrThrowArgs>(args?: SelectSubset<T, AlimentacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlimentacionClient<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alimentacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alimentacions
     * const alimentacions = await prisma.alimentacion.findMany()
     * 
     * // Get first 10 Alimentacions
     * const alimentacions = await prisma.alimentacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alimentacionWithIdOnly = await prisma.alimentacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlimentacionFindManyArgs>(args?: SelectSubset<T, AlimentacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alimentacion.
     * @param {AlimentacionCreateArgs} args - Arguments to create a Alimentacion.
     * @example
     * // Create one Alimentacion
     * const Alimentacion = await prisma.alimentacion.create({
     *   data: {
     *     // ... data to create a Alimentacion
     *   }
     * })
     * 
     */
    create<T extends AlimentacionCreateArgs>(args: SelectSubset<T, AlimentacionCreateArgs<ExtArgs>>): Prisma__AlimentacionClient<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alimentacions.
     * @param {AlimentacionCreateManyArgs} args - Arguments to create many Alimentacions.
     * @example
     * // Create many Alimentacions
     * const alimentacion = await prisma.alimentacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlimentacionCreateManyArgs>(args?: SelectSubset<T, AlimentacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alimentacions and returns the data saved in the database.
     * @param {AlimentacionCreateManyAndReturnArgs} args - Arguments to create many Alimentacions.
     * @example
     * // Create many Alimentacions
     * const alimentacion = await prisma.alimentacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alimentacions and only return the `id`
     * const alimentacionWithIdOnly = await prisma.alimentacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlimentacionCreateManyAndReturnArgs>(args?: SelectSubset<T, AlimentacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alimentacion.
     * @param {AlimentacionDeleteArgs} args - Arguments to delete one Alimentacion.
     * @example
     * // Delete one Alimentacion
     * const Alimentacion = await prisma.alimentacion.delete({
     *   where: {
     *     // ... filter to delete one Alimentacion
     *   }
     * })
     * 
     */
    delete<T extends AlimentacionDeleteArgs>(args: SelectSubset<T, AlimentacionDeleteArgs<ExtArgs>>): Prisma__AlimentacionClient<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alimentacion.
     * @param {AlimentacionUpdateArgs} args - Arguments to update one Alimentacion.
     * @example
     * // Update one Alimentacion
     * const alimentacion = await prisma.alimentacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlimentacionUpdateArgs>(args: SelectSubset<T, AlimentacionUpdateArgs<ExtArgs>>): Prisma__AlimentacionClient<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alimentacions.
     * @param {AlimentacionDeleteManyArgs} args - Arguments to filter Alimentacions to delete.
     * @example
     * // Delete a few Alimentacions
     * const { count } = await prisma.alimentacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlimentacionDeleteManyArgs>(args?: SelectSubset<T, AlimentacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alimentacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alimentacions
     * const alimentacion = await prisma.alimentacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlimentacionUpdateManyArgs>(args: SelectSubset<T, AlimentacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alimentacions and returns the data updated in the database.
     * @param {AlimentacionUpdateManyAndReturnArgs} args - Arguments to update many Alimentacions.
     * @example
     * // Update many Alimentacions
     * const alimentacion = await prisma.alimentacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alimentacions and only return the `id`
     * const alimentacionWithIdOnly = await prisma.alimentacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlimentacionUpdateManyAndReturnArgs>(args: SelectSubset<T, AlimentacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alimentacion.
     * @param {AlimentacionUpsertArgs} args - Arguments to update or create a Alimentacion.
     * @example
     * // Update or create a Alimentacion
     * const alimentacion = await prisma.alimentacion.upsert({
     *   create: {
     *     // ... data to create a Alimentacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alimentacion we want to update
     *   }
     * })
     */
    upsert<T extends AlimentacionUpsertArgs>(args: SelectSubset<T, AlimentacionUpsertArgs<ExtArgs>>): Prisma__AlimentacionClient<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alimentacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacionCountArgs} args - Arguments to filter Alimentacions to count.
     * @example
     * // Count the number of Alimentacions
     * const count = await prisma.alimentacion.count({
     *   where: {
     *     // ... the filter for the Alimentacions we want to count
     *   }
     * })
    **/
    count<T extends AlimentacionCountArgs>(
      args?: Subset<T, AlimentacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlimentacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alimentacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlimentacionAggregateArgs>(args: Subset<T, AlimentacionAggregateArgs>): Prisma.PrismaPromise<GetAlimentacionAggregateType<T>>

    /**
     * Group by Alimentacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacionGroupByArgs} args - Group by arguments.
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
      T extends AlimentacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlimentacionGroupByArgs['orderBy'] }
        : { orderBy?: AlimentacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlimentacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlimentacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alimentacion model
   */
  readonly fields: AlimentacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alimentacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlimentacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Historial<T extends Alimentacion$HistorialArgs<ExtArgs> = {}>(args?: Subset<T, Alimentacion$HistorialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alimentacion model
   */
  interface AlimentacionFieldRefs {
    readonly id: FieldRef<"Alimentacion", 'Int'>
    readonly id_usuario: FieldRef<"Alimentacion", 'Int'>
    readonly numero_comida: FieldRef<"Alimentacion", 'Int'>
    readonly hora: FieldRef<"Alimentacion", 'String'>
    readonly cantidad_comida: FieldRef<"Alimentacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Alimentacion findUnique
   */
  export type AlimentacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacion to fetch.
     */
    where: AlimentacionWhereUniqueInput
  }

  /**
   * Alimentacion findUniqueOrThrow
   */
  export type AlimentacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacion to fetch.
     */
    where: AlimentacionWhereUniqueInput
  }

  /**
   * Alimentacion findFirst
   */
  export type AlimentacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacion to fetch.
     */
    where?: AlimentacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alimentacions to fetch.
     */
    orderBy?: AlimentacionOrderByWithRelationInput | AlimentacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alimentacions.
     */
    cursor?: AlimentacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alimentacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alimentacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alimentacions.
     */
    distinct?: AlimentacionScalarFieldEnum | AlimentacionScalarFieldEnum[]
  }

  /**
   * Alimentacion findFirstOrThrow
   */
  export type AlimentacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacion to fetch.
     */
    where?: AlimentacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alimentacions to fetch.
     */
    orderBy?: AlimentacionOrderByWithRelationInput | AlimentacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alimentacions.
     */
    cursor?: AlimentacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alimentacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alimentacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alimentacions.
     */
    distinct?: AlimentacionScalarFieldEnum | AlimentacionScalarFieldEnum[]
  }

  /**
   * Alimentacion findMany
   */
  export type AlimentacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacions to fetch.
     */
    where?: AlimentacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alimentacions to fetch.
     */
    orderBy?: AlimentacionOrderByWithRelationInput | AlimentacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alimentacions.
     */
    cursor?: AlimentacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alimentacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alimentacions.
     */
    skip?: number
    distinct?: AlimentacionScalarFieldEnum | AlimentacionScalarFieldEnum[]
  }

  /**
   * Alimentacion create
   */
  export type AlimentacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Alimentacion.
     */
    data: XOR<AlimentacionCreateInput, AlimentacionUncheckedCreateInput>
  }

  /**
   * Alimentacion createMany
   */
  export type AlimentacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alimentacions.
     */
    data: AlimentacionCreateManyInput | AlimentacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alimentacion createManyAndReturn
   */
  export type AlimentacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * The data used to create many Alimentacions.
     */
    data: AlimentacionCreateManyInput | AlimentacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alimentacion update
   */
  export type AlimentacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Alimentacion.
     */
    data: XOR<AlimentacionUpdateInput, AlimentacionUncheckedUpdateInput>
    /**
     * Choose, which Alimentacion to update.
     */
    where: AlimentacionWhereUniqueInput
  }

  /**
   * Alimentacion updateMany
   */
  export type AlimentacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alimentacions.
     */
    data: XOR<AlimentacionUpdateManyMutationInput, AlimentacionUncheckedUpdateManyInput>
    /**
     * Filter which Alimentacions to update
     */
    where?: AlimentacionWhereInput
    /**
     * Limit how many Alimentacions to update.
     */
    limit?: number
  }

  /**
   * Alimentacion updateManyAndReturn
   */
  export type AlimentacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * The data used to update Alimentacions.
     */
    data: XOR<AlimentacionUpdateManyMutationInput, AlimentacionUncheckedUpdateManyInput>
    /**
     * Filter which Alimentacions to update
     */
    where?: AlimentacionWhereInput
    /**
     * Limit how many Alimentacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alimentacion upsert
   */
  export type AlimentacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Alimentacion to update in case it exists.
     */
    where: AlimentacionWhereUniqueInput
    /**
     * In case the Alimentacion found by the `where` argument doesn't exist, create a new Alimentacion with this data.
     */
    create: XOR<AlimentacionCreateInput, AlimentacionUncheckedCreateInput>
    /**
     * In case the Alimentacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlimentacionUpdateInput, AlimentacionUncheckedUpdateInput>
  }

  /**
   * Alimentacion delete
   */
  export type AlimentacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    /**
     * Filter which Alimentacion to delete.
     */
    where: AlimentacionWhereUniqueInput
  }

  /**
   * Alimentacion deleteMany
   */
  export type AlimentacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alimentacions to delete
     */
    where?: AlimentacionWhereInput
    /**
     * Limit how many Alimentacions to delete.
     */
    limit?: number
  }

  /**
   * Alimentacion.Historial
   */
  export type Alimentacion$HistorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    where?: HistorialWhereInput
    orderBy?: HistorialOrderByWithRelationInput | HistorialOrderByWithRelationInput[]
    cursor?: HistorialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialScalarFieldEnum | HistorialScalarFieldEnum[]
  }

  /**
   * Alimentacion without action
   */
  export type AlimentacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
  }


  /**
   * Model Historial
   */

  export type AggregateHistorial = {
    _count: HistorialCountAggregateOutputType | null
    _avg: HistorialAvgAggregateOutputType | null
    _sum: HistorialSumAggregateOutputType | null
    _min: HistorialMinAggregateOutputType | null
    _max: HistorialMaxAggregateOutputType | null
  }

  export type HistorialAvgAggregateOutputType = {
    id_alimentacion: number | null
    id: number | null
  }

  export type HistorialSumAggregateOutputType = {
    id_alimentacion: number | null
    id: number | null
  }

  export type HistorialMinAggregateOutputType = {
    id_alimentacion: number | null
    fecha_alimentacion: Date | null
    isCompletado: boolean | null
    id: number | null
  }

  export type HistorialMaxAggregateOutputType = {
    id_alimentacion: number | null
    fecha_alimentacion: Date | null
    isCompletado: boolean | null
    id: number | null
  }

  export type HistorialCountAggregateOutputType = {
    id_alimentacion: number
    fecha_alimentacion: number
    isCompletado: number
    id: number
    _all: number
  }


  export type HistorialAvgAggregateInputType = {
    id_alimentacion?: true
    id?: true
  }

  export type HistorialSumAggregateInputType = {
    id_alimentacion?: true
    id?: true
  }

  export type HistorialMinAggregateInputType = {
    id_alimentacion?: true
    fecha_alimentacion?: true
    isCompletado?: true
    id?: true
  }

  export type HistorialMaxAggregateInputType = {
    id_alimentacion?: true
    fecha_alimentacion?: true
    isCompletado?: true
    id?: true
  }

  export type HistorialCountAggregateInputType = {
    id_alimentacion?: true
    fecha_alimentacion?: true
    isCompletado?: true
    id?: true
    _all?: true
  }

  export type HistorialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historial to aggregate.
     */
    where?: HistorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historials to fetch.
     */
    orderBy?: HistorialOrderByWithRelationInput | HistorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historials
    **/
    _count?: true | HistorialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistorialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistorialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistorialMaxAggregateInputType
  }

  export type GetHistorialAggregateType<T extends HistorialAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorial[P]>
      : GetScalarType<T[P], AggregateHistorial[P]>
  }




  export type HistorialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialWhereInput
    orderBy?: HistorialOrderByWithAggregationInput | HistorialOrderByWithAggregationInput[]
    by: HistorialScalarFieldEnum[] | HistorialScalarFieldEnum
    having?: HistorialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistorialCountAggregateInputType | true
    _avg?: HistorialAvgAggregateInputType
    _sum?: HistorialSumAggregateInputType
    _min?: HistorialMinAggregateInputType
    _max?: HistorialMaxAggregateInputType
  }

  export type HistorialGroupByOutputType = {
    id_alimentacion: number
    fecha_alimentacion: Date
    isCompletado: boolean
    id: number
    _count: HistorialCountAggregateOutputType | null
    _avg: HistorialAvgAggregateOutputType | null
    _sum: HistorialSumAggregateOutputType | null
    _min: HistorialMinAggregateOutputType | null
    _max: HistorialMaxAggregateOutputType | null
  }

  type GetHistorialGroupByPayload<T extends HistorialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistorialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistorialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistorialGroupByOutputType[P]>
            : GetScalarType<T[P], HistorialGroupByOutputType[P]>
        }
      >
    >


  export type HistorialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alimentacion?: boolean
    fecha_alimentacion?: boolean
    isCompletado?: boolean
    id?: boolean
    Alimentacion?: boolean | AlimentacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historial"]>

  export type HistorialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alimentacion?: boolean
    fecha_alimentacion?: boolean
    isCompletado?: boolean
    id?: boolean
    Alimentacion?: boolean | AlimentacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historial"]>

  export type HistorialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alimentacion?: boolean
    fecha_alimentacion?: boolean
    isCompletado?: boolean
    id?: boolean
    Alimentacion?: boolean | AlimentacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historial"]>

  export type HistorialSelectScalar = {
    id_alimentacion?: boolean
    fecha_alimentacion?: boolean
    isCompletado?: boolean
    id?: boolean
  }

  export type HistorialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_alimentacion" | "fecha_alimentacion" | "isCompletado" | "id", ExtArgs["result"]["historial"]>
  export type HistorialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alimentacion?: boolean | AlimentacionDefaultArgs<ExtArgs>
  }
  export type HistorialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alimentacion?: boolean | AlimentacionDefaultArgs<ExtArgs>
  }
  export type HistorialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alimentacion?: boolean | AlimentacionDefaultArgs<ExtArgs>
  }

  export type $HistorialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historial"
    objects: {
      Alimentacion: Prisma.$AlimentacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_alimentacion: number
      fecha_alimentacion: Date
      isCompletado: boolean
      id: number
    }, ExtArgs["result"]["historial"]>
    composites: {}
  }

  type HistorialGetPayload<S extends boolean | null | undefined | HistorialDefaultArgs> = $Result.GetResult<Prisma.$HistorialPayload, S>

  type HistorialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistorialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistorialCountAggregateInputType | true
    }

  export interface HistorialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historial'], meta: { name: 'Historial' } }
    /**
     * Find zero or one Historial that matches the filter.
     * @param {HistorialFindUniqueArgs} args - Arguments to find a Historial
     * @example
     * // Get one Historial
     * const historial = await prisma.historial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistorialFindUniqueArgs>(args: SelectSubset<T, HistorialFindUniqueArgs<ExtArgs>>): Prisma__HistorialClient<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistorialFindUniqueOrThrowArgs} args - Arguments to find a Historial
     * @example
     * // Get one Historial
     * const historial = await prisma.historial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistorialFindUniqueOrThrowArgs>(args: SelectSubset<T, HistorialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistorialClient<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialFindFirstArgs} args - Arguments to find a Historial
     * @example
     * // Get one Historial
     * const historial = await prisma.historial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistorialFindFirstArgs>(args?: SelectSubset<T, HistorialFindFirstArgs<ExtArgs>>): Prisma__HistorialClient<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialFindFirstOrThrowArgs} args - Arguments to find a Historial
     * @example
     * // Get one Historial
     * const historial = await prisma.historial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistorialFindFirstOrThrowArgs>(args?: SelectSubset<T, HistorialFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistorialClient<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historials
     * const historials = await prisma.historial.findMany()
     * 
     * // Get first 10 Historials
     * const historials = await prisma.historial.findMany({ take: 10 })
     * 
     * // Only select the `id_alimentacion`
     * const historialWithId_alimentacionOnly = await prisma.historial.findMany({ select: { id_alimentacion: true } })
     * 
     */
    findMany<T extends HistorialFindManyArgs>(args?: SelectSubset<T, HistorialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historial.
     * @param {HistorialCreateArgs} args - Arguments to create a Historial.
     * @example
     * // Create one Historial
     * const Historial = await prisma.historial.create({
     *   data: {
     *     // ... data to create a Historial
     *   }
     * })
     * 
     */
    create<T extends HistorialCreateArgs>(args: SelectSubset<T, HistorialCreateArgs<ExtArgs>>): Prisma__HistorialClient<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historials.
     * @param {HistorialCreateManyArgs} args - Arguments to create many Historials.
     * @example
     * // Create many Historials
     * const historial = await prisma.historial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistorialCreateManyArgs>(args?: SelectSubset<T, HistorialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historials and returns the data saved in the database.
     * @param {HistorialCreateManyAndReturnArgs} args - Arguments to create many Historials.
     * @example
     * // Create many Historials
     * const historial = await prisma.historial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historials and only return the `id_alimentacion`
     * const historialWithId_alimentacionOnly = await prisma.historial.createManyAndReturn({
     *   select: { id_alimentacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistorialCreateManyAndReturnArgs>(args?: SelectSubset<T, HistorialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historial.
     * @param {HistorialDeleteArgs} args - Arguments to delete one Historial.
     * @example
     * // Delete one Historial
     * const Historial = await prisma.historial.delete({
     *   where: {
     *     // ... filter to delete one Historial
     *   }
     * })
     * 
     */
    delete<T extends HistorialDeleteArgs>(args: SelectSubset<T, HistorialDeleteArgs<ExtArgs>>): Prisma__HistorialClient<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historial.
     * @param {HistorialUpdateArgs} args - Arguments to update one Historial.
     * @example
     * // Update one Historial
     * const historial = await prisma.historial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistorialUpdateArgs>(args: SelectSubset<T, HistorialUpdateArgs<ExtArgs>>): Prisma__HistorialClient<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historials.
     * @param {HistorialDeleteManyArgs} args - Arguments to filter Historials to delete.
     * @example
     * // Delete a few Historials
     * const { count } = await prisma.historial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistorialDeleteManyArgs>(args?: SelectSubset<T, HistorialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historials
     * const historial = await prisma.historial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistorialUpdateManyArgs>(args: SelectSubset<T, HistorialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historials and returns the data updated in the database.
     * @param {HistorialUpdateManyAndReturnArgs} args - Arguments to update many Historials.
     * @example
     * // Update many Historials
     * const historial = await prisma.historial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historials and only return the `id_alimentacion`
     * const historialWithId_alimentacionOnly = await prisma.historial.updateManyAndReturn({
     *   select: { id_alimentacion: true },
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
    updateManyAndReturn<T extends HistorialUpdateManyAndReturnArgs>(args: SelectSubset<T, HistorialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historial.
     * @param {HistorialUpsertArgs} args - Arguments to update or create a Historial.
     * @example
     * // Update or create a Historial
     * const historial = await prisma.historial.upsert({
     *   create: {
     *     // ... data to create a Historial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historial we want to update
     *   }
     * })
     */
    upsert<T extends HistorialUpsertArgs>(args: SelectSubset<T, HistorialUpsertArgs<ExtArgs>>): Prisma__HistorialClient<$Result.GetResult<Prisma.$HistorialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCountArgs} args - Arguments to filter Historials to count.
     * @example
     * // Count the number of Historials
     * const count = await prisma.historial.count({
     *   where: {
     *     // ... the filter for the Historials we want to count
     *   }
     * })
    **/
    count<T extends HistorialCountArgs>(
      args?: Subset<T, HistorialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistorialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistorialAggregateArgs>(args: Subset<T, HistorialAggregateArgs>): Prisma.PrismaPromise<GetHistorialAggregateType<T>>

    /**
     * Group by Historial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialGroupByArgs} args - Group by arguments.
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
      T extends HistorialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistorialGroupByArgs['orderBy'] }
        : { orderBy?: HistorialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistorialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historial model
   */
  readonly fields: HistorialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistorialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Alimentacion<T extends AlimentacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlimentacionDefaultArgs<ExtArgs>>): Prisma__AlimentacionClient<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Historial model
   */
  interface HistorialFieldRefs {
    readonly id_alimentacion: FieldRef<"Historial", 'Int'>
    readonly fecha_alimentacion: FieldRef<"Historial", 'DateTime'>
    readonly isCompletado: FieldRef<"Historial", 'Boolean'>
    readonly id: FieldRef<"Historial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Historial findUnique
   */
  export type HistorialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    /**
     * Filter, which Historial to fetch.
     */
    where: HistorialWhereUniqueInput
  }

  /**
   * Historial findUniqueOrThrow
   */
  export type HistorialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    /**
     * Filter, which Historial to fetch.
     */
    where: HistorialWhereUniqueInput
  }

  /**
   * Historial findFirst
   */
  export type HistorialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    /**
     * Filter, which Historial to fetch.
     */
    where?: HistorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historials to fetch.
     */
    orderBy?: HistorialOrderByWithRelationInput | HistorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historials.
     */
    cursor?: HistorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historials.
     */
    distinct?: HistorialScalarFieldEnum | HistorialScalarFieldEnum[]
  }

  /**
   * Historial findFirstOrThrow
   */
  export type HistorialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    /**
     * Filter, which Historial to fetch.
     */
    where?: HistorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historials to fetch.
     */
    orderBy?: HistorialOrderByWithRelationInput | HistorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historials.
     */
    cursor?: HistorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historials.
     */
    distinct?: HistorialScalarFieldEnum | HistorialScalarFieldEnum[]
  }

  /**
   * Historial findMany
   */
  export type HistorialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    /**
     * Filter, which Historials to fetch.
     */
    where?: HistorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historials to fetch.
     */
    orderBy?: HistorialOrderByWithRelationInput | HistorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historials.
     */
    cursor?: HistorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historials.
     */
    skip?: number
    distinct?: HistorialScalarFieldEnum | HistorialScalarFieldEnum[]
  }

  /**
   * Historial create
   */
  export type HistorialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    /**
     * The data needed to create a Historial.
     */
    data: XOR<HistorialCreateInput, HistorialUncheckedCreateInput>
  }

  /**
   * Historial createMany
   */
  export type HistorialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historials.
     */
    data: HistorialCreateManyInput | HistorialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historial createManyAndReturn
   */
  export type HistorialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * The data used to create many Historials.
     */
    data: HistorialCreateManyInput | HistorialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historial update
   */
  export type HistorialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    /**
     * The data needed to update a Historial.
     */
    data: XOR<HistorialUpdateInput, HistorialUncheckedUpdateInput>
    /**
     * Choose, which Historial to update.
     */
    where: HistorialWhereUniqueInput
  }

  /**
   * Historial updateMany
   */
  export type HistorialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historials.
     */
    data: XOR<HistorialUpdateManyMutationInput, HistorialUncheckedUpdateManyInput>
    /**
     * Filter which Historials to update
     */
    where?: HistorialWhereInput
    /**
     * Limit how many Historials to update.
     */
    limit?: number
  }

  /**
   * Historial updateManyAndReturn
   */
  export type HistorialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * The data used to update Historials.
     */
    data: XOR<HistorialUpdateManyMutationInput, HistorialUncheckedUpdateManyInput>
    /**
     * Filter which Historials to update
     */
    where?: HistorialWhereInput
    /**
     * Limit how many Historials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historial upsert
   */
  export type HistorialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    /**
     * The filter to search for the Historial to update in case it exists.
     */
    where: HistorialWhereUniqueInput
    /**
     * In case the Historial found by the `where` argument doesn't exist, create a new Historial with this data.
     */
    create: XOR<HistorialCreateInput, HistorialUncheckedCreateInput>
    /**
     * In case the Historial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistorialUpdateInput, HistorialUncheckedUpdateInput>
  }

  /**
   * Historial delete
   */
  export type HistorialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
    /**
     * Filter which Historial to delete.
     */
    where: HistorialWhereUniqueInput
  }

  /**
   * Historial deleteMany
   */
  export type HistorialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historials to delete
     */
    where?: HistorialWhereInput
    /**
     * Limit how many Historials to delete.
     */
    limit?: number
  }

  /**
   * Historial without action
   */
  export type HistorialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial
     */
    select?: HistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial
     */
    omit?: HistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    password: string | null
    correo: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    password: string | null
    correo: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    password: number
    correo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    password?: true
    correo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    password?: true
    correo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    password?: true
    correo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    password: string
    correo: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    password?: boolean
    correo?: boolean
    Alimentacion?: boolean | Usuario$AlimentacionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    password?: boolean
    correo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    password?: boolean
    correo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    password?: boolean
    correo?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "password" | "correo", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alimentacion?: boolean | Usuario$AlimentacionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Alimentacion: Prisma.$AlimentacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      password: string
      correo: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Alimentacion<T extends Usuario$AlimentacionArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$AlimentacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Alimentacion
   */
  export type Usuario$AlimentacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacion
     */
    select?: AlimentacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alimentacion
     */
    omit?: AlimentacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentacionInclude<ExtArgs> | null
    where?: AlimentacionWhereInput
    orderBy?: AlimentacionOrderByWithRelationInput | AlimentacionOrderByWithRelationInput[]
    cursor?: AlimentacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlimentacionScalarFieldEnum | AlimentacionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
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


  export const AlimentacionScalarFieldEnum: {
    id: 'id',
    id_usuario: 'id_usuario',
    numero_comida: 'numero_comida',
    hora: 'hora',
    cantidad_comida: 'cantidad_comida'
  };

  export type AlimentacionScalarFieldEnum = (typeof AlimentacionScalarFieldEnum)[keyof typeof AlimentacionScalarFieldEnum]


  export const HistorialScalarFieldEnum: {
    id_alimentacion: 'id_alimentacion',
    fecha_alimentacion: 'fecha_alimentacion',
    isCompletado: 'isCompletado',
    id: 'id'
  };

  export type HistorialScalarFieldEnum = (typeof HistorialScalarFieldEnum)[keyof typeof HistorialScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    password: 'password',
    correo: 'correo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AlimentacionWhereInput = {
    AND?: AlimentacionWhereInput | AlimentacionWhereInput[]
    OR?: AlimentacionWhereInput[]
    NOT?: AlimentacionWhereInput | AlimentacionWhereInput[]
    id?: IntFilter<"Alimentacion"> | number
    id_usuario?: IntFilter<"Alimentacion"> | number
    numero_comida?: IntFilter<"Alimentacion"> | number
    hora?: StringFilter<"Alimentacion"> | string
    cantidad_comida?: IntFilter<"Alimentacion"> | number
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Historial?: HistorialListRelationFilter
  }

  export type AlimentacionOrderByWithRelationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    numero_comida?: SortOrder
    hora?: SortOrder
    cantidad_comida?: SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
    Historial?: HistorialOrderByRelationAggregateInput
  }

  export type AlimentacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlimentacionWhereInput | AlimentacionWhereInput[]
    OR?: AlimentacionWhereInput[]
    NOT?: AlimentacionWhereInput | AlimentacionWhereInput[]
    id_usuario?: IntFilter<"Alimentacion"> | number
    numero_comida?: IntFilter<"Alimentacion"> | number
    hora?: StringFilter<"Alimentacion"> | string
    cantidad_comida?: IntFilter<"Alimentacion"> | number
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Historial?: HistorialListRelationFilter
  }, "id">

  export type AlimentacionOrderByWithAggregationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    numero_comida?: SortOrder
    hora?: SortOrder
    cantidad_comida?: SortOrder
    _count?: AlimentacionCountOrderByAggregateInput
    _avg?: AlimentacionAvgOrderByAggregateInput
    _max?: AlimentacionMaxOrderByAggregateInput
    _min?: AlimentacionMinOrderByAggregateInput
    _sum?: AlimentacionSumOrderByAggregateInput
  }

  export type AlimentacionScalarWhereWithAggregatesInput = {
    AND?: AlimentacionScalarWhereWithAggregatesInput | AlimentacionScalarWhereWithAggregatesInput[]
    OR?: AlimentacionScalarWhereWithAggregatesInput[]
    NOT?: AlimentacionScalarWhereWithAggregatesInput | AlimentacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alimentacion"> | number
    id_usuario?: IntWithAggregatesFilter<"Alimentacion"> | number
    numero_comida?: IntWithAggregatesFilter<"Alimentacion"> | number
    hora?: StringWithAggregatesFilter<"Alimentacion"> | string
    cantidad_comida?: IntWithAggregatesFilter<"Alimentacion"> | number
  }

  export type HistorialWhereInput = {
    AND?: HistorialWhereInput | HistorialWhereInput[]
    OR?: HistorialWhereInput[]
    NOT?: HistorialWhereInput | HistorialWhereInput[]
    id_alimentacion?: IntFilter<"Historial"> | number
    fecha_alimentacion?: DateTimeFilter<"Historial"> | Date | string
    isCompletado?: BoolFilter<"Historial"> | boolean
    id?: IntFilter<"Historial"> | number
    Alimentacion?: XOR<AlimentacionScalarRelationFilter, AlimentacionWhereInput>
  }

  export type HistorialOrderByWithRelationInput = {
    id_alimentacion?: SortOrder
    fecha_alimentacion?: SortOrder
    isCompletado?: SortOrder
    id?: SortOrder
    Alimentacion?: AlimentacionOrderByWithRelationInput
  }

  export type HistorialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistorialWhereInput | HistorialWhereInput[]
    OR?: HistorialWhereInput[]
    NOT?: HistorialWhereInput | HistorialWhereInput[]
    id_alimentacion?: IntFilter<"Historial"> | number
    fecha_alimentacion?: DateTimeFilter<"Historial"> | Date | string
    isCompletado?: BoolFilter<"Historial"> | boolean
    Alimentacion?: XOR<AlimentacionScalarRelationFilter, AlimentacionWhereInput>
  }, "id">

  export type HistorialOrderByWithAggregationInput = {
    id_alimentacion?: SortOrder
    fecha_alimentacion?: SortOrder
    isCompletado?: SortOrder
    id?: SortOrder
    _count?: HistorialCountOrderByAggregateInput
    _avg?: HistorialAvgOrderByAggregateInput
    _max?: HistorialMaxOrderByAggregateInput
    _min?: HistorialMinOrderByAggregateInput
    _sum?: HistorialSumOrderByAggregateInput
  }

  export type HistorialScalarWhereWithAggregatesInput = {
    AND?: HistorialScalarWhereWithAggregatesInput | HistorialScalarWhereWithAggregatesInput[]
    OR?: HistorialScalarWhereWithAggregatesInput[]
    NOT?: HistorialScalarWhereWithAggregatesInput | HistorialScalarWhereWithAggregatesInput[]
    id_alimentacion?: IntWithAggregatesFilter<"Historial"> | number
    fecha_alimentacion?: DateTimeWithAggregatesFilter<"Historial"> | Date | string
    isCompletado?: BoolWithAggregatesFilter<"Historial"> | boolean
    id?: IntWithAggregatesFilter<"Historial"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    Alimentacion?: AlimentacionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    correo?: SortOrder
    Alimentacion?: AlimentacionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    Alimentacion?: AlimentacionListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    correo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type AlimentacionCreateInput = {
    numero_comida: number
    hora: string
    cantidad_comida: number
    Usuario: UsuarioCreateNestedOneWithoutAlimentacionInput
    Historial?: HistorialCreateNestedManyWithoutAlimentacionInput
  }

  export type AlimentacionUncheckedCreateInput = {
    id?: number
    id_usuario: number
    numero_comida: number
    hora: string
    cantidad_comida: number
    Historial?: HistorialUncheckedCreateNestedManyWithoutAlimentacionInput
  }

  export type AlimentacionUpdateInput = {
    numero_comida?: IntFieldUpdateOperationsInput | number
    hora?: StringFieldUpdateOperationsInput | string
    cantidad_comida?: IntFieldUpdateOperationsInput | number
    Usuario?: UsuarioUpdateOneRequiredWithoutAlimentacionNestedInput
    Historial?: HistorialUpdateManyWithoutAlimentacionNestedInput
  }

  export type AlimentacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    numero_comida?: IntFieldUpdateOperationsInput | number
    hora?: StringFieldUpdateOperationsInput | string
    cantidad_comida?: IntFieldUpdateOperationsInput | number
    Historial?: HistorialUncheckedUpdateManyWithoutAlimentacionNestedInput
  }

  export type AlimentacionCreateManyInput = {
    id?: number
    id_usuario: number
    numero_comida: number
    hora: string
    cantidad_comida: number
  }

  export type AlimentacionUpdateManyMutationInput = {
    numero_comida?: IntFieldUpdateOperationsInput | number
    hora?: StringFieldUpdateOperationsInput | string
    cantidad_comida?: IntFieldUpdateOperationsInput | number
  }

  export type AlimentacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    numero_comida?: IntFieldUpdateOperationsInput | number
    hora?: StringFieldUpdateOperationsInput | string
    cantidad_comida?: IntFieldUpdateOperationsInput | number
  }

  export type HistorialCreateInput = {
    fecha_alimentacion: Date | string
    isCompletado: boolean
    Alimentacion: AlimentacionCreateNestedOneWithoutHistorialInput
  }

  export type HistorialUncheckedCreateInput = {
    id_alimentacion: number
    fecha_alimentacion: Date | string
    isCompletado: boolean
    id?: number
  }

  export type HistorialUpdateInput = {
    fecha_alimentacion?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompletado?: BoolFieldUpdateOperationsInput | boolean
    Alimentacion?: AlimentacionUpdateOneRequiredWithoutHistorialNestedInput
  }

  export type HistorialUncheckedUpdateInput = {
    id_alimentacion?: IntFieldUpdateOperationsInput | number
    fecha_alimentacion?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompletado?: BoolFieldUpdateOperationsInput | boolean
    id?: IntFieldUpdateOperationsInput | number
  }

  export type HistorialCreateManyInput = {
    id_alimentacion: number
    fecha_alimentacion: Date | string
    isCompletado: boolean
    id?: number
  }

  export type HistorialUpdateManyMutationInput = {
    fecha_alimentacion?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompletado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistorialUncheckedUpdateManyInput = {
    id_alimentacion?: IntFieldUpdateOperationsInput | number
    fecha_alimentacion?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompletado?: BoolFieldUpdateOperationsInput | boolean
    id?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    password: string
    correo: string
    Alimentacion?: AlimentacionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    password: string
    correo: string
    Alimentacion?: AlimentacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    Alimentacion?: AlimentacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    Alimentacion?: AlimentacionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    password: string
    correo: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type HistorialListRelationFilter = {
    every?: HistorialWhereInput
    some?: HistorialWhereInput
    none?: HistorialWhereInput
  }

  export type HistorialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlimentacionCountOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    numero_comida?: SortOrder
    hora?: SortOrder
    cantidad_comida?: SortOrder
  }

  export type AlimentacionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    numero_comida?: SortOrder
    cantidad_comida?: SortOrder
  }

  export type AlimentacionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    numero_comida?: SortOrder
    hora?: SortOrder
    cantidad_comida?: SortOrder
  }

  export type AlimentacionMinOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    numero_comida?: SortOrder
    hora?: SortOrder
    cantidad_comida?: SortOrder
  }

  export type AlimentacionSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    numero_comida?: SortOrder
    cantidad_comida?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AlimentacionScalarRelationFilter = {
    is?: AlimentacionWhereInput
    isNot?: AlimentacionWhereInput
  }

  export type HistorialCountOrderByAggregateInput = {
    id_alimentacion?: SortOrder
    fecha_alimentacion?: SortOrder
    isCompletado?: SortOrder
    id?: SortOrder
  }

  export type HistorialAvgOrderByAggregateInput = {
    id_alimentacion?: SortOrder
    id?: SortOrder
  }

  export type HistorialMaxOrderByAggregateInput = {
    id_alimentacion?: SortOrder
    fecha_alimentacion?: SortOrder
    isCompletado?: SortOrder
    id?: SortOrder
  }

  export type HistorialMinOrderByAggregateInput = {
    id_alimentacion?: SortOrder
    fecha_alimentacion?: SortOrder
    isCompletado?: SortOrder
    id?: SortOrder
  }

  export type HistorialSumOrderByAggregateInput = {
    id_alimentacion?: SortOrder
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AlimentacionListRelationFilter = {
    every?: AlimentacionWhereInput
    some?: AlimentacionWhereInput
    none?: AlimentacionWhereInput
  }

  export type AlimentacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    correo?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    correo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    correo?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioCreateNestedOneWithoutAlimentacionInput = {
    create?: XOR<UsuarioCreateWithoutAlimentacionInput, UsuarioUncheckedCreateWithoutAlimentacionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlimentacionInput
    connect?: UsuarioWhereUniqueInput
  }

  export type HistorialCreateNestedManyWithoutAlimentacionInput = {
    create?: XOR<HistorialCreateWithoutAlimentacionInput, HistorialUncheckedCreateWithoutAlimentacionInput> | HistorialCreateWithoutAlimentacionInput[] | HistorialUncheckedCreateWithoutAlimentacionInput[]
    connectOrCreate?: HistorialCreateOrConnectWithoutAlimentacionInput | HistorialCreateOrConnectWithoutAlimentacionInput[]
    createMany?: HistorialCreateManyAlimentacionInputEnvelope
    connect?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
  }

  export type HistorialUncheckedCreateNestedManyWithoutAlimentacionInput = {
    create?: XOR<HistorialCreateWithoutAlimentacionInput, HistorialUncheckedCreateWithoutAlimentacionInput> | HistorialCreateWithoutAlimentacionInput[] | HistorialUncheckedCreateWithoutAlimentacionInput[]
    connectOrCreate?: HistorialCreateOrConnectWithoutAlimentacionInput | HistorialCreateOrConnectWithoutAlimentacionInput[]
    createMany?: HistorialCreateManyAlimentacionInputEnvelope
    connect?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsuarioUpdateOneRequiredWithoutAlimentacionNestedInput = {
    create?: XOR<UsuarioCreateWithoutAlimentacionInput, UsuarioUncheckedCreateWithoutAlimentacionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlimentacionInput
    upsert?: UsuarioUpsertWithoutAlimentacionInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAlimentacionInput, UsuarioUpdateWithoutAlimentacionInput>, UsuarioUncheckedUpdateWithoutAlimentacionInput>
  }

  export type HistorialUpdateManyWithoutAlimentacionNestedInput = {
    create?: XOR<HistorialCreateWithoutAlimentacionInput, HistorialUncheckedCreateWithoutAlimentacionInput> | HistorialCreateWithoutAlimentacionInput[] | HistorialUncheckedCreateWithoutAlimentacionInput[]
    connectOrCreate?: HistorialCreateOrConnectWithoutAlimentacionInput | HistorialCreateOrConnectWithoutAlimentacionInput[]
    upsert?: HistorialUpsertWithWhereUniqueWithoutAlimentacionInput | HistorialUpsertWithWhereUniqueWithoutAlimentacionInput[]
    createMany?: HistorialCreateManyAlimentacionInputEnvelope
    set?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
    disconnect?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
    delete?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
    connect?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
    update?: HistorialUpdateWithWhereUniqueWithoutAlimentacionInput | HistorialUpdateWithWhereUniqueWithoutAlimentacionInput[]
    updateMany?: HistorialUpdateManyWithWhereWithoutAlimentacionInput | HistorialUpdateManyWithWhereWithoutAlimentacionInput[]
    deleteMany?: HistorialScalarWhereInput | HistorialScalarWhereInput[]
  }

  export type HistorialUncheckedUpdateManyWithoutAlimentacionNestedInput = {
    create?: XOR<HistorialCreateWithoutAlimentacionInput, HistorialUncheckedCreateWithoutAlimentacionInput> | HistorialCreateWithoutAlimentacionInput[] | HistorialUncheckedCreateWithoutAlimentacionInput[]
    connectOrCreate?: HistorialCreateOrConnectWithoutAlimentacionInput | HistorialCreateOrConnectWithoutAlimentacionInput[]
    upsert?: HistorialUpsertWithWhereUniqueWithoutAlimentacionInput | HistorialUpsertWithWhereUniqueWithoutAlimentacionInput[]
    createMany?: HistorialCreateManyAlimentacionInputEnvelope
    set?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
    disconnect?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
    delete?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
    connect?: HistorialWhereUniqueInput | HistorialWhereUniqueInput[]
    update?: HistorialUpdateWithWhereUniqueWithoutAlimentacionInput | HistorialUpdateWithWhereUniqueWithoutAlimentacionInput[]
    updateMany?: HistorialUpdateManyWithWhereWithoutAlimentacionInput | HistorialUpdateManyWithWhereWithoutAlimentacionInput[]
    deleteMany?: HistorialScalarWhereInput | HistorialScalarWhereInput[]
  }

  export type AlimentacionCreateNestedOneWithoutHistorialInput = {
    create?: XOR<AlimentacionCreateWithoutHistorialInput, AlimentacionUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: AlimentacionCreateOrConnectWithoutHistorialInput
    connect?: AlimentacionWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AlimentacionUpdateOneRequiredWithoutHistorialNestedInput = {
    create?: XOR<AlimentacionCreateWithoutHistorialInput, AlimentacionUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: AlimentacionCreateOrConnectWithoutHistorialInput
    upsert?: AlimentacionUpsertWithoutHistorialInput
    connect?: AlimentacionWhereUniqueInput
    update?: XOR<XOR<AlimentacionUpdateToOneWithWhereWithoutHistorialInput, AlimentacionUpdateWithoutHistorialInput>, AlimentacionUncheckedUpdateWithoutHistorialInput>
  }

  export type AlimentacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AlimentacionCreateWithoutUsuarioInput, AlimentacionUncheckedCreateWithoutUsuarioInput> | AlimentacionCreateWithoutUsuarioInput[] | AlimentacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AlimentacionCreateOrConnectWithoutUsuarioInput | AlimentacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: AlimentacionCreateManyUsuarioInputEnvelope
    connect?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
  }

  export type AlimentacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AlimentacionCreateWithoutUsuarioInput, AlimentacionUncheckedCreateWithoutUsuarioInput> | AlimentacionCreateWithoutUsuarioInput[] | AlimentacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AlimentacionCreateOrConnectWithoutUsuarioInput | AlimentacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: AlimentacionCreateManyUsuarioInputEnvelope
    connect?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
  }

  export type AlimentacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AlimentacionCreateWithoutUsuarioInput, AlimentacionUncheckedCreateWithoutUsuarioInput> | AlimentacionCreateWithoutUsuarioInput[] | AlimentacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AlimentacionCreateOrConnectWithoutUsuarioInput | AlimentacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: AlimentacionUpsertWithWhereUniqueWithoutUsuarioInput | AlimentacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AlimentacionCreateManyUsuarioInputEnvelope
    set?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
    disconnect?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
    delete?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
    connect?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
    update?: AlimentacionUpdateWithWhereUniqueWithoutUsuarioInput | AlimentacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AlimentacionUpdateManyWithWhereWithoutUsuarioInput | AlimentacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AlimentacionScalarWhereInput | AlimentacionScalarWhereInput[]
  }

  export type AlimentacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AlimentacionCreateWithoutUsuarioInput, AlimentacionUncheckedCreateWithoutUsuarioInput> | AlimentacionCreateWithoutUsuarioInput[] | AlimentacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AlimentacionCreateOrConnectWithoutUsuarioInput | AlimentacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: AlimentacionUpsertWithWhereUniqueWithoutUsuarioInput | AlimentacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AlimentacionCreateManyUsuarioInputEnvelope
    set?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
    disconnect?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
    delete?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
    connect?: AlimentacionWhereUniqueInput | AlimentacionWhereUniqueInput[]
    update?: AlimentacionUpdateWithWhereUniqueWithoutUsuarioInput | AlimentacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AlimentacionUpdateManyWithWhereWithoutUsuarioInput | AlimentacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AlimentacionScalarWhereInput | AlimentacionScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutAlimentacionInput = {
    nombre: string
    password: string
    correo: string
  }

  export type UsuarioUncheckedCreateWithoutAlimentacionInput = {
    id?: number
    nombre: string
    password: string
    correo: string
  }

  export type UsuarioCreateOrConnectWithoutAlimentacionInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAlimentacionInput, UsuarioUncheckedCreateWithoutAlimentacionInput>
  }

  export type HistorialCreateWithoutAlimentacionInput = {
    fecha_alimentacion: Date | string
    isCompletado: boolean
  }

  export type HistorialUncheckedCreateWithoutAlimentacionInput = {
    fecha_alimentacion: Date | string
    isCompletado: boolean
    id?: number
  }

  export type HistorialCreateOrConnectWithoutAlimentacionInput = {
    where: HistorialWhereUniqueInput
    create: XOR<HistorialCreateWithoutAlimentacionInput, HistorialUncheckedCreateWithoutAlimentacionInput>
  }

  export type HistorialCreateManyAlimentacionInputEnvelope = {
    data: HistorialCreateManyAlimentacionInput | HistorialCreateManyAlimentacionInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutAlimentacionInput = {
    update: XOR<UsuarioUpdateWithoutAlimentacionInput, UsuarioUncheckedUpdateWithoutAlimentacionInput>
    create: XOR<UsuarioCreateWithoutAlimentacionInput, UsuarioUncheckedCreateWithoutAlimentacionInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAlimentacionInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAlimentacionInput, UsuarioUncheckedUpdateWithoutAlimentacionInput>
  }

  export type UsuarioUpdateWithoutAlimentacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutAlimentacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type HistorialUpsertWithWhereUniqueWithoutAlimentacionInput = {
    where: HistorialWhereUniqueInput
    update: XOR<HistorialUpdateWithoutAlimentacionInput, HistorialUncheckedUpdateWithoutAlimentacionInput>
    create: XOR<HistorialCreateWithoutAlimentacionInput, HistorialUncheckedCreateWithoutAlimentacionInput>
  }

  export type HistorialUpdateWithWhereUniqueWithoutAlimentacionInput = {
    where: HistorialWhereUniqueInput
    data: XOR<HistorialUpdateWithoutAlimentacionInput, HistorialUncheckedUpdateWithoutAlimentacionInput>
  }

  export type HistorialUpdateManyWithWhereWithoutAlimentacionInput = {
    where: HistorialScalarWhereInput
    data: XOR<HistorialUpdateManyMutationInput, HistorialUncheckedUpdateManyWithoutAlimentacionInput>
  }

  export type HistorialScalarWhereInput = {
    AND?: HistorialScalarWhereInput | HistorialScalarWhereInput[]
    OR?: HistorialScalarWhereInput[]
    NOT?: HistorialScalarWhereInput | HistorialScalarWhereInput[]
    id_alimentacion?: IntFilter<"Historial"> | number
    fecha_alimentacion?: DateTimeFilter<"Historial"> | Date | string
    isCompletado?: BoolFilter<"Historial"> | boolean
    id?: IntFilter<"Historial"> | number
  }

  export type AlimentacionCreateWithoutHistorialInput = {
    numero_comida: number
    hora: string
    cantidad_comida: number
    Usuario: UsuarioCreateNestedOneWithoutAlimentacionInput
  }

  export type AlimentacionUncheckedCreateWithoutHistorialInput = {
    id?: number
    id_usuario: number
    numero_comida: number
    hora: string
    cantidad_comida: number
  }

  export type AlimentacionCreateOrConnectWithoutHistorialInput = {
    where: AlimentacionWhereUniqueInput
    create: XOR<AlimentacionCreateWithoutHistorialInput, AlimentacionUncheckedCreateWithoutHistorialInput>
  }

  export type AlimentacionUpsertWithoutHistorialInput = {
    update: XOR<AlimentacionUpdateWithoutHistorialInput, AlimentacionUncheckedUpdateWithoutHistorialInput>
    create: XOR<AlimentacionCreateWithoutHistorialInput, AlimentacionUncheckedCreateWithoutHistorialInput>
    where?: AlimentacionWhereInput
  }

  export type AlimentacionUpdateToOneWithWhereWithoutHistorialInput = {
    where?: AlimentacionWhereInput
    data: XOR<AlimentacionUpdateWithoutHistorialInput, AlimentacionUncheckedUpdateWithoutHistorialInput>
  }

  export type AlimentacionUpdateWithoutHistorialInput = {
    numero_comida?: IntFieldUpdateOperationsInput | number
    hora?: StringFieldUpdateOperationsInput | string
    cantidad_comida?: IntFieldUpdateOperationsInput | number
    Usuario?: UsuarioUpdateOneRequiredWithoutAlimentacionNestedInput
  }

  export type AlimentacionUncheckedUpdateWithoutHistorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    numero_comida?: IntFieldUpdateOperationsInput | number
    hora?: StringFieldUpdateOperationsInput | string
    cantidad_comida?: IntFieldUpdateOperationsInput | number
  }

  export type AlimentacionCreateWithoutUsuarioInput = {
    numero_comida: number
    hora: string
    cantidad_comida: number
    Historial?: HistorialCreateNestedManyWithoutAlimentacionInput
  }

  export type AlimentacionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    numero_comida: number
    hora: string
    cantidad_comida: number
    Historial?: HistorialUncheckedCreateNestedManyWithoutAlimentacionInput
  }

  export type AlimentacionCreateOrConnectWithoutUsuarioInput = {
    where: AlimentacionWhereUniqueInput
    create: XOR<AlimentacionCreateWithoutUsuarioInput, AlimentacionUncheckedCreateWithoutUsuarioInput>
  }

  export type AlimentacionCreateManyUsuarioInputEnvelope = {
    data: AlimentacionCreateManyUsuarioInput | AlimentacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AlimentacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AlimentacionWhereUniqueInput
    update: XOR<AlimentacionUpdateWithoutUsuarioInput, AlimentacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AlimentacionCreateWithoutUsuarioInput, AlimentacionUncheckedCreateWithoutUsuarioInput>
  }

  export type AlimentacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AlimentacionWhereUniqueInput
    data: XOR<AlimentacionUpdateWithoutUsuarioInput, AlimentacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type AlimentacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: AlimentacionScalarWhereInput
    data: XOR<AlimentacionUpdateManyMutationInput, AlimentacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AlimentacionScalarWhereInput = {
    AND?: AlimentacionScalarWhereInput | AlimentacionScalarWhereInput[]
    OR?: AlimentacionScalarWhereInput[]
    NOT?: AlimentacionScalarWhereInput | AlimentacionScalarWhereInput[]
    id?: IntFilter<"Alimentacion"> | number
    id_usuario?: IntFilter<"Alimentacion"> | number
    numero_comida?: IntFilter<"Alimentacion"> | number
    hora?: StringFilter<"Alimentacion"> | string
    cantidad_comida?: IntFilter<"Alimentacion"> | number
  }

  export type HistorialCreateManyAlimentacionInput = {
    fecha_alimentacion: Date | string
    isCompletado: boolean
    id?: number
  }

  export type HistorialUpdateWithoutAlimentacionInput = {
    fecha_alimentacion?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompletado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistorialUncheckedUpdateWithoutAlimentacionInput = {
    fecha_alimentacion?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompletado?: BoolFieldUpdateOperationsInput | boolean
    id?: IntFieldUpdateOperationsInput | number
  }

  export type HistorialUncheckedUpdateManyWithoutAlimentacionInput = {
    fecha_alimentacion?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompletado?: BoolFieldUpdateOperationsInput | boolean
    id?: IntFieldUpdateOperationsInput | number
  }

  export type AlimentacionCreateManyUsuarioInput = {
    id?: number
    numero_comida: number
    hora: string
    cantidad_comida: number
  }

  export type AlimentacionUpdateWithoutUsuarioInput = {
    numero_comida?: IntFieldUpdateOperationsInput | number
    hora?: StringFieldUpdateOperationsInput | string
    cantidad_comida?: IntFieldUpdateOperationsInput | number
    Historial?: HistorialUpdateManyWithoutAlimentacionNestedInput
  }

  export type AlimentacionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_comida?: IntFieldUpdateOperationsInput | number
    hora?: StringFieldUpdateOperationsInput | string
    cantidad_comida?: IntFieldUpdateOperationsInput | number
    Historial?: HistorialUncheckedUpdateManyWithoutAlimentacionNestedInput
  }

  export type AlimentacionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_comida?: IntFieldUpdateOperationsInput | number
    hora?: StringFieldUpdateOperationsInput | string
    cantidad_comida?: IntFieldUpdateOperationsInput | number
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