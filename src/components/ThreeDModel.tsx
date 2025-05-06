
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Setup scene
    const scene = new THREE.Scene();
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.setClearColor(0x000000, 0);
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Create a glowing brain shape
    const brainGeometry = new THREE.SphereGeometry(1.5, 16, 16);
    
    // Create a texture for the brain
    const texture = new THREE.TextureLoader().load('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb');
    const material = new THREE.MeshStandardMaterial({
      color: 0x9b87f5,
      emissive: 0x7E69AB,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.9,
      roughness: 0.5,
      metalness: 0.8,
      map: texture
    });
    
    const brain = new THREE.Mesh(brainGeometry, material);
    scene.add(brain);
    
    // Create particles around the brain
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      // Create a sphere of particles
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xd6bcfa,
      transparent: true,
      opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add point light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      brain.rotation.y += 0.003;
      brain.rotation.z += 0.001;
      
      particlesMesh.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.remove(brain);
      scene.remove(particlesMesh);
      scene.remove(ambientLight);
      scene.remove(pointLight);
      
      brainGeometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);
  
  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeDModel;
