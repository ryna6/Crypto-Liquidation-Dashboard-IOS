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
    url: "https://www.coinglass.com/pro/futures/LiquidationMap",
    source: "CoinGlass",
    offsetTop: 120,   // tweak this value
    cropHeight: 450,  // tweak this value
  },
  {
    id: "liqheat",
    label: "BTC Liq Heat",
    url: "https://www.coinglass.com/pro/futures/LiquidationHeatMap",
    source: "CoinGlass",
    offsetTop: 120,
    cropHeight: 450,
  },
  {
    id: "spotflows",
    label: "BTC Flows",
    url: "https://www.coinglass.com/spot-inflow-outflow",
    source: "CoinGlass",
    offsetTop: 120,
    cropHeight: 450,
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("heatmap");
  const currentTab = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-header-title">Crypto Dashboard</div>
        <div className="app-header-subtitle">{currentTab.title}</div>
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
