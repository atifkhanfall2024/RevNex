"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  collectionsTrend,
  arAgingData,
  denialTrend,
  claimStatus,
} from "@/data/chartData";
import { Activity, TrendingDown, TrendingUp } from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";

type ChartTab = "collections" | "aging" | "denials";

const tabs: { id: ChartTab; label: string }[] = [
  { id: "collections", label: "Collections" },
  { id: "aging", label: "A/R Aging" },
  { id: "denials", label: "Denials" },
];

const tooltipStyle = {
  background: "rgba(15, 13, 36, 0.96)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "12px",
  color: "#fff",
  fontSize: "12px",
  padding: "10px 14px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
};

function ChartTooltip({
  active,
  payload,
  label,
  valuePrefix = "",
  valueSuffix = "",
}: {
  active?: boolean;
  payload?: { value: number; name: string; color?: string }[];
  label?: string | number;
  valuePrefix?: string;
  valueSuffix?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div style={tooltipStyle}>
      <p className="mb-1.5 text-[11px] font-medium text-slate-400">{String(label ?? "")}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="flex items-center gap-2 text-sm font-semibold text-white">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: entry.color ?? "#34d399" }}
          />
          {entry.name}: {valuePrefix}
          {typeof entry.value === "number" ? entry.value.toLocaleString() : entry.value}
          {valueSuffix}
        </p>
      ))}
    </div>
  );
}

function CollectionsChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <AreaChart data={collectionsTrend} margin={{ top: 8, right: 4, left: -18, bottom: 0 }}>
        <defs>
          <linearGradient id="heroAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#34d399" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: "#94a3b8", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#64748b", fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `$${v}K`}
          width={42}
        />
        <Tooltip
          content={({ active, payload, label }) => (
            <ChartTooltip
              active={active}
              label={label}
              payload={payload?.map((p) => ({
                name: String(p.name ?? "Value"),
                value: p.value as number,
                color: p.color,
              }))}
              valuePrefix="$"
              valueSuffix="K"
            />
          )}
        />
        <Area
          type="monotone"
          dataKey="target"
          name="Target"
          stroke="#818cf8"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          fill="none"
          animationDuration={1800}
          animationEasing="ease-out"
        />
        <Area
          type="monotone"
          dataKey="collections"
          name="Collections"
          stroke="#34d399"
          strokeWidth={2.5}
          fill="url(#heroAreaGrad)"
          animationDuration={2400}
          animationEasing="ease-out"
          dot={{ r: 3, fill: "#34d399", strokeWidth: 0 }}
          activeDot={{ r: 5, fill: "#6ee7b7", stroke: "#fff", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function AgingChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart
        data={arAgingData}
        layout="vertical"
        margin={{ top: 4, right: 12, left: 4, bottom: 0 }}
      >
        <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" horizontal={false} />
        <XAxis type="number" hide domain={[0, 100]} />
        <YAxis
          type="category"
          dataKey="bucket"
          tick={{ fill: "#94a3b8", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={72}
        />
        <Tooltip
          content={({ active, payload, label }) => (
            <ChartTooltip
              active={active}
              label={label}
              payload={payload?.map((p) => ({
                name: "Share",
                value: p.value as number,
                color: (p.payload as { fill: string }).fill,
              }))}
              valueSuffix="%"
            />
          )}
        />
        <Bar
          dataKey="amount"
          name="Share"
          radius={[0, 6, 6, 0]}
          animationDuration={1600}
          animationEasing="ease-out"
        >
          {arAgingData.map((entry) => (
            <Cell key={entry.bucket} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function DenialsChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={denialTrend} margin={{ top: 8, right: 4, left: -18, bottom: 0 }}>
        <defs>
          <linearGradient id="heroDenialGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f87171" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#f87171" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: "#94a3b8", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#64748b", fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `${v}%`}
          width={36}
          domain={[0, 14]}
        />
        <Tooltip
          content={({ active, payload, label }) => (
            <ChartTooltip
              active={active}
              label={label}
              payload={payload?.map((p) => ({
                name: "Denial rate",
                value: p.value as number,
                color: "#f87171",
              }))}
              valueSuffix="%"
            />
          )}
        />
        <Line
          type="monotone"
          dataKey="rate"
          name="Denial rate"
          stroke="#f87171"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "#f87171", strokeWidth: 0 }}
          activeDot={{ r: 5, fill: "#fca5a5", stroke: "#fff", strokeWidth: 2 }}
          animationDuration={2200}
          animationEasing="ease-out"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const tabMeta: Record<
  ChartTab,
  { title: string; trend: string; trendUp: boolean; headline: React.ReactNode }
> = {
  collections: {
    title: "Net Collections",
    trend: "+18.4%",
    trendUp: true,
    headline: (
      <>
        $<AnimatedCounter value={635} suffix="K" duration={2000} />
      </>
    ),
  },
  aging: {
    title: "A/R Aging",
    trend: "68% current",
    trendUp: true,
    headline: (
      <>
        &lt;<AnimatedCounter value={30} suffix=" days" duration={1800} />
      </>
    ),
  },
  denials: {
    title: "Denial Rate",
    trend: "-66% YoY",
    trendUp: true,
    headline: (
      <>
        <AnimatedCounter value={4.2} decimals={1} suffix="%" duration={1800} />
      </>
    ),
  },
};

/** Interactive animated RCM dashboard — hero right column */
export function HeroDashboardPreview() {
  const cardRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<ChartTab>("collections");
  const [paused, setPaused] = useState(false);

  const cycleTab = useCallback(() => {
    setActiveTab((prev) => {
      const idx = tabs.findIndex((t) => t.id === prev);
      return tabs[(idx + 1) % tabs.length].id;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(cycleTab, 5000);
    return () => clearInterval(timer);
  }, [paused, cycleTab]);

  useEffect(() => {
    registerGsap();
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-float-badge", {
        y: -8,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
      });

      gsap.from(".hero-stat-pill", {
        opacity: 0,
        y: 14,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.9,
        ease: "power2.out",
      });
    }, card);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    registerGsap();
    gsap.fromTo(
      chart,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
    );
  }, [activeTab]);

  const meta = tabMeta[activeTab];

  return (
    <div
      ref={cardRef}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                RCM Dashboard
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
                </span>
                Live
              </span>
            </div>
            <p className="mt-1 text-xl font-bold text-white">{meta.title}</p>
            <p className="mt-0.5 text-2xl font-extrabold tabular-nums text-accent-300">
              {meta.headline}
            </p>
          </div>
          <div
            className={cn(
              "flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-bold",
              meta.trendUp
                ? "border-accent-400/25 bg-accent-500/15 text-accent-300"
                : "border-red-400/25 bg-red-500/15 text-red-300",
            )}
          >
            {activeTab === "denials" ? (
              <TrendingDown className="h-3.5 w-3.5" />
            ) : (
              <TrendingUp className="h-3.5 w-3.5" />
            )}
            {meta.trend}
          </div>
        </div>

        {/* Chart tabs */}
        <div className="mb-3 flex gap-1 rounded-xl bg-white/[0.05] p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 rounded-lg px-2 py-2 text-[11px] font-semibold transition-all duration-300 sm:text-xs",
                activeTab === tab.id
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-slate-400 hover:bg-white/[0.06] hover:text-slate-200",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated chart */}
        <div ref={chartRef} key={activeTab} className="relative -mx-1">
          {activeTab === "collections" && <CollectionsChart />}
          {activeTab === "aging" && <AgingChart />}
          {activeTab === "denials" && <DenialsChart />}
        </div>

        {/* Mini claim status donut row */}
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
          <Activity className="h-4 w-4 shrink-0 text-brand-400" />
          <div className="flex flex-1 gap-0.5 overflow-hidden rounded-full h-2">
            {claimStatus.map((item) => (
              <div
                key={item.name}
                className="h-full transition-all duration-700 ease-out"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.fill,
                }}
                title={`${item.name}: ${item.value}%`}
              />
            ))}
          </div>
          <div className="flex shrink-0 gap-2 text-[10px] font-medium text-slate-400">
            {claimStatus.map((item) => (
              <span key={item.name} className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: item.fill }} />
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* KPI pills */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[
            { label: "Clean Claims", value: 98, suffix: "%" },
            { label: "Days in A/R", value: 30, prefix: "< ", suffix: "" },
            { label: "Denials", value: 4.2, suffix: "%", decimals: 1 },
          ].map((stat) => (
            <div
              key={stat.label}
              className="hero-stat-pill rounded-xl border border-white/10 bg-white/[0.06] px-2 py-2.5 text-center sm:px-3 sm:py-3"
            >
              <p className="text-base font-bold tabular-nums text-white sm:text-lg">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                  duration={1600}
                />
              </p>
              <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400 sm:text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {!paused && (
          <p className="mt-3 text-center text-[10px] text-slate-500">
            Auto-cycling charts · hover to pause
          </p>
        )}
      </div>

      {/* Floating badges */}
      <div className="hero-float-badge absolute -bottom-5 -left-4 hidden rounded-2xl border border-accent-400/30 bg-accent-500/20 px-4 py-3 shadow-xl backdrop-blur-xl md:block sm:-bottom-6 sm:-left-6 sm:px-5 sm:py-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-accent-200 sm:text-xs">
          Revenue Recovered
        </p>
        <p className="text-xl font-bold tabular-nums text-white sm:text-2xl">
          +$<AnimatedCounter value={127} suffix="K" duration={2200} />
        </p>
      </div>

      <div className="hero-float-badge absolute -right-2 top-14 hidden rounded-2xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-xl md:block sm:top-16 sm:px-4 sm:py-3">
        <p className="text-xl font-bold tabular-nums text-white sm:text-2xl">
          <AnimatedCounter value={98} suffix="%" duration={1800} />
        </p>
        <p className="text-[10px] font-medium text-slate-300 sm:text-xs">Clean Claim Rate</p>
      </div>
    </div>
  );
}
