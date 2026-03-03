import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// Component that loads and renders the .obj + .mtl 3D model
function ShedModel() {
    const materials = useLoader(MTLLoader, '/model/Shed.mtl');
    const obj = useLoader(OBJLoader, '/model/Shed.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    // Adjusted scale and position assuming standard architectural dimensions
    return <primitive object={obj} scale={0.015} position={[0, -1, 0]} />;
}

export default function ModelViewer() {
    return (
        <section style={{ height: '100vh', background: 'var(--law-offwhite)', color: '#0a140e', position: 'relative', display: 'flex', flexDirection: 'column' }}>

            <div style={{ padding: '6rem 2rem 2rem', textAlign: 'center', zIndex: 10 }}>
                <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)' }}>Explore the Masterpiece</h2>
                <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>Drag to rotate 360&deg;. Scroll to zoom in on the precision details.</p>
            </div>

            <div style={{ flex: 1, position: 'relative', cursor: 'grab' }}>
                <Suspense fallback={<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.2rem', color: '#666' }}>Loading High-Fidelity Model...</div>}>
                    <Canvas shadows camera={{ position: [5, 2, 8], fov: 45 }}>
                        <color attach="background" args={['#F9F9F6']} />
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
                        <directionalLight position={[-10, 10, -5]} intensity={0.5} />
                        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} maxPolarAngle={Math.PI / 2} />
                        <ShedModel />
                    </Canvas>
                </Suspense>
            </div>

        </section>
    );
}
