// src/App.jsx
import { useState } from "react";
import { TabBar } from "./components/TabBar";
import { ExternalPage } from "./components/ExternalPage";
import { HeatmapTab } from "./components/HeatmapTab";

const TABS = [
  {
    id: "heatmap",
    label: "Heatmap",
    subtitle: "Live multi-coin heatmap from CoinGecko",
  },
  {
    id: "liqmap",
    label: "BTC Liq Map",
    title: "BTC Liquidation Map",
    url: "https://www.coinglass.com/pro/futures/LiquidationMap",
    source: "CoinGlass",
    offsetTop: 120,   // tweak this value
    cropHeight: 800,  // tweak this value
  },
  {
    id: "liqheat",
    label: "BTC Liq Heat",
    title: "BTC Liquidation Heatmap",
    url: "https://www.coinglass.com/pro/futures/LiquidationHeatMap",
    source: "CoinGlass",
    offsetTop: 120,
    cropHeight: 800,
  },
  {
    id: "spotflows",
    label: "BTC Flows",
    title: "BTC Net Flows",
    url: "https://www.coinglass.com/spot-inflow-outflow",
    source: "CoinGlass",
    offsetTop: 120,
    cropHeight: 800,
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("heatmap");
  const currentTab = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-header-title">Crypto Dashboard</div>
      </header>

      <main className="app-main">
        {currentTab.id === "heatmap" ? (
          <HeatmapTab />
        ) : (
          <ExternalPage
            key={currentTab.id}
            title={currentTab.title}
            subtitle={currentTab.subtitle}
            url={currentTab.url}
            source={currentTab.source}
            offsetTop={currentTab.offsetTop}
            cropHeight={currentTab.cropHeight}
          />
        )}
      </main>

      <TabBar tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
