import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { MeetingProvider } from './context/MeetingContext';

// Layouts
import { PublicLayout } from './layouts/PublicLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

// Pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { MeetingsPage } from './pages/MeetingsPage';
import { CreateMeetingPage } from './pages/CreateMeetingPage';
import { LiveMeetingPage } from './pages/LiveMeetingPage';
import { ParticipantsPage } from './pages/ParticipantsPage';
import { MeetingPhotosPage } from './pages/MeetingPhotosPage';
import { MinutesPage } from './pages/MinutesPage';
import { ActionItemsPage } from './pages/ActionItemsPage';
import { MeetingMemoryPage } from './pages/MeetingMemoryPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { SettingsPage } from './pages/SettingsPage';

// Protected Route Guard Wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default function App() {
  return (
    <AuthProvider>
      <MeetingProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            {/* Authenticated Dashboard Routes */}
            <Route
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/meetings" element={<MeetingsPage />} />
              <Route path="/meetings/new" element={<CreateMeetingPage />} />
              <Route path="/live-meeting" element={<LiveMeetingPage />} />
              <Route path="/participants" element={<ParticipantsPage />} />
              <Route path="/photos" element={<MeetingPhotosPage />} />
              <Route path="/minutes" element={<MinutesPage />} />
              <Route path="/action-items" element={<ActionItemsPage />} />
              <Route path="/memory" element={<MeetingMemoryPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>

            {/* Catch-all redirect to home landing page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </MeetingProvider>
    </AuthProvider>
  );
}
