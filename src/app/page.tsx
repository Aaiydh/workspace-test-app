import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowUp,
  DollarSign,
  Users,
  CreditCard,
  Activity,
} from "lucide-react";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        {/* Main Content */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Total Revenue */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-semibold">$45,231.89</h3>
                    <p className="text-sm text-green-600 flex items-center">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      20.1%
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">+$4,320 from last month</p>
                </div>
              </CardContent>
            </Card>

            {/* Subscriptions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-semibold">+2,350</h3>
                    <p className="text-sm text-green-600 flex items-center">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      180.1%
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">+1,200 from last month</p>
                </div>
              </CardContent>
            </Card>

            {/* Sales */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-semibold">+12,234</h3>
                    <p className="text-sm text-green-600 flex items-center">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      19%
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">+2,345 from last month</p>
                </div>
              </CardContent>
            </Card>

            {/* Active Now */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-semibold">+573</h3>
                    <p className="text-sm text-green-600 flex items-center">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      201
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">+201 since last hour</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Sale #{i}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$249.00</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          New user registered
                        </p>
                        <p className="text-sm text-muted-foreground">
                          5 minutes ago
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 