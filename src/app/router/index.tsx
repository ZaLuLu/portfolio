import React, { Suspense } from 'react';
import { createBrowserRouter, Outlet, ScrollRestoration } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { GatewayPage } from '@/experiences/gateway/GatewayPage';
import { PortfolioPage } from '@/experiences/editorial/PortfolioPage';
import { CaseStudyPage } from '@/experiences/editorial/CaseStudyPage';
import { PuzzlePage } from '@/experiences/puzzle/PuzzlePage';
import { ResumePage } from '@/experiences/resume/ResumePage';
import { Loader2 } from 'lucide-react';

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center text-[#EB0E31]">
    <Loader2 className="w-6 h-6 animate-spin" />
  </div>
);

// Standard layout with Navigation & Footer for editorial, resume, and puzzle pages
const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

// Gateway layout has isolated full-viewport CRT immersion without top navbar
const GatewayLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <ScrollRestoration />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GatewayLayout />,
    children: [
      {
        index: true,
        element: <GatewayPage />,
      },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'portfolio/work/:slug',
        element: <CaseStudyPage />,
      },
      {
        path: 'puzzle',
        element: <PuzzlePage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
      {
        path: '*',
        element: <PortfolioPage />,
      },
    ],
  },
]);
