/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { StayPage } from './pages/StayPage';
import { DayOutingPage } from './pages/DayOutingPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogsPage } from './pages/BlogsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingType, setBookingType] = useState<'stay' | 'day-outing'>('stay');
  const [bookingItemId, setBookingItemId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (type: 'stay' | 'day-outing' = 'stay', itemId?: string) => {
    setBookingType(type);
    setBookingItemId(itemId);
    setIsBookingOpen(true);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B1810]">
      {/* Universal Top Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'stay' && (
          <StayPage
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'day-outing' && (
          <DayOutingPage
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'activities' && (
          <ActivitiesPage
            onOpenBooking={() => handleOpenBooking('stay')}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage />
        )}
        {currentPage === 'blogs' && (
          <BlogsPage />
        )}
        {currentPage === 'about-us' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('stay')}
          />
        )}
        {currentPage === 'contact-us' && (
          <ContactPage />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('stay')}
      />

      {/* Floating Action Buttons (WhatsApp, Phone, Instant Booking) */}
      <FloatingActions
        onOpenBooking={() => handleOpenBooking('stay')}
      />

      {/* Universal Booking & Tariff Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialType={bookingType}
        initialItemId={bookingItemId}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
