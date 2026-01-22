import { Composition } from 'remotion';
import { HobiReelsAd } from './HobiReelsAd';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="HobiReelsAd"
        component={HobiReelsAd}
        durationInFrames={255} // 8.5 seconds at 30fps
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
