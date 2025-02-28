import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber"
import { TextureLoader } from "three"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"
// import { useSpring } from "@react-spring/three"

// function Book({ color, position }: BookProps) {
//     const mesh = useRef<THREE.Mesh>(null)
//     const [isDragging, setIsDragging] = useState(false)
//     const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0])
  
//     const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
//       e.stopPropagation()
//       setIsDragging(true)
//     }
  
//     const handlePointerUp = () => {
//       setIsDragging(false)
//     }
  
//     const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
//       if (isDragging) {
//         setRotation([
//           rotation[0] + e.movementY / 100,
//           rotation[1] + e.movementX / 100,
//           0
//         ])
//       }
//     }
  
//     useFrame(() => {
//       if (mesh.current) {
//         mesh.current.rotation.x = THREE.MathUtils.lerp(
//           mesh.current.rotation.x,
//           rotation[0],
//           0.1
//         )
//         mesh.current.rotation.y = THREE.MathUtils.lerp(
//           mesh.current.rotation.y,
//           rotation[1],
//           0.1
//         )
//       }
//     })
  
//     return (
//       <mesh
//         position={position}
//         ref={mesh}
//         onPointerDown={handlePointerDown}
//         onPointerUp={handlePointerUp}
//         onPointerMove={handlePointerMove}
//       >
//         <boxGeometry args={[2, 3, 0.3]} />
//         <meshStandardMaterial color={color} />
//       </mesh>
//     )
//   }
  
//   interface Book3DViewProps {
//     color?: string
//   }
  
//   export function Book3DView({ color = "#8B3A62" }: Book3DViewProps) {
//     return (
//       <div className="w-full h-full">
//         <Canvas
//           shadows
//           camera={{ position: [0, 0, 3.5], fov: 50 }}
//           style={{ background: "transparent" }}
//         >
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} intensity={0.5} castShadow />
//           <pointLight position={[-10, -10, -10]} intensity={0.3} />
//           <directionalLight
//             position={[5, 5, 5]}
//             intensity={0.7}
//             castShadow
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//           />
//           <Book color={color} position={[0, 0, 0]} scale={[0.4, 0.4, 0.4]} />
//         </Canvas>
//       </div>
//     )
//   }

// interface Book3DViewProps {
//     color?: string
// }

// interface BookProps {
//     color: string
//     position: [number, number, number]
// }

// export function Book3DView({ color = "#8B3A62" }: Book3DViewProps) {
//     return (
//       <div className="w-full h-full">
//         <Canvas
//           shadows
//           camera={{ position: [0, 0, 3.5], fov: 50 }}
//           style={{ background: "transparent" }}
//         >
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} intensity={0.5} castShadow />
//           <pointLight position={[-10, -10, -10]} intensity={0.3} />
//           <directionalLight
//             position={[5, 5, 5]}
//             intensity={0.7}
//             castShadow
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//           />
//           <Book color={color} position={[0, 0, 0]} scale={[0.4, 0.4, 0.4]} />
//         </Canvas>
//       </div>
//     )
//   }

// function Book({ color, position }: BookProps) {
//     const mesh = useRef<THREE.Mesh>(null);
//     const [isDragging, setIsDragging] = useState(false);
//     const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
//     const [dragStart, setDragStart] = useState<[number, number] | null>(null);
  
//     const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
//       e.stopPropagation();
//       setIsDragging(true);
//       setDragStart([e.clientX, e.clientY]);
//     };
  
//     const handlePointerUp = () => {
//       setIsDragging(false);
//       setDragStart(null);
//     };
  
//     const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
//       if (isDragging && dragStart) {
//         const deltaX = e.clientX - dragStart[0];
//         const deltaY = e.clientY - dragStart[1];
  
//         setRotation((prevRotation) => [
//           prevRotation[0] - deltaY * 0.005, // Reduced sensitivity
//           prevRotation[1] + deltaX * 0.005, // Reduced sensitivity
//           0,
//         ]);
//       }
//     };
  
//     useFrame(() => {
//       if (mesh.current) {
//         mesh.current.rotation.x = THREE.MathUtils.lerp(
//           mesh.current.rotation.x,
//           rotation[0],
//           0.1
//         );
//         mesh.current.rotation.y = THREE.MathUtils.lerp(
//           mesh.current.rotation.y,
//           rotation[1],
//           0.1
//         );
//       }
//     });
  
//     return (
//       <mesh
//         position={position}
//         ref={mesh}
//         onPointerDown={handlePointerDown}
//         onPointerUp={handlePointerUp}
//         onPointerMove={handlePointerMove}
//       >
//         <boxGeometry args={[2, 3, 0.3]} />
//         <meshStandardMaterial color={color} />
//       </mesh>
//     );
//   }

// interface Book3DViewProps {
//   color?: string
//   isSpine?: boolean
//   coverImage?: string
// }

// export function Book3DView({ color = "#8B3A62", isSpine = false, coverImage }: Book3DViewProps) {
//   if (isSpine) {
//     return (
//       <div className="relative w-full h-full flex items-center justify-center">
//         <div 
//           className={`w-[1000px] h-[100px] bg-gradient-to-r from-${color}/80 to-${color} 
//             shadow-lg rounded-sm transform hover:scale-105 transition-transform duration-200
//             flex items-center justify-center text-white text-xl font-medium`}
//           style={{
//             backgroundImage: `linear-gradient(to right, ${color}dd, ${color})`,
//             boxShadow: `2px 2px 10px rgba(0,0,0,0.2), -1px -1px 5px rgba(255,255,255,0.1)`
//           }}
//         />
//       </div>
//     )
//   }

//   return (
//     <div className="relative w-full h-full flex items-center justify-center perspective-1000">
//       <div className="relative w-[600px] h-[800px] transform-style-3d shadow-2xl">
//         {coverImage ? (
//           <Image
//             src={coverImage}
//             alt="Book cover"
//             fill
//             className="object-cover rounded-sm"
//           />
//         ) : (
//           <div 
//             className="w-full h-full rounded-sm"
//             style={{ backgroundColor: color }}
//           />
//         )}
//         <div 
//           className="absolute inset-y-0 -right-8 w-8 transform origin-left rotate-y-90"
//           style={{ 
//             backgroundColor: color,
//             backgroundImage: `linear-gradient(to right, ${color}dd, ${color})`
//           }}
//         />
//         <div 
//           className="absolute inset-x-0 -bottom-8 h-8 transform origin-top rotate-x-90"
//           style={{ 
//             backgroundColor: color,
//             backgroundImage: `linear-gradient(to bottom, ${color}dd, ${color})`
//           }}
//         />
//       </div>
//     </div>
//   )
// }

interface Book3DViewProps {
  color?: string
  isSpine?: boolean
  coverImage?: string
}

function Book({ color, coverImage, isSpine }: Book3DViewProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [dragging, setDragging] = useState(false)
  
  const texture = new THREE.TextureLoader().load(coverImage || "")
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 1)
  
  useFrame((state) => {
    if (!isSpine && meshRef.current && !dragging) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
      meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  const width = isSpine ? 35 : 8 // Even wider spine
  const height = isSpine ? 4 : 10 // Taller spine
  const depth = isSpine ? 3 : 1.5 // Thicker spine

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
    >
      <boxGeometry args={[width, height, depth]} />
      <meshPhysicalMaterial
        color={color}
        map={texture}
        metalness={0.2}
        roughness={0.8}
        clearcoat={0.8}
        clearcoatRoughness={0.2}
      />
    </mesh>
  )
}

export function Book3DView({ color = "#8B3A62", isSpine = false, coverImage }: Book3DViewProps) {
  return (
    <div className={`w-full h-full ${isSpine ? "h-[250px]" : "h-[600px]"}`}>
      <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Book color={color} coverImage={coverImage} isSpine={isSpine} />
        <OrbitControls 
          enableZoom={false}
          enablePan={!isSpine}
          minPolarAngle={isSpine ? Math.PI / 2 : 0}
          maxPolarAngle={isSpine ? Math.PI / 2 : Math.PI}
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}