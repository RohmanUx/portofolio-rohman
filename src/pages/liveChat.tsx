import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Replace with your actual chat widget script (for example, from Intercom, Tawk.to, etc.)
    const script = document.createElement('script');
    script.src = "https://embed.tawk.to/YOUR_TAWK_ID/default";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No JSX needed as the script handles rendering
};

export default LiveChat;
