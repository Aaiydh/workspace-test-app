"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search } from "@/components/search";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LayoutGrid,
  Package,
  FileText,
  Users,
  ChevronDown,
  ChevronRight,
  User2,
  Menu,
  Bell,
  LogOut
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import Cookies from 'js-cookie'

interface DashboardLayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  name: string;
  icon: LucideIcon;
  href?: string;
  children?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { 
    name: "Dashboard", 
    href: "/", 
    icon: LayoutGrid 
  },
  { 
    name: "Products",
    icon: Package,
    children: [
      { name: "Product Lists", href: "/products" },
      { name: "Create Product", href: "/products/create" },
      { name: "Attribute", href: "/products/attributes" },
    ]
  },
  {
    name: "Quotations",
    icon: FileText,
    children: [
      { name: "Quotation Lists", href: "/quotations" },
      { name: "Create Quotation", href: "/quotations/create" },
    ]
  },
  {
    name: "Users",
    icon: Users,
    children: [
      { name: "User Lists", href: "/users" },
      { name: "Create User", href: "/users/create" },
    ]
  },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const toggleGroup = (name: string) => {
    setOpenGroups(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <SidebarContent 
            pathname={pathname} 
            openGroups={openGroups}
            toggleGroup={toggleGroup}
          />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden border-r bg-background md:block w-[280px] flex-shrink-0">
        <SidebarContent 
          pathname={pathname} 
          openGroups={openGroups}
          toggleGroup={toggleGroup}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-[72px] items-center gap-4 px-6">
            <h1 className="text-lg font-medium text-foreground/90">Dashboard</h1>
            <div className="ml-auto flex items-center gap-4">
              <Search />
              <ThemeToggle />
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t py-4 px-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>
              <p>Workspace Admin Dashboard v1.0.0</p>
            </div>
            <div>
              <p>&copy; {new Date().getFullYear()} Workspace. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SidebarContent({ pathname, openGroups, toggleGroup }: { pathname: string; openGroups: string[]; toggleGroup: (name: string) => void; }) {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('isAuthenticated');
    router.push('/login');
    router.refresh();
  };

  return (
    <div className="flex h-full flex-col">
      {/* Workspace Header */}
      <div className="border-b px-6 py-4">
        <div className="relative h-10 w-full">
          <Image
            src="/images/workspace-logo.png"
            alt="WORKSPACE"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1">
        <nav className="flex flex-col p-2">
          {navigation.map((item) => {
            if (item.children) {
              const isOpen = openGroups.includes(item.name);
              const isActive = item.children.some(child => child.href === pathname);

              return (
                <div key={item.name} className="space-y-1">
                  <Button
                    variant="ghost"
                    onClick={() => toggleGroup(item.name)}
                    className={cn(
                      "w-full justify-between font-normal hover:bg-accent hover:text-accent-foreground",
                      (isActive || isOpen) && "bg-accent/50"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform text-muted-foreground",
                      isOpen && "rotate-180"
                    )} />
                  </Button>
                  {isOpen && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link key={child.name} href={child.href}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start font-normal text-muted-foreground",
                              pathname === child.href && "bg-accent/50 text-foreground"
                            )}
                          >
                            {child.name}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={item.name} href={item.href!}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start font-normal text-muted-foreground",
                    pathname === item.href && "bg-accent/50 text-foreground"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* User Profile */}
      <div className="border-t p-4 space-y-4">
        <div className="flex items-center gap-3 px-2">
          <div className="rounded-full bg-muted p-1">
            <User2 className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground/90">Aaiydh Ahmad</span>
            <span className="text-xs text-muted-foreground">Administrator</span>
          </div>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
              <AlertDialogDescription className="text-muted-foreground">
                You will be redirected to the login page.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
} 