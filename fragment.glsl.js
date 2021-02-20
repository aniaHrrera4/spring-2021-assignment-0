export default `#version 300 es
precision highp float;

in vec4 vColor;
out vec4 outColor;
uniform vec4 uColor box;
uniform int box;


void main() {

    if(box==0){
        outColor = vec4(vColor.rgb,vColor.a);

    }else{
         outColor = vec4(vColor.rgb,uColor.a);
         outColor = uColor;
    }

}
`;