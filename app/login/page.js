import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <Link href="/" className="absolute left-8 top-8 flex items-center gap-2 font-bold text-xl">
        <span className="text-primary">Medi</span>Book
      </Link>

      <Tabs defaultValue="patient" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="patient">Patient</TabsTrigger>
          <TabsTrigger value="doctor">Doctor</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="patient">
          <LoginCard userType="Patient" />
        </TabsContent>

        <TabsContent value="doctor">
          <LoginCard userType="Doctor" />
        </TabsContent>

        <TabsContent value="admin">
          <LoginCard userType="Admin" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function LoginCard({ userType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{userType} Login</CardTitle>
        <CardDescription>Enter your credentials to access your {userType.toLowerCase()} account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m.smith@example.com" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full">Login</Button>
        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

