import { useReveal } from '../hooks/useReveal';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const label = useReveal<HTMLSpanElement>(0);
  const title = useReveal<HTMLHeadingElement>(0);

  return (
    <section id="features" className="section section--features">
      <div className="container">
        <header className="section-head">
          <span
            ref={label.ref}
            className={`section-label reveal${label.visible ? ' visible' : ''}`}
          >
            features
          </span>
          <h2
            ref={title.ref}
            className={`section-title reveal${title.visible ? ' visible' : ''}`}
          >
            What&apos;s in the app
          </h2>
        </header>

        <div className="features-grid">
          <FeatureCard
            tag="ui"
            name="Masonry grid layout"
            desc="Home feed, search, liked pins, and collections all rendered in a multi-column grid sized for a desktop monitor."
          />
          <FeatureCard
            tag="files"
            name="Board & pin downloads"
            desc="Download whole boards or individual images straight into a folder of your choice. Bulk or one at a time."
          />
          <FeatureCard
            tag="auth"
            name="Cookie-based login"
            desc="Reads session cookies from Chrome, Firefox, Brave, Zen, etc. You log in through your normal browser — the app picks it up from there."
          />
          <FeatureCard
            tag="filter"
            name="Resolution filter"
            desc="Set a minimum resolution so you only save images worth keeping. Handy for wallpapers."
          />
          <FeatureCard
            tag="local"
            name="Offline collections"
            desc="Build collections that live entirely on your machine. They're folders nothing is uploaded anywhere."
          />
          <FeatureCard
            tag="clean"
            name="Blocks promoted pins"
            desc="Filters out sponsored content and most ad-type pins so your feed is actually usable."
          />
          <FeatureCard
            tag="stack"
            name="Single executable"
            desc="Built with Playwright, Flask, and pywebview. Packaged into one .exe through PyInstaller — download it and run it."
            wide
          />
        </div>
      </div>
    </section>
  );
}
