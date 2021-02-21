export default `#version 300 es

in vec2 position;
in vec4 color;

uniform int box;

flat out int box1;
out vec4 vColor;

void main() {

    vColor = color;
        
    box1 = box;

  gl_Position = vec4(position.xy, 0, 1);
}
`;