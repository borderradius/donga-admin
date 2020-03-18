export const L = {}

export const add = (a, b) => a + b

export const curry = (f) => (a, ..._) =>
  // eslint-disable-next-line no-shadow
  _.length ? f(a, ..._) : (..._) => f(a, ..._)

// 값을 깨져 결과물을 만들어야하기 때문에 연산의 시작을 알리는 함수임.
export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    // eslint-disable-next-line no-param-reassign
    iter = acc[Symbol.iterator]()
    // eslint-disable-next-line no-param-reassign
    acc = iter.next().value
  }
  for (const a of iter) {
    // eslint-disable-next-line no-param-reassign
    acc = f(acc, a)
  }
  return acc
})

export const go = (...args) => reduce((a, f) => f(a), args)

export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)

export const take = curry((l, iter) => {
  const res = []
  for (const a of iter) {
    res.push(a)
    if (l === res.length) return res
  }
  return res
})

export const takeAll = take(Infinity)

export const join = curry((sep = ',', iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter)
)

L.range = function*(l) {
  let i = -1
  while (++i < l) yield i
}

L.map = curry(function*(f, iter) {
  for (const a of iter) yield f(a)
})

L.filter = curry(function*(f, iter) {
  for (const a of iter) if (f(a)) yield a
})

export const find = curry((f, iter) =>
  go(iter, L.filter(f), take(1), ([a]) => a)
)

export const map = curry(pipe(L.map, takeAll))

export const filter = curry(pipe(L.filter, takeAll))

const isIterable = (a) => a && a[Symbol.iterator]
L.flatten = function*(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* a
    // for (const b of a) {
    //   yield b;
    // }
    // yield* a 는 for (const a of iter) yield val; 과 같음.
    else yield a
  }
}

export const flatten = pipe(L.flatten, takeAll)

L.deepFlat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a) && typeof a !== 'string') yield* f(a)
    else yield a
  }
}

L.flatMap = curry(pipe(L.map, L.flatten))

export const flatMap = curry(pipe(L.map, flatten))

// export { filter, map, reduce, curry, go, pipe, join, take, L, add, find };
