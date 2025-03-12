import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UpcomingAppointments } from "@/components/upcoming-appointments"
import { AppointmentHistory } from "@/components/appointment-history"
import { BookAppointmentForm } from "@/components/book-appointment-form"

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Appointments</h2>
          <p className="text-gray-500">Manage your appointments</p>
        </div>
        <Button>Book New Appointment</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <Tabs defaultValue="upcoming">
              <div className="flex items-center justify-between">
                <CardTitle>My Appointments</CardTitle>
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming">
              <TabsContent value="upcoming" className="space-y-4">
                <UpcomingAppointments />
              </TabsContent>
              <TabsContent value="past" className="space-y-4">
                <AppointmentHistory />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>View your schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Book New Appointment</CardTitle>
          <CardDescription>Find a doctor and schedule an appointment</CardDescription>
        </CardHeader>
        <CardContent>
          <BookAppointmentForm />
        </CardContent>
      </Card>
    </div>
  )
}

