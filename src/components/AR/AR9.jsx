// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Suspense } from 'react';

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} position={[0, 0, 0]} scale={[1, 1, 1]} />;
// };

// const Scene = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <OrbitControls />
//       <Suspense fallback={<span>Loading...</span>}>
//         <Model url="/AR1.glb" />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default Scene;


import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

const Model = ({ url, scale = [1, 1, 1] }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} />;
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Suspense fallback={null}>
        {/* Increase the scale to make the model larger */}
        <Model url="/AR9.glb" scale={[5, 5, 5]} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;

