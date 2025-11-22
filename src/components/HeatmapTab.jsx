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
      </div>

      <div className="heatmap-widget-wrapper">
        {/* Custom element provided by CoinGecko's widget script */}
        <coingecko-coin-heatmap-widget height="600" locale="en"></coingecko-coin-heatmap-widget>
      </div>
    </div>
  );
}
