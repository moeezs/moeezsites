import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Marquee } from "@/components/magicui/marquee";
import {
  Mail,
  Phone,
  MapPin,
  Star,
  GraduationCap,
  Users,
  CheckCircle,
  Calendar,
  Target,
  Brain,
  TrendingUp,
  Download,
  Heart,
  Trophy,
  Globe,
  Crown
} from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Queen Elizabeth Tutoring",
    icons: {
        icon: "/divtech/logo.png",
    },
};

// Google Reviews Data
const googleReviews = [
  {
    name: "Sarah Chen",
    rating: 5,
    date: "2 weeks ago",
    review: "Amazing tutoring service! My daughter's math grades improved from 70% to 95% in just 3 months. The tutors are incredibly patient and knowledgeable.",
    avatar: "SC"
  },
  {
    name: "Michael Thompson",
    rating: 5,
    date: "1 month ago", 
    review: "QEA helped my son get into Queen's Commerce! The structured approach and personalized attention made all the difference. Highly recommend!",
    avatar: "MT"
  },
  {
    name: "Lisa Wang",
    rating: 5,
    date: "3 weeks ago",
    review: "Excellent physics tutoring. Chris explained complex concepts so clearly. My marks went from 68% to 88%. Worth every penny!",
    avatar: "LW"
  },
  {
    name: "David Rodriguez",
    rating: 5,
    date: "2 months ago",
    review: "The best investment we made for our daughter's education. She got accepted to Western Ivey with a $15,000 scholarship!",
    avatar: "DR"
  },
  {
    name: "Jennifer Kim",
    rating: 4,
    date: "1 week ago",
    review: "Great chemistry tutoring program. Very organized and the small class sizes allow for lots of individual attention.",
    avatar: "JK"
  },
  {
    name: "Robert Johnson",
    rating: 5,
    date: "3 months ago",
    review: "QEA's English program is outstanding. My son's writing skills improved dramatically and he aced his university applications.",
    avatar: "RJ"
  }
];

// Success Stories Data
const successStories = [
  {
    name: "Stephanie L.",
    achievement: "Top 15 in Canada - 95%",
    university: "Queen's Commerce",
    scholarship: "$23,000 Scholarship",
    quote: "QEA's foundation building approach made all the difference!"
  },
  {
    name: "Jerry T.", 
    achievement: "Admitted with 92% Average",
    university: "Queen's Commerce",
    scholarship: "$18,000 Scholarship",
    quote: "The step-by-step methodology really works!"
  },
  {
    name: "Taylor W.",
    achievement: "Pre-Med Program",
    university: "Western Medical Science",
    scholarship: "$12,000 Scholarship", 
    quote: "Amazing tutors who genuinely care about your success!"
  },
  {
    name: "Paul M.",
    achievement: "Engineering Program",
    university: "Queen's Engineering",
    scholarship: "$20,000 Scholarship",
    quote: "QEA helped me build confidence in math and physics!"
  },
  {
    name: "Melissa W.",
    achievement: "AEO Status",
    university: "Western Ivey",
    scholarship: "$15,000 Scholarship",
    quote: "Best tutoring experience ever! Highly recommend QEA."
  },
  {
    name: "Josh M.",
    achievement: "Art & Design",
    university: "OCAD University", 
    scholarship: "$8,000 Scholarship",
    quote: "QEA's English program prepared me perfectly for university!"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Stephanie L.",
    achievement: "Top 15 in Canada",
    university: "Queen's Commerce",
    quote: "QEA helped me achieve 95% and rank top 15 in Canada!",
    rating: 5
  },
  {
    name: "Jerry T.",
    achievement: "Admitted to Queen's Commerce",
    university: "Queen's University",
    quote: "The foundation QEA built helped me succeed in university.",
    rating: 5
  },
  {
    name: "Taylor W.",
    achievement: "Western Medical Science",
    university: "Western University",
    quote: "Amazing tutors who care about your success!",
    rating: 5
  },
  {
    name: "Sam A.",
    achievement: "Queen's Science Honours",
    university: "Queen's University",
    quote: "QEA's approach made complex concepts easy to understand.",
    rating: 5
  },
  {
    name: "Paul M.",
    achievement: "Queen's Engineering",
    university: "Queen's University",
    quote: "The step-by-step methodology really works!",
    rating: 5
  },
  {
    name: "Melissa W.",
    achievement: "Western Ivey",
    university: "Western University",
    quote: "Best tutoring experience ever! Highly recommend QEA.",
    rating: 5
  }
];

const graduates = [
  {
    name: "Mark J.",
    position: "Investment Banking Analyst",
    company: "Conaccord Genuity",
    university: "Western Ivey Graduate",
    image: "/qetutoring/mark-j.jpg"
  },
  {
    name: "Dr. T. Ward-able",
    position: "Family Physician",
    company: "Medical Practice",
    university: "Western University Graduate",
    image: "/qetutoring/dr-ward.jpg"
  },
  {
    name: "Julia S.",
    position: "Business Dev. Associate",
    company: "Fidelity Investments",
    university: "Western University Graduate",
    image: "/qetutoring/julia-s.jpg"
  },
  {
    name: "Justin C.",
    position: "Data Analyst, Citigroup",
    company: "UC Berkeley Master's",
    university: "Boston University Graduate",
    image: "/qetutoring/justin-c.jpg"
  },
  {
    name: "Sam A.",
    position: "MD Candidate",
    company: "University of Queensland",
    university: "Queen's University Graduate",
    image: "/qetutoring/sam-a.jpg"
  }
];

const tutors = [
  {
    name: "Nikki V.",
    role: "QEA Math Teacher",
    qualification: "Master's in Education, University of Toronto",
    experience: "6+ years at QEA",
    specialty: "Mathematics",
    image: "/qetutoring/nikki-v.jpg",
    description: "Certified teacher with many top students coming from her class"
  },
  {
    name: "Chris L.",
    role: "QEA Physics Tutor",
    qualification: "PhD Candidate, John Hopkins University",
    experience: "Physics specialist",
    specialty: "Physics",
    image: "/qetutoring/chris-l.jpg",
    description: "Expert physics tutor with unique teaching approach"
  },
  {
    name: "Dev D.",
    role: "Biology and Chemistry Tutor",
    qualification: "Science Degree, York University, Dental School",
    experience: "4+ years at QEA",
    specialty: "Biology, Chemistry",
    image: "/qetutoring/dev-d.jpg",
    description: "Specialized in making complex science concepts understandable"
  },
  {
    name: "Ben T.",
    role: "English Teacher",
    qualification: "PhD Candidate, English Literature",
    experience: "Writing Course Director",
    specialty: "English Grade 5-12",
    image: "/qetutoring/ben-t.jpg",
    description: "Expert in English literature and writing instruction"
  },
  {
    name: "Laura C.",
    role: "MD Candidate, Harvard University",
    qualification: "Harvard University",
    experience: "Learning Strategy Designer",
    specialty: "Academic Strategies",
    image: "/qetutoring/laura-c.jpg",
    description: "Designed learning strategies for QEA courses"
  },
  {
    name: "John C.",
    role: "Math and Science Tutor",
    qualification: "PhD Candidate, University of Toronto",
    experience: "2+ years university teaching",
    specialty: "Calculus, Advanced Functions, Physics",
    image: "/qetutoring/john-c.jpg",
    description: "University-level math and science instruction"
  }
];

// Locations data
const locations = [
  "Toronto", "Mississauga", "Oakville", "Markham", "Newmarket", 
  "Ottawa", "Vancouver", "Montreal"
];

export default function QETutoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 light !bg-white !text-black">
      {/* Force light mode */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.remove('dark');` }} />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-orange-400 !text-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/qetutoring/logo.png"
                  alt="Queen Elizabeth Tutoring Logo"
                  width={60}
                  height={60}
                  className="rounded-full border-4 border-orange-400 shadow-lg"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="h-3 w-3 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-orange-800 font-serif">
                  Queen Elizabeth
                </h1>
                <p className="text-sm font-semibold text-orange-700">Private Tutoring Academy</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu className="bg-white !text-black">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#home" className="font-semibold px-4 py-2 hover:text-orange-700 text-gray-800 border-b-2 border-transparent hover:border-orange-400 bg-white hover:bg-orange-50 focus:bg-orange-100">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-orange-700 font-semibold bg-white hover:bg-orange-50 focus:bg-orange-100 data-[state=open]:hover:bg-orange-100 data-[state=open]:text-black data-[state=open]:focus:bg-orange-100 data-[state=open]:bg-orange-50">
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-2 bg-white text-black">
                    <div className="grid gap-3 p-6 w-[300px] bg-white shadow-2xl rounded-lg border-4 border-orange-200">
                      <NavigationMenuLink href="#summer-school" className="text-sm font-semibold text-gray-700 hover:text-orange-700 p-3 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">
                        Summer School
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#sat" className="text-sm font-semibold text-gray-700 hover:text-orange-700 p-3 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">
                        SAT Preparation
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#english-writing" className="text-sm font-semibold text-gray-700 hover:text-orange-700 p-3 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">
                        English Writing Camp
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#ib-tutoring" className="text-sm font-semibold text-gray-700 hover:text-orange-700 p-3 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">
                        IB Tutoring
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#ap-tutoring" className="text-sm font-semibold text-gray-700 hover:text-orange-700 p-3 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">
                        AP Tutoring
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem> 
                  <NavigationMenuTrigger className="text-gray-800 hover:text-orange-700 font-semibold bg-white hover:bg-orange-50 focus:bg-orange-100 data-[state=open]:hover:bg-orange-100 data-[state=open]:text-black data-[state=open]:focus:bg-orange-100 data-[state=open]:bg-orange-50">
                    Subjects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-2 !bg-white !text-black">
                    <div className="grid gap-3 p-6 w-[400px] grid-cols-2 bg-white shadow-2xl rounded-lg border-4 border-orange-200">
                      <div className="space-y-2">
                        <h4 className="font-bold text-orange-800">Core Subjects</h4>
                        <NavigationMenuLink href="#math" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">Math</NavigationMenuLink>
                        <NavigationMenuLink href="#english" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">English</NavigationMenuLink>
                        <NavigationMenuLink href="#french" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">French</NavigationMenuLink>
                        <NavigationMenuLink href="#physics" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">Physics</NavigationMenuLink>
                        <NavigationMenuLink href="#chemistry" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">Chemistry</NavigationMenuLink>
                        <NavigationMenuLink href="#hong-kong" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">Hong Kong</NavigationMenuLink>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-orange-800">Grade Specific</h4>
                        <NavigationMenuLink href="#eng4u" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">ENG4U</NavigationMenuLink>
                        <NavigationMenuLink href="#mcr3u" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">MCR3U</NavigationMenuLink>
                        <NavigationMenuLink href="#mcv4u" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">MCV4U</NavigationMenuLink>
                        <NavigationMenuLink href="#mhf4u" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">MHF4U</NavigationMenuLink>
                        <NavigationMenuLink href="#sch3u" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">SCH3U</NavigationMenuLink>
                        <NavigationMenuLink href="#sch4u" className="text-sm text-gray-600 hover:text-orange-700 block p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">SCH4U</NavigationMenuLink>
                      </div>
                      <div className="col-span-2 space-y-2 border-t-2 border-orange-300 pt-3">
                        <h4 className="font-bold text-orange-800">Summer Programs</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <NavigationMenuLink href="#advanced-functions-summer" className="text-xs text-gray-600 hover:text-orange-700 p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">Advanced Functions Summer</NavigationMenuLink>
                          <NavigationMenuLink href="#english-summer" className="text-xs text-gray-600 hover:text-orange-700 p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">English Summer School</NavigationMenuLink>
                          <NavigationMenuLink href="#biology-summer" className="text-xs text-gray-600 hover:text-orange-700 p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">Biology Summer School</NavigationMenuLink>
                          <NavigationMenuLink href="#physics-summer" className="text-xs text-gray-600 hover:text-orange-700 p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">Physics 12 Summer</NavigationMenuLink>
                          <NavigationMenuLink href="#chemistry-summer" className="text-xs text-gray-600 hover:text-orange-700 p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">Chemistry 12 Summer</NavigationMenuLink>
                          <NavigationMenuLink href="#ministry-info" className="text-xs text-gray-600 hover:text-orange-700 p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">Ministry Course Info</NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-orange-700 font-semibold bg-white hover:bg-orange-50 focus:bg-orange-100 data-[state=open]:hover:bg-orange-100 data-[state=open]:text-black data-[state=open]:focus:bg-orange-100 data-[state=open]:bg-orange-50">
                    Advice
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-2 !bg-white !text-black">
                    <div className="grid gap-3 p-6 w-[250px] bg-white shadow-2xl rounded-lg border-4 border-orange-200">
                      <NavigationMenuLink href="#math-help" className="text-sm font-semibold text-gray-700 hover:text-orange-700 p-3 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">
                        Math Help Topics
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#ouac" className="text-sm font-semibold text-gray-700 hover:text-orange-700 p-3 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">
                        OUAC Application Help
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-orange-700 font-semibold bg-white hover:bg-orange-50 focus:bg-orange-100 data-[state=open]:hover:bg-orange-100 data-[state=open]:text-black data-[state=open]:focus:bg-orange-100 data-[state=open]:bg-orange-50">
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-2 !bg-white !text-black">
                    <div className="grid gap-3 p-6 w-[280px] bg-white shadow-2xl rounded-lg border-4 border-orange-200">
                      <div className="space-y-2">
                        <h4 className="font-bold text-orange-800">Get in Touch</h4>
                        <NavigationMenuLink href="tel:+13658003775" className="text-sm text-gray-700 hover:text-orange-700 flex items-center gap-2 p-2 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">
                          <Phone className="h-4 w-4" />
                          Contact Number
                        </NavigationMenuLink>
                        <div className="text-sm text-gray-500 flex items-center gap-2 p-2">
                          <Globe className="h-4 w-4" />
                          Online
                        </div>
                      </div>
                      <Separator className="border-orange-300" />
                      <div className="space-y-2">
                        <h4 className="font-bold text-orange-800">Locations</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {locations.map((location) => (
                            <NavigationMenuLink key={location} href={`#${location.toLowerCase()}`} className="text-xs text-gray-600 hover:text-orange-700 p-1 rounded hover:bg-orange-50 border border-transparent hover:border-orange-300">
                              {location}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Old School Hero Section */}
      <section id="home" className="py-16 bg-gradient-to-r from-orange-100 to-yellow-100 border-b-4 border-orange-400 !text-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="mb-8">
                <Badge className="mb-4 bg-orange-600 text-white px-6 py-3 text-lg font-bold border-2 border-orange-700 shadow-lg">
                  <Star className="h-5 w-5 mr-2" />
                  ★★★★★ 4.9 Google Rating - #1 Tutoring Service
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-orange-900 font-serif leading-tight">
                  Queen Elizabeth
                  <br />
                  <span className="text-red-700">Private Tutoring</span>
                </h1>
                <div className="bg-yellow-200 border-4 border-orange-400 p-6 rounded-lg shadow-lg mb-8">
                  <p className="text-2xl lg:text-3xl text-orange-800 font-bold mb-4 font-serif">
                    "Tutoring that builds Foundations"
                  </p>
                  <p className="text-lg text-orange-700 leading-relaxed font-medium">
                    Queen Elizabeth Academy has a strong tradition of providing quality education and tutoring. 
                    For more than 7 years, we have worked with <strong>1000+ students</strong> to build on their successes step by step.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-white border-4 border-orange-400 p-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">40+</div>
                  <p className="text-orange-700 font-semibold">Expert Tutors</p>
                </div>
                <div className="text-center bg-white border-4 border-yellow-400 p-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">1000+</div>
                  <p className="text-orange-700 font-semibold">Students Helped</p>
                </div>
                <div className="text-center bg-white border-4 border-red-400 p-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">12+</div>
                  <p className="text-orange-700 font-semibold">Years Experience</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-bold border-4 border-orange-700 shadow-lg rounded-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  📞 Call Now: (365) 800-3775
                </Button>
                <Button variant="outline" size="lg" className=" light border-4 border-orange-600 hover:text-black text-orange-700 hover:bg-white/50 px-8 py-4 text-lg font-bold shadow-lg rounded-lg bg-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  📚 Free Consultation
                </Button>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="relative">
                <div className="bg-yellow-200 border-4 border-orange-400 p-8 rounded-lg shadow-2xl">
                  <Image
                    src="/qetutoring/hero-image.jpg"
                    alt="Students studying at Queen Elizabeth Academy"
                    width={500}
                    height={400}
                    className="rounded-lg border-4 border-white shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-red-600 text-white p-4 rounded-full border-4 border-white shadow-lg">
                    <Trophy className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Marquee */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 !text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-green-700">
              🎉 Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Our students achieve amazing results and get into top universities
            </p>
          </div>
          
          <Marquee className="py-4" pauseOnHover>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="mx-4 w-80 border-green-200 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{testimonial.achievement}</p>
                  <p className="text-sm text-muted-foreground mb-3">{testimonial.university}</p>
                  <p className="text-sm italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>
      </section>

      {/* QEA Students Maintain A Average Section */}
      <section className="py-16 !bg-white !text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2">
              <TrendingUp className="h-4 w-4 mr-2" />
              Academic Excellence
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              QEA Students maintain A average in university!
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our students don't just get into great universities - they continue to excel once they're there.
              Here are some of their inspiring success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-purple-200 hover:shadow-xl transition-all duration-300 !bg-white !text-black">
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-indigo-400 p-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <GraduationCap className="h-12 w-12 mx-auto mb-3" />
                  <Badge className="bg-white/50 mb-2">Success Story</Badge>
                  <div className="text-2xl font-bold">🎓</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Stephanie L.</h3>
                <p className="text-muted-foreground">Scored 95% and ranked top 15 in Canada, shares her secrets of success in QEA interview.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-indigo-200 hover:shadow-xl transition-all duration-300 !bg-white !text-black">
              <div className="relative h-48 bg-gradient-to-br from-indigo-400 to-blue-400 p-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <Trophy className="h-12 w-12 mx-auto mb-3" />
                  <Badge className="bg-white/50 mb-2">Success Story</Badge>
                  <div className="text-2xl font-bold">🏆</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jerry T.</h3>
                <p className="text-muted-foreground">Admitted to Queen's Commerce</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-blue-200 hover:shadow-xl transition-all duration-300 !bg-white !text-black">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-cyan-400 p-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <Star className="h-12 w-12 mx-auto mb-3" />
                  <Badge className="bg-white/50 mb-2">Success Story</Badge>
                  <div className="text-2xl font-bold">⭐</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Taylor W.</h3>
                <p className="text-muted-foreground">Admitted to Western Medical Science</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Tutors Section with Videos */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 !text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Expert Educators
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Meet our Tutors - Math Physics and Chemistry Tutor at QEA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of 40+ specialized tutors bring years of experience and proven teaching methodologies 
              to help students achieve academic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {tutors.slice(0, 6).map((tutor, index) => (
              <Card key={index} className="overflow-hidden border-amber-200 hover:shadow-xl transition-all duration-300 !bg-white !text-black">
                <div className="relative h-48 bg-gradient-to-br from-amber-400 to-orange-400 p-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="h-12 w-12 mx-auto mb-3" />
                    <Badge className="bg-white/50 mb-2">{tutor.specialty}</Badge>
                    <div className="text-2xl font-bold">{tutor.name.split(' ').map(n => n[0]).join('')}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tutor.name}</h3>
                  <p className="text-amber-600 font-medium mb-2">{tutor.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{tutor.qualification}</p>
                  <p className="text-sm">{tutor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              and 27+ tutors each specializing in a subject area, grade and student's need
            </p>
            <Button variant="outline" className="border-amber-300 text-amber-600">
              <Users className="h-5 w-5 mr-2" />
              Meet All Our Tutors
            </Button>
          </div>
        </div>
      </section>

      {/* Alumni Success Marquee */}
      <section className="py-16 !text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Success of QEA Alumni
            </h2>
            <p className="text-xl text-muted-foreground">
              Our graduates go on to achieve remarkable success in their careers
            </p>
          </div>
          
          <Marquee className="py-4" pauseOnHover reverse>
            {graduates.map((graduate, index) => (
              <Card key={index} className="mx-4 w-80 border-blue-200 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                      {graduate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black">{graduate.name}</h3>
                      <p className="text-sm text-muted-foreground">{graduate.university}</p>
                    </div>
                  </div>
                  <p className="font-medium text-blue-600 mb-2">{graduate.position}</p>
                  <p className="text-sm text-muted-foreground">{graduate.company}</p>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Programs and Approach */}
      <section id="programs" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 !bg-white !text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Approach to Learning</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learning Strategies designed by Harvard educated experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Private Tutoring</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Queen Elizabeth Academy's Private Tutoring Program provides our students with one on one, 
                personalized tutoring lessons that are based on a step by step, easy to understand methodology.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Step-by-Step Explanations</h4>
                    <p className="text-muted-foreground">
                      For our science and math tutoring programs, we focus on providing step by step explanations 
                      during the tutoring session, facilitating the student's understanding of the math and science concepts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Foundation Building</h4>
                    <p className="text-muted-foreground">
                      Math and science are cumulative. Therefore, building a good foundation is important for 
                      the student's long-term success. We focus on clarifying knowledge gaps to help build a good foundation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">Private Credit Course</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Queen Elizabeth Academy is a private tutoring school, provincially inspected by the Ministry of Education (BSID 882306).
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Small Class Sizes</h4>
                    <p className="text-muted-foreground">
                      To maintain the quality of our lessons, class size is limited to a maximum of 8 students, 
                      giving students the opportunity to ask questions throughout the lesson.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Interactive Learning</h4>
                    <p className="text-muted-foreground">
                      Our class is fully interactive and mimics a university tutorial. Students make presentations 
                      and engage in discussions to encourage understanding rather than memorization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-purple-200 !bg-white !text-black">
              <Brain className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h4 className="font-semibold text-lg mb-3">Understanding Over Memorization</h4>
              <p className="text-muted-foreground text-sm">
                The student needs to clearly define the concept and its boundaries, understanding more than just memorizing equations.
              </p>
            </Card>
            <Card className="text-center p-8 border-pink-200 !bg-white !text-black">
              <Target className="h-12 w-12 mx-auto mb-4 text-pink-600" />
              <h4 className="font-semibold text-lg mb-3">Pattern Recognition</h4>
              <p className="text-muted-foreground text-sm">
                Students learn when to apply concepts through practice, helping them recognize patterns in problem-solving.
              </p>
            </Card>
            <Card className="text-center p-8 border-indigo-200 !bg-white !text-black">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h4 className="font-semibold text-lg mb-3">Core Rules</h4>
              <p className="text-muted-foreground text-sm">
                Any math or science concept can be reduced to 4 or 5 simple rules that should be constantly referenced.
              </p>
            </Card>
          </div>

          {/* Detailed Academic Advice Section */}
          <div className="bg-white rounded-2xl border-4 border-purple-200 p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-center mb-8 text-purple-800">Academic Excellence Guide</h3>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="university-prep" className="border-2 border-purple-100 rounded-lg px-4">
                <AccordionTrigger className="text-xl font-semibold text-purple-700 hover:text-purple-800">
                  University Preparation Strategy
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-purple-800">Grade 9-10: Foundation Years</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Focus on developing strong study habits and time management skills</li>
                      <li>• Build solid foundations in core subjects (Math, English, Sciences)</li>
                      <li>• Explore different subjects to identify strengths and interests</li>
                      <li>• Maintain a minimum 80% average to keep university options open</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-indigo-800">Grade 11-12: Specialization Years</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Choose courses strategically based on university program requirements</li>
                      <li>• Aim for 90%+ in Grade 12 university-level courses for competitive programs</li>
                      <li>• Take advanced functions and calculus for STEM programs</li>
                      <li>• Maintain consistent performance across all subjects</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="subject-strategies" className="border-2 border-blue-100 rounded-lg px-4">
                <AccordionTrigger className="text-xl font-semibold text-blue-700 hover:text-blue-800">
                  Subject-Specific Success Strategies
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-800">Mathematics Excellence</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Practice problems daily, not just before tests</li>
                        <li>• Understand concepts before memorizing formulas</li>
                        <li>• Work through past exam papers and assignments</li>
                        <li>• Seek help immediately when concepts are unclear</li>
                        <li>• Focus on problem-solving strategies and pattern recognition</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-green-800">Science Mastery</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Connect theoretical concepts to real-world applications</li>
                        <li>• Practice laboratory skills and scientific writing</li>
                        <li>• Create concept maps to link related topics</li>
                        <li>• Review and understand all assigned experiments</li>
                        <li>• Stay current with scientific developments in your field</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="study-techniques" className="border-2 border-green-100 rounded-lg px-4">
                <AccordionTrigger className="text-xl font-semibold text-green-700 hover:text-green-800">
                  Proven Study Techniques
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-green-800">The QEA Study Method</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2">Active Learning Techniques:</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Teach concepts to others (Feynman Technique)</li>
                          <li>• Create mind maps and visual summaries</li>
                          <li>• Practice active recall instead of re-reading</li>
                          <li>• Use spaced repetition for long-term retention</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Time Management:</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Use the Pomodoro Technique (25-min focused sessions)</li>
                          <li>• Plan study schedules weekly, not daily</li>
                          <li>• Prioritize challenging subjects during peak hours</li>
                          <li>• Include regular breaks and review sessions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exam-prep" className="border-2 border-amber-100 rounded-lg px-4">
                <AccordionTrigger className="text-xl font-semibold text-amber-700 hover:text-amber-800">
                  Exam Preparation & Test-Taking Strategies
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold mb-3 text-amber-800">Before the Exam</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Start reviewing 2-3 weeks before</li>
                          <li>• Create comprehensive study guides</li>
                          <li>• Practice with past papers and mock exams</li>
                          <li>• Form study groups for discussion</li>
                          <li>• Get adequate sleep and nutrition</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3 text-amber-800">During the Exam</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Read all instructions carefully</li>
                          <li>• Allocate time based on mark distribution</li>
                          <li>• Start with questions you're confident about</li>
                          <li>• Show all work in mathematical problems</li>
                          <li>• Review answers if time permits</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3 text-amber-800">After the Exam</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Review performance objectively</li>
                          <li>• Identify areas for improvement</li>
                          <li>• Adjust study strategies accordingly</li>
                          <li>• Celebrate successes and learn from mistakes</li>
                          <li>• Plan for upcoming assessments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="university-admission" className="border-2 border-red-100 rounded-lg px-4">
                <AccordionTrigger className="text-xl font-semibold text-red-700 hover:text-red-800">
                  University Admission Requirements
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4 text-red-800">Top Programs & Requirements</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2">Engineering Programs</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Required: Advanced Functions, Calculus, Physics, Chemistry</li>
                          <li>• Recommended: Computer Science, Design & Technology</li>
                          <li>• Minimum: 85-90% average for competitive schools</li>
                          <li>• Additional: Supplementary applications, interviews</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Business Programs</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Required: Advanced Functions, English</li>
                          <li>• Recommended: Calculus, Economics, Business Leadership</li>
                          <li>• Minimum: 80-90% average depending on school</li>
                          <li>• Additional: Essays, extracurricular activities</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Health Sciences</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Required: Biology, Chemistry, Advanced Functions</li>
                          <li>• Recommended: Physics, Calculus</li>
                          <li>• Minimum: 90%+ average for most programs</li>
                          <li>• Additional: Volunteer experience, supplementary essays</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Computer Science</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Required: Advanced Functions, Calculus</li>
                          <li>• Recommended: Computer Science, Physics</li>
                          <li>• Minimum: 85-95% average for top programs</li>
                          <li>• Additional: Programming portfolio, contests</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 !bg-white !text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Find Queen Elizabeth at your neighbourhood</h2>
            <p className="text-xl text-muted-foreground">
              We serve students across multiple locations in Ontario and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer !bg-white !text-black">
                <CardContent className="p-2">
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-medium">{location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-950 to-purple-950 text-white !bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your Success Journey?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join 1000+ students who have achieved academic excellence with Queen Elizabeth Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-medium text-white">General Inquiry</p>
                    <a href="tel:+13658003775" className="text-blue-600 hover:text-blue-500">+1 (365) 800-3775</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Tutoring & Credit Courses</p>
                    <a href="tel:+19052579009" className="text-purple-300 hover:text-purple-200">(905) 257-9009</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-green-400" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:vwlee2008@gmail.com" className="text-green-300 hover:text-green-200">vwlee2008@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-red-400" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-red-300">Unit 5, 1020 Johnsons Lane, Mississauga</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white border border-gray-300 !text-black">
                <CardHeader>
                  <CardTitle>Book Your Free Consultation</CardTitle>
                  <CardDescription>
                    Get personalized advice on the best tutoring program for your needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gradient-to-r text-white from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Free Assessment
                  </Button>
                  <Button variant="outline" className="w-full border-black text-black hover:bg-white/50 hover:text-black">
                    <Download className="h-5 w-5 mr-2" />
                    Download Study Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-white !text-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-4 w-4 text-red-500" />
            <p className="text-sm text-gray-700">
              © 2008-2025 Queen Elizabeth Academy. All Rights Reserved.
            </p>
          </div>
          <p className="text-xs text-gray-600">
            Queen Elizabeth Academy has no affiliation with Harvard University or University of Toronto, 
            who do not endorse our products or services.
          </p>
        </div>
      </footer>
    </div>
  );
}

