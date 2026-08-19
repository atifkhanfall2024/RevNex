"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp, TrendingDown, DollarSign, FileCheck } from "lucide-react";
import {
  collectionsTrend,
  arAgingData,
  denialTrend,
  claimStatus,
} from "@/data/chartData";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const tooltipStyle = {
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  fontSize: "13px",
};

function ChartCard({
  title,
  subtitle,
  children,
  delay = 0,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <AnimateIn delay={delay}>
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mb-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h3>
          {subtitle && (
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </AnimateIn>
  );
}

export function RCMChartsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-900 dark:to-slate-950 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600">
            Performance Analytics
          </p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Real-Time RCM Insights
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Track collections, denials, and A/R aging with clear dashboards — built
            for practice owners who want transparency.
          </p>
        </AnimateIn>

        {/* KPI row */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: DollarSign,
              label: "Monthly Collections",
              value: 635,
              prefix: "$",
              suffix: "K",
              trend: "+18%",
              up: true,
              color: "from-brand-500 to-brand-600",
            },
            {
              icon: FileCheck,
              label: "Clean Claim Rate",
              value: 98,
              suffix: "%",
              trend: "+4%",
              up: true,
              color: "from-accent-500 to-accent-600",
            },
            {
              icon: TrendingDown,
              label: "Denial Rate",
              value: 4.2,
              suffix: "%",
              decimals: 1,
              trend: "-66%",
              up: true,
              color: "from-violet-500 to-purple-600",
            },
            {
              icon: TrendingUp,
              label: "Days in A/R",
              value: 28,
              suffix: " days",
              trend: "-12%",
              up: true,
              color: "from-cyan-500 to-blue-600",
            },
          ].map((kpi, i) => (
            <AnimateIn key={kpi.label} delay={i * 80}>
              <div className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80">
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${kpi.color} text-white shadow-sm`}
                  >
                    <kpi.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-accent-50 px-2 py-0.5 text-xs font-semibold text-accent-700 dark:bg-accent-950 dark:text-accent-400">
                    {kpi.trend}
                  </span>
                </div>
                <p className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">
                  <AnimatedCounter
                    value={kpi.value}
                    prefix={kpi.prefix}
                    suffix={kpi.suffix}
                    decimals={kpi.decimals ?? 0}
                  />
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {kpi.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Charts grid */}
        <div className="grid gap-5 lg:grid-cols-2">
          <ChartCard
            title="Net Collections Trend"
            subtitle="Monthly revenue in thousands ($K)"
            delay={100}
          >
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={collectionsTrend}>
                <defs>
                  <linearGradient id="collectionsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" width={36} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area
                  type="monotone"
                  dataKey="collections"
                  stroke="#6366f1"
                  strokeWidth={2.5}
                  fill="url(#collectionsGrad)"
                  animationDuration={1500}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Denial Rate Reduction"
            subtitle="Lower is better — trending down"
            delay={180}
          >
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={denialTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" unit="%" width={40} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, "Denial Rate"]} />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", r: 4 }}
                  activeDot={{ r: 6 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="A/R Aging Breakdown" subtitle="Percentage by bucket" delay={260}>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={arAgingData} layout="vertical" barSize={18}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 12 }} stroke="#94a3b8" unit="%" />
                <YAxis
                  type="category"
                  dataKey="bucket"
                  tick={{ fontSize: 11 }}
                  stroke="#94a3b8"
                  width={72}
                />
                <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, "Share"]} />
                <Bar dataKey="amount" radius={[0, 6, 6, 0]} animationDuration={1500}>
                  {arAgingData.map((entry) => (
                    <Cell key={entry.bucket} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Claim Status Mix" subtitle="Current month distribution" delay={340}>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width="55%" height={220}>
                <PieChart>
                  <Pie
                    data={claimStatus}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {claimStatus.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, ""]} />
                </PieChart>
              </ResponsiveContainer>
              <ul className="flex flex-1 flex-col gap-3">
                {claimStatus.map((item) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.name}
                    </span>
                    <span className="ml-auto text-sm font-bold text-slate-900 dark:text-white">
                      {item.value}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ChartCard>
        </div>
      </div>
    </section>
  );
}
