'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const frag = `
vec4 abyssColor = vec4(0.0, 0.0, 0.3, 1.0);
vec4 tunnelColor = vec4(0.5, 0.7, 1.0, 1.0);

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y * 0.6;
    
    float r = length(uv);
    float y = fract(r / 0.005 / (r - 0.01) + time * 1.0);
    
    y = smoothstep(0.01, 4.0, y);
    
    float x = length(uv);
    x = smoothstep(0.5, 0.01, x);
    
    gl_FragColor = mix(tunnelColor, abyssColor, x) * y;
}
`;

const Element = ({ text }) => {
    const mountRef = useRef(null);
    const requestRef = useRef(null);
    const startTime = useRef(Date.now());
    const renderer = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 1, 2);
        camera.position.z = 1;

        const geometry = new THREE.PlaneGeometry(10, 10);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { type: 'f', value: 1.0 },
                resolution: { type: "v2", value: new THREE.Vector2() }
            },
            fragmentShader: frag
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer.current = new THREE.WebGLRenderer({ antialias: true });
        mountRef.current.appendChild(renderer.current.domElement);

        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            material.uniforms.resolution.value.set(width, height);
            renderer.current.setSize(width, height);
        };

        handleResize();

        const animate = () => {
            requestRef.current = requestAnimationFrame(animate);
            const elapsedMilliseconds = Date.now() - startTime.current;
            material.uniforms.time.value = elapsedMilliseconds / 1000.0;
            renderer.current.render(scene, camera);
        };

        animate();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(requestRef.current);
            if (mountRef.current ===  null) {null}
            else {mountRef.current.removeChild(renderer.current.domElement)};
        };
    }, []);

    return (
        <div className='relative w-full h-full '>
            <div className='absolute w-max left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-6xl font-bold '>
                {text}
            </div>
            <div className='absolute' ref={mountRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default Element;
