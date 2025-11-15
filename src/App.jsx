import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ContentCalendar from './pages/ContentCalendar';
import CampaignsActive from './pages/CampaignsActive';
import EmailSequences from './pages/EmailSequences';
import SocialInstagram from './pages/SocialInstagram';
import AnalyticsOverview from './pages/AnalyticsOverview';
import Integrations from './pages/Integrations';
import Settings from './pages/Settings';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Header 
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          pageTitle={currentPage}
        />
        
        <main className="p-6">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={
                <motion.div
                  key="dashboard"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <Dashboard onPageChange={setCurrentPage} />
                </motion.div>
              } />
              <Route path="/content/calendar" element={
                <motion.div
                  key="calendar"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <ContentCalendar />
                </motion.div>
              } />
              <Route path="/campaigns/active" element={
                <motion.div
                  key="campaigns"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <CampaignsActive />
                </motion.div>
              } />
              <Route path="/email-courses/sequences" element={
                <motion.div
                  key="email"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <EmailSequences />
                </motion.div>
              } />
              <Route path="/social/instagram" element={
                <motion.div
                  key="instagram"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <SocialInstagram />
                </motion.div>
              } />
              <Route path="/analytics/overview" element={
                <motion.div
                  key="analytics"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <AnalyticsOverview />
                </motion.div>
              } />
              <Route path="/integrations" element={
                <motion.div
                  key="integrations"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <Integrations />
                </motion.div>
              } />
              <Route path="/settings" element={
                <motion.div
                  key="settings"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <Settings />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;