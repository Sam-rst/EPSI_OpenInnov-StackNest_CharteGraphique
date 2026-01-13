import { Server, Database, Container, Network, HardDrive, Globe, Zap, Shield, Search, Filter, Plus } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Compute Instance',
    icon: Server,
    category: 'Compute',
    description: 'Scalable virtual machines with customizable configurations',
    pricing: '$0.08/hour',
    status: 'available',
    features: ['Auto-scaling', 'Load balancing', 'SSD storage'],
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'PostgreSQL Database',
    icon: Database,
    category: 'Database',
    description: 'Managed PostgreSQL with automated backups and replication',
    pricing: '$0.15/hour',
    status: 'available',
    features: ['Auto-backup', 'High availability', 'Point-in-time recovery'],
  },
  {
    id: 3,
    name: 'Container Registry',
    icon: Container,
    category: 'DevOps',
    description: 'Private Docker container registry with security scanning',
    pricing: '$0.10/GB/month',
    status: 'available',
    features: ['Vulnerability scanning', 'Image signing', 'RBAC'],
    badge: 'New',
  },
  {
    id: 4,
    name: 'Load Balancer',
    icon: Network,
    category: 'Network',
    description: 'Distribute traffic across multiple instances automatically',
    pricing: '$0.025/hour',
    status: 'available',
    features: ['SSL termination', 'Health checks', 'Auto-failover'],
  },
  {
    id: 5,
    name: 'Object Storage',
    icon: HardDrive,
    category: 'Storage',
    description: 'Scalable S3-compatible object storage for any data type',
    pricing: '$0.023/GB/month',
    status: 'available',
    features: ['99.99% durability', 'CDN integration', 'Lifecycle policies'],
  },
  {
    id: 6,
    name: 'CDN',
    icon: Globe,
    category: 'Network',
    description: 'Global content delivery network with edge caching',
    pricing: '$0.085/GB',
    status: 'available',
    features: ['Global PoPs', 'DDoS protection', 'SSL/TLS'],
  },
  {
    id: 7,
    name: 'Serverless Functions',
    icon: Zap,
    category: 'Compute',
    description: 'Run code without managing servers, pay per execution',
    pricing: '$0.20/1M requests',
    status: 'beta',
    features: ['Auto-scaling', 'Multiple runtimes', 'Event-driven'],
    badge: 'Beta',
  },
  {
    id: 8,
    name: 'Kubernetes Cluster',
    icon: Container,
    category: 'Container',
    description: 'Managed Kubernetes with automated updates and scaling',
    pricing: '$0.10/hour/node',
    status: 'available',
    features: ['Auto-upgrade', 'Monitoring', 'Multi-zone'],
    badge: 'Enterprise',
  },
  {
    id: 9,
    name: 'WAF & Security',
    icon: Shield,
    category: 'Security',
    description: 'Web application firewall with threat intelligence',
    pricing: '$5/month',
    status: 'available',
    features: ['DDoS protection', 'Bot mitigation', 'Rate limiting'],
  },
];

export function ServiceCatalogMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#032233] via-[#041e2b] to-[#021519] overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Service Catalog</h1>
          <p className="text-gray-400">Deploy cloud resources in minutes</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-12 pr-4 py-3 bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d9297] focus:border-transparent transition-all hover:border-[#0d9297]/50"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-3 bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/30 hover:border-[#0d9297]/50 rounded-lg text-gray-300 hover:text-white transition-all">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] hover:from-[#0fa8ad] hover:to-[#0d8a8f] text-white font-medium rounded-lg transition-all shadow-lg shadow-[#0d9297]/20">
              <Plus className="w-4 h-4" />
              <span className="text-sm">Deploy Custom</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {['All', 'Compute', 'Database', 'Storage', 'Network', 'DevOps', 'Security'].map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                index === 0
                  ? 'bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] text-white shadow-lg shadow-[#0d9297]/20'
                  : 'bg-[#0a2433]/80 border border-[#0d9297]/20 text-gray-300 hover:border-[#0d9297]/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 hover:border-[#0d9297]/50 transition-all hover:shadow-xl hover:shadow-[#0d9297]/10 group cursor-pointer"
              >
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#0d9297]/20 to-[#0d9297]/5 rounded-lg group-hover:from-[#0d9297]/30 group-hover:to-[#0d9297]/10 transition-all">
                    <IconComponent className="w-6 h-6 text-[#0d9297]" />
                  </div>
                  {service.badge && (
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      service.badge === 'Popular' ? 'bg-[#fea21f]/10 text-[#fea21f] border border-[#fea21f]/30' :
                      service.badge === 'New' ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30' :
                      service.badge === 'Beta' ? 'bg-[#0d9297]/10 text-[#0d9297] border border-[#0d9297]/30' :
                      'bg-[#032233]/50 text-gray-300 border border-gray-700'
                    }`}>
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Info */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#0d9297] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">{service.category}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mb-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#0d9297]" />
                      <span className="text-xs text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing and Action */}
                <div className="pt-4 border-t border-gray-700/50 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Starting at</p>
                    <p className="text-lg font-semibold text-white">{service.pricing}</p>
                  </div>
                  <button className="px-4 py-2 bg-[#0d9297]/10 hover:bg-[#0d9297]/20 border border-[#0d9297]/30 hover:border-[#0d9297]/50 text-[#0d9297] rounded-lg text-sm font-medium transition-all">
                    Deploy
                  </button>
                </div>

                {/* Status Indicator */}
                <div className="mt-3 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    service.status === 'available' ? 'bg-[#22c55e]' : 'bg-[#fea21f]'
                  }`} />
                  <span className="text-xs text-gray-500 capitalize">{service.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#0d9297]/10 rounded-lg">
              <Shield className="w-6 h-6 text-[#0d9297]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Support Available</h3>
              <p className="text-sm text-gray-400 mb-3">
                Need help deploying? Our DevOps experts are available 24/7 to assist with architecture design and implementation.
              </p>
              <button className="text-sm text-[#0d9297] hover:text-[#0fa8ad] font-medium transition-colors">
                Contact Sales →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
