import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";
import { ExternalLink, User, GraduationCap, Code, Mail, Sparkles, ArrowRight, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Moeez
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-sm font-medium hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section - Full height with split design */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left side - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for new opportunities
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Building the{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                    future
                  </span>{" "}
                  one line at a time
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I'm <span className="font-semibold text-foreground">Moeez</span>, a Computer Science student at 
                  McMaster University. I craft digital experiences, teach programming, and solve complex problems 
                  through code.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 px-4 py-2 text-sm">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  McMaster CS
                </Badge>
                <Badge className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800 px-4 py-2 text-sm">
                  <Code className="h-4 w-4 mr-2" />
                  Full-Stack Developer
                </Badge>
                <Badge className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800 px-4 py-2 text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Programming Tutor
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="https://moeezs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View My Portfolio
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="border-2 border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg transition-all duration-300"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Let's Connect
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - 5 columns with stacked cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 lg:h-[600px]">
                {/* Background gradient blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-teal-50/30 to-blue-50/30 dark:from-blue-900/20 dark:via-teal-900/20 dark:to-blue-900/20 rounded-3xl opacity-50 transform rotate-3"></div>
                
                {/* Stacked floating cards with proper spacing */}
                <div className="absolute top-4 left-4 right-4 z-30">
                  <Card className="transform hover:scale-105 transition-all duration-300 shadow-xl bg-background/95 backdrop-blur border-blue-200 dark:border-blue-800">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                          <Code className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">Software Development</h3>
                          <p className="text-xs text-muted-foreground">Modern web applications</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-xs">React</span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-xs">TypeScript</span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-xs">Node.js</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute top-36 left-0 right-8 z-20">
                  <Card className="transform hover:scale-105 transition-all duration-300 shadow-xl bg-background/95 backdrop-blur border-teal-200 dark:border-teal-800">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center">
                          <GraduationCap className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">Education & Tutoring</h3>
                          <p className="text-xs text-muted-foreground">Teaching programming concepts</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded text-xs">Mathematics</span>
                        <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded text-xs">Computer Science</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute bottom-4 left-8 right-0 z-10">
                  <Card className="transform hover:scale-105 transition-all duration-300 shadow-xl bg-background/95 backdrop-blur border-blue-200 dark:border-blue-800">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                          <Sparkles className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">Personal Portfolio</h3>
                          <p className="text-xs text-muted-foreground">Showcasing my work and projects</p>
                        </div>
                      </div>
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      >
                        <a href="https://moeezs.com" className="flex items-center gap-2">
                          View
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-blue-950/30 dark:to-teal-950/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology, education, and building solutions that matter
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Developer</h3>
              <p className="text-muted-foreground">
                Building full-stack applications with modern technologies and best practices.
              </p>
            </Card>
            
            <Card className="text-center p-8 border-teal-200 dark:border-teal-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Educator</h3>
              <p className="text-muted-foreground">
                Teaching programming and mathematics to help students achieve their goals.
              </p>
            </Card>
            
            <Card className="text-center p-8 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Problem Solver</h3>
              <p className="text-muted-foreground">
                Analyzing complex challenges and creating innovative technical solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with regularly
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "React", color: "blue" },
              { name: "TypeScript", color: "teal" },
              { name: "Next.js", color: "blue" },
              { name: "Node.js", color: "teal" },
              { name: "Python", color: "blue" },
              { name: "PostgreSQL", color: "teal" },
              { name: "AWS", color: "blue" },
              { name: "Docker", color: "teal" },
              { name: "Go", color: "blue" },
              { name: "MongoDB", color: "teal" }
            ].map((skill, index) => (
              <Card 
                key={skill.name} 
                className={`text-center p-6 border-${skill.color}-200 dark:border-${skill.color}-800 hover:border-${skill.color}-300 dark:hover:border-${skill.color}-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <div className="text-lg font-semibold">{skill.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-teal-50/50 to-blue-50/50 dark:from-teal-950/30 dark:to-blue-950/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Some of my work and side projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <Card className="overflow-hidden border-teal-200 dark:border-teal-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-400 flex items-center justify-center">
                <ExternalLink className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Portfolio Website</h3>
                <p className="text-muted-foreground mb-4">
                  My comprehensive portfolio showcasing projects, experience, and technical skills 
                  in web development.
                </p>
                <Button asChild variant="outline" className="border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20">
                  <a 
                    href="https://moeezs.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Visit Portfolio
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you're looking for development work, tutoring services, or just want to chat 
            about technology, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://moeezs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                View Full Portfolio
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg transition-all duration-300"
            >
              <a
                href="mailto:abdulmoeezshaikh@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Moeez. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
