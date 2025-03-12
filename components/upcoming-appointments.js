import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export function UpcomingAppointments() {
  const appointments = [
    {
      id: 1,
      doctor: {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SJ",
      },
      date: "May 15, 2025",
      time: "10:00 AM",
      location: "Medical Center, Room 302",
      status: "confirmed",
    },
    {
      id: 2,
      doctor: {
        name: "Dr. Michael Chen",
        specialty: "Dermatologist",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      date: "May 20, 2025",
      time: "2:30 PM",
      location: "Skin Clinic, Room 105",
      status: "confirmed",
    },
    {
      id: 3,
      doctor: {
        name: "Dr. Emily Rodriguez",
        specialty: "Neurologist",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ER",
      },
      date: "May 25, 2025",
      time: "11:15 AM",
      location: "Neurology Center, Room 210",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={appointment.doctor.avatar} alt={appointment.doctor.name} />
              <AvatarFallback>{appointment.doctor.initials}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">{appointment.doctor.name}</h4>
              <p className="text-sm text-muted-foreground">{appointment.doctor.specialty}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            <div className="flex items-center gap-1 text-sm">
              <Calendar className="h-4 w-4" />
              <span>{appointment.date}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Clock className="h-4 w-4" />
              <span>{appointment.time}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{appointment.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={appointment.status === "confirmed" ? "default" : "outline"}>
              {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
            </Badge>
            <Button variant="outline" size="sm">
              Reschedule
            </Button>
            <Button variant="destructive" size="sm">
              Cancel
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

