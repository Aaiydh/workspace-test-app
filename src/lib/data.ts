export type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
  stock: number
}

export type Quotation = {
  id: string
  productId: string
  customerName: string
  quantity: number
  totalPrice: number
  status: 'pending' | 'approved' | 'rejected'
  date: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Office Desk",
    description: "Modern ergonomic office desk",
    price: 299.99,
    category: "Furniture",
    stock: 15
  },
  {
    id: "2",
    name: "Executive Chair",
    description: "Premium leather executive chair",
    price: 499.99,
    category: "Furniture",
    stock: 10
  },
  {
    id: "3",
    name: "Filing Cabinet",
    description: "3-drawer metal filing cabinet",
    price: 199.99,
    category: "Storage",
    stock: 20
  },
  {
    id: "4",
    name: "Desk Lamp",
    description: "LED desk lamp with adjustable brightness",
    price: 49.99,
    category: "Lighting",
    stock: 30
  },
  {
    id: "5",
    name: "Whiteboard",
    description: "Large magnetic whiteboard",
    price: 129.99,
    category: "Office Supplies",
    stock: 8
  }
]

export const quotations: Quotation[] = [
  {
    id: "1",
    productId: "1",
    customerName: "John Smith",
    quantity: 2,
    totalPrice: 599.98,
    status: "pending",
    date: "2024-02-20"
  },
  {
    id: "2",
    productId: "2",
    customerName: "Sarah Johnson",
    quantity: 1,
    totalPrice: 499.99,
    status: "approved",
    date: "2024-02-19"
  },
  {
    id: "3",
    productId: "3",
    customerName: "Mike Williams",
    quantity: 3,
    totalPrice: 599.97,
    status: "rejected",
    date: "2024-02-18"
  },
  {
    id: "4",
    productId: "4",
    customerName: "Emily Brown",
    quantity: 5,
    totalPrice: 249.95,
    status: "pending",
    date: "2024-02-17"
  },
  {
    id: "5",
    productId: "5",
    customerName: "David Wilson",
    quantity: 2,
    totalPrice: 259.98,
    status: "approved",
    date: "2024-02-16"
  }
] 