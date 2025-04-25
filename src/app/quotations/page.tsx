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
import { products, quotations } from "@/lib/data"

const ITEMS_PER_PAGE = 5

export default function QuotationsPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  const totalPages = Math.ceil(quotations.length / ITEMS_PER_PAGE)
  const currentQuotations = quotations.slice(start, end)

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
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentQuotations.map((quotation) => {
                const product = products.find(p => p.id === quotation.productId)
                return (
                  <TableRow key={quotation.id}>
                    <TableCell className="font-medium">
                      {quotation.customerName}
                    </TableCell>
                    <TableCell>{product?.name}</TableCell>
                    <TableCell>{quotation.quantity}</TableCell>
                    <TableCell>${quotation.totalPrice.toFixed(2)}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        quotation.status === 'approved' ? 'bg-green-100 text-green-700' :
                        quotation.status === 'rejected' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {quotation.status.charAt(0).toUpperCase() + quotation.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>{quotation.date}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-end space-x-2">
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
    </DashboardLayout>
  )
} 