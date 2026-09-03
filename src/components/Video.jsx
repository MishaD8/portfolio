import { site } from "../data/site";

export default function Video() {
  if (!site.youtube || !site.youtube.videoId) return null;

  return (
    <section id="video" className="mx-auto max-w-4xl border-t border-line px-6 py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
        Video
      </h2>
      <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-line bg-surface">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={"https://www.youtube-nocookie.com/embed/" + site.youtube.videoId}
            title="YouTube video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      {site.youtube.channelUrl ? (
        <p className="mt-4 text-sm">
          <a
            href={site.youtube.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            More on YouTube
          </a>
        </p>
      ) : null}
    </section>
  );
}
