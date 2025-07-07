import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";
import { ExternalLink, Mail, GraduationCap, Code2, BookOpen, Linkedin, Sparkles, Star, Heart, Zap } from "lucide-react";

import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Divtech",
    icons: {
        icon: "/divtech/logo.png",
    },
};

export default function DivtechPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-40 h-40 rounded-full bg-gradient-to-br from-pink-200/20 to-purple-200/20 dark:from-pink-900/10 dark:to-purple-900/10 animate-pulse"></div>
        <div className="absolute top-64 right-32 w-28 h-28 rounded-full bg-gradient-to-br from-yellow-200/20 to-orange-200/20 dark:from-yellow-900/10 dark:to-orange-900/10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-purple-200/20 to-indigo-200/20 dark:from-purple-900/10 dark:to-indigo-900/10 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200/20 to-yellow-200/20 dark:from-pink-900/10 dark:to-yellow-900/10 animate-pulse delay-3000"></div>
      </div>

      {/* Header with theme toggle */}
      <header className="flex justify-end p-4 relative z-10">
        <ModeToggle />
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Hero section */}
        <section className="text-center mb-20">
          <div className="mb-8">
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-xl  flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300 border border-pink-500 dark:border-pink-500" style={{ borderWidth: 1 }}>
                <Image
                  src="/divtech/logo.png"
                  alt="Divtech Logo"
                  width={96}
                  height={96}
                  className="rounded-lg"
                  priority
                />
              </div>
              <div className="text-left">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-2">
                  <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-yellow-500 bg-clip-text text-transparent">
                    Divtech
                  </span>{" "}
                  <span className="text-foreground">Development Inc.</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Software Engineering & Tutoring Services
                </p>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Specializing in innovative software solutions and comprehensive educational support 
              for students and professionals in technology. Building the future, one line of code at a time.
            </p>
            
            <div className="flex justify-center">
              <Button 
                asChild 
                size="lg"
                className="font-semibold px-8 py-4 text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <a
                  href="mailto:divtechdevelopment@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  divtechdevelopment@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services{" "}
            <Sparkles className="inline h-8 w-8" style={{color: '#ddc33b'}} />
          </h2>
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Displayto */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gradient-to-r from-pink-200 to-purple-200 overflow-hidden">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <Image
                    src="/divtech/displayto.png"
                    alt="Displayto Platform Preview"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-800 dark:text-purple-200">
                    Coming Soon! 🚀
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Code2 className="h-4 w-4 text-white" />
                  </div>
                  Displayto
                </CardTitle>
                <CardDescription>
                  <a 
                    href="https://www.displayto.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:underline flex items-center gap-1 font-semibold"
                  >
                    www.displayto.com
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  An innovative online portfolio platform designed specifically for programmers 
                  to showcase their programming projects in a beautiful, interactive way.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-600 dark:text-pink-400">Portfolio</Badge>
                  <Badge variant="outline" className="border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400">Showcase</Badge>
                  <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-600 dark:text-pink-400">Interactive</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Features include project galleries, code snippets, live demos, and professional 
                  templates to help developers stand out to employers and clients.
                </p>
              </CardContent>
            </Card>

            {/* Tutoring */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gradient-to-r from-yellow-200 to-orange-200 overflow-hidden">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 flex items-center justify-center">
                  <Image
                    src="/divtech/tutoring.png"
                    alt="Tutoring Services Preview"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="text-xs font-bold bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                    Available Now! ✨
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  Tutoring & Teaching
                </CardTitle>
                <CardDescription className="font-semibold text-yellow-600">
                  Personalized Learning Experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comprehensive tutoring services for Math, Calculus, Pre-Calc, Physics & Chemistry. 
                  Expert instruction with proven results.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-yellow-300 text-yellow-600">Mathematics</Badge>
                  <Badge variant="outline" className="border-orange-300 text-orange-600">Calculus</Badge>
                  <Badge variant="outline" className="border-yellow-300 text-yellow-600">Physics</Badge>
                  <Badge variant="outline" className="border-orange-300 text-orange-600">Chemistry</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  One-on-one sessions, group classes, and online tutoring available. 
                  Flexible scheduling and customized learning plans for every student.
                </p>
              </CardContent>
            </Card>

            {/* Software Engineering */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gradient-to-r from-purple-200 to-indigo-200 overflow-hidden">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 flex items-center justify-center">
                  <Image
                    src="/divtech/swe.png"
                    alt="Software Engineering Preview"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    Expert Level! 🏆
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  Software Engineering
                </CardTitle>
                <CardDescription>
                  <a 
                    href="https://linkedin.com/in/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  5+ years of programming experience, specializing in architecting, building, 
                  and deploying scalable software solutions for modern businesses.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-300 text-purple-600">Go</Badge>
                  <Badge variant="outline" className="border-indigo-300 text-indigo-600">C++</Badge>
                  <Badge variant="outline" className="border-purple-300 text-purple-600">TypeScript</Badge>
                  <Badge variant="outline" className="border-indigo-300 text-indigo-600">Python</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Full-stack development, system architecture, cloud deployment, and technical 
                  leadership for projects of all sizes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technologies section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technologies & Expertise{" "}
            <Zap className="inline h-8 w-8 text-yellow-500" />
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-600 dark:text-pink-400">React</Badge>
                  <Badge variant="outline" className="border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400">Next.js</Badge>
                  <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-600 dark:text-pink-400">TypeScript</Badge>
                  <Badge variant="outline" className="border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400">Tailwind</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-yellow-300 text-yellow-600">Go</Badge>
                  <Badge variant="outline" className="border-orange-300 text-orange-600">Python</Badge>
                  <Badge variant="outline" className="border-yellow-300 text-yellow-600">Node.js</Badge>
                  <Badge variant="outline" className="border-orange-300 text-orange-600">C++</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-purple-300 text-purple-600">PostgreSQL</Badge>
                  <Badge variant="outline" className="border-indigo-300 text-indigo-600">MongoDB</Badge>
                  <Badge variant="outline" className="border-purple-300 text-purple-600">Redis</Badge>
                  <Badge variant="outline" className="border-indigo-300 text-indigo-600">SQLite</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-br from-pink-50 to-yellow-50 dark:from-pink-950/20 dark:to-yellow-950/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-600 dark:text-pink-400">Docker</Badge>
                  <Badge variant="outline" className="border-yellow-300 dark:border-yellow-700 text-yellow-600 dark:text-yellow-400">AWS</Badge>
                  <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-600 dark:text-pink-400">Git</Badge>
                  <Badge variant="outline" className="border-yellow-300 dark:border-yellow-700 text-yellow-600 dark:text-yellow-400">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-yellow-900/20 rounded-3xl p-8 border-2 border-pink-200 dark:border-pink-800">
            <h2 className="text-3xl font-bold text-center mb-10">
              Our Impact{" "}
              <Heart className="inline h-6 w-6 text-pink-600 dark:text-pink-400" />
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">100+</div>
                <div className="text-muted-foreground">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-pink-50 via-purple-50 to-yellow-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-yellow-900/20 border-2 border-pink-200 dark:border-pink-800 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-4xl mb-4">
                Ready to Get Started?{" "}
                <Sparkles className="inline h-8 w-8 text-yellow-500" />
              </CardTitle>
              <CardDescription className="text-xl">
                Whether you need software development services or tutoring support, 
                we're here to help you achieve your goals and exceed your expectations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="font-semibold px-8 py-4 text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <a
                    href="mailto:divtechdevelopment@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="font-semibold px-8 py-4 text-lg border-purple-300 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <a
                    href="https://www.divtechdevelopmentinc.ca/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Preview Displayto
                  </a>
                </Button>
                
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-10 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="text-lg font-semibold">Divtech Development Inc.</span>
          </div>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Divtech Development Inc. Made with{" "}
            <Heart className="h-4 w-4 text-pink-500 dark:text-pink-400" />{" "}
            and lots of{" "}
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </p>
        </div>
      </footer>
    </div>
  );
}
