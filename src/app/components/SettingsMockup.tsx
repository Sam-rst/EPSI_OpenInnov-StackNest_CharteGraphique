import { Users, Shield, Key, Bell, Mail, Search, Plus, MoreVertical, Crown, Edit, Trash2 } from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    role: 'Admin',
    status: 'active',
    lastActive: '2 minutes ago',
    avatar: 'SC',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    email: 'marcus.r@company.com',
    role: 'Developer',
    status: 'active',
    lastActive: '1 hour ago',
    avatar: 'MR',
  },
  {
    id: 3,
    name: 'Emily Watson',
    email: 'e.watson@company.com',
    role: 'DevOps',
    status: 'active',
    lastActive: '3 hours ago',
    avatar: 'EW',
  },
  {
    id: 4,
    name: 'James Park',
    email: 'james.park@company.com',
    role: 'Viewer',
    status: 'inactive',
    lastActive: '2 days ago',
    avatar: 'JP',
  },
];

const roles = [
  {
    name: 'Admin',
    color: '#c42b1c',
    users: 2,
    permissions: ['Full access', 'User management', 'Billing', 'API keys', 'Audit logs'],
  },
  {
    name: 'DevOps',
    color: '#0d9297',
    users: 5,
    permissions: ['Deploy resources', 'Manage infrastructure', 'View logs', 'Configure alerts'],
  },
  {
    name: 'Developer',
    color: '#fea21f',
    users: 12,
    permissions: ['Deploy applications', 'View resources', 'Access databases', 'View metrics'],
  },
  {
    name: 'Viewer',
    color: '#6b7280',
    users: 8,
    permissions: ['View resources', 'View metrics', 'View logs'],
  },
];

export function SettingsMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#032233] via-[#041e2b] to-[#021519] overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Settings & Access Control</h1>
          <p className="text-gray-400">Manage users, roles, and permissions</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-1 overflow-x-auto pb-2 border-b border-gray-700/50">
          {[
            { icon: Users, label: 'Users', active: true },
            { icon: Shield, label: 'Roles & Permissions', active: false },
            { icon: Key, label: 'API Keys', active: false },
            { icon: Bell, label: 'Notifications', active: false },
            { icon: Mail, label: 'Integrations', active: false },
          ].map((tab, index) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={index}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-medium text-sm whitespace-nowrap transition-all ${
                  tab.active
                    ? 'bg-[#0a2433]/80 border-t border-x border-[#0d9297]/30 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-[#0a2433]/40'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Users Table */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-full pl-12 pr-4 py-3 bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d9297] focus:border-transparent transition-all hover:border-[#0d9297]/50"
                />
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] hover:from-[#0fa8ad] hover:to-[#0d8a8f] text-white font-medium rounded-lg transition-all shadow-lg shadow-[#0d9297]/20">
                <Plus className="w-4 h-4" />
                Invite User
              </button>
            </div>

            {/* Users List */}
            <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg overflow-hidden shadow-lg">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#032233]/50 border-b border-[#0d9297]/10">
                <div className="col-span-5 text-xs font-medium text-gray-400 uppercase tracking-wider">User</div>
                <div className="col-span-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Role</div>
                <div className="col-span-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</div>
                <div className="col-span-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Last Active</div>
                <div className="col-span-1 text-xs font-medium text-gray-400 uppercase tracking-wider text-right">Actions</div>
              </div>

              {/* Table Rows */}
              {users.map((user, index) => (
                <div
                  key={user.id}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 hover:bg-[#0d9297]/5 transition-colors ${
                    index !== users.length - 1 ? 'border-b border-gray-700/50' : ''
                  }`}
                >
                  {/* User Info */}
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0d9297] to-[#0b7b7f] rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="col-span-2 flex items-center">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium ${
                      user.role === 'Admin' ? 'bg-[#c42b1c]/10 text-[#ff6b6b] border border-[#c42b1c]/30' :
                      user.role === 'DevOps' ? 'bg-[#0d9297]/10 text-[#0d9297] border border-[#0d9297]/30' :
                      user.role === 'Developer' ? 'bg-[#fea21f]/10 text-[#fea21f] border border-[#fea21f]/30' :
                      'bg-gray-700/20 text-gray-400 border border-gray-700/30'
                    }`}>
                      {user.role === 'Admin' && <Crown className="w-3 h-3" />}
                      {user.role}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="col-span-2 flex items-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${
                      user.status === 'active'
                        ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30'
                        : 'bg-gray-700/20 text-gray-400 border border-gray-700/30'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        user.status === 'active' ? 'bg-[#22c55e]' : 'bg-gray-500'
                      }`} />
                      {user.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </div>

                  {/* Last Active */}
                  <div className="col-span-2 flex items-center">
                    <span className="text-sm text-gray-400">{user.lastActive}</span>
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex items-center justify-end">
                    <button className="p-2 hover:bg-[#0d9297]/10 rounded-lg transition-colors group">
                      <MoreVertical className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bulk Actions */}
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-400">Showing 4 of 27 users</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-[#0a2433]/80 border border-[#0d9297]/30 hover:border-[#0d9297]/50 rounded-lg text-gray-300 hover:text-white transition-all">
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#0a2433]/80 border border-[#0d9297]/30 hover:border-[#0d9297]/50 rounded-lg text-gray-300 hover:text-white transition-all">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Roles & Permissions Panel */}
          <div className="space-y-6">
            <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Roles</h2>
                <button className="text-sm text-[#0d9297] hover:text-[#0fa8ad] font-medium transition-colors">
                  + Create Role
                </button>
              </div>

              <div className="space-y-4">
                {roles.map((role, index) => (
                  <div
                    key={index}
                    className="bg-[#021519] border border-[#0d9297]/20 rounded-lg p-4 hover:border-[#0d9297]/40 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: role.color }}
                        />
                        <h3 className="text-sm font-semibold text-white">{role.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 hover:bg-[#0d9297]/10 rounded">
                          <Edit className="w-3 h-3 text-gray-400 hover:text-white" />
                        </button>
                        <button className="p-1 hover:bg-[#c42b1c]/10 rounded">
                          <Trash2 className="w-3 h-3 text-gray-400 hover:text-[#c42b1c]" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mb-3">{role.users} users</p>

                    <div className="space-y-1.5">
                      {role.permissions.map((permission, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#0d9297]" />
                          <span className="text-xs text-gray-400">{permission}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Permission Matrix Preview */}
            <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-4">Quick Stats</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-700/50">
                  <span className="text-sm text-gray-400">Total Users</span>
                  <span className="text-lg font-semibold text-white">27</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-700/50">
                  <span className="text-sm text-gray-400">Active Sessions</span>
                  <span className="text-lg font-semibold text-white">18</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-700/50">
                  <span className="text-sm text-gray-400">Custom Roles</span>
                  <span className="text-lg font-semibold text-white">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Pending Invites</span>
                  <span className="text-lg font-semibold text-[#fea21f]">3</span>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#fea21f]/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#fea21f] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Security Tip</h3>
                  <p className="text-xs text-gray-400">
                    Enable two-factor authentication for all admin users to enhance account security.
                  </p>
                  <button className="text-xs text-[#0d9297] hover:text-[#0fa8ad] font-medium mt-2 transition-colors">
                    Configure 2FA →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
