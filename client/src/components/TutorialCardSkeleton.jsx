// client/src/components/TutorialCardSkeleton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TutorialCardSkeleton = () => {
    return (
        <motion.div
            className="flex flex-col border border-gray-700 rounded-lg overflow-hidden shadow-lg animate-pulse bg-neutral"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Thumbnail Placeholder */}
            <div className="w-full h-48 bg-neutral"></div>

            <div className="p-4 flex-grow flex flex-col">
                {/* Title Placeholder */}
                <div className="h-6 bg-neutral rounded-md mb-2 w-3/4"></div>
                {/* Description Placeholder */}
                <div className="h-4 bg-neutral rounded-md mt-1 w-full"></div>
                <div className="h-4 bg-neutral rounded-md mt-2 w-5/6"></div>

                {/* Category Tag Placeholder */}
                <div className="mt-4">
                    <div className="h-5 w-24 bg-neutral rounded-full"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default TutorialCardSkeleton;