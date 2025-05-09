import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F7F5] via-[#E6EBE0] to-[#DDE2C6] flex flex-col items-center justify-center px-6 text-center">
      
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/cego-logo.png"
          alt="Logo Cègo"
          width={160}
          height={160}
        />
      </motion.div>

      <motion.h1
        className="text-5xl font-bold mb-4 tracking-tight text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Livraison fluide. Choisis ton rythme avec <span className="text-green-600">Cègo</span>
      </motion.h1>

      <motion.p
        className="text-xl text-gray-700 max-w-xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Un système malin, flexible et économique pour récupérer tes colis comme tu veux, quand tu veux.
      </motion.p>

      <motion.a
        href="https://t.me/gabriel_sante_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg flex items-center justify-center transition"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        Se lancer <ArrowRight className="ml-2" />
      </motion.a>

      <footer className="mt-16 text-sm text-gray-500">
        © 2025 Cègo. Livraison pensée pour toi.
      </footer>
    </div>
  );
}
