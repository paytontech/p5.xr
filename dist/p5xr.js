(() => {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
"use strict";
var $cd6c3cdb54bdf8d0$exports = {};
"use strict";
Object.defineProperty($cd6c3cdb54bdf8d0$exports, "__esModule", {
    value: true
});
var $fa5b9f15c1d6b18d$exports = {};

$parcel$export($fa5b9f15c1d6b18d$exports, "create", () => $fa5b9f15c1d6b18d$export$185802fd694ee1f5);
$parcel$export($fa5b9f15c1d6b18d$exports, "fromMat4", () => $fa5b9f15c1d6b18d$export$b4ad467060d346fe);
$parcel$export($fa5b9f15c1d6b18d$exports, "clone", () => $fa5b9f15c1d6b18d$export$9cd59f9826255e47);
$parcel$export($fa5b9f15c1d6b18d$exports, "copy", () => $fa5b9f15c1d6b18d$export$784d13d8ee351f07);
$parcel$export($fa5b9f15c1d6b18d$exports, "fromValues", () => $fa5b9f15c1d6b18d$export$a82be99ed2a44a7d);
$parcel$export($fa5b9f15c1d6b18d$exports, "set", () => $fa5b9f15c1d6b18d$export$adaa4cf7ef1b65be);
$parcel$export($fa5b9f15c1d6b18d$exports, "identity", () => $fa5b9f15c1d6b18d$export$f0954fd7d5368655);
$parcel$export($fa5b9f15c1d6b18d$exports, "transpose", () => $fa5b9f15c1d6b18d$export$9cb09a71b7d66923);
$parcel$export($fa5b9f15c1d6b18d$exports, "invert", () => $fa5b9f15c1d6b18d$export$6897c284b6f9f4dc);
$parcel$export($fa5b9f15c1d6b18d$exports, "adjoint", () => $fa5b9f15c1d6b18d$export$33f3c024b4ae00a1);
$parcel$export($fa5b9f15c1d6b18d$exports, "determinant", () => $fa5b9f15c1d6b18d$export$a04698f914c55ed9);
$parcel$export($fa5b9f15c1d6b18d$exports, "multiply", () => $fa5b9f15c1d6b18d$export$2060d2db72cce88f);
$parcel$export($fa5b9f15c1d6b18d$exports, "translate", () => $fa5b9f15c1d6b18d$export$d73ee8ef04f5226a);
$parcel$export($fa5b9f15c1d6b18d$exports, "rotate", () => $fa5b9f15c1d6b18d$export$bb628a54ab399bc9);
$parcel$export($fa5b9f15c1d6b18d$exports, "scale", () => $fa5b9f15c1d6b18d$export$dcdf75081b88279d);
$parcel$export($fa5b9f15c1d6b18d$exports, "fromTranslation", () => $fa5b9f15c1d6b18d$export$bc9e79e74e9fddf6);
$parcel$export($fa5b9f15c1d6b18d$exports, "fromRotation", () => $fa5b9f15c1d6b18d$export$926fc125ff3c666c);
$parcel$export($fa5b9f15c1d6b18d$exports, "fromScaling", () => $fa5b9f15c1d6b18d$export$832ca188ffb1955d);
$parcel$export($fa5b9f15c1d6b18d$exports, "fromMat2d", () => $fa5b9f15c1d6b18d$export$68f5977575fae9bf);
$parcel$export($fa5b9f15c1d6b18d$exports, "fromQuat", () => $fa5b9f15c1d6b18d$export$2ff2bbe382249af7);
$parcel$export($fa5b9f15c1d6b18d$exports, "normalFromMat4", () => $fa5b9f15c1d6b18d$export$966b25ab6dc1b1f9);
$parcel$export($fa5b9f15c1d6b18d$exports, "projection", () => $fa5b9f15c1d6b18d$export$b74061472fe7c07);
$parcel$export($fa5b9f15c1d6b18d$exports, "str", () => $fa5b9f15c1d6b18d$export$42d51816ce590c93);
$parcel$export($fa5b9f15c1d6b18d$exports, "frob", () => $fa5b9f15c1d6b18d$export$326827e8268e9cdb);
$parcel$export($fa5b9f15c1d6b18d$exports, "add", () => $fa5b9f15c1d6b18d$export$e16d8520af44a096);
$parcel$export($fa5b9f15c1d6b18d$exports, "subtract", () => $fa5b9f15c1d6b18d$export$4e2d2ead65e5f7e3);
$parcel$export($fa5b9f15c1d6b18d$exports, "multiplyScalar", () => $fa5b9f15c1d6b18d$export$c697bed75648cdb7);
$parcel$export($fa5b9f15c1d6b18d$exports, "multiplyScalarAndAdd", () => $fa5b9f15c1d6b18d$export$553579f63bdd7137);
$parcel$export($fa5b9f15c1d6b18d$exports, "exactEquals", () => $fa5b9f15c1d6b18d$export$f2599a5cf1109d8);
$parcel$export($fa5b9f15c1d6b18d$exports, "equals", () => $fa5b9f15c1d6b18d$export$e9bab7fafb253603);
$parcel$export($fa5b9f15c1d6b18d$exports, "mul", () => $fa5b9f15c1d6b18d$export$6e3a27864ab166fe);
$parcel$export($fa5b9f15c1d6b18d$exports, "sub", () => $fa5b9f15c1d6b18d$export$f93b5905241a7cca);
var $01de35b489c2b37a$export$fd293b15f47e270 = 0.000001;
var $01de35b489c2b37a$export$b67359430d3b1b2 = typeof Float32Array !== "undefined" ? Float32Array : Array;
var $01de35b489c2b37a$export$5ada478c8a628231 = Math.random;
function $01de35b489c2b37a$export$cb2c0eb57f5e532c(type) {
    $01de35b489c2b37a$export$b67359430d3b1b2 = type;
}
var $01de35b489c2b37a$var$degree = Math.PI / 180;
function $01de35b489c2b37a$export$408b8ee5959eefd5(a) {
    return a * $01de35b489c2b37a$var$degree;
}
function $01de35b489c2b37a$export$e9bab7fafb253603(a, b) {
    return Math.abs(a - b) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function() {
    var y = 0, i = arguments.length;
    while(i--)y += arguments[i] * arguments[i];
    return Math.sqrt(y);
};


function $fa5b9f15c1d6b18d$export$185802fd694ee1f5() {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(9);
    if ($01de35b489c2b37a$export$b67359430d3b1b2 != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
    }
    out[0] = 1;
    out[4] = 1;
    out[8] = 1;
    return out;
}
function $fa5b9f15c1d6b18d$export$b4ad467060d346fe(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}
function $fa5b9f15c1d6b18d$export$9cd59f9826255e47(a) {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function $fa5b9f15c1d6b18d$export$784d13d8ee351f07(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function $fa5b9f15c1d6b18d$export$a82be99ed2a44a7d(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(9);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
function $fa5b9f15c1d6b18d$export$adaa4cf7ef1b65be(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
function $fa5b9f15c1d6b18d$export$f0954fd7d5368655(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function $fa5b9f15c1d6b18d$export$9cb09a71b7d66923(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    return out;
}
function $fa5b9f15c1d6b18d$export$6897c284b6f9f4dc(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20; // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}
function $fa5b9f15c1d6b18d$export$33f3c024b4ae00a1(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    out[0] = a11 * a22 - a12 * a21;
    out[1] = a02 * a21 - a01 * a22;
    out[2] = a01 * a12 - a02 * a11;
    out[3] = a12 * a20 - a10 * a22;
    out[4] = a00 * a22 - a02 * a20;
    out[5] = a02 * a10 - a00 * a12;
    out[6] = a10 * a21 - a11 * a20;
    out[7] = a01 * a20 - a00 * a21;
    out[8] = a00 * a11 - a01 * a10;
    return out;
}
function $fa5b9f15c1d6b18d$export$a04698f914c55ed9(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
function $fa5b9f15c1d6b18d$export$2060d2db72cce88f(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}
function $fa5b9f15c1d6b18d$export$d73ee8ef04f5226a(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a10;
    out[4] = a11;
    out[5] = a12;
    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}
function $fa5b9f15c1d6b18d$export$bb628a54ab399bc9(out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;
    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}
function $fa5b9f15c1d6b18d$export$dcdf75081b88279d(out, a, v) {
    var x = v[0], y = v[1];
    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];
    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function $fa5b9f15c1d6b18d$export$bc9e79e74e9fddf6(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
}
function $fa5b9f15c1d6b18d$export$926fc125ff3c666c(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = -s;
    out[4] = c;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function $fa5b9f15c1d6b18d$export$832ca188ffb1955d(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function $fa5b9f15c1d6b18d$export$68f5977575fae9bf(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;
    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;
    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
}
function $fa5b9f15c1d6b18d$export$2ff2bbe382249af7(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;
    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;
    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;
    return out;
}
function $fa5b9f15c1d6b18d$export$966b25ab6dc1b1f9(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    return out;
}
function $fa5b9f15c1d6b18d$export$b74061472fe7c07(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}
function $fa5b9f15c1d6b18d$export$42d51816ce590c93(a) {
    return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
function $fa5b9f15c1d6b18d$export$326827e8268e9cdb(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
function $fa5b9f15c1d6b18d$export$e16d8520af44a096(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}
function $fa5b9f15c1d6b18d$export$4e2d2ead65e5f7e3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}
function $fa5b9f15c1d6b18d$export$c697bed75648cdb7(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}
function $fa5b9f15c1d6b18d$export$553579f63bdd7137(out, a, b, scale1) {
    out[0] = a[0] + b[0] * scale1;
    out[1] = a[1] + b[1] * scale1;
    out[2] = a[2] + b[2] * scale1;
    out[3] = a[3] + b[3] * scale1;
    out[4] = a[4] + b[4] * scale1;
    out[5] = a[5] + b[5] * scale1;
    out[6] = a[6] + b[6] * scale1;
    out[7] = a[7] + b[7] * scale1;
    out[8] = a[8] + b[8] * scale1;
    return out;
}
function $fa5b9f15c1d6b18d$export$f2599a5cf1109d8(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
function $fa5b9f15c1d6b18d$export$e9bab7fafb253603(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
    return Math.abs(a0 - b0) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
var $fa5b9f15c1d6b18d$export$6e3a27864ab166fe = $fa5b9f15c1d6b18d$export$2060d2db72cce88f;
var $fa5b9f15c1d6b18d$export$f93b5905241a7cca = $fa5b9f15c1d6b18d$export$4e2d2ead65e5f7e3;

var $d9f65603c21f6244$exports = {};

$parcel$export($d9f65603c21f6244$exports, "create", () => $d9f65603c21f6244$export$185802fd694ee1f5);
$parcel$export($d9f65603c21f6244$exports, "identity", () => $d9f65603c21f6244$export$f0954fd7d5368655);
$parcel$export($d9f65603c21f6244$exports, "setAxisAngle", () => $d9f65603c21f6244$export$4286ddefc8f49512);
$parcel$export($d9f65603c21f6244$exports, "getAxisAngle", () => $d9f65603c21f6244$export$3f70be5e7d7dc51);
$parcel$export($d9f65603c21f6244$exports, "getAngle", () => $d9f65603c21f6244$export$b363da9ded343252);
$parcel$export($d9f65603c21f6244$exports, "dot", () => $d9f65603c21f6244$export$94132a0e348806d4);
$parcel$export($d9f65603c21f6244$exports, "multiply", () => $d9f65603c21f6244$export$2060d2db72cce88f);
$parcel$export($d9f65603c21f6244$exports, "rotateX", () => $d9f65603c21f6244$export$a59c8716592e09af);
$parcel$export($d9f65603c21f6244$exports, "rotateY", () => $d9f65603c21f6244$export$cf71e4d4ca4d1cfd);
$parcel$export($d9f65603c21f6244$exports, "rotateZ", () => $d9f65603c21f6244$export$ea6eae3365de5b9c);
$parcel$export($d9f65603c21f6244$exports, "calculateW", () => $d9f65603c21f6244$export$fb72b72e8d764d4e);
$parcel$export($d9f65603c21f6244$exports, "exp", () => $d9f65603c21f6244$export$b310ec824aaee37f);
$parcel$export($d9f65603c21f6244$exports, "ln", () => $d9f65603c21f6244$export$876cb1b29620556f);
$parcel$export($d9f65603c21f6244$exports, "pow", () => $d9f65603c21f6244$export$9c297f60e22e3389);
$parcel$export($d9f65603c21f6244$exports, "scale", () => $d9f65603c21f6244$export$dcdf75081b88279d);
$parcel$export($d9f65603c21f6244$exports, "slerp", () => $d9f65603c21f6244$export$1544d9bc2995de08);
$parcel$export($d9f65603c21f6244$exports, "random", () => $d9f65603c21f6244$export$4385e60b38654f68);
$parcel$export($d9f65603c21f6244$exports, "invert", () => $d9f65603c21f6244$export$6897c284b6f9f4dc);
$parcel$export($d9f65603c21f6244$exports, "conjugate", () => $d9f65603c21f6244$export$7679f47e72c62560);
$parcel$export($d9f65603c21f6244$exports, "fromMat3", () => $d9f65603c21f6244$export$272a1eb8e5a4b55b);
$parcel$export($d9f65603c21f6244$exports, "fromEuler", () => $d9f65603c21f6244$export$7a404a587ea85af);
$parcel$export($d9f65603c21f6244$exports, "str", () => $d9f65603c21f6244$export$42d51816ce590c93);
$parcel$export($d9f65603c21f6244$exports, "clone", () => $d9f65603c21f6244$export$9cd59f9826255e47);
$parcel$export($d9f65603c21f6244$exports, "fromValues", () => $d9f65603c21f6244$export$a82be99ed2a44a7d);
$parcel$export($d9f65603c21f6244$exports, "copy", () => $d9f65603c21f6244$export$784d13d8ee351f07);
$parcel$export($d9f65603c21f6244$exports, "set", () => $d9f65603c21f6244$export$adaa4cf7ef1b65be);
$parcel$export($d9f65603c21f6244$exports, "add", () => $d9f65603c21f6244$export$e16d8520af44a096);
$parcel$export($d9f65603c21f6244$exports, "mul", () => $d9f65603c21f6244$export$6e3a27864ab166fe);
$parcel$export($d9f65603c21f6244$exports, "lerp", () => $d9f65603c21f6244$export$3a89f8d6f6bf6c9f);
$parcel$export($d9f65603c21f6244$exports, "length", () => $d9f65603c21f6244$export$f24224f1c91d8156);
$parcel$export($d9f65603c21f6244$exports, "len", () => $d9f65603c21f6244$export$fc1400facf92c78);
$parcel$export($d9f65603c21f6244$exports, "squaredLength", () => $d9f65603c21f6244$export$ab44e1323ffc8376);
$parcel$export($d9f65603c21f6244$exports, "sqrLen", () => $d9f65603c21f6244$export$99d8dd3f32a3435);
$parcel$export($d9f65603c21f6244$exports, "normalize", () => $d9f65603c21f6244$export$a3295358bff77e);
$parcel$export($d9f65603c21f6244$exports, "exactEquals", () => $d9f65603c21f6244$export$f2599a5cf1109d8);
$parcel$export($d9f65603c21f6244$exports, "equals", () => $d9f65603c21f6244$export$e9bab7fafb253603);
$parcel$export($d9f65603c21f6244$exports, "rotationTo", () => $d9f65603c21f6244$export$72d66f5842c00904);
$parcel$export($d9f65603c21f6244$exports, "sqlerp", () => $d9f65603c21f6244$export$699b0866ca50f6cb);
$parcel$export($d9f65603c21f6244$exports, "setAxes", () => $d9f65603c21f6244$export$937ca0a544b2d712);


var $05f70edae4a71625$exports = {};

$parcel$export($05f70edae4a71625$exports, "create", () => $05f70edae4a71625$export$185802fd694ee1f5);
$parcel$export($05f70edae4a71625$exports, "clone", () => $05f70edae4a71625$export$9cd59f9826255e47);
$parcel$export($05f70edae4a71625$exports, "length", () => $05f70edae4a71625$export$f24224f1c91d8156);
$parcel$export($05f70edae4a71625$exports, "fromValues", () => $05f70edae4a71625$export$a82be99ed2a44a7d);
$parcel$export($05f70edae4a71625$exports, "copy", () => $05f70edae4a71625$export$784d13d8ee351f07);
$parcel$export($05f70edae4a71625$exports, "set", () => $05f70edae4a71625$export$adaa4cf7ef1b65be);
$parcel$export($05f70edae4a71625$exports, "add", () => $05f70edae4a71625$export$e16d8520af44a096);
$parcel$export($05f70edae4a71625$exports, "subtract", () => $05f70edae4a71625$export$4e2d2ead65e5f7e3);
$parcel$export($05f70edae4a71625$exports, "multiply", () => $05f70edae4a71625$export$2060d2db72cce88f);
$parcel$export($05f70edae4a71625$exports, "divide", () => $05f70edae4a71625$export$cd007d971a5a2143);
$parcel$export($05f70edae4a71625$exports, "ceil", () => $05f70edae4a71625$export$803ce6b71a0a94b2);
$parcel$export($05f70edae4a71625$exports, "floor", () => $05f70edae4a71625$export$a3fe094919f356fd);
$parcel$export($05f70edae4a71625$exports, "min", () => $05f70edae4a71625$export$96ec731ed4dcb222);
$parcel$export($05f70edae4a71625$exports, "max", () => $05f70edae4a71625$export$8960430cfd85939f);
$parcel$export($05f70edae4a71625$exports, "round", () => $05f70edae4a71625$export$2077e0241d6afd3c);
$parcel$export($05f70edae4a71625$exports, "scale", () => $05f70edae4a71625$export$dcdf75081b88279d);
$parcel$export($05f70edae4a71625$exports, "scaleAndAdd", () => $05f70edae4a71625$export$19cedf1da84ba854);
$parcel$export($05f70edae4a71625$exports, "distance", () => $05f70edae4a71625$export$9f17032d917177de);
$parcel$export($05f70edae4a71625$exports, "squaredDistance", () => $05f70edae4a71625$export$88e6ebb4fe54f538);
$parcel$export($05f70edae4a71625$exports, "squaredLength", () => $05f70edae4a71625$export$ab44e1323ffc8376);
$parcel$export($05f70edae4a71625$exports, "negate", () => $05f70edae4a71625$export$aef51622e549b8b0);
$parcel$export($05f70edae4a71625$exports, "inverse", () => $05f70edae4a71625$export$70ae2c07e401031b);
$parcel$export($05f70edae4a71625$exports, "normalize", () => $05f70edae4a71625$export$a3295358bff77e);
$parcel$export($05f70edae4a71625$exports, "dot", () => $05f70edae4a71625$export$94132a0e348806d4);
$parcel$export($05f70edae4a71625$exports, "cross", () => $05f70edae4a71625$export$bb646b20bb93d339);
$parcel$export($05f70edae4a71625$exports, "lerp", () => $05f70edae4a71625$export$3a89f8d6f6bf6c9f);
$parcel$export($05f70edae4a71625$exports, "hermite", () => $05f70edae4a71625$export$ae8865616f30561c);
$parcel$export($05f70edae4a71625$exports, "bezier", () => $05f70edae4a71625$export$b9c5f84610baddaf);
$parcel$export($05f70edae4a71625$exports, "random", () => $05f70edae4a71625$export$4385e60b38654f68);
$parcel$export($05f70edae4a71625$exports, "transformMat4", () => $05f70edae4a71625$export$5ffbd13800309d59);
$parcel$export($05f70edae4a71625$exports, "transformMat3", () => $05f70edae4a71625$export$f0bfa0a0024626ee);
$parcel$export($05f70edae4a71625$exports, "transformQuat", () => $05f70edae4a71625$export$c32adef9e939ce85);
$parcel$export($05f70edae4a71625$exports, "rotateX", () => $05f70edae4a71625$export$a59c8716592e09af);
$parcel$export($05f70edae4a71625$exports, "rotateY", () => $05f70edae4a71625$export$cf71e4d4ca4d1cfd);
$parcel$export($05f70edae4a71625$exports, "rotateZ", () => $05f70edae4a71625$export$ea6eae3365de5b9c);
$parcel$export($05f70edae4a71625$exports, "angle", () => $05f70edae4a71625$export$944b09d2ad10b378);
$parcel$export($05f70edae4a71625$exports, "zero", () => $05f70edae4a71625$export$7f9972325ebfd559);
$parcel$export($05f70edae4a71625$exports, "str", () => $05f70edae4a71625$export$42d51816ce590c93);
$parcel$export($05f70edae4a71625$exports, "exactEquals", () => $05f70edae4a71625$export$f2599a5cf1109d8);
$parcel$export($05f70edae4a71625$exports, "equals", () => $05f70edae4a71625$export$e9bab7fafb253603);
$parcel$export($05f70edae4a71625$exports, "sub", () => $05f70edae4a71625$export$f93b5905241a7cca);
$parcel$export($05f70edae4a71625$exports, "mul", () => $05f70edae4a71625$export$6e3a27864ab166fe);
$parcel$export($05f70edae4a71625$exports, "div", () => $05f70edae4a71625$export$159d9494db57879b);
$parcel$export($05f70edae4a71625$exports, "dist", () => $05f70edae4a71625$export$6c4a311cc157c764);
$parcel$export($05f70edae4a71625$exports, "sqrDist", () => $05f70edae4a71625$export$2422cd6c492a8b3a);
$parcel$export($05f70edae4a71625$exports, "len", () => $05f70edae4a71625$export$fc1400facf92c78);
$parcel$export($05f70edae4a71625$exports, "sqrLen", () => $05f70edae4a71625$export$99d8dd3f32a3435);
$parcel$export($05f70edae4a71625$exports, "forEach", () => $05f70edae4a71625$export$4b80e395e36b5a56);

function $05f70edae4a71625$export$185802fd694ee1f5() {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(3);
    if ($01de35b489c2b37a$export$b67359430d3b1b2 != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    return out;
}
function $05f70edae4a71625$export$9cd59f9826255e47(a) {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function $05f70edae4a71625$export$f24224f1c91d8156(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.hypot(x, y, z);
}
function $05f70edae4a71625$export$a82be99ed2a44a7d(x, y, z) {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function $05f70edae4a71625$export$784d13d8ee351f07(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function $05f70edae4a71625$export$adaa4cf7ef1b65be(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function $05f70edae4a71625$export$e16d8520af44a096(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}
function $05f70edae4a71625$export$4e2d2ead65e5f7e3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}
function $05f70edae4a71625$export$2060d2db72cce88f(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}
function $05f70edae4a71625$export$cd007d971a5a2143(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}
function $05f70edae4a71625$export$803ce6b71a0a94b2(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
}
function $05f70edae4a71625$export$a3fe094919f356fd(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
}
function $05f70edae4a71625$export$96ec731ed4dcb222(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
}
function $05f70edae4a71625$export$8960430cfd85939f(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
}
function $05f70edae4a71625$export$2077e0241d6afd3c(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
}
function $05f70edae4a71625$export$dcdf75081b88279d(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}
function $05f70edae4a71625$export$19cedf1da84ba854(out, a, b, scale1) {
    out[0] = a[0] + b[0] * scale1;
    out[1] = a[1] + b[1] * scale1;
    out[2] = a[2] + b[2] * scale1;
    return out;
}
function $05f70edae4a71625$export$9f17032d917177de(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.hypot(x, y, z);
}
function $05f70edae4a71625$export$88e6ebb4fe54f538(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
}
function $05f70edae4a71625$export$ab44e1323ffc8376(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
}
function $05f70edae4a71625$export$aef51622e549b8b0(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}
function $05f70edae4a71625$export$70ae2c07e401031b(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}
function $05f70edae4a71625$export$a3295358bff77e(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len1 = x * x + y * y + z * z;
    if (len1 > 0) //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
    out[0] = a[0] * len1;
    out[1] = a[1] * len1;
    out[2] = a[2] * len1;
    return out;
}
function $05f70edae4a71625$export$94132a0e348806d4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function $05f70edae4a71625$export$bb646b20bb93d339(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}
function $05f70edae4a71625$export$3a89f8d6f6bf6c9f(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}
function $05f70edae4a71625$export$ae8865616f30561c(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function $05f70edae4a71625$export$b9c5f84610baddaf(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function $05f70edae4a71625$export$4385e60b38654f68(out, scale2) {
    scale2 = scale2 || 1.0;
    var r = $01de35b489c2b37a$export$5ada478c8a628231() * 2.0 * Math.PI;
    var z = $01de35b489c2b37a$export$5ada478c8a628231() * 2.0 - 1.0;
    var zScale = Math.sqrt(1.0 - z * z) * scale2;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale2;
    return out;
}
function $05f70edae4a71625$export$5ffbd13800309d59(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}
function $05f70edae4a71625$export$f0bfa0a0024626ee(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}
function $05f70edae4a71625$export$c32adef9e939ce85(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a[0], y = a[1], z = a[2]; // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2; // vec3.scale(uuv, uuv, 2);
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}
function $05f70edae4a71625$export$a59c8716592e09af(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function $05f70edae4a71625$export$cf71e4d4ca4d1cfd(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function $05f70edae4a71625$export$ea6eae3365de5b9c(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2]; //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function $05f70edae4a71625$export$944b09d2ad10b378(a, b) {
    var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && $05f70edae4a71625$export$94132a0e348806d4(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function $05f70edae4a71625$export$7f9972325ebfd559(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    return out;
}
function $05f70edae4a71625$export$42d51816ce590c93(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function $05f70edae4a71625$export$f2599a5cf1109d8(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function $05f70edae4a71625$export$e9bab7fafb253603(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
var $05f70edae4a71625$export$f93b5905241a7cca = $05f70edae4a71625$export$4e2d2ead65e5f7e3;
var $05f70edae4a71625$export$6e3a27864ab166fe = $05f70edae4a71625$export$2060d2db72cce88f;
var $05f70edae4a71625$export$159d9494db57879b = $05f70edae4a71625$export$cd007d971a5a2143;
var $05f70edae4a71625$export$6c4a311cc157c764 = $05f70edae4a71625$export$9f17032d917177de;
var $05f70edae4a71625$export$2422cd6c492a8b3a = $05f70edae4a71625$export$88e6ebb4fe54f538;
var $05f70edae4a71625$export$fc1400facf92c78 = $05f70edae4a71625$export$f24224f1c91d8156;
var $05f70edae4a71625$export$99d8dd3f32a3435 = $05f70edae4a71625$export$ab44e1323ffc8376;
var $05f70edae4a71625$export$4b80e395e36b5a56 = function() {
    var vec = $05f70edae4a71625$export$185802fd694ee1f5();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 3;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
        }
        return a;
    };
}();



function $a2882d13ce126e7b$export$185802fd694ee1f5() {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(4);
    if ($01de35b489c2b37a$export$b67359430d3b1b2 != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
    }
    return out;
}
function $a2882d13ce126e7b$export$9cd59f9826255e47(a) {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function $a2882d13ce126e7b$export$a82be99ed2a44a7d(x, y, z, w) {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
function $a2882d13ce126e7b$export$784d13d8ee351f07(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function $a2882d13ce126e7b$export$adaa4cf7ef1b65be(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
function $a2882d13ce126e7b$export$e16d8520af44a096(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}
function $a2882d13ce126e7b$export$4e2d2ead65e5f7e3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}
function $a2882d13ce126e7b$export$2060d2db72cce88f(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
}
function $a2882d13ce126e7b$export$cd007d971a5a2143(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
}
function $a2882d13ce126e7b$export$803ce6b71a0a94b2(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
}
function $a2882d13ce126e7b$export$a3fe094919f356fd(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
}
function $a2882d13ce126e7b$export$96ec731ed4dcb222(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
}
function $a2882d13ce126e7b$export$8960430cfd85939f(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
}
function $a2882d13ce126e7b$export$2077e0241d6afd3c(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
}
function $a2882d13ce126e7b$export$dcdf75081b88279d(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
function $a2882d13ce126e7b$export$19cedf1da84ba854(out, a, b, scale1) {
    out[0] = a[0] + b[0] * scale1;
    out[1] = a[1] + b[1] * scale1;
    out[2] = a[2] + b[2] * scale1;
    out[3] = a[3] + b[3] * scale1;
    return out;
}
function $a2882d13ce126e7b$export$9f17032d917177de(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return Math.hypot(x, y, z, w);
}
function $a2882d13ce126e7b$export$88e6ebb4fe54f538(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
}
function $a2882d13ce126e7b$export$f24224f1c91d8156(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return Math.hypot(x, y, z, w);
}
function $a2882d13ce126e7b$export$ab44e1323ffc8376(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return x * x + y * y + z * z + w * w;
}
function $a2882d13ce126e7b$export$aef51622e549b8b0(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
}
function $a2882d13ce126e7b$export$70ae2c07e401031b(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
}
function $a2882d13ce126e7b$export$a3295358bff77e(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    var len1 = x * x + y * y + z * z + w * w;
    if (len1 > 0) len1 = 1 / Math.sqrt(len1);
    out[0] = x * len1;
    out[1] = y * len1;
    out[2] = z * len1;
    out[3] = w * len1;
    return out;
}
function $a2882d13ce126e7b$export$94132a0e348806d4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function $a2882d13ce126e7b$export$bb646b20bb93d339(out, u, v, w) {
    var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
    var G = u[0];
    var H = u[1];
    var I = u[2];
    var J = u[3];
    out[0] = H * F - I * E + J * D;
    out[1] = -(G * F) + I * C - J * B;
    out[2] = G * E - H * C + J * A;
    out[3] = -(G * D) + H * B - I * A;
    return out;
}
function $a2882d13ce126e7b$export$3a89f8d6f6bf6c9f(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}
function $a2882d13ce126e7b$export$4385e60b38654f68(out, scale2) {
    scale2 = scale2 || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
    // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
    // http://projecteuclid.org/euclid.aoms/1177692644;
    var v1, v2, v3, v4;
    var s1, s2;
    do {
        v1 = $01de35b489c2b37a$export$5ada478c8a628231() * 2 - 1;
        v2 = $01de35b489c2b37a$export$5ada478c8a628231() * 2 - 1;
        s1 = v1 * v1 + v2 * v2;
    }while (s1 >= 1);
    do {
        v3 = $01de35b489c2b37a$export$5ada478c8a628231() * 2 - 1;
        v4 = $01de35b489c2b37a$export$5ada478c8a628231() * 2 - 1;
        s2 = v3 * v3 + v4 * v4;
    }while (s2 >= 1);
    var d = Math.sqrt((1 - s1) / s2);
    out[0] = scale2 * v1;
    out[1] = scale2 * v2;
    out[2] = scale2 * v3 * d;
    out[3] = scale2 * v4 * d;
    return out;
}
function $a2882d13ce126e7b$export$5ffbd13800309d59(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}
function $a2882d13ce126e7b$export$c32adef9e939ce85(out, a, q) {
    var x = a[0], y = a[1], z = a[2];
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3]; // calculate quat * vec
    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
}
function $a2882d13ce126e7b$export$7f9972325ebfd559(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    return out;
}
function $a2882d13ce126e7b$export$42d51816ce590c93(a) {
    return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
function $a2882d13ce126e7b$export$f2599a5cf1109d8(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function $a2882d13ce126e7b$export$e9bab7fafb253603(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= $01de35b489c2b37a$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
var $a2882d13ce126e7b$export$f93b5905241a7cca = $a2882d13ce126e7b$export$4e2d2ead65e5f7e3;
var $a2882d13ce126e7b$export$6e3a27864ab166fe = $a2882d13ce126e7b$export$2060d2db72cce88f;
var $a2882d13ce126e7b$export$159d9494db57879b = $a2882d13ce126e7b$export$cd007d971a5a2143;
var $a2882d13ce126e7b$export$6c4a311cc157c764 = $a2882d13ce126e7b$export$9f17032d917177de;
var $a2882d13ce126e7b$export$2422cd6c492a8b3a = $a2882d13ce126e7b$export$88e6ebb4fe54f538;
var $a2882d13ce126e7b$export$fc1400facf92c78 = $a2882d13ce126e7b$export$f24224f1c91d8156;
var $a2882d13ce126e7b$export$99d8dd3f32a3435 = $a2882d13ce126e7b$export$ab44e1323ffc8376;
var $a2882d13ce126e7b$export$4b80e395e36b5a56 = function() {
    var vec = $a2882d13ce126e7b$export$185802fd694ee1f5();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 4;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            vec[3] = a[i + 3];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
            a[i + 3] = vec[3];
        }
        return a;
    };
}();


function $d9f65603c21f6244$export$185802fd694ee1f5() {
    var out = new $01de35b489c2b37a$export$b67359430d3b1b2(4);
    if ($01de35b489c2b37a$export$b67359430d3b1b2 != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    out[3] = 1;
    return out;
}
function $d9f65603c21f6244$export$f0954fd7d5368655(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
function $d9f65603c21f6244$export$4286ddefc8f49512(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}
function $d9f65603c21f6244$export$3f70be5e7d7dc51(out_axis, q) {
    var rad = Math.acos(q[3]) * 2.0;
    var s = Math.sin(rad / 2.0);
    if (s > $01de35b489c2b37a$export$fd293b15f47e270) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
    } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
    }
    return rad;
}
function $d9f65603c21f6244$export$b363da9ded343252(a, b) {
    var dotproduct = $d9f65603c21f6244$export$94132a0e348806d4(a, b);
    return Math.acos(2 * dotproduct * dotproduct - 1);
}
function $d9f65603c21f6244$export$2060d2db72cce88f(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}
function $d9f65603c21f6244$export$a59c8716592e09af(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}
function $d9f65603c21f6244$export$cf71e4d4ca4d1cfd(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}
function $d9f65603c21f6244$export$ea6eae3365de5b9c(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}
function $d9f65603c21f6244$export$fb72b72e8d764d4e(out, a) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
}
function $d9f65603c21f6244$export$b310ec824aaee37f(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var et = Math.exp(w);
    var s = r > 0 ? et * Math.sin(r) / r : 0;
    out[0] = x * s;
    out[1] = y * s;
    out[2] = z * s;
    out[3] = et * Math.cos(r);
    return out;
}
function $d9f65603c21f6244$export$876cb1b29620556f(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var t = r > 0 ? Math.atan2(r, w) / r : 0;
    out[0] = x * t;
    out[1] = y * t;
    out[2] = z * t;
    out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
    return out;
}
function $d9f65603c21f6244$export$9c297f60e22e3389(out, a, b) {
    $d9f65603c21f6244$export$876cb1b29620556f(out, a);
    $d9f65603c21f6244$export$dcdf75081b88279d(out, out, b);
    $d9f65603c21f6244$export$b310ec824aaee37f(out, out);
    return out;
}
function $d9f65603c21f6244$export$1544d9bc2995de08(out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    var omega, cosom, sinom, scale0, scale1; // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    } // calculate coefficients
    if (1.0 - cosom > $01de35b489c2b37a$export$fd293b15f47e270) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    } // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
}
function $d9f65603c21f6244$export$4385e60b38654f68(out) {
    // Implementation of http://planning.cs.uiuc.edu/node198.html
    // TODO: Calling random 3 times is probably not the fastest solution
    var u1 = $01de35b489c2b37a$export$5ada478c8a628231();
    var u2 = $01de35b489c2b37a$export$5ada478c8a628231();
    var u3 = $01de35b489c2b37a$export$5ada478c8a628231();
    var sqrt1MinusU1 = Math.sqrt(1 - u1);
    var sqrtU1 = Math.sqrt(u1);
    out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
    out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
    out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
    out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
    return out;
}
function $d9f65603c21f6244$export$6897c284b6f9f4dc(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var dot1 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    var invDot = dot1 ? 1.0 / dot1 : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}
function $d9f65603c21f6244$export$7679f47e72c62560(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}
function $d9f65603c21f6244$export$272a1eb8e5a4b55b(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;
    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
}
function $d9f65603c21f6244$export$7a404a587ea85af(out, x, y, z) {
    var halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;
    var sx = Math.sin(x);
    var cx = Math.cos(x);
    var sy = Math.sin(y);
    var cy = Math.cos(y);
    var sz = Math.sin(z);
    var cz = Math.cos(z);
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
    return out;
}
function $d9f65603c21f6244$export$42d51816ce590c93(a) {
    return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var $d9f65603c21f6244$export$9cd59f9826255e47 = $a2882d13ce126e7b$export$9cd59f9826255e47;
var $d9f65603c21f6244$export$a82be99ed2a44a7d = $a2882d13ce126e7b$export$a82be99ed2a44a7d;
var $d9f65603c21f6244$export$784d13d8ee351f07 = $a2882d13ce126e7b$export$784d13d8ee351f07;
var $d9f65603c21f6244$export$adaa4cf7ef1b65be = $a2882d13ce126e7b$export$adaa4cf7ef1b65be;
var $d9f65603c21f6244$export$e16d8520af44a096 = $a2882d13ce126e7b$export$e16d8520af44a096;
var $d9f65603c21f6244$export$6e3a27864ab166fe = $d9f65603c21f6244$export$2060d2db72cce88f;
var $d9f65603c21f6244$export$dcdf75081b88279d = $a2882d13ce126e7b$export$dcdf75081b88279d;
var $d9f65603c21f6244$export$94132a0e348806d4 = $a2882d13ce126e7b$export$94132a0e348806d4;
var $d9f65603c21f6244$export$3a89f8d6f6bf6c9f = $a2882d13ce126e7b$export$3a89f8d6f6bf6c9f;
var $d9f65603c21f6244$export$f24224f1c91d8156 = $a2882d13ce126e7b$export$f24224f1c91d8156;
var $d9f65603c21f6244$export$fc1400facf92c78 = $d9f65603c21f6244$export$f24224f1c91d8156;
var $d9f65603c21f6244$export$ab44e1323ffc8376 = $a2882d13ce126e7b$export$ab44e1323ffc8376;
var $d9f65603c21f6244$export$99d8dd3f32a3435 = $d9f65603c21f6244$export$ab44e1323ffc8376;
var $d9f65603c21f6244$export$a3295358bff77e = $a2882d13ce126e7b$export$a3295358bff77e;
var $d9f65603c21f6244$export$f2599a5cf1109d8 = $a2882d13ce126e7b$export$f2599a5cf1109d8;
var $d9f65603c21f6244$export$e9bab7fafb253603 = $a2882d13ce126e7b$export$e9bab7fafb253603;
var $d9f65603c21f6244$export$72d66f5842c00904 = function() {
    var tmpvec3 = $05f70edae4a71625$export$185802fd694ee1f5();
    var xUnitVec3 = $05f70edae4a71625$export$a82be99ed2a44a7d(1, 0, 0);
    var yUnitVec3 = $05f70edae4a71625$export$a82be99ed2a44a7d(0, 1, 0);
    return function(out, a, b) {
        var dot2 = $05f70edae4a71625$export$94132a0e348806d4(a, b);
        if (dot2 < -0.999999) {
            $05f70edae4a71625$export$bb646b20bb93d339(tmpvec3, xUnitVec3, a);
            if ($05f70edae4a71625$export$fc1400facf92c78(tmpvec3) < 0.000001) $05f70edae4a71625$export$bb646b20bb93d339(tmpvec3, yUnitVec3, a);
            $05f70edae4a71625$export$a3295358bff77e(tmpvec3, tmpvec3);
            $d9f65603c21f6244$export$4286ddefc8f49512(out, tmpvec3, Math.PI);
            return out;
        } else if (dot2 > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            $05f70edae4a71625$export$bb646b20bb93d339(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot2;
            return $d9f65603c21f6244$export$a3295358bff77e(out, out);
        }
    };
}();
var $d9f65603c21f6244$export$699b0866ca50f6cb = function() {
    var temp1 = $d9f65603c21f6244$export$185802fd694ee1f5();
    var temp2 = $d9f65603c21f6244$export$185802fd694ee1f5();
    return function(out, a, b, c, d, t) {
        $d9f65603c21f6244$export$1544d9bc2995de08(temp1, a, d, t);
        $d9f65603c21f6244$export$1544d9bc2995de08(temp2, b, c, t);
        $d9f65603c21f6244$export$1544d9bc2995de08(out, temp1, temp2, 2 * t * (1 - t));
        return out;
    };
}();
var $d9f65603c21f6244$export$937ca0a544b2d712 = function() {
    var matr = $fa5b9f15c1d6b18d$export$185802fd694ee1f5();
    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return $d9f65603c21f6244$export$a3295358bff77e(out, $d9f65603c21f6244$export$272a1eb8e5a4b55b(out, matr));
    };
}();



var $8be5f92ebd0ddc6c$exports = {};
"use strict";
Object.defineProperty($8be5f92ebd0ddc6c$exports, "__esModule", {
    value: true
});
var $6fc3b1475f1d2796$exports = {};
"use strict";
Object.defineProperty($6fc3b1475f1d2796$exports, "__esModule", {
    value: true
});
/**
 * @class p5xrViewer
 * Class that contains state of current viewer position and view. The view and pose matrices
 * are updated automatically but can be accessed directly. For most use cases, the viewer position
 * should be modified using the setViewerPosition function.
 * @category View
 */ class $6fc3b1475f1d2796$var$p5xrViewer {
    constructor(){
        this._pose = null;
        this._view = null;
        this.poseMatrix = new p5.Matrix();
        this.initialMVMatrix = new p5.Matrix();
        this.leftPMatrix = new p5.Matrix();
        this.rightPMatrix = new p5.Matrix();
        this.position = new p5.Vector(0, 0, 0);
        this.setPosition = function(x, y, z) {
            this.position.set(x, y, z);
            p5.instance._renderer.translate(-x, -y, -z);
        };
    }
    /**
   * @type {p5.Matrix}
   * Pose matrix
   */ set pose(newPose) {
        this._pose = newPose;
        this.poseMatrix.set(newPose.poseModelMatrix);
    }
    get pose() {
        return this._pose;
    }
    /**
   * @type {p5.Matrix}
   * View matrix
   */ set view(newView) {
        this._view = newView;
        p5.instance._renderer.uMVMatrix.set(this._view.transform.inverse.matrix);
        p5.instance._renderer.uPMatrix.set(this._view.projectionMatrix);
        p5.instance._renderer._curCamera.cameraMatrix.set(p5.Matrix.identity().mult(this._view.transform.inverse.matrix));
        if (newView.eye === "left") this.leftPMatrix.set(p5.instance._renderer.uPMatrix.copy());
        else this.rightPMatrix.set(p5.instance._renderer.uPMatrix.copy());
    }
    get view() {
        return this._view;
    }
    /**
   * Get a ray object from a viewer for a given screen coordinate.
   * Used for raycasting.
   * @param {Number} screenX Screen X position to use for ray origin
   * @param {Number} screenY Screen Y position to use for ray origin
   * @returns {Ray} Ray from viewer position to screen position, {origin, direction}
   */ getRayFromScreen(screenX, screenY) {
        const ray = {
            origin: new p5.Vector(0, 0, 0),
            direction: new p5.Vector()
        };
        let poseMatrix = this.poseMatrix.copy();
        poseMatrix.transpose(poseMatrix);
        poseMatrix = poseMatrix.mat4; // set origin of ray to pose position
        ray.origin.x = poseMatrix[3];
        ray.origin.y = poseMatrix[7];
        ray.origin.z = poseMatrix[11];
        let initialMVMatrix = this.initialMVMatrix.copy();
        initialMVMatrix.transpose(initialMVMatrix);
        initialMVMatrix = initialMVMatrix.mat4; // transform ray origin to view space
        const rayOriginCopy = ray.origin.copy();
        ray.origin.x = initialMVMatrix[0] * rayOriginCopy.x + initialMVMatrix[1] * rayOriginCopy.y + initialMVMatrix[2] * rayOriginCopy.z + initialMVMatrix[3];
        ray.origin.y = initialMVMatrix[4] * rayOriginCopy.x + initialMVMatrix[5] * rayOriginCopy.y + initialMVMatrix[6] * rayOriginCopy.z + initialMVMatrix[7];
        ray.origin.z = initialMVMatrix[8] * rayOriginCopy.x + initialMVMatrix[9] * rayOriginCopy.y + initialMVMatrix[10] * rayOriginCopy.z + initialMVMatrix[11]; // get ray direction from left eye
        const leftDirection = new p5.Vector(screenX, screenY, -1);
        let leftPMatrixInverse = new p5.Matrix();
        leftPMatrixInverse.invert(this.leftPMatrix.copy());
        leftPMatrixInverse.transpose(leftPMatrixInverse);
        leftPMatrixInverse = leftPMatrixInverse.mat4;
        const leftDirectionCopy = leftDirection.copy();
        leftDirection.x = leftPMatrixInverse[0] * leftDirectionCopy.x + leftPMatrixInverse[1] * leftDirectionCopy.y + leftPMatrixInverse[2] * leftDirectionCopy.z;
        leftDirection.y = leftPMatrixInverse[4] * leftDirectionCopy.x + leftPMatrixInverse[5] * leftDirectionCopy.y + leftPMatrixInverse[6] * leftDirectionCopy.z;
        leftDirection.normalize(); // get ray direction from right eye
        const rightDirection = new p5.Vector(screenX, screenY, -1);
        let rightPMatrixInverse = new p5.Matrix();
        rightPMatrixInverse.invert(this.rightPMatrix.copy());
        rightPMatrixInverse.transpose(rightPMatrixInverse);
        rightPMatrixInverse = rightPMatrixInverse.mat4;
        const rightDirectionCopy = rightDirection.copy();
        rightDirection.x = rightPMatrixInverse[0] * rightDirectionCopy.x + rightPMatrixInverse[1] * rightDirectionCopy.y + rightPMatrixInverse[2] * rightDirectionCopy.z;
        rightDirection.y = rightPMatrixInverse[4] * rightDirectionCopy.x + rightPMatrixInverse[5] * rightDirectionCopy.y + rightPMatrixInverse[6] * rightDirectionCopy.z;
        rightDirection.normalize(); // combine both ray directions
        ray.direction = p5.Vector.add(leftDirection, rightDirection).normalize();
        return ray;
    }
}
$6fc3b1475f1d2796$exports.default = $6fc3b1475f1d2796$var$p5xrViewer;


var $8be5f92ebd0ddc6c$var$_p5xrViewer2 = $8be5f92ebd0ddc6c$var$_interopRequireDefault($6fc3b1475f1d2796$exports);
var $1892aaed78aab8b4$exports = {};
"use strict";
Object.defineProperty($1892aaed78aab8b4$exports, "__esModule", {
    value: true
});
/**
 * @class p5xrButton
 * A button that handles entering and exiting an XR session.
 * All browsers require that the user grant permission to enter XR and permission
 * can only be request with a user gesture.
 * @category Initialization
 */ class $1892aaed78aab8b4$var$p5xrButton {
    constructor(options){
        this.options = options || {};
        this.options.color = options.color || "rgb(237, 34, 93)";
        this.options.background = options.background || "white";
        this.options.opacity = options.opacity || 0.95;
        this.options.disabledOpacity = options.disabledOpacity || 0.5;
        this.options.height = options.height || window.innerWidth / 5;
        this.options.fontSize = options.fontSize || this.options.height / 3;
        this.options.corners = options.corners || "square";
        this.options.cssprefix = options.cssprefix || "webvr-ui";
        this.options.textEnterXRTitle = options.textEnterXRTitle || "ENTER XR";
        this.options.textXRNotFoundTitle = options.textXRNotFoundTitle || "XR NOT FOUND";
        this.options.textExitXRTitle = options.textExitXRTitle || "EXIT XR";
        this.options.onRequestSession = options.onRequestSession || function() {};
        this.options.onEndSession = options.onEndSession || function() {};
        this.options.injectCSS = options.injectCSS !== false;
        this.options = options;
        this.device = null;
        this.session = null;
        this.logoScale = 1.2;
        this._WEBXR_UI_CSS_INJECTED = {};
        this.domElement = options.domElement || this.__createDefaultView(options);
        this.__defaultDisplayStyle = this.domElement.style.display || "initial"; // Bind button click events to __onClick
        this.domElement.addEventListener("click", ()=>this.__onXRButtonClicked());
        this.__forceDisabled = false;
        this.__setDisabledAttribute(true);
        this.setTitle(this.options.textXRNotFoundTitle);
    }
    /**
   * Generate inner HTML for the button
   * @param {String} cssPrefix string to prefix to the css classes
   * @param {Number} height height of the button
   * @returns {String} innerHTML for the button
   * @private
   * @ignore
   */ __generateInnerHTML(cssPrefix, height) {
        const logoHeight = height * this.logoScale;
        const svgString = this.__generateXRIconString(cssPrefix, logoHeight) + this.__generateNoXRIconString(cssPrefix, logoHeight);
        return `<button class="${cssPrefix}-button">
    <div class="${cssPrefix}-title"></div>
    <div class="${cssPrefix}-logo" >${svgString}</div>
    </button>`;
    }
    /**
   * Create the default view for the button.
   * @param {Object}} options options for the button
   * @returns HTMLElement the button element
   * @private
   * @ignore
   */ __createDefaultView(options) {
        if (options.injectCSS) // Check that css isnt already injected
        {
            if (!this._WEBXR_UI_CSS_INJECTED[options.cssprefix]) {
                this.__injectCSS(this.__generateCSS(options));
                this._WEBXR_UI_CSS_INJECTED[options.cssprefix] = true;
            }
        }
        const el = document.createElement("div");
        el.innerHTML = this.__generateInnerHTML(options.cssprefix, options.fontSize);
        return el.firstChild;
    }
    /**
   * Create the icon element for the XR available state for button.
   * @param {String} cssPrefix string to prefix to the css classes
   * @param {Number} height height of the button
   * @returns HTMLElement the icon element
   * @private
   * @ignore
   */ __createXRIcon(cssPrefix, height) {
        const el = document.createElement("div");
        el.innerHTML = generateXRIconString(cssPrefix, height);
        return el.firstChild;
    }
    /**
   * Create the icon element for the XR not available state for button.
   * @param {String} cssPrefix string to prefix to the css classes
   * @param {Number} height height of the button
   * @returns HTMLElement the icon element
   * @private
   * @ignore
   */ __createNoXRIcon(cssPrefix, height) {
        const el = document.createElement("div");
        el.innerHTML = generateNoXRIconString(cssPrefix, height);
        return el.firstChild;
    }
    /**
   * Generate the SVG string for the XR available state for button.
   * @param {String} cssPrefix string to prefix to the css classes
   * @param {Number} height height of the button
   * @returns {String} the svg string for the XR icon
   * @private
   * @ignore
   */ __generateXRIconString(cssPrefix, height) {
        const aspect = 28 / 18;
        return `<svg class="${cssPrefix}-svg" version="1.1" x="0px" y="0px"
        width="${aspect * height}px" height="${height}px" viewBox="0 0 28 18" xml:space="preserve">
        <path d="M26.8,1.1C26.1,0.4,25.1,0,24.2,0H3.4c-1,0-1.7,0.4-2.4,1.1C0.3,1.7,0,2.7,0,3.6v10.7
        c0,1,0.3,1.9,0.9,2.6C1.6,17.6,2.4,18,3.4,18h5c0.7,0,1.3-0.2,1.8-0.5c0.6-0.3,1-0.8,1.3-1.4l
        1.5-2.6C13.2,13.1,13,13,14,13v0h-0.2 h0c0.3,0,0.7,0.1,0.8,0.5l1.4,2.6c0.3,0.6,0.8,1.1,1.3,
        1.4c0.6,0.3,1.2,0.5,1.8,0.5h5c1,0,2-0.4,2.7-1.1c0.7-0.7,1.2-1.6,1.2-2.6 V3.6C28,2.7,27.5,
        1.7,26.8,1.1z M7.4,11.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8
        C10.2,10.5,8.9,11.8,7.4,11.8z M20.1,11.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8C21.7
        ,6.2,23,7.4,23,9 C23,10.5,21.7,11.8,20.1,11.8z"/>
    </svg>`;
    }
    /**
   * Generate the SVG string for the XR not available state for button.
   * @param {String} cssPrefix string to prefix to the css classes
   * @param {Number} height height of the button
   * @returns {String} the svg string for the XR icon
   * @private
   * @ignore
   */ __generateNoXRIconString(cssPrefix, height) {
        const aspect = 28 / 18;
        return `<svg class="${cssPrefix}-svg-error" x="0px" y="0px"
        width="${aspect * height}px" height="${aspect * height}px" viewBox="0 0 28 28" xml:space="preserve">
        <path d="M17.6,13.4c0-0.2-0.1-0.4-0.1-0.6c0-1.6,1.3-2.8,2.8-2.8s2.8,1.3,2.8,2.8s-1.3,2.8-2.8,2.8
        c-0.2,0-0.4,0-0.6-0.1l5.9,5.9c0.5-0.2,0.9-0.4,1.3-0.8
        c0.7-0.7,1.1-1.6,1.1-2.5V7.4c0-1-0.4-1.9-1.1-2.5c-0.7-0.7-1.6-1-2.5-1
        H8.1 L17.6,13.4z"/>
        <path d="M10.1,14.2c-0.5,0.9-1.4,1.4-2.4,1.4c-1.6,0-2.8-1.3-2.8-2.8c0-1.1,0.6-2,1.4-2.5
        L0.9,5.1 C0.3,5.7,0,6.6,0,7.5v10.7c0,1,0.4,1.8,1.1,2.5c0.7,0.7,1.6,1,2.5,1
        h5c0.7,0,1.3-0.1,1.8-0.5c0.6-0.3,1-0.8,1.3-1.4l1.3-2.6 L10.1,14.2z"/>
        <path d="M25.5,27.5l-25-25C-0.1,2-0.1,1,0.5,0.4l0,0C1-0.1,2-0.1,2.6,0.4l25,25c0.6,0.6,0.6,1.5
        ,0,2.1l0,0 C27,28.1,26,28.1,25.5,27.5z"/>
    </svg>`;
    }
    /**
   * Sets the XRDevice this button is associated with. This rarely needs to be called directly.
   * @param {XRDevice} device
   * @return {p5xrButton}
   */ setDevice(device) {
        this.device = device;
        return this;
    }
    /**
   * Indicates to the p5xrButton that there's an active XRSession.
   * Switches the button to it's exitXR state if session is not null.
   * @param {XRSession} session The active XRSession associated with the button
   * @return {p5xrButton}
   */ setSession(session) {
        this.session = session;
        this.__updateButtonState();
        return this;
    }
    /**
   * Set the title of the p5xrButton
   * @param {String} text The title for the button
   * @return {p5xrButton}
   */ setTitle(text) {
        this.domElement.title = text;
        this.ifChild(this.domElement, this.options.cssprefix, "title", (title)=>{
            if (!text) title.style.display = "none";
            else {
                title.innerText = text;
                title.style.display = "initial";
            }
        });
        return this;
    }
    /**
   * Generates the CSS string to inject based on the options passed to the constructor.
   *
   * @param {Object} options
   * @return {String}
   * @private
   * @ignore
   */ __generateCSS(options) {
        const { height: height  } = options;
        const borderWidth = 2;
        const borderColor = options.background ? options.background : options.color;
        const cssPrefix = options.cssprefix;
        let borderRadius;
        if (options.corners === "round") borderRadius = options.height / 2;
        else if (options.corners === "square") borderRadius = 2;
        else borderRadius = options.corners;
        return `
      @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 400;
          src: local('Karla'), local('Karla-Regular'),
              url(https://fonts.gstatic.com/s/karla/v5/31P4mP32i98D9CEnGyeX9Q.woff2) format('woff2');
          unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
      }
      @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 400;
          src: local('Karla'), local('Karla-Regular'),
              url(https://fonts.gstatic.com/s/karla/v5/Zi_e6rBgGqv33BWF8WTq8g.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
                        U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
      }

      button.${cssPrefix}-button {
          font-family: 'Karla', sans-serif;

          border: ${borderColor} ${borderWidth}px solid;
          border-radius: ${borderRadius}px;
          box-sizing: border-box;
          background: ${options.background ? options.background : "none"};
          opacity: ${options.opacity};
          height: ${height}px;
          min-width: ${options.fontSize * 9.6}px;
          display: inline-block;
          position: absolute;
          top: 5%;
          left: 15%;
          cursor: pointer;
      }

      button.${cssPrefix}-button:focus {
        outline: none;
      }

      /*
      * Logo
      */

      .${cssPrefix}-logo {
          width: ${height}px;
          height: ${height}px;
          position: absolute;
          top:0px;
          left:0px;
          width: ${height - 4}px;
          height: ${height - 4}px;
      }
      .${cssPrefix}-svg {
          fill: ${options.color};
          margin-top: ${(height - options.fontSize * this.logoScale) / 2 - 2}px;
          margin-left: ${height / 3}px;
      }
      .${cssPrefix}-svg-error {
          fill: ${options.color};
          display:none;
          margin-top: ${(height - 28 / 18 * options.fontSize * this.logoScale) / 2 - 2}px;
          margin-left: ${height / 3}px;
      }


      /*
      * Title
      */

      .${cssPrefix}-title {
          color: ${options.color};
          position: relative;
          font-size: ${options.fontSize}px;
          padding-left: ${height * 1.05}px;
          padding-right: ${borderRadius - 10 < 5 ? height / 3 : borderRadius - 10}px;
      }

      /*
      * disabled
      */

      button.${cssPrefix}-button[disabled=true] {
          opacity: ${options.disabledOpacity};
      }

      button.${cssPrefix}-button[disabled=true] > .${cssPrefix}-logo > .${cssPrefix}-svg {
          display:none;
      }

      button.${cssPrefix}-button[disabled=true] > .${cssPrefix}-logo > .${cssPrefix}-svg-error {
          display:initial;
      }
    `;
    }
    /**
   * Inject CSS string into the DOM.
   * @param {String} cssText CSS string to inject
   * @private
   * @ignore
   */ __injectCSS(cssText) {
        // Create the css
        const style = document.createElement("style");
        style.innerHTML = cssText;
        const head = document.getElementsByTagName("head")[0];
        head.insertBefore(style, head.firstChild);
    }
    /**
   * Runs a callback function on the child of the given element if it exists.
   * @param {HTMLElement} el The element to check
   * @param {String} cssPrefix The css prefix to check
   * @param {String} suffix The suffix to check
   * @param {Function} fn
   * @private
   * @ignore
   */ ifChild(el, cssPrefix, suffix, fn) {
        const c = el.querySelector(`.${cssPrefix}-${suffix}`);
        if (c) fn(c);
    }
    /**
   * Set the tooltip of the button
   * @param {String} tooltip
   * @return {p5xrButton}
   */ setTooltip(tooltip) {
        this.domElement.title = tooltip;
        return this;
    }
    /**
   * Show the button
   * @return {p5xrButton}
   */ show() {
        this.domElement.style.display = this.__defaultDisplayStyle;
        return this;
    }
    /**
   * Hide the button
   * @return {p5xrButton}
   */ hide() {
        this.domElement.style.display = "none";
        return this;
    }
    /**
   * Enable the button
   * @return {p5xrButton}
   */ enable() {
        this.__setDisabledAttribute(false);
        this.__forceDisabled = false;
        return this;
    }
    /**
   * Disable the button from being clicked
   * @return {p5xrButton}
   */ disable() {
        this.__setDisabledAttribute(true);
        this.__forceDisabled = true;
        return this;
    }
    /**
   * Remove the p5xrButton from the DOM
   */ remove() {
        if (this.domElement.parentElement) this.domElement.parentElement.removeChild(this.domElement);
    }
    /**
   * Set button state based on mode support
   */ setAvailable(isAvailable, mode) {
        if (isAvailable) {
            const msg = `Enter ${mode}`;
            this.setTitle(msg);
            this.setTooltip(msg);
            this.enable();
            console.log(`${mode} supported`);
            this.setDevice(true);
        } else if (mode === "VR") {
            console.log("VR not supported. Falling back to inline mode.");
            this.hide();
        } else {
            const msg = `${mode} not supported`;
            this.setTitle(msg);
            this.setTooltip(msg);
            this.disable();
            console.log(`${mode} not supported`);
        }
    }
    /**
   * Set the disabled attribute
   * @param {Boolean} disabled
   * @private
   * @ignore
   */ __setDisabledAttribute(disabled) {
        if (disabled || this.__forceDisabled) this.domElement.setAttribute("disabled", "true");
        else this.domElement.removeAttribute("disabled");
    }
    /**
   * Handling click event from button
   * @private
   * @ignore
   */ __onXRButtonClicked() {
        if (this.session) this.options.onRequestSession(this.device);
        else if (this.device) {
            // feature detect
            if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") DeviceMotionEvent.requestPermission().then((permissionState)=>{
                if (permissionState === "granted") window.addEventListener("devicemotion", ()=>{});
            }).catch(console.error);
            if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") DeviceOrientationEvent.requestPermission().then((permissionState)=>{
                if (permissionState === "granted") window.addEventListener("deviceorientation", ()=>{});
            }).catch(console.error);
            this.options.onRequestSession(this.device);
        }
    }
}
$1892aaed78aab8b4$exports.default = $1892aaed78aab8b4$var$p5xrButton;


var $8be5f92ebd0ddc6c$var$_p5xrButton2 = $8be5f92ebd0ddc6c$var$_interopRequireDefault($1892aaed78aab8b4$exports);
var $361f1ee34c03511e$exports = {};
"use strict";
Object.defineProperty($361f1ee34c03511e$exports, "__esModule", {
    value: true
});

var $9bd94bcf55ccc651$exports = {};
/**
 * @license Quaternion.js v1.4.0 27/03/2022
 *
 * Copyright (c) 2022, Robert Eisele (robert@xarg.org)
 * Licensed under the MIT license.
 **/ (function(root) {
    "use strict";
    /**
   * Calculates log(sqrt(a^2+b^2)) in a way to avoid overflows
   *
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */ function logHypot(a, b) {
        var _a = Math.abs(a);
        var _b = Math.abs(b);
        if (a === 0) return Math.log(_b);
        if (b === 0) return Math.log(_a);
        if (_a < 3000 && _b < 3000) return 0.5 * Math.log(a * a + b * b);
        a = a / 2;
        b = b / 2;
        return 0.5 * Math.log(a * a + b * b) + Math.LN2;
    }
    /*
   * Default is the multiplicative one element
   *
   */ var P = {
        "w": 1,
        "x": 0,
        "y": 0,
        "z": 0
    };
    function parse(dest, w, x, y, z) {
        // Most common internal use case with 4 params
        if (z !== undefined) {
            dest["w"] = w;
            dest["x"] = x;
            dest["y"] = y;
            dest["z"] = z;
            return;
        }
        if (typeof w === "object" && y === undefined) {
            // Check for quats, for example when an object gets cloned
            if ("w" in w || "x" in w || "y" in w || "z" in w) {
                dest["w"] = w["w"] || 0;
                dest["x"] = w["x"] || 0;
                dest["y"] = w["y"] || 0;
                dest["z"] = w["z"] || 0;
                return;
            }
            // Check for complex numbers
            if ("re" in w && "im" in w) {
                dest["w"] = w["re"];
                dest["x"] = w["im"];
                dest["y"] = 0;
                dest["z"] = 0;
                return;
            }
            // Check for array
            if (w.length === 4) {
                dest["w"] = w[0];
                dest["x"] = w[1];
                dest["y"] = w[2];
                dest["z"] = w[3];
                return;
            }
            // Check for augmented vector
            if (w.length === 3) {
                dest["w"] = 0;
                dest["x"] = w[0];
                dest["y"] = w[1];
                dest["z"] = w[2];
                return;
            }
            throw new Error("Invalid object");
        }
        // Parse string values
        if (typeof w === "string" && y === undefined) {
            var tokens = w.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);
            var plus = 1;
            var minus = 0;
            var iMap = {
                "i": "x",
                "j": "y",
                "k": "z"
            };
            if (tokens === null) throw new Error("Parse error");
            // Reset the current state
            dest["w"] = dest["x"] = dest["y"] = dest["z"] = 0;
            for(var i = 0; i < tokens.length; i++){
                var c = tokens[i];
                var d = tokens[i + 1];
                if (c === " " || c === "	" || c === "\n") ;
                else if (c === "+") plus++;
                else if (c === "-") minus++;
                else {
                    if (plus + minus === 0) throw new Error("Parse error" + c);
                    var g = iMap[c];
                    // Is the current token an imaginary sign?
                    if (g !== undefined) {
                        // Is the following token a number?
                        if (d !== " " && !isNaN(d)) {
                            c = d;
                            i++;
                        } else c = "1";
                    } else {
                        if (isNaN(c)) throw new Error("Parser error");
                        g = iMap[d];
                        if (g !== undefined) i++;
                    }
                    dest[g || "w"] += parseFloat((minus % 2 ? "-" : "") + c);
                    plus = minus = 0;
                }
            }
            // Still something on the stack
            if (plus + minus > 0) throw new Error("Parser error");
            return;
        }
        // If no single variable was given AND it was the constructor, set it to the identity
        if (w === undefined && dest !== P) {
            dest["w"] = 1;
            dest["x"] = dest["y"] = dest["z"] = 0;
        } else {
            dest["w"] = w || 0;
            // Note: This isn't setFromAxis, it's just syntactic sugar!
            if (x && x.length === 3) {
                dest["x"] = x[0];
                dest["y"] = x[1];
                dest["z"] = x[2];
            } else {
                dest["x"] = x || 0;
                dest["y"] = y || 0;
                dest["z"] = z || 0;
            }
        }
    }
    function numToStr(n, char, prev) {
        var ret = "";
        if (n !== 0) {
            if (prev !== "") ret += n < 0 ? " - " : " + ";
            else if (n < 0) ret += "-";
            n = Math.abs(n);
            if (1 !== n || char === "") ret += n;
            ret += char;
        }
        return ret;
    }
    /**
   * Quaternion constructor
   *
   * @constructor
   * @param {number|Object|string} w real
   * @param {number=} x imag
   * @param {number=} y imag
   * @param {number=} z imag
   * @returns {Quaternion}
   */ function Quaternion(w, x, y, z) {
        if (!(this instanceof Quaternion)) return new Quaternion(w, x, y, z);
        parse(this, w, x, y, z);
    }
    Quaternion.prototype = {
        "w": 1,
        "x": 0,
        "y": 0,
        "z": 0,
        /**
     * Adds two quaternions Q1 and Q2
     *
     * @param {number|Object|string} w real
     * @param {number=} x imag
     * @param {number=} y imag
     * @param {number=} z imag
     * @returns {Quaternion}
     */ "add": function(w, x, y, z) {
            parse(P, w, x, y, z);
            // Q1 + Q2 := [w1, v1] + [w2, v2] = [w1 + w2, v1 + v2]
            return new Quaternion(this["w"] + P["w"], this["x"] + P["x"], this["y"] + P["y"], this["z"] + P["z"]);
        },
        /**
     * Subtracts a quaternions Q2 from Q1
     *
     * @param {number|Object|string} w real
     * @param {number=} x imag
     * @param {number=} y imag
     * @param {number=} z imag
     * @returns {Quaternion}
     */ "sub": function(w, x, y, z) {
            parse(P, w, x, y, z);
            // Q1 - Q2 := Q1 + (-Q2)
            //          = [w1, v1] - [w2, v2] = [w1 - w2, v1 - v2]
            return new Quaternion(this["w"] - P["w"], this["x"] - P["x"], this["y"] - P["y"], this["z"] - P["z"]);
        },
        /**
     * Calculates the additive inverse, or simply it negates the quaternion
     *
     * @returns {Quaternion}
     */ "neg": function() {
            // -Q := [-w, -v]
            return new Quaternion(-this["w"], -this["x"], -this["y"], -this["z"]);
        },
        /**
     * Calculates the length/modulus/magnitude or the norm of a quaternion
     *
     * @returns {number}
     */ "norm": function() {
            // |Q| := sqrt(|Q|^2)
            // The unit quaternion has |Q| = 1
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            return Math.sqrt(w * w + x * x + y * y + z * z);
        },
        /**
     * Calculates the squared length/modulus/magnitude or the norm of a quaternion
     *
     * @returns {number}
     */ "normSq": function() {
            // |Q|^2 := [w, v] * [w, -v]
            //        = [w^2 + dot(v, v), -w * v + w * v + cross(v, -v)]
            //        = [w^2 + |v|^2, 0]
            //        = [w^2 + dot(v, v), 0]
            //        = dot(Q, Q)
            //        = Q * Q'
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            return w * w + x * x + y * y + z * z;
        },
        /**
     * Normalizes the quaternion to have |Q| = 1 as long as the norm is not zero
     * Alternative names are the signum, unit or versor
     *
     * @returns {Quaternion}
     */ "normalize": function() {
            // Q* := Q / |Q|
            // unrolled Q.scale(1 / Q.norm())
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var norm = Math.sqrt(w * w + x * x + y * y + z * z);
            if (norm < Quaternion["EPSILON"]) return Quaternion["ZERO"];
            norm = 1 / norm;
            return new Quaternion(w * norm, x * norm, y * norm, z * norm);
        },
        /**
     * Calculates the Hamilton product of two quaternions
     * Leaving out the imaginary part results in just scaling the quat
     *
     * @param {number|Object|string} w real
     * @param {number=} x imag
     * @param {number=} y imag
     * @param {number=} z imag
     * @returns {Quaternion}
     */ "mul": function(w, x, y, z) {
            parse(P, w, x, y, z);
            // Q1 * Q2 = [w1 * w2 - dot(v1, v2), w1 * v2 + w2 * v1 + cross(v1, v2)]
            // Not commutative because cross(v1, v2) != cross(v2, v1)!
            var w1 = this["w"];
            var x1 = this["x"];
            var y1 = this["y"];
            var z1 = this["z"];
            var w2 = P["w"];
            var x2 = P["x"];
            var y2 = P["y"];
            var z2 = P["z"];
            return new Quaternion(w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2, w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2, w1 * y2 + y1 * w2 + z1 * x2 - x1 * z2, w1 * z2 + z1 * w2 + x1 * y2 - y1 * x2);
        },
        /**
     * Scales a quaternion by a scalar, faster than using multiplication
     *
     * @param {number} s scaling factor
     * @returns {Quaternion}
     */ "scale": function(s) {
            return new Quaternion(this["w"] * s, this["x"] * s, this["y"] * s, this["z"] * s);
        },
        /**
     * Calculates the dot product of two quaternions
     *
     * @param {number|Object|string} w real
     * @param {number=} x imag
     * @param {number=} y imag
     * @param {number=} z imag
     * @returns {number}
     */ "dot": function(w, x, y, z) {
            parse(P, w, x, y, z);
            // dot(Q1, Q2) := w1 * w2 + dot(v1, v2)
            return this["w"] * P["w"] + this["x"] * P["x"] + this["y"] * P["y"] + this["z"] * P["z"];
        },
        /**
     * Calculates the inverse of a quat for non-normalized quats such that
     * Q^-1 * Q = 1 and Q * Q^-1 = 1
     *
     * @returns {Quaternion}
     */ "inverse": function() {
            // Q^-1 := Q' / |Q|^2
            //       = [w / (w^2 + |v|^2), -v / (w^2 + |v|^2)]
            // Proof:
            // Q * Q^-1 = [w, v] * [w / (w^2 + |v|^2), -v / (w^2 + |v|^2)]
            //          = [1, 0]
            // Q^-1 * Q = [w / (w^2 + |v|^2), -v / (w^2 + |v|^2)] * [w, v]
            //          = [1, 0].
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var normSq = w * w + x * x + y * y + z * z;
            if (normSq === 0) return Quaternion["ZERO"]; // TODO: Is the result zero or one when the norm is zero?
            normSq = 1 / normSq;
            return new Quaternion(w * normSq, -x * normSq, -y * normSq, -z * normSq);
        },
        /**
     * Multiplies a quaternion with the inverse of a second quaternion
     *
     * @param {number|Object|string} w real
     * @param {number=} x imag
     * @param {number=} y imag
     * @param {number=} z imag
     * @returns {Quaternion}
     */ "div": function(w, x, y, z) {
            parse(P, w, x, y, z);
            // Q1 / Q2 := Q1 * Q2^-1
            var w1 = this["w"];
            var x1 = this["x"];
            var y1 = this["y"];
            var z1 = this["z"];
            var w2 = P["w"];
            var x2 = P["x"];
            var y2 = P["y"];
            var z2 = P["z"];
            var normSq = w2 * w2 + x2 * x2 + y2 * y2 + z2 * z2;
            if (normSq === 0) return Quaternion["ZERO"]; // TODO: Is the result zero or one when the norm is zero?
            normSq = 1 / normSq;
            return new Quaternion((w1 * w2 + x1 * x2 + y1 * y2 + z1 * z2) * normSq, (x1 * w2 - w1 * x2 - y1 * z2 + z1 * y2) * normSq, (y1 * w2 - w1 * y2 - z1 * x2 + x1 * z2) * normSq, (z1 * w2 - w1 * z2 - x1 * y2 + y1 * x2) * normSq);
        },
        /**
     * Calculates the conjugate of a quaternion
     *
     * @returns {Quaternion}
     */ "conjugate": function() {
            // Q' = [s, -v]
            // If the quaternion is normalized,
            // the conjugate is the inverse of the quaternion - but faster
            // Q' * Q = Q * Q' = 1
            // Additionally, the conjugate of a unit quaternion is a rotation with the same
            // angle but the opposite axis.
            // Moreover the following property holds:
            // (Q1 * Q2)' = Q2' * Q1'
            return new Quaternion(this["w"], -this["x"], -this["y"], -this["z"]);
        },
        /**
     * Calculates the natural exponentiation of the quaternion
     *
     * @returns {Quaternion}
     */ "exp": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var vNorm = Math.sqrt(x * x + y * y + z * z);
            var wExp = Math.exp(w);
            var scale = wExp / vNorm * Math.sin(vNorm);
            if (vNorm === 0) //return new Quaternion(wExp * Math.cos(vNorm), 0, 0, 0);
            return new Quaternion(wExp, 0, 0, 0);
            return new Quaternion(wExp * Math.cos(vNorm), x * scale, y * scale, z * scale);
        },
        /**
     * Calculates the natural logarithm of the quaternion
     *
     * @returns {Quaternion}
     */ "log": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            if (y === 0 && z === 0) return new Quaternion(logHypot(w, x), Math.atan2(x, w), 0, 0);
            var qNorm2 = x * x + y * y + z * z + w * w;
            var vNorm = Math.sqrt(x * x + y * y + z * z);
            var scale = Math.atan2(vNorm, w) / vNorm;
            return new Quaternion(Math.log(qNorm2) * 0.5, x * scale, y * scale, z * scale);
        },
        /**
     * Calculates the power of a quaternion raised to a real number or another quaternion
     *
     * @param {number|Object|string} w real
     * @param {number=} x imag
     * @param {number=} y imag
     * @param {number=} z imag
     * @returns {Quaternion}
     */ "pow": function(w, x, y, z) {
            parse(P, w, x, y, z);
            if (P["y"] === 0 && P["z"] === 0) {
                if (P["w"] === 1 && P["x"] === 0) return this;
                if (P["w"] === 0 && P["x"] === 0) return Quaternion["ONE"];
                // Check if we can operate in C
                // Borrowed from complex.js
                if (this["y"] === 0 && this["z"] === 0) {
                    var a = this["w"];
                    var b = this["x"];
                    if (a === 0 && b === 0) return Quaternion["ZERO"];
                    var arg = Math.atan2(b, a);
                    var loh = logHypot(a, b);
                    if (P["x"] === 0) {
                        if (b === 0 && a >= 0) return new Quaternion(Math.pow(a, P["w"]), 0, 0, 0);
                        else if (a === 0) switch(P["w"] % 4){
                            case 0:
                                return new Quaternion(Math.pow(b, P["w"]), 0, 0, 0);
                            case 1:
                                return new Quaternion(0, Math.pow(b, P["w"]), 0, 0);
                            case 2:
                                return new Quaternion(-Math.pow(b, P["w"]), 0, 0, 0);
                            case 3:
                                return new Quaternion(0, -Math.pow(b, P["w"]), 0, 0);
                        }
                    }
                    a = Math.exp(P["w"] * loh - P["x"] * arg);
                    b = P["x"] * loh + P["w"] * arg;
                    return new Quaternion(a * Math.cos(b), a * Math.sin(b), 0, 0);
                }
            }
            // Normal quaternion behavior
            // q^p = e^ln(q^p) = e^(ln(q)*p)
            return this["log"]()["mul"](P)["exp"]();
        },
        /**
     * Checks if two quats are the same
     *
     * @param {number|Object|string} w real
     * @param {number=} x imag
     * @param {number=} y imag
     * @param {number=} z imag
     * @returns {boolean}
     */ "equals": function(w, x, y, z) {
            parse(P, w, x, y, z);
            var eps = Quaternion["EPSILON"];
            // maybe check for NaN's here?
            return Math.abs(P["w"] - this["w"]) < eps && Math.abs(P["x"] - this["x"]) < eps && Math.abs(P["y"] - this["y"]) < eps && Math.abs(P["z"] - this["z"]) < eps;
        },
        /**
     * Checks if all parts of a quaternion are finite
     *
     * @returns {boolean}
     */ "isFinite": function() {
            return isFinite(this["w"]) && isFinite(this["x"]) && isFinite(this["y"]) && isFinite(this["z"]);
        },
        /**
     * Checks if any of the parts of the quaternion is not a number
     *
     * @returns {boolean}
     */ "isNaN": function() {
            return isNaN(this["w"]) || isNaN(this["x"]) || isNaN(this["y"]) || isNaN(this["z"]);
        },
        /**
     * Gets the Quaternion as a well formatted string
     *
     * @returns {string}
     */ "toString": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var ret = "";
            if (isNaN(w) || isNaN(x) || isNaN(y) || isNaN(z)) return "NaN";
            // Alternative design?
            // '(%f, [%f %f %f])'
            ret = numToStr(w, "", ret);
            ret += numToStr(x, "i", ret);
            ret += numToStr(y, "j", ret);
            ret += numToStr(z, "k", ret);
            if ("" === ret) return "0";
            return ret;
        },
        /**
     * Returns the real part of the quaternion
     *
     * @returns {number}
     */ "real": function() {
            return this["w"];
        },
        /**
     * Returns the imaginary part of the quaternion as a 3D vector / array
     *
     * @returns {Array}
     */ "imag": function() {
            return [
                this["x"],
                this["y"],
                this["z"]
            ];
        },
        /**
     * Gets the actual quaternion as a 4D vector / array
     *
     * @returns {Array}
     */ "toVector": function() {
            return [
                this["w"],
                this["x"],
                this["y"],
                this["z"]
            ];
        },
        /**
     * Calculates the 3x3 rotation matrix for the current quat
     *
     * @param {boolean=} twoD
     * @returns {Array}
     */ "toMatrix": function(twoD) {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var wx = w * x, wy = w * y, wz = w * z;
            var xx = x * x, xy = x * y, xz = x * z;
            var yy = y * y, yz = y * z, zz = z * z;
            if (twoD) return [
                [
                    1 - 2 * (yy + zz),
                    2 * (xy - wz),
                    2 * (xz + wy)
                ],
                [
                    2 * (xy + wz),
                    1 - 2 * (xx + zz),
                    2 * (yz - wx)
                ],
                [
                    2 * (xz - wy),
                    2 * (yz + wx),
                    1 - 2 * (xx + yy)
                ]
            ];
            return [
                1 - 2 * (yy + zz),
                2 * (xy - wz),
                2 * (xz + wy),
                2 * (xy + wz),
                1 - 2 * (xx + zz),
                2 * (yz - wx),
                2 * (xz - wy),
                2 * (yz + wx),
                1 - 2 * (xx + yy)
            ];
        },
        /**
     * Calculates the homogeneous 4x4 rotation matrix for the current quat
     *
     * @param {boolean=} twoD
     * @returns {Array}
     */ "toMatrix4": function(twoD) {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var wx = w * x, wy = w * y, wz = w * z;
            var xx = x * x, xy = x * y, xz = x * z;
            var yy = y * y, yz = y * z, zz = z * z;
            if (twoD) return [
                [
                    1 - 2 * (yy + zz),
                    2 * (xy - wz),
                    2 * (xz + wy),
                    0
                ],
                [
                    2 * (xy + wz),
                    1 - 2 * (xx + zz),
                    2 * (yz - wx),
                    0
                ],
                [
                    2 * (xz - wy),
                    2 * (yz + wx),
                    1 - 2 * (xx + yy),
                    0
                ],
                [
                    0,
                    0,
                    0,
                    1
                ]
            ];
            return [
                1 - 2 * (yy + zz),
                2 * (xy - wz),
                2 * (xz + wy),
                0,
                2 * (xy + wz),
                1 - 2 * (xx + zz),
                2 * (yz - wx),
                0,
                2 * (xz - wy),
                2 * (yz + wx),
                1 - 2 * (xx + yy),
                0,
                0,
                0,
                0,
                1
            ];
        },
        /**
     * Calculates the Euler angles represented by the current quat
     * 
     * @returns {Object}
     */ "toEuler": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var t = 2 * (w * y - z * x);
            return {
                // X-axis rotation
                roll: Math.atan2(2 * (w * x + y * z), 1 - 2 * (x * x + y * y)),
                // Y-axis rotation
                pitch: t >= 1 ? Math.PI / 2 : t <= -1 ? -Math.PI / 2 : Math.asin(t),
                // Z-axis rotation
                yaw: Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z))
            };
        },
        /**
     * Clones the actual object
     *
     * @returns {Quaternion}
     */ "clone": function() {
            return new Quaternion(this);
        },
        /**
     * Rotates a vector according to the current quaternion, assumes |q|=1
     * @link https://www.xarg.org/proof/vector-rotation-using-quaternions/
     *
     * @param {Array} v The vector to be rotated
     * @returns {Array}
     */ "rotateVector": function(v) {
            var qw = this["w"];
            var qx = this["x"];
            var qy = this["y"];
            var qz = this["z"];
            var vx = v[0];
            var vy = v[1];
            var vz = v[2];
            // t = 2q x v
            var tx = 2 * (qy * vz - qz * vy);
            var ty = 2 * (qz * vx - qx * vz);
            var tz = 2 * (qx * vy - qy * vx);
            // v + w t + q x t
            return [
                vx + qw * tx + qy * tz - qz * ty,
                vy + qw * ty + qz * tx - qx * tz,
                vz + qw * tz + qx * ty - qy * tx
            ];
        },
        /**
     * Gets a function to spherically interpolate between two quaternions
     * 
     * @returns Function
     */ "slerp": function(w, x, y, z) {
            parse(P, w, x, y, z);
            // slerp(Q1, Q2, t) := Q1(Q1^-1 Q2)^t
            var w1 = this["w"];
            var x1 = this["x"];
            var y1 = this["y"];
            var z1 = this["z"];
            var w2 = P["w"];
            var x2 = P["x"];
            var y2 = P["y"];
            var z2 = P["z"];
            var cosTheta0 = w1 * w2 + x1 * x2 + y1 * y2 + z1 * z2;
            if (cosTheta0 < 0) {
                w1 = -w1;
                x1 = -x1;
                y1 = -y1;
                z1 = -z1;
                cosTheta0 = -cosTheta0;
            }
            if (cosTheta0 >= 1 - Quaternion["EPSILON"]) return function(pct) {
                return new Quaternion(w1 + pct * (w2 - w1), x1 + pct * (x2 - x1), y1 + pct * (y2 - y1), z1 + pct * (z2 - z1))["normalize"]();
            };
            var Theta0 = Math.acos(cosTheta0);
            var sinTheta0 = Math.sin(Theta0);
            return function(pct) {
                var Theta = Theta0 * pct;
                var sinTheta = Math.sin(Theta);
                var cosTheta = Math.cos(Theta);
                var s0 = cosTheta - cosTheta0 * sinTheta / sinTheta0;
                var s1 = sinTheta / sinTheta0;
                return new Quaternion(s0 * w1 + s1 * w2, s0 * x1 + s1 * x2, s0 * y1 + s1 * y2, s0 * z1 + s1 * z2);
            };
        }
    };
    Quaternion["ZERO"] = new Quaternion(0, 0, 0, 0); // This is the additive identity Quaternion
    Quaternion["ONE"] = new Quaternion(1, 0, 0, 0); // This is the multiplicative identity Quaternion
    Quaternion["I"] = new Quaternion(0, 1, 0, 0);
    Quaternion["J"] = new Quaternion(0, 0, 1, 0);
    Quaternion["K"] = new Quaternion(0, 0, 0, 1);
    Quaternion["EPSILON"] = 1e-16;
    /**
   * Creates quaternion by a rotation given as axis-angle orientation
   *
   * @param {Array} axis The axis around which to rotate
   * @param {number} angle The angle in radians
   * @returns {Quaternion}
   */ Quaternion["fromAxisAngle"] = function(axis, angle) {
        // Q = [cos(angle / 2), v * sin(angle / 2)]
        var halfAngle = angle * 0.5;
        var a = axis[0];
        var b = axis[1];
        var c = axis[2];
        var sin_2 = Math.sin(halfAngle);
        var cos_2 = Math.cos(halfAngle);
        var sin_norm = sin_2 / Math.sqrt(a * a + b * b + c * c);
        return new Quaternion(cos_2, a * sin_norm, b * sin_norm, c * sin_norm);
    };
    /**
   * Calculates the quaternion to rotate one vector onto another
   * @link https://www.xarg.org/proof/quaternion-from-two-vectors/
   *
   * @param {Array} u
   * @param {Array} v
   */ Quaternion["fromBetweenVectors"] = function(u, v) {
        var ux = u[0];
        var uy = u[1];
        var uz = u[2];
        var vx = v[0];
        var vy = v[1];
        var vz = v[2];
        var dot = ux * vx + uy * vy + uz * vz;
        Quaternion["EPSILON"];
        // Close to PI @TODO
        //if (1 + dot <= Quaternion['EPSILON']) {
        // return Quaternion.fromAxisAngle(Math.abs(ux) > Math.abs(uz) ? [-uy,  ux, 0] : [0, -uz,  uy], 0) -> OR
        // return Quaternion.fromAxisAngle(Math.abs(ux) > Math.abs(uz) ? [ uy, -ux, 0] : [0,  uz, -uy], 0)
        //}
        var wx = uy * vz - uz * vy;
        var wy = uz * vx - ux * vz;
        var wz = ux * vy - uy * vx;
        return new Quaternion(dot + Math.sqrt(dot * dot + wx * wx + wy * wy + wz * wz), wx, wy, wz).normalize();
    };
    /**
   * Gets a spherical random number
   * @link http://planning.cs.uiuc.edu/node198.html
   */ Quaternion["random"] = function() {
        var u1 = Math.random();
        var u2 = Math.random();
        var u3 = Math.random();
        var s = Math.sqrt(1 - u1);
        var t = Math.sqrt(u1);
        return new Quaternion(t * Math.cos(2 * Math.PI * u3), s * Math.sin(2 * Math.PI * u2), s * Math.cos(2 * Math.PI * u2), t * Math.sin(2 * Math.PI * u3));
    };
    /**
   * Creates a quaternion by a rotation given by Euler angles
   *
   * @param {number} phi
   * @param {number} theta
   * @param {number} psi
   * @param {string=} order
   * @returns {Quaternion}
   */ Quaternion["fromEuler"] = function(phi, theta, psi, order) {
        var _x = phi * 0.5;
        var _y = theta * 0.5;
        var _z = psi * 0.5;
        var cX = Math.cos(_x);
        var cY = Math.cos(_y);
        var cZ = Math.cos(_z);
        var sX = Math.sin(_x);
        var sY = Math.sin(_y);
        var sZ = Math.sin(_z);
        if (order === undefined || order === "ZXY") // axisAngle([0, 0, 1], x) * axisAngle([1, 0, 0], y) * axisAngle([0, 1, 0], z)
        return new Quaternion(cX * cY * cZ - sX * sY * sZ, cX * cZ * sY - cY * sX * sZ, cX * cY * sZ + cZ * sX * sY, cY * cZ * sX + cX * sY * sZ);
        if (order === "XYZ" || order === "RPY") // axisAngle([1, 0, 0], x) * axisAngle([0, 1, 0], y) * axisAngle([0, 0, 1], z)
        return new Quaternion(cX * cY * cZ - sX * sY * sZ, cY * cZ * sX + cX * sY * sZ, cX * cZ * sY - cY * sX * sZ, cX * cY * sZ + cZ * sX * sY);
        if (order === "YXZ") // axisAngle([0, 1, 0], x) * axisAngle([1, 0, 0], y) * axisAngle([0, 0, 1], z)
        return new Quaternion(cX * cY * cZ + sX * sY * sZ, cX * cZ * sY + cY * sX * sZ, cY * cZ * sX - cX * sY * sZ, cX * cY * sZ - cZ * sX * sY);
        if (order === "ZYX" || order === "YPR") // axisAngle([0, 0, 1], x) * axisAngle([0, 1, 0], y) * axisAngle([1, 0, 0], z)
        return new Quaternion(cX * cY * cZ + sX * sY * sZ, cX * cY * sZ - cZ * sX * sY, cX * cZ * sY + cY * sX * sZ, cY * cZ * sX - cX * sY * sZ);
        if (order === "YZX") // axisAngle([0, 1, 0], x) * axisAngle([0, 0, 1], y) * axisAngle([1, 0, 0], z)
        return new Quaternion(cX * cY * cZ - sX * sY * sZ, cX * cY * sZ + cZ * sX * sY, cY * cZ * sX + cX * sY * sZ, cX * cZ * sY - cY * sX * sZ);
        if (order === "XZY") // axisAngle([1, 0, 0], x) * axisAngle([0, 0, 1], z) * axisAngle([0, 1, 0], y)
        return new Quaternion(cX * cY * cZ + sX * sY * sZ, cY * cZ * sX - cX * sY * sZ, cX * cY * sZ - cZ * sX * sY, cX * cZ * sY + cY * sX * sZ);
        return null;
    };
    /**
   * Creates a quaternion by a rotation matrix
   *
   * @param {Array} matrix
   * @returns {Quaternion}
   */ Quaternion["fromMatrix"] = function(matrix) {
        if (matrix.length === 9) {
            var m00 = matrix[0];
            var m01 = matrix[1];
            var m02 = matrix[2];
            var m10 = matrix[3];
            var m11 = matrix[4];
            var m12 = matrix[5];
            var m20 = matrix[6];
            var m21 = matrix[7];
            var m22 = matrix[8];
        } else {
            var m00 = matrix[0][0];
            var m01 = matrix[0][1];
            var m02 = matrix[0][2];
            var m10 = matrix[1][0];
            var m11 = matrix[1][1];
            var m12 = matrix[1][2];
            var m20 = matrix[2][0];
            var m21 = matrix[2][1];
            var m22 = matrix[2][2];
        }
        var tr = m00 + m11 + m22;
        if (tr > 0) {
            var S = Math.sqrt(tr + 1.0) * 2; // S=4*qw
            return new Quaternion(0.25 * S, (m21 - m12) / S, (m02 - m20) / S, (m10 - m01) / S);
        } else if (m00 > m11 & m00 > m22) {
            var S = Math.sqrt(1.0 + m00 - m11 - m22) * 2; // S=4*qx
            return new Quaternion((m21 - m12) / S, 0.25 * S, (m01 + m10) / S, (m02 + m20) / S);
        } else if (m11 > m22) {
            var S = Math.sqrt(1.0 + m11 - m00 - m22) * 2; // S=4*qy
            return new Quaternion((m02 - m20) / S, (m01 + m10) / S, 0.25 * S, (m12 + m21) / S);
        } else {
            var S = Math.sqrt(1.0 + m22 - m00 - m11) * 2; // S=4*qz
            return new Quaternion((m10 - m01) / S, (m02 + m20) / S, (m12 + m21) / S, 0.25 * S);
        }
    };
    if (typeof define === "function" && define["amd"]) define([], function() {
        return Quaternion;
    });
    else {
        Object.defineProperty(Quaternion, "__esModule", {
            "value": true
        });
        Quaternion["default"] = Quaternion;
        Quaternion["Quaternion"] = Quaternion;
        $9bd94bcf55ccc651$exports = Quaternion;
    }
})($9bd94bcf55ccc651$exports);


var $361f1ee34c03511e$var$_quaternion2 = $361f1ee34c03511e$var$_interopRequireDefault($9bd94bcf55ccc651$exports);
function $361f1ee34c03511e$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * @class p5xrInput
 * @category Input
 */ class $361f1ee34c03511e$var$p5xrInput {
    /**
   * @private
   * @ignore
   */ constructor(inputSource, frame, refSpace){
        this._inputSource = inputSource;
        this._targetRayPose = frame.getPose(this._inputSource.targetRaySpace, refSpace);
        this._pose = undefined;
        this.gamepad = inputSource.gamepad;
        this._dir = $05f70edae4a71625$exports.create();
        const normalMat = $fa5b9f15c1d6b18d$exports.create();
        const origin = $05f70edae4a71625$exports.create();
        this._dir[2] = -1;
        if (this._targetRayPose) {
            $05f70edae4a71625$exports.transformMat4(origin, origin, this._targetRayPose.transform.matrix);
            $fa5b9f15c1d6b18d$exports.fromMat4(normalMat, this._targetRayPose.transform.matrix);
            $05f70edae4a71625$exports.transformMat3(this._dir, this._dir, normalMat);
        }
        this.direction = this._dir;
    }
    /**
   * @type {p5.Vector}
   */ get direction() {
        return new p5.Vector(this._dir[0], this._dir[1], this._dir[2]);
    }
    set direction(value) {
        this._dir = $05f70edae4a71625$exports.copy(this._dir, value);
        $05f70edae4a71625$exports.normalize(this._dir, this._dir);
        this.inv_dir = $05f70edae4a71625$exports.fromValues(1.0 / this._dir[0], 1.0 / this._dir[1], 1.0 / this._dir[2]);
        this.sign = [
            this.inv_dir[0] < 0 ? 1 : 0,
            this.inv_dir[1] < 0 ? 1 : 0,
            this.inv_dir[2] < 0 ? 1 : 0
        ];
    }
    /**
   * @type {Float32Array} The current 4x4 pose matrix
   * @example
   * // Draws a box at the current pose matrix
   * let right;
   *
   * function preload() {
   *  createVRCanvas();
   * }
   *
   * function draw() {
   *   right = getXRInput('right');
   *   if (right) {
   *     push();
   *     translate(right.pose());
   *     box(10);
   *     pop();
   *  }
   * }
   * */ get pose() {
        this.updatePose();
        return this._pose.transform.matrix;
    }
    /** @type {p5.Vector} Returns the current position as a Vector */ get position() {
        this.updatePose();
        const p = this._pose?.transform?.position;
        return new p5.Vector(p.x, p.y, p.z);
    }
    /**
   * @type {p5.Vector}
   * Returns the current rotation as an euler Vector.
   * Using this is prone to gimbal locking, which leads to unexpected results.
   * `applyMatrix(p5xrInput.pose)` is the preferred method of rotation.
   * */ get rotation() {
        this.updatePose();
        if (this._pose) {
            const { x: x , y: y , z: z , w: w  } = this._pose?.transform?.orientation;
            const q = new $361f1ee34c03511e$var$_quaternion2.default(x, y, z, w);
            const e = q.toEuler();
            if (p5.instance.angleMode === RADIANS) return new p5.Vector(-e.yaw, e.pitch, -e.roll);
             // angleMode is degrees
            return new p5.Vector(p5.toDegrees(-e.yaw), p5.toDegrees(e.pitch), p5.toDegrees(-e.roll));
        }
        return new p5.Vector(0, 0, 0);
    }
    /** @type {GamepadButton} Returns a GamepadButton object corresponding to the controller's trigger button */ get trigger() {
        this.updateGamepad();
        return this.gamepad?.buttons[0];
    }
    /** @type {GamepadButton} Returns a GamepadButton object corresponding to the controller's grip button */ get grip() {
        this.updateGamepad();
        return this.gamepad.buttons[1];
    }
    /** @type {GamepadButton} Returns a GamepadButton object corresponding to the controller's touchpad button */ get touchpad() {
        this.updateGamepad();
        return this.gamepad.buttons[2];
    }
    /** @type {GamepadButton} Returns a GamepadButton object corresponding to the controller's thumbstick button */ get thumbstick() {
        this.updateGamepad();
        return this.gamepad.buttons[3];
    }
    /** @type {p5.Vector} Returns a Vector with the touchpad's X and Y values */ get touchpad2D() {
        this.updateGamepad();
        return new p5.Vector(this.gamepad.axes[0], this.gamepad.axes[1]);
    }
    /** @type {p5.Vector} Returns a Vector with the thumbstick's X and Y values */ get thumbstick2D() {
        this.updateGamepad();
        return new p5.Vector(this.gamepad.axes[2], this.gamepad.axes[3]);
    }
    /**
   * Retrieves the latest pose using the current frame
   * @returns {XRPose} The latest pose from the XRInputSource
   */ updatePose() {
        this._pose = window.p5xr.instance.frame.getPose(this._inputSource.gripSpace, window.p5xr.instance.xrRefSpace);
        return this._pose;
    }
    /** Retrieves the latest Gamepad from the XRInputSource
   * @returns {Gamepad} The latest Gamepad from the XRInputSource
   */ updateGamepad() {
        this.gamepad = this._inputSource.gamepad;
        return this.gamepad;
    }
}
$361f1ee34c03511e$exports.default = $361f1ee34c03511e$var$p5xrInput;


var $8be5f92ebd0ddc6c$var$_p5xrInput2 = $8be5f92ebd0ddc6c$var$_interopRequireDefault($361f1ee34c03511e$exports);
function $8be5f92ebd0ddc6c$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * p5vr class holds all state and methods that are specific to VR
 * @class
 *
 * @constructor
 *
 * @property vrDevice  {XRDevice} the current VR compatible device
 * @property vrSession  {XRSession} the current VR session
 * @property vrFrameOfRef  {XRFrameOfReference} the current VR frame of reference
 * (starting point for transform, default eye-level)
 * @property gl  {WebGLRenderingContext} points to p5.RendererGL.GL (the WebGL Rendering Context)
 * @property curClearColor  {Color} background clear color set by global `setVRBackgroundColor`
 */ class $8be5f92ebd0ddc6c$var$p5xr {
    constructor(xrButton){
        this.xrDevice = null;
        this.xrButton = xrButton || null;
        this.isVR = null;
        this.hasImmersive = null;
        this.xrSession = null;
        this.xrRefSpace = null;
        this.xrViewerSpace = null;
        this.xrHitTestSource = null;
        this.frame = null;
        this.gl = null;
        this.curClearColor = color(255, 255, 255);
        this.viewer = new $8be5f92ebd0ddc6c$var$_p5xrViewer2.default();
    }
    /**
   * Hide the preload loading element
   * @private
   * @ignore
   */ __removeLoadingElement() {
        const loadingScreen = document.getElementById(window._loadingScreenId);
        if (loadingScreen) loadingScreen.parentNode.removeChild(loadingScreen);
    }
    /**
   * Resets a few key WebGL renderer values. This is typically handled by p5.RendererGL.
   * but we need to do it manually so that it doesn't happen between drawing in each eye
   * @private
   * @ignore
   */ __updateXR() {
        const renderer = p5.instance._renderer; // reset light data for new frame.
        renderer.ambientLightColors.length = 0;
        renderer.specularColors = [
            1,
            1,
            1
        ];
        renderer.directionalLightDirections.length = 0;
        renderer.directionalLightDiffuseColors.length = 0;
        renderer.directionalLightSpecularColors.length = 0;
        renderer.pointLightPositions.length = 0;
        renderer.pointLightDiffuseColors.length = 0;
        renderer.pointLightSpecularColors.length = 0;
        renderer.spotLightPositions.length = 0;
        renderer.spotLightDirections.length = 0;
        renderer.spotLightDiffuseColors.length = 0;
        renderer.spotLightSpecularColors.length = 0;
        renderer.spotLightAngle.length = 0;
        renderer.spotLightConc.length = 0;
        renderer._enableLighting = false; // reset tint value for new frame
        renderer._tint = [
            255,
            255,
            255,
            255
        ];
    }
    /**
   * Substitute for p5._setup() which creates a default webgl canvas
   * @private
   * @ignore
   */ __setupCanvas() {
        createCanvas(windowWidth, windowHeight, WEBGL);
        p5.instance._setupDone = true;
    }
    /**
   * Called by `createVRCanvas()` or `createARCanvas`.
   * Creates the button for entering XR.
   * Requests an XRDevice object based on current device.
   * Checks if the device supports an immersive session.
   * Then binds the device to the button.
   * @private
   * @ignore
   */ __createButton() {
        p5.instance._incrementPreload();
        this.__setupCanvas();
        this.__removeLoadingElement();
        this.xrButton = new $8be5f92ebd0ddc6c$var$_p5xrButton2.default({
            onRequestSession: this.__onXRButtonClicked.bind(this),
            onEndSession: this.__onSessionEnded.bind(this),
            textEnterXRTitle: "LOADING"
        });
        let header = document.querySelector("header");
        if (!header) {
            header = document.createElement("header");
            document.querySelector("body").appendChild(header);
        }
        header.appendChild(this.xrButton.domElement);
        this.__sessionCheck();
    }
    /**
   * Checks if the device supports an immersive session.
   * If it does, gives the device to the button and updates its state.
   * @private
   * @ignore
   */ async __sessionCheck() {
        // WebXR availabilty
        if (navigator?.xr) {
            console.log("XR Available");
            const mode = this.isVR ? "VR" : "AR";
            const session = this.isVR ? "immersive-vr" : "immersive-ar";
            const supported = await navigator.xr.isSessionSupported(session);
            this.xrButton.setAvailable(supported, mode);
        } else {
            console.log("XR Not Available");
            this.xrButton.disable();
        }
    }
    /**
   * This is the method that is attached to the event that announces
   * availability of a new frame. The next animation frame is requested here,
   * the device pose is retrieved, the modelViewMatrix (`uMVMatrix`) for p5 is set,
   * and each eye is drawn
   * @param frame {XRFrame}
   * @private
   * @ignore
   */ __onXRFrame(t, frame) {
        const session = this.xrSession = frame.session;
        if (session === null || this.gl === null) return;
         // Inform the session that we're ready for the next frame.
        session.requestAnimationFrame(this.__onXRFrame.bind(this));
        let targetRefSpace = this.xrRefSpace;
        if (this.isVR && !this.isImmersive) // Account for the click-and-drag mouse movement or touch movement when
        // calculating the viewer pose for inline sessions.
        targetRefSpace = this.getAdjustedRefSpace(this.xrRefSpace);
         // Get the XRDevice pose relative to the Frame of Reference we created
        // earlier.
        const viewer = frame.getViewerPose(this.xrRefSpace);
        const glLayer = session.renderState.baseLayer;
        this.frame = frame; // Getting the pose may fail if, for example, tracking is lost. So we
        // have to check to make sure that we got a valid pose before attempting
        // to render with it. If not in this case we'll just leave the
        // framebuffer cleared, so tracking loss means the scene will simply
        // dissapear.
        if (viewer) {
            this.viewer.pose = frame.getViewerPose(targetRefSpace); // If we do have a valid pose, bind the WebGL layer's framebuffer,
            // which is where any content to be displayed on the XRDevice must be
            // rendered.
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, glLayer.framebuffer);
            if (this.isVR) this.clearVR();
            let i = 0;
            for (const view of this.viewer.pose.views){
                this.viewer.view = view;
                const scaleFactor = this.isImmersive ? 1 : pixelDensity();
                const viewport = glLayer.getViewport(this.viewer.view);
                this.gl.viewport(viewport.x, viewport.y, viewport.width * scaleFactor, viewport.height * scaleFactor);
                this.__updateViewport(viewport);
                this.__drawEye(i);
                i++;
            }
        }
    }
    /**
   * Update the renderer viewport to match rendering eye
   * @param {XRViewport} viewport The viewport of the eye
   * @private
   * @ignore
   */ __updateViewport(viewport) {
        p5.instance._renderer._viewport[0] = viewport.x;
        p5.instance._renderer._viewport[1] = viewport.y;
        p5.instance._renderer._viewport[2] = viewport.width;
        p5.instance._renderer._viewport[3] = viewport.height;
    }
    /**
   * Runs the code that the user has in `draw()` once for each eye
   * So twice for VR and once for AR
   * @param {Number} i The index of the eye
   * @private
   * @ignore
   */ __drawEye(eyeIndex) {
        const context = window;
        const userSetup = context.setup;
        const userDraw = context.draw;
        const userCalculate = context.calculate;
        if (this.isVR) {
            if (eyeIndex === 0) {
                if (typeof userCalculate === "function") userCalculate();
                const now = window.performance.now();
                p5.instance.deltaTime = now - p5.instance._lastFrameTime;
                p5.instance._frameRate = 1000.0 / p5.instance.deltaTime;
                p5.instance._setProperty("deltaTime", p5.instance.deltaTime);
                p5.instance._lastFrameTime = now;
                context._setProperty("frameCount", context.frameCount + 1);
            }
        } else // Scale is much smaller in AR
        scale(0.01);
         // 2D Mode should use graphics object
        if (!p5.instance._renderer.isP3D) {
            console.error("Sketch does not have 3D Renderer");
            return;
        }
        if (typeof userDraw === "function") {
            if (typeof userSetup === "undefined") context.scale(context._pixelDensity, context._pixelDensity);
            this.__updateXR();
            p5.instance._inUserDraw = true;
            try {
                userDraw();
            } finally{
                p5.instance._inUserDraw = false;
            }
        }
    }
    /**
   * Takes a string and returns a p5xrInput
   * Public interface is p5.prototype.getXRInput which calls this
   * @param {String} input The input identifier
   * @returns {p5xrInput} The input object
   * @private
   * @ignore
   */ __getXRInput(input) {
        let inputDevice;
        this.xrSession.inputSources.forEach((inputSource)=>{
            if (inputSource.handedness === input) inputDevice = new $8be5f92ebd0ddc6c$var$_p5xrInput2.default(inputSource, this.frame, this.xrRefSpace);
        });
        return inputDevice;
    }
    /**
   * Called either when the user has explicitly ended the session
   *  or when the UA has ended the session for any reason.
   * The xrSession is ended and discarded. p5 is reset with `remove()`
   *  //TODO: Revisit how we exit session
   * @private
   * @ignore
   */ __onSessionEnded() {
        if (!this.isVR) {
            this.xrHitTestSource.cancel();
            this.xrHitTestSource = null;
        } else if (this.isImmersive) {
            console.log("Exiting immersive session");
            this.isImmersive = false;
            this.__sessionCheck();
            console.log("Requesting new session");
            navigator.xr.requestSession("inline").then(this.__startSketch.bind(this));
        }
        if (this.isImmersive && this.hasImmersive) this.isImmersive = false;
    }
    /**
   * @private
   * @ignore
   */ printUnsupportedMessage() {
        console.warn("Your browser/hardware does not work with AR Mode currently. This is undergoing heavy development currently.You may be able to fix this by enabling WebXR flags in Chrome.");
    }
    remove() {
        if (this.xrButton) this.xrButton.remove();
        window.p5xr.instance = null;
    }
    get instance() {
        return window.p5xr.instance;
    }
    set instance(p5xrInst) {
        window.p5xr.instance = p5xrInst;
        return window.p5xr.instance;
    }
}
$8be5f92ebd0ddc6c$exports.default = $8be5f92ebd0ddc6c$var$p5xr;


var $cd6c3cdb54bdf8d0$var$_p5xr2 = $cd6c3cdb54bdf8d0$var$_interopRequireDefault($8be5f92ebd0ddc6c$exports);
function $cd6c3cdb54bdf8d0$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * p5vr class holds all state and methods that are specific to VR
 * @class
 * @private
 * @constructor
 * @ignore
 */ class $cd6c3cdb54bdf8d0$var$p5vr extends $cd6c3cdb54bdf8d0$var$_p5xr2.default {
    constructor(){
        super();
        this.isVR = true;
        this.isImmersive = true;
        this.lookYaw = 0;
        this.lookPitch = 0;
        this.LOOK_SPEED = 0.0025; // Keep track of touch-related state so that users can touch and drag on
        // the canvas to adjust the viewer pose in an inline session.
        this.primaryTouch = undefined;
        this.prevTouchX = undefined;
        this.prevTouchY = undefined;
        if (navigator?.xr) navigator.xr.requestSession("immersive-vr").then(this.__startSketch.bind(this));
    }
    /**
   * Currently a stub function that just creates a button
   * Previously handled more, now can be replaced with refactor
   * @private
   * @ignore
   */ __initVR() {
        this.__createButton();
    }
    /**
   * This is where the actual p5 canvas is first created, and
   * the GL rendering context is accessed by p5vr.
   * The current XRSession also gets a frame of reference and
   * base rendering layer. <br>
   * @param {XRSession}
   * @private
   * @ignore
   */ __startSketch(session) {
        this.xrSession = session;
        this.canvas = p5.instance.canvas;
        this.canvas.style.visibility = "visible";
        this.xrSession.addEventListener("end", this.__onSessionEnded.bind(this));
        if (typeof window.setup === "function") {
            window.setup();
            p5.instance._millisStart = window.performance.now();
        }
        const refSpaceRequest = this.isImmersive ? "local" : "viewer";
        this.xrSession.requestReferenceSpace(refSpaceRequest).then((refSpace)=>{
            this.xrRefSpace = refSpace; // Inform the session that we're ready to begin drawing.
            this.xrSession.requestAnimationFrame(this.__onXRFrame.bind(this));
            if (!this.isImmersive) {
                this.xrSession.updateRenderState({
                    baseLayer: new XRWebGLLayer(this.xrSession, this.gl),
                    inlineVerticalFieldOfView: 70 * (Math.PI / 180)
                });
                this.addInlineViewListeners(this.canvas);
            }
        });
        this.__onRequestSession();
    }
    /**
   * Helper function to reset XR and GL, should be called between
   * ending an XR session and starting a new XR session
   * @method resetXR
   */ resetXR() {
        this.xrDevice = null;
        this.xrSession = null;
        this.xrRefSpace = null;
        this.xrViewerSpace = null;
        this.xrHitTestSource = null;
        this.gl = null;
        this.frame = null;
    }
    /**
   * `navigator.xr.requestSession('immersive-vr')` must be called within a user gesture event.
   * @param {XRDevice}
   * @private
   * @ignore
   */ __onXRButtonClicked() {
        if (this.hasImmersive) {
            console.log("Requesting session with mode: immersive-vr");
            this.isImmersive = true;
            this.resetXR();
            navigator.xr.requestSession("immersive-vr").then(this.__startSketch.bind(this));
        } else this.xrButton.hide();
    }
    /**
   * Requests a reference space and makes the p5's WebGL layer XR compatible.
   * @private
   * @ignore
   */ __onRequestSession() {
        p5.instance._renderer._curCamera.cameraType = "custom";
        const refSpaceRequest = this.isImmersive ? "local" : "viewer";
        this.gl = this.canvas.getContext("webgl");
        this.gl.makeXRCompatible().then(()=>{
            // Get a frame of reference, which is required for querying poses.
            // 'local' places the initial pose relative to initial location of viewer
            // 'viewer' is only for inline experiences and only allows rotation
            this.xrSession.requestReferenceSpace(refSpaceRequest).then((refSpace)=>{
                this.xrRefSpace = refSpace;
            }); // Use the p5's WebGL context to create a XRWebGLLayer and set it as the
            // sessions baseLayer. This allows any content rendered to the layer to
            // be displayed on the XRDevice;
            this.xrSession.updateRenderState({
                baseLayer: new XRWebGLLayer(this.xrSession, this.gl)
            });
        }).catch((e)=>{
            console.log(e);
        }); // Request initial animation frame
        this.xrSession.requestAnimationFrame(this.__onXRFrame.bind(this));
    }
    /**
   * clears the background based on the current clear color (`curClearColor`)
   * @private
   * @ignore
   */ clearVR() {
        if (this.curClearColor === null) return;
        p5.instance.background(this.curClearColor);
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
    }
    /**
   * Returns a new reference space modified by the inline session's viewer pose.
   * @param {XRReferenceSpace} refSpace Reference space adjusted for user's current pose
   * @returns {XRReferenceSpace} Referennce space adjusted by inline view's current pose   * @private
   * @ignore
   */ getAdjustedRefSpace(refSpace) {
        // Represent the rotational component of the reference space as a
        // quaternion.
        // TODO: Add rotation ability to xrViewer
        const invOrientation = $d9f65603c21f6244$exports.create();
        $d9f65603c21f6244$exports.rotateX(invOrientation, invOrientation, -this.lookPitch);
        $d9f65603c21f6244$exports.rotateY(invOrientation, invOrientation, -this.lookYaw);
        const xform = new XRRigidTransform({
            x: 0,
            y: 0,
            z: 0
        }, {
            x: invOrientation[0],
            y: invOrientation[1],
            z: invOrientation[2],
            w: invOrientation[3]
        });
        return refSpace.getOffsetReferenceSpace(xform);
    }
    /**
   * Modifies the view of an inline session, called by mouse events.
   * @param {Number} dx view yaw change in radians
   * @param {Numbers} dy view pitch change in radians
   * @private
   * @ignore
   */ rotateInlineView(dx, dy) {
        this.lookYaw += dx * this.LOOK_SPEED;
        this.lookPitch += dy * this.LOOK_SPEED;
        if (this.lookPitch < -Math.PI * 0.5) this.lookPitch = -Math.PI * 0.5;
        if (this.lookPitch > Math.PI * 0.5) this.lookPitch = Math.PI * 0.5;
    }
    // adjust the viewer pose accordingly in inline sessions.
    /**
   * Adds event listeners to the canvas to allow for user interaction with the canvas during
   * inline sessions.
   * @private
   * @ignore
   */ addInlineViewListeners() {
        this.canvas.addEventListener("mousemove", (event)=>{
            // Only rotate when the right button is pressed
            if (event.buttons && 2) this.rotateInlineView(event.movementX, event.movementY);
        }); // Keep track of all active touches, but only use the first touch to
        // adjust the viewer pose.
        this.canvas.addEventListener("touchstart", (event)=>{
            if (this.primaryTouch === undefined) {
                const touch = event.changedTouches[0];
                this.primaryTouch = touch.identifier;
                this.prevTouchX = touch.pageX;
                this.prevTouchY = touch.pageY;
            }
        }); // Update the set of active touches now that one or more touches
        // finished. If the primary touch just finished, update the viewer pose
        // based on the final touch movement.
        this.canvas.addEventListener("touchend", (event)=>{
            for (const touch of event.changedTouches)if (this.primaryTouch === touch.identifier) {
                this.primaryTouch = undefined;
                this.rotateInlineView(touch.pageX - this.prevTouchX, touch.pageY - this.prevTouchY);
            }
        }); // Update the set of active touches now that one or more touches was
        // cancelled. Don't update the viewer pose when the primary touch was
        // cancelled.
        this.canvas.addEventListener("touchcancel", (event)=>{
            for (const touch of event.changedTouches)if (this.primaryTouch === touch.identifier) this.primaryTouch = undefined;
        }); // Only use the delta between the most recent and previous events for
        // the primary touch. Ignore the other touches.
        this.canvas.addEventListener("touchmove", (event)=>{
            for (const touch of event.changedTouches)if (this.primaryTouch === touch.identifier) {
                this.rotateInlineView(touch.pageX - this.prevTouchX, touch.pageY - this.prevTouchY);
                this.prevTouchX = touch.pageX;
                this.prevTouchY = touch.pageY;
            }
        });
    }
}
$cd6c3cdb54bdf8d0$exports.default = $cd6c3cdb54bdf8d0$var$p5vr;


var $fa42706b76f7ad67$var$_p5vr2 = $fa42706b76f7ad67$var$_interopRequireDefault($cd6c3cdb54bdf8d0$exports);
var $199ddab1947a8119$exports = {};
"use strict";
Object.defineProperty($199ddab1947a8119$exports, "__esModule", {
    value: true
});

var $199ddab1947a8119$var$_p5xr2 = $199ddab1947a8119$var$_interopRequireDefault($8be5f92ebd0ddc6c$exports);
var $b4b19f3cc3d656e4$exports = {};
"use strict";
Object.defineProperty($b4b19f3cc3d656e4$exports, "__esModule", {
    value: true
});
class $b4b19f3cc3d656e4$var$ARAnchor {
    constructor(x, y, z){
        this.position = {
            x: x * 100,
            y: y * 100,
            z: z * 100
        };
    }
    dispose() {
        delete this;
    }
    isTracking() {}
    isStopped() {}
    transform() {
        translate(this.position.x, this.position.y, this.position.z);
    }
}
$b4b19f3cc3d656e4$exports.default = $b4b19f3cc3d656e4$var$ARAnchor;


var $199ddab1947a8119$var$_ARAnchor2 = $199ddab1947a8119$var$_interopRequireDefault($b4b19f3cc3d656e4$exports);
function $199ddab1947a8119$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class $199ddab1947a8119$var$p5ar extends $199ddab1947a8119$var$_p5xr2.default {
    constructor(){
        super();
        this.canvas = null;
    }
    initAR() {
        this.__createButton(); // WebXR available
        if (navigator?.xr) this.__sessionCheck();
    }
    //* *********ARCORE and ARKIT BASED AR BELOW****************//
    //* ********************************************************//
    /**
   * This is where the actual p5 canvas is first created, and
   * the GL rendering context is accessed by p5vr.
   * The current XRSession also gets a frame of reference and
   * base rendering layer. <br>
   * @param {XRSession}
   * @private
   * @ignore
   */ __startSketch(session) {
        this.xrSession = this.xrButton.session = session;
        this.xrSession.addEventListener("end", this.__onSessionEnded);
        if (typeof touchStarted === "function") this.xrSession.addEventListener("select", touchStarted);
        this.canvas = p5.instance.canvas;
        p5.instance._renderer._curCamera.cameraType = "custom";
        this.__onRequestSession();
        p5.instance._decrementPreload();
    }
    /**
   *
   * @param {InputEvent} ev
   * @private
   * @ignore
   */ __onSelect(ev) {
        const context = window;
        const userMousePressed = context.mousePressed;
        if (typeof userMousePressed === "function") userMousePressed(ev);
    }
    /**
   *
   * @param {InputEvent} ev
   * @returns {p5.Vector}
   * @private
   * @ignore
   */ __detectHit(ev) {
        if (ev === null || typeof ev === "undefined") {
            console.warn("You must pass the touchStarted event to detectHit.");
            return null;
        }
        if (!this.xrSession) return null;
        if (this.xrHitTestSource && this.viewer.pose && this.frame) {
            const hitTestResults = this.frame.getHitTestResults(this.xrHitTestSource);
            if (hitTestResults.length > 0) {
                // const pose = hitTestResults[0].getPose(ev.inputSource.targetRaySpace, this.xrRefSpace);
                const pose = hitTestResults[0].getPose(this.xrRefSpace);
                return createVector(pose.transform.position.x, pose.transform.position.y, pose.transform.position.z);
            }
        }
    }
    /**
   *
   * @param {p5.Vector} vec Vector3
   * @returns ARAnchor
   * @private
   * @ignore
   */ __createAnchor(vec) {
        if (vec === null || typeof vec === "undefined") return null;
        return new $199ddab1947a8119$var$_ARAnchor2.default(vec.x, vec.y, vec.z);
    }
    /**
   * `device.requestSession()` must be called within a user gesture event.
   * @param {XRDevice}
   * @private
   * @ignore
   */ __onXRButtonClicked() {
        // Normalize the various vendor prefixed versions of getUserMedia.
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        navigator.xr.requestSession("immersive-ar", {
            requiredFeatures: [
                "local",
                "hit-test"
            ]
        }).then((session)=>{
            this.__startSketch(session);
        }, (error)=>{
            console.log(`${error} unable to request an immersive-ar session.`);
        });
    }
    /**
   * @private
   * @ignore
   */ __onRequestSession() {
        this.gl = this.canvas.getContext("webgl", {
            xrCompatible: true
        });
        this.gl.makeXRCompatible().then(()=>{
            this.xrSession.updateRenderState({
                baseLayer: new XRWebGLLayer(this.xrSession, this.gl)
            });
        });
        this.xrSession.requestReferenceSpace("viewer").then((refSpace)=>{
            this.xrViewerSpace = refSpace;
            this.xrSession.requestHitTestSource({
                space: this.xrViewerSpace
            }).then((hitTestSource)=>{
                this.xrHitTestSource = hitTestSource;
            });
        });
        this.xrSession.requestReferenceSpace("local").then((refSpace)=>{
            this.xrRefSpace = refSpace; // Inform the session that we're ready to begin drawing.
            this.xrSession.requestAnimationFrame(this.__onXRFrame.bind(this));
        });
    }
}
$199ddab1947a8119$exports.default = $199ddab1947a8119$var$p5ar;


var $fa42706b76f7ad67$var$_p5ar2 = $fa42706b76f7ad67$var$_interopRequireDefault($199ddab1947a8119$exports);
function $fa42706b76f7ad67$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
window.p5xr = {
    instance: null
};
/**
 * This file contains all functions that extend the p5 prototype.
 * Sections are currently designated by #region and #endregion
 * If this file grows longer in the future it can be broken up into
 * separate files.
 */ // #region Initialization
/**
 * starts the process of creating a VR-ready canvas
 * This actually just creates a button that will set into motion
 * the creation of a VR canvas and creates a new p5vr object.
 * This should be called in `preload()` so
 * that the entire sketch can wait to start until the user has "entered VR"
 * via a button click gesture
 * @method createVRCanvas
 * @param {p5XRButton} [xrButton] An optional button to replace default button for entering VR
 * @section VR
 * @category Initialization
 */ p5.prototype.createVRCanvas = function(xrButton) {
    noLoop();
    p5xr.instance = new $fa42706b76f7ad67$var$_p5vr2.default(xrButton);
    p5xr.instance.__initVR();
};
/**
 * **AR IS LARGELY UNTESTED AND EXPERIMENTAL**
 * This creates a button that will create a AR canvas and new p5ar object
 * on click.
 * This should be called in `preload()` so
 * that the entire sketch can wait to start until the user has "entered AR"
 * via a button click gesture/
 * @method createARCanvas
 * @section AR
 * @category Initialization
 */ p5.prototype.createARCanvas = function() {
    noLoop();
    p5xr.instance = new $fa42706b76f7ad67$var$_p5ar2.default();
    p5xr.instance.initAR();
};
/**
 * Get the current "Enter XR" button.
 * @returns {p5xrButton} The button object
 * @method getEnterXRButton
 * @category Initialization
 */ p5.prototype.getXRButton = function() {
    if (p5xr && p5xr.instance && p5xr.instance.xrButton) return p5xr.instance.xrButton;
    console.warn("No XR button found. Make sure to call createVRCanvas() or createARCanvas() first.");
};
/**
 * Creates a new p5xrButton object to use for entering and exiting XR.
 * @param {Object} options Options for the creation of p5xrButton
 * @param {Color} options.background Color of the button background, defaults to rgb(237,34,93)
 * @param {Number} options.opacity Opacity of the button background when XR is available, defaults to 0.95
 * @param {Number} options.disabledOpacity Opacity of the button background when XR is unavailable, defaults to 0.5
 * @param {Number} options.height Height of the button, defaults to window.innerWidth / 5
 * @param {Number} options.fontSize Font size for the button, defaults to height / 3
 * @param {String} options.textEnterXRTitle Text to display on the button before entering XR, defaults to "ENTER XR"
 * @param {String} options.textXRNotFoundTitle Text to display on the button when XR not found, defaults to "XR NOT FOUND"
 * @param {String} options.textExitXRTitle Text to display on the button when currently in XR, defaults to "EXIT XR"
 * @param {HTMLElement} options.domElement Pass in an alternate DOM Element to use for the button, should provide a 'click' event
 * @returns {p5xrButton} The button object
 * @method createXRButton
 * @category Initialization
 */ p5.prototype.createXRButton = function(options) {
    return new p5xrButton(options);
}; // #endregion
// #region Background
/**
 * Sets the clear color for VR-Mode. <br><br>
 * This has to happen separately from calls to background
 * to avoid clearing between drawing the eyes
 * @method setVRBackgroundColor
 * @param  {Number} r red value of background
 * @param  {Number} g green value of background
 * @param  {Number} b blue value of background
 * @example
 *
 * let timer = 0;
 * const timeBetween = 2000;
 *
 * function preload() {
 *   createVRCanvas();
 * }
 *
 * function setup() {
 *   randomizeBackground();
 * }
 *
 * function draw() {
 *   if(millis() - timer > timeBetween) {
 *     randomizeBackground();
 *     timer = millis();
 *   }
 *
 *   translate(0, 0, -100);
 *   rotateX(frameCount * 0.005);
 *   box(10);
 * }
 *
 * function randomizeBackground() {
 *   setVRBackgroundColor(random(255), random(255), random(255));
 * }
 *
 *
 * @section VR
 * @category Background
 */ p5.prototype.setVRBackgroundColor = function(r, g, b) {
    p5xr.instance.curClearColor = color(r, g, b);
};
/**
 * Creates a 360 degree texture around the current sketch using the supplied image.
 * @param {p5.Image} tex The texture to be used for the background
 * @section VR
 * @category Background
 */ p5.prototype.surroundTexture = function(tex) {
    push();
    texture(tex);
    rotateX(PI);
    scale(-1, 1, 1);
    sphere(300, 60, 40);
    pop();
}; // #endregion
// #region Anchors
/**
 * **AR IS LARGELY UNTESTED AND EXPERIMENTAL**
 * @param {p5.Vector} vec Vector for the AR real-world hit position
 * @returns p5.Anchor object with anchor position and orientation
 * @section AR
 */ p5.prototype.createAnchor = function(vec) {
    if (p5xr.instance.isVR) return;
    return p5xr.instance.__createAnchor(vec);
};
/**
 * @ignore
 */ p5.prototype.detectHit = function(ev) {
    if (p5xr.instance.isVR) return;
    return p5xr.instance.__detectHit(ev);
}; // #endregion
// #region Input
/**
 * Get an XR input source for the given input source id.
 * @param {String} input The name of the input to access, typically 'left' or 'right'
 * @returns {p5XRInput} The input object
 * @category Input
 */ p5.prototype.getXRInput = function(input) {
    if (p5xr.instance.xrSession.inputSources.length === 0) return;
    return p5xr.instance.__getXRInput(input);
}; // #endregion
// #region View
/**
 * Sets the position of the viewer
 * @param {*} targetX The target x position of the viewer
 * @param {*} targetY The target y position of the viewer
 * @param {*} targetZ The target z position of the viewer
 * @method setViewerPosition
 * @category View
 * @example
 *  let z = 0;
  * let viewerPosition;
  *
  * function preload() {
  *   createVRCanvas();
  * }
  *
  * function setup() {
  *   setVRBackgroundColor(0, 0, 255);
  *   noStroke();
  *   angleMode(DEGREES);
  *   viewerPosition = createVector(0, 0, 0);
  * }
  *
  * function draw() {
  *   //moves the viewer forward if controller trigger is pressed
  *   const left = getXRInput(LEFT);
  *   const right = getXRInput(RIGHT);
  *   [left, right].forEach((hand) => {
  *   if (hand) {
  *       viewerPosition.z += hand.thumbstick2D.y * 0.01;
  *       viewerPosition.x += hand.thumbstick2D.x * 0.01;
  *       if(hand.thumbstick2D.x !== 0 || hand.thumbstick2D.y !== 0) {
  *         fill('red');
  *       } else {
  *         fill('purple');
  *       }
  *       push();
  *       applyMatrix(hand.pose)
  *       box(0.05);
  *       pop();
  *     }
  *   });
  *   if (viewerPosition.z < -7) {
  *     viewerPosition.z = 7;
  *   }
  *   setViewerPosition(viewerPosition.x, viewerPosition.y, viewerPosition.z);
  *   //draw a 10x10 floor
  *   push();
  *   translate(0, -1, 0);
  *   rotateX(-90);
  *   fill(0, 255, 0);
  *   plane(10, 10);
  *   pop();
  *   //resets the viewer's position if they move too far
  *  }
 */ p5.prototype.setViewerPosition = function(x, y, z) {
    const { viewer: viewer  } = p5xr.instance;
    viewer.setPosition(x, y, z);
};
/**
 * Gets the current viewer object
 * @returns {p5xrViewer} The viewer object
 * @method getViewer
 * @category View
 */ p5.prototype.getViewer = function() {
    if (!p5xr.instance || !p5xr.instance.viewer) console.warn("No viewer found. Make sure to call createVRCanvas() or createARCanvas() first.");
    return p5xr.instance.viewer;
};
/**
 * All calls after sticky() and before noSticky() will move with the view.
 * @param {Boolean} drawOnTop If true, all calls after this will be drawn on top of everything else
 * @method sticky
 * @category View
 */ p5.prototype.sticky = function(drawOnTop = false) {
    push();
    p5xr.instance.viewer.drawOnTop = drawOnTop;
    if (drawOnTop) p5.instance._renderer.GL.disable(p5.instance._renderer.GL.DEPTH_TEST);
    p5.instance._renderer.uMVMatrix.set(p5.Matrix.identity());
    const viewerPosition = p5xr.instance.viewer.position;
    setViewerPosition(viewerPosition.x, viewerPosition.y, viewerPosition.z);
};
/**
 * All calls after sticky() and before noSticky() will move with the view.
 * @method noSticky
 * @category View
 */ p5.prototype.noSticky = function() {
    p5.instance._renderer.GL.enable(p5.instance._renderer.GL.DEPTH_TEST);
    pop();
}; // #endregion
// #region Raycasting
/**
 * Takes a 2D screen coordinate and returns a Ray in 3D coordinates.
 * @method getRayFromScreen
 * @param {Number} x The screen x position for the Ray to originate from
 * @param {Number} y The screen y position for the Ray to originate from
 * @returns {Ray} Ray object for use with raycasting methods, {origin, direction}
 * @category Raycasting
 */ p5.prototype.getRayFromScreen = function(x, y) {
    if (!p5xr.instance || !p5xr.instance.viewer) console.warn("No viewer found to calculate Ray. Make sure to call createVRCanvas() or createARCanvas() first.");
    const { viewer: viewer  } = p5xr.instance;
    return viewer.getRayFromScreen(x, y);
};
/**
 * Checks ray against a sphere collider with given radius at current drawing position.
 * @method intersectsSphere
 * @param {Number} radius The radius of the sphere to check collision with
 * @param {Number} [Ray] Optional. The ray to use for checking, defaults to getRayFromScreen(0, 0)
 * @returns {Boolean} True if the ray intersects with a sphere with the given radius at current drawing position, false otherwise
 * @category Raycasting
 */ p5.prototype.intersectsSphere = function(radius) {
    let ray = {
        origin: null,
        direction: null
    };
    if (arguments.length !== 2 || !Object.hasOwn(arguments[1], "origin")) {
        const screenX = arguments[1] || 0;
        const screenY = arguments[2] || 0;
        ray = p5xr.instance.viewer.getRayFromScreen(screenX, screenY);
    } else {
        ray.origin = arguments[1].origin.copy();
        ray.direction = arguments[1].direction.copy();
    }
    if (ray === null) return false; // sphere in View space
    let uMVMatrix = p5.instance._renderer.uMVMatrix.copy();
    uMVMatrix.transpose(uMVMatrix);
    uMVMatrix = uMVMatrix.mat4;
    const sphereCenter = new p5.Vector(0, 0, 0);
    sphereCenter.x = uMVMatrix[3];
    sphereCenter.y = uMVMatrix[7];
    sphereCenter.z = uMVMatrix[11];
    if (p5.Vector.sub(ray.origin, sphereCenter).mag() <= radius) return true;
     // check if sphere is in front of ray
    if (p5.Vector.dot(p5.Vector.sub(sphereCenter, ray.origin), ray.direction) < 0) return false;
    const sphereToRayOrigin = p5.Vector.sub(ray.origin, sphereCenter);
    const b = 2 * p5.Vector.dot(ray.direction, sphereToRayOrigin);
    const c = p5.Vector.mag(sphereToRayOrigin) * p5.Vector.mag(sphereToRayOrigin) - radius * radius;
    const det = b * b - 4 * c;
    return det >= 0;
};
/**
 * Checks ray against a box collider with given dimensions at current drawing position.
 * @method intersectsBox
 * @param {Number} width Width of box collider for check
 * @param {Number} [height] Optional. Height of box collider for check
 * @param {Number} [depth] Optional. Depth of box collider for check
 * @param {Ray} [ray] Optional. The ray to use for checking, defaults to getRayFromScreen(0, 0)
 * @returns {Boolean} True if the ray intersects with a box collider with given dimension at current drawing position, false otherwise
 * @category Raycasting
 */ p5.prototype.intersectsBox = function() {
    const width = arguments[0];
    let height;
    let depth;
    let ray = {
        origin: null,
        direction: null
    };
    if (Object.hasOwn(arguments[arguments.length - 1], "origin")) {
        ray.origin = arguments[arguments.length - 1].origin.copy();
        ray.direction = arguments[arguments.length - 1].direction.copy();
        height = arguments.length > 2 ? arguments[1] : width;
        depth = arguments.length > 3 ? arguments[2] : height;
    } else if (arguments.length === 5) {
        // if screenX, screenY is specified => width, height, depth must also be specified
        ray = p5xr.instance.viewer.getRayFromScreen(arguments[3], arguments[4]);
        height = arguments[1];
        depth = arguments[2];
    } else {
        ray = p5xr.instance.viewer.getRayFromScreen(0, 0);
        height = arguments.length > 1 ? arguments[1] : width;
        depth = arguments.length > 2 ? arguments[2] : height;
    } // bounding box in view space will not be axis aligned
    // so we will transform ray to box space by applying inverse(uMVMatrix) to origin and direction
    let uMVMatrixInv = p5.instance._renderer.uMVMatrix.copy();
    uMVMatrixInv.transpose(uMVMatrixInv);
    uMVMatrixInv.invert(uMVMatrixInv);
    uMVMatrixInv = uMVMatrixInv.mat4;
    const rayOriginCopy = ray.origin.copy();
    ray.origin.x = uMVMatrixInv[0] * rayOriginCopy.x + uMVMatrixInv[1] * rayOriginCopy.y + uMVMatrixInv[2] * rayOriginCopy.z + uMVMatrixInv[3];
    ray.origin.y = uMVMatrixInv[4] * rayOriginCopy.x + uMVMatrixInv[5] * rayOriginCopy.y + uMVMatrixInv[6] * rayOriginCopy.z + uMVMatrixInv[7];
    ray.origin.z = uMVMatrixInv[8] * rayOriginCopy.x + uMVMatrixInv[9] * rayOriginCopy.y + uMVMatrixInv[10] * rayOriginCopy.z + uMVMatrixInv[11];
    const rayDirectionCopy = ray.direction.copy();
    ray.direction.x = uMVMatrixInv[0] * rayDirectionCopy.x + uMVMatrixInv[1] * rayDirectionCopy.y + uMVMatrixInv[2] * rayDirectionCopy.z;
    ray.direction.y = uMVMatrixInv[4] * rayDirectionCopy.x + uMVMatrixInv[5] * rayDirectionCopy.y + uMVMatrixInv[6] * rayDirectionCopy.z;
    ray.direction.z = uMVMatrixInv[8] * rayDirectionCopy.x + uMVMatrixInv[9] * rayDirectionCopy.y + uMVMatrixInv[10] * rayDirectionCopy.z;
    ray.direction.normalize(); // representing AABB (Axis aligned bounding box) with 2 extreme points
    const min = new p5.Vector(-0.5 * width, -0.5 * height, -0.5 * depth);
    const max = new p5.Vector(0.5 * width, 0.5 * height, 0.5 * depth); // ray-AABB intersection algorithm
    const t1 = (min.x - ray.origin.x) / ray.direction.x;
    const t2 = (max.x - ray.origin.x) / ray.direction.x;
    const t3 = (min.y - ray.origin.y) / ray.direction.y;
    const t4 = (max.y - ray.origin.y) / ray.direction.y;
    const t5 = (min.z - ray.origin.z) / ray.direction.z;
    const t6 = (max.z - ray.origin.z) / ray.direction.z;
    const tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
    const tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));
    if (tmax < 0 || tmin > tmax) return false;
    return true;
};
/**
 * Checks ray against a plane with at current drawing position and returns normalized x and y coordinates of intersection point.
 * @method intersectsPlane
 * @param {Ray} [ray] Optional. The ray to use for checking, defaults to getRayFromScreen(0, 0)
 * @returns {p5.Vector} The normalized coordinate of the intersection point on the plane, or null if no intersection
 * @category Raycasting
 */ p5.prototype.intersectsPlane = function() {
    let ray = {
        origin: null,
        direction: null
    };
    const { origin: origin , direction: direction  } = arguments.length > 0 ? arguments[0] : {};
    if (origin && direction) {
        ray.origin = origin.copy();
        ray.direction = direction.copy();
    } else ray = p5xr.instance.viewer.getRayFromScreen(arguments[0], arguments[1]);
     // transforming ray to local plane space
    // intersection point will be with respect to the plane
    let uMVMatrixInv = p5.instance._renderer.uMVMatrix.copy();
    uMVMatrixInv.transpose(uMVMatrixInv);
    uMVMatrixInv.invert(uMVMatrixInv);
    uMVMatrixInv = uMVMatrixInv.mat4;
    const rayOriginCopy = ray.origin.copy();
    ray.origin.x = uMVMatrixInv[0] * rayOriginCopy.x + uMVMatrixInv[1] * rayOriginCopy.y + uMVMatrixInv[2] * rayOriginCopy.z + uMVMatrixInv[3];
    ray.origin.y = uMVMatrixInv[4] * rayOriginCopy.x + uMVMatrixInv[5] * rayOriginCopy.y + uMVMatrixInv[6] * rayOriginCopy.z + uMVMatrixInv[7];
    ray.origin.z = uMVMatrixInv[8] * rayOriginCopy.x + uMVMatrixInv[9] * rayOriginCopy.y + uMVMatrixInv[10] * rayOriginCopy.z + uMVMatrixInv[11];
    const rayDirectionCopy = ray.direction.copy();
    ray.direction.x = uMVMatrixInv[0] * rayDirectionCopy.x + uMVMatrixInv[1] * rayDirectionCopy.y + uMVMatrixInv[2] * rayDirectionCopy.z;
    ray.direction.y = uMVMatrixInv[4] * rayDirectionCopy.x + uMVMatrixInv[5] * rayDirectionCopy.y + uMVMatrixInv[6] * rayDirectionCopy.z;
    ray.direction.z = uMVMatrixInv[8] * rayDirectionCopy.x + uMVMatrixInv[9] * rayDirectionCopy.y + uMVMatrixInv[10] * rayDirectionCopy.z;
    ray.direction.normalize(); // representing plane
    const planeNormal = new p5.Vector(0, 0, 1);
    const planePoint = new p5.Vector(0, 0, 0); // ray-plane intersection algorithm
    const w = p5.Vector.sub(planePoint, ray.origin);
    const d = Math.abs(p5.Vector.dot(ray.direction, planeNormal));
    if (d === 0) return null;
    const k = Math.abs(p5.Vector.dot(w, planeNormal) / d);
    const intersectionPoint = p5.Vector.add(ray.origin, ray.direction.copy().setMag(k));
    return createVector(intersectionPoint.x, intersectionPoint.y);
};
/**
 * Create a ray object for using with raycasting methods.
 * @method generateRay
 * @param {Number} x1 X coordinate for origin
 * @param {Number} y1 Y coordinate for origin
 * @param {Number} z1 Z coordinate for origin
 * @param {Number} x2 X coordinate for direction
 * @param {Number} y2 Y coordinate for direction
 * @param {Number} z2 Z coordinate for direction
 * @returns {Ray} Ray object with {origin: p5.Vector, direction: p5.Vector}
 * @category Raycasting
 */ p5.prototype.generateRay = function(x1, y1, z1, x2, y2, z2) {
    const origin = new p5.Vector(x1, y1, z1);
    let direction = new p5.Vector(x2, y2, z2);
    direction = p5.Vector.sub(direction, origin);
    direction.normalize();
    let uMVMatrix = p5.instance._renderer.uMVMatrix.copy();
    uMVMatrix.transpose(uMVMatrix);
    uMVMatrix = uMVMatrix.mat4;
    const originCopy = origin.copy();
    origin.x = uMVMatrix[0] * originCopy.x + uMVMatrix[1] * originCopy.y + uMVMatrix[2] * originCopy.z + uMVMatrix[3];
    origin.y = uMVMatrix[4] * originCopy.x + uMVMatrix[5] * originCopy.y + uMVMatrix[6] * originCopy.z + uMVMatrix[7];
    origin.z = uMVMatrix[8] * originCopy.x + uMVMatrix[9] * originCopy.y + uMVMatrix[10] * originCopy.z + uMVMatrix[11];
    const directionCopy = direction.copy();
    direction.x = uMVMatrix[0] * directionCopy.x + uMVMatrix[1] * directionCopy.y + uMVMatrix[2] * directionCopy.z;
    direction.y = uMVMatrix[4] * directionCopy.x + uMVMatrix[5] * directionCopy.y + uMVMatrix[6] * directionCopy.z;
    direction.z = uMVMatrix[8] * directionCopy.x + uMVMatrix[9] * directionCopy.y + uMVMatrix[10] * directionCopy.z;
    direction.normalize();
    return {
        origin: origin,
        direction: direction
    };
}; // #endregion

})();
