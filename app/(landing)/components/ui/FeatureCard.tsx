import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconColor?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = '',
  iconColor = 'text-green-400'
}: FeatureCardProps) {
  return (
    <div className={`bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-slate-700/50 hover:border-green-600/50 hover:shadow-lg hover:shadow-green-900/20 transition-all ${className}`}>
      <div className={`w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 ${iconColor}`}>
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}
