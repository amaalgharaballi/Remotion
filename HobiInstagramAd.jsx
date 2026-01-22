import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence, spring, useVideoConfig } from 'remotion';

export const HobiInstagramAd = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Exact brand colors - DO NOT MODIFY
  const colors = {
    primaryOrange: '#F36A21',
    darkOrange: '#E9540D',
    lightOrangeTint: '#FFE6D6',
    background: '#FFF6EF',
    primaryText: '#2B2B2B',
    mutedText: '#8A8A8A',
  };

  // Scene durations (at 30fps)
  const SCENE_1_DURATION = 60;  // 2s
  const SCENE_2_DURATION = 120; // 4s
  const SCENE_3_DURATION = 90;  // 3s
  const SCENE_4_DURATION = 90;  // 3s

  return (
    <AbsoluteFill style={{ backgroundColor: colors.background }}>
      
      {/* Scene 1: Brand Intro (0-2s) */}
      <Sequence from={0} durationInFrames={SCENE_1_DURATION}>
        <Scene1 frame={frame} colors={colors} fps={fps} />
      </Sequence>

      {/* Scene 2: Explore Hobbies (2-6s) */}
      <Sequence from={SCENE_1_DURATION} durationInFrames={SCENE_2_DURATION}>
        <Scene2 frame={frame - SCENE_1_DURATION} colors={colors} fps={fps} />
      </Sequence>

      {/* Scene 3: Buy • Sell • Showcase (6-9s) */}
      <Sequence from={SCENE_1_DURATION + SCENE_2_DURATION} durationInFrames={SCENE_3_DURATION}>
        <Scene3 frame={frame - SCENE_1_DURATION - SCENE_2_DURATION} colors={colors} fps={fps} />
      </Sequence>

      {/* Scene 4: CTA (9-12s) */}
      <Sequence from={SCENE_1_DURATION + SCENE_2_DURATION + SCENE_3_DURATION} durationInFrames={SCENE_4_DURATION}>
        <Scene4 frame={frame - SCENE_1_DURATION - SCENE_2_DURATION - SCENE_3_DURATION} colors={colors} fps={fps} />
      </Sequence>

    </AbsoluteFill>
  );
};

// Scene 1: Brand Intro
const Scene1 = ({ frame, colors, fps }) => {
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 100,
      stiffness: 200,
    },
  });

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(progress, [0, 1], [0.9, 1]);

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{
        transform: `scale(${scale})`,
        opacity,
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: 96,
          fontWeight: 600,
          color: colors.primaryOrange,
          marginBottom: 20,
          letterSpacing: '-1px',
        }}>
          Hobi
        </h1>
        <p style={{
          fontSize: 28,
          fontWeight: 400,
          color: colors.primaryText,
          margin: 0,
        }}>
          The hobby marketplace in Kuwait
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: Explore Hobbies
const Scene2 = ({ frame, colors, fps }) => {
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const titleY = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const titleTranslate = interpolate(titleY, [0, 1], [20, 0]);

  const categories = [
    { icon: '🎬', name: 'Film', delay: 20 },
    { icon: '📷', name: 'Digital Cameras', delay: 35 },
    { icon: '🖨️', name: '3D Printing', delay: 50 },
    { icon: '✍️', name: 'Autographed Collectables & Trading Cards', delay: 65 },
  ];

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Poppins, sans-serif',
      padding: 80,
    }}>
      <div style={{ width: '100%', maxWidth: 900 }}>
        {/* Title */}
        <h2 style={{
          fontSize: 52,
          fontWeight: 600,
          color: colors.primaryText,
          marginBottom: 60,
          textAlign: 'center',
          opacity: titleOpacity,
          transform: `translateY(${titleTranslate}px)`,
        }}>
          Explore hobbies
        </h2>

        {/* Categories */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          {categories.map((category, index) => (
            <CategoryPill
              key={index}
              icon={category.icon}
              name={category.name}
              frame={frame}
              delay={category.delay}
              colors={colors}
              fps={fps}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: Buy • Sell • Showcase
const Scene3 = ({ frame, colors, fps }) => {
  const titleProgress = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const titleScale = interpolate(titleProgress, [0, 1], [0.95, 1]);

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{
        textAlign: 'center',
        transform: `scale(${titleScale})`,
        opacity: titleOpacity,
      }}>
        {/* Main Text */}
        <h2 style={{
          fontSize: 56,
          fontWeight: 600,
          color: colors.primaryText,
          marginBottom: 60,
          letterSpacing: '2px',
        }}>
          Buy • Sell • Showcase
        </h2>

        {/* Floating Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 30,
          marginTop: 40,
        }}>
          <ListingCard frame={frame} delay={20} colors={colors} fps={fps} />
          <ListingCard frame={frame} delay={35} colors={colors} fps={fps} />
          <ListingCard frame={frame} delay={50} colors={colors} fps={fps} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: CTA
const Scene4 = ({ frame, colors, fps }) => {
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(progress, [0, 1], [0.95, 1]);

  // Subtle bounce for URL
  const urlBounce = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: {
      damping: 200,
      mass: 0.5,
    },
  });

  const urlScale = interpolate(urlBounce, [0, 1], [0.98, 1]);

  // Underline animation
  const underlineWidth = interpolate(frame, [30, 50], [0, 100], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{
        transform: `scale(${scale})`,
        opacity,
        textAlign: 'center',
      }}>
        {/* Main Message */}
        <p style={{
          fontSize: 40,
          fontWeight: 600,
          color: colors.primaryText,
          marginBottom: 40,
          lineHeight: 1.4,
        }}>
          Built for hobbyists<br />in Kuwait
        </p>

        {/* URL */}
        <div style={{
          transform: `scale(${urlScale})`,
          display: 'inline-block',
          position: 'relative',
        }}>
          <p style={{
            fontSize: 48,
            fontWeight: 600,
            color: colors.darkOrange,
            margin: 0,
          }}>
            tryhobi.com
          </p>
          
          {/* Animated Underline */}
          <div style={{
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: `${underlineWidth}%`,
            height: 4,
            backgroundColor: colors.darkOrange,
            borderRadius: 2,
          }} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Helper Components
const CategoryPill = ({ icon, name, frame, delay, colors, fps }) => {
  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {
      damping: 100,
    },
  });

  const translateX = interpolate(progress, [0, 1], [-50, 0]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: colors.lightOrangeTint,
      padding: '20px 30px',
      borderRadius: 16,
      transform: `translateX(${translateX}px)`,
      opacity,
      transition: 'all 0.3s ease',
    }}>
      <span style={{
        fontSize: 36,
        marginRight: 20,
      }}>
        {icon}
      </span>
      <span style={{
        fontSize: 24,
        fontWeight: 400,
        color: colors.primaryText,
      }}>
        {name}
      </span>
    </div>
  );
};

const ListingCard = ({ frame, delay, colors, fps }) => {
  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {
      damping: 100,
    },
  });

  const translateY = interpolate(progress, [0, 1], [30, 0]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div style={{
      width: 200,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 20,
      border: `2px solid ${colors.lightOrangeTint}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transform: `translateY(${translateY}px)`,
      opacity,
    }}>
      {/* Placeholder Icon */}
      <div style={{
        width: 80,
        height: 80,
        backgroundColor: colors.lightOrangeTint,
        borderRadius: 12,
        marginBottom: 15,
      }} />
      
      {/* Placeholder Text Lines */}
      <div style={{
        width: '70%',
        height: 12,
        backgroundColor: colors.lightOrangeTint,
        borderRadius: 6,
        marginBottom: 8,
      }} />
      <div style={{
        width: '50%',
        height: 12,
        backgroundColor: colors.lightOrangeTint,
        borderRadius: 6,
      }} />
    </div>
  );
};
