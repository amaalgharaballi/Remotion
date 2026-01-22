import { Composition } from 'remotion';
import { HobiInstagramAd } from './HobiInstagramAd';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="HobiInstagramAd"
        component={HobiInstagramAd}
        durationInFrames={360} // 12 seconds at 30fps
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
