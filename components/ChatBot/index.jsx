'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CollectChatScript = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Skip chat bot on specific page
    if (pathname === "/ai-powered-marketing") return;

    // Load Collect.chat script
    (function (w, d) {
      w.CollectId = "5cd12ddee1d07210896b7fc9";
      var h = d.head || d.getElementsByTagName("head")[0];
      var s = d.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.setAttribute("src", "https://collectcdn.com/launcher.js");
      h.appendChild(s);
    })(window, document);

    // Cleanup script on unmount
    return () => {
      const script = document.querySelector(
        'script[src="https://collectcdn.com/launcher.js"]'
      );
      if (script) {
        script.parentNode.removeChild(script);
      }
    };
  }, [pathname]);

  // If on excluded page, don't inject styles either
  if (pathname === "/ai-powered-marketing") return null;

  return (
    <>
      <style>
        {`
          #chat-bot-launcher-container.chat-bot-avatar-launcher, #chat-bot-launcher-container.chat-bot-launcher-notext {
            z-index: 5;
            top: 83%;
            padding: 20px;
          }

          div#chat-bot-launcher-button {
            background-image: url('/images/chat_bot.svg') !important;
            background-size: cover;
          }

          @media(max-width: 767px) {
            #chat-bot-launcher-container.chat-bot-avatar-launcher,
            #chat-bot-launcher-container.chat-bot-launcher-notext {
              top: 65%;
              padding-top: 45px;
              padding-bottom: 45px;
            }
          }
        `}
      </style>
    </>
  );
};

export default CollectChatScript;
