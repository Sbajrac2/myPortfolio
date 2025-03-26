
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { Twitter, MessageCircle, Heart } from 'lucide-react';

const fakeTweets = [
  {
    id: 1,
    username: 'DebuggerX',
    handle: '@DebuggerX',
    content: "Just reviewed sbajrac2's PR—flawless!",
    likes: 42,
    replies: 5,
    avatar: '/avatars/debugger.svg'
  },
  {
    id: 2,
    username: 'NeonCoder',
    handle: '@NeonCoder',
    content: "MODIT2.0 is just... chef's kiss.",
    likes: 38,
    replies: 3,
    avatar: '/avatars/neon.svg'
  },
  {
    id: 3,
    username: 'CodeKnight',
    handle: '@CodeKnight',
    content: "Who is this girl and how is her full stack so clean??",
    likes: 56,
    replies: 8,
    avatar: '/avatars/knight.svg'
  }
];

const TweetPanel = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="manga-panel p-6"
    >
      <div className="flex items-center mb-4 space-x-2">
        <Twitter className="w-6 h-6 text-[#1DA1F2]" />
        <h3 className="font-manga text-xl">DEV TWEETS</h3>
      </div>
      
      <div className="space-y-4">
        {fakeTweets.map((tweet) => (
          <motion.div 
            key={tweet.id}
            variants={fadeUp}
            className="border dark:border-panel-border rounded-lg p-4 bg-white dark:bg-panel/80"
          >
            <div className="flex space-x-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden flex-shrink-0">
                {/* Fallback avatar if image fails to load */}
                <span className="font-manga text-lg">{tweet.username[0]}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-baseline">
                  <h4 className="font-bold">{tweet.username}</h4>
                  <span className="ml-2 text-gray-500 text-sm">{tweet.handle}</span>
                </div>
                
                <p className="mt-1">{tweet.content}</p>
                
                <div className="flex items-center mt-3 text-gray-500 space-x-6">
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">{tweet.replies}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span className="text-xs">{tweet.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TweetPanel;
