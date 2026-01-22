import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence, Easing } from 'remotion';

export const HobiReelsAd = () => {
  const frame = useCurrentFrame();

  // Premium brand colors - exact spec
  const colors = {
    primaryOrange: '#F36A21',
    accentOrange: '#E9540D',
    softHighlight: '#FFE6D6',
    background: '#FFF6EF',
    primaryText: '#2B2B2B',
    mutedText: '#8A8A8A',
  };

  // Scene durations at 30fps - fast, intentional pacing
  const SCENE_1 = 45;   // 1.5s - Value prop
  const SCENE_2 = 75;   // 2.5s - Categories
  const SCENE_3 = 75;   // 2.5s - Actions
  const SCENE_4 = 60;   // 2s   - CTA

  return (
    <AbsoluteFill style={{ backgroundColor: colors.background }}>
      
      {/* Scene 1: Value Proposition */}
      <Sequence from={0} durationInFrames={SCENE_1}>
        <Scene1 frame={frame} colors={colors} />
      </Sequence>

      {/* Scene 2: Categories */}
      <Sequence from={SCENE_1} durationInFrames={SCENE_2}>
        <Scene2 frame={frame - SCENE_1} colors={colors} />
      </Sequence>

      {/* Scene 3: Core Actions */}
      <Sequence from={SCENE_1 + SCENE_2} durationInFrames={SCENE_3}>
        <Scene3 frame={frame - SCENE_1 - SCENE_2} colors={colors} />
      </Sequence>

      {/* Scene 4: CTA */}
      <Sequence from={SCENE_1 + SCENE_2 + SCENE_3} durationInFrames={SCENE_4}>
        <Scene4 frame={frame - SCENE_1 - SCENE_2 - SCENE_3} colors={colors} />
      </Sequence>

    </AbsoluteFill>
  );
};

// Scene 1: Value Proposition - Hard, Fast, Clear
const Scene1 = ({ frame, colors }) => {
  // Sharp opacity in - no easing, pure linear
  const opacity = interpolate(
    frame,
    [0, 8],
    [0, 1],
    {
      extrapolateRight: 'clamp',
      easing: Easing.linear,
    }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <h1
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 68,
          fontWeight: 600,
          color: colors.primaryText,
          lineHeight: 1.1,
          textAlign: 'center',
          margin: 0,
          opacity,
          letterSpacing: '-0.02em',
        }}
      >
        A marketplace for<br />serious hobbies
      </h1>
    </AbsoluteFill>
  );
};

// Scene 2: Categories - Precision UI
const Scene2 = ({ frame, colors }) => {
  const categories = [
    { name: 'Film', delay: 0 },
    { name: 'Digital Cameras', delay: 8 },
    { name: '3D Printing', delay: 16 },
    { name: 'Autographed Collectables & Trading Cards', delay: 24 },
  ];

  // Title opacity
  const titleOpacity = interpolate(
    frame,
    [0, 8],
    [0, 1],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div style={{ width: '100%', maxWidth: 800 }}>
        
        {/* Section Title */}
        <div
          style={{
            fontSize: 24,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            color: colors.primaryOrange,
            marginBottom: 50,
            opacity: titleOpacity,
            letterSpacing: '-0.01em',
          }}
        >
          CATEGORIES
        </div>

        {/* Category Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {categories.map((cat, idx) => (
            <CategoryRow
              key={idx}
              name={cat.name}
              frame={frame}
              delay={cat.delay}
              colors={colors}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: Core Actions
const Scene3 = ({ frame, colors }) => {
  const titleOpacity = interpolate(
    frame,
    [0, 10],
    [0, 1],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  const cards = [
    { type: 'Listing', delay: 15 },
    { type: 'Service', delay: 22 },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div style={{ textAlign: 'center', width: '100%' }}>
        
        {/* Headline */}
        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 64,
            fontWeight: 600,
            color: colors.primaryText,
            lineHeight: 1.2,
            margin: 0,
            marginBottom: 60,
            opacity: titleOpacity,
            letterSpacing: '-0.02em',
          }}
        >
          Buy. Sell. Offer services.
        </h2>

        {/* UI Cards */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 30,
            marginTop: 40,
          }}
        >
          {cards.map((card, idx) => (
            <UICard
              key={idx}
              type={card.type}
              frame={frame}
              delay={card.delay}
              colors={colors}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: CTA - Sharp, Confident
const Scene4 = ({ frame, colors }) => {
  const messageOpacity = interpolate(
    frame,
    [0, 10],
    [0, 1],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  const urlOpacity = interpolate(
    frame,
    [12, 22],
    [0, 1],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  // Underline animation - precise, engineered
  const underlineWidth = interpolate(
    frame,
    [25, 40],
    [0, 100],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        
        {/* Message */}
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 36,
            fontWeight: 400,
            color: colors.primaryText,
            lineHeight: 1.4,
            margin: 0,
            marginBottom: 50,
            opacity: messageOpacity,
          }}
        >
          Built for hobbyists in Kuwait.
        </p>

        {/* URL */}
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            opacity: urlOpacity,
          }}
        >
          <div
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 52,
              fontWeight: 600,
              color: colors.accentOrange,
              letterSpacing: '-0.01em',
            }}
          >
            tryhobi.com
          </div>
          
          {/* Precise underline */}
          <div
            style={{
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: `${underlineWidth}%`,
              height: 3,
              backgroundColor: colors.accentOrange,
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ COMPONENTS ============

// Category Row - Clean, Precise UI
const CategoryRow = ({ name, frame, delay, colors }) => {
  // Content slides in from left - fast, linear
  const translateX = interpolate(
    frame,
    [delay, delay + 12],
    [-60, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  const opacity = interpolate(
    frame,
    [delay, delay + 12],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  // Accent bar animation - precise timing
  const barWidth = interpolate(
    frame,
    [delay, delay + 15],
    [0, 100],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  return (
    <div
      style={{
        position: 'relative',
        paddingLeft: 30,
      }}
    >
      {/* Accent Bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: `${barWidth}%`,
          maxWidth: 4,
          height: '70%',
          backgroundColor: colors.primaryOrange,
        }}
      />

      {/* Category Name */}
      <div
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 32,
          fontWeight: 400,
          color: colors.primaryText,
          letterSpacing: '-0.01em',
          transform: `translateX(${translateX}px)`,
          opacity,
        }}
      >
        {name}
      </div>
    </div>
  );
};

// UI Card - Abstract Product Interface
const UICard = ({ type, frame, delay, colors }) => {
  const scale = interpolate(
    frame,
    [delay, delay + 12],
    [0.92, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  const opacity = interpolate(
    frame,
    [delay, delay + 12],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  // Accent color based on type
  const accentColor = type === 'Service' ? '#4CAF50' : colors.primaryOrange;

  return (
    <div
      style={{
        width: 320,
        height: 420,
        backgroundColor: 'white',
        borderRadius: 12,
        border: `2px solid ${colors.softHighlight}`,
        padding: 30,
        transform: `scale(${scale})`,
        opacity,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      {/* Type Badge */}
      <div
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          backgroundColor: accentColor,
          color: 'white',
          padding: '6px 16px',
          borderRadius: 6,
          fontSize: 14,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.02em',
        }}
      >
        {type.toUpperCase()}
      </div>

      {/* Abstract Content Blocks */}
      <div
        style={{
          width: '100%',
          height: 160,
          backgroundColor: colors.softHighlight,
          borderRadius: 8,
        }}
      />

      {/* Text Lines */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div
          style={{
            width: '85%',
            height: 14,
            backgroundColor: colors.softHighlight,
            borderRadius: 4,
          }}
        />
        <div
          style={{
            width: '65%',
            height: 14,
            backgroundColor: colors.softHighlight,
            borderRadius: 4,
          }}
        />
        <div
          style={{
            width: '75%',
            height: 14,
            backgroundColor: colors.softHighlight,
            borderRadius: 4,
          }}
        />
      </div>

      {/* Bottom Info */}
      <div
        style={{
          marginTop: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 80,
            height: 12,
            backgroundColor: colors.softHighlight,
            borderRadius: 4,
          }}
        />
        <div
          style={{
            width: 40,
            height: 12,
            backgroundColor: colors.softHighlight,
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
};
