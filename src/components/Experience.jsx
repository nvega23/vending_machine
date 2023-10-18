import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const Experience = () => {
    return (
        <>
            <OrbitControls/>
            <mesh>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>
        </>
    );
};
