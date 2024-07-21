import { StateCreator } from "zustand";
import { FavoritesSliceTypes } from "./favoritesSlice";

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSliceTypes = {
  notification: Notification;
  showNotification: (playload: Pick<Notification, "text" | "error">) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<NotificationSliceTypes & FavoritesSliceTypes, [], [], NotificationSliceTypes> = (
  set,
  get,
  api,
) => ({
  notification: {
    text: "",
    error: false,
    show: false,
  },
  showNotification: (playload) => {
    set({
      notification: {
        text: playload.text,
        error: playload.error,
        show: true,
      },
    });
    setTimeout(()=>{
      get().hideNotification()
    }, 3000)
  },
  hideNotification: () => {
    set({
      notification: {
        text: "",
        error: false,
        show: false,
      },
    });
  },
});
