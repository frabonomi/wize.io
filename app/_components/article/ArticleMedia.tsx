import Image, { type ImageProps } from 'next/image';

import styles from './ArticleMedia.module.css';

type ArticleImageProps = {
  src: ImageProps['src'];
  alt: string;
  caption?: string;
  cropped?: boolean;
};

export function ArticleImage({
  src,
  alt,
  caption,
  cropped = false,
}: ArticleImageProps) {
  return (
    <figure className={styles.figure}>
      <div className={cropped ? styles.croppedFrame : styles.naturalFrame}>
        <Image
          alt={alt}
          className={styles.image}
          placeholder={typeof src === 'string' ? undefined : 'blur'}
          sizes="(max-width: 48rem) 100vw, 42rem"
          src={src}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

type ArticleVideoProps = {
  src: string;
  width: number;
  height: number;
  caption?: string;
};

export function ArticleVideo({
  src,
  width,
  height,
  caption,
}: ArticleVideoProps) {
  return (
    <figure className={styles.figure}>
      <video
        className={styles.video}
        controls
        height={height}
        playsInline
        preload="none"
        width={width}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support video playback.
      </video>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

type VideoEmbedProps = {
  provider: 'youtube' | 'vimeo';
  videoId: string;
  title: string;
  caption?: string;
};

export function VideoEmbed({
  provider,
  videoId,
  title,
  caption,
}: VideoEmbedProps) {
  const baseUrl =
    provider === 'youtube'
      ? 'https://www.youtube-nocookie.com/embed/'
      : 'https://player.vimeo.com/video/';

  return (
    <figure className={styles.figure}>
      <div className={styles.videoFrame}>
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={`${baseUrl}${encodeURIComponent(videoId)}`}
          title={title}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
