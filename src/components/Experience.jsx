import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Base from './Base'

function Experience() {
    return (
        <Canvas>

            <OrbitControls />

            <mesh>
                <boxGeometry />
                <meshBasicMaterial color={'#ff0000'} />
            </mesh>

            <Base />

        </Canvas>
    )
}

export default Experience
