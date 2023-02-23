export type VideoInfo = {
  name: string;
  type: string;
  duration: number;
  height: number;
  width: number;
  size: number;
};

export function getVideoInfos(file: File) {
  return new Promise<VideoInfo>((resolve, reject) => {
    const videoTag = document.createElement('video');
    videoTag.preload = 'metadata';

    videoTag.onloadedmetadata = () => {
      window.URL.revokeObjectURL(videoTag.src);

      resolve({
        name: file.name,
        type: file.type,
        duration: videoTag.duration,
        height: videoTag.videoHeight,
        width: videoTag.videoWidth,
        size: file.size,
      });
    };

    videoTag.onerror = reject;

    videoTag.src = URL.createObjectURL(file);
  });
}
