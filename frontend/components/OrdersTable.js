//added by rajip
"use client"
import React, { useState, useMemo } from 'react';
import { FaSearch, FaFileExport, FaClock, FaExclamationCircle } from 'react-icons/fa';
import Image from 'next/image';
import { filterOrdersByCustomer } from '@/utils/searchUtils';

const OrdersTable = ({ 
  title, 
  description, 
  orders, 
  icon = "/icons/order.png",
  statusIcon: StatusIcon = FaClock,
  showScheduledDate = false,
  showActions = false,
  ActionButton = null
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Filter orders based on search term
  const filteredOrders = useMemo(() => {
    try {
      return filterOrdersByCustomer(orders, searchTerm);
    } catch (error) {
      console.error('Error filtering orders:', error);
      return [];
    }
  }, [orders, searchTerm]);

  const handleSearch = (e) => {
    setIsSearching(true);
    setSearchTerm(e.target.value);
    setTimeout(() => setIsSearching(false), 300);
  };

  // Empty state component
  const EmptyState = () => (
    <tr>
      <td colSpan={showActions ? "6" : "5"} className="px-6 py-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <FaExclamationCircle className="text-gray-400 text-3xl mb-2" />
          <p className="text-gray-500 text-lg">
            {searchTerm
              ? `No orders found matching "${searchTerm}"`
              : `No ${title.toLowerCase()} available`}
          </p>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="p-2">
      {/* Header with Icon */}
      <div className="flex items-center mb-6">
        <div className="relative w-8 h-8 mr-3 rounded-full">
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
        {/* Search and Export Section */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search by customer name..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            {isSearching && (
              <div className="absolute right-3 top-3">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-teal-500"></div>
              </div>
            )}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-teal-800 border border-teal-800 rounded-lg hover:bg-teal-50 ml-4">
            <FaFileExport />
            Export
          </button>
        </div>

        <div className="max-h-[600px] overflow-y-auto">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order Date</th>
                {showScheduledDate && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Scheduled Date</th>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                {showActions && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    {showScheduledDate && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.scheduledDate}</td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                      <StatusIcon className="text-yellow-500 mr-2" /> {order.status}
                    </td>
                    {showActions && ActionButton && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <ActionButton order={order} />
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <EmptyState />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable; 