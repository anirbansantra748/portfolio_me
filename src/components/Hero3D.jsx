import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls, Stars, Float, useTexture, Sphere, Box, Torus, Octahedron } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Floating Code Particles
function CodeParticles() {
  const mesh = useRef()
  const light = useRef()
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 2000; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50
        ],
        rotation: Math.random() * Math.PI * 2
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15
    }
    if (light.current) {
      light.current.position.x = Math.sin(state.clock.elapsedTime) * 10
      light.current.position.z = Math.cos(state.clock.elapsedTime) * 10
    }
  })

  return (
    <>
      <pointLight ref={light} intensity={2} color="#00ff88" />
      <group ref={mesh}>
        {particles.map((particle, i) => (
          <mesh key={i} position={particle.position}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#00ff88" : i % 3 === 1 ? "#00aaff" : "#aa00ff"} 
              emissive={i % 3 === 0 ? "#00ff88" : i % 3 === 1 ? "#00aaff" : "#aa00ff"}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </>
  )
}

// Rotating Code Cube
function CodeCube() {
  const mesh = useRef()
  
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5
    mesh.current.rotation.y += delta * 0.3
    mesh.current.rotation.z += delta * 0.1
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={[8, 2, -5]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.3}
          wireframe={true}
        />
      </mesh>
    </Float>
  )
}

// DNA Helix Structure
function DNAHelix() {
  const group = useRef()
  
  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.5
  })

  const helixPoints = useMemo(() => {
    const points = []
    for (let i = 0; i < 50; i++) {
      const t = (i / 50) * Math.PI * 4
      points.push([
        Math.cos(t) * 2,
        (i / 50) * 10 - 5,
        Math.sin(t) * 2
      ])
    }
    return points
  }, [])

  return (
    <group ref={group} position={[-8, 0, -3]}>
      {helixPoints.map((point, i) => (
        <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.5}>
          <mesh position={point}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial 
              color="#aa00ff"
              emissive="#aa00ff"
              emissiveIntensity={0.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Binary Ring
function BinaryRing() {
  const ring = useRef()
  
  useFrame((state) => {
    ring.current.rotation.z = state.clock.elapsedTime * 0.8
  })

  return (
    <Float speed={1.5} rotationIntensity={2}>
      <mesh ref={ring} position={[0, -4, -2]}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#00aaff"
          emissive="#00aaff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

// Matrix Rain Effect
function MatrixRain() {
  const points = useRef()
  
  const positions = useMemo(() => {
    const pos = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100
      pos[i * 3 + 1] = Math.random() * 100
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return pos
  }, [])

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position
      for (let i = 0; i < positions.count; i++) {
        positions.array[i * 3 + 1] -= 0.1
        if (positions.array[i * 3 + 1] < -50) {
          positions.array[i * 3 + 1] = 50
        }
      }
      positions.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00ff88"
        transparent
        opacity={0.6}
      />
    </points>
  )
}

// 3D Text Component
function CodeText() {
  return (
    <Float speed={2} rotationIntensity={0.5}>
      <Text
        position={[0, 3, 0]}
        fontSize={2}
        color="#00ff88"
        anchorX="center"
        anchorY="middle"
        font="/fonts/jetbrains-mono.woff"
      >
        ANIRBAN
        <meshStandardMaterial 
          emissive="#00ff88"
          emissiveIntensity={0.5}
        />
      </Text>
    </Float>
  )
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      
      <CodeParticles />
      <CodeCube />
      <DNAHelix />
      <BinaryRing />
      <MatrixRain />
      <CodeText />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0.8} 
        fade 
        speed={1}
      />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 2.2} 
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <ChromaticAberration offset={[0.002, 0.002]} />
        <Noise opacity={0.05} />
      </EffectComposer>
    </>
  )
}

// Loading Component
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-400 mb-4"></div>
        <div className="text-green-400 font-mono text-xl animate-pulse">
          INITIALIZING_3D_MATRIX...
        </div>
      </div>
    </div>
  )
}

// Terminal Interface
function TerminalInterface() {
  return (
    <motion.div
      className="absolute bottom-8 left-8 right-8 md:left-1/4 md:right-1/4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <div className="bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 font-mono text-green-400">
        <div className="flex items-center mb-2">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-sm">anirban@matrix:~$</div>
        </div>
        <div className="space-y-1 text-sm">
          <div>> const developer = new AnirbanSantra();</div>
          <div>> developer.skills = ["Backend", "System Design", "LeetCode"];</div>
          <div>> developer.leetcode.solved = 400+;</div>
          <div>> developer.passion = "Creating INSANE code experiences";</div>
          <div className="flex items-center">
            <span>> developer.startCodingJourney();</span>
            <span className="animate-pulse ml-2">█</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Main Hero3D Component
const Hero3D = () => {
  return (
    <section className="h-screen relative overflow-hidden bg-black">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 70%)' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Navigation */}
        <motion.nav
          className="absolute top-0 left-0 right-0 z-10 p-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center space-x-8 text-green-400 font-mono text-sm">
            {['INIT', 'EXEC', 'DEBUG', 'DEPLOY', 'MATRIX'].map((item, i) => (
              <motion.div
                key={item}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                [{item}]
              </motion.div>
            ))}
          </div>
        </motion.nav>

        {/* Main Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold font-mono mb-4"
              style={{
                background: 'linear-gradient(45deg, #00ff88, #00aaff, #aa00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.5))'
              }}
            >
              ANIRBAN
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-green-400 font-mono mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              &lt;BACKEND_ARCHITECT /&gt; SYSTEM_DESIGNER /&gt; CODE_WARRIOR /&gt;
            </motion.p>
            
            <motion.div
              className="flex justify-center space-x-6 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              {['400+ LEETCODE', 'HLD/LLD EXPERT', 'MICROSERVICES', 'AI INTEGRATION'].map((skill, i) => (
                <motion.div
                  key={skill}
                  className="px-3 py-1 border border-green-400/30 rounded bg-green-400/5 text-green-400"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.7 + i * 0.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Terminal Interface */}
        <TerminalInterface />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 right-8 text-green-400 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <div className="flex flex-col items-center">
            <div className="animate-bounce mb-2">▼</div>
            <div>EXPLORE_MATRIX</div>
          </div>
        </motion.div>

        {/* Side Stats */}
        <motion.div
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-green-400 font-mono text-sm space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.5 }}
        >
          <div className="border border-green-400/30 rounded p-3 bg-black/50">
            <div className="text-xs text-green-400/60 mb-1">CURRENT_STATUS:</div>
            <div className="text-green-400">ONLINE</div>
          </div>
          <div className="border border-green-400/30 rounded p-3 bg-black/50">
            <div className="text-xs text-green-400/60 mb-1">EXPERIENCE:</div>
            <div className="text-green-400">2+ YEARS</div>
          </div>
          <div className="border border-green-400/30 rounded p-3 bg-black/50">
            <div className="text-xs text-green-400/60 mb-1">MODE:</div>
            <div className="text-green-400">FULL_STACK</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero3D