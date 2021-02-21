export default `#version 300 es
precision highp float;

in vec4 vColor;
flat in int box1;

out vec4 outColor;
uniform vec4 uColor;


void main() {

    if(box1==1){
        //json file colors
        outColor = vec4(vColor.rgb,vColor.a);
    }else if(box1==0){
        //from the sliders
         outColor = vec4(vColor.rgb,uColor.a);
         outColor = uColor;
    }

}
`;