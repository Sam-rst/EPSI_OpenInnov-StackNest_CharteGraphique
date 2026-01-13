import { Activity, Cloud, Database, DollarSign, Server, TrendingUp, AlertTriangle, CheckCircle2, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const costData = [
  { month: 'Jan', cost: 4200, budget: 5000 },
  { month: 'Feb', cost: 3800, budget: 5000 },
  { month: 'Mar', cost: 4500, budget: 5000 },
  { month: 'Apr', cost: 4100, budget: 5000 },
  { month: 'May', cost: 5200, budget: 5000 },
  { month: 'Jun', cost: 4800, budget: 5000 },
];

const resourceData = [
  { name: 'VM', value: 24 },
  { name: 'DB', value: 12 },
  { name: 'Storage', value: 8 },
  { name: 'Network', value: 6 },
];

const performanceData = [
  { time: '00:00', cpu: 45, memory: 62 },
  { time: '04:00', cpu: 52, memory: 65 },
  { time: '08:00', cpu: 78, memory: 71 },
  { time: '12:00', cpu: 85, memory: 79 },
  { time: '16:00', cpu: 72, memory: 74 },
  { time: '20:00', cpu: 58, memory: 68 },
];

export function DashboardMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#032233] via-[#041e2b] to-[#021519] overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Overview of your cloud infrastructure</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Active Resources */}
          <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 hover:border-[#0d9297]/40 transition-all shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-[#0d9297]/20 to-[#0d9297]/5 rounded-lg">
                <Server className="w-6 h-6 text-[#0d9297]" />
              </div>
              <span className="inline-flex items-center gap-1 text-[#22c55e] text-sm font-medium">
                <ArrowUpRight className="w-4 h-4" />
                12%
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Active Resources</h3>
            <p className="text-3xl font-semibold text-white">247</p>
            <p className="text-xs text-gray-500 mt-2">Across 4 regions</p>
          </div>

          {/* Monthly Cost */}
          <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#fea21f]/20 rounded-lg p-6 hover:border-[#fea21f]/40 transition-all shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-[#fea21f]/20 to-[#fea21f]/5 rounded-lg">
                <DollarSign className="w-6 h-6 text-[#fea21f]" />
              </div>
              <span className="inline-flex items-center gap-1 text-[#c42b1c] text-sm font-medium">
                <ArrowUpRight className="w-4 h-4" />
                8%
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Monthly Cost</h3>
            <p className="text-3xl font-semibold text-white">$4,832</p>
            <p className="text-xs text-gray-500 mt-2">96% of budget</p>
          </div>

          {/* Deployments */}
          <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#22c55e]/20 rounded-lg p-6 hover:border-[#22c55e]/40 transition-all shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-[#22c55e]/20 to-[#22c55e]/5 rounded-lg">
                <Cloud className="w-6 h-6 text-[#22c55e]" />
              </div>
              <span className="inline-flex items-center gap-1 text-[#22c55e] text-sm font-medium">
                <ArrowUpRight className="w-4 h-4" />
                24%
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Deployments</h3>
            <p className="text-3xl font-semibold text-white">156</p>
            <p className="text-xs text-gray-500 mt-2">This month</p>
          </div>

          {/* Health Score */}
          <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 hover:border-[#0d9297]/40 transition-all shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-[#22c55e]/20 to-[#22c55e]/5 rounded-lg">
                <Activity className="w-6 h-6 text-[#22c55e]" />
              </div>
              <span className="inline-flex items-center gap-1 text-gray-400 text-sm font-medium">
                <ArrowDownRight className="w-4 h-4" />
                2%
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Health Score</h3>
            <p className="text-3xl font-semibold text-white">98.5%</p>
            <p className="text-xs text-gray-500 mt-2">System uptime</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Cost Overview */}
          <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-1">Cost Overview</h2>
              <p className="text-sm text-gray-400">Monthly spending vs budget</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={costData}>
                  <defs>
                    <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0d9297" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0d9297" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4a" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a2433', border: '1px solid #0d9297', borderRadius: '8px' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Area type="monotone" dataKey="cost" stroke="#0d9297" fillOpacity={1} fill="url(#costGradient)" strokeWidth={2} />
                  <Area type="monotone" dataKey="budget" stroke="#fea21f" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Resource Distribution */}
          <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-1">Resource Distribution</h2>
              <p className="text-sm text-gray-400">Active resources by type</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resourceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4a" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a2433', border: '1px solid #0d9297', borderRadius: '8px' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Bar dataKey="value" fill="#0d9297" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Performance & Resources Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <div className="lg:col-span-2 bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-1">System Performance</h2>
              <p className="text-sm text-gray-400">CPU and Memory usage (24h)</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4a" />
                  <XAxis dataKey="time" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a2433', border: '1px solid #0d9297', borderRadius: '8px' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Line type="monotone" dataKey="cpu" stroke="#0d9297" strokeWidth={2} dot={{ fill: '#0d9297', r: 4 }} />
                  <Line type="monotone" dataKey="memory" stroke="#fea21f" strokeWidth={2} dot={{ fill: '#fea21f', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-1">Recent Activity</h2>
              <p className="text-sm text-gray-400">Latest events</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-4 border-b border-gray-700/50">
                <div className="p-2 bg-[#22c55e]/10 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Deployment successful</p>
                  <p className="text-xs text-gray-400 mt-1">prod-api-v2.3.1</p>
                  <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-4 border-b border-gray-700/50">
                <div className="p-2 bg-[#fea21f]/10 rounded-lg">
                  <Clock className="w-4 h-4 text-[#fea21f]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Scaling in progress</p>
                  <p className="text-xs text-gray-400 mt-1">backend-cluster-01</p>
                  <p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-4 border-b border-gray-700/50">
                <div className="p-2 bg-[#c42b1c]/10 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-[#c42b1c]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">High CPU usage detected</p>
                  <p className="text-xs text-gray-400 mt-1">db-instance-03</p>
                  <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#22c55e]/10 rounded-lg">
                  <Database className="w-4 h-4 text-[#22c55e]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Backup completed</p>
                  <p className="text-xs text-gray-400 mt-1">postgres-production</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
