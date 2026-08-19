"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, registerGsap } from "@/lib/gsap";
import { images, videoSources } from "@/data/images";

function forcePlay(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  return video.play();
}

/** Background-only video — autoplay on load, subtle Ken Burns via GSAP */
export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  const currentSrc = videoSources[sourceIndex] ?? videoSources[0];

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    forcePlay(video)?.catch(() => {});
  }, []);

  const tryNextSource = useCallback(() => {
    setSourceIndex((i) => {
      const next = i + 1;
      if (next < videoSources.length) return next;
      setVideoFailed(true);
      return i;
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed) return;

    tryPlay();

    const events = ["loadeddata", "canplay", "canplaythrough"] as const;
    events.forEach((e) => video.addEventListener(e, tryPlay));

    const retry = window.setInterval(() => {
      if (video.paused && !videoFailed) tryPlay();
    }, 800);

    const stopRetry = window.setTimeout(() => clearInterval(retry), 12000);

    return () => {
      events.forEach((e) => video.removeEventListener(e, tryPlay));
      clearInterval(retry);
      clearTimeout(stopRetry);
    };
  }, [currentSrc, tryPlay, videoFailed]);

  useEffect(() => {
    registerGsap();
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || videoFailed) return;

    const target = video ?? container.querySelector("img");
    if (!target) return;

    const tween = gsap.fromTo(
      target,
      { scale: 1.08 },
      {
        scale: 1,
        duration: 18,
        ease: "none",
        repeat: -1,
        yoyo: true,
      },
    );

    return () => {
      tween.kill();
    };
  }, [videoFailed, currentSrc]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0" aria-hidden>
      {/* Mobile — static image */}
      <Image
        src={images.heroMobile}
        alt=""
        fill
        priority
        className="object-cover lg:hidden"
        sizes="100vw"
      />

      {/* Desktop fallback if all video sources fail */}
      {videoFailed && (
        <Image
          src={images.billingDashboard}
          alt=""
          fill
          priority
          className="hidden object-cover lg:block"
          sizes="100vw"
        />
      )}

      {/* Desktop — autoplay background video */}
      {!videoFailed && (
        <video
          ref={videoRef}
          key={currentSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={images.billingDashboard}
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
          src={currentSrc}
          onLoadedData={tryPlay}
          onCanPlay={tryPlay}
          onError={tryNextSource}
        />
      )}

      {/* Professional overlay — video visible but text readable */}
      <div className="absolute inset-0 bg-brand-950/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-brand-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(16,185,129,0.14),transparent_55%)]" />
      <div className="hero-grid absolute inset-0 opacity-[0.35]" />
    </div>
  );
}
