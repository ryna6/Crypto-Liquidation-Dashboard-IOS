// src/components/ExternalPage.jsx

export function ExternalPage({
  title,
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
        <button
          type="button"
          className="open-browser-btn"
          onClick={handleOpenInBrowser}
        >
          Open in Browser
        </button>
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
