import { useState, useEffect } from "react";
import { CheckCircle, MapPin } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  location: string;
  service: string;
}

const notifications: Notification[] = [
  { id: 1, name: "Sarah M.", location: "Kirkland", service: "roof cleaning" },
  { id: 2, name: "Mike T.", location: "Bellevue", service: "gutter cleaning" },
  { id: 3, name: "Jennifer L.", location: "Seattle", service: "moss treatment" },
  { id: 4, name: "David P.", location: "Redmond", service: "pressure washing" },
  { id: 5, name: "Emily R.", location: "Sammamish", service: "roof cleaning" },
];

const LiveBookingNotification = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't show on mobile
    if (window.innerWidth < 768) return;

    const showNotification = () => {
      // Random notification from the list
      const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotif);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 8 seconds
    const initialTimeout = setTimeout(showNotification, 8000);

    // Then show every 30-45 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 30000 + Math.random() * 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-24 left-6 z-50 animate-slide-in-left">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900">
              {currentNotification.name} just booked {currentNotification.service}
            </p>
            <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" />
              {currentNotification.location}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              A few minutes ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBookingNotification;
