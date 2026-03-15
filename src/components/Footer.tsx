import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const statusMessages = [
  "PERIMETER_SECURE",
  "NODE_04_ACTIVE",
  "THREAT_SCAN_COMPLETE",
  "FIREWALL_UPDATED",
  "SOC_MONITORING",
  "ENDPOINT_VERIFIED",
  "CERT_ROTATION_OK",
  "SIEM_SYNC_ACTIVE",
];

const serviceLinks = [
  "Penetration Testing", "Virtual CISO", "SOC as a Service",
  "SOC 2 Compliance", "Zero Trust Access", "Managed Detection & Response",
];

const Footer = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const getTime = () => {
      const d = new Date();
      return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
    };

    const addLog = () => {
      const msg = statusMessages[Math.floor(Math.random() * statusMessages.length)];
      setLogs((prev) => [`[ ${getTime()} ] ${msg}`, ...prev].slice(0, 5));
    };

    addLog();
    const interval = setInterval(addLog, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="font-display text-xl font-semibold tracking-tight">
              CyberHelp<span className="text-primary">.</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Enterprise-grade cybersecurity for modern businesses. Protecting infrastructure, ensuring compliance, and securing futures.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <span className="font-mono-label text-muted-foreground">Services</span>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-foreground/70 transition-colors hover:text-foreground">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <span className="font-mono-label text-muted-foreground">Contact</span>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>contact@cyberhelp.com</li>
              <li>+91 8966030604</li>
              <li>India</li>
            </ul>
          </div>

          {/* System Status */}
          <div className="md:col-span-3">
            <span className="font-mono-label text-muted-foreground">System Status</span>
            <div className="mt-4 space-y-1.5">
              {logs.map((log, i) => (
                <motion.div
                  key={log + i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1 - i * 0.18, x: 0 }}
                  className="font-mono text-[10px] text-accent/70"
                >
                  {log}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <div className="font-mono-label text-muted-foreground">
            © 2026 CyberHelp. All rights reserved.
          </div>
          <div className="flex gap-6 font-mono-label text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
