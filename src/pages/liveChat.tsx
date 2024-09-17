// components/CrispChat.tsx

import { useEffect } from 'react';

const CrispChat: React.FC = () => {
  useEffect(() => {
    // Create a script element and add it to the document
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);

    // Set Crisp website ID
    const crispSettings = document.createElement('script');
    crispSettings.type = 'text/javascript';
    crispSettings.innerHTML = `
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "ab2176a0-a3fa-4b73-9100-320621bfde0f";
    `;
    document.head.appendChild(crispSettings);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(crispSettings);
    };
  }, []);

  return null 
};

export default CrispChat;
