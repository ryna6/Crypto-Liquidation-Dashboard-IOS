// src/components/ExternalPage.jsx

export function ExternalPage({
  title,
  subtitle,
  url,
  source,
  offsetTop = 0,
  cropHeight, // optional
}) {
  const handleOpenInBrowser = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const frameStyle = {
    position: "relative",
    top: offsetTop ? `-${offsetTop}px` : "0",
    width: "100%",
    height: cropHeight ? `${cropHeight}px` : "100%",
    border: "none",
    background: "#000",
  };

  const wrapperStyle = {
    flex: 1,
    minHeight: 0,
    overflow: "hidden", // This hides the parts we shift out of view
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
          This view crops the CoinGlass page to show just the main chart. If it
          ever looks off, tap <strong>Open in Browser</strong>.
        </p>
      </div>

      <div className="external-page-frame-wrapper" style={wrapperStyle}>
        <iframe
          title={title}
          src={url}
          style={frameStyle}
          loading="lazy"
        />
      </div>
    </div>
  );
}
