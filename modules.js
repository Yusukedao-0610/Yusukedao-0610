 !(function (t) {
    if ("object" == typeof exports) module.exports = t();
    else if ("function" == typeof define && define.amd) define(t);
    else {
      var e;
      "undefined" != typeof window
        ? (e = window)
        : "undefined" != typeof global
        ? (e = global)
        : "undefined" != typeof self && (e = self),
        (e.PF = t());
    }
  })(function () {
    return (function t(e, i, n) {
      function o(a, s) {
        if (!i[a]) {
          if (!e[a]) {
            var l = "function" == typeof require && require;
            if (!s && l) return l(a, !0);
            if (r) return r(a, !0);
            throw new Error("Cannot find module '" + a + "'");
          }
          var h = (i[a] = { exports: {} });
          e[a][0].call(
            h.exports,
            function (t) {
              var i = e[a][1][t];
              return o(i || t);
            },
            h,
            h.exports,
            t,
            e,
            i,
            n
          );
        }
        return i[a].exports;
      }
      for (
        var r = "function" == typeof require && require, a = 0;
        a < n.length;
        a++
      )
        o(n[a]);
      return o;
    })(
      {
        1: [
          function (t, e, i) {
            e.exports = t("./lib/heap");
          },
          { "./lib/heap": 2 },
        ],
        2: [
          function (t, e, i) {
            (function () {
              var t, i, n, o, r, a, s, l, h, u, p, c, f, d, g;
              (n = Math.floor),
                (u = Math.min),
                (i = function (t, e) {
                  return e > t ? -1 : t > e ? 1 : 0;
                }),
                (h = function (t, e, o, r, a) {
                  var s;
                  if ((null == o && (o = 0), null == a && (a = i), 0 > o))
                    throw new Error("lo must be non-negative");
                  for (null == r && (r = t.length); r > o; )
                    a(e, t[(s = n((o + r) / 2))]) < 0 ? (r = s) : (o = s + 1);
                  return [].splice.apply(t, [o, o - o].concat(e)), e;
                }),
                (a = function (t, e, n) {
                  return (
                    null == n && (n = i), t.push(e), d(t, 0, t.length - 1, n)
                  );
                }),
                (r = function (t, e) {
                  var n, o;
                  return (
                    null == e && (e = i),
                    (n = t.pop()),
                    t.length ? ((o = t[0]), (t[0] = n), g(t, 0, e)) : (o = n),
                    o
                  );
                }),
                (l = function (t, e, n) {
                  var o;
                  return (
                    null == n && (n = i), (o = t[0]), (t[0] = e), g(t, 0, n), o
                  );
                }),
                (s = function (t, e, n) {
                  var o;
                  return (
                    null == n && (n = i),
                    t.length &&
                      n(t[0], e) < 0 &&
                      ((e = (o = [t[0], e])[0]), (t[0] = o[1]), g(t, 0, n)),
                    e
                  );
                }),
                (o = function (t, e) {
                  var o, r, a, s, l, h;
                  for (
                    null == e && (e = i),
                      s = function () {
                        h = [];
                        for (
                          var e = 0, i = n(t.length / 2);
                          i >= 0 ? i > e : e > i;
                          i >= 0 ? e++ : e--
                        )
                          h.push(e);
                        return h;
                      }
                        .apply(this)
                        .reverse(),
                      l = [],
                      r = 0,
                      a = s.length;
                    a > r;
                    r++
                  )
                    (o = s[r]), l.push(g(t, o, e));
                  return l;
                }),
                (f = function (t, e, n) {
                  var o;
                  return (
                    null == n && (n = i),
                    -1 !== (o = t.indexOf(e))
                      ? (d(t, 0, o, n), g(t, o, n))
                      : void 0
                  );
                }),
                (p = function (t, e, n) {
                  var r, a, l, h, u;
                  if ((null == n && (n = i), !(a = t.slice(0, e)).length))
                    return a;
                  for (o(a, n), l = 0, h = (u = t.slice(e)).length; h > l; l++)
                    (r = u[l]), s(a, r, n);
                  return a.sort(n).reverse();
                }),
                (c = function (t, e, n) {
                  var a, s, l, p, c, f, d, g, b;
                  if ((null == n && (n = i), 10 * e <= t.length)) {
                    if (!(l = t.slice(0, e).sort(n)).length) return l;
                    for (
                      s = l[l.length - 1], p = 0, f = (d = t.slice(e)).length;
                      f > p;
                      p++
                    )
                      n((a = d[p]), s) < 0 &&
                        (h(l, a, 0, null, n), l.pop(), (s = l[l.length - 1]));
                    return l;
                  }
                  for (
                    o(t, n), b = [], c = 0, g = u(e, t.length);
                    g >= 0 ? g > c : c > g;
                    g >= 0 ? ++c : --c
                  )
                    b.push(r(t, n));
                  return b;
                }),
                (d = function (t, e, n, o) {
                  var r, a, s;
                  for (
                    null == o && (o = i), r = t[n];
                    n > e && o(r, (a = t[(s = (n - 1) >> 1)])) < 0;

                  )
                    (t[n] = a), (n = s);
                  return (t[n] = r);
                }),
                (g = function (t, e, n) {
                  var o, r, a, s, l;
                  for (
                    null == n && (n = i),
                      r = t.length,
                      l = e,
                      a = t[e],
                      o = 2 * e + 1;
                    r > o;

                  )
                    r > (s = o + 1) && !(n(t[o], t[s]) < 0) && (o = s),
                      (t[e] = t[o]),
                      (o = 2 * (e = o) + 1);
                  return (t[e] = a), d(t, l, e, n);
                }),
                (t = (function () {
                  function t(t) {
                    (this.cmp = null != t ? t : i), (this.nodes = []);
                  }
                  return (
                    (t.push = a),
                    (t.pop = r),
                    (t.replace = l),
                    (t.pushpop = s),
                    (t.heapify = o),
                    (t.updateItem = f),
                    (t.nlargest = p),
                    (t.nsmallest = c),
                    (t.prototype.push = function (t) {
                      return a(this.nodes, t, this.cmp);
                    }),
                    (t.prototype.pop = function () {
                      return r(this.nodes, this.cmp);
                    }),
                    (t.prototype.peek = function () {
                      return this.nodes[0];
                    }),
                    (t.prototype.contains = function (t) {
                      return -1 !== this.nodes.indexOf(t);
                    }),
                    (t.prototype.replace = function (t) {
                      return l(this.nodes, t, this.cmp);
                    }),
                    (t.prototype.pushpop = function (t) {
                      return s(this.nodes, t, this.cmp);
                    }),
                    (t.prototype.heapify = function () {
                      return o(this.nodes, this.cmp);
                    }),
                    (t.prototype.updateItem = function (t) {
                      return f(this.nodes, t, this.cmp);
                    }),
                    (t.prototype.clear = function () {
                      return (this.nodes = []);
                    }),
                    (t.prototype.empty = function () {
                      return 0 === this.nodes.length;
                    }),
                    (t.prototype.size = function () {
                      return this.nodes.length;
                    }),
                    (t.prototype.clone = function () {
                      var e;
                      return ((e = new t()).nodes = this.nodes.slice(0)), e;
                    }),
                    (t.prototype.toArray = function () {
                      return this.nodes.slice(0);
                    }),
                    (t.prototype.insert = t.prototype.push),
                    (t.prototype.top = t.prototype.peek),
                    (t.prototype.front = t.prototype.peek),
                    (t.prototype.has = t.prototype.contains),
                    (t.prototype.copy = t.prototype.clone),
                    t
                  );
                })()),
                (null != e ? e.exports : void 0)
                  ? (e.exports = t)
                  : (window.Heap = t);
            }).call(this);
          },
          {},
        ],
        3: [
          function (t, e, i) {
            e.exports = {
              Always: 1,
              Never: 2,
              IfAtMostOneObstacle: 3,
              OnlyWhenNoObstacles: 4,
            };
          },
          {},
        ],
        4: [
          function (t, e, i) {
            function n(t, e, i) {
              var n;
              "object" != typeof t
                ? (n = t)
                : ((e = t.length), (n = t[0].length), (i = t)),
                (this.width = n),
                (this.height = e),
                (this.nodes = this._buildNodes(n, e, i));
            }
            var o = t("./Node"),
              r = t("./DiagonalMovement");
            (n.prototype._buildNodes = function (t, e, i) {
              var n,
                r,
                a = new Array(e);
              for (n = 0; e > n; ++n)
                for (a[n] = new Array(t), r = 0; t > r; ++r)
                  a[n][r] = new o(r, n);
              if (void 0 === i) return a;
              if (i.length !== e || i[0].length !== t)
                throw new Error("Matrix size does not fit");
              for (n = 0; e > n; ++n)
                for (r = 0; t > r; ++r) i[n][r] && (a[n][r].walkable = !1);
              return a;
            }),
              (n.prototype.getNodeAt = function (t, e) {
                return this.nodes[e][t];
              }),
              (n.prototype.isWalkableAt = function (t, e) {
                return this.isInside(t, e) && this.nodes[e][t].walkable;
              }),
              (n.prototype.isInside = function (t, e) {
                return t >= 0 && t < this.width && e >= 0 && e < this.height;
              }),
              (n.prototype.setWalkableAt = function (t, e, i) {
                try {
                  this.nodes[e][t].walkable = i;
                } catch (e) {}
              }),
              (n.prototype.getNeighbors = function (t, e) {
                var i = t.x,
                  n = t.y,
                  o = [],
                  a = !1,
                  s = !1,
                  l = !1,
                  h = !1,
                  u = !1,
                  p = !1,
                  c = !1,
                  f = !1,
                  d = this.nodes;
                if (
                  (this.isWalkableAt(i, n - 1) &&
                    (o.push(d[n - 1][i]), (a = !0)),
                  this.isWalkableAt(i + 1, n) &&
                    (o.push(d[n][i + 1]), (l = !0)),
                  this.isWalkableAt(i, n + 1) &&
                    (o.push(d[n + 1][i]), (u = !0)),
                  this.isWalkableAt(i - 1, n) &&
                    (o.push(d[n][i - 1]), (c = !0)),
                  e === r.Never)
                )
                  return o;
                if (e === r.OnlyWhenNoObstacles)
                  (s = c && a), (h = a && l), (p = l && u), (f = u && c);
                else if (e === r.IfAtMostOneObstacle)
                  (s = c || a), (h = a || l), (p = l || u), (f = u || c);
                else {
                  if (e !== r.Always)
                    throw new Error("Incorrect value of diagonalMovement");
                  (s = !0), (h = !0), (p = !0), (f = !0);
                }
                return (
                  s &&
                    this.isWalkableAt(i - 1, n - 1) &&
                    o.push(d[n - 1][i - 1]),
                  h &&
                    this.isWalkableAt(i + 1, n - 1) &&
                    o.push(d[n - 1][i + 1]),
                  p &&
                    this.isWalkableAt(i + 1, n + 1) &&
                    o.push(d[n + 1][i + 1]),
                  f &&
                    this.isWalkableAt(i - 1, n + 1) &&
                    o.push(d[n + 1][i - 1]),
                  o
                );
              }),
              (n.prototype.clone = function () {
                var t,
                  e,
                  i = this.width,
                  r = this.height,
                  a = this.nodes,
                  s = new n(i, r),
                  l = new Array(r);
                for (t = 0; r > t; ++t)
                  for (l[t] = new Array(i), e = 0; i > e; ++e)
                    l[t][e] = new o(e, t, a[t][e].walkable);
                return (s.nodes = l), s;
              }),
              (e.exports = n);
          },
          { "./DiagonalMovement": 3, "./Node": 6 },
        ],
        5: [
          function (t, e, i) {
            e.exports = {
              manhattan: function (t, e) {
                return t + e;
              },
              euclidean: function (t, e) {
                return Math.sqrt(t * t + e * e);
              },
              octile: function (t, e) {
                var i = Math.SQRT2 - 1;
                return e > t ? i * t + e : i * e + t;
              },
              chebyshev: function (t, e) {
                return Math.max(t, e);
              },
            };
          },
          {},
        ],
        6: [
          function (t, e, i) {
            e.exports = function (t, e, i) {
              (this.x = t), (this.y = e), (this.walkable = void 0 === i || i);
            };
          },
          {},
        ],
        7: [
          function (t, e, i) {
            function n(t) {
              for (var e = [[t.x, t.y]]; t.parent; )
                (t = t.parent), e.push([t.x, t.y]);
              return e.reverse();
            }
            function o(t, e, i, n) {
              var o,
                r,
                a,
                s,
                l,
                h,
                u = Math.abs,
                p = [];
              for (
                o = i > t ? 1 : -1,
                  r = n > e ? 1 : -1,
                  l = (a = u(i - t)) - (s = u(n - e));
                p.push([t, e]), t !== i || e !== n;

              )
                (h = 2 * l) > -s && ((l -= s), (t += o)),
                  a > h && ((l += a), (e += r));
              return p;
            }
            (i.backtrace = n),
              (i.biBacktrace = function (t, e) {
                var i = n(t),
                  o = n(e);
                return i.concat(o.reverse());
              }),
              (i.pathLength = function (t) {
                var e,
                  i,
                  n,
                  o,
                  r,
                  a = 0;
                for (e = 1; e < t.length; ++e)
                  (i = t[e - 1]),
                    (n = t[e]),
                    (o = i[0] - n[0]),
                    (r = i[1] - n[1]),
                    (a += Math.sqrt(o * o + r * r));
                return a;
              }),
              (i.interpolate = o),
              (i.expandPath = function (t) {
                var e,
                  i,
                  n,
                  r,
                  a,
                  s,
                  l = [],
                  h = t.length;
                if (2 > h) return l;
                for (a = 0; h - 1 > a; ++a)
                  for (
                    e = t[a],
                      i = t[a + 1],
                      r = (n = o(e[0], e[1], i[0], i[1])).length,
                      s = 0;
                    r - 1 > s;
                    ++s
                  )
                    l.push(n[s]);
                return l.push(t[h - 1]), l;
              }),
              (i.smoothenPath = function (t, e) {
                var i,
                  n,
                  r,
                  a,
                  s,
                  l,
                  h,
                  u,
                  p,
                  c = e.length,
                  f = e[0][0],
                  d = e[0][1],
                  g = e[c - 1][0],
                  b = e[c - 1][1];
                for (r = [[(i = f), (n = d)]], a = 2; c > a; ++a) {
                  for (
                    h = o(i, n, (l = e[a])[0], l[1]), p = !1, s = 1;
                    s < h.length;
                    ++s
                  )
                    if (((u = h[s]), !t.isWalkableAt(u[0], u[1]))) {
                      p = !0;
                      break;
                    }
                  p &&
                    ((lastValidCoord = e[a - 1]),
                    r.push(lastValidCoord),
                    (i = lastValidCoord[0]),
                    (n = lastValidCoord[1]));
                }
                return r.push([g, b]), r;
              }),
              (i.compressPath = function (t) {
                if (t.length < 3) return t;
                var e,
                  i,
                  n,
                  o,
                  r,
                  a,
                  s = [],
                  l = t[0][0],
                  h = t[0][1],
                  u = t[1][0],
                  p = t[1][1],
                  c = u - l,
                  f = p - h;
                for (
                  c /= r = Math.sqrt(c * c + f * f),
                    f /= r,
                    s.push([l, h]),
                    a = 2;
                  a < t.length;
                  a++
                )
                  (e = u),
                    (i = p),
                    (n = c),
                    (o = f),
                    (c = (u = t[a][0]) - e),
                    (f = (p = t[a][1]) - i),
                    (f /= r = Math.sqrt(c * c + f * f)),
                    ((c /= r) === n && f === o) || s.push([e, i]);
                return s.push([u, p]), s;
              });
          },
          {},
        ],
        8: [
          function (t, e, i) {
            e.exports = {
              Heap: t("heap"),
              Node: t("./core/Node"),
              Grid: t("./core/Grid"),
              Util: t("./core/Util"),
              DiagonalMovement: t("./core/DiagonalMovement"),
              Heuristic: t("./core/Heuristic"),
              AStarFinder: t("./finders/AStarFinder"),
              BestFirstFinder: t("./finders/BestFirstFinder"),
              BreadthFirstFinder: t("./finders/BreadthFirstFinder"),
              DijkstraFinder: t("./finders/DijkstraFinder"),
              BiAStarFinder: t("./finders/BiAStarFinder"),
              BiBestFirstFinder: t("./finders/BiBestFirstFinder"),
              BiBreadthFirstFinder: t("./finders/BiBreadthFirstFinder"),
              BiDijkstraFinder: t("./finders/BiDijkstraFinder"),
              IDAStarFinder: t("./finders/IDAStarFinder"),
              JumpPointFinder: t("./finders/JumpPointFinder"),
            };
          },
          {
            "./core/DiagonalMovement": 3,
            "./core/Grid": 4,
            "./core/Heuristic": 5,
            "./core/Node": 6,
            "./core/Util": 7,
            "./finders/AStarFinder": 9,
            "./finders/BestFirstFinder": 10,
            "./finders/BiAStarFinder": 11,
            "./finders/BiBestFirstFinder": 12,
            "./finders/BiBreadthFirstFinder": 13,
            "./finders/BiDijkstraFinder": 14,
            "./finders/BreadthFirstFinder": 15,
            "./finders/DijkstraFinder": 16,
            "./finders/IDAStarFinder": 17,
            "./finders/JumpPointFinder": 22,
            heap: 1,
          },
        ],
        9: [
          function (t, e, i) {
            function n(t) {
              (t = t || {}),
                (this.allowDiagonal = t.allowDiagonal),
                (this.dontCrossCorners = t.dontCrossCorners),
                (this.heuristic = t.heuristic || a.manhattan),
                (this.weight = t.weight || 1),
                (this.diagonalMovement = t.diagonalMovement),
                this.diagonalMovement ||
                  (this.allowDiagonal
                    ? this.dontCrossCorners
                      ? (this.diagonalMovement = s.OnlyWhenNoObstacles)
                      : (this.diagonalMovement = s.IfAtMostOneObstacle)
                    : (this.diagonalMovement = s.Never)),
                this.diagonalMovement === s.Never
                  ? (this.heuristic = t.heuristic || a.manhattan)
                  : (this.heuristic = t.heuristic || a.octile);
            }
            var o = t("heap"),
              r = t("../core/Util"),
              a = t("../core/Heuristic"),
              s = t("../core/DiagonalMovement");
            (n.prototype.findPath = function (t, e, i, n, a) {
              var s,
                l,
                h,
                u,
                p,
                c,
                f,
                d,
                g = new o(function (t, e) {
                  return t.f - e.f;
                }),
                b = a.getNodeAt(t, e),
                v = a.getNodeAt(i, n),
                A = this.heuristic,
                m = this.diagonalMovement,
                y = this.weight,
                k = Math.abs,
                M = Math.SQRT2;
              for (b.g = 0, b.f = 0, g.push(b), b.opened = !0; !g.empty(); ) {
                if ((((s = g.pop()).closed = !0), s === v))
                  return r.backtrace(v);
                for (u = 0, p = (l = a.getNeighbors(s, m)).length; p > u; ++u)
                  (h = l[u]).closed ||
                    ((c = h.x),
                    (f = h.y),
                    (d = s.g + (c - s.x == 0 || f - s.y == 0 ? 1 : M)),
                    (!h.opened || d < h.g) &&
                      ((h.g = d),
                      (h.h = h.h || y * A(k(c - i), k(f - n))),
                      (h.f = h.g + h.h),
                      (h.parent = s),
                      h.opened
                        ? g.updateItem(h)
                        : (g.push(h), (h.opened = !0))));
              }
              return [];
            }),
              (e.exports = n);
          },
          {
            "../core/DiagonalMovement": 3,
            "../core/Heuristic": 5,
            "../core/Util": 7,
            heap: 1,
          },
        ],
        10: [
          function (t, e, i) {
            function n(t) {
              o.call(this, t);
              var e = this.heuristic;
              this.heuristic = function (t, i) {
                return 1e6 * e(t, i);
              };
            }
            var o = t("./AStarFinder");
            (n.prototype = new o()),
              (n.prototype.constructor = n),
              (e.exports = n);
          },
          { "./AStarFinder": 9 },
        ],
        11: [
          function (t, e, i) {
            function n(t) {
              (t = t || {}),
                (this.allowDiagonal = t.allowDiagonal),
                (this.dontCrossCorners = t.dontCrossCorners),
                (this.diagonalMovement = t.diagonalMovement),
                (this.heuristic = t.heuristic || a.manhattan),
                (this.weight = t.weight || 1),
                this.diagonalMovement ||
                  (this.allowDiagonal
                    ? this.dontCrossCorners
                      ? (this.diagonalMovement = s.OnlyWhenNoObstacles)
                      : (this.diagonalMovement = s.IfAtMostOneObstacle)
                    : (this.diagonalMovement = s.Never)),
                this.diagonalMovement === s.Never
                  ? (this.heuristic = t.heuristic || a.manhattan)
                  : (this.heuristic = t.heuristic || a.octile);
            }
            var o = t("heap"),
              r = t("../core/Util"),
              a = t("../core/Heuristic"),
              s = t("../core/DiagonalMovement");
            (n.prototype.findPath = function (t, e, i, n, a) {
              var s,
                l,
                h,
                u,
                p,
                c,
                f,
                d,
                g = function (t, e) {
                  return t.f - e.f;
                },
                b = new o(g),
                v = new o(g),
                A = a.getNodeAt(t, e),
                m = a.getNodeAt(i, n),
                y = this.heuristic,
                k = this.diagonalMovement,
                M = this.weight,
                W = Math.abs,
                w = Math.SQRT2;
              for (
                A.g = 0,
                  A.f = 0,
                  b.push(A),
                  A.opened = 1,
                  m.g = 0,
                  m.f = 0,
                  v.push(m),
                  m.opened = 2;
                !b.empty() && !v.empty();

              ) {
                for (
                  (s = b.pop()).closed = !0,
                    u = 0,
                    p = (l = a.getNeighbors(s, k)).length;
                  p > u;
                  ++u
                )
                  if (!(h = l[u]).closed) {
                    if (2 === h.opened) return r.biBacktrace(s, h);
                    (c = h.x),
                      (f = h.y),
                      (d = s.g + (c - s.x == 0 || f - s.y == 0 ? 1 : w)),
                      (!h.opened || d < h.g) &&
                        ((h.g = d),
                        (h.h = h.h || M * y(W(c - i), W(f - n))),
                        (h.f = h.g + h.h),
                        (h.parent = s),
                        h.opened
                          ? b.updateItem(h)
                          : (b.push(h), (h.opened = 1)));
                  }
                for (
                  (s = v.pop()).closed = !0,
                    u = 0,
                    p = (l = a.getNeighbors(s, k)).length;
                  p > u;
                  ++u
                )
                  if (!(h = l[u]).closed) {
                    if (1 === h.opened) return r.biBacktrace(h, s);
                    (c = h.x),
                      (f = h.y),
                      (d = s.g + (c - s.x == 0 || f - s.y == 0 ? 1 : w)),
                      (!h.opened || d < h.g) &&
                        ((h.g = d),
                        (h.h = h.h || M * y(W(c - t), W(f - e))),
                        (h.f = h.g + h.h),
                        (h.parent = s),
                        h.opened
                          ? v.updateItem(h)
                          : (v.push(h), (h.opened = 2)));
                  }
              }
              return [];
            }),
              (e.exports = n);
          },
          {
            "../core/DiagonalMovement": 3,
            "../core/Heuristic": 5,
            "../core/Util": 7,
            heap: 1,
          },
        ],
        12: [
          function (t, e, i) {
            function n(t) {
              o.call(this, t);
              var e = this.heuristic;
              this.heuristic = function (t, i) {
                return 1e6 * e(t, i);
              };
            }
            var o = t("./BiAStarFinder");
            (n.prototype = new o()),
              (n.prototype.constructor = n),
              (e.exports = n);
          },
          { "./BiAStarFinder": 11 },
        ],
        13: [
          function (t, e, i) {
            function n(t) {
              (t = t || {}),
                (this.allowDiagonal = t.allowDiagonal),
                (this.dontCrossCorners = t.dontCrossCorners),
                (this.diagonalMovement = t.diagonalMovement),
                this.diagonalMovement ||
                  (this.allowDiagonal
                    ? this.dontCrossCorners
                      ? (this.diagonalMovement = r.OnlyWhenNoObstacles)
                      : (this.diagonalMovement = r.IfAtMostOneObstacle)
                    : (this.diagonalMovement = r.Never));
            }
            var o = t("../core/Util"),
              r = t("../core/DiagonalMovement");
            (n.prototype.findPath = function (t, e, i, n, r) {
              var a,
                s,
                l,
                h,
                u,
                p = r.getNodeAt(t, e),
                c = r.getNodeAt(i, n),
                f = [],
                d = [],
                g = this.diagonalMovement;
              for (
                f.push(p),
                  p.opened = !0,
                  p.by = 0,
                  d.push(c),
                  c.opened = !0,
                  c.by = 1;
                f.length && d.length;

              ) {
                for (
                  (l = f.shift()).closed = !0,
                    h = 0,
                    u = (a = r.getNeighbors(l, g)).length;
                  u > h;
                  ++h
                )
                  if (!(s = a[h]).closed)
                    if (s.opened) {
                      if (1 === s.by) return o.biBacktrace(l, s);
                    } else
                      f.push(s), (s.parent = l), (s.opened = !0), (s.by = 0);
                for (
                  (l = d.shift()).closed = !0,
                    h = 0,
                    u = (a = r.getNeighbors(l, g)).length;
                  u > h;
                  ++h
                )
                  if (!(s = a[h]).closed)
                    if (s.opened) {
                      if (0 === s.by) return o.biBacktrace(s, l);
                    } else
                      d.push(s), (s.parent = l), (s.opened = !0), (s.by = 1);
              }
              return [];
            }),
              (e.exports = n);
          },
          { "../core/DiagonalMovement": 3, "../core/Util": 7 },
        ],
        14: [
          function (t, e, i) {
            function n(t) {
              o.call(this, t),
                (this.heuristic = function (t, e) {
                  return 0;
                });
            }
            var o = t("./BiAStarFinder");
            (n.prototype = new o()),
              (n.prototype.constructor = n),
              (e.exports = n);
          },
          { "./BiAStarFinder": 11 },
        ],
        15: [
          function (t, e, i) {
            function n(t) {
              (t = t || {}),
                (this.allowDiagonal = t.allowDiagonal),
                (this.dontCrossCorners = t.dontCrossCorners),
                (this.diagonalMovement = t.diagonalMovement),
                this.diagonalMovement ||
                  (this.allowDiagonal
                    ? this.dontCrossCorners
                      ? (this.diagonalMovement = r.OnlyWhenNoObstacles)
                      : (this.diagonalMovement = r.IfAtMostOneObstacle)
                    : (this.diagonalMovement = r.Never));
            }
            var o = t("../core/Util"),
              r = t("../core/DiagonalMovement");
            (n.prototype.findPath = function (t, e, i, n, r) {
              var a,
                s,
                l,
                h,
                u,
                p = [],
                c = this.diagonalMovement,
                f = r.getNodeAt(t, e),
                d = r.getNodeAt(i, n);
              for (p.push(f), f.opened = !0; p.length; ) {
                if ((((l = p.shift()).closed = !0), l === d))
                  return o.backtrace(d);
                for (h = 0, u = (a = r.getNeighbors(l, c)).length; u > h; ++h)
                  (s = a[h]).closed ||
                    s.opened ||
                    (p.push(s), (s.opened = !0), (s.parent = l));
              }
              return [];
            }),
              (e.exports = n);
          },
          { "../core/DiagonalMovement": 3, "../core/Util": 7 },
        ],
        16: [
          function (t, e, i) {
            function n(t) {
              o.call(this, t),
                (this.heuristic = function (t, e) {
                  return 0;
                });
            }
            var o = t("./AStarFinder");
            (n.prototype = new o()),
              (n.prototype.constructor = n),
              (e.exports = n);
          },
          { "./AStarFinder": 9 },
        ],
        17: [
          function (t, e, i) {
            function n(t) {
              (t = t || {}),
                (this.allowDiagonal = t.allowDiagonal),
                (this.dontCrossCorners = t.dontCrossCorners),
                (this.diagonalMovement = t.diagonalMovement),
                (this.heuristic = t.heuristic || o.manhattan),
                (this.weight = t.weight || 1),
                (this.trackRecursion = t.trackRecursion || !1),
                (this.timeLimit = t.timeLimit || 1 / 0),
                this.diagonalMovement ||
                  (this.allowDiagonal
                    ? this.dontCrossCorners
                      ? (this.diagonalMovement = a.OnlyWhenNoObstacles)
                      : (this.diagonalMovement = a.IfAtMostOneObstacle)
                    : (this.diagonalMovement = a.Never)),
                this.diagonalMovement === a.Never
                  ? (this.heuristic = t.heuristic || o.manhattan)
                  : (this.heuristic = t.heuristic || o.octile);
            }
            var o = (t("../core/Util"), t("../core/Heuristic")),
              r = t("../core/Node"),
              a = t("../core/DiagonalMovement");
            (n.prototype.findPath = function (t, e, i, n, o) {
              var a,
                s,
                l,
                h = new Date().getTime(),
                u = function (t, e) {
                  return this.heuristic(
                    Math.abs(e.x - t.x),
                    Math.abs(e.y - t.y)
                  );
                }.bind(this),
                p = function (t, e) {
                  return t.x === e.x || t.y === e.y ? 1 : Math.SQRT2;
                },
                c = function (t, e, i, n, a) {
                  if (
                    this.timeLimit > 0 &&
                    new Date().getTime() - h > 1e3 * this.timeLimit
                  )
                    return 1 / 0;
                  var s = e + u(t, d) * this.weight;
                  if (s > i) return s;
                  if (t == d) return (n[a] = [t.x, t.y]), t;
                  var l,
                    f,
                    g,
                    b,
                    v = o.getNeighbors(t, this.diagonalMovement);
                  for (g = 0, l = 1 / 0; (b = v[g]); ++g) {
                    if (
                      (this.trackRecursion &&
                        ((b.retainCount = b.retainCount + 1 || 1),
                        !0 !== b.tested && (b.tested = !0)),
                      (f = c(b, e + p(t, b), i, n, a + 1)) instanceof r)
                    )
                      return (n[a] = [t.x, t.y]), f;
                    this.trackRecursion &&
                      0 == --b.retainCount &&
                      (b.tested = !1),
                      l > f && (l = f);
                  }
                  return l;
                }.bind(this),
                f = o.getNodeAt(t, e),
                d = o.getNodeAt(i, n),
                g = u(f, d);
              for (a = 0; ; ++a) {
                if ((l = c(f, 0, g, (s = []), 0)) === 1 / 0) return [];
                if (l instanceof r) return s;
                g = l;
              }
              return [];
            }),
              (e.exports = n);
          },
          {
            "../core/DiagonalMovement": 3,
            "../core/Heuristic": 5,
            "../core/Node": 6,
            "../core/Util": 7,
          },
        ],
        18: [
          function (t, e, i) {
            function n(t) {
              o.call(this, t);
            }
            var o = t("./JumpPointFinderBase"),
              r = t("../core/DiagonalMovement");
            (n.prototype = new o()),
              (n.prototype.constructor = n),
              (n.prototype._jump = function (t, e, i, n) {
                var o = this.grid,
                  r = t - i,
                  a = e - n;
                if (!o.isWalkableAt(t, e)) return null;
                if (
                  (!0 === this.trackJumpRecursion &&
                    (o.getNodeAt(t, e).tested = !0),
                  o.getNodeAt(t, e) === this.endNode)
                )
                  return [t, e];
                if (0 !== r && 0 !== a) {
                  if (
                    (o.isWalkableAt(t - r, e + a) &&
                      !o.isWalkableAt(t - r, e)) ||
                    (o.isWalkableAt(t + r, e - a) && !o.isWalkableAt(t, e - a))
                  )
                    return [t, e];
                  if (this._jump(t + r, e, t, e) || this._jump(t, e + a, t, e))
                    return [t, e];
                } else if (0 !== r) {
                  if (
                    (o.isWalkableAt(t + r, e + 1) &&
                      !o.isWalkableAt(t, e + 1)) ||
                    (o.isWalkableAt(t + r, e - 1) && !o.isWalkableAt(t, e - 1))
                  )
                    return [t, e];
                } else if (
                  (o.isWalkableAt(t + 1, e + a) && !o.isWalkableAt(t + 1, e)) ||
                  (o.isWalkableAt(t - 1, e + a) && !o.isWalkableAt(t - 1, e))
                )
                  return [t, e];
                return this._jump(t + r, e + a, t, e);
              }),
              (n.prototype._findNeighbors = function (t) {
                var e,
                  i,
                  n,
                  o,
                  a,
                  s,
                  l,
                  h,
                  u = t.parent,
                  p = t.x,
                  c = t.y,
                  f = this.grid,
                  d = [];
                if (u)
                  (e = u.x),
                    (i = u.y),
                    (n = (p - e) / Math.max(Math.abs(p - e), 1)),
                    (o = (c - i) / Math.max(Math.abs(c - i), 1)),
                    0 !== n && 0 !== o
                      ? (f.isWalkableAt(p, c + o) && d.push([p, c + o]),
                        f.isWalkableAt(p + n, c) && d.push([p + n, c]),
                        f.isWalkableAt(p + n, c + o) && d.push([p + n, c + o]),
                        f.isWalkableAt(p - n, c) || d.push([p - n, c + o]),
                        f.isWalkableAt(p, c - o) || d.push([p + n, c - o]))
                      : 0 === n
                      ? (f.isWalkableAt(p, c + o) && d.push([p, c + o]),
                        f.isWalkableAt(p + 1, c) || d.push([p + 1, c + o]),
                        f.isWalkableAt(p - 1, c) || d.push([p - 1, c + o]))
                      : (f.isWalkableAt(p + n, c) && d.push([p + n, c]),
                        f.isWalkableAt(p, c + 1) || d.push([p + n, c + 1]),
                        f.isWalkableAt(p, c - 1) || d.push([p + n, c - 1]));
                else
                  for (
                    l = 0, h = (a = f.getNeighbors(t, r.Always)).length;
                    h > l;
                    ++l
                  )
                    (s = a[l]), d.push([s.x, s.y]);
                return d;
              }),
              (e.exports = n);
          },
          { "../core/DiagonalMovement": 3, "./JumpPointFinderBase": 23 },
        ],
        19: [
          function (t, e, i) {
            function n(t) {
              o.call(this, t);
            }
            var o = t("./JumpPointFinderBase"),
              r = t("../core/DiagonalMovement");
            (n.prototype = new o()),
              (n.prototype.constructor = n),
              (n.prototype._jump = function (t, e, i, n) {
                var o = this.grid,
                  r = t - i,
                  a = e - n;
                if (!o.isWalkableAt(t, e)) return null;
                if (
                  (!0 === this.trackJumpRecursion &&
                    (o.getNodeAt(t, e).tested = !0),
                  o.getNodeAt(t, e) === this.endNode)
                )
                  return [t, e];
                if (0 !== r && 0 !== a) {
                  if (
                    (o.isWalkableAt(t - r, e + a) &&
                      !o.isWalkableAt(t - r, e)) ||
                    (o.isWalkableAt(t + r, e - a) && !o.isWalkableAt(t, e - a))
                  )
                    return [t, e];
                  if (this._jump(t + r, e, t, e) || this._jump(t, e + a, t, e))
                    return [t, e];
                } else if (0 !== r) {
                  if (
                    (o.isWalkableAt(t + r, e + 1) &&
                      !o.isWalkableAt(t, e + 1)) ||
                    (o.isWalkableAt(t + r, e - 1) && !o.isWalkableAt(t, e - 1))
                  )
                    return [t, e];
                } else if (
                  (o.isWalkableAt(t + 1, e + a) && !o.isWalkableAt(t + 1, e)) ||
                  (o.isWalkableAt(t - 1, e + a) && !o.isWalkableAt(t - 1, e))
                )
                  return [t, e];
                return o.isWalkableAt(t + r, e) || o.isWalkableAt(t, e + a)
                  ? this._jump(t + r, e + a, t, e)
                  : null;
              }),
              (n.prototype._findNeighbors = function (t) {
                var e,
                  i,
                  n,
                  o,
                  a,
                  s,
                  l,
                  h,
                  u = t.parent,
                  p = t.x,
                  c = t.y,
                  f = this.grid,
                  d = [];
                if (u)
                  (e = u.x),
                    (i = u.y),
                    (n = (p - e) / Math.max(Math.abs(p - e), 1)),
                    (o = (c - i) / Math.max(Math.abs(c - i), 1)),
                    0 !== n && 0 !== o
                      ? (f.isWalkableAt(p, c + o) && d.push([p, c + o]),
                        f.isWalkableAt(p + n, c) && d.push([p + n, c]),
                        (f.isWalkableAt(p, c + o) ||
                          f.isWalkableAt(p + n, c)) &&
                          d.push([p + n, c + o]),
                        !f.isWalkableAt(p - n, c) &&
                          f.isWalkableAt(p, c + o) &&
                          d.push([p - n, c + o]),
                        !f.isWalkableAt(p, c - o) &&
                          f.isWalkableAt(p + n, c) &&
                          d.push([p + n, c - o]))
                      : 0 === n
                      ? f.isWalkableAt(p, c + o) &&
                        (d.push([p, c + o]),
                        f.isWalkableAt(p + 1, c) || d.push([p + 1, c + o]),
                        f.isWalkableAt(p - 1, c) || d.push([p - 1, c + o]))
                      : f.isWalkableAt(p + n, c) &&
                        (d.push([p + n, c]),
                        f.isWalkableAt(p, c + 1) || d.push([p + n, c + 1]),
                        f.isWalkableAt(p, c - 1) || d.push([p + n, c - 1]));
                else
                  for (
                    l = 0,
                      h = (a = f.getNeighbors(t, r.IfAtMostOneObstacle)).length;
                    h > l;
                    ++l
                  )
                    (s = a[l]), d.push([s.x, s.y]);
                return d;
              }),
              (e.exports = n);
          },
          { "../core/DiagonalMovement": 3, "./JumpPointFinderBase": 23 },
        ],
        20: [
          function (t, e, i) {
            function n(t) {
              o.call(this, t);
            }
            var o = t("./JumpPointFinderBase"),
              r = t("../core/DiagonalMovement");
            (n.prototype = new o()),
              (n.prototype.constructor = n),
              (n.prototype._jump = function (t, e, i, n) {
                var o = this.grid,
                  r = t - i,
                  a = e - n;
                if (!o.isWalkableAt(t, e)) return null;
                if (
                  (!0 === this.trackJumpRecursion &&
                    (o.getNodeAt(t, e).tested = !0),
                  o.getNodeAt(t, e) === this.endNode)
                )
                  return [t, e];
                if (0 !== r && 0 !== a) {
                  if (this._jump(t + r, e, t, e) || this._jump(t, e + a, t, e))
                    return [t, e];
                } else if (0 !== r) {
                  if (
                    (o.isWalkableAt(t, e - 1) &&
                      !o.isWalkableAt(t - r, e - 1)) ||
                    (o.isWalkableAt(t, e + 1) && !o.isWalkableAt(t - r, e + 1))
                  )
                    return [t, e];
                } else if (
                  0 !== a &&
                  ((o.isWalkableAt(t - 1, e) &&
                    !o.isWalkableAt(t - 1, e - a)) ||
                    (o.isWalkableAt(t + 1, e) && !o.isWalkableAt(t + 1, e - a)))
                )
                  return [t, e];
                return o.isWalkableAt(t + r, e) && o.isWalkableAt(t, e + a)
                  ? this._jump(t + r, e + a, t, e)
                  : null;
              }),
              (n.prototype._findNeighbors = function (t) {
                var e,
                  i,
                  n,
                  o,
                  a,
                  s,
                  l,
                  h,
                  u = t.parent,
                  p = t.x,
                  c = t.y,
                  f = this.grid,
                  d = [];
                if (u) {
                  if (
                    ((e = u.x),
                    (i = u.y),
                    (n = (p - e) / Math.max(Math.abs(p - e), 1)),
                    (o = (c - i) / Math.max(Math.abs(c - i), 1)),
                    0 !== n && 0 !== o)
                  )
                    f.isWalkableAt(p, c + o) && d.push([p, c + o]),
                      f.isWalkableAt(p + n, c) && d.push([p + n, c]),
                      f.isWalkableAt(p, c + o) &&
                        f.isWalkableAt(p + n, c) &&
                        d.push([p + n, c + o]);
                  else {
                    var g;
                    if (0 !== n) {
                      g = f.isWalkableAt(p + n, c);
                      var b = f.isWalkableAt(p, c + 1),
                        v = f.isWalkableAt(p, c - 1);
                      g &&
                        (d.push([p + n, c]),
                        b && d.push([p + n, c + 1]),
                        v && d.push([p + n, c - 1])),
                        b && d.push([p, c + 1]),
                        v && d.push([p, c - 1]);
                    } else if (0 !== o) {
                      g = f.isWalkableAt(p, c + o);
                      var A = f.isWalkableAt(p + 1, c),
                        m = f.isWalkableAt(p - 1, c);
                      g &&
                        (d.push([p, c + o]),
                        A && d.push([p + 1, c + o]),
                        m && d.push([p - 1, c + o])),
                        A && d.push([p + 1, c]),
                        m && d.push([p - 1, c]);
                    }
                  }
                } else
                  for (
                    l = 0,
                      h = (a = f.getNeighbors(t, r.OnlyWhenNoObstacles)).length;
                    h > l;
                    ++l
                  )
                    (s = a[l]), d.push([s.x, s.y]);
                return d;
              }),
              (e.exports = n);
          },
          { "../core/DiagonalMovement": 3, "./JumpPointFinderBase": 23 },
        ],
        21: [
          function (t, e, i) {
            function n(t) {
              o.call(this, t);
            }
            var o = t("./JumpPointFinderBase"),
              r = t("../core/DiagonalMovement");
            (n.prototype = new o()),
              (n.prototype.constructor = n),
              (n.prototype._jump = function (t, e, i, n) {
                var o = this.grid,
                  r = t - i,
                  a = e - n;
                if (!o.isWalkableAt(t, e)) return null;
                if (
                  (!0 === this.trackJumpRecursion &&
                    (o.getNodeAt(t, e).tested = !0),
                  o.getNodeAt(t, e) === this.endNode)
                )
                  return [t, e];
                if (0 !== r) {
                  if (
                    (o.isWalkableAt(t, e - 1) &&
                      !o.isWalkableAt(t - r, e - 1)) ||
                    (o.isWalkableAt(t, e + 1) && !o.isWalkableAt(t - r, e + 1))
                  )
                    return [t, e];
                } else {
                  if (0 === a)
                    throw new Error(
                      "Only horizontal and vertical movements are allowed"
                    );
                  if (
                    (o.isWalkableAt(t - 1, e) &&
                      !o.isWalkableAt(t - 1, e - a)) ||
                    (o.isWalkableAt(t + 1, e) && !o.isWalkableAt(t + 1, e - a))
                  )
                    return [t, e];
                  if (this._jump(t + 1, e, t, e) || this._jump(t - 1, e, t, e))
                    return [t, e];
                }
                return this._jump(t + r, e + a, t, e);
              }),
              (n.prototype._findNeighbors = function (t) {
                var e,
                  i,
                  n,
                  o,
                  a,
                  s,
                  l,
                  h,
                  u = t.parent,
                  p = t.x,
                  c = t.y,
                  f = this.grid,
                  d = [];
                if (u)
                  (e = u.x),
                    (i = u.y),
                    (n = (p - e) / Math.max(Math.abs(p - e), 1)),
                    (o = (c - i) / Math.max(Math.abs(c - i), 1)),
                    0 !== n
                      ? (f.isWalkableAt(p, c - 1) && d.push([p, c - 1]),
                        f.isWalkableAt(p, c + 1) && d.push([p, c + 1]),
                        f.isWalkableAt(p + n, c) && d.push([p + n, c]))
                      : 0 !== o &&
                        (f.isWalkableAt(p - 1, c) && d.push([p - 1, c]),
                        f.isWalkableAt(p + 1, c) && d.push([p + 1, c]),
                        f.isWalkableAt(p, c + o) && d.push([p, c + o]));
                else
                  for (
                    l = 0, h = (a = f.getNeighbors(t, r.Never)).length;
                    h > l;
                    ++l
                  )
                    (s = a[l]), d.push([s.x, s.y]);
                return d;
              }),
              (e.exports = n);
          },
          { "../core/DiagonalMovement": 3, "./JumpPointFinderBase": 23 },
        ],
        22: [
          function (t, e, i) {
            var n = t("../core/DiagonalMovement"),
              o = t("./JPFNeverMoveDiagonally"),
              r = t("./JPFAlwaysMoveDiagonally"),
              a = t("./JPFMoveDiagonallyIfNoObstacles"),
              s = t("./JPFMoveDiagonallyIfAtMostOneObstacle");
            e.exports = function (t) {
              return (t = t || {}).diagonalMovement === n.Never
                ? new o(t)
                : t.diagonalMovement === n.Always
                ? new r(t)
                : t.diagonalMovement === n.OnlyWhenNoObstacles
                ? new a(t)
                : new s(t);
            };
          },
          {
            "../core/DiagonalMovement": 3,
            "./JPFAlwaysMoveDiagonally": 18,
            "./JPFMoveDiagonallyIfAtMostOneObstacle": 19,
            "./JPFMoveDiagonallyIfNoObstacles": 20,
            "./JPFNeverMoveDiagonally": 21,
          },
        ],
        23: [
          function (t, e, i) {
            function n(t) {
              (t = t || {}),
                (this.heuristic = t.heuristic || a.manhattan),
                (this.trackJumpRecursion = t.trackJumpRecursion || !1);
            }
            var o = t("heap"),
              r = t("../core/Util"),
              a = t("../core/Heuristic");
            t("../core/DiagonalMovement"),
              (n.prototype.findPath = function (t, e, i, n, a) {
                var s,
                  l = (this.openList = new o(function (t, e) {
                    return t.f - e.f;
                  })),
                  h = (this.startNode = a.getNodeAt(t, e)),
                  u = (this.endNode = a.getNodeAt(i, n));
                for (
                  this.grid = a, h.g = 0, h.f = 0, l.push(h), h.opened = !0;
                  !l.empty();

                ) {
                  if ((((s = l.pop()).closed = !0), s === u))
                    return r.expandPath(r.backtrace(u));
                  this._identifySuccessors(s);
                }
                return [];
              }),
              (n.prototype._identifySuccessors = function (t) {
                var e,
                  i,
                  n,
                  o,
                  r,
                  s,
                  l,
                  h,
                  u,
                  p,
                  c = this.grid,
                  f = this.heuristic,
                  d = this.openList,
                  g = this.endNode.x,
                  b = this.endNode.y,
                  v = t.x,
                  A = t.y,
                  m = Math.abs;
                for (
                  Math.max, o = 0, r = (e = this._findNeighbors(t)).length;
                  r > o;
                  ++o
                )
                  if (((i = e[o]), (n = this._jump(i[0], i[1], v, A)))) {
                    if (
                      ((s = n[0]), (l = n[1]), (p = c.getNodeAt(s, l)).closed)
                    )
                      continue;
                    (h = a.octile(m(s - v), m(l - A))),
                      (u = t.g + h),
                      (!p.opened || u < p.g) &&
                        ((p.g = u),
                        (p.h = p.h || f(m(s - g), m(l - b))),
                        (p.f = p.g + p.h),
                        (p.parent = t),
                        p.opened
                          ? d.updateItem(p)
                          : (d.push(p), (p.opened = !0)));
                  }
              }),
              (e.exports = n);
          },
          {
            "../core/DiagonalMovement": 3,
            "../core/Heuristic": 5,
            "../core/Util": 7,
            heap: 1,
          },
        ],
      },
      {},
      [8]
    )(8);
  });
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
        (function () {
          var n = e.Cookies,
            o = (e.Cookies = t());
          o.noConflict = function () {
            return (e.Cookies = n), o;
          };
        })());
  })(this, function () {
    "use strict";
    function e(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) e[o] = n[o];
      }
      return e;
    }
    var t = (function t(n, o) {
      function r(t, r, i) {
        if ("undefined" != typeof document) {
          "number" == typeof (i = e({}, o, i)).expires &&
            (i.expires = new Date(Date.now() + 864e5 * i.expires)),
            i.expires && (i.expires = i.expires.toUTCString()),
            (t = encodeURIComponent(t)
              .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
              .replace(/[()]/g, escape));
          var c = "";
          for (var u in i)
            i[u] &&
              ((c += "; " + u), !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
          return (document.cookie = t + "=" + n.write(r, t) + c);
        }
      }
      return Object.create(
        {
          set: r,
          get: function (e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (
                var t = document.cookie ? document.cookie.split("; ") : [],
                  o = {},
                  r = 0;
                r < t.length;
                r++
              ) {
                var i = t[r].split("="),
                  c = i.slice(1).join("=");
                try {
                  var u = decodeURIComponent(i[0]);
                  if (((o[u] = n.read(c, u)), e === u)) break;
                } catch (e) {}
              }
              return e ? o[e] : o;
            }
          },
          remove: function (t, n) {
            r(t, "", e({}, n, { expires: -1 }));
          },
          withAttributes: function (n) {
            return t(this.converter, e({}, this.attributes, n));
          },
          withConverter: function (n) {
            return t(e({}, this.converter, n), this.attributes);
          },
        },
        {
          attributes: { value: Object.freeze(o) },
          converter: { value: Object.freeze(n) },
        }
      );
    })(
      {
        read: function (e) {
          return (
            '"' === e[0] && (e = e.slice(1, -1)),
            e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
          );
        },
        write: function (e) {
          return encodeURIComponent(e).replace(
            /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
            decodeURIComponent
          );
        },
      },
      { path: "/" }
    );
    return t;
  });
  var e, n;
  (e = this),
    (n = function () {
      return (function (e) {
        function n(o) {
          if (t[o]) return t[o].exports;
          var i = (t[o] = { i: o, l: !1, exports: {} });
          return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        var t = {};
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, o) {
            n.o(e, t) ||
              Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: o,
              });
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
          }),
          (n.p = ""),
          n((n.s = 16))
        );
      })([
        function (e, n, t) {
          function o(e, n, t) {
            var o = s[n];
            if (
              (void 0 === o &&
                (o = (function (e) {
                  var n = a(e),
                    t = r(n);
                  return (s[n] = s[e] = s[t] = t), t;
                })(n)),
              o)
            ) {
              if (void 0 === t) return e.style[o];
              e.style[o] = u(o, t);
            }
          }
          function i() {
            2 === arguments.length
              ? "string" == typeof arguments[1]
                ? (arguments[0].style.cssText = arguments[1])
                : (function (e, n) {
                    for (var t in n) n.hasOwnProperty(t) && o(e, t, n[t]);
                  })(arguments[0], arguments[1])
              : o(arguments[0], arguments[1], arguments[2]);
          }
          var r = t(18),
            a = t(19),
            s = { float: "cssFloat" },
            u = t(22);
          (e.exports = i),
            (e.exports.set = i),
            (e.exports.get = function (e, n) {
              return Array.isArray(n)
                ? n.reduce(function (n, t) {
                    return (n[t] = o(e, t || "")), n;
                  }, {})
                : o(e, n || "");
            });
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.theme = void 0);
          var o = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            i =
              ((function (e) {
                e && e.__esModule;
              })(t(9)),
              (function () {
                function e() {
                  !(function (e, n) {
                    if (!(e instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  o(e, [
                    {
                      key: "Set",
                      value: function (e) {
                        Object.assign(this, r, e);
                      },
                    },
                  ]),
                  e
                );
              })()),
            r = {
              name: "BaseTheme",
              colors: {
                menuBarBackground: "black",
                menuBarText: "black",
                panelBackground: "black",
                componentBackground: "black",
                componentBackgroundHover: "black",
                componentForeground: "black",
                componentActive: "black",
                textPrimary: "black",
                textSecondary: "black",
                textHover: "black",
                textActive: "black",
              },
              sizing: {
                menuBarHeight: "25px",
                componentHeight: "20px",
                componentSpacing: "5px",
                labelWidth: "42%",
              },
            };
          n.theme = new i();
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(t(0));
          (n.default = function (e, n, t) {
            var i = e.appendChild(document.createElement("div"));
            return (
              i.classList.add("guichanxy-component-container"),
              (0, o.default)(i, {
                position: "relative",
                "min-height": t.sizing.componentHeight,
                "margin-bottom": t.sizing.componentSpacing,
              }),
              i
            );
          }),
            (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          var o = t(31);
          (e.exports = o), (e.exports.csjs = o), (e.exports.getCss = t(45));
        },
        function (e, n, t) {
          var o;
          !(function (n) {
            "use strict";
            function i() {}
            function r(e, n) {
              for (var t = e.length; t--; ) if (e[t].listener === n) return t;
              return -1;
            }
            function a(e) {
              return function () {
                return this[e].apply(this, arguments);
              };
            }
            function s(e) {
              return (
                "function" == typeof e ||
                e instanceof RegExp ||
                (!(!e || "object" != typeof e) && s(e.listener))
              );
            }
            var u = i.prototype,
              l = n.EventEmitter;
            (u.getListeners = function (e) {
              var n,
                t,
                o = this._getEvents();
              if (e instanceof RegExp)
                for (t in ((n = {}), o))
                  o.hasOwnProperty(t) && e.test(t) && (n[t] = o[t]);
              else n = o[e] || (o[e] = []);
              return n;
            }),
              (u.flattenListeners = function (e) {
                var n,
                  t = [];
                for (n = 0; n < e.length; n += 1) t.push(e[n].listener);
                return t;
              }),
              (u.getListenersAsObject = function (e) {
                var n,
                  t = this.getListeners(e);
                return t instanceof Array && ((n = {})[e] = t), n || t;
              }),
              (u.addListener = function (e, n) {
                if (!s(n)) throw new TypeError("listener must be a function");
                var t,
                  o = this.getListenersAsObject(e),
                  i = "object" == typeof n;
                for (t in o)
                  o.hasOwnProperty(t) &&
                    -1 === r(o[t], n) &&
                    o[t].push(i ? n : { listener: n, once: !1 });
                return this;
              }),
              (u.on = a("addListener")),
              (u.addOnceListener = function (e, n) {
                return this.addListener(e, { listener: n, once: !0 });
              }),
              (u.once = a("addOnceListener")),
              (u.defineEvent = function (e) {
                return this.getListeners(e), this;
              }),
              (u.defineEvents = function (e) {
                for (var n = 0; n < e.length; n += 1) this.defineEvent(e[n]);
                return this;
              }),
              (u.removeListener = function (e, n) {
                var t,
                  o,
                  i = this.getListenersAsObject(e);
                for (o in i)
                  i.hasOwnProperty(o) &&
                    -1 !== (t = r(i[o], n)) &&
                    i[o].splice(t, 1);
                return this;
              }),
              (u.off = a("removeListener")),
              (u.addListeners = function (e, n) {
                return this.manipulateListeners(!1, e, n);
              }),
              (u.removeListeners = function (e, n) {
                return this.manipulateListeners(!0, e, n);
              }),
              (u.manipulateListeners = function (e, n, t) {
                var o,
                  i,
                  r = e ? this.removeListener : this.addListener,
                  a = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof n || n instanceof RegExp)
                  for (o = t.length; o--; ) r.call(this, n, t[o]);
                else
                  for (o in n)
                    n.hasOwnProperty(o) &&
                      (i = n[o]) &&
                      ("function" == typeof i
                        ? r.call(this, o, i)
                        : a.call(this, o, i));
                return this;
              }),
              (u.removeEvent = function (e) {
                var n,
                  t = typeof e,
                  o = this._getEvents();
                if ("string" === t) delete o[e];
                else if (e instanceof RegExp)
                  for (n in o) o.hasOwnProperty(n) && e.test(n) && delete o[n];
                else delete this._events;
                return this;
              }),
              (u.removeAllListeners = a("removeEvent")),
              (u.emitEvent = function (e, n) {
                var t,
                  o,
                  i,
                  r,
                  a = this.getListenersAsObject(e);
                for (r in a)
                  if (a.hasOwnProperty(r))
                    for (t = a[r].slice(0), i = 0; i < t.length; i++)
                      !0 === (o = t[i]).once &&
                        this.removeListener(e, o.listener),
                        o.listener.apply(this, n || []) ===
                          this._getOnceReturnValue() &&
                          this.removeListener(e, o.listener);
                return this;
              }),
              (u.trigger = a("emitEvent")),
              (u.emit = function (e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, n);
              }),
              (u.setOnceReturnValue = function (e) {
                return (this._onceReturnValue = e), this;
              }),
              (u._getOnceReturnValue = function () {
                return (
                  !this.hasOwnProperty("_onceReturnValue") ||
                  this._onceReturnValue
                );
              }),
              (u._getEvents = function () {
                return this._events || (this._events = {});
              }),
              (i.noConflict = function () {
                return (n.EventEmitter = l), i;
              }),
              void 0 !==
                (o = function () {
                  return i;
                }.call(n, t, n, e)) && (e.exports = o);
          })("undefined" != typeof window ? window : this || {});
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(t(0));
          (n.default = function (e, n, t) {
            var i = e.appendChild(document.createElement("div"));
            (0, o.default)(i, {
              left: 0,
              width: "calc(" + t.sizing.labelWidth + " - 2%)",
              display: "inline-block",
              "margin-right": "2%",
              verticalAlign: "top",
            });
            var r = i.appendChild(document.createElement("div"));
            return (
              (r.innerHTML = n),
              (0, o.default)(r, {
                color: t.colors.textPrimary,
                display: "inline-block",
                verticalAlign: "sub",
                "min-height": t.sizing.componentHeight,
                "line-height": t.sizing.componentHeight,
              }),
              r
            );
          }),
            (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(t(0));
          (n.default = function (e, n, t, i, r) {
            var a = e.appendChild(document.createElement("input"));
            (a.type = "text"), (a.value = n);
            var s = {
              position: "absolute",
              backgroundColor: t.colors.componentBackground,
              paddingLeft: "1%",
              height: t.sizing.componentHeight,
              width: i,
              display: "inline-block",
              overflow: "hidden",
              border: "none",
              "font-family": "'Hack', monospace",
              "font-size": "11px",
              color: t.colors.textSecondary,
              userSelect: "text",
              cursor: "text",
              lineHeight: t.sizing.componentHeight,
              wordBreak: "break-all",
              "box-sizing": "border-box",
              "-moz-box-sizing": "border-box",
              "-webkit-box-sizing": "border-box",
            };
            return r || (s.right = 0), (0, o.default)(a, s), a;
          }),
            (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e instanceof i;
          }
          function i() {}
          e.exports = {
            makeComposition: function (e, n, t) {
              var o = e.join(" ");
              return Object.create(i.prototype, {
                classNames: {
                  value: Object.freeze(e),
                  configurable: !1,
                  writable: !1,
                  enumerable: !0,
                },
                unscoped: {
                  value: Object.freeze(n),
                  configurable: !1,
                  writable: !1,
                  enumerable: !0,
                },
                className: {
                  value: o,
                  configurable: !1,
                  writable: !1,
                  enumerable: !0,
                },
                selector: {
                  value: e
                    .map(function (e) {
                      return t ? e : "." + e;
                    })
                    .join(", "),
                  configurable: !1,
                  writable: !1,
                  enumerable: !0,
                },
                toString: {
                  value: function () {
                    return o;
                  },
                  configurable: !1,
                  writeable: !1,
                  enumerable: !1,
                },
              });
            },
            isComposition: o,
            ignoreComposition: function (e) {
              return e.reduce(function (e, n) {
                return (
                  o(n) &&
                    n.classNames.forEach(function (t, o) {
                      e[t] = n.unscoped[o];
                    }),
                  e
                );
              }, {});
            },
          };
        },
        function (e, n, t) {
          "use strict";
          var o = /(@\S*keyframes\s*)([^{\s]*)/.source,
            i = /(?!(?:[^*\/]|\*[^\/]|\/[^*])*\*+\/)/.source,
            r = new RegExp(
              /(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/.source + i,
              "g"
            ),
            a = new RegExp(o + i, "g");
          e.exports = { classRegex: r, keyframesRegex: a, ignoreComments: i };
        },
        function (e, n, t) {
          "use strict";
          e.exports = {
            light: {
              name: "Light",
              colors: {
                menuBarBackground: "rgb(227, 227, 227)",
                menuBarText: "rgb(36, 36, 36)",
                panelBackground: "rgb(227, 227, 227)",
                componentBackground: "rgb(204, 204, 204)",
                componentBackgroundHover: "rgb(190, 190, 190)",
                componentForeground: "rgb(105, 105, 105)",
                componentActive: "rgb(36, 36, 36)",
                textPrimary: "rgb(36, 36, 36)",
                textSecondary: "rgb(87, 87, 87)",
                textHover: "rgb(204, 204, 204)",
                textActive: "rgb(204, 204, 204)",
              },
            },
            dark: {
              name: "Dark",
              colors: {
                menuBarBackground: "rgb(35, 35, 35)",
                menuBarText: "rgb(235, 235, 235)",
                panelBackground: "rgb(35, 35, 35)",
                componentBackground: "rgb(54, 54, 54)",
                componentBackgroundHover: "rgb(76, 76, 76)",
                componentForeground: "rgb(112, 112, 112)",
                componentActive: "rgb(202, 202, 202)",
                textPrimary: "rgb(235, 235, 235)",
                textSecondary: "rgb(181, 181, 181)",
                textHover: "rgb(235, 235, 235)",
                textActive: "rgb(54, 54, 54)",
              },
            },
            yorha: {
              name: "YoRHa",
              colors: {
                menuBarBackground: "#CCC8B1",
                menuBarText: "#454138",
                panelBackground: "#CCC8B1",
                componentBackground: "#BAB5A1",
                componentBackgroundHover: "#877F6E",
                componentForeground: "#454138",
                componentActive: "#978F7E",
                textPrimary: "#454138",
                textSecondary: "#454138",
                textHover: "#CCC8B1",
                textActive: "#CCC8B1",
              },
              font: {
                fontFamily: "helvetica, sans-serif",
                fontSize: "14px",
                fontWeight: "100",
              },
            },
          };
        },
        function (e, n, t) {
          !(function (t) {
            "use strict";
            function o(e) {
              return (
                ("number" == typeof e && !isNaN(e)) ||
                (!!(e = (e || "").toString().trim()) && !isNaN(e))
              );
            }
            void 0 !== e && e.exports && (n = e.exports = o), (n.isNumeric = o);
          })();
        },
        function (e, n, t) {
          "use strict";
          e.exports = " css ";
        },
        function (e, n, t) {
          "use strict";
          e.exports = t(44);
        },
        function (e, n) {
          function t(e, n) {
            if (((n = n || {}), void 0 === e)) throw new Error(r);
            var t,
              a = !0 === n.prepend ? "prepend" : "append",
              s =
                void 0 !== n.container
                  ? n.container
                  : document.querySelector("head"),
              u = o.indexOf(s);
            return (
              -1 === u && ((u = o.push(s) - 1), (i[u] = {})),
              void 0 !== i[u] && void 0 !== i[u][a]
                ? (t = i[u][a])
                : ((t = i[u][a] =
                    (function () {
                      var e = document.createElement("style");
                      return e.setAttribute("type", "text/css"), e;
                    })()),
                  "prepend" === a
                    ? s.insertBefore(t, s.childNodes[0])
                    : s.appendChild(t)),
              65279 === e.charCodeAt(0) && (e = e.substr(1, e.length)),
              t.styleSheet ? (t.styleSheet.cssText += e) : (t.textContent += e),
              t
            );
          }
          var o = [],
            i = [],
            r =
              "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
          (e.exports = t), (e.exports.insertCss = t);
        },
        function (e, n, t) {
          var o;
          !(function (i) {
            function r(e, n) {
              if (((n = n || {}), (e = e || "") instanceof r)) return e;
              if (!(this instanceof r)) return new r(e, n);
              var t = (function (e) {
                var n = { r: 0, g: 0, b: 0 },
                  t = 1,
                  o = null,
                  i = null,
                  r = null,
                  a = !1,
                  s = !1;
                return (
                  "string" == typeof e &&
                    (e = (function (e) {
                      e = e.replace(L, "").replace(P, "").toLowerCase();
                      var n,
                        t = !1;
                      if (U[e]) (e = U[e]), (t = !0);
                      else if ("transparent" == e)
                        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
                      return (n = $.rgb.exec(e))
                        ? { r: n[1], g: n[2], b: n[3] }
                        : (n = $.rgba.exec(e))
                        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
                        : (n = $.hsl.exec(e))
                        ? { h: n[1], s: n[2], l: n[3] }
                        : (n = $.hsla.exec(e))
                        ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                        : (n = $.hsv.exec(e))
                        ? { h: n[1], s: n[2], v: n[3] }
                        : (n = $.hsva.exec(e))
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : (n = $.hex8.exec(e))
                        ? {
                            r: M(n[1]),
                            g: M(n[2]),
                            b: M(n[3]),
                            a: H(n[4]),
                            format: t ? "name" : "hex8",
                          }
                        : (n = $.hex6.exec(e))
                        ? {
                            r: M(n[1]),
                            g: M(n[2]),
                            b: M(n[3]),
                            format: t ? "name" : "hex",
                          }
                        : (n = $.hex4.exec(e))
                        ? {
                            r: M(n[1] + "" + n[1]),
                            g: M(n[2] + "" + n[2]),
                            b: M(n[3] + "" + n[3]),
                            a: H(n[4] + "" + n[4]),
                            format: t ? "name" : "hex8",
                          }
                        : !!(n = $.hex3.exec(e)) && {
                            r: M(n[1] + "" + n[1]),
                            g: M(n[2] + "" + n[2]),
                            b: M(n[3] + "" + n[3]),
                            format: t ? "name" : "hex",
                          };
                    })(e)),
                  "object" == typeof e &&
                    (A(e.r) && A(e.g) && A(e.b)
                      ? ((n = (function (e, n, t) {
                          return {
                            r: 255 * z(e, 255),
                            g: 255 * z(n, 255),
                            b: 255 * z(t, 255),
                          };
                        })(e.r, e.g, e.b)),
                        (a = !0),
                        (s = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
                      : A(e.h) && A(e.s) && A(e.v)
                      ? ((o = C(e.s)),
                        (i = C(e.v)),
                        (n = u(e.h, o, i)),
                        (a = !0),
                        (s = "hsv"))
                      : A(e.h) &&
                        A(e.s) &&
                        A(e.l) &&
                        ((o = C(e.s)),
                        (r = C(e.l)),
                        (n = (function (e, n, t) {
                          function o(e, n, t) {
                            return (
                              t < 0 && (t += 1),
                              t > 1 && (t -= 1),
                              t < 1 / 6
                                ? e + 6 * (n - e) * t
                                : t < 0.5
                                ? n
                                : t < 2 / 3
                                ? e + (n - e) * (2 / 3 - t) * 6
                                : e
                            );
                          }
                          var i, r, a;
                          if (
                            ((e = z(e, 360)),
                            (n = z(n, 100)),
                            (t = z(t, 100)),
                            0 === n)
                          )
                            i = r = a = t;
                          else {
                            var s = t < 0.5 ? t * (1 + n) : t + n - t * n,
                              u = 2 * t - s;
                            (i = o(u, s, e + 1 / 3)),
                              (r = o(u, s, e)),
                              (a = o(u, s, e - 1 / 3));
                          }
                          return { r: 255 * i, g: 255 * r, b: 255 * a };
                        })(e.h, o, r)),
                        (a = !0),
                        (s = "hsl")),
                    e.hasOwnProperty("a") && (t = e.a)),
                  (t = S(t)),
                  {
                    ok: a,
                    format: e.format || s,
                    r: R(255, B(n.r, 0)),
                    g: R(255, B(n.g, 0)),
                    b: R(255, B(n.b, 0)),
                    a: t,
                  }
                );
              })(e);
              (this._originalInput = e),
                (this._r = t.r),
                (this._g = t.g),
                (this._b = t.b),
                (this._a = t.a),
                (this._roundA = T(100 * this._a) / 100),
                (this._format = n.format || t.format),
                (this._gradientType = n.gradientType),
                this._r < 1 && (this._r = T(this._r)),
                this._g < 1 && (this._g = T(this._g)),
                this._b < 1 && (this._b = T(this._b)),
                (this._ok = t.ok),
                (this._tc_id = F++);
            }
            function a(e, n, t) {
              (e = z(e, 255)), (n = z(n, 255)), (t = z(t, 255));
              var o,
                i,
                r = B(e, n, t),
                a = R(e, n, t),
                s = (r + a) / 2;
              if (r == a) o = i = 0;
              else {
                var u = r - a;
                switch (((i = s > 0.5 ? u / (2 - r - a) : u / (r + a)), r)) {
                  case e:
                    o = (n - t) / u + (n < t ? 6 : 0);
                    break;
                  case n:
                    o = (t - e) / u + 2;
                    break;
                  case t:
                    o = (e - n) / u + 4;
                }
                o /= 6;
              }
              return { h: o, s: i, l: s };
            }
            function s(e, n, t) {
              (e = z(e, 255)), (n = z(n, 255)), (t = z(t, 255));
              var o,
                i,
                r = B(e, n, t),
                a = R(e, n, t),
                s = r,
                u = r - a;
              if (((i = 0 === r ? 0 : u / r), r == a)) o = 0;
              else {
                switch (r) {
                  case e:
                    o = (n - t) / u + (n < t ? 6 : 0);
                    break;
                  case n:
                    o = (t - e) / u + 2;
                    break;
                  case t:
                    o = (e - n) / u + 4;
                }
                o /= 6;
              }
              return { h: o, s: i, v: s };
            }
            function u(e, n, t) {
              (e = 6 * z(e, 360)), (n = z(n, 100)), (t = z(t, 100));
              var o = i.floor(e),
                r = e - o,
                a = t * (1 - n),
                s = t * (1 - r * n),
                u = t * (1 - (1 - r) * n),
                l = o % 6;
              return {
                r: 255 * [t, s, a, a, u, t][l],
                g: 255 * [u, t, t, s, a, a][l],
                b: 255 * [a, a, u, t, t, s][l],
              };
            }
            function l(e, n, t, o) {
              var i = [
                j(T(e).toString(16)),
                j(T(n).toString(16)),
                j(T(t).toString(16)),
              ];
              return o &&
                i[0].charAt(0) == i[0].charAt(1) &&
                i[1].charAt(0) == i[1].charAt(1) &&
                i[2].charAt(0) == i[2].charAt(1)
                ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
                : i.join("");
            }
            function c(e, n, t, o) {
              return [
                j(O(o)),
                j(T(e).toString(16)),
                j(T(n).toString(16)),
                j(T(t).toString(16)),
              ].join("");
            }
            function f(e, n) {
              n = 0 === n ? 0 : n || 10;
              var t = r(e).toHsl();
              return (t.s -= n / 100), (t.s = E(t.s)), r(t);
            }
            function p(e, n) {
              n = 0 === n ? 0 : n || 10;
              var t = r(e).toHsl();
              return (t.s += n / 100), (t.s = E(t.s)), r(t);
            }
            function h(e) {
              return r(e).desaturate(100);
            }
            function d(e, n) {
              n = 0 === n ? 0 : n || 10;
              var t = r(e).toHsl();
              return (t.l += n / 100), (t.l = E(t.l)), r(t);
            }
            function g(e, n) {
              n = 0 === n ? 0 : n || 10;
              var t = r(e).toRgb();
              return (
                (t.r = B(0, R(255, t.r - T((-n / 100) * 255)))),
                (t.g = B(0, R(255, t.g - T((-n / 100) * 255)))),
                (t.b = B(0, R(255, t.b - T((-n / 100) * 255)))),
                r(t)
              );
            }
            function b(e, n) {
              n = 0 === n ? 0 : n || 10;
              var t = r(e).toHsl();
              return (t.l -= n / 100), (t.l = E(t.l)), r(t);
            }
            function m(e, n) {
              var t = r(e).toHsl(),
                o = (t.h + n) % 360;
              return (t.h = o < 0 ? 360 + o : o), r(t);
            }
            function y(e) {
              var n = r(e).toHsl();
              return (n.h = (n.h + 180) % 360), r(n);
            }
            function v(e) {
              var n = r(e).toHsl(),
                t = n.h;
              return [
                r(e),
                r({ h: (t + 120) % 360, s: n.s, l: n.l }),
                r({ h: (t + 240) % 360, s: n.s, l: n.l }),
              ];
            }
            function x(e) {
              var n = r(e).toHsl(),
                t = n.h;
              return [
                r(e),
                r({ h: (t + 90) % 360, s: n.s, l: n.l }),
                r({ h: (t + 180) % 360, s: n.s, l: n.l }),
                r({ h: (t + 270) % 360, s: n.s, l: n.l }),
              ];
            }
            function w(e) {
              var n = r(e).toHsl(),
                t = n.h;
              return [
                r(e),
                r({ h: (t + 72) % 360, s: n.s, l: n.l }),
                r({ h: (t + 216) % 360, s: n.s, l: n.l }),
              ];
            }
            function k(e, n, t) {
              (n = n || 6), (t = t || 30);
              var o = r(e).toHsl(),
                i = 360 / t,
                a = [r(e)];
              for (o.h = (o.h - ((i * n) >> 1) + 720) % 360; --n; )
                (o.h = (o.h + i) % 360), a.push(r(o));
              return a;
            }
            function _(e, n) {
              n = n || 6;
              for (
                var t = r(e).toHsv(),
                  o = t.h,
                  i = t.s,
                  a = t.v,
                  s = [],
                  u = 1 / n;
                n--;

              )
                s.push(r({ h: o, s: i, v: a })), (a = (a + u) % 1);
              return s;
            }
            function S(e) {
              return (
                (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
              );
            }
            function z(e, n) {
              (function (e) {
                return (
                  "string" == typeof e &&
                  -1 != e.indexOf(".") &&
                  1 === parseFloat(e)
                );
              })(e) && (e = "100%");
              var t = (function (e) {
                return "string" == typeof e && -1 != e.indexOf("%");
              })(e);
              return (
                (e = R(n, B(0, parseFloat(e)))),
                t && (e = parseInt(e * n, 10) / 100),
                i.abs(e - n) < 1e-6 ? 1 : (e % n) / parseFloat(n)
              );
            }
            function E(e) {
              return R(1, B(0, e));
            }
            function M(e) {
              return parseInt(e, 16);
            }
            function j(e) {
              return 1 == e.length ? "0" + e : "" + e;
            }
            function C(e) {
              return e <= 1 && (e = 100 * e + "%"), e;
            }
            function O(e) {
              return i.round(255 * parseFloat(e)).toString(16);
            }
            function H(e) {
              return M(e) / 255;
            }
            function A(e) {
              return !!$.CSS_UNIT.exec(e);
            }
            var L = /^\s+/,
              P = /\s+$/,
              F = 0,
              T = i.round,
              R = i.min,
              B = i.max,
              V = i.random;
            (r.prototype = {
              isDark: function () {
                return this.getBrightness() < 128;
              },
              isLight: function () {
                return !this.isDark();
              },
              isValid: function () {
                return this._ok;
              },
              getOriginalInput: function () {
                return this._originalInput;
              },
              getFormat: function () {
                return this._format;
              },
              getAlpha: function () {
                return this._a;
              },
              getBrightness: function () {
                var e = this.toRgb();
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
              },
              getLuminance: function () {
                var e,
                  n,
                  t,
                  o = this.toRgb();
                return (
                  (e = o.r / 255),
                  (n = o.g / 255),
                  (t = o.b / 255),
                  0.2126 *
                    (e <= 0.03928
                      ? e / 12.92
                      : i.pow((e + 0.055) / 1.055, 2.4)) +
                    0.7152 *
                      (n <= 0.03928
                        ? n / 12.92
                        : i.pow((n + 0.055) / 1.055, 2.4)) +
                    0.0722 *
                      (t <= 0.03928
                        ? t / 12.92
                        : i.pow((t + 0.055) / 1.055, 2.4))
                );
              },
              setAlpha: function (e) {
                return (
                  (this._a = S(e)),
                  (this._roundA = T(100 * this._a) / 100),
                  this
                );
              },
              toHsv: function () {
                var e = s(this._r, this._g, this._b);
                return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
              },
              toHsvString: function () {
                var e = s(this._r, this._g, this._b),
                  n = T(360 * e.h),
                  t = T(100 * e.s),
                  o = T(100 * e.v);
                return 1 == this._a
                  ? "hsv(" + n + ", " + t + "%, " + o + "%)"
                  : "hsva(" +
                      n +
                      ", " +
                      t +
                      "%, " +
                      o +
                      "%, " +
                      this._roundA +
                      ")";
              },
              toHsl: function () {
                var e = a(this._r, this._g, this._b);
                return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
              },
              toHslString: function () {
                var e = a(this._r, this._g, this._b),
                  n = T(360 * e.h),
                  t = T(100 * e.s),
                  o = T(100 * e.l);
                return 1 == this._a
                  ? "hsl(" + n + ", " + t + "%, " + o + "%)"
                  : "hsla(" +
                      n +
                      ", " +
                      t +
                      "%, " +
                      o +
                      "%, " +
                      this._roundA +
                      ")";
              },
              toHex: function (e) {
                return l(this._r, this._g, this._b, e);
              },
              toHexString: function (e) {
                return "#" + this.toHex(e);
              },
              toHex8: function (e) {
                return (function (e, n, t, o, i) {
                  var r = [
                    j(T(e).toString(16)),
                    j(T(n).toString(16)),
                    j(T(t).toString(16)),
                    j(O(o)),
                  ];
                  return i &&
                    r[0].charAt(0) == r[0].charAt(1) &&
                    r[1].charAt(0) == r[1].charAt(1) &&
                    r[2].charAt(0) == r[2].charAt(1) &&
                    r[3].charAt(0) == r[3].charAt(1)
                    ? r[0].charAt(0) +
                        r[1].charAt(0) +
                        r[2].charAt(0) +
                        r[3].charAt(0)
                    : r.join("");
                })(this._r, this._g, this._b, this._a, e);
              },
              toHex8String: function (e) {
                return "#" + this.toHex8(e);
              },
              toRgb: function () {
                return {
                  r: T(this._r),
                  g: T(this._g),
                  b: T(this._b),
                  a: this._a,
                };
              },
              toRgbString: function () {
                return 1 == this._a
                  ? "rgb(" +
                      T(this._r) +
                      ", " +
                      T(this._g) +
                      ", " +
                      T(this._b) +
                      ")"
                  : "rgba(" +
                      T(this._r) +
                      ", " +
                      T(this._g) +
                      ", " +
                      T(this._b) +
                      ", " +
                      this._roundA +
                      ")";
              },
              toPercentageRgb: function () {
                return {
                  r: T(100 * z(this._r, 255)) + "%",
                  g: T(100 * z(this._g, 255)) + "%",
                  b: T(100 * z(this._b, 255)) + "%",
                  a: this._a,
                };
              },
              toPercentageRgbString: function () {
                return 1 == this._a
                  ? "rgb(" +
                      T(100 * z(this._r, 255)) +
                      "%, " +
                      T(100 * z(this._g, 255)) +
                      "%, " +
                      T(100 * z(this._b, 255)) +
                      "%)"
                  : "rgba(" +
                      T(100 * z(this._r, 255)) +
                      "%, " +
                      T(100 * z(this._g, 255)) +
                      "%, " +
                      T(100 * z(this._b, 255)) +
                      "%, " +
                      this._roundA +
                      ")";
              },
              toName: function () {
                return 0 === this._a
                  ? "transparent"
                  : !(this._a < 1) &&
                      (N[l(this._r, this._g, this._b, !0)] || !1);
              },
              toFilter: function (e) {
                var n = "#" + c(this._r, this._g, this._b, this._a),
                  t = n,
                  o = this._gradientType ? "GradientType = 1, " : "";
                if (e) {
                  var i = r(e);
                  t = "#" + c(i._r, i._g, i._b, i._a);
                }
                return (
                  "progid:DXImageTransform.Microsoft.gradient(" +
                  o +
                  "startColorstr=" +
                  n +
                  ",endColorstr=" +
                  t +
                  ")"
                );
              },
              toString: function (e) {
                var n = !!e;
                e = e || this._format;
                var t = !1,
                  o = this._a < 1 && this._a >= 0;
                return n ||
                  !o ||
                  ("hex" !== e &&
                    "hex6" !== e &&
                    "hex3" !== e &&
                    "hex4" !== e &&
                    "hex8" !== e &&
                    "name" !== e)
                  ? ("rgb" === e && (t = this.toRgbString()),
                    "prgb" === e && (t = this.toPercentageRgbString()),
                    ("hex" !== e && "hex6" !== e) || (t = this.toHexString()),
                    "hex3" === e && (t = this.toHexString(!0)),
                    "hex4" === e && (t = this.toHex8String(!0)),
                    "hex8" === e && (t = this.toHex8String()),
                    "name" === e && (t = this.toName()),
                    "hsl" === e && (t = this.toHslString()),
                    "hsv" === e && (t = this.toHsvString()),
                    t || this.toHexString())
                  : "name" === e && 0 === this._a
                  ? this.toName()
                  : this.toRgbString();
              },
              clone: function () {
                return r(this.toString());
              },
              _applyModification: function (e, n) {
                var t = e.apply(null, [this].concat([].slice.call(n)));
                return (
                  (this._r = t._r),
                  (this._g = t._g),
                  (this._b = t._b),
                  this.setAlpha(t._a),
                  this
                );
              },
              lighten: function () {
                return this._applyModification(d, arguments);
              },
              brighten: function () {
                return this._applyModification(g, arguments);
              },
              darken: function () {
                return this._applyModification(b, arguments);
              },
              desaturate: function () {
                return this._applyModification(f, arguments);
              },
              saturate: function () {
                return this._applyModification(p, arguments);
              },
              greyscale: function () {
                return this._applyModification(h, arguments);
              },
              spin: function () {
                return this._applyModification(m, arguments);
              },
              _applyCombination: function (e, n) {
                return e.apply(null, [this].concat([].slice.call(n)));
              },
              analogous: function () {
                return this._applyCombination(k, arguments);
              },
              complement: function () {
                return this._applyCombination(y, arguments);
              },
              monochromatic: function () {
                return this._applyCombination(_, arguments);
              },
              splitcomplement: function () {
                return this._applyCombination(w, arguments);
              },
              triad: function () {
                return this._applyCombination(v, arguments);
              },
              tetrad: function () {
                return this._applyCombination(x, arguments);
              },
            }),
              (r.fromRatio = function (e, n) {
                if ("object" == typeof e) {
                  var t = {};
                  for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = "a" === o ? e[o] : C(e[o]));
                  e = t;
                }
                return r(e, n);
              }),
              (r.equals = function (e, n) {
                return !(!e || !n) && r(e).toRgbString() == r(n).toRgbString();
              }),
              (r.random = function () {
                return r.fromRatio({ r: V(), g: V(), b: V() });
              }),
              (r.mix = function (e, n, t) {
                t = 0 === t ? 0 : t || 50;
                var o = r(e).toRgb(),
                  i = r(n).toRgb(),
                  a = t / 100;
                return r({
                  r: (i.r - o.r) * a + o.r,
                  g: (i.g - o.g) * a + o.g,
                  b: (i.b - o.b) * a + o.b,
                  a: (i.a - o.a) * a + o.a,
                });
              }),
              (r.readability = function (e, n) {
                var t = r(e),
                  o = r(n);
                return (
                  (i.max(t.getLuminance(), o.getLuminance()) + 0.05) /
                  (i.min(t.getLuminance(), o.getLuminance()) + 0.05)
                );
              }),
              (r.isReadable = function (e, n, t) {
                var o,
                  i,
                  a = r.readability(e, n);
                switch (
                  ((i = !1),
                  (o = (function (e) {
                    var n, t;
                    return (
                      "AA" !==
                        (n = (
                          (e = e || { level: "AA", size: "small" }).level ||
                          "AA"
                        ).toUpperCase()) &&
                        "AAA" !== n &&
                        (n = "AA"),
                      "small" !== (t = (e.size || "small").toLowerCase()) &&
                        "large" !== t &&
                        (t = "small"),
                      { level: n, size: t }
                    );
                  })(t)),
                  o.level + o.size)
                ) {
                  case "AAsmall":
                  case "AAAlarge":
                    i = a >= 4.5;
                    break;
                  case "AAlarge":
                    i = a >= 3;
                    break;
                  case "AAAsmall":
                    i = a >= 7;
                }
                return i;
              }),
              (r.mostReadable = function (e, n, t) {
                var o,
                  i,
                  a,
                  s,
                  u = null,
                  l = 0;
                (i = (t = t || {}).includeFallbackColors),
                  (a = t.level),
                  (s = t.size);
                for (var c = 0; c < n.length; c++)
                  (o = r.readability(e, n[c])) > l && ((l = o), (u = r(n[c])));
                return r.isReadable(e, u, { level: a, size: s }) || !i
                  ? u
                  : ((t.includeFallbackColors = !1),
                    r.mostReadable(e, ["#fff", "#000"], t));
              });
            var U = (r.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32",
              }),
              N = (r.hexNames = (function (e) {
                var n = {};
                for (var t in e) e.hasOwnProperty(t) && (n[e[t]] = t);
                return n;
              })(U)),
              $ = (function () {
                var e = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                  n =
                    "[\\s|\\(]+(" +
                    e +
                    ")[,|\\s]+(" +
                    e +
                    ")[,|\\s]+(" +
                    e +
                    ")\\s*\\)?",
                  t =
                    "[\\s|\\(]+(" +
                    e +
                    ")[,|\\s]+(" +
                    e +
                    ")[,|\\s]+(" +
                    e +
                    ")[,|\\s]+(" +
                    e +
                    ")\\s*\\)?";
                return {
                  CSS_UNIT: new RegExp(e),
                  rgb: new RegExp("rgb" + n),
                  rgba: new RegExp("rgba" + t),
                  hsl: new RegExp("hsl" + n),
                  hsla: new RegExp("hsla" + t),
                  hsv: new RegExp("hsv" + n),
                  hsva: new RegExp("hsva" + t),
                  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                };
              })();
            void 0 !== e && e.exports
              ? (e.exports = r)
              : void 0 !==
                  (o = function () {
                    return r;
                  }.call(n, t, n, e)) && (e.exports = o);
          })(Math);
        },
        function (e, n) {
          !(function () {
            "use strict";
            var n =
                "undefined" != typeof window && void 0 !== window.document
                  ? window.document
                  : {},
              t = void 0 !== e && e.exports,
              o = (function () {
                for (
                  var e,
                    t = [
                      [
                        "requestFullscreen",
                        "exitFullscreen",
                        "fullscreenElement",
                        "fullscreenEnabled",
                        "fullscreenchange",
                        "fullscreenerror",
                      ],
                      [
                        "webkitRequestFullscreen",
                        "webkitExitFullscreen",
                        "webkitFullscreenElement",
                        "webkitFullscreenEnabled",
                        "webkitfullscreenchange",
                        "webkitfullscreenerror",
                      ],
                      [
                        "webkitRequestFullScreen",
                        "webkitCancelFullScreen",
                        "webkitCurrentFullScreenElement",
                        "webkitCancelFullScreen",
                        "webkitfullscreenchange",
                        "webkitfullscreenerror",
                      ],
                      [
                        "mozRequestFullScreen",
                        "mozCancelFullScreen",
                        "mozFullScreenElement",
                        "mozFullScreenEnabled",
                        "mozfullscreenchange",
                        "mozfullscreenerror",
                      ],
                      [
                        "msRequestFullscreen",
                        "msExitFullscreen",
                        "msFullscreenElement",
                        "msFullscreenEnabled",
                        "MSFullscreenChange",
                        "MSFullscreenError",
                      ],
                    ],
                    o = 0,
                    i = t.length,
                    r = {};
                  o < i;
                  o++
                )
                  if ((e = t[o]) && e[1] in n) {
                    for (o = 0; o < e.length; o++) r[t[0][o]] = e[o];
                    return r;
                  }
                return !1;
              })(),
              i = { change: o.fullscreenchange, error: o.fullscreenerror },
              r = {
                request: function (e) {
                  return new Promise(
                    function (t, i) {
                      var r = function () {
                        this.off("change", r), t();
                      }.bind(this);
                      this.on("change", r),
                        (e = e || n.documentElement),
                        Promise.resolve(e[o.requestFullscreen]()).catch(i);
                    }.bind(this)
                  );
                },
                exit: function () {
                  return new Promise(
                    function (e, t) {
                      if (this.isFullscreen) {
                        var i = function () {
                          this.off("change", i), e();
                        }.bind(this);
                        this.on("change", i),
                          Promise.resolve(n[o.exitFullscreen]()).catch(t);
                      } else e();
                    }.bind(this)
                  );
                },
                toggle: function (e) {
                  return this.isFullscreen ? this.exit() : this.request(e);
                },
                onchange: function (e) {
                  this.on("change", e);
                },
                onerror: function (e) {
                  this.on("error", e);
                },
                on: function (e, t) {
                  var o = i[e];
                  o && n.addEventListener(o, t, !1);
                },
                off: function (e, t) {
                  var o = i[e];
                  o && n.removeEventListener(o, t, !1);
                },
                raw: o,
              };
            o
              ? (Object.defineProperties(r, {
                  isFullscreen: {
                    get: function () {
                      return Boolean(n[o.fullscreenElement]);
                    },
                  },
                  element: {
                    enumerable: !0,
                    get: function () {
                      return n[o.fullscreenElement];
                    },
                  },
                  isEnabled: {
                    enumerable: !0,
                    get: function () {
                      return Boolean(n[o.fullscreenEnabled]);
                    },
                  },
                }),
                t ? (e.exports = r) : (window.screenfull = r))
              : t
              ? (e.exports = { isEnabled: !1 })
              : (window.screenfull = { isEnabled: !1 });
          })();
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(t(17));
          (n.default = o.default), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            r = o(t(0)),
            a = o(t(23)),
            s = o(t(9)),
            u = t(1),
            l = t(24),
            c = t(72),
            f = t(74),
            p = t(77),
            h = o(t(15)),
            d = t(79),
            g = (function () {
              function e(n) {
                (function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.opts = n),
                  (this.hasRoot = void 0 !== n.root),
                  (n.width = n.width || 300),
                  (n.root = n.root || document.body),
                  (n.align = n.align || "left"),
                  (n.opacity = n.opacity || 1),
                  (n.barMode = n.barMode || "offset"),
                  (n.panelMode = n.panelMode || "inner"),
                  (n.pollRateMS = n.pollRateMS || 100),
                  (n.open = n.open || !1);
                var t = n.theme;
                void 0 === n.theme && (t = s.default.dark),
                  (0, a.default)(n.theme) &&
                    (void 0 === s.default[n.theme]
                      ? (console.error(
                          "There is no theme preset with the name '" +
                            n.theme +
                            "'! Defaulting to dark theme."
                        ),
                        (t = s.default.dark))
                      : (t = s.default[n.theme])),
                  u.theme.Set(t),
                  this._ConstructElements(),
                  this._LoadStyles(),
                  (this.componentManager = new l.ComponentManager()),
                  (this.loadedComponents = []),
                  this._UpdateComponents();
              }
              return (
                i(e, [
                  {
                    key: "_LoadStyles",
                    value: function () {
                      var e = function (e) {
                        var n = document.createElement("style");
                        n.setAttribute("type", "text/css"),
                          n.setAttribute("rel", "stylesheet"),
                          n.setAttribute("href", e),
                          document
                            .getElementsByTagName("head")[0]
                            .appendChild(n);
                      };
                      e("//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css"),
                        u.theme.font
                          ? (u.theme.font.fontURL && e(u.theme.font.fontURL),
                            u.theme.font.fontFamily &&
                              (0, r.default)(
                                this.container,
                                "font-family",
                                u.theme.font.fontFamily
                              ),
                            u.theme.font.fontSize &&
                              (0, r.default)(
                                this.container,
                                "font-size",
                                u.theme.font.fontSize
                              ),
                            u.theme.font.fontWeight &&
                              (0, r.default)(
                                this.container,
                                "font-weight",
                                u.theme.font.fontWeight
                              ))
                          : (0, r.default)(
                              this.container,
                              "font-family",
                              "'Hack', monospace"
                            );
                    },
                  },
                  {
                    key: "_ConstructElements",
                    value: function () {
                      var e = this;
                      (this.container = document.createElement("div")),
                        this.container.classList.add(d["guichanxy-container"]);
                      var n = {};
                      ("overlay" != this.opts.barMode &&
                        "above" != this.opts.barMode &&
                        "none" != this.opts.barMode) ||
                        (n.position = "absolute"),
                        this.hasRoot &&
                          "above" == this.opts.barMode &&
                          (n.top = "-" + u.theme.sizing.menuBarHeight),
                        (0, r.default)(this.container, n),
                        this.opts.root.insertBefore(
                          this.container,
                          this.opts.root.childNodes[0]
                        ),
                        "none" !== this.opts.barMode &&
                          ((this.bar = new c.MenuBar(
                            this.container,
                            this.opts
                          )),
                          this.bar.addListener("ontogglepanel", function () {
                            e.panel.ToggleVisible();
                          }),
                          this.bar.addListener(
                            "onfullscreenrequested",
                            function () {
                              e.ToggleFullscreen();
                            }
                          )),
                        (this.panel = new f.Panel(this.container, this.opts)),
                        "none" === this.opts.barMode || !0 === this.opts.open
                          ? this.panel.SetVisible(!0)
                          : this.panel.SetVisible(!1),
                        (this.toaster = new p.ToastArea(
                          this.container,
                          this.opts
                        ));
                    },
                  },
                  {
                    key: "_UpdateComponents",
                    value: function () {
                      var e = this;
                      this.loadedComponents.forEach(function (e) {
                        e.binding &&
                          e.binding.object[e.binding.property] != e.oldValue &&
                          (e.SetValue(e.binding.object[e.binding.property]),
                          (e.oldValue = e.binding.object[e.binding.property]));
                      }),
                        setTimeout(function () {
                          window.requestAnimationFrame(function () {
                            e._UpdateComponents();
                          });
                        }, this.opts.pollRateMS);
                    },
                  },
                  {
                    key: "Register",
                    value: function (e) {
                      var n = this,
                        t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                      if (!Array.isArray(e)) {
                        var o = Object.assign(e, t);
                        return this._Register(o);
                      }
                      e.forEach(function (e) {
                        var o = Object.assign(e, t);
                        n._Register(o);
                      });
                    },
                  },
                  {
                    key: "Remove",
                    value: function (e) {
                      e.Remove(),
                        (this.loadedComponents = this.loadedComponents.filter(
                          function (n) {
                            return n !== e;
                          }
                        ));
                    },
                  },
                  {
                    key: "_Register",
                    value: function (e) {
                      if (
                        e.object &&
                        e.property &&
                        void 0 === e.object[e.property]
                      )
                        throw new Error(
                          "Object " +
                            e.object +
                            " has no property '" +
                            e.property +
                            "'"
                        );
                      e.object &&
                        e.property &&
                        (e.initial = e.object[e.property]);
                      var n = this.panel.panel;
                      if (e.folder) {
                        var t = this.loadedComponents.find(function (n) {
                          return (
                            "folder" === n.opts.type &&
                            n.opts.label === e.folder
                          );
                        });
                        if (!t)
                          throw new Error(
                            "No folder exists with the name " + e.folder
                          );
                        n = t.folderContainer;
                      }
                      var o = this.componentManager.Create(n, e);
                      return (
                        e.object &&
                          e.property &&
                          (o.binding = {
                            object: e.object,
                            property: e.property,
                          }),
                        o.on &&
                          (o.on("initialized", function (n) {
                            e.onInitialize && e.onInitialize(n);
                          }),
                          o.on("input", function (n) {
                            e.object &&
                              e.property &&
                              (e.object[e.property] = n),
                              e.onChange && e.onChange(n);
                          })),
                        this.loadedComponents.push(o),
                        o
                      );
                    },
                  },
                  {
                    key: "Toast",
                    value: function (e) {
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 5e3,
                        t =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0;
                      this.toaster.CreateToast(e, n, t);
                    },
                  },
                  {
                    key: "ToggleFullscreen",
                    value: function () {
                      h.default.isFullscreen
                        ? h.default.exit()
                        : (console.log("Request fullscreen"),
                          h.default.request(this.opts.root));
                    },
                  },
                ]),
                e
              );
            })();
          (n.default = g), (e.exports = n.default);
        },
        function (e, n) {
          var t = null,
            o = ["Webkit", "Moz", "O", "ms"];
          e.exports = function (e) {
            t || (t = document.createElement("div"));
            var n = t.style;
            if (e in n) return e;
            for (
              var i = e.charAt(0).toUpperCase() + e.slice(1), r = o.length;
              r >= 0;
              r--
            ) {
              var a = o[r] + i;
              if (a in n) return a;
            }
            return !1;
          };
        },
        function (e, n, t) {
          var o = t(20);
          e.exports = function (e) {
            return o(e).replace(/\s(\w)/g, function (e, n) {
              return n.toUpperCase();
            });
          };
        },
        function (e, n, t) {
          var o = t(21);
          e.exports = function (e) {
            return o(e)
              .replace(/[\W_]+(.|$)/g, function (e, n) {
                return n ? " " + n : "";
              })
              .trim();
          };
        },
        function (e, n) {
          e.exports = function (e) {
            return t.test(e)
              ? e.toLowerCase()
              : o.test(e)
              ? (
                  (function (e) {
                    return e.replace(r, function (e, n) {
                      return n ? " " + n : "";
                    });
                  })(e) || e
                ).toLowerCase()
              : i.test(e)
              ? (function (e) {
                  return e.replace(a, function (e, n, t) {
                    return n + " " + t.toLowerCase().split("").join(" ");
                  });
                })(e).toLowerCase()
              : e.toLowerCase();
          };
          var t = /\s/,
            o = /(_|-|\.|:)/,
            i = /([a-z][A-Z]|[A-Z][a-z])/,
            r = /[\W_]+(.|$)/g,
            a = /(.)([A-Z]+)/g;
        },
        function (e, n) {
          var t = {
            animationIterationCount: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            stopOpacity: !0,
            strokeDashoffset: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          };
          e.exports = function (e, n) {
            return "number" != typeof n || t[e] ? n : n + "px";
          };
        },
        function (e, n, t) {
          "use strict";
          var o = String.prototype.valueOf,
            i = Object.prototype.toString,
            r =
              "function" == typeof Symbol &&
              "symbol" == typeof Symbol.toStringTag;
          e.exports = function (e) {
            return (
              "string" == typeof e ||
              ("object" == typeof e &&
                (r
                  ? (function (e) {
                      try {
                        return o.call(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    })(e)
                  : "[object String]" === i.call(e)))
            );
          };
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.ComponentManager = void 0);
          var o = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            i = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(t(25)),
            r = t(1);
          n.ComponentManager = (function () {
            function e() {
              (function (e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.uuid = (0, i.default)()),
                (this.components = {
                  title: t(28),
                  range: t(29),
                  button: t(46),
                  checkbox: t(48),
                  select: t(50),
                  text: t(52),
                  color: t(53),
                  folder: t(65),
                  file: t(67),
                  display: t(69),
                  interval: t(70),
                });
            }
            return (
              o(e, [
                {
                  key: "Create",
                  value: function (e, n) {
                    if (void 0 === this.components[n.type])
                      throw new Error(
                        "No component type named '" + n.type + "' exists."
                      );
                    var t = new this.components[n.type](
                      e,
                      n,
                      r.theme,
                      this.uuid
                    );
                    return (
                      Object.assign(t, {
                        Remove: function () {
                          this.container.parentNode.removeChild(this.container);
                        },
                      }),
                      t
                    );
                  },
                },
              ]),
              e
            );
          })();
        },
        function (e, n, t) {
          var o = t(26),
            i = t(27);
          e.exports = function (e, n, t) {
            var r = (n && t) || 0;
            "string" == typeof e &&
              ((n = "binary" === e ? new Array(16) : null), (e = null));
            var a = (e = e || {}).random || (e.rng || o)();
            if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), n))
              for (var s = 0; s < 16; ++s) n[r + s] = a[s];
            return n || i(a);
          };
        },
        function (e, n) {
          var t =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof window.msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto));
          if (t) {
            var o = new Uint8Array(16);
            e.exports = function () {
              return t(o), o;
            };
          } else {
            var i = new Array(16);
            e.exports = function () {
              for (var e, n = 0; n < 16; n++)
                0 == (3 & n) && (e = 4294967296 * Math.random()),
                  (i[n] = (e >>> ((3 & n) << 3)) & 255);
              return i;
            };
          }
        },
        function (e, n) {
          for (var t = [], o = 0; o < 256; ++o)
            t[o] = (o + 256).toString(16).substr(1);
          e.exports = function (e, n) {
            var o = n || 0,
              i = t;
            return [
              i[e[o++]],
              i[e[o++]],
              i[e[o++]],
              i[e[o++]],
              "-",
              i[e[o++]],
              i[e[o++]],
              "-",
              i[e[o++]],
              i[e[o++]],
              "-",
              i[e[o++]],
              i[e[o++]],
              "-",
              i[e[o++]],
              i[e[o++]],
              i[e[o++]],
              i[e[o++]],
              i[e[o++]],
              i[e[o++]],
            ].join("");
          };
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(t(0));
          (n.default = function e(n, i, r) {
            (function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.opts = i),
              (this.container = t(2)(n, i.label, r)),
              (0, o.default)(this.container, {});
            var a = this.container.appendChild(document.createElement("div"));
            (0, o.default)(a, {
              "box-sizing": "border-box",
              width: "100%",
              display: "inline-block",
              height: r.sizing.componentHeight,
              verticalAlign: "top",
            });
            var s = a.appendChild(document.createElement("div"));
            (s.innerHTML = "&#9632; " + i.label + " &#9632;"),
              (0, o.default)(s, {
                display: "inline-block",
                verticalAlign: "sub",
                height: r.sizing.componentHeight,
                "line-height": r.sizing.componentHeight,
                "padding-left": "5px",
                "padding-right": "5px",
                "background-color": r.colors.textPrimary,
                color: r.colors.panelBackground,
              });
          }),
            (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            r = o(t(4)),
            a = o(t(0)),
            s = o(t(10)),
            u = t(30),
            l = (function (e) {
              function n(e, o, i, r) {
                !(function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                var l = (function (e, n) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !n || ("object" != typeof n && "function" != typeof n)
                    ? e
                    : n;
                })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                if (
                  ((l.opts = o),
                  (l.container = t(2)(e, o.label, i)),
                  t(5)(l.container, o.label, i),
                  o.step && o.steps)
                )
                  throw new Error(
                    "Cannot specify both step and steps. Got step = " +
                      o.step +
                      ", steps = ",
                    o.steps
                  );
                if (
                  ((l.input = l.container.appendChild(
                    document.createElement("input")
                  )),
                  (l.input.type = "range"),
                  (l.input.className = u["guichanxy-range"]),
                  o.label &&
                    l.input.setAttribute("aria-label", o.label + " input"),
                  "log" === o.scale)
                ) {
                  if (
                    ((o.max = (0, s.default)(o.max) ? o.max : 100),
                    (o.min = (0, s.default)(o.min) ? o.min : 0.1),
                    o.min * o.max <= 0)
                  )
                    throw new Error(
                      "Log range min/max must have the same sign and not equal zero. Got min = " +
                        o.min +
                        ", max = " +
                        o.max
                    );
                  if (
                    ((l.logmin = o.min),
                    (l.logmax = o.max),
                    (l.logsign = o.min > 0 ? 1 : -1),
                    (l.logmin = Math.abs(l.logmin)),
                    (l.logmax = Math.abs(l.logmax)),
                    (o.min = 0),
                    (o.max = 100),
                    (0, s.default)(o.step))
                  )
                    throw new Error(
                      "Log may only use steps (integer number of steps), not a step value. Got step =" +
                        o.step
                    );
                  if (
                    ((o.step = 1),
                    (o.initial = l.InverseScaleValue(
                      (0, s.default)(o.initial)
                        ? o.initial
                        : scaleValue(0.5 * (o.min + o.max))
                    )),
                    o.initial * l.InverseScaleValue(o.max) <= 0)
                  )
                    throw new Error(
                      "Log range initial value must have the same sign as min/max and must not equal zero. Got initial value = " +
                        o.initial
                    );
                } else
                  (o.max = (0, s.default)(o.max) ? o.max : 100),
                    (o.min = (0, s.default)(o.min) ? o.min : 0),
                    (o.step = (0, s.default)(o.step) ? o.step : 0.01),
                    (o.initial = (0, s.default)(o.initial)
                      ? o.initial
                      : 0.5 * (o.min + o.max));
                (0, s.default)(o.steps) &&
                  (o.step = (0, s.default)(o.steps)
                    ? (o.max - o.min) / o.steps
                    : o.step);
                var c = Math.round((o.initial - o.min) / o.step);
                return (
                  (o.initial = o.min + o.step * c),
                  (l.input.min = o.min),
                  (l.input.max = o.max),
                  (l.input.step = o.step),
                  (l.input.value = o.initial),
                  (0, a.default)(l.input, {
                    width:
                      "calc(100% - " + i.sizing.labelWidth + " - 16% - 0.5em)",
                  }),
                  (l.valueComponent = t(6)(
                    l.container,
                    l.ScaleValue(o.initial),
                    i,
                    "16%"
                  )),
                  o.label &&
                    l.valueComponent.setAttribute(
                      "aria-label",
                      o.label + " value"
                    ),
                  setTimeout(function () {
                    l.emit("initialized", parseFloat(l.input.value));
                  }),
                  (l.userIsModifying = !1),
                  l.input.addEventListener("focus", function () {
                    l.focused = !0;
                  }),
                  l.input.addEventListener("blur", function () {
                    l.focused = !1;
                  }),
                  l.input.addEventListener("mouseup", function () {
                    l.input.blur();
                  }),
                  (l.input.oninput = function (e) {
                    var n = l.ScaleValue(parseFloat(e.target.value));
                    (l.valueComponent.value = l.FormatNumber(n)),
                      (l.lastValue = n),
                      l.emit("input", n);
                  }),
                  (l.valueComponent.onchange = function () {
                    var e = l.valueComponent.value;
                    if (Number(parseFloat(e)) == e) {
                      var n = parseFloat(e);
                      (n = Math.min(Math.max(n, o.min), o.max)),
                        (n = Math.ceil((n - o.min) / o.step) * o.step + o.min),
                        (l.valueComponent.value = n),
                        l.emit("input", n);
                    } else l.valueComponent.value = l.lastValue;
                  }),
                  l
                );
              }
              return (
                (function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof n
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    n &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, n)
                        : (e.__proto__ = n));
                })(n, e),
                i(n, [
                  {
                    key: "ScaleValue",
                    value: function (e) {
                      return "log" === this.opts.scale
                        ? this.logsign *
                            Math.exp(
                              Math.log(this.logmin) +
                                ((Math.log(this.logmax) -
                                  Math.log(this.logmin)) *
                                  e) /
                                  100
                            )
                        : e;
                    },
                  },
                  {
                    key: "InverseScaleValue",
                    value: function (e) {
                      return "log" === this.opts.scale
                        ? (100 *
                            (Math.log(e * this.logsign) -
                              Math.log(this.logmin))) /
                            (Math.log(this.logmax) - Math.log(this.logmin))
                        : e;
                    },
                  },
                  {
                    key: "SetValue",
                    value: function (e) {
                      !0 !== this.focused &&
                        ((this.valueComponent.value = this.FormatNumber(e)),
                        (this.input.value = this.InverseScaleValue(e)),
                        (this.lastValue = this.input.value));
                    },
                  },
                  {
                    key: "GetValue",
                    value: function () {
                      return this.input.value;
                    },
                  },
                  {
                    key: "FormatNumber",
                    value: function (e) {
                      return e.toFixed(3).replace(/\.?0*$/, "");
                    },
                  },
                ]),
                n
              );
            })(r.default);
          (n.default = l), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n\ninput[type=range].guichanxy-range {\n    -webkit-appearance: none;\n    width: 100%;\n    height: ",
                  ";\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n}\n\n/* Remove outlines since we'll be adding our own */\ninput[type=range].guichanxy-range:focus {\n    outline: none;\n}\ninput[type=range].guichanxy-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].guichanxy-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: ",
                  ";\n    cursor: ew-resize;\n    background: ",
                  ";\n}\ninput[type=range].guichanxy-range::-webkit-slider-thumb {\n    height: ",
                  ";\n    width: 10px;\n    background: ",
                  ";\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n}\ninput[type=range].guichanxy-range:focus::-webkit-slider-runnable-track {\n    background: ",
                  ";\n    outline: none;\n}\n\n/* Gecko */\ninput[type=range].guichanxy-range::-moz-range-track {\n    width: 100%;\n    height: ",
                  ";\n    cursor: ew-resize;\n    background: ",
                  ";\n}\ninput[type=range].guichanxy-range:focus::-moz-range-track {\n    background: ",
                  ";\n}\ninput[type=range].guichanxy-range::-moz-range-thumb {\n    height: ",
                  ";\n    width: 10px;\n    background: ",
                  ";\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n/* IE */\ninput[type=range].guichanxy-range::-ms-track {\n    width: 100%;\n    height: ",
                  ";\n    cursor: ew-resize;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\ninput[type=range].guichanxy-range::-ms-fill-lower {\n    background: ",
                  ";\n}\ninput[type=range].guichanxy-range::-ms-fill-upper {\n    background: ",
                  ";\n}\ninput[type=range].guichanxy-range:focus::-ms-fill-lower {\n    background: ",
                  ";\n}\ninput[type=range].guichanxy-range:focus::-ms-fill-upper {\n    background: ",
                  ";\n}\ninput[type=range].guichanxy-range::-ms-thumb {\n    width: 10px;\n    border-radius: 0px;\n    background: ",
                  ";\n    cursor: ew-resize;\n    height: ",
                  ";\n}\ninput[type=range].guichanxy-range:focus::-ms-fill-lower {\n    background: ",
                  ";\n    outline: none;\n}\ninput[type=range].guichanxy-range:focus::-ms-fill-upper {\n    background: ",
                  ";\n    outline: none;\n}\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n\ninput[type=range].guichanxy-range {\n    -webkit-appearance: none;\n    width: 100%;\n    height: ",
                      ";\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n}\n\n/* Remove outlines since we'll be adding our own */\ninput[type=range].guichanxy-range:focus {\n    outline: none;\n}\ninput[type=range].guichanxy-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].guichanxy-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: ",
                      ";\n    cursor: ew-resize;\n    background: ",
                      ";\n}\ninput[type=range].guichanxy-range::-webkit-slider-thumb {\n    height: ",
                      ";\n    width: 10px;\n    background: ",
                      ";\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n}\ninput[type=range].guichanxy-range:focus::-webkit-slider-runnable-track {\n    background: ",
                      ";\n    outline: none;\n}\n\n/* Gecko */\ninput[type=range].guichanxy-range::-moz-range-track {\n    width: 100%;\n    height: ",
                      ";\n    cursor: ew-resize;\n    background: ",
                      ";\n}\ninput[type=range].guichanxy-range:focus::-moz-range-track {\n    background: ",
                      ";\n}\ninput[type=range].guichanxy-range::-moz-range-thumb {\n    height: ",
                      ";\n    width: 10px;\n    background: ",
                      ";\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n/* IE */\ninput[type=range].guichanxy-range::-ms-track {\n    width: 100%;\n    height: ",
                      ";\n    cursor: ew-resize;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\ninput[type=range].guichanxy-range::-ms-fill-lower {\n    background: ",
                      ";\n}\ninput[type=range].guichanxy-range::-ms-fill-upper {\n    background: ",
                      ";\n}\ninput[type=range].guichanxy-range:focus::-ms-fill-lower {\n    background: ",
                      ";\n}\ninput[type=range].guichanxy-range:focus::-ms-fill-upper {\n    background: ",
                      ";\n}\ninput[type=range].guichanxy-range::-ms-thumb {\n    width: 10px;\n    border-radius: 0px;\n    background: ",
                      ";\n    cursor: ew-resize;\n    height: ",
                      ";\n}\ninput[type=range].guichanxy-range:focus::-ms-fill-lower {\n    background: ",
                      ";\n    outline: none;\n}\ninput[type=range].guichanxy-range:focus::-ms-fill-upper {\n    background: ",
                      ";\n    outline: none;\n}\n\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3),
            a = i.theme.colors.componentBackground,
            s = i.theme.colors.componentForeground,
            u = i.theme.colors.componentActive;
          e.exports = r(
            o,
            i.theme.sizing.componentHeight,
            i.theme.sizing.componentHeight,
            a,
            i.theme.sizing.componentHeight,
            s,
            u,
            i.theme.sizing.componentHeight,
            a,
            u,
            i.theme.sizing.componentHeight,
            s,
            i.theme.sizing.componentHeight,
            a,
            a,
            u,
            u,
            s,
            i.theme.sizing.componentHeight,
            u,
            u
          );
        },
        function (e, n, t) {
          "use strict";
          (function (n) {
            var o = t(33),
              i = t(13);
            e.exports = function () {
              var e = Array.prototype.slice.call(arguments),
                t = o.apply(null, e);
              return n.document && i(o.getCss(t)), t;
            };
          }).call(n, t(32));
        },
        function (e, n) {
          var t;
          t = (function () {
            return this;
          })();
          try {
            t = t || Function("return this")() || (0, eval)("this");
          } catch (e) {
            "object" == typeof window && (t = window);
          }
          e.exports = t;
        },
        function (e, n, t) {
          "use strict";
          var o = t(34);
          (e.exports = o()),
            (e.exports.csjs = o),
            (e.exports.noScope = o({ noscope: !0 })),
            (e.exports.getCss = t(12));
        },
        function (e, n, t) {
          "use strict";
          e.exports = t(35);
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return s(e) ? e.selector : e;
          }
          function i(e, n) {
            return Object.keys(e).reduce(function (t, o) {
              return n[o] || (t[o] = e[o]), t;
            }, {});
          }
          var r = t(36),
            a = t(7),
            s = a.isComposition,
            u = a.ignoreComposition,
            l = t(37),
            c = t(38),
            f = t(11),
            p = t(43);
          e.exports = function (e) {
            var n = void 0 !== (e = void 0 === e ? {} : e).noscope && e.noscope;
            return function (e, t) {
              t = Array(arguments.length - 1);
              for (var a = 1; a < arguments.length; a++)
                t[a - 1] = arguments[a];
              var s = (function (e, n) {
                  return e
                    .map(function (e, t) {
                      return t !== n.length ? e + n[t] : e;
                    })
                    .join("");
                })(e, t.map(o)),
                h = u(t),
                d = n ? p(s) : c(s, h),
                g = r(d.css),
                b = i(d.classes, h),
                m = i(d.keyframes, h),
                y = g.compositions,
                v = l(b, m, y);
              return Object.defineProperty(v, f, {
                enumerable: !1,
                configurable: !1,
                writeable: !1,
                value: g.css,
              });
            };
          };
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            var n = e.trim();
            return "." === n[0] ? n.substr(1) : n;
          }
          var i =
            (t(7).makeComposition, /\.([^\s]+)(\s+)(extends\s+)(\.[^{]+)/g);
          e.exports = function (e) {
            for (var n, t = []; (n = i.exec(e)); ) t.unshift(n);
            return t.reduce(
              function (e, n) {
                var t = o(n[1]),
                  i = n[3],
                  r = n[4],
                  a = n.index + n[1].length + n[2].length,
                  s = i.length + r.length;
                return (
                  (e.css = e.css.slice(0, a) + " " + e.css.slice(a + s + 1)),
                  (function (e) {
                    return e.split(",").map(o);
                  })(r).forEach(function (n) {
                    e.compositions[t] || (e.compositions[t] = {}),
                      e.compositions[n] || (e.compositions[n] = {}),
                      (e.compositions[t][n] = e.compositions[n]);
                  }),
                  e
                );
              },
              { css: e, compositions: {} }
            );
          };
        },
        function (e, n, t) {
          "use strict";
          var o = t(7).makeComposition;
          e.exports = function (e, n, t) {
            var i = Object.keys(n).reduce(function (e, t) {
              var i = n[t];
              return (e[i] = o([t], [i], !0)), e;
            }, {});
            return Object.keys(e).reduce(function (n, i) {
              var r = e[i],
                a = t[i],
                s = a
                  ? (function (e) {
                      var n = {},
                        t = [];
                      return (
                        (function e(o) {
                          return Object.keys(o).forEach(function (i) {
                            n[i] || ((n[i] = !0), t.push(i), e(o[i]));
                          });
                        })(e),
                        t
                      );
                    })(a)
                  : [],
                u = [i].concat(s),
                l = u.map(function (n) {
                  return e[n] ? e[n] : n;
                });
              return (n[r] = o(u, l)), n;
            }, i);
          };
        },
        function (e, n, t) {
          "use strict";
          var o = t(39),
            i = t(42),
            r = t(8),
            a = r.classRegex,
            s = r.keyframesRegex;
          e.exports = function (e, n) {
            var t = o(e),
              r = { classes: a, keyframes: s },
              u = Object.keys(r).reduce(
                function (e, o) {
                  var i = r[o];
                  return {
                    css: e.css.replace(i, function (i, r, a) {
                      var s = n[a] ? a : t(a);
                      return (e[o][s] = a), r + s;
                    }),
                    keyframes: e.keyframes,
                    classes: e.classes,
                  };
                },
                { css: e, keyframes: {}, classes: {} }
              );
            return i(u);
          };
        },
        function (e, n, t) {
          "use strict";
          var o = t(40),
            i = t(41);
          e.exports = function (e) {
            var n = o(i(e));
            return function (e) {
              return e + "_" + n;
            };
          };
        },
        function (e, n, t) {
          "use strict";
          e.exports = function (e) {
            if (0 === e) return "0";
            for (var n = ""; e > 0; )
              (n =
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
                  e % 62
                ] + n),
                (e = Math.floor(e / 62));
            return n;
          };
        },
        function (e, n, t) {
          "use strict";
          e.exports = function (e) {
            for (var n = 5381, t = e.length; t; )
              n = (33 * n) ^ e.charCodeAt(--t);
            return n >>> 0;
          };
        },
        function (e, n, t) {
          var o = t(8).ignoreComments;
          e.exports = function (e) {
            var n = Object.keys(e.keyframes).reduce(function (n, t) {
                return (n[e.keyframes[t]] = t), n;
              }, {}),
              t = Object.keys(n);
            if (t.length) {
              var i =
                  "((?:animation|animation-name)\\s*:[^};]*)(" +
                  t.join("|") +
                  ")([;\\s])" +
                  o,
                r = new RegExp(i, "g");
              return {
                css: e.css.replace(r, function (e, t, o, i) {
                  return t + n[o] + i;
                }),
                keyframes: e.keyframes,
                classes: e.classes,
              };
            }
            return e;
          };
        },
        function (e, n, t) {
          "use strict";
          function o(e, n) {
            for (var t, o = {}; null !== (t = n.exec(e)); ) {
              var i = t[2];
              o[i] = i;
            }
            return o;
          }
          var i = t(8),
            r = i.classRegex,
            a = i.keyframesRegex;
          e.exports = function (e) {
            return { css: e, keyframes: o(e, a), classes: o(e, r) };
          };
        },
        function (e, n, t) {
          "use strict";
          var o = t(11);
          e.exports = function (e) {
            return e[o];
          };
        },
        function (e, n, t) {
          "use strict";
          e.exports = t(12);
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = o(t(4)),
            r = (o(t(0)), t(47)),
            a = (function (e) {
              function n(e, o, i, a) {
                !(function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                var s = (function (e, n) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !n || ("object" != typeof n && "function" != typeof n)
                    ? e
                    : n;
                })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                (s.opts = o),
                  (s.container = t(2)(e, o.label, i)),
                  t(5)(s.container, "", i);
                var u = s.container.appendChild(
                  document.createElement("button")
                );
                return (
                  (u.className = r["guichanxy-button"]),
                  (u.textContent = o.label),
                  u.addEventListener("click", o.action),
                  u.addEventListener("mouseup", function () {
                    u.blur();
                  }),
                  s
                );
              }
              return (
                (function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof n
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    n &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, n)
                        : (e.__proto__ = n));
                })(n, e),
                n
              );
            })(i.default);
          (n.default = a), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n\n.guichanxy-button {\n    box-sizing: border-box !important;\n    color: ",
                  ";\n    background-color: ",
                  ";\n\n    position: absolute;\n    text-align: center;\n    height: ",
                  ";\n    line-height: ",
                  ";\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - ",
                  ");\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n\n.guichanxy-button:focus {\n    outline:none;\n}\n.guichanxy-button::-moz-focus-inner {\n    border:0;\n}\n\n.guichanxy-button:hover,\n.guichanxy-button:focus {\n    color: ",
                  ";\n    background-color: ",
                  ";\n}\n\n.guichanxy-button:active {\n    color: ",
                  " !important;\n    background-color: ",
                  " !important;\n}\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n\n.guichanxy-button {\n    box-sizing: border-box !important;\n    color: ",
                      ";\n    background-color: ",
                      ";\n\n    position: absolute;\n    text-align: center;\n    height: ",
                      ";\n    line-height: ",
                      ";\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - ",
                      ");\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n\n.guichanxy-button:focus {\n    outline:none;\n}\n.guichanxy-button::-moz-focus-inner {\n    border:0;\n}\n\n.guichanxy-button:hover,\n.guichanxy-button:focus {\n    color: ",
                      ";\n    background-color: ",
                      ";\n}\n\n.guichanxy-button:active {\n    color: ",
                      " !important;\n    background-color: ",
                      " !important;\n}\n\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3);
          e.exports = r(
            o,
            i.theme.colors.textSecondary,
            i.theme.colors.componentBackground,
            i.theme.sizing.componentHeight,
            i.theme.sizing.componentHeight,
            i.theme.sizing.labelWidth,
            i.theme.colors.textHover,
            i.theme.colors.componentForeground,
            i.theme.colors.textActive,
            i.theme.colors.componentActive
          );
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            r = o(t(4)),
            a = (o(t(0)), t(49)),
            s = (function (e) {
              function n(e, o, i, r) {
                !(function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                var s = (function (e, n) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !n || ("object" != typeof n && "function" != typeof n)
                    ? e
                    : n;
                })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return (
                  (s.opts = o),
                  (s.container = t(2)(e, o.label, i)),
                  t(5)(s.container, o.label, i),
                  (s.input = s.container.appendChild(
                    document.createElement("input")
                  )),
                  (s.input.id = "checkbox-" + o.label + r),
                  (s.input.type = "checkbox"),
                  (s.input.checked = o.initial),
                  (s.input.className = a["guichanxy-checkbox"]),
                  o.label && s.input.setAttribute("aria-label", o.label),
                  (s.container.appendChild(
                    document.createElement("label")
                  ).htmlFor = s.input.id),
                  setTimeout(function () {
                    s.emit("initialized", s.input.checked);
                  }),
                  (s.input.onchange = function (e) {
                    s.emit("input", e.target.checked);
                  }),
                  s
                );
              }
              return (
                (function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof n
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    n &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, n)
                        : (e.__proto__ = n));
                })(n, e),
                i(n, [
                  {
                    key: "SetValue",
                    value: function (e) {
                      this.input.checked = e;
                    },
                  },
                  {
                    key: "GetValue",
                    value: function () {
                      return this.input.checked;
                    },
                  },
                ]),
                n
              );
            })(r.default);
          (n.default = s), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  '\n\ninput[type=checkbox].guichanxy-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    cursor: pointer;\n}\n\ninput[type=checkbox].guichanxy-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].guichanxy-checkbox + label:before {\n    content: "";\n    display: inline-block;\n    width: ',
                  ";\n    height: ",
                  ";\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: ",
                  ";\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].guichanxy-checkbox:hover + label:before {\n    width: calc(",
                  " - (",
                  " * 2));\n    height: calc(",
                  " - (",
                  " * 2));\n    background-color: ",
                  ";\n    border: solid 4px ",
                  ";\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.guichanxy-checkbox + label:before {\n    width: calc(",
                  " - (",
                  " * 2));\n    height: calc(",
                  " - (",
                  " * 2));\n    background-color: ",
                  ";\n    border: solid ",
                  " ",
                  ";\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.guichanxy-checkbox:focus + label:before {\n    width: calc(",
                  " - (",
                  " * 2));\n    height: calc(",
                  " - (",
                  " * 2));\n    background-color: ",
                  ";\n    border: solid ",
                  " ",
                  ";\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].guichanxy-checkbox:focus + label:before {\n    background-color: ",
                  ";\n}\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      '\n\ninput[type=checkbox].guichanxy-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    cursor: pointer;\n}\n\ninput[type=checkbox].guichanxy-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].guichanxy-checkbox + label:before {\n    content: "";\n    display: inline-block;\n    width: ',
                      ";\n    height: ",
                      ";\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: ",
                      ";\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].guichanxy-checkbox:hover + label:before {\n    width: calc(",
                      " - (",
                      " * 2));\n    height: calc(",
                      " - (",
                      " * 2));\n    background-color: ",
                      ";\n    border: solid 4px ",
                      ";\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.guichanxy-checkbox + label:before {\n    width: calc(",
                      " - (",
                      " * 2));\n    height: calc(",
                      " - (",
                      " * 2));\n    background-color: ",
                      ";\n    border: solid ",
                      " ",
                      ";\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.guichanxy-checkbox:focus + label:before {\n    width: calc(",
                      " - (",
                      " * 2));\n    height: calc(",
                      " - (",
                      " * 2));\n    background-color: ",
                      ";\n    border: solid ",
                      " ",
                      ";\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].guichanxy-checkbox:focus + label:before {\n    background-color: ",
                      ";\n}\n\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3);
          e.exports = r(
            o,
            i.theme.sizing.componentHeight,
            i.theme.sizing.componentHeight,
            i.theme.colors.componentBackground,
            i.theme.sizing.componentHeight,
            "4px",
            i.theme.sizing.componentHeight,
            "4px",
            i.theme.colors.componentBackgroundHover,
            i.theme.colors.componentBackground,
            i.theme.sizing.componentHeight,
            "4px",
            i.theme.sizing.componentHeight,
            "4px",
            i.theme.colors.componentForeground,
            "4px",
            i.theme.colors.componentBackground,
            i.theme.sizing.componentHeight,
            "4px",
            i.theme.sizing.componentHeight,
            "4px",
            i.theme.colors.componentForeground,
            "4px",
            i.theme.colors.componentBackgroundHover,
            i.theme.colors.componentBackgroundHover
          );
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            i = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(t(4)),
            r = t(51),
            a = (function (e) {
              function n(e, o, i, a) {
                !(function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                var s,
                  u,
                  l,
                  c,
                  f,
                  p,
                  h,
                  d = (function (e, n) {
                    if (!e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !n ||
                      ("object" != typeof n && "function" != typeof n)
                      ? e
                      : n;
                  })(
                    this,
                    (n.__proto__ || Object.getPrototypeOf(n)).call(this)
                  );
                if (
                  ((d.opts = o),
                  (d.container = t(2)(e, o.label, i)),
                  t(5)(d.container, o.label, i),
                  (d.input = document.createElement("select")),
                  (d.input.className = r["guichanxy-select-dropdown"]),
                  o.label && d.input.setAttribute("aria-label", o.label),
                  (u = document.createElement("span")).classList.add(
                    r["guichanxy-select-triangle"],
                    r["guichanxy-select-triangle--down"]
                  ),
                  (l = document.createElement("span")).classList.add(
                    r["guichanxy-select-triangle"],
                    r["guichanxy-select-triangle--up"]
                  ),
                  d.container.appendChild(u),
                  d.container.appendChild(l),
                  Array.isArray(o.options))
                )
                  for (s = 0; s < o.options.length; s++)
                    (f = o.options[s]),
                      ((p = document.createElement("option")).value =
                        p.textContent =
                          f),
                      o.initial === f && (p.selected = "selected"),
                      d.input.appendChild(p);
                else
                  for (h = Object.keys(o.options), s = 0; s < h.length; s++)
                    (c = h[s]),
                      ((p = document.createElement("option")).value = c),
                      o.initial === c && (p.selected = "selected"),
                      (p.textContent = o.options[c]),
                      d.input.appendChild(p);
                d.container.appendChild(d.input),
                  (d.input.onchange = function (e) {
                    d.emit("input", e.target.value);
                  });
                var g = function () {
                    u.classList.add(
                      r["guichanxy-select-triangle--down-highlight"]
                    ),
                      l.classList.add(
                        r["guichanxy-select-triangle--up-highlight"]
                      );
                  },
                  b = function () {
                    u.classList.remove(
                      r["guichanxy-select-triangle--down-highlight"]
                    ),
                      l.classList.remove(
                        r["guichanxy-select-triangle--up-highlight"]
                      );
                  },
                  m = !1;
                return (
                  d.input.addEventListener("mouseover", g),
                  d.input.addEventListener("focus", function () {
                    (m = !0), g();
                  }),
                  d.input.addEventListener("blur", function () {
                    (m = !1), b();
                  }),
                  d.input.addEventListener("mouseleave", function () {
                    m || b();
                  }),
                  d
                );
              }
              return (
                (function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof n
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    n &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, n)
                        : (e.__proto__ = n));
                })(n, e),
                o(n, [
                  {
                    key: "SetValue",
                    value: function (e) {
                      this.input.value = e;
                    },
                  },
                  {
                    key: "GetValue",
                    value: function () {
                      return this.input.value;
                    },
                  },
                ]),
                n
              );
            })(i.default);
          (n.default = a), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n\n.guichanxy-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - ",
                  ");\n    padding-left: 1.5%;\n    height: ",
                  ";\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: ",
                  ";\n    color: ",
                  ";\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we're providing our own */\n.guichanxy-select-dropdown:focus {\n    outline: none;\n}\n.guichanxy-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.guichanxy-select-dropdown:focus,\n.guichanxy-select-dropdown:hover {\n    color: ",
                  ";\n    background-color: ",
                  ";\n}\n\n.guichanxy-select-dropdown::-ms-expand {\n    display:none;\n}\n.guichanxy-select-triangle {\n    content: ' ';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: ",
                  ";\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.guichanxy-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid ",
                  ";\n    border-top: 0px transparent;\n}\n\n.guichanxy-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid ",
                  ";\n    border-bottom: 0px transparent;\n}\n\n.guichanxy-select-triangle--up-highlight {\n    border-bottom-color: ",
                  ";\n}\n\n.guichanxy-select-triangle--down-highlight {\n    border-top-color: ",
                  ";\n}\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n\n.guichanxy-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - ",
                      ");\n    padding-left: 1.5%;\n    height: ",
                      ";\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: ",
                      ";\n    color: ",
                      ";\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we're providing our own */\n.guichanxy-select-dropdown:focus {\n    outline: none;\n}\n.guichanxy-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.guichanxy-select-dropdown:focus,\n.guichanxy-select-dropdown:hover {\n    color: ",
                      ";\n    background-color: ",
                      ";\n}\n\n.guichanxy-select-dropdown::-ms-expand {\n    display:none;\n}\n.guichanxy-select-triangle {\n    content: ' ';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: ",
                      ";\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.guichanxy-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid ",
                      ";\n    border-top: 0px transparent;\n}\n\n.guichanxy-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid ",
                      ";\n    border-bottom: 0px transparent;\n}\n\n.guichanxy-select-triangle--up-highlight {\n    border-bottom-color: ",
                      ";\n}\n\n.guichanxy-select-triangle--down-highlight {\n    border-top-color: ",
                      ";\n}\n\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3);
          e.exports = r(
            o,
            i.theme.sizing.labelWidth,
            i.theme.sizing.componentHeight,
            i.theme.colors.componentBackground,
            i.theme.colors.textSecondary,
            i.theme.colors.textHover,
            i.theme.colors.componentForeground,
            i.theme.sizing.componentHeight,
            i.theme.colors.textSecondary,
            i.theme.colors.textSecondary,
            i.theme.colors.textHover,
            i.theme.colors.textHover
          );
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            r = o(t(4)),
            a = o(t(0)),
            s = (function (e) {
              function n(e, o, i, r) {
                !(function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                var s = (function (e, n) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !n || ("object" != typeof n && "function" != typeof n)
                    ? e
                    : n;
                })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return (
                  (s.opts = o),
                  (s.container = t(2)(e, o.label, i)),
                  t(5)(s.container, o.label, i),
                  (s.input = s.container.appendChild(
                    document.createElement("input")
                  )),
                  (s.input.type = "text"),
                  (s.input.className = "guichanxy-text"),
                  o.initial && (s.input.value = o.initial),
                  o.label && s.input.setAttribute("aria-label", o.label),
                  (0, a.default)(s.input, {
                    position: "absolute",
                    paddingLeft: "6px",
                    height: i.sizing.componentHeight,
                    width: "calc(100% - " + i.sizing.labelWidth + ")",
                    border: "none",
                    background: i.colors.componentBackground,
                    color: i.colors.textSecondary,
                    fontFamily: "inherit",
                    "box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "-webkit-box-sizing": "border-box",
                    resize: "vertical",
                  }),
                  setTimeout(function () {
                    s.emit("initialized", s.input.value);
                  }),
                  (s.input.oninput = function (e) {
                    s.emit("input", e.target.value);
                  }),
                  s.input.addEventListener("focus", function () {
                    (0, a.default)(s.input, { outline: "none" }),
                      (s.focused = !0);
                  }),
                  s.input.addEventListener("blur", function () {
                    s.focused = !1;
                  }),
                  s
                );
              }
              return (
                (function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof n
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    n &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, n)
                        : (e.__proto__ = n));
                })(n, e),
                i(n, [
                  {
                    key: "SetValue",
                    value: function (e) {
                      !0 !== this.focused && (this.input.value = e);
                    },
                  },
                  {
                    key: "GetValue",
                    value: function () {
                      return this.input.value;
                    },
                  },
                ]),
                n
              );
            })(r.default);
          (n.default = s), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            r = o(t(4)),
            a = o(t(54)),
            s = o(t(0)),
            u = o(t(14)),
            l = o(t(13)),
            c = (function (e) {
              function n(e, o, i, r) {
                !(function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                var l = (function (e, n) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !n || ("object" != typeof n && "function" != typeof n)
                    ? e
                    : n;
                })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                (l.opts = o),
                  (l.theme = i),
                  (o.format = o.format || "rgb"),
                  (o.initial = o.initial || "#123456"),
                  (l.container = t(2)(e, o.label, i)),
                  t(5)(l.container, o.label, i);
                var c = l.container.appendChild(document.createElement("span"));
                c.className = "guichanxy-color-" + r;
                var f = t(6)(
                  l.container,
                  "",
                  i,
                  "calc(100% - " + i.sizing.labelWidth + " - 12% - 0.5em)"
                );
                f.setAttribute("readonly", "true"),
                  (c.onmouseover = function () {
                    l.picker.$el.style.display = "";
                  });
                var p = o.initial;
                switch (o.format) {
                  case "rgb":
                  case "hex":
                    p = (0, u.default)(p).toHexString();
                    break;
                  case "array":
                    p = u.default
                      .fromRatio({ r: p[0], g: p[1], b: p[2] })
                      .toHexString();
                }
                return (
                  (l.picker = new a.default({
                    el: c,
                    color: p,
                    background: i.colors.componentBackground,
                    width: 125,
                    height: 100,
                  })),
                  (0, s.default)(l.picker.$el, {
                    marginTop: i.sizing.componentHeight,
                    display: "none",
                    position: "absolute",
                  }),
                  (0, s.default)(c, {
                    position: "relative",
                    display: "inline-block",
                    width: "12.5%",
                    height: i.sizing.componentHeight,
                    backgroundColor: l.picker.getHexString(),
                  }),
                  l.InjectStyles(),
                  (c.onmouseout = function (e) {
                    l.picker.$el.style.display = "none";
                  }),
                  setTimeout(function () {
                    l.emit("initialized", p);
                  }),
                  l.picker.onChange(function (e) {
                    (f.value = l.Format(e)),
                      (0, s.default)(c, { backgroundColor: e }),
                      l.emit("input", l.Format(e));
                  }),
                  l
                );
              }
              return (
                (function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof n
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    n &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, n)
                        : (e.__proto__ = n));
                })(n, e),
                i(n, [
                  {
                    key: "Format",
                    value: function (e) {
                      switch (this.opts.format) {
                        case "rgb":
                          return (0, u.default)(e).toRgbString();
                        case "hex":
                          return (0, u.default)(e).toHexString();
                        case "array":
                          var n = (0, u.default)(e).toRgb();
                          return [n.r / 255, n.g / 255, n.b / 255].map(
                            function (e) {
                              return e.toFixed(2);
                            }
                          );
                        default:
                          return e;
                      }
                    },
                  },
                  {
                    key: "SetValue",
                    value: function (e) {
                      this.picker.setColor(e);
                    },
                  },
                  {
                    key: "GetValue",
                    value: function () {
                      return this.Format(this.picker.getColor());
                    },
                  },
                  {
                    key: "InjectStyles",
                    value: function () {
                      (0, l.default)(
                        "\n\n        .Scp {\n            width: 125px;\n            height: 100px;\n            -webkit-variables.user-select: none;\n            -moz-variables.user-select: none;\n                -ms-variables.user-select: none;\n                    variables.user-select: none;\n            position: relative;\n            z-index: 1000;\n            cursor: pointer;\n        }\n        .Scp-saturation {\n            position: relative;\n            width: calc(100% - 25px);\n            height: 100%;\n            background: linear-gradient(to right, #fff 0%, #f00 100%);\n            float: left;\n            margin-right: 5px;\n        }\n        .Scp-brightness {\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);\n        }\n        .Scp-sbSelector {\n            border: 1px solid;\n            position: absolute;\n            width: 14px;\n            height: 14px;\n            background: #fff;\n            border-radius: 10px;\n            top: -7px;\n            left: -7px;\n            box-sizing: border-box;\n            z-index: 10;\n        }\n        .Scp-hue {\n            width: 20px;\n            height: 100%;\n            position: relative;\n            float: left;\n            background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);\n        }\n        .Scp-hSelector {\n            position: absolute;\n            background: #fff;\n            border-bottom: 1px solid #000;\n            right: -3px;\n            width: 10px;\n            height: 2px;\n        }\n\n        "
                      );
                    },
                  },
                ]),
                n
              );
            })(r.default);
          (n.default = c), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          !(function () {
            function n(e) {
              return (
                (e = e || {}),
                (this.color = null),
                (this.width = 0),
                (this.widthUnits = "px"),
                (this.height = 0),
                (this.heightUnits = "px"),
                (this.hue = 0),
                (this.position = { x: 0, y: 0 }),
                (this.huePosition = 0),
                (this.saturationWidth = 0),
                (this.hueHeight = 0),
                (this.maxHue = 0),
                (this.inputIsNumber = !1),
                (this._onSaturationMouseDown =
                  this._onSaturationMouseDown.bind(this)),
                (this._onSaturationMouseMove =
                  this._onSaturationMouseMove.bind(this)),
                (this._onSaturationMouseUp =
                  this._onSaturationMouseUp.bind(this)),
                (this._onHueMouseDown = this._onHueMouseDown.bind(this)),
                (this._onHueMouseMove = this._onHueMouseMove.bind(this)),
                (this._onHueMouseUp = this._onHueMouseUp.bind(this)),
                (this.$el = document.createElement("div")),
                (this.$el.className = "Scp"),
                (this.$el.innerHTML = [
                  '<div class="Scp-saturation">',
                  '<div class="Scp-brightness"></div>',
                  '<div class="Scp-sbSelector"></div>',
                  "</div>",
                  '<div class="Scp-hue">',
                  '<div class="Scp-hSelector"></div>',
                  "</div>",
                ].join("")),
                (this.$saturation = this.$el.querySelector(".Scp-saturation")),
                (this.$hue = this.$el.querySelector(".Scp-hue")),
                (this.$sbSelector = this.$el.querySelector(".Scp-sbSelector")),
                (this.$hSelector = this.$el.querySelector(".Scp-hSelector")),
                this.$saturation.addEventListener(
                  "mousedown",
                  this._onSaturationMouseDown
                ),
                this.$saturation.addEventListener(
                  "touchstart",
                  this._onSaturationMouseDown
                ),
                this.$hue.addEventListener("mousedown", this._onHueMouseDown),
                this.$hue.addEventListener("touchstart", this._onHueMouseDown),
                e.el && this.appendTo(e.el),
                e.background && this.setBackgroundColor(e.background),
                e.widthUnits && (this.widthUnits = e.widthUnits),
                e.heightUnits && (this.heightUnits = e.heightUnits),
                this.setSize(e.width || 175, e.height || 150),
                this.setColor(e.color),
                this
              );
            }
            function o(e, n, t) {
              return Math.min(Math.max(e, n), t);
            }
            function i(e) {
              return {
                x: (e = 0 === e.type.indexOf("touch") ? e.touches[0] : e)
                  .clientX,
                y: e.clientY,
              };
            }
            function r(e) {
              return "#" + ("00000" + (0 | e).toString(16)).substr(-6);
            }
            var a = t(55),
              s = t(56),
              u = t(14),
              l = t(59);
            a(n.prototype),
              (n.prototype.appendTo = function (e) {
                return e.appendChild(this.$el), this;
              }),
              (n.prototype.remove = function () {
                this._onSaturationMouseUp(),
                  this._onHueMouseUp(),
                  this.$saturation.removeEventListener(
                    "mousedown",
                    this._onSaturationMouseDown
                  ),
                  this.$saturation.removeEventListener(
                    "touchstart",
                    this._onSaturationMouseDown
                  ),
                  this.$hue.removeEventListener(
                    "mousedown",
                    this._onHueMouseDown
                  ),
                  this.$hue.removeEventListener(
                    "touchstart",
                    this._onHueMouseDown
                  ),
                  this.off(),
                  this.$el.parentNode &&
                    this.$el.parentNode.removeChild(this.$el);
              }),
              (n.prototype.setColor = function (e) {
                s(e)
                  ? ((this.inputIsNumber = !0), (e = r(e)))
                  : (this.inputIsNumber = !1),
                  (this.color = u(e));
                var n = this.color.toHsv();
                return (
                  isNaN(n.h) || (this.hue = n.h),
                  this._moveSelectorTo(
                    this.saturationWidth * n.s,
                    (1 - n.v) * this.hueHeight
                  ),
                  this._moveHueTo((1 - this.hue / 360) * this.hueHeight),
                  this._updateHue(),
                  this
                );
              }),
              (n.prototype.setSize = function (e, n) {
                return (
                  (this.width = e),
                  (this.height = n),
                  (this.$el.style.width = this.width + this.widthUnits),
                  (this.$el.style.height = this.height + this.heightUnits),
                  (this.saturationWidth = this.width - 25),
                  (this.$saturation.style.width = this.saturationWidth + "px"),
                  (this.hueHeight = this.height),
                  (this.maxHue = this.hueHeight - 2),
                  this
                );
              }),
              (n.prototype.setBackgroundColor = function (e) {
                return (
                  s(e) && (e = r(e)),
                  (this.$el.style.padding = "5px"),
                  (this.$el.style.background = u(e).toHexString()),
                  this
                );
              }),
              (n.prototype.setNoBackground = function () {
                (this.$el.style.padding = "0px"),
                  (this.$el.style.background = "none");
              }),
              (n.prototype.onChange = function (e) {
                return (
                  this.on("update", e),
                  this.emit("update", this.getHexString()),
                  this
                );
              }),
              (n.prototype.getColor = function () {
                return this.inputIsNumber
                  ? this.getHexNumber()
                  : this.color.toString();
              }),
              (n.prototype.getHexString = function () {
                return this.color.toHexString().toUpperCase();
              }),
              (n.prototype.getHexNumber = function () {
                return parseInt(this.color.toHex(), 16);
              }),
              (n.prototype.getRGB = function () {
                return this.color.toRgb();
              }),
              (n.prototype.getHSV = function () {
                return this.color.toHsv();
              }),
              (n.prototype.isDark = function () {
                return this.color.isDark();
              }),
              (n.prototype.isLight = function () {
                return this.color.isLight();
              }),
              (n.prototype._moveSelectorTo = function (e, n) {
                (this.position.x = o(e, 0, this.saturationWidth)),
                  (this.position.y = o(n, 0, this.hueHeight)),
                  l(this.$sbSelector, {
                    x: this.position.x,
                    y: this.position.y,
                  });
              }),
              (n.prototype._updateColorFromPosition = function () {
                (this.color = u({
                  h: this.hue,
                  s: this.position.x / this.saturationWidth,
                  v: 1 - this.position.y / this.hueHeight,
                })),
                  this._updateColor();
              }),
              (n.prototype._moveHueTo = function (e) {
                (this.huePosition = o(e, 0, this.maxHue)),
                  l(this.$hSelector, { y: this.huePosition });
              }),
              (n.prototype._updateHueFromPosition = function () {
                var e = this.color.toHsv();
                (this.hue = 360 * (1 - this.huePosition / this.maxHue)),
                  (this.color = u({ h: this.hue, s: e.s, v: e.v })),
                  this._updateHue();
              }),
              (n.prototype._updateHue = function () {
                var e = u({ h: this.hue, s: 1, v: 1 });
                (this.$saturation.style.background =
                  "linear-gradient(to right, #fff, " + e.toHexString() + ")"),
                  this._updateColor();
              }),
              (n.prototype._updateColor = function () {
                (this.$sbSelector.style.background = this.color.toHexString()),
                  (this.$sbSelector.style.borderColor = this.color.isDark()
                    ? "#fff"
                    : "#000"),
                  this.emit("update", this.color.toHexString());
              }),
              (n.prototype._onSaturationMouseDown = function (e) {
                var n = this.$saturation.getBoundingClientRect(),
                  t = i(e).x,
                  o = i(e).y;
                this._moveSelectorTo(t - n.left, o - n.top),
                  this._updateColorFromPosition(),
                  window.addEventListener("mouseup", this._onSaturationMouseUp),
                  window.addEventListener(
                    "touchend",
                    this._onSaturationMouseUp
                  ),
                  window.addEventListener(
                    "mousemove",
                    this._onSaturationMouseMove
                  ),
                  window.addEventListener(
                    "touchmove",
                    this._onSaturationMouseMove
                  ),
                  e.preventDefault();
              }),
              (n.prototype._onSaturationMouseMove = function (e) {
                var n = this.$saturation.getBoundingClientRect(),
                  t = i(e).x,
                  o = i(e).y;
                this._moveSelectorTo(t - n.left, o - n.top),
                  this._updateColorFromPosition();
              }),
              (n.prototype._onSaturationMouseUp = function () {
                window.removeEventListener(
                  "mouseup",
                  this._onSaturationMouseUp
                ),
                  window.removeEventListener(
                    "touchend",
                    this._onSaturationMouseUp
                  ),
                  window.removeEventListener(
                    "mousemove",
                    this._onSaturationMouseMove
                  ),
                  window.removeEventListener(
                    "touchmove",
                    this._onSaturationMouseMove
                  );
              }),
              (n.prototype._onHueMouseDown = function (e) {
                var n = this.$hue.getBoundingClientRect(),
                  t = i(e).y;
                this._moveHueTo(t - n.top),
                  this._updateHueFromPosition(),
                  window.addEventListener("mouseup", this._onHueMouseUp),
                  window.addEventListener("touchend", this._onHueMouseUp),
                  window.addEventListener("mousemove", this._onHueMouseMove),
                  window.addEventListener("touchmove", this._onHueMouseMove),
                  e.preventDefault();
              }),
              (n.prototype._onHueMouseMove = function (e) {
                var n = this.$hue.getBoundingClientRect(),
                  t = i(e).y;
                this._moveHueTo(t - n.top), this._updateHueFromPosition();
              }),
              (n.prototype._onHueMouseUp = function () {
                window.removeEventListener("mouseup", this._onHueMouseUp),
                  window.removeEventListener("touchend", this._onHueMouseUp),
                  window.removeEventListener("mousemove", this._onHueMouseMove),
                  window.removeEventListener("touchmove", this._onHueMouseMove);
              }),
              void 0 !== e && e.exports && (e.exports = n);
          })();
        },
        function (e, n, t) {
          function o(e) {
            if (e)
              return (function (e) {
                for (var n in o.prototype) e[n] = o.prototype[n];
                return e;
              })(e);
          }
          (e.exports = o),
            (o.prototype.on = o.prototype.addEventListener =
              function (e, n) {
                return (
                  (this._callbacks = this._callbacks || {}),
                  (this._callbacks["$" + e] =
                    this._callbacks["$" + e] || []).push(n),
                  this
                );
              }),
            (o.prototype.once = function (e, n) {
              function t() {
                this.off(e, t), n.apply(this, arguments);
              }
              return (t.fn = n), this.on(e, t), this;
            }),
            (o.prototype.off =
              o.prototype.removeListener =
              o.prototype.removeAllListeners =
              o.prototype.removeEventListener =
                function (e, n) {
                  if (
                    ((this._callbacks = this._callbacks || {}),
                    0 == arguments.length)
                  )
                    return (this._callbacks = {}), this;
                  var t = this._callbacks["$" + e];
                  if (!t) return this;
                  if (1 == arguments.length)
                    return delete this._callbacks["$" + e], this;
                  for (var o, i = 0; i < t.length; i++)
                    if ((o = t[i]) === n || o.fn === n) {
                      t.splice(i, 1);
                      break;
                    }
                  return this;
                }),
            (o.prototype.emit = function (e) {
              this._callbacks = this._callbacks || {};
              var n = [].slice.call(arguments, 1),
                t = this._callbacks["$" + e];
              if (t)
                for (var o = 0, i = (t = t.slice(0)).length; o < i; ++o)
                  t[o].apply(this, n);
              return this;
            }),
            (o.prototype.listeners = function (e) {
              return (
                (this._callbacks = this._callbacks || {}),
                this._callbacks["$" + e] || []
              );
            }),
            (o.prototype.hasListeners = function (e) {
              return !!this.listeners(e).length;
            });
        },
        function (e, n, t) {
          "use strict";
          var o = t(57);
          e.exports = function (e) {
            var n = o(e);
            if ("string" === n) {
              if (!e.trim()) return !1;
            } else if ("number" !== n) return !1;
            return e - e + 1 >= 0;
          };
        },
        function (e, n, t) {
          var o = t(58),
            i = Object.prototype.toString;
          e.exports = function (e) {
            if (void 0 === e) return "undefined";
            if (null === e) return "null";
            if (!0 === e || !1 === e || e instanceof Boolean) return "boolean";
            if ("string" == typeof e || e instanceof String) return "string";
            if ("number" == typeof e || e instanceof Number) return "number";
            if ("function" == typeof e || e instanceof Function)
              return "function";
            if (void 0 !== Array.isArray && Array.isArray(e)) return "array";
            if (e instanceof RegExp) return "regexp";
            if (e instanceof Date) return "date";
            var n = i.call(e);
            return "[object RegExp]" === n
              ? "regexp"
              : "[object Date]" === n
              ? "date"
              : "[object Arguments]" === n
              ? "arguments"
              : "[object Error]" === n
              ? "error"
              : o(e)
              ? "buffer"
              : "[object Set]" === n
              ? "set"
              : "[object WeakSet]" === n
              ? "weakset"
              : "[object Map]" === n
              ? "map"
              : "[object WeakMap]" === n
              ? "weakmap"
              : "[object Symbol]" === n
              ? "symbol"
              : "[object Int8Array]" === n
              ? "int8array"
              : "[object Uint8Array]" === n
              ? "uint8array"
              : "[object Uint8ClampedArray]" === n
              ? "uint8clampedarray"
              : "[object Int16Array]" === n
              ? "int16array"
              : "[object Uint16Array]" === n
              ? "uint16array"
              : "[object Int32Array]" === n
              ? "int32array"
              : "[object Uint32Array]" === n
              ? "uint32array"
              : "[object Float32Array]" === n
              ? "float32array"
              : "[object Float64Array]" === n
              ? "float64array"
              : "object";
          };
        },
        function (e, n) {
          function t(e) {
            return (
              !!e.constructor &&
              "function" == typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          }
          e.exports = function (e) {
            return (
              null != e &&
              (t(e) ||
                (function (e) {
                  return (
                    "function" == typeof e.readFloatLE &&
                    "function" == typeof e.slice &&
                    t(e.slice(0, 0))
                  );
                })(e) ||
                !!e._isBuffer)
            );
          };
        },
        function (e, n, t) {
          "use strict";
          function o() {
            return Object.keys(a).map(function (e) {
              return e;
            });
          }
          var i = t(60),
            r = t(61),
            a = t(62),
            s = t(63),
            u = Object.prototype.hasOwnProperty,
            l = i("transform"),
            c = {
              x: "translateX",
              y: "translateY",
              z: "translateZ",
              origin: "transformOrigin",
            };
          (n = e.exports =
            function (e, n) {
              var t,
                o,
                f,
                p = [];
              for (t in ((function (e) {
                var n;
                for (n in e) u.call(c, n) && ((e[c[n]] = e[n]), delete e[n]);
              })(n),
              n))
                u.call(n, t) &&
                  ((o = n[t]),
                  u.call(a.transform, t)
                    ? ((f = a.transform[t]),
                      r(o) && (o = o.join(f.separator)),
                      p.push(t + "(" + s(o, f.defaultUnit, f.separator) + ")"))
                    : u.call(a, t)
                    ? ((f = a[t]),
                      r(o) && (o = o.join(f.separator)),
                      (e.style[i(t)] = s(o, f.defaultUnit, f.separator)))
                    : console.warn(
                        "dom-transform: this property (`" +
                          t +
                          "`) is not supported."
                      ));
              e.style[l] = p.join(" ");
            }),
            (n.get = function (e, n) {
              var t = e.style;
              if ("string" == typeof n)
                return u.call(a.transform, n) ? t[l] : t[i(n)];
              n || (n = o());
              var r = {};
              return (
                n.forEach(function (e) {
                  r[e] = t[i(e)];
                }),
                r
              );
            }),
            (n.reset = function (e, n) {
              var t = e.style;
              "string" != typeof n
                ? (n || (n = o()),
                  n.forEach(function (e) {
                    t[i(e)] = null;
                  }))
                : (t[i(n)] = null);
            }),
            (n.isSupported = function () {
              return l.length > 0;
            });
        },
        function (e, n) {
          function t(e) {
            if (
              ((e = e.replace(/-([a-z])/g, function (e, n) {
                return n.toUpperCase();
              })),
              void 0 !== o[e])
            )
              return e;
            for (
              var n = e.charAt(0).toUpperCase() + e.slice(1), t = i.length;
              t--;

            ) {
              var r = i[t] + n;
              if (void 0 !== o[r]) return r;
            }
            return e;
          }
          var o =
              "undefined" != typeof document
                ? document.createElement("p").style
                : {},
            i = ["O", "ms", "Moz", "Webkit"],
            r = /([A-Z])/g,
            a = {};
          (e.exports = function (e) {
            return e in a ? a[e] : (a[e] = t(e));
          }),
            (e.exports.dash = function (e) {
              return (
                (e = t(e)),
                r.test(e) &&
                  ((e = "-" + e.replace(r, "-$1")), (r.lastIndex = 0)),
                e.toLowerCase()
              );
            });
        },
        function (e, n) {
          var t = Array.isArray,
            o = Object.prototype.toString;
          e.exports =
            t ||
            function (e) {
              return !!e && "[object Array]" == o.call(e);
            };
        },
        function (e, n, t) {
          "use strict";
          e.exports = {
            transform: {
              translate: { defaultUnit: "px" },
              translate3d: { defaultUnit: "px" },
              translateX: { defaultUnit: "px" },
              translateY: { defaultUnit: "px" },
              translateZ: { defaultUnit: "px" },
              scale: { defaultUnit: "" },
              scale3d: { defaultUnit: "" },
              scaleX: { defaultUnit: "" },
              scaleY: { defaultUnit: "" },
              scaleZ: { defaultUnit: "" },
              rotate: { defaultUnit: "deg" },
              rotate3d: { defaultUnit: "" },
              rotateX: { defaultUnit: "deg" },
              rotateY: { defaultUnit: "deg" },
              rotateZ: { defaultUnit: "deg" },
              skew: { defaultUnit: "deg" },
              skewX: { defaultUnit: "deg" },
              skewY: { defaultUnit: "deg" },
              perspective: { defaultUnit: "px" },
              matrix: { defaultUnit: "" },
              matrix3d: { defaultUnit: "" },
            },
            transformOrigin: { defaultUnit: "px", separator: " " },
          };
        },
        function (e, n, t) {
          "use strict";
          var o = t(64),
            i = /^-?\d+(\.\d+)?$/;
          e.exports = function (e, n, t) {
            if (((t = t || ","), "number" == typeof e)) return "" + e + n;
            var r = new RegExp(t, "g");
            return e
              .split(r.test(e) ? t : " ")
              .map(function (e) {
                return (e = o(e)), i.test(e) && (e += n), e;
              })
              .join(t);
          };
        },
        function (e, n) {
          ((n = e.exports =
            function (e) {
              return e.replace(/^\s*|\s*$/g, "");
            }).left = function (e) {
            return e.replace(/^\s*/, "");
          }),
            (n.right = function (e) {
              return e.replace(/\s*$/, "");
            });
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            i = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(t(0)),
            r = t(66),
            a = (function () {
              function e(n, o, a, s) {
                var u = this;
                (function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.opts = o),
                  (this.container = t(2)(n, o.label, a)),
                  this.container.classList.add(r["guichanxy-folder"]),
                  this.container.setAttribute("role", "button"),
                  this.container.setAttribute("tabIndex", "0"),
                  (this.arrow = this.container.appendChild(
                    document.createElement("div")
                  )),
                  (this.arrow.innerHTML = "&#9662;"),
                  (0, i.default)(this.arrow, { width: "1.5em" }),
                  (this.label = this.container.appendChild(
                    document.createElement("div")
                  )),
                  (this.label.innerHTML = o.label),
                  (this.container.onclick = function () {
                    u.Toggle();
                  }),
                  this.container.addEventListener("mouseup", function () {
                    u.container.blur();
                  }),
                  this.container.addEventListener("keydown", function (e) {
                    (13 !== e.which && 32 !== e.which) || u.Toggle();
                  }),
                  (this.folderContainer = n.appendChild(
                    document.createElement("div")
                  )),
                  this.folderContainer.classList.add(
                    r["guichanxy-folder-contents"]
                  ),
                  (this.open = this.opts.open || !1),
                  this.SetOpen(this.open);
              }
              return (
                o(e, [
                  {
                    key: "Toggle",
                    value: function () {
                      (this.open = !this.open), this.SetOpen(this.open);
                    },
                  },
                  {
                    key: "SetOpen",
                    value: function (e) {
                      (this.open = e),
                        e
                          ? (this.folderContainer.classList.remove(
                              r["guichanxy-folder-closed"]
                            ),
                            (this.arrow.innerHTML = "&#9662;"))
                          : (this.folderContainer.classList.add(
                              r["guichanxy-folder-closed"]
                            ),
                            (this.arrow.innerHTML = "&#9656;"));
                    },
                  },
                ]),
                e
              );
            })();
          (n.default = a), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n\n.guichanxy-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: ",
                  ";\n}\n\n.guichanxy-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: calc(",
                  " + 5px);\n}\n\n.guichanxy-folder:hover,\n.guichanxy-folder:focus {\n    color: ",
                  ";\n    background-color: ",
                  ";\n    outline: none;\n}\n\n\n.guichanxy-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid ",
                  ";\n}\n\n.guichanxy-folder-contents.guichanxy-folder-closed {\n    height: 0;\n    display: none;\n}\n\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n\n.guichanxy-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: ",
                      ";\n}\n\n.guichanxy-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: calc(",
                      " + 5px);\n}\n\n.guichanxy-folder:hover,\n.guichanxy-folder:focus {\n    color: ",
                      ";\n    background-color: ",
                      ";\n    outline: none;\n}\n\n\n.guichanxy-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid ",
                      ";\n}\n\n.guichanxy-folder-contents.guichanxy-folder-closed {\n    height: 0;\n    display: none;\n}\n\n\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3);
          e.exports = r(
            o,
            i.theme.colors.textPrimary,
            i.theme.sizing.componentHeight,
            i.theme.colors.textHover,
            i.theme.colors.componentForeground,
            i.theme.colors.componentBackground
          );
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            r = o(t(4)),
            a = o(t(0)),
            s = t(68),
            u = (function (e) {
              function n(e, o, i, r) {
                !(function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                var u = (function (e, n) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !n || ("object" != typeof n && "function" != typeof n)
                    ? e
                    : n;
                })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                (u.opts = o),
                  (u.opts.fileReadFunc =
                    u.opts.fileReadFunc || "readAsDataURL"),
                  (u.file = null),
                  (u.fileName = null),
                  (u.container = t(2)(e, o.label, i)),
                  u.container.classList.add(s["guichanxy-file-container"]),
                  u.container.setAttribute("role", "button"),
                  u.container.setAttribute("tabIndex", "0"),
                  (0, a.default)(u.container, {
                    width: "100%",
                    "box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "-webkit-box-sizing": "border-box",
                    height: "unset",
                    padding: "8px",
                  });
                var l = u.container.appendChild(document.createElement("div"));
                (l.innerHTML = o.label),
                  (0, a.default)(l, "padding-bottom", "5px");
                var c = u.container.appendChild(
                  document.createElement("input")
                );
                c.setAttribute("type", "file"),
                  c.setAttribute("multiple", !1),
                  (c.style.display = "none"),
                  o.label && c.setAttribute("aria-label", o.label),
                  (u.fileLabel = u.container.appendChild(
                    document.createElement("div")
                  )),
                  (u.fileLabel.innerHTML = "Choose a file...");
                var f = function (e) {
                  var n;
                  e.dataTransfer
                    ? (n = e.dataTransfer.files)
                    : e.target && (n = e.target.files);
                  var t = (n[0], new FileReader());
                  (t.onload = function () {
                    (u.file = t.result),
                      (u.fileLabel.innerHTML = n[0].name),
                      u.emit("input", u.file);
                  }),
                    t[u.opts.fileReadFunc](n[0]);
                };
                return (
                  c.addEventListener("change", f),
                  u.container.addEventListener("dragover", function (e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      u.container.classList.add(s["guichanxy-dragover"]);
                  }),
                  u.container.addEventListener("dragleave", function (e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      u.container.classList.remove(s["guichanxy-dragover"]);
                  }),
                  u.container.addEventListener("drop", function (e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      u.container.classList.remove(s["guichanxy-dragover"]),
                      f(e);
                  }),
                  (u.container.onclick = function () {
                    c.click();
                  }),
                  u.container.addEventListener("keydown", function (e) {
                    (13 !== e.which && 32 !== e.which) || c.click();
                  }),
                  u.container.addEventListener("mouseup", function () {
                    u.container.blur();
                  }),
                  u
                );
              }
              return (
                (function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof n
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    n &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, n)
                        : (e.__proto__ = n));
                })(n, e),
                i(n, [
                  { key: "SetValue", value: function (e) {} },
                  {
                    key: "GetValue",
                    value: function () {
                      return this.file;
                    },
                  },
                ]),
                n
              );
            })(r.default);
          (n.default = u), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n\n.guichanxy-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: ",
                  ";\n    background-color: ",
                  ";\n}\n\n.guichanxy-file-container:hover,\n.guichanxy-file-container:focus {\n    color: ",
                  ";\n    background-color: ",
                  ";\n}\n\n.guichanxy-file-container:active {\n    color: ",
                  " !important;\n    background-color: ",
                  " !important;\n}\n\n.guichanxy-dragover {\n    background-color: ",
                  ";\n    box-shadow: inset 0 0 0 3px ",
                  ";\n}\n\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n\n.guichanxy-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: ",
                      ";\n    background-color: ",
                      ";\n}\n\n.guichanxy-file-container:hover,\n.guichanxy-file-container:focus {\n    color: ",
                      ";\n    background-color: ",
                      ";\n}\n\n.guichanxy-file-container:active {\n    color: ",
                      " !important;\n    background-color: ",
                      " !important;\n}\n\n.guichanxy-dragover {\n    background-color: ",
                      ";\n    box-shadow: inset 0 0 0 3px ",
                      ";\n}\n\n\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3);
          e.exports = r(
            o,
            i.theme.colors.textPrimary,
            i.theme.colors.componentBackground,
            i.theme.colors.textHover,
            i.theme.colors.componentForeground,
            i.theme.colors.textActive,
            i.theme.colors.componentActive,
            i.theme.colors.componentBackground,
            i.theme.colors.componentForeground
          );
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            i = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(t(0)),
            r = (function () {
              function e(n, o, r, a) {
                (function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.opts = o),
                  (this.container = t(2)(n, o.label, r)),
                  t(5)(this.container, o.label, r),
                  (this.text = this.container.appendChild(
                    document.createElement("div")
                  )),
                  (0, i.default)(this.text, {
                    display: "inline-block",
                    height: "unset",
                    width: "calc(100% - " + r.sizing.labelWidth + ")",
                    border: "none",
                    color: r.colors.textSecondary,
                    fontFamily: "inherit",
                    "box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "-webkit-box-sizing": "border-box",
                    verticalAlign: "sub",
                    "line-height": r.sizing.componentHeight,
                    "variables.user-select": "text",
                  }),
                  o.label && this.text.setAttribute("aria-label", o.label);
              }
              return (
                o(e, [
                  {
                    key: "SetValue",
                    value: function (e) {
                      this.text.innerHTML = e.toString();
                    },
                  },
                  {
                    key: "GetValue",
                    value: function () {
                      return this.text.innerHTML.toString();
                    },
                  },
                ]),
                e
              );
            })();
          (n.default = r), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(e, n, t) {
            return Math.min(Math.max(e, n), t);
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            a = o(t(4)),
            s = o(t(0)),
            u = o(t(10)),
            l = t(71),
            c = (function (e) {
              function n(e, o, r, a) {
                !(function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                var c = (function (e, n) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !n || ("object" != typeof n && "function" != typeof n)
                    ? e
                    : n;
                })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                if (
                  ((c.opts = o),
                  (c.container = t(2)(e, o.label, r)),
                  t(5)(c.container, o.label, r),
                  o.step && o.steps)
                )
                  throw new Error(
                    "Cannot specify both step and steps. Got step = " +
                      o.step +
                      ", steps = ",
                    o.steps
                  );
                if (
                  ((c.input = c.container.appendChild(
                    document.createElement("span")
                  )),
                  (c.input.className = l["guichanxy-interval"]),
                  (c.handle = document.createElement("span")),
                  (c.handle.className = l["guichanxy-interval-handle"]),
                  c.input.appendChild(c.handle),
                  Array.isArray(o.initial) || (o.initial = []),
                  "log" === o.scale)
                ) {
                  if (
                    ((o.max = (0, u.default)(o.max) ? o.max : 100),
                    (o.min = (0, u.default)(o.min) ? o.min : 0.1),
                    o.min * o.max <= 0)
                  )
                    throw new Error(
                      "Log range min/max must have the same sign and not equal zero. Got min = " +
                        o.min +
                        ", max = " +
                        o.max
                    );
                  if (
                    ((c.logmin = o.min),
                    (c.logmax = o.max),
                    (c.logsign = o.min > 0 ? 1 : -1),
                    (c.logmin = Math.abs(c.logmin)),
                    (c.logmax = Math.abs(c.logmax)),
                    (o.min = 0),
                    (o.max = 100),
                    (0, u.default)(o.step))
                  )
                    throw new Error(
                      "Log may only use steps (integer number of steps), not a step value. Got step =" +
                        o.step
                    );
                  if (
                    ((o.step = 1),
                    (o.initial = [
                      c.InverseScaleValue(
                        (0, u.default)(o.initial)
                          ? o.initial[0]
                          : scaleValue(o.min + 0.25 * (o.max - o.min))
                      ),
                      c.InverseScaleValue(
                        (0, u.default)(o.initial)
                          ? o.initial[1]
                          : scaleValue(o.min + 0.75 * (o.max - o.min))
                      ),
                    ]),
                    c.ScaleValue(o.initial[0]) * c.ScaleValue(o.max) <= 0 ||
                      scaleValue(o.initial[1]) * c.ScaleValue(o.max) <= 0)
                  )
                    throw new Error(
                      "Log range initial value must have the same sign as min/max and must not equal zero. Got initial value = [" +
                        c.ScaleValue(o.initial[0]) +
                        ", " +
                        c.ScaleValue(o.initial[1]) +
                        "]"
                    );
                } else
                  (o.max = (0, u.default)(o.max) ? o.max : 100),
                    (o.min = (0, u.default)(o.min) ? o.min : 0),
                    (o.step = (0, u.default)(o.step) ? o.step : 0.01),
                    (o.initial = [
                      (0, u.default)(o.initial[0])
                        ? o.initial[0]
                        : 0.25 * (o.min + o.max),
                      (0, u.default)(o.initial[1])
                        ? o.initial[1]
                        : 0.75 * (o.min + o.max),
                    ]);
                (0, u.default)(o.steps) &&
                  (o.step = (0, u.default)(o.steps)
                    ? (o.max - o.min) / o.steps
                    : o.step),
                  (o.initial[0] =
                    o.min +
                    o.step * Math.round((o.initial[0] - o.min) / o.step)),
                  (o.initial[1] =
                    o.min +
                    o.step * Math.round((o.initial[1] - o.min) / o.step)),
                  (c.value = o.initial),
                  (0, s.default)(c.handle, {
                    left: ((c.value[0] - o.min) / (o.max - o.min)) * 100 + "%",
                    right:
                      100 -
                      ((c.value[1] - o.min) / (o.max - o.min)) * 100 +
                      "%",
                  }),
                  (c.lValue = t(6)(
                    c.container,
                    c.ScaleValue(o.initial[0]),
                    r,
                    "11%",
                    !0
                  )),
                  (c.rValue = t(6)(
                    c.container,
                    c.ScaleValue(o.initial[1]),
                    r,
                    "11%"
                  )),
                  o.label &&
                    c.lValue.setAttribute(
                      "aria-label",
                      o.label + " lower value"
                    ),
                  o.label &&
                    c.lValue.setAttribute(
                      "aria-label",
                      o.label + " upper value"
                    ),
                  (c.activeIndex = -1),
                  setTimeout(function () {
                    var e = c.ScaleValue(c.value[0]),
                      n = c.ScaleValue(c.value[1]);
                    (c.lValue.innerHTML = e),
                      (c.rValue.innerHTML = n),
                      c.emit("initialized", [e, n]);
                  }),
                  c.input.addEventListener("focus", function () {
                    c.focused = !0;
                  }),
                  c.input.addEventListener("blur", function () {
                    c.focused = !1;
                  });
                var f = function (e) {
                    return e.pageX - c.input.getBoundingClientRect().left;
                  },
                  p = function (e) {
                    var n = i(f(e) / c.input.offsetWidth, 0, 1);
                    c.setActiveValue(n);
                  },
                  h = function e(n) {
                    var t = i(f(n) / c.input.offsetWidth, 0, 1);
                    c.setActiveValue(t),
                      document.removeEventListener("mousemove", p),
                      document.removeEventListener("mouseup", e),
                      (c.activeIndex = -1);
                  };
                return (
                  c.input.addEventListener("mousedown", function (e) {
                    var n = i(f(e) / c.input.offsetWidth, 0, 1),
                      t = (c.value[0] - o.min) / (o.max - o.min),
                      r = (c.value[1] - o.min) / (o.max - o.min);
                    (t -= 1e-15 * Math.abs(o.max - o.min)),
                      (r += 1e-15 * Math.abs(o.max - o.min));
                    var a = Math.abs(t - n),
                      s = Math.abs(r - n);
                    (c.activeIndex = a < s ? 0 : 1),
                      console.log(c.activeIndex),
                      document.addEventListener("mousemove", p),
                      document.addEventListener("mouseup", h);
                  }),
                  c.input.addEventListener("mouseup", function () {
                    c.input.blur();
                  }),
                  (c.input.oninput = function () {
                    var e = c.ScaleValue(c.value[0]),
                      n = c.ScaleValue(c.value[1]);
                    (c.lValue.value = e),
                      (c.rValue.value = n),
                      c.emit("input", [e, n]);
                  }),
                  (c.lValue.onchange = function () {
                    var e = c.lValue.value,
                      n = parseFloat(c.rValue.value);
                    if (Number(parseFloat(e)) == e) {
                      var t = parseFloat(e);
                      (t = Math.min(Math.max(t, o.min), o.max)),
                        (t = Math.ceil((t - o.min) / o.step) * o.step + o.min),
                        (t = Math.min(t, n)),
                        (c.lValue.value = t),
                        c.emit("input", [t, n]),
                        c.RefreshHandle([t, n]);
                    } else c.lValue.value = c.lastValue[0];
                  }),
                  (c.rValue.onchange = function () {
                    var e = c.rValue.value,
                      n = parseFloat(c.lValue.value);
                    if (Number(parseFloat(e)) == e) {
                      var t = parseFloat(e);
                      (t = Math.min(Math.max(t, o.min), o.max)),
                        (t = Math.ceil((t - o.min) / o.step) * o.step + o.min),
                        (t = Math.max(t, n)),
                        (c.rValue.value = t),
                        c.emit("input", [n, t]),
                        c.RefreshHandle([n, t]);
                    } else c.rValue.value = c.lastValue[1];
                  }),
                  c
                );
              }
              return (
                (function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof n
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    n &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, n)
                        : (e.__proto__ = n));
                })(n, e),
                r(n, [
                  {
                    key: "ScaleValue",
                    value: function (e) {
                      return "log" === this.opts.scale
                        ? this.logsign *
                            Math.exp(
                              Math.log(this.logmin) +
                                ((Math.log(this.logmax) -
                                  Math.log(this.logmin)) *
                                  e) /
                                  100
                            )
                        : e;
                    },
                  },
                  {
                    key: "InverseScaleValue",
                    value: function (e) {
                      return "log" === this.opts.scale
                        ? (100 *
                            (Math.log(e * this.logsign) -
                              Math.log(this.logmin))) /
                            (Math.log(this.logmax) - Math.log(this.logmin))
                        : e;
                    },
                  },
                  {
                    key: "setActiveValue",
                    value: function (e) {
                      if (-1 !== this.activeIndex) {
                        var n = this.opts,
                          t = (this.value[0] - n.min) / (n.max - n.min),
                          o = (this.value[1] - n.min) / (n.max - n.min);
                        e =
                          0 === this.activeIndex
                            ? Math.min(o, e)
                            : Math.max(t, e);
                        var i =
                          n.min +
                          Math.round(((n.max - n.min) * e) / n.step) * n.step;
                        (this.value[this.activeIndex] = i),
                          (0, s.default)(this.handle, {
                            left:
                              ((this.value[0] - n.min) / (n.max - n.min)) *
                                100 +
                              "%",
                            right:
                              100 -
                              ((this.value[1] - n.min) / (n.max - n.min)) *
                                100 +
                              "%",
                          }),
                          this.input.oninput();
                      }
                    },
                  },
                  {
                    key: "SetValue",
                    value: function (e) {
                      !0 !== this.focused &&
                        ((this.lValue.value = this.FormatNumber(e[0])),
                        (this.rValue.value = this.FormatNumber(e[1])),
                        (this.lastValue = [
                          this.lValue.value,
                          this.rValue.value,
                        ]));
                    },
                  },
                  {
                    key: "FormatNumber",
                    value: function (e) {
                      return e.toFixed(3).replace(/\.?0*$/, "");
                    },
                  },
                  {
                    key: "GetValue",
                    value: function () {
                      return [this.lValue.value, this.rValue.value];
                    },
                  },
                  {
                    key: "RefreshHandle",
                    value: function (e) {
                      var n =
                          ((parseFloat(e[0]) - this.opts.min) /
                            (this.opts.max - this.opts.min)) *
                          100,
                        t =
                          100 -
                          ((parseFloat(e[1]) - this.opts.min) /
                            (this.opts.max - this.opts.min)) *
                            100;
                      (0, s.default)(this.handle, {
                        left: n + "%",
                        right: t + "%",
                      });
                    },
                  },
                ]),
                n
              );
            })(a.default);
          (n.default = c), (e.exports = n.default);
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n.guichanxy-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: 20px;\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: ",
                  ";\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-variables.user-select: none;\n    -khtml-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n}\n.guichanxy-interval-handle {\n    background-color: ",
                  ";\n    position: absolute;\n    height: ",
                  ";\n    min-width: 1px;\n}\n.guichanxy-interval-handle:focus {\n    background: ",
                  ";\n}\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n.guichanxy-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: 20px;\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: ",
                      ";\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-variables.user-select: none;\n    -khtml-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n}\n.guichanxy-interval-handle {\n    background-color: ",
                      ";\n    position: absolute;\n    height: ",
                      ";\n    min-width: 1px;\n}\n.guichanxy-interval-handle:focus {\n    background: ",
                      ";\n}\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3),
            a = i.theme.colors.componentBackground,
            s = i.theme.colors.componentForeground,
            u = i.theme.colors.componentActive;
          e.exports = r(o, a, s, i.theme.sizing.componentHeight, u);
        },
        function (e, n, t) {
          "use strict";
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.MenuBar = void 0);
          var i = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            r = o(t(0)),
            a = o(t(4)),
            s = o((t(1), t(15)));
          n.MenuBar = (function (e) {
            function n(e, o) {
              !(function (e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              var i = (function (e, n) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !n || ("object" != typeof n && "function" != typeof n)
                    ? e
                    : n;
                })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)),
                a = t(73);
              if (
                ((i.element = document.createElement("div")),
                (i.element.className = a["guichanxy-bar"]),
                e.appendChild(i.element),
                o.title)
              ) {
                var u = i.element.appendChild(document.createElement("div"));
                (u.className = a["guichanxy-bar-title"]),
                  (u.innerHTML = o.title);
              }
              var l = i.element.appendChild(document.createElement("button"));
              if (
                ((l.className = a["guichanxy-bar-button"]),
                (l.innerHTML = "Controls"),
                (0, r.default)(l, {
                  left: "left" == o.align ? "0" : "unset",
                  right: "left" == o.align ? "unset" : "0",
                }),
                (l.onclick = function () {
                  i.emit("ontogglepanel");
                }),
                s.default.isEnabled)
              ) {
                var c = i.element.appendChild(document.createElement("button"));
                (c.className = a["guichanxy-bar-button"]),
                  (c.innerHTML = "「　」"),
                  c.setAttribute("aria-label", "Toggle Fullscreen"),
                  (0, r.default)(c, {
                    left: "left" == o.align ? "unset" : "0",
                    right: "left" == o.align ? "0" : "unset",
                  }),
                  (c.onclick = function () {
                    i.emit("onfullscreenrequested");
                  });
              }
              return i;
            }
            return (
              (function (e, n) {
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, n)
                      : (e.__proto__ = n));
              })(n, e),
              i(n, [
                {
                  key: "SetVisible",
                  value: function (e) {
                    this.element.style.display = e ? "block" : "none";
                  },
                },
              ]),
              n
            );
          })(a.default);
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n\n.guichanxy-bar {\n    background-color: ",
                  ";\n    height: ",
                  ";\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    cursor: default;\n}\n\n.guichanxy-bar-title {\n    color: ",
                  ";\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: ",
                  ";\n    color: ",
                  ";\n    -webkit-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n}\n\n.guichanxy-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: ",
                  ";\n    background-color: ",
                  ";\n    -webkit-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we're providing our own visual feedback */\n.guichanxy-bar-button:focus {\n    outline:none;\n}\n.guichanxy-bar-button::-moz-focus-inner {\n    border:0;\n}\n\n.guichanxy-bar-button:hover,\n.guichanxy-bar-button:focus {\n    color: ",
                  ";\n    background-color: ",
                  ";\n}\n\n.guichanxy-bar-button:active {\n    color: ",
                  " !important;\n    background-color: ",
                  " !important;\n}\n\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n\n.guichanxy-bar {\n    background-color: ",
                      ";\n    height: ",
                      ";\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    cursor: default;\n}\n\n.guichanxy-bar-title {\n    color: ",
                      ";\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: ",
                      ";\n    color: ",
                      ";\n    -webkit-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n}\n\n.guichanxy-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: ",
                      ";\n    background-color: ",
                      ";\n    -webkit-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we're providing our own visual feedback */\n.guichanxy-bar-button:focus {\n    outline:none;\n}\n.guichanxy-bar-button::-moz-focus-inner {\n    border:0;\n}\n\n.guichanxy-bar-button:hover,\n.guichanxy-bar-button:focus {\n    color: ",
                      ";\n    background-color: ",
                      ";\n}\n\n.guichanxy-bar-button:active {\n    color: ",
                      " !important;\n    background-color: ",
                      " !important;\n}\n\n\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3);
          e.exports = r(
            o,
            i.theme.colors.menuBarBackground,
            i.theme.sizing.menuBarHeight,
            i.theme.colors.text1,
            i.theme.sizing.menuBarHeight,
            i.theme.colors.menuBarText,
            i.theme.colors.textPrimary,
            i.theme.colors.componentBackground,
            i.theme.colors.textHover,
            i.theme.colors.componentForeground,
            i.theme.colors.textActive,
            i.theme.colors.componentActive
          );
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.Panel = void 0);
          var o = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            i = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(t(0)),
            r = t(1);
          n.Panel = (function () {
            function e(n, o) {
              (function (e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.opts = o),
                (this.styles = t(75)),
                (this.container = n.appendChild(document.createElement("div"))),
                (this.container.className =
                  this.styles["guichanxy-panel-container"]),
                (0, i.default)(this.container, {
                  width: o.width,
                  opacity: o.opacity || 1,
                  left: "left" == o.align ? "0" : "unset",
                  right: "left" == o.align ? "unset" : "0",
                }),
                "outer" == o.panelMode &&
                  (0, i.default)(this.container, {
                    left: "left" == o.align ? "unset" : "100%",
                    right: "left" == o.align ? "100%" : "unset",
                  }),
                "none" === o.barMode && this._MakeToggleButton(),
                (this.panel = this.container.appendChild(
                  document.createElement("div")
                )),
                (this.panel.className = this.styles["guichanxy-panel"]),
                "none" === o.barMode &&
                  o.title &&
                  t(76)(this.panel, o.title, r.theme);
            }
            return (
              o(e, [
                {
                  key: "SetVisible",
                  value: function (e) {
                    e
                      ? (this.panel.classList.remove(
                          this.styles["guichanxy-panel-hidden"]
                        ),
                        this.menuButton &&
                          this.menuButton.setAttribute("alt", "Close GUI"))
                      : (this.panel.classList.add(
                          this.styles["guichanxy-panel-hidden"]
                        ),
                        this.menuButton &&
                          this.menuButton.setAttribute("alt", "Open GUI"));
                  },
                },
                {
                  key: "ToggleVisible",
                  value: function () {
                    this.panel.classList.contains(
                      this.styles["guichanxy-panel-hidden"]
                    )
                      ? this.SetVisible(!0)
                      : this.SetVisible(!1);
                  },
                },
                {
                  key: "_MakeToggleButton",
                  value: function () {
                    var e = this;
                    (this.menuButton = this.container.appendChild(
                      document.createElement("button")
                    )),
                      (this.menuButton.className =
                        this.styles["guichanxy-panel-toggle-button"]),
                      (0, i.default)(this.menuButton, {
                        left: "left" == this.opts.align ? "0px" : "unset",
                        right: "left" == this.opts.align ? "unset" : "0px",
                      }),
                      (this.menuButton.onclick = function () {
                        e.ToggleVisible();
                      }),
                      this.menuButton.addEventListener("mouseup", function () {
                        e.menuButton.blur();
                      }),
                      (this.menuButton.innerHTML =
                        '\n        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">\n            <rect x="10%" y="10%" width="80%" height="80%"/>\n        </svg>\n        ');
                  },
                },
              ]),
              e
            );
          })();
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n\n.guichanxy-panel-container {\n    position: absolute;\n    background: ",
                  ";\n}\n\n.guichanxy-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - ",
                  ");\n\n    /* all: initial;  */\n    -webkit-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.guichanxy-panel.guichanxy-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.guichanxy-panel * {\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.guichanxy-panel input {\n    font-family: 'Hack';\n    font-size: 11px;\n    display: inline;\n}\n\n.guichanxy-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.guichanxy-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: ",
                  ";\n    background-color: ",
                  ";\n\n    -webkit-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n\n}\n\n/* Open/Close button styling */\n.guichanxy-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: ",
                  ";\n}\n\n/* Remove browser default outlines since we're providing our own */\n.guichanxy-panel-toggle-button:focus {\n    outline:none;\n}\n.guichanxy-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guichanxy-panel-toggle-button:hover,\n.guichanxy-panel-toggle-button:focus {\n    color: ",
                  ";\n    background-color: ",
                  ";\n}\n\n.guichanxy-panel-toggle-button:active {\n    color: ",
                  ";\n    background-color: ",
                  ";\n}\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n\n.guichanxy-panel-container {\n    position: absolute;\n    background: ",
                      ";\n}\n\n.guichanxy-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - ",
                      ");\n\n    /* all: initial;  */\n    -webkit-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.guichanxy-panel.guichanxy-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.guichanxy-panel * {\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.guichanxy-panel input {\n    font-family: 'Hack';\n    font-size: 11px;\n    display: inline;\n}\n\n.guichanxy-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.guichanxy-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: ",
                      ";\n    background-color: ",
                      ";\n\n    -webkit-variables.user-select: none;\n    -moz-variables.user-select: none;\n    -ms-variables.user-select: none;\n    variables.user-select: none;\n\n}\n\n/* Open/Close button styling */\n.guichanxy-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: ",
                      ";\n}\n\n/* Remove browser default outlines since we're providing our own */\n.guichanxy-panel-toggle-button:focus {\n    outline:none;\n}\n.guichanxy-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guichanxy-panel-toggle-button:hover,\n.guichanxy-panel-toggle-button:focus {\n    color: ",
                      ";\n    background-color: ",
                      ";\n}\n\n.guichanxy-panel-toggle-button:active {\n    color: ",
                      ";\n    background-color: ",
                      ";\n}\n\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3);
          e.exports = r(
            o,
            i.theme.colors.panelBackground,
            i.theme.sizing.componentSpacing,
            i.theme.colors.textPrimary,
            i.theme.colors.componentBackground,
            i.theme.colors.componentForeground,
            i.theme.colors.textHover,
            i.theme.colors.componentForeground,
            i.theme.colors.textActive,
            i.theme.colors.componentActive
          );
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = function (e, n, t) {
              var i = e.appendChild(document.createElement("div"));
              return (
                (i.innerHTML = n),
                (0, o.default)(i, {
                  width: "100%",
                  textAlign: "center",
                  color: t.colors.textSecondary,
                  height: "20px",
                  marginBottom: "4px",
                }),
                i
              );
            });
          var o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(t(0));
          e.exports = n.default;
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.ToastArea = void 0);
          var o = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n;
              };
            })(),
            i = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(t(0));
          t(1),
            (n.ToastArea = (function () {
              function e(n, o) {
                (function (e, n) {
                  if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.opts = o),
                  (this.styles = t(78)),
                  (this.element = n.appendChild(document.createElement("div"))),
                  this.element.classList.add(
                    this.styles["guichanxy-toast-area"]
                  ),
                  (0, i.default)(this.element, {
                    position: "absolute",
                    width: "100%",
                  });
              }
              return (
                o(e, [
                  {
                    key: "CreateToast",
                    value: function (e) {
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 5e3,
                        t =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0;
                      console.log("[Toast] " + e);
                      var o = this.element.appendChild(
                        document.createElement("div")
                      );
                      o.classList.add(
                        this.styles["guichanxy-toast-notification"]
                      ),
                        o.setAttribute("aria-live", "polite"),
                        (o.innerHTML = e),
                        (0, i.default)(o, {});
                      var r = o.appendChild(document.createElement("button"));
                      (r.innerHTML = "&#10006;"),
                        r.classList.add(
                          this.styles["guichanxy-toast-close-button"]
                        );
                      var a = void 0,
                        s = function () {
                          o.blur(),
                            (0, i.default)(o, { opacity: "0" }),
                            clearTimeout(a),
                            (a = setTimeout(function () {
                              o && o.parentNode.removeChild(o);
                            }, t));
                        };
                      (a = setTimeout(s, n)), (r.onclick = s);
                    },
                  },
                ]),
                e
              );
            })());
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n\n.guichanxy-toast-notification {\n    box-sizing: border-box;\n    color: theme.colors.text1;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n    font-family: 'Hack', monospace;\n    font-size: 11px;\n}\n\n.guichanxy-toast-area .guichanxy-toast-notification:nth-child(odd) {\n    color: ",
                  ";\n    background-color: ",
                  ";\n}\n\n.guichanxy-toast-area .guichanxy-toast-notification:nth-child(even) {\n    color: ",
                  ";\n    background-color: ",
                  ";\n}\n\n.guichanxy-toast-close-button {\n    color: ",
                  ";\n    background: transparent;\n    position: absolute;\n    textAlign: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n\n.guichanxy-toast-notification {\n    box-sizing: border-box;\n    color: theme.colors.text1;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n    font-family: 'Hack', monospace;\n    font-size: 11px;\n}\n\n.guichanxy-toast-area .guichanxy-toast-notification:nth-child(odd) {\n    color: ",
                      ";\n    background-color: ",
                      ";\n}\n\n.guichanxy-toast-area .guichanxy-toast-notification:nth-child(even) {\n    color: ",
                      ";\n    background-color: ",
                      ";\n}\n\n.guichanxy-toast-close-button {\n    color: ",
                      ";\n    background: transparent;\n    position: absolute;\n    textAlign: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}\n\n",
                    ]),
                  },
                }
              )
            ),
            i = t(1),
            r = t(3);
          e.exports = r(
            o,
            i.theme.colors.textPrimary,
            i.theme.colors.panelBackground,
            i.theme.colors.textPrimary,
            i.theme.colors.menuBarBackground,
            i.theme.colors.textPrimary
          );
        },
        function (e, n, t) {
          "use strict";
          var o = Object.freeze(
              Object.defineProperties(
                [
                  "\n\n.guichanxy-container {\n    position: relative;\n    left: 0;\n    width: 100%;\n    font-size: 11px;\n    z-index: 9999;\n}\n\n",
                ],
                {
                  raw: {
                    value: Object.freeze([
                      "\n\n.guichanxy-container {\n    position: relative;\n    left: 0;\n    width: 100%;\n    font-size: 11px;\n    z-index: 9999;\n}\n\n",
                    ]),
                  },
                }
              )
            ),
            i = (t(1), t(3));
          e.exports = i(o);
        },
      ]);
    }),
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = n())
      : "function" == typeof define && define.amd
      ? define("guichanxy", [], n)
      : "object" == typeof exports
      ? (exports.guichanxy = n())
      : (e.guichanxy = n());
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis
              ? globalThis
              : e || self).fastUniqueNumbers = {})
        );
  })(this, function (e) {
    "use strict";
    var t,
      r =
        void 0 === Number.MAX_SAFE_INTEGER
          ? 9007199254740991
          : Number.MAX_SAFE_INTEGER,
      n = new WeakMap(),
      i = (function (e, t) {
        return function (n) {
          var i = t.get(n),
            o = void 0 === i ? n.size : i < 1073741824 ? i + 1 : 0;
          if (!n.has(o)) return e(n, o);
          if (n.size < 536870912) {
            for (; n.has(o); ) o = Math.floor(1073741824 * Math.random());
            return e(n, o);
          }
          if (n.size > r)
            throw new Error(
              "Congratulations, you created a collection of unique numbers which uses all available integers!"
            );
          for (; n.has(o); ) o = Math.floor(Math.random() * r);
          return e(n, o);
        };
      })(
        ((t = n),
        function (e, r) {
          return t.set(e, r), r;
        }),
        n
      ),
      o = (function (e) {
        return function (t) {
          var r = e(t);
          return t.add(r), r;
        };
      })(i);
    (e.addUniqueNumber = o),
      (e.generateUniqueNumber = i),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
    (function (e, t) {
      "object" == typeof exports && "undefined" != typeof module
        ? t(exports, require("fast-unique-numbers"))
        : "function" == typeof define && define.amd
        ? define(["exports", "fast-unique-numbers"], t)
        : t(
            ((e =
              "undefined" != typeof globalThis
                ? globalThis
                : e || self).workerTimersBroker = {}),
            e.fastUniqueNumbers
          );
    })(this, function (e, t) {
      "use strict";
      (e.load = function (e) {
        var r = new Map([[0, function () {}]]),
          n = new Map([[0, function () {}]]),
          i = new Map(),
          o = new Worker(e);
        o.addEventListener("message", function (e) {
          var t = e.data;
          if (
            (function (e) {
              return void 0 !== e.method && "call" === e.method;
            })(t)
          ) {
            var o = t.params,
              a = o.timerId,
              s = o.timerType;
            if ("interval" === s) {
              var u = r.get(a);
              if ("number" == typeof u) {
                var d = i.get(u);
                if (void 0 === d || d.timerId !== a || d.timerType !== s)
                  throw new Error("The timer is in an undefined state.");
              } else {
                if (void 0 === u)
                  throw new Error("The timer is in an undefined state.");
                u();
              }
            } else if ("timeout" === s) {
              var f = n.get(a);
              if ("number" == typeof f) {
                var l = i.get(f);
                if (void 0 === l || l.timerId !== a || l.timerType !== s)
                  throw new Error("The timer is in an undefined state.");
              } else {
                if (void 0 === f)
                  throw new Error("The timer is in an undefined state.");
                f(), n.delete(a);
              }
            }
          } else {
            if (
              !(function (e) {
                return null === e.error && "number" == typeof e.id;
              })(t)
            ) {
              var m = t.error.message;
              throw new Error(m);
            }
            var c = t.id,
              p = i.get(c);
            if (void 0 === p)
              throw new Error("The timer is in an undefined state.");
            var v = p.timerId,
              h = p.timerType;
            i.delete(c), "interval" === h ? r.delete(v) : n.delete(v);
          }
        });
        return {
          clearInterval: function (e) {
            var n = t.generateUniqueNumber(i);
            i.set(n, { timerId: e, timerType: "interval" }),
              r.set(e, n),
              o.postMessage({
                id: n,
                method: "clear",
                params: { timerId: e, timerType: "interval" },
              });
          },
          clearTimeout: function (e) {
            var r = t.generateUniqueNumber(i);
            i.set(r, { timerId: e, timerType: "timeout" }),
              n.set(e, r),
              o.postMessage({
                id: r,
                method: "clear",
                params: { timerId: e, timerType: "timeout" },
              });
          },
          setInterval: function (e, n) {
            var i = t.generateUniqueNumber(r);
            return (
              r.set(i, function () {
                e(),
                  "function" == typeof r.get(i) &&
                    o.postMessage({
                      id: null,
                      method: "set",
                      params: {
                        delay: n,
                        now: performance.now(),
                        timerId: i,
                        timerType: "interval",
                      },
                    });
              }),
              o.postMessage({
                id: null,
                method: "set",
                params: {
                  delay: n,
                  now: performance.now(),
                  timerId: i,
                  timerType: "interval",
                },
              }),
              i
            );
          },
          setTimeout: function (e, r) {
            var i = t.generateUniqueNumber(n);
            return (
              n.set(i, e),
              o.postMessage({
                id: null,
                method: "set",
                params: {
                  delay: r,
                  now: performance.now(),
                  timerId: i,
                  timerType: "timeout",
                },
              }),
              i
            );
          },
        };
      }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function (e, t) {
      "object" == typeof exports && "undefined" != typeof module
        ? t(exports, require("worker-timers-broker"))
        : "function" == typeof define && define.amd
        ? define(["exports", "worker-timers-broker"], t)
        : t(
            ((e =
              "undefined" != typeof globalThis
                ? globalThis
                : e || self).workerTimers = {}),
            e.workerTimersBroker
          );
    })(this, function (e, t) {
      "use strict";
      var r = null,
        n = (function (e, t) {
          return function () {
            if (null !== r) return r;
            var n = new Blob([t], {
                type: "application/javascript; charset=utf-8",
              }),
              i = URL.createObjectURL(n);
            return (
              (r = e(i)).setTimeout(function () {
                return URL.revokeObjectURL(i);
              }, 0),
              r
            );
          };
        })(
          t.load,
          '(()=>{var e={67:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error(\'There is no interval scheduled with the given id "\'.concat(t,\'".\'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error(\'The given type "\'.concat(c,\'" is not supported\'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error(\'The given method "\'.concat(t.method,\'" is not supported\'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error(\'The given type "\'.concat(v,\'" is not supported\'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(67)})()})();'
        );
      (e.clearInterval = function (e) {
        return n().clearInterval(e);
      }),
        (e.clearTimeout = function (e) {
          return n().clearTimeout(e);
        }),
        (e.setInterval = function (e, t) {
          return n().setInterval(e, t);
        }),
        (e.setTimeout = function (e, t) {
          return n().setTimeout(e, t);
        }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
