precision highp float;
#define PI 3.14159265
#define TAU 6.283185307

uniform float time;
varying vec2 vUv;

void main() {
	vec4 texel = vec4(
		sin((vUv.x + time * 1.0) * TAU),
		0.0, 
		cos((vUv.y + time * 0.2) * TAU),
		1.0
	);
	gl_FragColor = texel;
}
