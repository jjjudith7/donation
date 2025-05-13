import React from 'react';
import Card from '../components/ui/Card';
import { useTheme } from '../context/ThemeContext';
import { Calendar, BarChart, PieChart, TrendingUp, MessageSquare, Activity } from 'lucide-react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import BlockchainVisualization from '../components/analytics/BlockchainVisualization';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DonationTrendsChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Donations',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Donation Trends',
      },
    },
  };

  return <Line data={data} options={options} />;
};

const CategoryDistributionChart = () => {
  const data = {
    labels: ['Clothing', 'Food', 'Medical', 'Education'],
    datasets: [
      {
        data: [35, 28, 18, 19],
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Donation Categories',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

const PredictionAccuracyChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Accuracy',
        data: [92, 88, 93, 95, 89, 91],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'AI Prediction Accuracy',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const AnalyticsPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Analytics & Insights</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
        Gain valuable insights into donation patterns, impact metrics, and AI predictions to make data-driven decisions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Donations
              </p>
              <h3 className="text-2xl font-bold mt-1">2,856</h3>
              <p className="text-sm flex items-center mt-2 text-green-600 dark:text-green-400">
                <TrendingUp size={14} className="mr-1" />
                <span>+14.6%</span>
              </p>
            </div>
            <div className={`p-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-blue-900 bg-opacity-50' 
                : 'bg-blue-100'
            }`}>
              <BarChart size={20} className="text-blue-600" />
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Matching Accuracy
              </p>
              <h3 className="text-2xl font-bold mt-1">92.4%</h3>
              <p className="text-sm flex items-center mt-2 text-green-600 dark:text-green-400">
                <TrendingUp size={14} className="mr-1" />
                <span>+3.2%</span>
              </p>
            </div>
            <div className={`p-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-green-900 bg-opacity-50' 
                : 'bg-green-100'
            }`}>
              <Activity size={20} className="text-green-600" />
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Feedback Score
              </p>
              <h3 className="text-2xl font-bold mt-1">4.8/5</h3>
              <p className="text-sm flex items-center mt-2 text-green-600 dark:text-green-400">
                <TrendingUp size={14} className="mr-1" />
                <span>+0.3</span>
              </p>
            </div>
            <div className={`p-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-purple-900 bg-opacity-50' 
                : 'bg-purple-100'
            }`}>
              <MessageSquare size={20} className="text-purple-600" />
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Distribution Efficiency
              </p>
              <h3 className="text-2xl font-bold mt-1">86.7%</h3>
              <p className="text-sm flex items-center mt-2 text-green-600 dark:text-green-400">
                <TrendingUp size={14} className="mr-1" />
                <span>+5.1%</span>
              </p>
            </div>
            <div className={`p-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-orange-900 bg-opacity-50' 
                : 'bg-orange-100'
            }`}>
              <PieChart size={20} className="text-orange-600" />
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Donation Trends" subtitle="Monthly donation volume by category">
          <div className="w-full h-[300px]">
            <DonationTrendsChart />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Most Donated Category</p>
              <p className="text-lg font-semibold">Clothing</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Highest Growth</p>
              <p className="text-lg font-semibold">Medical Supplies</p>
            </div>
          </div>
        </Card>
        
        <Card title="Donation Distribution" subtitle="Percentage allocation across categories">
          <div className="w-full h-[300px]">
            <CategoryDistributionChart />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2 text-center">
            <div>
              <div className={`w-4 h-4 mx-auto rounded-full bg-blue-500`}></div>
              <p className="text-xs mt-1">Clothing</p>
              <p className="text-xs font-semibold">35%</p>
            </div>
            <div>
              <div className={`w-4 h-4 mx-auto rounded-full bg-green-500`}></div>
              <p className="text-xs mt-1">Food</p>
              <p className="text-xs font-semibold">28%</p>
            </div>
            <div>
              <div className={`w-4 h-4 mx-auto rounded-full bg-yellow-500`}></div>
              <p className="text-xs mt-1">Medical</p>
              <p className="text-xs font-semibold">18%</p>
            </div>
            <div>
              <div className={`w-4 h-4 mx-auto rounded-full bg-red-500`}></div>
              <p className="text-xs mt-1">Other</p>
              <p className="text-xs font-semibold">19%</p>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card title="AI Prediction Accuracy" subtitle="Model performance metrics">
          <div className="w-full h-[250px]">
            <PredictionAccuracyChart />
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Demand Prediction</span>
              <div className="flex items-center">
                <span className="font-medium mr-2">92%</span>
                <div className="w-32 h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Matching Accuracy</span>
              <div className="flex items-center">
                <span className="font-medium mr-2">94%</span>
                <div className="w-32 h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Category Recognition</span>
              <div className="flex items-center">
                <span className="font-medium mr-2">89%</span>
                <div className="w-32 h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Recent Activity" subtitle="Latest platform events">
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'
                }`}>
                  <Calendar size={16} className="text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">New Donation Matched</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Winter Clothing donation matched with Eastside Shelter</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">15 minutes ago</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-green-900' : 'bg-green-100'
                }`}>
                  <TrendingUp size={16} className="text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">AI Model Updated</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Matching algorithm improved with new training data</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-purple-900' : 'bg-purple-100'
                }`}>
                  <MessageSquare size={16} className="text-purple-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Feedback Received</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Hope Community Center rated their experience 5/5</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">5 hours ago</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-yellow-900' : 'bg-yellow-100'
                }`}>
                  <Activity size={16} className="text-yellow-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">New Demand Prediction</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Medical supplies demand forecasted to increase by 24%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Blockchain Activity" subtitle="Real-time visualization of donation transactions">
          <div className="h-[250px]">
            <BlockchainVisualization />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Blocks</p>
              <p className="text-lg font-semibold">1,284</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Transactions</p>
              <p className="text-lg font-semibold">8,392</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Network Health</p>
              <p className="text-lg font-semibold text-green-500">98.5%</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;