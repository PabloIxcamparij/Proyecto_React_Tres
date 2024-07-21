import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage)
  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    loadFromStorage()

    showNotification({
      text: "Se han cargado el localStorage",
      error: false,
    });

  }, [loadFromStorage])


  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>

      <Modal/>
      <Notification/>
    </>
  );
}
