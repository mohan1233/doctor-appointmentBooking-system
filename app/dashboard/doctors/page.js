import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, Calendar } from "lucide-react"

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      location: "Medical Center, Building A",
      experience: "15 years",
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "SJ",
      rating: 4.9,
      reviews: 124,
      nextAvailable: "Today",
      education: "Harvard Medical School",
      languages: ["English", "Spanish"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      location: "Skin Clinic, Downtown",
      experience: "12 years",
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "MC",
      rating: 4.8,
      reviews: 98,
      nextAvailable: "Tomorrow",
      education: "Johns Hopkins University",
      languages: ["English", "Mandarin"],
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Neurologist",
      location: "Neurology Center",
      experience: "10 years",
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "ER",
      rating: 4.7,
      reviews: 87,
      nextAvailable: "May 15",
      education: "Stanford University",
      languages: ["English", "Portuguese"],
    },
    {
      id: 4,
      name: "Dr. Robert Williams",
      specialty: "General Practitioner",
      location: "Family Medicine Clinic",
      experience: "20 years",
      avatar: "/placeholder.svg?height=8&width=80",
      initials: "RW",
      rating: 4.9,
      reviews: 156,
      nextAvailable: "Today",
      education: "Yale University",
      languages: ["English"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Find Doctors</h2>
          <p className="text-gray-500">Search for specialists and book appointments</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
          <CardDescription>Find the right doctor for your needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search by name..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="psychiatry">Psychiatry</SelectItem>
                <SelectItem value="general">General Practice</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="medical-center">Medical Center</SelectItem>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="north">North Side</SelectItem>
                <SelectItem value="south">South Side</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {doctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={doctor.avatar} alt={doctor.name} />
                    <AvatarFallback>{doctor.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                    <p className="text-primary">{doctor.specialty}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>{doctor.rating}</span>
                      <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Experience</p>
                      <p>{doctor.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Education</p>
                      <p>{doctor.education}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Languages</p>
                      <p>{doctor.languages.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Next Available</p>
                      <Badge variant={doctor.nextAvailable === "Today" ? "default" : "outline"}>
                        {doctor.nextAvailable}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-w-[150px]">
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

