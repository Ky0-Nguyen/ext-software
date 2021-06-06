import { Notifications, Notification } from 'react-native-notifications';
class NotificationHelpers {

  checkPermission = () => {
    Notifications.ios.checkPermissions().then((currentPermissions) => {
      console.log('Badges enabled: ' + !!currentPermissions.badge);
      console.log('Sounds enabled: ' + !!currentPermissions.sound);
      console.log('Alerts enabled: ' + !!currentPermissions.alert);
    });
  }

  registerRemoteNotifications = () => {
    Notifications.registerRemoteNotifications();
  }

  registerNotificationReceivedForeground = () => {
    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
      completion({ alert: false, sound: false, badge: false });
    });
  }

  registerNotificationOpened = () => {
    Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
      completion();
    });
  }

  getInitialNotification = () => {
    Notifications.getInitialNotification()
      .then((notification) => {
        console.log("Initial notification was:", (notification ? notification.payload : 'N/A'));
      })
      .catch((err) => console.error("getInitialNotifiation() failed", err));
  }
}

const notificationHelper = new NotificationHelpers()
export { notificationHelper }