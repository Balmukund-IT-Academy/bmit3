'use client'
import { useEffect } from 'react';
import AllCourse from "@/components/AllCourse";
import HomePage from "@/components/HomePage";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import WhyChooseUs from "@/components/WhyChooseUs";
import { supabase } from '@/utils/supabase';
import { collectBrowserData, getBrowserName, getDeviceName } from '@/utils/browser';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    const saveBrowserDataWithoutLocation = async () => {
      try {
        const userAgent = navigator.userAgent;
        const matches = userAgent.match(/\((.*?)\)/);
        let deviceInfo;
        if (matches) {
          deviceInfo = matches[1].split(';');
        }
        await supabase.from('visited_user_without_location').insert([
          {
            browser_name: getBrowserName(navigator.userAgent),
            device_name: getDeviceName(navigator.userAgent),
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            referrer: document.referrer,
            date: new Date().toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            day: new Date().getDay(),
            time: new Date().toLocaleTimeString(),
            brand: deviceInfo ? deviceInfo[0] : '',
            model: deviceInfo ? deviceInfo[1] : '',
          }
        ]);
      } catch (error: any) {
      }
    };

    const saveBrowserData = async (latitude: number | null = null, longitude: number | null = null) => {
      try {
        const userAgent = navigator.userAgent;
        const matches = userAgent.match(/\((.*?)\)/);
        let deviceInfo;
        if (matches) {
          deviceInfo = matches[1].split(';');
        }
        await supabase.from('visited_user').insert([
          {
            browser_name: getBrowserName(navigator.userAgent),
            device_name: getDeviceName(navigator.userAgent),
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            referrer: document.referrer,
            date: new Date().toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            day: new Date().getDay(),
            time: new Date().toLocaleTimeString(),
            latitude,
            longitude,
            brand: deviceInfo ? deviceInfo[0] : '',
            model: deviceInfo ? deviceInfo[1] : '',
          }
        ]);
      } catch (error: any) {
      }
    };

    saveBrowserDataWithoutLocation();

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            saveBrowserData(position.coords.latitude, position.coords.longitude);
          },
        );
      }
    };

    collectBrowserData();
    getLocation();
  }, []);

  return (
    <div>
      <HomePage />
      <WhyChooseUs />
      <AllCourse />
      <WhatYouWillLearn />
    </div>
  );
}
