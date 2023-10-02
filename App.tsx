import { StatusBar } from "expo-status-bar";
import { ModalPortal } from 'react-native-modals';
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <Routes />
      <ModalPortal />
      <StatusBar backgroundColor={"transparent"} style="light" translucent />
    </>
  );
}
