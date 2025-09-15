// client/src/components/LanguageSelector.jsx
import React from 'react';
import { motion } from 'framer-motion';

const defaultLanguages = ['html', 'css', 'javascript', 'cpp', 'python'];

export default function LanguageSelector({ selectedLanguage, setSelectedLanguage, languages = defaultLanguages }) {
    return (
        <motion.div
            layout
            className="flex flex-wrap items-center gap-2"
        >
            {languages.map((lang) => (
                <motion.button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                        selectedLanguage === lang
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-neutral text-text dark:bg-neutral dark:text-muted hover:bg-purple-100 dark:hover:bg-neutral'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {lang.toUpperCase()}
                </motion.button>
            ))}
        </motion.div>
    );
}