import { Bot, Send, Terminal, Cpu, Database, Settings, Sparkles, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

const chatMessages = [
  {
    role: 'user',
    content: 'Deploy a new PostgreSQL database in the production environment',
    timestamp: '14:32',
  },
  {
    role: 'assistant',
    content: "I'll help you deploy a PostgreSQL database in production. Let me check the current configuration and recommend the best setup.",
    timestamp: '14:32',
  },
  {
    role: 'assistant',
    content: "Based on your production environment, I recommend:\n• Instance Type: db.r5.xlarge (4 vCPU, 32GB RAM)\n• Storage: 500GB SSD with auto-scaling enabled\n• Multi-AZ deployment for high availability\n• Automated daily backups with 7-day retention\n\nEstimated cost: ~$540/month\n\nShall I proceed with this configuration?",
    timestamp: '14:33',
    suggestions: [
      'Yes, deploy with these settings',
      'Show me other instance types',
      'Adjust storage to 1TB',
    ],
    code: `stacknest deploy database \\
  --type postgresql \\
  --version 15.4 \\
  --instance db.r5.xlarge \\
  --storage 500GB \\
  --environment production \\
  --multi-az true`,
  },
  {
    role: 'user',
    content: 'Yes, deploy with these settings',
    timestamp: '14:34',
  },
  {
    role: 'assistant',
    content: "✓ Deployment initiated successfully!\n\nI'm creating your PostgreSQL database with the following steps:\n1. ✓ Validated configuration\n2. ✓ Reserved compute resources\n3. ⏳ Provisioning database instance...\n4. ⏳ Configuring networking and security groups\n5. ⏳ Setting up automated backups\n\nEstimated completion: 8-10 minutes\nDeployment ID: db-prod-pg-2026-01-13-a7f3",
    timestamp: '14:34',
    status: 'deploying',
  },
];

const quickActions = [
  { icon: Terminal, label: 'Check system status', command: '/status' },
  { icon: Cpu, label: 'Scale resources', command: '/scale' },
  { icon: Database, label: 'Backup database', command: '/backup' },
  { icon: Settings, label: 'Configure alerts', command: '/alerts' },
];

export function ChatbotMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#032233] via-[#041e2b] to-[#021519] overflow-hidden flex">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#0a2433]/80 backdrop-blur-sm border-b border-[#0d9297]/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-[#0d9297]/20 to-[#0d9297]/5 rounded-lg">
                <Bot className="w-6 h-6 text-[#0d9297]" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white flex items-center gap-2">
                  StackNest AI Assistant
                  <span className="flex items-center gap-1 px-2 py-0.5 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full text-xs text-[#22c55e]">
                    <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse" />
                    Online
                  </span>
                </h1>
                <p className="text-xs text-gray-400">Powered by GPT-4 • Cloud DevOps Specialist</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-[#0a2433]/80 border border-[#0d9297]/30 hover:border-[#0d9297]/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all">
              Clear History
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Welcome Message */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#0d9297] to-[#0b7b7f] rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-[#0a2433]/60 border border-[#0d9297]/20 rounded-lg p-4 max-w-2xl">
                <p className="text-sm text-gray-300 mb-3">
                  👋 Hello! I'm your StackNest AI assistant. I can help you deploy resources, manage infrastructure, troubleshoot issues, and optimize your cloud environment.
                </p>
                <p className="text-xs text-gray-400">
                  Try asking me to deploy a service, check system health, or scale your resources.
                </p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          {chatMessages.map((message, index) => (
            <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
              {message.role === 'assistant' && (
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#0d9297] to-[#0b7b7f] rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className={`flex-1 ${message.role === 'user' ? 'flex justify-end' : ''}`}>
                <div className={`${message.role === 'user' ? 'max-w-lg' : 'max-w-2xl'}`}>
                  {/* Message Content */}
                  <div className={`rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] text-white'
                      : 'bg-[#0a2433]/60 border border-[#0d9297]/20 text-gray-300'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>

                  {/* Code Block */}
                  {message.code && (
                    <div className="mt-3 bg-[#021519] border border-[#0d9297]/20 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-[#032233]/50 border-b border-[#0d9297]/10">
                        <span className="text-xs text-gray-400 font-mono">Command</span>
                        <button className="flex items-center gap-1 text-xs text-[#0d9297] hover:text-[#0fa8ad] transition-colors">
                          <Copy className="w-3 h-3" />
                          Copy
                        </button>
                      </div>
                      <pre className="p-4 text-xs text-[#0d9297] font-mono overflow-x-auto">
                        {message.code}
                      </pre>
                    </div>
                  )}

                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          className="px-3 py-1.5 bg-[#0a2433]/80 border border-[#0d9297]/30 hover:border-[#0d9297]/50 rounded-lg text-xs text-gray-300 hover:text-white transition-all"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Status Indicator */}
                  {message.status === 'deploying' && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#fea21f]">
                      <div className="w-2 h-2 bg-[#fea21f] rounded-full animate-pulse" />
                      Deployment in progress...
                    </div>
                  )}

                  {/* Timestamp and Actions */}
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2">
                        <button className="text-gray-500 hover:text-[#22c55e] transition-colors">
                          <ThumbsUp className="w-3 h-3" />
                        </button>
                        <button className="text-gray-500 hover:text-[#c42b1c] transition-colors">
                          <ThumbsDown className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {message.role === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#fea21f] to-[#e69317] rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                  U
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-[#0a2433]/80 backdrop-blur-sm border-t border-[#0d9297]/20 p-4">
          <div className="max-w-4xl mx-auto">
            {/* Quick Actions */}
            <div className="mb-3 flex gap-2 overflow-x-auto pb-2">
              {quickActions.map((action, idx) => {
                const IconComponent = action.icon;
                return (
                  <button
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#021519] border border-[#0d9297]/20 hover:border-[#0d9297]/40 rounded-lg text-xs text-gray-400 hover:text-white transition-all whitespace-nowrap"
                  >
                    <IconComponent className="w-3 h-3" />
                    {action.label}
                  </button>
                );
              })}
            </div>

            {/* Input Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Ask me anything about your infrastructure..."
                className="w-full pl-4 pr-12 py-3 bg-[#021519] border border-[#0d9297]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d9297] focus:border-transparent transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] hover:from-[#0fa8ad] hover:to-[#0d8a8f] rounded-lg text-white transition-all shadow-lg shadow-[#0d9297]/20">
                <Send className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2 text-center">
              AI can make mistakes. Verify critical operations before execution.
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar - Context Panel */}
      <div className="w-80 bg-[#0a2433]/60 backdrop-blur-sm border-l border-[#0d9297]/20 p-6 overflow-y-auto">
        <h2 className="text-lg font-semibold text-white mb-4">Context</h2>
        
        {/* Current Environment */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Active Environment</h3>
          <div className="bg-[#021519] border border-[#0d9297]/20 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white font-medium">Production</span>
              <span className="px-2 py-0.5 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded text-xs text-[#22c55e]">
                Healthy
              </span>
            </div>
            <p className="text-xs text-gray-400">Region: us-east-1</p>
          </div>
        </div>

        {/* Suggested Commands */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Suggested Commands</h3>
          <div className="space-y-2">
            {[
              'Show resource costs',
              'List all deployments',
              'Check system health',
              'Scale web servers',
            ].map((cmd, idx) => (
              <button
                key={idx}
                className="w-full text-left px-3 py-2 bg-[#021519] border border-[#0d9297]/20 hover:border-[#0d9297]/40 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'Database deployed', time: '2 min ago', status: 'success' },
              { action: 'Backup completed', time: '1 hour ago', status: 'success' },
              { action: 'Scaling operation', time: '3 hours ago', status: 'warning' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                  item.status === 'success' ? 'bg-[#22c55e]' : 'bg-[#fea21f]'
                }`} />
                <div className="flex-1">
                  <p className="text-xs text-white">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
