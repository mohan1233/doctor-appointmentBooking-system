import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, UserPlus, Shield, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Medi</span>Book
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Book Doctor Appointments With Ease
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Find the right doctor, book an appointment, and manage your health journey all in one place.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Doctor appointment illustration"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform provides a comprehensive solution for managing doctor appointments and healthcare needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Calendar className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Easy Scheduling</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Book appointments with just a few clicks, anytime and anywhere.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <User className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Doctor Profiles</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Detailed doctor profiles with specialties, experience, and patient reviews.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Clock className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Real-time Availability</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                See real-time doctor availability and choose the perfect time slot.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <UserPlus className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Patient Records</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Securely store and access your medical history and appointment records.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Secure Platform</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Your health data is protected with enterprise-grade security.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Star className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Ratings & Reviews</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Read and leave reviews to help others find the best care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple Process</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Getting started with MediBook is quick and easy. Follow these simple steps.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-2 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Create an Account</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Sign up as a patient or doctor and complete your profile.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">Find a Doctor</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Search for doctors by specialty, location, or availability.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Book Appointment</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Select a convenient time slot and confirm your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. Here's what our users have to say about MediBook.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="User"
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Patient</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                "MediBook has made it so easy to find doctors and book appointments. I love the reminder feature!"
              </p>
              <div className="flex text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="User"
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Dr. Michael Chen</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cardiologist</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                "As a doctor, MediBook has streamlined my appointment management and reduced no-shows significantly."
              </p>
              <div className="flex text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="User"
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Robert Williams</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Patient</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                "The ability to see doctor reviews and availability in real-time has been a game-changer for me."
              </p>
              <div className="flex text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join thousands of patients and doctors who are already using MediBook to manage their healthcare
                journey.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left dark:text-gray-400">
            © 2025 MediBook. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:underline underline-offset-4 dark:text-gray-400">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:underline underline-offset-4 dark:text-gray-400"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:underline underline-offset-4 dark:text-gray-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

