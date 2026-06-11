import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const ParticleCloud = ({ isDark }: { isDark: boolean }) => {
  const ref = useRef<any>();
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Generate random particles in a sphere
  const count = 5000;
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      array[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      array[i * 3 + 2] = r * Math.cos(phi);
    }
    return array;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Base continuous rotation
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;

      // Add deep 3D parallax on scroll
      const targetRotationZ = scrollRef.current * 0.0002;
      const targetPositionY = scrollRef.current * 0.0005;

      // Smooth interpolation
      ref.current.rotation.z += (targetRotationZ - ref.current.rotation.z) * 0.05;
      ref.current.position.y += (targetPositionY - ref.current.position.y) * 0.05;
    }
  });

  const pointColor = isDark ? '#ffffff' : '#1e293b';

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={pointColor}
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.7 : 0.9}
        />
      </Points>
    </group>
  );
};

const ThreeBackground = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect dark mode from the tailwind class on html
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    
    // Listen for dark mode toggles
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none transition-colors duration-500 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-[#050505] dark:to-[#111111]">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <ParticleCloud isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
