import User from "./user.controller";
import Notification from "./notification.controller";

export default {
    userCreate: User.create,
    userViewNotifications: User.view,
    userSendNotification: Notification.send,
    userReadNotification: Notification.read
};