import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowUp,
  ArrowDown,
  Package,
  FileText,
  Users,
  Activity,
  Eye,
  ShoppingCart,
  Clock
} from "lucide-react";
import { products } from "@/lib/data";
import { quotations } from "@/data/quotations";

export default function Home() {
  // Calculate statistics
  const totalProducts = products.length;
  const totalQuotations = quotations.length;
  const totalRevenue = quotations.reduce((sum, q) => sum + q.totalAmount, 0);
  const pendingQuotations = quotations.filter(q => q.status === 'pending').length;
  
  // Calculate percentage changes (mock data for demonstration)
  const revenueChange = "+12.5%";
  const quotationsChange = "+8.2%";
  const productsChange = "+15.3%";
  const activeUsersChange = "+5.7%";

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
          {/* Total Revenue */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-semibold">
                    ${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </h3>
                  <p className="text-sm text-green-600 flex items-center">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    {revenueChange}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">+$4,320 from last month</p>
              </div>
            </CardContent>
          </Card>

          {/* Total Products */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-semibold">{totalProducts}</h3>
                  <p className="text-sm text-green-600 flex items-center">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    {productsChange}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">+12 new products this month</p>
              </div>
            </CardContent>
          </Card>

          {/* Total Quotations */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Quotations</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-semibold">{totalQuotations}</h3>
                  <p className="text-sm text-green-600 flex items-center">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    {quotationsChange}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">{pendingQuotations} pending approval</p>
              </div>
            </CardContent>
          </Card>

          {/* Active Users */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-semibold">573</h3>
                  <p className="text-sm text-green-600 flex items-center">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    {activeUsersChange}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity and Sales Grid */}
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          {/* Recent Sales */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Quotations</CardTitle>
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                  View All
                  <Eye className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {quotations.slice(0, 5).map((quotation) => (
                  <div key={quotation.id} className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {quotation.customerName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Quotation #{quotation.id}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">
                      ${quotation.totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Activity</CardTitle>
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                  View All
                  <Eye className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    action: "New quotation created",
                    details: "by Sarah Johnson",
                    time: "2 minutes ago",
                    icon: FileText
                  },
                  {
                    action: "Product stock updated",
                    details: "by Admin",
                    time: "5 minutes ago",
                    icon: Package
                  },
                  {
                    action: "New user registered",
                    details: "John Smith",
                    time: "10 minutes ago",
                    icon: Users
                  },
                  {
                    action: "Quotation approved",
                    details: "by Admin",
                    time: "15 minutes ago",
                    icon: Activity
                  },
                  {
                    action: "Product added",
                    details: "by Admin",
                    time: "20 minutes ago",
                    icon: Package
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full p-2 bg-muted">
                        <activity.icon className="h-4 w-4 text-foreground" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.action}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          {activity.time} • {activity.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
} 