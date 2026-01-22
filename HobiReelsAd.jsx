import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence, spring, useVideoConfig, Easing } from 'remotion';

export const HobiReelsAd = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Exact Hobi brand colors from screenshots
  const colors = {
    primaryOrange: '#F36A21',
    darkOrange: '#D94A2A',
    lightPeach: '#FFF6EF',
    cardPink: '#FFE6D6',
    primaryText: '#2B2B2B',
    mutedText: '#8A8A8A',
    greenAccent: '#4CAF50',
  };

  // Scene durations at 30fps - FAST PACED for Reels
  const INTRO_DURATION = 45;        // 1.5s - Logo reveal
  const PHONE_1_DURATION = 75;      // 2.5s - Browse hobbies
  const PHONE_2_DURATION = 75;      // 2.5s - Services showcase
  const PHONE_3_DURATION = 75;      // 2.5s - Credits/features
  const CTA_DURATION = 105;         // 3.5s - Call to action
  const OUTRO_DURATION = 75;        // 2.5s - Final logo

  return (
    <AbsoluteFill style={{ backgroundColor: colors.lightPeach }}>
      
      {/* Intro: Logo Reveal */}
      <Sequence from={0} durationInFrames={INTRO_DURATION}>
        <IntroScene frame={frame} colors={colors} fps={fps} />
      </Sequence>

      {/* Scene 1: Browse Hobbies Phone */}
      <Sequence from={INTRO_DURATION} durationInFrames={PHONE_1_DURATION}>
        <BrowseScene frame={frame - INTRO_DURATION} colors={colors} fps={fps} />
      </Sequence>

      {/* Scene 2: Services Phone */}
      <Sequence from={INTRO_DURATION + PHONE_1_DURATION} durationInFrames={PHONE_2_DURATION}>
        <ServicesScene frame={frame - INTRO_DURATION - PHONE_1_DURATION} colors={colors} fps={fps} />
      </Sequence>

      {/* Scene 3: Features Phone */}
      <Sequence from={INTRO_DURATION + PHONE_1_DURATION + PHONE_2_DURATION} durationInFrames={PHONE_3_DURATION}>
        <FeaturesScene frame={frame - INTRO_DURATION - PHONE_1_DURATION - PHONE_2_DURATION} colors={colors} fps={fps} />
      </Sequence>

      {/* Scene 4: CTA */}
      <Sequence from={INTRO_DURATION + PHONE_1_DURATION + PHONE_2_DURATION + PHONE_3_DURATION} durationInFrames={CTA_DURATION}>
        <CTAScene frame={frame - INTRO_DURATION - PHONE_1_DURATION - PHONE_2_DURATION - PHONE_3_DURATION} colors={colors} fps={fps} />
      </Sequence>

      {/* Outro: Logo */}
      <Sequence from={INTRO_DURATION + PHONE_1_DURATION + PHONE_2_DURATION + PHONE_3_DURATION + CTA_DURATION} durationInFrames={OUTRO_DURATION}>
        <OutroScene frame={frame - INTRO_DURATION - PHONE_1_DURATION - PHONE_2_DURATION - PHONE_3_DURATION - CTA_DURATION} colors={colors} fps={fps} />
      </Sequence>

    </AbsoluteFill>
  );
};

// Intro Scene - Animated Logo Reveal
const IntroScene = ({ frame, colors, fps }) => {
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 200,
      mass: 0.5,
    },
  });

  const scale = interpolate(progress, [0, 1], [0.5, 1]);
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  
  // Rotating circles animation
  const rotation = interpolate(frame, [0, 45], [0, 360]);

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(135deg, ${colors.primaryOrange} 0%, ${colors.darkOrange} 100%)`,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Animated background circles */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}>
        <AnimatedCircle size={400} top="10%" left="70%" rotation={rotation} opacity={0.1} />
        <AnimatedCircle size={600} top="60%" left="20%" rotation={-rotation} opacity={0.15} />
      </div>

      {/* Logo */}
      <div style={{
        transform: `scale(${scale})`,
        opacity,
        textAlign: 'center',
      }}>
        <HobiLogo size={180} color="white" />
        <div style={{
          marginTop: 30,
          fontSize: 32,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          color: 'white',
          opacity: 0.9,
        }}>
          Your hobby marketplace
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Browse Scene - Phone showing browse interface
const BrowseScene = ({ frame, colors, fps }) => {
  const phoneProgress = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const phoneY = interpolate(phoneProgress, [0, 1], [100, 0]);
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  const categories = [
    { icon: '🎬', name: 'Film', delay: 15 },
    { icon: '📷', name: 'Digital Cameras', delay: 25 },
    { icon: '🖨️', name: '3D Printing', delay: 35 },
    { icon: '✍️', name: 'Trading Cards', delay: 45 },
  ];

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      padding: 60,
    }}>
      {/* Text above phone */}
      <div style={{
        position: 'absolute',
        top: 150,
        left: 0,
        right: 0,
        textAlign: 'center',
        opacity,
      }}>
        <h2 style={{
          fontSize: 64,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          color: colors.primaryOrange,
          margin: 0,
          marginBottom: 10,
        }}>
          Explore Hobbies
        </h2>
        <p style={{
          fontSize: 28,
          fontFamily: 'Poppins, sans-serif',
          color: colors.primaryText,
          margin: 0,
        }}>
          in Kuwait
        </p>
      </div>

      {/* Phone mockup */}
      <div style={{
        transform: `translateY(${phoneY}px)`,
        opacity,
      }}>
        <PhoneMockup colors={colors}>
          <div style={{ padding: 40 }}>
            <HobiLogo size={80} color={colors.primaryOrange} />
            <OrangeStripe style={{ marginTop: 20, marginBottom: 40 }} colors={colors} />
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 15,
            }}>
              {categories.map((cat, idx) => (
                <CategoryCard
                  key={idx}
                  icon={cat.icon}
                  name={cat.name}
                  frame={frame}
                  delay={cat.delay}
                  colors={colors}
                  fps={fps}
                />
              ))}
            </div>
          </div>
        </PhoneMockup>
      </div>
    </AbsoluteFill>
  );
};

// Services Scene
const ServicesScene = ({ frame, colors, fps }) => {
  const phoneProgress = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const scale = interpolate(phoneProgress, [0, 1], [0.9, 1]);
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Text */}
      <div style={{
        position: 'absolute',
        top: 150,
        left: 0,
        right: 0,
        textAlign: 'center',
        opacity,
      }}>
        <h2 style={{
          fontSize: 64,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          color: colors.primaryOrange,
          margin: 0,
        }}>
          Find Services
        </h2>
      </div>

      {/* Service Card */}
      <div style={{
        transform: `scale(${scale})`,
        opacity,
      }}>
        <ServiceCard colors={colors} frame={frame} fps={fps} />
      </div>
    </AbsoluteFill>
  );
};

// Features Scene
const FeaturesScene = ({ frame, colors, fps }) => {
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  const features = [
    { icon: '🛒', title: 'Buy & Sell', delay: 10 },
    { icon: '💳', title: 'Credits System', delay: 20 },
    { icon: '✨', title: 'Suggest Hobbies', delay: 30 },
  ];

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      padding: 80,
    }}>
      <div style={{
        textAlign: 'center',
        opacity,
      }}>
        <h2 style={{
          fontSize: 64,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          color: colors.primaryText,
          marginBottom: 80,
        }}>
          Everything You Need
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 50,
        }}>
          {features.map((feature, idx) => (
            <FeatureItem
              key={idx}
              icon={feature.icon}
              title={feature.title}
              frame={frame}
              delay={feature.delay}
              colors={colors}
              fps={fps}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// CTA Scene
const CTAScene = ({ frame, colors, fps }) => {
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const scale = interpolate(progress, [0, 1], [0.9, 1]);
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

  // Pulsing animation for CTA button
  const pulse = interpolate(
    frame,
    [40, 70, 100],
    [1, 1.05, 1],
    {
      extrapolateRight: 'wrap',
    }
  );

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      background: `linear-gradient(135deg, ${colors.primaryOrange} 0%, ${colors.darkOrange} 100%)`,
    }}>
      <div style={{
        transform: `scale(${scale})`,
        opacity,
        textAlign: 'center',
        padding: 60,
      }}>
        <h1 style={{
          fontSize: 72,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          color: 'white',
          marginBottom: 40,
          lineHeight: 1.2,
        }}>
          Start Your<br/>Hobby Journey
        </h1>

        <p style={{
          fontSize: 32,
          fontFamily: 'Poppins, sans-serif',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: 60,
        }}>
          Join Kuwait's hobby community
        </p>

        {/* CTA Button */}
        <div style={{
          transform: `scale(${pulse})`,
          display: 'inline-block',
        }}>
          <div style={{
            backgroundColor: 'white',
            color: colors.primaryOrange,
            padding: '30px 80px',
            borderRadius: 50,
            fontSize: 42,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}>
            tryhobi.com
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Outro Scene
const OutroScene = ({ frame, colors, fps }) => {
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const scale = interpolate(progress, [0, 1], [0.8, 1]);
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.lightPeach,
    }}>
      <div style={{
        transform: `scale(${scale})`,
        opacity,
        textAlign: 'center',
      }}>
        <HobiLogoWithCircle size={280} colors={colors} />
        <div style={{
          marginTop: 40,
          fontSize: 36,
          fontFamily: 'Poppins, sans-serif',
          color: colors.primaryText,
        }}>
          🇰🇼 Kuwait
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ COMPONENTS ============

// Hobi Logo Text
const HobiLogo = ({ size, color }) => (
  <div style={{
    fontSize: size,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color,
    letterSpacing: '-2px',
  }}>
    Hobi
  </div>
);

// Hobi Logo with Circles (from screenshots)
const HobiLogoWithCircle = ({ size, colors }) => (
  <div style={{
    position: 'relative',
    width: size,
    height: size,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    {/* Outer circle */}
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: `${size * 0.08}px solid ${colors.darkOrange}`,
    }} />
    {/* Inner circle */}
    <div style={{
      position: 'absolute',
      width: '90%',
      height: '90%',
      borderRadius: '50%',
      border: `${size * 0.08}px solid ${colors.primaryOrange}`,
    }} />
    {/* Logo text */}
    <HobiLogo size={size * 0.35} color={colors.primaryOrange} />
  </div>
);

// Orange stripe (from screenshots)
const OrangeStripe = ({ style, colors }) => (
  <div style={{
    width: '100%',
    height: 8,
    background: `linear-gradient(90deg, ${colors.darkOrange} 0%, ${colors.primaryOrange} 50%, #FFA366 100%)`,
    borderRadius: 4,
    ...style,
  }} />
);

// Phone Mockup
const PhoneMockup = ({ children, colors }) => (
  <div style={{
    width: 400,
    height: 800,
    backgroundColor: colors.lightPeach,
    borderRadius: 40,
    border: `8px solid ${colors.primaryText}`,
    boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    position: 'relative',
  }}>
    {/* Notch */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 150,
      height: 30,
      backgroundColor: colors.primaryText,
      borderRadius: '0 0 20px 20px',
    }} />
    
    {/* Content */}
    <div style={{
      marginTop: 30,
      height: 'calc(100% - 30px)',
      overflow: 'hidden',
    }}>
      {children}
    </div>
  </div>
);

// Category Card
const CategoryCard = ({ icon, name, frame, delay, colors, fps }) => {
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
      backgroundColor: colors.cardPink,
      padding: '15px 20px',
      borderRadius: 16,
      transform: `translateX(${translateX}px)`,
      opacity,
    }}>
      <span style={{ fontSize: 32, marginRight: 15 }}>{icon}</span>
      <span style={{
        fontSize: 20,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        color: colors.primaryText,
      }}>
        {name}
      </span>
    </div>
  );
};

// Service Card (inspired by screenshots)
const ServiceCard = ({ colors, frame, fps }) => {
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const scale = interpolate(progress, [0, 1], [0.9, 1]);

  return (
    <div style={{
      width: 500,
      backgroundColor: 'white',
      borderRadius: 30,
      border: `3px solid ${colors.greenAccent}`,
      padding: 40,
      transform: `scale(${scale})`,
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
    }}>
      {/* Service badge */}
      <div style={{
        display: 'inline-block',
        backgroundColor: colors.greenAccent,
        color: 'white',
        padding: '10px 25px',
        borderRadius: 25,
        fontSize: 20,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        marginBottom: 30,
      }}>
        🔧 Service
      </div>

      <HobiLogo size={80} color={colors.primaryOrange} />
      <OrangeStripe style={{ marginTop: 20, marginBottom: 30 }} colors={colors} />

      <h3 style={{
        fontSize: 32,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        color: colors.primaryText,
        marginBottom: 15,
      }}>
        Hobi 3D Printing<br/>Services
      </h3>

      <div style={{
        fontSize: 20,
        fontFamily: 'Poppins, sans-serif',
        color: colors.mutedText,
        marginBottom: 20,
      }}>
        📍 Kuwait City
      </div>

      <div style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
      }}>
        <Tag text="Custom Prints" colors={colors} />
        <Tag text="3D Modeling" colors={colors} />
        <Tag text="+3" colors={colors} />
      </div>
    </div>
  );
};

// Tag component
const Tag = ({ text, colors }) => (
  <div style={{
    backgroundColor: colors.cardPink,
    color: colors.greenAccent,
    padding: '8px 18px',
    borderRadius: 20,
    fontSize: 16,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
  }}>
    {text}
  </div>
);

// Feature Item
const FeatureItem = ({ icon, title, frame, delay, colors, fps }) => {
  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {
      damping: 100,
    },
  });

  const translateY = interpolate(progress, [0, 1], [50, 0]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 30,
      transform: `translateY(${translateY}px)`,
      opacity,
    }}>
      <div style={{
        fontSize: 64,
        backgroundColor: colors.cardPink,
        width: 100,
        height: 100,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {icon}
      </div>
      <div style={{
        fontSize: 42,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        color: colors.primaryText,
      }}>
        {title}
      </div>
    </div>
  );
};

// Animated Circle (background decoration)
const AnimatedCircle = ({ size, top, left, rotation, opacity }) => (
  <div style={{
    position: 'absolute',
    top,
    left,
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: 'white',
    opacity,
    transform: `rotate(${rotation}deg)`,
  }} />
);
