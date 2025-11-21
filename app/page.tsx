"use client";

import { RelunaButton } from "@/components/reluna-button";
import { RelunaCard } from "@/components/reluna-card";
import { RelunaBadge } from "@/components/reluna-badge";
import { RelunaInput } from "@/components/reluna-input";
import { useRouter } from "next/navigation";
import { 
  Box, Palette, Zap, Shield, 
  Users, FileText, Calendar, Vote,
  Plus, Settings, Bell, Mail,
  ChevronRight, Check
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <RelunaBadge color="primary" variant="flat">
                Family Governance
              </RelunaBadge>
            </div>

            <h1 className="text-5xl font-bold mb-6 text-foreground leading-tight">
              Build your family governance platform
            </h1>
            <p className="text-xl text-foreground-600 mb-8 max-w-2xl mx-auto">
              A collection of beautifully designed, accessible components for family
              governance portals. Manage family members, documents, meetings, and
              voting with ease.
            </p>

            <div className="flex gap-4 justify-center">
              <RelunaButton
                color="primary"
                variant="solid"
                size="lg"
                onClick={() => router.push("/docs/components")}
              >
                Browse Components
              </RelunaButton>
              <RelunaButton
                variant="bordered"
                size="lg"
                onClick={() => router.push("/docs/themes")}
              >
                View Themes
              </RelunaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Components Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          
          {/* Family Member Card */}
          <RelunaCard variant="bordered">
            <RelunaCard.Header>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Add Family Member</h3>
                  <p className="text-sm text-foreground-500">
                    Invite a new member to your family portal
                  </p>
                </div>
              </div>
            </RelunaCard.Header>
            <RelunaCard.Body>
              <div className="space-y-4">
                <RelunaInput
                  label="Full Name"
                  placeholder="Enter full name"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                  size="md"
                />
                <RelunaInput
                  label="Email Address"
                  placeholder="name@family.com"
                  value={memberEmail}
                  onChange={(e) => setMemberEmail(e.target.value)}
                  size="md"
                />
                <RelunaButton
                  color="primary"
                  variant="solid"
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Send Invitation
                </RelunaButton>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

          {/* Governance Document Card */}
          <RelunaCard variant="bordered">
            <RelunaCard.Header>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Family Constitution</h3>
                  <p className="text-sm text-foreground-500">
                    Core governance document status
                  </p>
                </div>
              </div>
            </RelunaCard.Header>
            <RelunaCard.Body>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Progress</span>
                  <RelunaBadge color="success" variant="flat">75% Complete</RelunaBadge>
                </div>
                <div className="h-2 bg-content2 rounded-full overflow-hidden">
                  <div className="h-full bg-success w-3/4 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-success" />
                    <span>Preamble & Values</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-success" />
                    <span>Governance Structure</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground-500">
                    <div className="h-4 w-4 border-2 border-foreground-300 rounded" />
                    <span>Decision-Making Process</span>
                  </div>
                </div>
                <RelunaButton
                  variant="bordered"
                  className="w-full"
                >
                  Continue Editing
                </RelunaButton>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

          {/* Voting Card */}
          <RelunaCard variant="bordered">
            <RelunaCard.Header>
              <div className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Active Voting</h3>
                  <p className="text-sm text-foreground-500">
                    Current family decisions
                  </p>
                </div>
              </div>
            </RelunaCard.Header>
            <RelunaCard.Body>
              <div className="space-y-4">
                <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Annual Budget Allocation</span>
                    <RelunaBadge color="warning" variant="flat">Pending</RelunaBadge>
                  </div>
                  <div className="text-xs text-foreground-500 mb-2">
                    Deadline: 2 days remaining
                  </div>
                  <div className="flex gap-2">
                    <RelunaButton color="success" variant="flat" size="sm" className="flex-1">
                      Approve
                    </RelunaButton>
                    <RelunaButton color="danger" variant="flat" size="sm" className="flex-1">
                      Reject
                    </RelunaButton>
                  </div>
                </div>
                <div className="text-sm text-foreground-600">
                  <div className="flex justify-between mb-1">
                    <span>Participation</span>
                    <span className="font-medium">4/6 votes</span>
                  </div>
                  <div className="h-1.5 bg-content2 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '67%' }} />
                  </div>
                </div>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

          {/* Meetings Calendar */}
          <RelunaCard variant="bordered">
            <RelunaCard.Header>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Upcoming Meetings</h3>
                  <p className="text-sm text-foreground-500">
                    Family council schedule
                  </p>
                </div>
              </div>
            </RelunaCard.Header>
            <RelunaCard.Body>
              <div className="space-y-3">
                <div className="flex gap-3 p-2 hover:bg-content2 rounded-lg cursor-pointer">
                  <div className="flex flex-col items-center justify-center bg-primary/10 text-primary rounded-lg p-2 min-w-[50px]">
                    <div className="text-xs">Nov</div>
                    <div className="text-xl font-bold">25</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Quarterly Review</div>
                    <div className="text-xs text-foreground-500">2:00 PM - 4:00 PM</div>
                    <div className="flex gap-1 mt-1">
                      <RelunaBadge color="primary" variant="dot" size="sm">Virtual</RelunaBadge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 p-2 hover:bg-content2 rounded-lg cursor-pointer">
                  <div className="flex flex-col items-center justify-center bg-content2 text-foreground rounded-lg p-2 min-w-[50px]">
                    <div className="text-xs">Dec</div>
                    <div className="text-xl font-bold">10</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Annual Planning</div>
                    <div className="text-xs text-foreground-500">10:00 AM - 12:00 PM</div>
                    <div className="flex gap-1 mt-1">
                      <RelunaBadge color="secondary" variant="dot" size="sm">In-Person</RelunaBadge>
                    </div>
                  </div>
                </div>
                <RelunaButton variant="light" className="w-full" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule New Meeting
                </RelunaButton>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

          {/* Active Members */}
          <RelunaCard variant="bordered">
            <RelunaCard.Header>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Active Members</h3>
                </div>
                <RelunaBadge color="success" variant="dot">6 Online</RelunaBadge>
              </div>
            </RelunaCard.Header>
            <RelunaCard.Body>
              <div className="space-y-3">
                {[
                  { name: "Eleanor Thompson", role: "Matriarch", status: "online" },
                  { name: "James Thompson", role: "Member", status: "online" },
                  { name: "Sarah Thompson", role: "Advisor", status: "away" },
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 hover:bg-content2 rounded-lg">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                        member.status === 'online' ? 'bg-success' : 'bg-warning'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{member.name}</div>
                      <div className="text-xs text-foreground-500">{member.role}</div>
                    </div>
                    <button className="p-1.5 hover:bg-content3 rounded">
                      <Mail className="h-4 w-4 text-foreground-500" />
                    </button>
                  </div>
                ))}
                <RelunaButton variant="light" className="w-full" size="sm">
                  View All Members
                  <ChevronRight className="h-4 w-4 ml-2" />
                </RelunaButton>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

          {/* Notifications */}
          <RelunaCard variant="bordered">
            <RelunaCard.Header>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Notifications</h3>
                  <p className="text-sm text-foreground-500">
                    Stay updated on family activities
                  </p>
                </div>
              </div>
            </RelunaCard.Header>
            <RelunaCard.Body>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-sm">Push Notifications</div>
                    <div className="text-xs text-foreground-500">Receive real-time updates</div>
                  </div>
                  <button
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notificationsEnabled ? 'bg-primary' : 'bg-content3'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="space-y-2 pt-2 border-t border-divider">
                  <div className="flex items-start gap-2 p-2 bg-primary/5 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    <div className="flex-1 text-sm">
                      <span className="font-medium">New document shared:</span>
                      <span className="text-foreground-600"> Q4 Financial Report</span>
                      <div className="text-xs text-foreground-500 mt-1">2 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 hover:bg-content2 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground-300 mt-1.5" />
                    <div className="flex-1 text-sm text-foreground-600">
                      Meeting reminder: Quarterly Review tomorrow at 2 PM
                      <div className="text-xs text-foreground-500 mt-1">5 hours ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12 bg-content1">
        <h2 className="text-2xl font-medium text-center mb-8">
          Built for Family Governance
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            { icon: Users, title: "Member Management", desc: "Organize family roles and permissions" },
            { icon: Shield, title: "Governance Framework", desc: "Structure decision-making processes" },
            { icon: FileText, title: "Document Center", desc: "Centralize family documents" },
            { icon: Vote, title: "Voting System", desc: "Democratic decision workflows" },
            { icon: Calendar, title: "Meeting Scheduler", desc: "Coordinate family gatherings" },
            { icon: Settings, title: "Customizable", desc: "Adapt to your family needs" },
          ].map((feature, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[140px] flex-col justify-between rounded-md p-6">
                <feature.icon className="h-8 w-8 text-primary" />
                <div className="space-y-1">
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Theme Preview */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-medium mb-2">Reluna Design System</h2>
          <p className="text-foreground-600">
            Consistent design tokens and theme across all portals
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-[#fb6428]" />
            <span className="text-sm font-medium">Primary</span>
            <span className="text-xs text-foreground-500">#fb6428</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-[#0ea5e9]" />
            <span className="text-sm font-medium">Secondary</span>
            <span className="text-xs text-foreground-500">#0ea5e9</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-medium">Success</span>
            <span className="text-xs text-foreground-500">#22c55e</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-[#f59e0b]" />
            <span className="text-sm font-medium">Warning</span>
            <span className="text-xs text-foreground-500">#f59e0b</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg text-foreground-600 mb-8">
            See all components in action with every variant, size, and state demonstrated.
          </p>
          <div className="flex gap-4 justify-center">
            <RelunaButton
              color="primary"
              variant="solid"
              size="lg"
              onClick={() => router.push("/docs/components")}
            >
              View Components →
            </RelunaButton>
            <RelunaButton
              variant="bordered"
              size="lg"
              onClick={() => router.push("/showcase-complete")}
            >
              Complete Showcase
            </RelunaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
