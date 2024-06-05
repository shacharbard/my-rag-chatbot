import Image from "next/image";
import ChatComponent from "./ChatComponents";

export default function Home() {
  return (
    <div class="container max-width mx-auto bg-gradient-to-r from-indigo-600 to-indigo-200">
      
      <ChatComponent />
      
    </div>
  );
}
