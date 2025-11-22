// ExternalPage.jsx
export function ExternalPage({ title, subtitle, url, source }) {
  const handleOpenInBrowser = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="external-page">
      <div className="external-page-header">
        <div className="external-page-title">{title}</div>
        <div className="external-page-subtitle">{subtitle}</div>
        <div className="external-page-source">
          Data & charts provided by <strong>{source}</strong>.
        </div>
        <button
          type="button"
          className="open-browser-btn"
          onClick={handleOpenInBrowser}
        >
          Open in Browser
        </button>
        <p className="external-page-note">
          If the embedded view looks blank or blocked, tap{" "}
          <strong>Open in Browser</strong> to view it directly on {source}.
        </p>
      </div>

      <div className="external-page-frame-wrapper">
        <iframe
          title={title}
          src={url}
          className="external-page-iframe"
          loading="lazy"
        />
      </div>
    </div>
  );
}
