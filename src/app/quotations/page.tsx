"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { quotations as initialQuotations, Quotation } from "@/data/quotations"
import { EditQuotationDialog } from "@/components/quotations/edit-quotation-dialog"
import { Eye } from "lucide-react"

const ITEMS_PER_PAGE = 10

export default function QuotationsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [quotations, setQuotations] = useState(initialQuotations)

  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  const totalPages = Math.ceil(quotations.length / ITEMS_PER_PAGE)
  const currentQuotations = quotations.slice(start, end)

  const handleEditQuotation = (updatedQuotation: Quotation) => {
    setQuotations(quotations.map(q => 
      q.id === updatedQuotation.id ? updatedQuotation : q
    ))
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Quotations</h2>
            <p className="text-muted-foreground">
              View and manage product quotations
            </p>
          </div>
          <Button>Create New Quotation</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentQuotations.map((quotation) => (
                <TableRow key={quotation.id}>
                  <TableCell className="font-medium">{quotation.id}</TableCell>
                  <TableCell>{quotation.customerName}</TableCell>
                  <TableCell>{quotation.date}</TableCell>
                  <TableCell>${quotation.totalAmount.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      quotation.status === 'approved' ? 'bg-green-100 text-green-700' :
                      quotation.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {quotation.status.charAt(0).toUpperCase() + quotation.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View quotation details</span>
                      </Button>
                      <EditQuotationDialog 
                        quotation={quotation} 
                        onSave={handleEditQuotation} 
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {start + 1} to {Math.min(end, quotations.length)} of {quotations.length} quotations
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="flex items-center px-2">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 