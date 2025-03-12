import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export function BookAppointmentForm() {
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ]

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
      rating: 4.9,
      reviews: 124,
      available: true,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
      rating: 4.8,
      reviews: 98,
      available: true,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Neurologist",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
      rating: 4.7,
      reviews: 87,
      available: false,
    },
  ]

  return (
    <div>
      <Tabs defaultValue="search">
        <TabsList className="mb-4">
          <TabsTrigger value="search">Search Doctor</TabsTrigger>
          <TabsTrigger value="specialty">By Specialty</TabsTrigger>
        </TabsList>
        <TabsContent value="search">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search for a doctor by name..." className="pl-8" />
            </div>
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <Card key={doctor.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={doctor.avatar} alt={doctor.name} />
                          <AvatarFallback>{doctor.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{doctor.name}</h4>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                          <div className="flex items-center gap-1 text-sm">
                            <span className="text-yellow-500">★</span>
                            <span>{doctor.rating}</span>
                            <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        {doctor.available ? (
                          <Badge className="mb-2">Available Today</Badge>
                        ) : (
                          <Badge variant="outline" className="mb-2">
                            Next Available: Tomorrow
                          </Badge>
                        )}
                        <Button className="w-full">Book Appointment</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="specialty">
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="specialty">Specialty</Label>
                <Select>
                  <SelectTrigger id="specialty">
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="psychiatry">Psychiatry</SelectItem>
                    <SelectItem value="general">General Practice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medical-center">Medical Center</SelectItem>
                    <SelectItem value="downtown-clinic">Downtown Clinic</SelectItem>
                    <SelectItem value="north-hospital">North Hospital</SelectItem>
                    <SelectItem value="south-clinic">South Clinic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="mb-2 block">Select Date</Label>
                <Calendar className="rounded-md border" />
              </div>
              <div>
                <Label className="mb-2 block">Available Time Slots</Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <Button key={time} variant="outline" className="justify-start">
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Visit</Label>
              <Input id="reason" placeholder="Brief description of your symptoms or reason" />
            </div>
            <Button className="w-full">Confirm Appointment</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

