import vertex from '../shaders/main/vertex.glsl'
import fragment from '../shaders/main/fragment.glsl'
import * as THREE from 'three'

function Base() {

    return (
        <>
            <mesh position={[-1.5, 0, 0]} >
                <planeGeometry />
                <shaderMaterial
                    side={THREE.DoubleSide}
                    attach={'material'}
                    vertexShader={vertex}
                    fragmentShader={fragment}
                />
            </mesh>
        </>
    )
}

export default Base
