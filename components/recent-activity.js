import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "appointment",
      title: "Appointment with Dr. Sarah Johnson",
      description: "Completed your cardiology checkup",
      date: "May 2, 2025",
      icon: "/placeholder.svg?height=32&width=32",
      iconFallback: "SJ",
    },
    {
      id: 2,
      type: "prescription",
      title: "Prescription Updated",
      description: "Dr. Michael Chen updated your medication",
      date: "April 28, 2025",
      icon: "/placeholder.svg?height=32&width=32",
      iconFallback: "MC",
    },
    {
      id: 3,
      type: "test",
      title: "Test Results Available",
      description: "Your blood test results are now available",
      date: "April 25, 2025",
      icon: "/placeholder.svg?height=32&width=32",
      iconFallback: "TR",
    },
    {
      id: 4,
      type: "appointment",
      title: "Appointment with Dr. Emily Rodriguez",
      description: "Completed your neurology consultation",
      date: "April 20, 2025",
      icon: "/placeholder.svg?height=32&width=32",
      iconFallback: "ER",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 rounded-lg border p-4">
          <Avatar>
            <AvatarImage src={activity.icon} alt="" />
            <AvatarFallback>{activity.iconFallback}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="font-semibold">{activity.title}</h4>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
          </div>
          <div className="text-sm text-muted-foreground">{activity.date}</div>
        </div>
      ))}
    </div>
  )
}

