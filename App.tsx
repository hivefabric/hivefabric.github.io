import React, { useState } from 'react';
import { 
  Cpu, 
  Globe, 
  Shield, 
  Zap, 
  Smartphone, 
  Layers, 
  Activity, 
  Code,
  ArrowRight,
  CheckCircle2,
  Box,
  Terminal,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  icon: Icon,
  href
}: { 
  children?: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; 
  className?: string;
  icon?: React.ElementType;
  href?: string;
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  
  const variants = {
    primary: "bg-nr-teal hover:bg-teal-700 text-white shadow-sm focus:ring-teal-500",
    secondary: "bg-white text-nr-dark border border-nr-border hover:bg-gray-50 focus:ring-gray-200",
    outline: "bg-transparent text-white border border-white/30 hover:bg-white/10",
    ghost: "bg-transparent text-nr-teal hover:bg-teal-50",
  };

  const content = (
    <>
      {children}
      {Icon && <Icon className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center max-w-3xl mx-auto">
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-nr-dark'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  badges = [] 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  badges?: string[]
}) => (
  <div className="bg-white p-6 rounded border border-nr-border shadow-sm hover:shadow-md transition-shadow duration-200 relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-1 h-full bg-nr-teal opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="h-12 w-12 bg-teal-50 rounded-lg flex items-center justify-center mb-5 text-nr-teal group-hover:scale-110 transition-transform">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold text-nr-dark mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    {badges.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-auto">
        {badges.map((badge, i) => (
          <span key={i} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
            {badge}
          </span>
        ))}
      </div>
    )}
  </div>
);

const ArchitectureLayer = ({ 
  name, 
  role, 
  description, 
  icon: Icon,
  colorClass,
  features 
}: { 
  name: string, 
  role: string, 
  description: string, 
  icon: React.ElementType,
  colorClass: string,
  features: string[]
}) => (
  <div className="flex flex-col md:flex-row items-stretch bg-white border border-nr-border rounded-lg overflow-hidden mb-6 shadow-sm">
    <div className={`p-6 md:w-64 flex flex-col items-center justify-center text-center ${colorClass} text-white shrink-0`}>
      <Icon className="h-10 w-10 mb-3 opacity-90" />
      <h3 className="text-xl font-bold">{name}</h3>
      <span className="text-xs uppercase tracking-wider font-semibold opacity-75 mt-1">{role}</span>
    </div>
    <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
      <p className="text-lg text-nr-dark mb-4 font-medium">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feat, i) => (
          <div key={i} className="flex items-center text-sm text-gray-600">
            <CheckCircle2 className="h-4 w-4 text-nr-teal mr-2 shrink-0" />
            {feat}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-nr-gray font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-nr-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                <Box className="h-8 w-8 text-nr-teal" />
                <span className="text-xl font-bold text-nr-dark tracking-tight">Hive<span className="text-gray-400 font-light">Fabric</span></span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#platform" className="text-gray-500 hover:text-nr-teal px-3 py-2 text-sm font-medium transition-colors">Platform</a>
                <a href="#marketplace" className="text-gray-500 hover:text-nr-teal px-3 py-2 text-sm font-medium transition-colors">Marketplace</a>
                <a href="#enterprise" className="text-gray-500 hover:text-nr-teal px-3 py-2 text-sm font-medium transition-colors">Enterprise</a>
                <a href="#" className="text-gray-500 hover:text-nr-teal px-3 py-2 text-sm font-medium transition-colors">Docs</a>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-xs text-gray-400 font-medium hidden lg:inline">v0.1.0 Beta</span>
              <Button variant="secondary" href="#">Sign In</Button>
              <Button href="#">Get Started</Button>
            </div>
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-nr-dark p-2"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-nr-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#platform" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nr-teal hover:bg-gray-50">Platform</a>
              <a href="#marketplace" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nr-teal hover:bg-gray-50">Marketplace</a>
              <a href="#enterprise" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nr-teal hover:bg-gray-50">Enterprise</a>
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
                <Button variant="secondary" className="w-full" href="#">Sign In</Button>
                <Button className="w-full" href="#">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden mesh-bg text-white pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-gradient-to-br from-nr-darker via-nr-darker to-teal-900/20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wide mb-6">
                <Activity className="h-3 w-3 mr-2 animate-pulse" />
                Public Beta Live
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
                The open fabric for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">autonomous agents</span>.
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Run intelligent agents on a distributed global swarm. Earn credits by contributing compute. Scale infinitely without managing infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="h-12 px-8 text-lg" icon={ArrowRight} href="#">Start Building Agents</Button>
                <Button variant="outline" className="h-12 px-8 text-lg" icon={Smartphone} href="#">Download Hive App</Button>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-400" /> Enterprise-grade Security
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-teal-400" /> WASM Sandboxed
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-teal-400" /> Global Distribution
                </div>
              </div>
            </div>
            
            {/* Abstract visual of the Swarm */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-nr-dark/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-2xl">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div className="text-sm font-mono text-gray-400">agent-fabric-runtime</div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center text-gray-300">
                    <span> initializing_swarm...</span>
                    <span className="text-teal-400">OK</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span> connecting_nodes(14,203)</span>
                    <span className="text-teal-400">CONNECTED</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span> deploying_agent: market-watcher-v2</span>
                    <span className="text-yellow-400">PENDING</span>
                  </div>
                  <div className="p-3 bg-black/30 rounded border-l-2 border-teal-500 mt-4">
                    <div className="text-gray-500 mb-1">Step 1: Fork Execution</div>
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-1.5 bg-teal-500/40 rounded-full animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
                      ))}
                    </div>
                  </div>
                   <div className="p-3 bg-black/30 rounded border-l-2 border-purple-500">
                    <div className="text-gray-500 mb-1">Step 2: Join & Aggregate</div>
                     <div className="w-full h-1.5 bg-purple-500/40 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Stack / Architecture Section */}
      <section id="platform" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-16 z-20">
        <ArchitectureLayer 
          name="Hive"
          role="The App"
          icon={Smartphone}
          colorClass="bg-gradient-to-br from-teal-500 to-teal-700"
          description="The consumer-facing mobile app that turns millions of idle devices into a powerful distributed compute swarm."
          features={[
            "Earn credits for idle compute",
            "Battery-aware scheduling",
            "Zero configuration required",
            "Available on iOS and Android"
          ]}
        />
        
        <ArchitectureLayer 
          name="HiveFabric"
          role="The Platform"
          icon={Layers}
          colorClass="bg-gradient-to-br from-slate-700 to-slate-900"
          description="The cloud control plane that orchestrates agents, manages economics, and guarantees enterprise-grade auditability."
          features={[
            "Kubernetes-based orchestration",
            "Agent marketplace & registry",
            "Token-based economics",
            "Full execution audit logs"
          ]}
        />
        
        <ArchitectureLayer 
          name="AgentFabric"
          role="The Runtime"
          icon={Terminal}
          colorClass="bg-gradient-to-br from-indigo-600 to-indigo-800"
          description="The standardized execution specification ensuring agents run securely, deterministically, and consistently anywhere."
          features={[
            "WASM-first sandboxing",
            "Fork-join DAG execution",
            "Strict resource capping",
            "Cross-platform compatibility"
          ]}
        />
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white border-t border-nr-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Distributed Intelligence" 
            subtitle="Why run your agents on the HiveFabric?" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Cpu}
              title="Distributed Compute"
              description="Leverage a global network of phones and cloud nodes. Execute tasks closer to data sources at a fraction of cloud costs."
              badges={['Cost Efficient', 'Low Latency']}
            />
             <FeatureCard 
              icon={Shield}
              title="Secure Sandboxing"
              description="All agents execute within strict AgentFabric WASM boundaries. No secrets leak, no resource overruns, strict isolation."
              badges={['Zero Trust', 'Memory Safe']}
            />
             <FeatureCard 
              icon={Activity}
              title="Fork-Join Reliability"
              description="Agents are DAGs, not loops. Tasks are forked across the swarm and results are cryptographically verified upon joining."
              badges={['Deterministic', 'Resilient']}
            />
             <FeatureCard 
              icon={Zap}
              title="Autonomous Markets"
              description="Agents pay for compute with tokens. Nodes earn tokens for work. An automated, fair economy driven by supply and demand."
              badges={['Tokenomics', 'Incentivized']}
            />
             <FeatureCard 
              icon={Globe}
              title="Open Marketplace"
              description="Discover pre-built agents for market research, data scraping, and personal automation. Configurable and verified."
              badges={['Plug & Play', 'Verified']}
            />
             <FeatureCard 
              icon={Code}
              title="Developer First"
              description="Define agents in simple YAML. Use standard MCP (Model Context Protocol) servers. Deploy with a git push."
              badges={['YAML', 'MCP Support']}
            />
          </div>
        </div>
      </section>

      {/* Use Cases / Marketplace Preview */}
      <section id="marketplace" className="py-24 bg-nr-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="What can Agents do?" 
            subtitle="From personal automation to enterprise intelligence."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 border border-nr-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-2">Personal Automation</div>
                <h3 className="text-2xl font-bold text-nr-dark mb-4">Tariff & Market Watcher</h3>
                <p className="text-gray-600 mb-6">
                  An agent that wakes up daily, scrapes energy prices from 5 different providers using distributed nodes to avoid IP bans, calculates the best rate for your usage profile, and pushes a notification.
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-100 font-mono text-xs text-gray-500">
                  <div>agent: tariff-optimizer</div>
                  <div className="text-teal-600">running_on: 12_nodes</div>
                  <div>cost: 0.04 credits/day</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                 <Button variant="ghost" className="pl-0" href="#">View in Marketplace &rarr;</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-nr-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Enterprise Ops</div>
                <h3 className="text-2xl font-bold text-nr-dark mb-4">Infrastructure Scout</h3>
                <p className="text-gray-600 mb-6">
                  Periodically forks tasks to ping your public endpoints from 50+ global residential IPs (via Hive phones) to verify latency and uptime from a real-user perspective.
                </p>
                 <div className="bg-gray-50 p-4 rounded border border-gray-100 font-mono text-xs text-gray-500">
                  <div>agent: latency-scout</div>
                  <div className="text-indigo-600">running_on: 50_nodes</div>
                  <div>cost: 1.2 credits/run</div>
                </div>
              </div>
               <div className="mt-6 pt-6 border-t border-gray-100">
                 <Button variant="ghost" className="pl-0" href="#">View in Marketplace &rarr;</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section id="enterprise" className="py-24 bg-nr-dark text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Built for the Enterprise.</h2>
              <p className="text-lg text-gray-300 mb-8">
                HiveFabric isn't just a public swarm. Deploy the control plane into your own VPC. Bring your own nodes. Manage strict compliance and data residency policies.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-900 flex items-center justify-center border border-teal-700 mt-0.5">
                    <Shield className="h-3 w-3 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Private Agent Registry</h4>
                    <p className="text-gray-400 text-sm">Host proprietary agents that never leave your infrastructure.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-900 flex items-center justify-center border border-teal-700 mt-0.5">
                    <Layers className="h-3 w-3 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Custom MCP Integrations</h4>
                    <p className="text-gray-400 text-sm">Connect agents securely to your internal databases and APIs via Model Context Protocol.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-900 flex items-center justify-center border border-teal-700 mt-0.5">
                    <Activity className="h-3 w-3 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Full Audit Trails</h4>
                    <p className="text-gray-400 text-sm">Every execution step, input, and output is cryptographically logged.</p>
                  </div>
                </li>
              </ul>
              
              <Button href="#">Contact Sales</Button>
            </div>
            
            <div className="mt-12 lg:mt-0 bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md">
              <div className="text-sm font-mono text-gray-400 mb-4 border-b border-white/10 pb-2">
                policy: corporate-compliance.yaml
              </div>
              <pre className="font-mono text-sm text-teal-300 overflow-x-auto">
{`apiVersion: hive.fabric/v1
kind: AgentPolicy
metadata:
  name: eu-data-residency
spec:
  enforcement: strict
  constraints:
    - type: geo_location
      allowed: ["eu-central", "eu-west"]
    - type: network_egress
      allowed_cidrs: ["10.0.0.0/8"]
    - type: storage
      encryption: true
  audit:
    destination: splunk-forwarder`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-nr-dark mb-6">Ready to join the collective?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Whether you want to earn from your idle device or orchestrate a massive fleet of agents, HiveFabric is the open standard.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="h-14 px-10 text-lg" href="#">Get Early Access</Button>
            <Button variant="secondary" className="h-14 px-10 text-lg" href="#">Read the Docs</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nr-gray border-t border-nr-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Hive App</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">HiveFabric Cloud</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">AgentFabric Runtime</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">API Reference</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">AgentFabric Spec</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Contact</a></li>
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-nr-teal text-sm">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
               <Box className="h-6 w-6 text-gray-400" />
               <span className="text-gray-500 font-medium text-sm">© 2024 HiveFabric. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              {/* Social placeholders */}
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <Code className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}