import { Stack } from "expo-router";
import React from "react";

function Layout() {
  return  <Stack   screenOptions={{
          headerShown: false,
          presentation: "modal",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animation: "slide_from_right",
       
        }} />
   
      
}

export default Layout;
