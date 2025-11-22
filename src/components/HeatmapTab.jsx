// HeatmapTab.jsx
// Uses the CoinGecko Coin Heatmap widget (script loaded in index.html)

const COINGECKO_HEATMAP_URL =
  "https://www.coingecko.com/en/cryptocurrency-heatmap";

export function HeatmapTab() {
  const handleOpenInBrowser = () => {
    window.open(COINGECKO_HEATMAP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="external-page">
      <div className="external-page-header">
        <div className="external-page-title">Crypto Market Heatmap</div>
        <div className="external-page-subtitle">
          Live multi-coin heatmap from CoinGecko.
        </div>
        <div className="external-page-source">
          Data & visualization provided by <strong>CoinGecko</strong>.
        </div>

        <button
          type="button"
          className="open-browser-btn"
          onClick={handleOpenInBrowser}
        >
          Open on CoinGecko
        </button>

        <p className="external-page-note">
          The interactive widget below is embedded directly from CoinGecko. If
          it doesn&apos;t load, tap <strong>Open on CoinGecko</strong>.
        </p>
      </div>

      <div className="heatmap-widget-wrapper">
        {/* Custom element provided by CoinGecko's widget script */}
        <coingecko-coin-heatmap-widget height="600" locale="en"></coingecko-coin-heatmap-widget>
      </div>
    </div>
  );
}
