import React, { useEffect } from 'react';
import { MessageCircle, Zap, Bot } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
      };
    }
  }
}

function App() {
  useEffect(() => {
    // Ensure the script is loaded and the custom element is defined
    const checkWidget = () => {
      if (customElements.get('elevenlabs-convai')) {
        console.log('ElevenLabs widget is ready');
      } else {
        setTimeout(checkWidget, 100);
      }
    };
    checkWidget();

    // Create animated sparkles
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 3 + 's';
      sparkle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      
      const sparkleContainer = document.querySelector('.sparkle-container');
      if (sparkleContainer) {
        sparkleContainer.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
          }
        }, 5000);
      }
    };

    // Create sparkles periodically
    const sparkleInterval = setInterval(createSparkle, 800);
    
    // Create initial sparkles
    for (let i = 0; i < 15; i++) {
      setTimeout(createSparkle, i * 200);
    }

    return () => {
      clearInterval(sparkleInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Sparkle Background */}
      <div className="sparkle-container fixed inset-0 pointer-events-none z-0"></div>
      
      {/* Header */}
      <header className="relative z-10 bg-black/90 backdrop-blur-sm shadow-lg shadow-yellow-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AI Buddy</h1>
                <p className="text-sm text-yellow-500">Built by Dhiraj</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Real-time AI</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Natural Conversation</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Welcome Section */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-500 bg-clip-text text-transparent pb-3">
              Start Conversing
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience the future of AI conversation with advanced natural language processing
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-gray-900/50 rounded-xl p-6 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Natural Dialogue</h3>
              <p className="text-gray-400 text-sm">Engage in fluid, human-like conversations with advanced AI</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Response</h3>
              <p className="text-gray-400 text-sm">Get instant, intelligent responses with minimal latency</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Bot className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart AI</h3>
              <p className="text-gray-400 text-sm">Powered by cutting-edge language models and voice synthesis</p>
            </div>
          </div>

          {/* AI Widget Container */}
          <div className="bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-black/60 hover:shadow-yellow-500/10 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-yellow-500 font-medium">AI Assistant Ready</span>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* ElevenLabs Conversational AI Widget */}
              {/* <div className="flex justify-center">
                <elevenlabs-convai agent-id="agent_8101k0ve2hneftw80c1mv0pe6zyp"></elevenlabs-convai>
              </div> */}
              
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Click the button <span className='text-yellow-500 font-medium'>Call icon</span>  to start your conversation. The AI assistant is ready to help with any questions or tasks you might have.
              </p>
            </div>
          </div>
        </div>
         <div className="flex justify-center">
                <elevenlabs-convai agent-id="agent_8101k0ve2hneftw80c1mv0pe6zyp"></elevenlabs-convai>
          </div>
      </main>

      {/* Footer */}
      <footer className="relative z-0 bg-black/90 backdrop-blur-sm shadow-lg shadow-yellow-500/10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-center sm:text-left">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center shadow-md shadow-yellow-500/30">
                <Bot className="w-4 h-4 text-black" />
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">© 2025 AI Buddy-Conversational AI.</span>
            </div>
            <div className="text-gray-500 text-sm text-center sm:text-right">
              Designed and developed by <span className='text-yellow-500'>Dhiraj Sah</span>.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;