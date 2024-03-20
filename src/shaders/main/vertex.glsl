void main(){
    // MVP
    gl_Position  = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}