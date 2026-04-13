"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Users, Clock, Calendar as CalendarIcon, Wallet, Star, AlertCircle, Video } from "lucide-react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const radarData = [
  { subject: 'Algebra Cohort', A: 130, fullMark: 150 },
  { subject: 'Calculus Cohort', A: 85, fullMark: 150 },
  { subject: 'Statistics Cohort', A: 110, fullMark: 150 },
  { subject: 'Geometry Cohort', A: 95, fullMark: 150 },
  { subject: 'Mock Exams (All)', A: 140, fullMark: 150 },
  { subject: 'Internal Assessments', A: 75, fullMark: 150 },
];

const revenueData = [
  { month: 'Jan', revenue: 2100 },
  { month: 'Feb', revenue: 2800 },
  { month: 'Mar', revenue: 2600 },
  { month: 'Apr', revenue: 3400 },
  { month: 'May', revenue: 3800 },
  { month: 'Jun', revenue: 4250 },
];

export default function TutorDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header & Quick Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Dr. Alex! 👨‍🏫</h1>
          <p className="text-muted-foreground mt-1">Your students are thriving. You have 3 classes scheduled today.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-10 bg-background shadow-sm hover:text-primary">
            <CalendarIcon className="ml-0 mr-2 size-4" /> Manage Schedule
          </Button>
          <Button className="h-10 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-sm shimmer-btn">
            <Video className="ml-0 mr-2 size-4" /> Start Next Class
          </Button>
        </div>
      </div>

      {/* KPI Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-background/60 backdrop-blur-md shadow-sm border-border/50 transition-all hover:bg-muted/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-muted-foreground text-sm">Active Students</h3>
              <div className="size-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Users className="size-4" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">24</div>
            <p className="text-xs text-blue-500 font-medium flex items-center">
              +3 new this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/60 backdrop-blur-md shadow-sm border-border/50 transition-all hover:bg-muted/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-muted-foreground text-sm">Hours Taught (Weekly)</h3>
              <div className="size-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Clock className="size-4" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">18.5 <span className="text-muted-foreground text-lg font-medium">hrs</span></div>
            <p className="text-xs text-purple-500 font-medium">
              Top 5% of tutors globally
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/60 backdrop-blur-md shadow-sm border-border/50 transition-all hover:bg-muted/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-muted-foreground text-sm">Average Rating</h3>
              <div className="size-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Star className="size-4 fill-secondary" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">4.9 <span className="text-muted-foreground text-lg font-medium">/ 5.0</span></div>
            <p className="text-xs text-secondary font-medium">
              Based on 142 reviews
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/60 backdrop-blur-md shadow-sm border-border/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-muted-foreground text-sm">Earnings This Month</h3>
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Wallet className="size-4" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">$4,250</div>
            <p className="text-xs text-primary font-medium flex items-center">
              +12% vs last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Col (2 spans): Charts */}
        <div className="lg:col-span-2 space-y-8">
          
          <Card className="shadow-sm border-border/50 bg-background/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Revenue & Engagement Trajectory</CardTitle>
                <CardDescription>Monthly earnings derived from your active IB cohorts</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted-foreground)/0.1)" />
                    <XAxis dataKey="month" tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={(val) => `$${val}`} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '12px', color: 'hsl(var(--foreground))' }}
                      itemStyle={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-border/50 bg-background/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Cohort Weakness Radar</CardTitle>
                <CardDescription>AI aggregate of recent student mock tests (Math HL)</CardDescription>
              </div>
              <Button variant="outline" size="sm">Generate Remedial Material</Button>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="hsl(var(--muted-foreground)/0.2)" />
                    <PolarAngleAxis dataKey="subject" tick={{fill: 'hsl(var(--foreground))', fontSize: 11, fontWeight: 600}} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar name="Aggregated Struggles" dataKey="A" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.3} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '12px' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right Col (1 span): Schedule & Alerts */}
        <div className="space-y-8">
          
          <Card className="shadow-sm border-border/50 border-t-4 border-t-secondary overflow-hidden bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              
              <div className="p-4 rounded-xl border border-secondary/30 bg-secondary/10 cursor-pointer transition-all hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-full flex items-center">
                    <Video className="size-3 mr-1" /> Live Class
                  </span>
                  <span className="text-xs font-semibold text-secondary-foreground flex items-center"><Clock className="size-3 mr-1" /> IN 10 MINS</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Calculus Foundations</h4>
                <p className="text-sm text-muted-foreground line-clamp-1">Group Session (5 Students)</p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-muted/40 cursor-pointer hover:bg-muted/60 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-primary/20 text-primary-foreground rounded-full">1:1 Tutoring</span>
                  <span className="text-xs font-semibold text-muted-foreground flex items-center"><Clock className="size-3 mr-1" /> 16:30 (1hr)</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">IA Draft Review</h4>
                <p className="text-sm text-muted-foreground opacity-80">Student: Marcus L.</p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-muted/40 cursor-pointer hover:bg-muted/60 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-primary/20 text-primary-foreground rounded-full">1:1 Tutoring</span>
                  <span className="text-xs font-semibold text-muted-foreground flex items-center"><Clock className="size-3 mr-1" /> 18:00 (1.5hr)</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Vectors Sprint</h4>
                <p className="text-sm text-muted-foreground opacity-80">Student: Emily R.</p>
              </div>

              <Button className="w-full h-12 mt-4" variant="outline">
                <CalendarIcon className="mr-2 size-4" /> View Full Roster
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-border/50 border-t-4 border-t-destructive bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>AI Insights & Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border">
                <div className="size-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0 mt-1">
                  <AlertCircle className="size-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">At Risk: Emily R.</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Failed mock test #4 (Vectors). AI recommends sending remedial worksheet before next class.</p>
                  <Button variant="link" className="px-0 h-auto text-xs text-primary mt-1">Generate Worksheet</Button>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border">
                <div className="size-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-1">
                  <Star className="size-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">Ready for Challenge</h4>
                  <p className="text-xs text-muted-foreground mt-1">Marcus L. has scored 95%+ in Calculus for 3 weeks. Ready to advance to HL Topic 6.</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
