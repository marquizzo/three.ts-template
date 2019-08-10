precision highp float;

uniform float time;
varying vec2 vUv;

void main() {
	vec4 texel = vec4(
		cos(time * 0.9) * 0.5 + 0.5,
		sin(time * 1.1) * 0.5 + 0.5,
		sin(vUv.x * 3.1416),
		1.0
	);
	gl_FragColor = texel;
}
