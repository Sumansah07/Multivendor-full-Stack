"use client"
import React, { useState } from 'react'
import { FaTruck } from 'react-icons/fa'
import OrdersTable from '@/components/OrdersTable'

const OnTheWayOrdersPage = () => {
  const [orders] = useState(
    Array(14).fill().map((_, i) => ({
      id: `ORD${String(i + 1).padStart(3, '0')}`,
      customer: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'Robert Brown'][i % 5],
      date: new Date(2024, 1, 20 - (i % 10)).toISOString().split('T')[0],
      amount: `₹${(Math.floor(Math.random() * 5000) + 500).toLocaleString()}`,
      status: 'On The Way'
    }))
  );

  return (
    <OrdersTable
      title="Orders On The Way"
      description="View and manage orders that are out for delivery"
      orders={orders}
      icon="/icons/delivery.png"
      statusIcon={FaTruck}
    />
  );
};

export default OnTheWayOrdersPage;
