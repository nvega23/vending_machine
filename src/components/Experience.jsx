import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';

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
