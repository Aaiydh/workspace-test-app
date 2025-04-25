export interface Quotation {
  id: string;
  customerName: string;
  date: string;
  totalAmount: number;
  status: 'pending' | 'approved' | 'rejected';
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

export const quotations: Quotation[] = [
  {
    id: 'QT001',
    customerName: 'John Smith',
    date: '2024-04-01',
    totalAmount: 1500.00,
    status: 'pending',
    items: [
      { name: 'Product A', quantity: 2, price: 500.00 },
      { name: 'Product B', quantity: 1, price: 500.00 }
    ]
  },
  {
    id: 'QT002',
    customerName: 'Sarah Johnson',
    date: '2024-04-02',
    totalAmount: 2750.00,
    status: 'approved',
    items: [
      { name: 'Product C', quantity: 3, price: 750.00 },
      { name: 'Product D', quantity: 2, price: 250.00 }
    ]
  },
  {
    id: 'QT003',
    customerName: 'Michael Brown',
    date: '2024-04-03',
    totalAmount: 1200.00,
    status: 'rejected',
    items: [
      { name: 'Product E', quantity: 4, price: 300.00 }
    ]
  },
  {
    id: 'QT004',
    customerName: 'Emily Davis',
    date: '2024-04-04',
    totalAmount: 3200.00,
    status: 'pending',
    items: [
      { name: 'Product F', quantity: 2, price: 1600.00 }
    ]
  },
  {
    id: 'QT005',
    customerName: 'David Wilson',
    date: '2024-04-05',
    totalAmount: 1800.00,
    status: 'approved',
    items: [
      { name: 'Product G', quantity: 3, price: 600.00 }
    ]
  },
  {
    id: 'QT006',
    customerName: 'Lisa Anderson',
    date: '2024-04-06',
    totalAmount: 2400.00,
    status: 'pending',
    items: [
      { name: 'Product H', quantity: 4, price: 600.00 }
    ]
  },
  {
    id: 'QT007',
    customerName: 'Robert Taylor',
    date: '2024-04-07',
    totalAmount: 1950.00,
    status: 'approved',
    items: [
      { name: 'Product I', quantity: 3, price: 650.00 }
    ]
  },
  {
    id: 'QT008',
    customerName: 'Jennifer Martinez',
    date: '2024-04-08',
    totalAmount: 2800.00,
    status: 'rejected',
    items: [
      { name: 'Product J', quantity: 2, price: 1400.00 }
    ]
  },
  {
    id: 'QT009',
    customerName: 'William Garcia',
    date: '2024-04-09',
    totalAmount: 1650.00,
    status: 'pending',
    items: [
      { name: 'Product K', quantity: 3, price: 550.00 }
    ]
  },
  {
    id: 'QT010',
    customerName: 'Patricia Rodriguez',
    date: '2024-04-10',
    totalAmount: 2100.00,
    status: 'approved',
    items: [
      { name: 'Product L', quantity: 2, price: 1050.00 }
    ]
  },
  {
    id: 'QT011',
    customerName: 'James Lee',
    date: '2024-04-11',
    totalAmount: 1900.00,
    status: 'pending',
    items: [
      { name: 'Product M', quantity: 4, price: 475.00 }
    ]
  },
  {
    id: 'QT012',
    customerName: 'Linda Hernandez',
    date: '2024-04-12',
    totalAmount: 2250.00,
    status: 'approved',
    items: [
      { name: 'Product N', quantity: 3, price: 750.00 }
    ]
  },
  {
    id: 'QT013',
    customerName: 'Thomas Moore',
    date: '2024-04-13',
    totalAmount: 2600.00,
    status: 'rejected',
    items: [
      { name: 'Product O', quantity: 2, price: 1300.00 }
    ]
  },
  {
    id: 'QT014',
    customerName: 'Karen Jackson',
    date: '2024-04-14',
    totalAmount: 1750.00,
    status: 'pending',
    items: [
      { name: 'Product P', quantity: 5, price: 350.00 }
    ]
  },
  {
    id: 'QT015',
    customerName: 'Richard White',
    date: '2024-04-15',
    totalAmount: 2300.00,
    status: 'approved',
    items: [
      { name: 'Product Q', quantity: 2, price: 1150.00 }
    ]
  },
  {
    id: 'QT016',
    customerName: 'Nancy Harris',
    date: '2024-04-16',
    totalAmount: 1950.00,
    status: 'pending',
    items: [
      { name: 'Product R', quantity: 3, price: 650.00 }
    ]
  },
  {
    id: 'QT017',
    customerName: 'Charles Clark',
    date: '2024-04-17',
    totalAmount: 2450.00,
    status: 'approved',
    items: [
      { name: 'Product S', quantity: 2, price: 1225.00 }
    ]
  },
  {
    id: 'QT018',
    customerName: 'Betty Lewis',
    date: '2024-04-18',
    totalAmount: 1850.00,
    status: 'rejected',
    items: [
      { name: 'Product T', quantity: 5, price: 370.00 }
    ]
  },
  {
    id: 'QT019',
    customerName: 'Joseph Robinson',
    date: '2024-04-19',
    totalAmount: 2200.00,
    status: 'pending',
    items: [
      { name: 'Product U', quantity: 4, price: 550.00 }
    ]
  },
  {
    id: 'QT020',
    customerName: 'Sandra Walker',
    date: '2024-04-20',
    totalAmount: 2550.00,
    status: 'approved',
    items: [
      { name: 'Product V', quantity: 3, price: 850.00 }
    ]
  },
  {
    id: 'QT021',
    customerName: 'Daniel Hall',
    date: '2024-04-21',
    totalAmount: 1950.00,
    status: 'pending',
    items: [
      { name: 'Product W', quantity: 3, price: 650.00 }
    ]
  },
  {
    id: 'QT022',
    customerName: 'Margaret Allen',
    date: '2024-04-22',
    totalAmount: 2350.00,
    status: 'approved',
    items: [
      { name: 'Product X', quantity: 2, price: 1175.00 }
    ]
  }
]; 