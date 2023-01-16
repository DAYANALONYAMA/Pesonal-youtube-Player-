import React from "react";

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();
  const onNotification = (notification) => navigate(notification.cta.data.url);

  return (
    <div>
      <NovuProvider subscriberId="" applicationIdentifier="">
        <PopoverNotificationCenter
          onNotificationClick={onNotificationClick}
          colorScheme="light"
        >
          {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
        </PopoverNotificationCenter>
      </NovuProvider>
    </div>
  );
};
