import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';
import { Truck, MapPin, Route, Clock, Calendar, Box } from 'lucide-react';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const DeliveryMap = () => {
  const [center] = useState<[number, number]>([51.505, -0.09]);
  const [deliveryPoints] = useState([
    {
      position: [51.505, -0.09],
      name: 'Central Warehouse',
      type: 'warehouse'
    },
    {
      position: [51.51, -0.1],
      name: 'Downtown Shelter',
      type: 'destination'
    },
    {
      position: [51.49, -0.08],
      name: 'Food Bank',
      type: 'destination'
    }
  ]);

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {deliveryPoints.map((point, index) => (
        <Marker
          key={index}
          position={point.position as [number, number]}
        >
          <Popup>
            <div>
              <h3 className="font-bold">{point.name}</h3>
              <p className="text-sm">{point.type}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

const LogisticsPage: React.FC = () => {
  const { theme } = useTheme();
  
  const routes = [
    {
      id: 'R001',
      name: 'Downtown Route',
      stops: 4,
      status: 'In Progress',
      eta: '1h 15m',
      driver: 'John Smith',
      items: 12,
    },
    {
      id: 'R002',
      name: 'East Side Delivery',
      stops: 6,
      status: 'Scheduled',
      eta: '3h 30m',
      driver: 'Maria Garcia',
      items: 24,
    },
    {
      id: 'R003',
      name: 'North County Drop-offs',
      stops: 3,
      status: 'Completed',
      eta: '0h 0m',
      driver: 'David Johnson',
      items: 8,
    },
  ];
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Progress':
        return <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          theme === 'dark' ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
        }`}>{status}</span>;
      case 'Scheduled':
        return <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          theme === 'dark' ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
        }`}>{status}</span>;
      case 'Completed':
        return <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
        }`}>{status}</span>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Logistics Management</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
        Optimize the delivery of donations with our AI-powered logistics system. Plan efficient routes, track deliveries in real-time, and minimize transportation costs.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card title="Route Map" subtitle="Live tracking of all delivery routes">
            <DeliveryMap />
            
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Routes</p>
                <p className="text-lg font-semibold">2</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Stops</p>
                <p className="text-lg font-semibold">13</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Items in Transit</p>
                <p className="text-lg font-semibold">36</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Completed Today</p>
                <p className="text-lg font-semibold">3</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <Card title="Upcoming Pickups" subtitle="Scheduled donation pickups">
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Winter Clothing Donation</span>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    theme === 'dark' ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}>
                    Today
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <p>Tuesday, April 16, 2025</p>
                    <p className="text-gray-500">2:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <MapPin size={16} className="text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <p>123 Main Street, Apt 4B</p>
                    <p className="text-gray-500">Downtown, CA 90210</p>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Office Furniture</span>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    theme === 'dark' ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'
                  }`}>
                    Tomorrow
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <p>Wednesday, April 17, 2025</p>
                    <p className="text-gray-500">10:00 AM - 12:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <MapPin size={16} className="text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <p>456 Business Plaza, Suite 200</p>
                    <p className="text-gray-500">Financial District, CA 90211</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                >
                  View All Scheduled Pickups
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <Card title="Delivery Routes" subtitle="AI-optimized routes for efficient delivery">
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${
            theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'
          }`}>
            <thead className={theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Route
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Driver
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Stops
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Items
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  ETA
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y ${
              theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'
            }`}>
              {routes.map((route) => (
                <tr key={route.id} className={`${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                } transition-colors`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                        <Route className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">{route.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{route.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {route.driver}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(route.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-gray-400" />
                      {route.stops} stops
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Box size={16} className="mr-2 text-gray-400" />
                      {route.items} items
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gray-400" />
                      {route.eta}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default LogisticsPage;