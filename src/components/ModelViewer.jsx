import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer({ model }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-4">
        {model ? 'Your 3D Jewelry Design' : 'Generated Model Will Appear Here'}
      </h2>
      
      <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
        {model ? (
          <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>
              <Model url={model.modelUrl} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No model generated yet
          </div>
        )}
      </div>

      {model && (
        <div className="mt-4 flex justify-between">
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300">
            Download STL
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Save to Account
          </button>
        </div>
      )}
    </div>
  );
}