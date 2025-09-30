import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Floor = ({ textureurl = "/sandTexture.png" }) => {
    const texture = useLoader(THREE.TextureLoader, textureurl)

    useMemo(() => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
    }, [texture]);
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

export default Floor;