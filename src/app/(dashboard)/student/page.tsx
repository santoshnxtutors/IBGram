"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ClientChart } from "@/components/dashboard/ClientChart";
import { ArrowRight, BookOpen, Clock, Calendar as CalendarIcon, Target, Trophy, Flame } from "lucide-react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const radarData = [
  { subject: 'Algebra', A: 120, fullMark: 150 },
  { subject: 'Calculus', A: 98, fullMark: 150 },
  { subject: 'Statistics', A: 86, fullMark: 150 },
  { subject: 'Geometry', A: 99, fullMark: 150 },
  { subject: 'Trigonometry', A: 85, fullMark: 150 },
  { subject: 'Vectors', A: 65, fullMark: 150 },
];

const lineData = [
  { name: 'Mock 1', score: 32 },
  { name: 'Mock 2', score: 35 },
  { name: 'Mock 3', score: 34 },
  { name: 'Mock 4', score: 38 },
  { name: 'Target', score: 42 },
];

export default function StudentDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah! 👋</h1>
          <p className="text-muted-foreground mt-1">You are consistently improving. Keep up the momentum!</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-10 bg-background shadow-sm hover:text-primary">
            <BookOpen className="ml-0 mr-2 size-4" /> View Syllabus
          </Button>
          <Button className="h-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
            <Target className="ml-0 mr-2 size-4" /> Start AI Test
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-background/60 backdrop-blur-md shadow-sm border-border/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-muted-foreground text-sm">Predicted Grade</h3>
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Trophy className="size-4" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">38 <span className="text-muted-foreground text-lg font-medium">/ 45</span></div>
            <p className="text-xs text-primary font-medium flex items-center">
              +2 points since last term
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/60 backdrop-blur-md shadow-sm border-border/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-muted-foreground text-sm">Current Streak</h3>
              <div className="size-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Flame className="size-4" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">12 <span className="text-muted-foreground text-lg font-medium">Days</span></div>
            <p className="text-xs text-secondary font-medium">
              4 days left for new badge!
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/60 backdrop-blur-md shadow-sm border-border/50 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-muted-foreground text-sm">Weekly Syllabus Progress</h3>
              <span className="text-sm font-bold">68%</span>
            </div>
            <Progress value={68} className="h-2 mb-2 bg-muted/60" />
            <p className="text-xs text-muted-foreground">
              You've completed 5 out of 8 modules scheduled for this week.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-sm border-border/50">
            <CardHeader>
              <CardTitle>IB Score Trajectory</CardTitle>
              <CardDescription>Your mock test performance against target baseline</CardDescription>
            </CardHeader>
            <CardContent>
              <ClientChart>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted-foreground)/0.2)" />
                    <XAxis dataKey="name" tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} axisLine={false} tickLine={false} />
                    <YAxis domain={[24, 45]} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={3} dot={{r: 6, fill: 'hsl(var(--background))', strokeWidth: 2}} activeDot={{r: 8}} />
                  </LineChart>
                </ResponsiveContainer>
              </ClientChart>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Weak-Topic Radar (Math HL)</CardTitle>
                <CardDescription>AI Diagnostic Breakdown</CardDescription>
              </div>
              <Button variant="outline" size="sm">Retake AI Diagnostic</Button>
            </CardHeader>
            <CardContent>
              <ClientChart>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="hsl(var(--muted-foreground)/0.3)" />
                    <PolarAngleAxis dataKey="subject" tick={{fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 500}} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar name="Proficiency" dataKey="A" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.4} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </ClientChart>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="shadow-sm border-border/50 overflow-hidden">
            <div className="h-2 w-full bg-primary" />
            <CardHeader>
              <CardTitle>Today's Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-primary/20 text-primary rounded-full">1:1 Session</span>
                  <span className="text-xs font-semibold text-muted-foreground flex items-center"><Clock className="size-3 mr-1" /> 16:00 (1hr)</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Calculus Foundations</h4>
                <p className="text-sm text-muted-foreground line-clamp-1">With Dr. Sarah M.</p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-secondary/20 text-secondary rounded-full">Self Study</span>
                  <span className="text-xs font-semibold text-muted-foreground flex items-center"><Clock className="size-3 mr-1" /> 18:30 (45m)</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Vector AI Mini-Test</h4>
                <p className="text-sm text-muted-foreground opacity-80">Recommended by Planner</p>
              </div>

              <Button className="w-full h-12 mt-4" variant="outline">
                <CalendarIcon className="mr-2 size-4" /> View Full Week
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-border/50 bg-gradient-to-br from-background to-secondary/5">
            <CardHeader>
              <CardTitle>Needs Attention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-center p-3 rounded-lg hover:bg-background transition-colors cursor-pointer border border-transparent hover:border-border">
                <div className="size-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
                  <BookOpen className="size-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">Overdue Assignment</h4>
                  <p className="text-xs text-muted-foreground">Physics HL Past Paper 2</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
