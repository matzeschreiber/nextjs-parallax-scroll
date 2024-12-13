"use client"
import React, { useEffect, useRef } from 'react'
import { useLenis } from 'lenis/react'

function ParallaxImage({ src, alt = "image of product" }: { src: string, alt: string }) {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const imageRef = useRef<HTMLImageElement>(null); // parallax image
    const bounds = useRef<{ top: number; bottom: number } | null>(null); // image, relative to the viewport 
    const currentTranslateY = useRef<number | null>(0); // current vertical translation of the image
    const targetTranslateY = useRef<number>(0); // desired value transition
    const refId = useRef<number | null>(null); // rafId stores the id of the framer

    useEffect(() => {
        const updateBounds = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                bounds.current = {
                    top: rect.top + window.scrollY,
                    bottom: rect.bottom + window.scrollY,
                }
            }
        }

        updateBounds();
        window.addEventListener("resize", updateBounds);

        const animate = () => {
            if (imageRef.current && currentTranslateY.current !== null) {
                currentTranslateY.current = lerp(
                    currentTranslateY.current,
                    targetTranslateY.current,
                    0.1
                );
            }

            if (currentTranslateY.current !== null && Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01) {
                if (imageRef.current) {
                    imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
                }
            }

            refId.current = requestAnimationFrame(animate);
        }

        animate(); // Start animation loop

        return () => {
            window.removeEventListener("resize", updateBounds);
            if (refId.current) {
                cancelAnimationFrame(refId.current);
            }
        }
    }, []);

    useLenis(({ scroll }) => {
        if (!bounds.current) return;
        const relativeScroll = scroll - bounds.current.top; // Corrected typo from "relaitveSCroll"
        targetTranslateY.current = relativeScroll;
    })

    return (
        <img
            ref={imageRef}
            src={src}
            alt={alt}
            style={{
                willChange: "transform",
                transform: "translateY(0) scale(1.25)",
            }} />
    )
}

export default ParallaxImage
